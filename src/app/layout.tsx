import "./globals.css"
import type React from "react"
import Script from "next/script"
import type { Metadata, Viewport } from "next"
import { ErrorBoundary } from "@/app/components/error-boundary"

export const metadata: Metadata = {
  title: "BuyMeWater - Support Creators with Sui",
  description:
    "A decentralized platform for supporting creators with Sui blockchain donations. Buy me water instead of coffee!",
  generator: "v0.app",
  keywords: ["crypto", "donations", "sui", "blockchain", "creators", "support"],
  authors: [{ name: "BuyMeWater Team" }],
  openGraph: {
    title: "BuyMeWater - Support Creators with Sui",
    description:
      "A decentralized platform for supporting creators with Sui blockchain donations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuyMeWater - Support Creators with Sui",
    description:
      "A decentralized platform for supporting creators with Sui blockchain donations.",
  },
  icons: {
    icon: "/favicon.ico", // <-- favicon handled here
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0ea5e9",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head><script src="https://cdn.tailwindcss.com"></script></head>
      

      <body className="custom-scrollbar antialiased">
        
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  )
}
