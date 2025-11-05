"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"

export function PayPalCheckout() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  const handlePurchase = async () => {
    setIsProcessing(true)

    // Simulate PayPal payment processing
    // In production, this would integrate with PayPal's SDK
    setTimeout(() => {
      setIsProcessing(false)
      // After successful payment, provide download link
      setDownloadUrl("#download")
    }, 2000)
  }

  if (downloadUrl) {
    return (
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center">
          <p className="text-primary font-semibold mb-2">Payment Successful! 🎉</p>
          <p className="text-sm text-muted-foreground">Your download is ready</p>
        </div>
        <Button className="w-full" size="lg">
          <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
          Download for macOS
        </Button>
        <p className="text-xs text-muted-foreground text-center">Download links are also sent to your email</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Button
        className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white"
        size="lg"
        onClick={handlePurchase}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.76-4.852a.932.932 0 0 1 .922-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.72-4.46z" />
            </svg>
            Pay with PayPal
          </>
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground">Secure payment powered by PayPal</p>
    </div>
  )
}
