import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span>TAU Icon Generator</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Professional AI-powered icon generation tool for Unity developers and designers. Create stunning custom
              icons in seconds with DALL-E technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/product" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/product#purchase" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-foreground transition-colors">
                  Setup Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://tau-dev-tools.github.io/tau-info/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  TAU Dev Tools
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TAU Icon Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
