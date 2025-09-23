import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ReactQueryProviders } from "@/providers/react-query-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Merchant Dashboard",
  description: "Complete merchant dashboard for managing products, orders, and analytics",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
      <ReactQueryProviders>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="min-h-screen bg-bg flex">
                  <main className="flex-1 p-6">
                    <div className="max-w-[1400px] mx-auto">{children}</div>
                  </main>
              </div>
            </Suspense>
          </ThemeProvider>
      </ReactQueryProviders>
      </body>
    </html>
  )
}
