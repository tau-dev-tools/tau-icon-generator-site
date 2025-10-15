"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              TAU Icon Generator
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Product
            </Link>
            <Link
              href="/guide"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Setup Guide
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/product#purchase">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
