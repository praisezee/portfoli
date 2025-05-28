"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Topbar() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)

  const tabs = [
    { name: "home.tsx", path: "/" },
    { name: "about.tsx", path: "/about" },
    { name: "projects.tsx", path: "/projects" },
    { name: "resume.tsx", path: "/resume" },
    { name: "contact.tsx", path: "/contact" },
  ]

  return (
    <div className="bg-[#1e1e1e] border-b border-[#3c3c3c] flex items-center justify-between">
      <div className="flex items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#cccccc]">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#252526] border-r border-[#3c3c3c] p-0">
              <div className="p-4 space-y-4">
                {tabs.map((tab) => (
                  <Link key={tab.path} href={tab.path} passHref>
                    <div
                      className={cn(
                        "px-4 py-2 rounded text-sm cursor-pointer",
                        pathname === tab.path ? "bg-[#37373d] text-white" : "text-[#cccccc] hover:bg-[#2a2d2e]",
                      )}
                    >
                      {tab.name}
                    </div>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex overflow-x-auto">
          {tabs.map((tab) => (
            <Link key={tab.path} href={tab.path} passHref>
              <div
                className={cn(
                  "px-4 py-2 border-r border-[#3c3c3c] cursor-pointer",
                  pathname === tab.path
                    ? "bg-[#1e1e1e] text-white border-b-2 border-b-[#569cd6]"
                    : "bg-[#2d2d2d] text-[#cccccc] hover:bg-[#1e1e1e]",
                )}
                onClick={() => setActiveTab(tab.path)}
              >
                {tab.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-4 text-[#cccccc] text-sm">Praise Folorunso - Portfolio</div>
    </div>
  )
}
