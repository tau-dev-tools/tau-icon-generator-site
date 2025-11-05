import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, DollarSign } from "lucide-react"
import { PayPalCheckout } from "@/components/paypal-checkout"

export default function ProductPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">TAU Icon Generator</h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Professional AI-powered icon generation tool for developers, designers, and creators
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-card border-primary/20">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Transparent Pricing</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Most icon generation tools trap you in monthly subscriptions of $30-50. Need to create a few icons
                    for your app? That'll be charged every month, even if you only use it once.
                  </p>
                  <p className="text-foreground font-medium">We think that's unfair.</p>
                  <p>
                    TAU Icon Generator is a <span className="text-foreground font-semibold">one-time $20 purchase</span>
                    . After that, you only pay OpenAI directly for what you actually use—no middleman markup, no forced
                    subscriptions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">OpenAI API Costs</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You'll need your own OpenAI API key to use TAU Icon Generator. This gives you direct access to
                      OpenAI's pricing with no markup from us.
                    </p>
                  </div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">$10-20</span>
                    <span className="text-muted-foreground">per month in OpenAI credits</span>
                  </div>
                  <p className="text-foreground font-medium">
                    Generates <span className="text-primary">hundreds of icons</span> each month
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You only pay for what you generate. Use it once a month? Spend a few dollars. Need hundreds of
                    icons? Still far cheaper than subscription services.
                  </p>
                </div>
                <div className="mt-6">
                  <Link href="/guide" className="text-primary hover:underline font-medium">
                    See our complete OpenAI setup guide →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Product Details */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What's Included</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle>Core Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>DALL-E 3 integration for high-quality icon generation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>GPT-4o prompt refinement for better results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Automatic background removal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>1024x1024 high-resolution output</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle>Additional Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Native macOS application</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Customizable save locations and file names</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure API key storage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lifetime access with one-time payment</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-semibold">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Enter Your Prompt</h4>
                      <p className="text-muted-foreground">Describe the icon you want to create in simple terms</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-semibold">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">AI Refinement</h4>
                      <p className="text-muted-foreground">
                        GPT-4o automatically enhances your prompt for optimal results
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-semibold">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Generate Icon</h4>
                      <p className="text-muted-foreground">DALL-E 3 creates your custom icon in high resolution</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-semibold">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Remove Background (Optional)</h4>
                      <p className="text-muted-foreground">One-click background removal for transparent icons</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-semibold">
                      5
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Save & Use</h4>
                      <p className="text-muted-foreground">Export your icon and use it in your project immediately</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Get TAU Icon Generator</h2>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold">$20</span>
                    <span className="text-muted-foreground">one-time payment</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Lifetime access • No subscriptions • Instant download</p>
                  <p className="text-sm text-primary font-medium">Pay once, own it forever</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Full access to all features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>macOS application included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Instant download after payment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Lifetime updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">No monthly fees or subscriptions</span>
                  </div>
                </div>

                <PayPalCheckout />

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="font-medium text-foreground">Note:</span> You'll need your own OpenAI API key.{" "}
                    <span className="text-foreground">$10-20/month in credits generates hundreds of icons.</span>{" "}
                    <Link href="/guide" className="text-primary hover:underline">
                      See setup guide
                    </Link>
                  </p>
                </div>
                {/* </CHANGE> */}
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Need help getting started?</p>
              <Button asChild variant="outline">
                <Link href="/guide">
                  View Setup Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
