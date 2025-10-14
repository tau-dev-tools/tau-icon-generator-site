import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have questions about TAU Icon Generator? We're here to help.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For technical support, billing questions, or general inquiries
                  </p>
                  <a href="mailto:support@tau-tools.dev" className="text-primary hover:underline font-medium">
                    support@tau-tools.dev
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Join our developer community for tips, updates, and discussions
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://tau-dev-tools.github.io/tau-info/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit TAU Dev Tools
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Do I need a subscription?</h4>
                  <p className="text-sm text-muted-foreground">
                    No! TAU Icon Generator is a one-time purchase of $20. You'll need your own OpenAI API key, which
                    uses pay-as-you-go pricing (typically $0.04-0.05 per icon).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What platforms are supported?</h4>
                  <p className="text-sm text-muted-foreground">
                    TAU Icon Generator works on Windows and macOS. Background removal is available on both platforms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I get a refund?</h4>
                  <p className="text-sm text-muted-foreground">
                    We offer a 14-day money-back guarantee if you're not satisfied with the product. Contact us at
                    support@tau-tools.dev for refund requests.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How do I update the app?</h4>
                  <p className="text-sm text-muted-foreground">
                    Updates are free for all users. We'll send update notifications to your email, and you can download
                    the latest version from your purchase confirmation link.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Is my API key secure?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! Your OpenAI API key is stored locally on your device using secure storage. It's never
                    transmitted to our servers or shared with anyone.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I use this for commercial projects?</h4>
                  <p className="text-sm text-muted-foreground">
                    Icons generated with TAU Icon Generator can be used in both personal and commercial projects. Please
                    review OpenAI's usage policies for any restrictions on AI-generated content.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button asChild size="lg">
                <a href="mailto:support@tau-tools.dev">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
