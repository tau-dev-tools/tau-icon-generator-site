import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"
import pngToIco from "png-to-ico"

const projectRoot = path.resolve(process.cwd())
const inputPng = path.join(projectRoot, "public", "appicon.png")

const outputs = {
  png16: path.join(projectRoot, "favicon-16x16.png"),
  png32: path.join(projectRoot, "favicon-32x32.png"),
  apple180: path.join(projectRoot, "apple-touch-icon.png"),
  ico: path.join(projectRoot, "favicon.ico"),
  manifest: path.join(projectRoot, "site.webmanifest"),
}

async function fileExists(filePath) {
  try {
    await fs.stat(filePath)
    return true
  } catch {
    return false
  }
}

async function main() {
  if (!(await fileExists(inputPng))) {
    console.error(`Missing input: ${inputPng}`)
    process.exit(1)
  }

  const base = sharp(inputPng).ensureAlpha().resize(512, 512, { fit: "contain" })

  await base.clone().resize(16, 16).png().toFile(outputs.png16)
  await base.clone().resize(32, 32).png().toFile(outputs.png32)
  await base
    .clone()
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toFile(outputs.apple180)

  // favicon.ico: embed multiple sizes for best compatibility
  const icoPngBuffers = await Promise.all(
    [16, 24, 32, 48, 64, 128, 256].map((size) => base.clone().resize(size, size).png().toBuffer()),
  )

  const icoBuffer = await pngToIco(icoPngBuffers)
  await fs.writeFile(outputs.ico, icoBuffer)

  const manifest = {
    name: "TAU Icon Generator",
    short_name: "TAU",
    icons: [
      { src: "favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    display: "standalone",
  }
  await fs.writeFile(outputs.manifest, JSON.stringify(manifest, null, 2) + "\n", "utf8")

  console.log("Generated:")
  console.log("- favicon.ico")
  console.log("- favicon-16x16.png")
  console.log("- favicon-32x32.png")
  console.log("- apple-touch-icon.png")
  console.log("- site.webmanifest")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
