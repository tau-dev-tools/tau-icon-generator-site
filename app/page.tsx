import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Download, ImageIcon, ImagePlus, Layers, LayoutTemplate, Wand2, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <img src="/appicon.png" alt="" aria-hidden="true" className="h-8 w-8" />
              Production-ready icons for developers
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Generate Complete Icon Packs in Minutes — Or Full{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                AppIcon Sets
              </span>{" "}
              in One Click
            </h1>

            <p className="text-xl text-muted-foreground mb-12 text-balance max-w-2xl mx-auto leading-relaxed">
              Create 20–30 matching icons in one consistent style, or generate a single icon and export full iOS,
              Android, Web, and Unity icon sets automatically.
            </p>

            <p className="text-lg text-muted-foreground mb-4 text-balance max-w-2xl mx-auto">
              What used to take hours of design work can now be done in minutes.
            </p>

            <p className="text-lg text-muted-foreground mb-12 text-balance max-w-2xl mx-auto">
              Create complete icon packs in minutes — instead of hours of manual design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                <Link href="/guide">
                  Generate Your First Icon
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Link href="/product#purchase">Buy Once — No Subscription</Link>
              </Button>
            </div>

            <div className="mt-8 max-w-2xl mx-auto text-left">
              <div className="grid gap-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>One-time purchase</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>macOS application (Apple Silicon & Intel)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>Works with your own OpenAI key</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>Typical OpenAI usage: $10–20 generates hundreds of icons. You control usage and costs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>Setup takes less than 1 minute</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Clarity */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Workflows. One Tool.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Icon Packs</h3>
                <div className="grid gap-3 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Generate 20–30 matching icons in one style</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Export production-ready PNGs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Perfect for menus, dashboards, and full UI systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">App Icons</h3>
                <div className="grid gap-3 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Generate a single icon</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Export complete platform icon sets automatically</span>
                  </div>
                  <div className="pl-7 text-sm">iOS AppIcon • Android adaptive icons • Web / Unity sizes</div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Ready to drop into your project</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Designing Icons One by One</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Developers waste hours:</h3>
                <div className="grid gap-3 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Searching for matching icons</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Fixing inconsistent styles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Adjusting colors and proportions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">With TAU Icon Generator:</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Describe your style once. Generate a full set of matching icons automatically.
                </p>
                <div className="grid gap-3 text-muted-foreground mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Same colors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Same geometry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Same visual language</span>
                  </div>
                </div>

                <div className="h-px bg-border/50 my-6" aria-hidden="true" />

                <p className="text-sm font-semibold text-foreground mb-3">Perfect for:</p>
                <div className="grid gap-3 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Sidebars</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Menus</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Dashboards</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Game UI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Full app interfaces</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto mt-6">
            <Card className="bg-card border-border/50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Traditional workflow:</h3>
                    <div className="grid gap-3 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Search icon libraries</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Adjust colors and sizes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Fix style inconsistencies</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Export platform sizes</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">With TAU Icon Generator:</h3>
                    <div className="grid gap-3 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Describe style once</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Generate full set instantly</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                        <span>Export and integrate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Developers Use TAU Icon Generator */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Developers Use TAU Icon Generator</h2>
          </div>

          <Card className="bg-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-10">
              <div className="grid gap-4 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Create 30 icons in minutes instead of hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Generate full AppIcon sets without manual resizing</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>No designer required for MVPs or internal tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Keep your UI visually consistent</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Ship faster</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Where TAU Icon Generator Fits */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Where TAU Icon Generator Fits in Your Workflow</h2>
          </div>

          <Card className="bg-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm font-semibold text-foreground mb-4">Perfect for:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>MVP development</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Indie apps and games</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>App Store launches</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Admin dashboards and internal tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Replacing inconsistent icon sets</span>
                </div>
              </div>

              <div className="h-px bg-border/50 my-6" aria-hidden="true" />

              <p className="text-muted-foreground leading-relaxed">
                If you need consistent icons fast — TAU Icon Generator removes hours of design work.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Go From Idea to Production Icons</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to create icon packs ready to integrate into your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Icon Export for Platforms</h3>
                <p className="text-muted-foreground">
                  Export size sets from a single icon for iOS, Android, Web (manifest + favicons), and Unity
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">One-Click Background Removal</h3>
                <p className="text-muted-foreground">
                  Built-in rembg integration removes backgrounds for clean, transparent icons
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Generation Of Consistent Style Icon Sets</h3>
                <p className="text-muted-foreground">
                  Batch icon packs with consistent style across all icons using shared visual language
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wand2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regenerate Individual Icons</h3>
                <p className="text-muted-foreground">
                  Update specific icons or their background while keeping the pack's visual style intact
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Prompt Refinement</h3>
                <p className="text-muted-foreground">
                  GPT-4o automatically enhances your prompts for better, more detailed icon results
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span aria-hidden="true" className="text-primary text-2xl leading-none font-semibold">
                    
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Native macOS App</h3>
                <p className="text-muted-foreground">Built specifically for macOS to deliver the best possible user experience</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <LayoutTemplate className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Predefined Style Templates</h3>
                <p className="text-muted-foreground">
                  Choose a predefined style template or use custom mode to define your own icon look and pack setup
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ImagePlus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Icon Generation Using Reference</h3>
                <p className="text-muted-foreground">
                  Guide icon generation using a reference image to match an existing style or direction
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
            Platform icon sets (iOS AppIcon, Android adaptive icons) are generated automatically for single icons. Icon
            packs export PNG files and platform sets can be assembled in your development environment.
          </p>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Icon Packs Generated with TAU Icon Generator</h2>
          </div>

          <div className="grid gap-10 max-w-5xl mx-auto">
            {["big-cats", "home-rituals", "productivity"].map((pack) => {
              const title =
                pack === "big-cats" ? "Big Cats Pack" : pack === "home-rituals" ? "Home Rituals Pack" : "Productivity Pack"

              const images =
                pack === "big-cats"
                  ? [
                      { src: "/examples/big-cats/leopard.png", alt: "Leopard icon" },
                      { src: "/examples/big-cats/lion.png", alt: "Lion icon" },
                      { src: "/examples/big-cats/lynx.png", alt: "Lynx icon" },
                      { src: "/examples/big-cats/cougar.png", alt: "Cougar icon" },
                      { src: "/examples/big-cats/tiger.png", alt: "Tiger icon" },
                    ]
                  : pack === "home-rituals"
                    ? [
                        { src: "/examples/home-rituals/bed.png", alt: "Bed icon" },
                        { src: "/examples/home-rituals/book.png", alt: "Book icon" },
                        { src: "/examples/home-rituals/food.png", alt: "Food icon" },
                        { src: "/examples/home-rituals/shower.png", alt: "Shower icon" },
                        { src: "/examples/home-rituals/toothbrush.png", alt: "Toothbrush icon" },
                      ]
                    : [
                        { src: "/examples/productivity/tasks.png", alt: "Tasks icon" },
                        { src: "/examples/productivity/calendar.png", alt: "Calendar icon" },
                        { src: "/examples/productivity/profile.png", alt: "Profile icon" },
                        { src: "/examples/productivity/music.png", alt: "Music icon" },
                        { src: "/examples/productivity/settings.png", alt: "Settings icon" },
                      ]

              return (
                <Card key={pack} className="bg-card border-border/50">
                  <CardContent className="p-6 md:p-10">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        24–30 icons • Generated from one prompt • One consistent style
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {images.map((img) => (
                        <div
                          key={img.src}
                          className="aspect-square rounded-lg bg-muted flex items-center justify-center overflow-hidden"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who TAU Icon Generator Is For</h2>
          </div>

          <Card className="bg-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Indie developers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Startup founders</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Unity developers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Product designers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Anyone building an MVP or internal tool</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-muted-foreground mt-6">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <span>If you need consistent icons fast — TAU Icon Generator is for you.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BYO OpenAI */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Your Own OpenAI Key — Stay in Control</h2>
          </div>

          <Card className="bg-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">No recurring fees</p>
                    <p className="text-sm">You control usage and costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Works with any OpenAI account</p>
                    <p className="text-sm">Use your existing key</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Local generation</p>
                    <p className="text-sm">Your assets stay private</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">No subscriptions</p>
                    <p className="text-sm">Pay once. Use forever.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-muted p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Typical OpenAI usage: <span className="font-semibold text-foreground">$10–20</span> generates hundreds of icons. You control usage and costs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple One-Time Purchase</h2>
          <p className="text-lg text-muted-foreground mb-4">Pay once. No subscriptions. Use forever.</p>
          <p className="text-lg text-muted-foreground">
            Create unlimited icon packs — pay only for AI usage.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
          </div>

          <Card className="bg-card border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-10">
              <div className="grid gap-4 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Generate 20–30 matching icons in one style</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Create full iOS / Android AppIcon sets in one click</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Export production-ready PNGs</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>One-time purchase — no subscription</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Works with your own OpenAI account</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Generate Icons?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Generate your first icon in minutes, then export a full pack or a complete platform icon set.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              <Link href="/guide">
                Generate Your First Icon
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <Link href="/product#purchase">Buy Once — No Subscription</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            One-time purchase — <span className="font-semibold text-foreground">$29</span><br />
            No subscription<br />
            Free 5-day demo available
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Try the full version risk-free with the 5-day demo.</p>
        </div>
      </section>
    </div>
  )
}
