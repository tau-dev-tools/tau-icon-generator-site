import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ExternalLink, CreditCard, Key, Wallet, CheckCircle2 } from "lucide-react"

export default function GuidePage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">OpenAI API Setup Guide</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Follow these simple steps to get your OpenAI API key and start generating icons
            </p>

            {/* Overview */}
            <Alert className="mb-12 border-primary/20 bg-primary/5">
              <AlertDescription className="text-base">
                TAU Icon Generator uses OpenAI's DALL-E 3 and GPT-4o APIs to create and refine your icons. You'll need
                to create an OpenAI account and add credits to use the app. It also supports predefined style templates and
                icon generation using reference images.
              </AlertDescription>
            </Alert>

            {/* Step 1: Create Account */}
            <Card className="mb-8 bg-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                    1
                  </span>
                  Create an OpenAI Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>
                    Visit{" "}
                    <a
                      href="https://platform.openai.com/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      platform.openai.com/signup
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>Sign up with your email address or Google/Microsoft account</li>
                  <li>Verify your email address if required</li>
                  <li>Complete the registration process</li>
                </ol>
                <Button asChild variant="outline" className="mt-4 bg-transparent">
                  <a href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer">
                    Go to OpenAI Signup
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Step 2: Add Credits */}
            <Card className="mb-8 bg-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                    2
                  </span>
                  Add Credits to Your Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  OpenAI uses a pay-as-you-go model. You'll need to add credits before using the API.
                </p>

                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Estimated Costs:</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                    <li>• DALL-E 3 (1024x1024): ~$0.04 per image</li>
                    <li>• GPT-4o prompt refinement: ~$0.01 per refinement</li>
                    <li>• Recommended starting balance: $10-20</li>
                  </ul>
                </div>

                <ol className="space-y-3 list-decimal list-inside text-muted-foreground mt-4">
                  <li>
                    Log in to{" "}
                    <a
                      href="https://platform.openai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      platform.openai.com
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>
                    Navigate to{" "}
                    <a
                      href="https://platform.openai.com/settings/profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Settings
                      <ExternalLink className="h-3 w-3" />
                    </a>{" "}
                    (or click your profile icon in the top-right)
                  </li>
                  <li>In the left sidebar, click on "Billing"</li>
                  <li>Click "Add payment method" and enter your credit card details</li>
                  <li>Choose "Add to credit balance" and select an amount (minimum $5)</li>
                  <li>Complete the payment</li>
                </ol>

                <Alert className="mt-4">
                  <Wallet className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Tip:</strong> You can set up usage limits in the billing settings to control your spending.
                  </AlertDescription>
                </Alert>

                <Button asChild variant="outline" className="mt-4 bg-transparent">
                  <a href="https://platform.openai.com/settings/profile" target="_blank" rel="noopener noreferrer">
                    Go to Settings
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Step 3: Create API Key */}
            <Card className="mb-8 bg-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                    3
                  </span>
                  Create Your API Key
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>
                    Navigate to{" "}
                    <a
                      href="https://platform.openai.com/api-keys"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      platform.openai.com/api-keys
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                  <li>Click the "+ Create new secret key" button</li>
                  <li>Give your key a name (e.g., "TAU Icon Generator")</li>
                  <li>
                    <strong>Important:</strong> Copy the API key immediately - you won't be able to see it again!
                  </li>
                  <li>Store the key securely (you'll paste it into the TAU Icon Generator app)</li>
                </ol>

                <Alert className="mt-4 border-destructive/50 bg-destructive/5">
                  <Key className="h-4 w-4 text-destructive" />
                  <AlertDescription>
                    <strong>Security Warning:</strong> Never share your API key publicly or commit it to version
                    control. Treat it like a password.
                  </AlertDescription>
                </Alert>

                <Button asChild variant="outline" className="mt-4 bg-transparent">
                  <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">
                    Go to API Keys
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Step 4: Use in App */}
            <Card className="mb-8 bg-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                    4
                  </span>
                  Configure TAU Icon Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                  <li>Open the TAU Icon Generator application</li>
                  <li>Locate the "API Key" field in the settings section</li>
                  <li>Paste your OpenAI API key into the field</li>
                  <li>The app will automatically save your key securely</li>
                  <li>You're ready to start generating icons!</li>
                </ol>

                <Alert className="mt-4 border-primary/20 bg-primary/5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <AlertDescription>
                    Your API key is stored locally on your device and is never sent to our servers.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle>Troubleshooting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Error: "Insufficient credits"</h4>
                  <p className="text-sm text-muted-foreground">
                    Add more credits to your OpenAI account through the billing page.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Error: "Invalid API key"</h4>
                  <p className="text-sm text-muted-foreground">
                    Double-check that you copied the entire API key correctly. Create a new key if needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Error: "Rate limit exceeded"</h4>
                  <p className="text-sm text-muted-foreground">
                    You've made too many requests in a short time. Wait a few minutes and try again.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Need more help?</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Check the{" "}
                    <a
                      href="https://platform.openai.com/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      OpenAI documentation
                    </a>{" "}
                    or{" "}
                    <a href="/contact" className="text-primary hover:underline">
                      contact our support team
                    </a>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
