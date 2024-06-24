import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"
import React from "react"

import { siteConfig } from "@/config/site"
import {  cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  metadataBase: new URL(`${siteConfig.url}`),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
"Student rentals Morocco",
    "Accommodation for students in Morocco",
    "Student housing Morocco",
    "Apartments for rent near campus Morocco",
    "Affordable student housing Morocco",
    "Student-friendly rentals Morocco",
    "Off-campus housing Morocco",
    "Housing for students Morocco",
    "Roommates Morocco",
    "Shared accommodation Morocco",
    "Sublets Morocco",
    "Short-term leases Morocco",
    "Furnished apartments Morocco",
    "Pet-friendly rentals Morocco",
    "Parking available Morocco",
    "Utilities included Morocco",
    "Student rentals in Casablanca",
    "Accommodation for students in Rabat",
    "Student housing in Marrakech",
    "Apartments for rent near Mohammed V University",
    "Affordable student housing in Fez",
    "Student-friendly rentals in Tangier",
    "Off-campus housing in Agadir",
    "Housing for students near Hassan II University",
    "Roommates in Oujda",
    "Shared accommodation in Tetouan",
    "Sublets in Meknes",
    "Short-term leases in Kenitra",
    "Furnished apartments in Essaouira",
    "Pet-friendly rentals in Nador",
    "Parking available in Mohammedia",
    "Utilities included in Ifrane",
    "Budget student rentals Morocco",
    "Luxury student housing Morocco",
    "Secure student accommodation Morocco",
    "Internet included rentals Morocco",
    "Modern student apartments Morocco",
    "Close to public transport Morocco",
    "Near universities Morocco",
    "Quiet student rentals Morocco",
    "Student studios Morocco",
    "Single rooms for students Morocco",
    "Double rooms for students Morocco",
    "Spacious student rentals Morocco",
    "Co-living spaces Morocco",
    "Female-only student accommodation Morocco",
    "Male-only student accommodation Morocco",
    "Mixed-gender student housing Morocco",
    "Long-term student rentals Morocco",
    "Short-term student accommodation Morocco",
    "Summer rentals for students Morocco",
    "Semester rentals Morocco",
    "Monthly rentals for students Morocco",
    "Weekly student rentals Morocco",
    "Available now student housing Morocco",
    "Student accommodation with gym Morocco",
    "Student housing with pool Morocco",
    "Laundry facilities included Morocco",
    "Study rooms in student housing Morocco",
    "Communal areas in student accommodation Morocco",
    "Bike storage student rentals Morocco",
    "Student housing with cleaning services Morocco",
    "Maintenance included student rentals Morocco",
    "All-inclusive student accommodation Morocco",
    "Social student housing Morocco",
    "International student accommodation Morocco",
    "Multicultural student rentals Morocco",
    "Eco-friendly student rentals Morocco",
    "Community events in student housing Morocco",
    "Networking opportunities in student accommodation Morocco"

  ],
  authors: [
    {
      name: "abdrahmanES1",
      url: "https://github.com/abdrahmanES1",
    },
    {
      name: "SaadLagrari",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@abdrahmanES1 @SaadLagrari",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
