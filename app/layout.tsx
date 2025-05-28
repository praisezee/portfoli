import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import Topbar from "@/components/topbar"
import Statusbar from "@/components/statusbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" })

export const metadata: Metadata = {
  title: "Praise Folorunso | Full Stack Developer",
  description: "Portfolio website of Praise Folorunso, a Full Stack Developer",
  icons: {
    icon:"/pfp.jpg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-fira antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col h-screen overflow-hidden bg-[#1e1e1e] text-[#d4d4d4]">
            <Topbar />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
            <Statusbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
