import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  metadataBase: new URL("https://minimalist-resumebuilder.vercel.app"),
  title: "Minimalist Resume Builder - Free ATS-Friendly AI Resume Builder",
  description:
    "Create professional, ATS-optimized resumes in minutes with Minimalist Resume Builder. Features instant live rendering, drag-and-drop section reordering, high-fidelity PDF and Word exports, and Gemini AI-powered tailoring to job descriptions.",
  keywords: [
    "AI Resume Builder",
    "ATS Resume Generator",
    "CV Maker",
    "Resume Tailoring",
    "Gemini AI Resume",
    "Professional Resume Template",
    "Free PDF Resume Export",
    "Interactive Resume Editor",
  ],
  authors: [{ name: "Minimalist Resume Builder Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://minimalist-resumebuilder.vercel.app",
  },
  verification: {
    google: "BTYd0xNzXByB-NizlUWvHHpQXW19ypELuuM91Obc1zQ",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minimalist-resumebuilder.vercel.app",
    title: "Minimalist Resume Builder - Free ATS-Friendly AI Resume Builder",
    description:
      "Create professional, ATS-optimized resumes in minutes. Live rendering, drag-and-drop layout, Word/PDF export, and AI resume optimizer.",
    siteName: "Minimalist Resume Builder",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minimalist Resume Builder - Free ATS-Friendly AI Resume Builder",
    description:
      "Create professional, ATS-optimized resumes in minutes with Gemini AI tailoring and high-fidelity PDF/Word exports.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Minimalist Resume Builder",
  url: "https://minimalist-resumebuilder.vercel.app",
  description:
    "Free ATS-friendly AI resume builder with live preview, PDF/Word export, and Gemini AI tailoring.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "ATS-Friendly Resume Templates",
    "Gemini AI Resume Tailoring",
    "High-Fidelity PDF and Word Export",
    "Drag-and-Drop Layout Reordering",
    "Live Preview Rendering",
    "Auto-Save to LocalStorage",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
