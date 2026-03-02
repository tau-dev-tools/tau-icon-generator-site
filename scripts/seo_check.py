#!/usr/bin/env python3

from __future__ import annotations

import re
import sys
from dataclasses import dataclass
from pathlib import Path


BASE_URL = "https://www.tauicongenerator.com"
EXPECTED_OG_IMAGE = f"{BASE_URL}/public/appicon.png"


@dataclass(frozen=True)
class PageExpectations:
    canonical: str
    robots: str
    require_json_ld: bool


def _read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def _head_html(html: str) -> str:
    match = re.search(r"<head\b[^>]*>([\s\S]*?)</head>", html, flags=re.IGNORECASE)
    return match.group(1) if match else html


def _has(head: str, pattern: str) -> bool:
    return re.search(pattern, head, flags=re.IGNORECASE) is not None


def _get_attr_value(head: str, tag: str, attr: str, attr_value: str, target_attr: str) -> str | None:
    # Minimal tag+attribute matcher that tolerates whitespace/order.
    # Example: <meta property="og:url" content="...">
    # Supports both single and double quotes.
    # IMPORTANT: allow apostrophes inside double-quoted values (e.g. We're).
    regex = (
        rf"<{tag}\b[^>]*\b{attr}\s*=\s*(?:\"{re.escape(attr_value)}\"|'{re.escape(attr_value)}')"
        rf"[^>]*\b{target_attr}\s*=\s*(?:\"([^\"]*)\"|'([^']*)')[^>]*>"
    )
    match = re.search(regex, head, flags=re.IGNORECASE)
    if not match:
        return None
    return match.group(1) if match.group(1) is not None else match.group(2)


def _get_link_canonical(head: str) -> str | None:
    return _get_attr_value(head, tag="link", attr="rel", attr_value="canonical", target_attr="href")


def _get_meta(head: str, name_or_property: str, value: str) -> str | None:
    # Try both name= and property= for meta.
    out = _get_attr_value(head, tag="meta", attr=name_or_property, attr_value=value, target_attr="content")
    if out:
        return out
    other = "property" if name_or_property.lower() == "name" else "name"
    return _get_attr_value(head, tag="meta", attr=other, attr_value=value, target_attr="content")


def _expected_for_page(filename: str) -> PageExpectations:
    if filename == "index.html":
        return PageExpectations(canonical=f"{BASE_URL}/", robots="index,follow,max-image-preview:large", require_json_ld=True)
    if filename == "download.html":
        return PageExpectations(canonical=f"{BASE_URL}/download.html", robots="noindex,nofollow,noarchive", require_json_ld=False)

    return PageExpectations(
        canonical=f"{BASE_URL}/{filename}",
        robots="index,follow,max-image-preview:large",
        require_json_ld=True,
    )


def check_page(path: Path) -> list[str]:
    filename = path.name
    expectations = _expected_for_page(filename)

    html = _read_text(path)
    head = _head_html(html)

    problems: list[str] = []

    canonical = _get_link_canonical(head)
    if canonical != expectations.canonical:
        problems.append(f"canonical mismatch: expected {expectations.canonical!r}, got {canonical!r}")

    robots = _get_meta(head, "name", "robots")
    if robots != expectations.robots:
        problems.append(f"robots mismatch: expected {expectations.robots!r}, got {robots!r}")

    if filename == "download.html":
        googlebot = _get_meta(head, "name", "googlebot")
        if googlebot != expectations.robots:
            problems.append(f"googlebot mismatch: expected {expectations.robots!r}, got {googlebot!r}")

    # OpenGraph + Twitter are required for public/indexable pages.
    if filename != "download.html":
        required_og = [
            ("property", "og:type"),
            ("property", "og:title"),
            ("property", "og:description"),
            ("property", "og:url"),
            ("property", "og:image"),
        ]
        for attr, key in required_og:
            if _get_meta(head, attr, key) is None:
                problems.append(f"missing meta {key!r}")

        og_url = _get_meta(head, "property", "og:url")
        if canonical and og_url and og_url != canonical:
            problems.append(f"og:url should match canonical (og:url={og_url!r}, canonical={canonical!r})")

        og_image = _get_meta(head, "property", "og:image")
        if og_image and og_image != EXPECTED_OG_IMAGE:
            problems.append(f"og:image unexpected: expected {EXPECTED_OG_IMAGE!r}, got {og_image!r}")

        required_twitter = [
            "twitter:card",
            "twitter:title",
            "twitter:description",
            "twitter:image",
        ]
        for key in required_twitter:
            if _get_meta(head, "name", key) is None:
                problems.append(f"missing meta {key!r}")

        twitter_image = _get_meta(head, "name", "twitter:image")
        if og_image and twitter_image and twitter_image != og_image:
            problems.append(
                f"twitter:image should match og:image (twitter:image={twitter_image!r}, og:image={og_image!r})"
            )

    # JSON-LD
    has_json_ld = _has(head, r"<script\b[^>]*type=(['\"])application/ld\+json\1")
    if expectations.require_json_ld and not has_json_ld:
        problems.append("missing JSON-LD (application/ld+json)")

    # Basic title/description presence
    if not _has(head, r"<title\b[\s\S]*?</title>"):
        problems.append("missing <title>")
    if _get_meta(head, "name", "description") is None:
        problems.append("missing meta description")

    return problems


def check_sitemap(root: Path) -> list[str]:
    problems: list[str] = []
    sitemap_path = root / "sitemap.xml"
    if not sitemap_path.exists():
        return ["missing sitemap.xml"]

    sitemap = _read_text(sitemap_path)
    if "download.html" in sitemap:
        problems.append("sitemap.xml includes download.html (should not)")

    # Ensure it references the base domain.
    if BASE_URL not in sitemap:
        problems.append(f"sitemap.xml does not reference {BASE_URL}")

    return problems


def check_robots(root: Path) -> list[str]:
    problems: list[str] = []
    robots_path = root / "robots.txt"
    if not robots_path.exists():
        return ["missing robots.txt"]

    robots = _read_text(robots_path)

    if f"Sitemap: {BASE_URL}/sitemap.xml" not in robots:
        problems.append("robots.txt missing sitemap directive")

    # Do NOT disallow download.html (we rely on meta noindex).
    if re.search(r"^Disallow:\s*/download\\.html\s*$", robots, flags=re.IGNORECASE | re.MULTILINE):
        problems.append("robots.txt disallows /download.html (prevents crawlers from seeing noindex)")

    return problems


def main() -> int:
    root = Path(__file__).resolve().parents[1]

    html_pages = sorted(root.glob("*.html"))
    if not html_pages:
        print("No .html pages found in repo root.")
        return 2

    failures: dict[str, list[str]] = {}

    for page in html_pages:
        page_problems = check_page(page)
        if page_problems:
            failures[page.name] = page_problems

    sitemap_problems = check_sitemap(root)
    if sitemap_problems:
        failures["sitemap.xml"] = sitemap_problems

    robots_problems = check_robots(root)
    if robots_problems:
        failures["robots.txt"] = robots_problems

    if not failures:
        print("SEO check: OK")
        return 0

    print("SEO check: FAILED")
    for name, problems in failures.items():
        print(f"\n{name}:")
        for problem in problems:
            print(f"  - {problem}")

    return 1


if __name__ == "__main__":
    raise SystemExit(main())
