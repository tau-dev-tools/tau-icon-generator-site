import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Wand2, Download, Zap, ImageIcon, Layers, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              AI-Powered Icon Generation
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Create Stunning Icons for{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Any Project
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-12 text-balance max-w-2xl mx-auto leading-relaxed">
              Generate professional custom icons in seconds using DALL-E AI technology. Perfect for apps, games,
              websites, and any creative project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                <Link href="/product#purchase">
                  Get Started - $20 One-Time
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Link href="/product">Learn More</Link>
              </Button>
            </div>

            <div className="mt-8 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground">No subscriptions • No hidden fees • Pay once, use forever</p>
              <p className="text-sm text-muted-foreground mt-2">
                Plus OpenAI API usage: $10-20/month generates hundreds of icons
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Honest Pricing, No Tricks</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We believe in transparent pricing. Why pay $30-50/month subscriptions to generate a couple of icons? With
              TAU Icon Generator, you pay <span className="text-foreground font-semibold">$20 once</span> for the app,
              then only pay OpenAI directly for what you actually use.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">$10-20 in OpenAI credits</span> lets you generate{" "}
              <span className="text-foreground font-semibold">hundreds of icons each month</span>. No middleman markup,
              no forced subscriptions. We're here to help creators, not to rip you off with recurring charges for
              something you'll use occasionally.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to create professional icons for your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wand2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Generation</h3>
                <p className="text-muted-foreground">
                  Leverage DALL-E 3 to create unique, high-quality icons from simple text descriptions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Background Removal</h3>
                <p className="text-muted-foreground">
                  Automatically remove backgrounds with built-in rembg integration for clean, transparent icons
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prompt Refinement</h3>
                <p className="text-muted-foreground">
                  GPT-4o automatically enhances your prompts for better, more detailed icon results
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1024x1024 Resolution</h3>
                <p className="text-muted-foreground">
                  Generate high-resolution icons perfect for any application or game project
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Export</h3>
                <p className="text-muted-foreground">
                  Save icons directly to your preferred location with customizable file names
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
                <p className="text-muted-foreground">Works seamlessly on Windows and macOS for maximum flexibility</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unity Developers CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Unity Developer?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                While TAU Icon Generator works for any project, we also offer a complete suite of development tools
                designed specifically for Unity creators
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                <a href="https://tau-dev-tools.github.io/tau-info/index.html" target="_blank" rel="noopener noreferrer">
                  Explore TAU Developer Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Amazing Icons?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant access to TAU Icon Generator for just $20. One-time payment, no subscriptions, lifetime access.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
            <Link href="/product#purchase">
              Purchase Now - $20
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
