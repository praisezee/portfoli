"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Code, FileText, Home, Mail, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    projects: true,
  })

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }))
  }

  const isActive = (path: string) => pathname === path

  return (
    <div className="w-64 bg-[#252526] border-r border-[#3c3c3c] overflow-y-auto hidden md:block">
      <div className="p-4">
        <h2 className="text-sm font-medium text-[#cccccc] uppercase tracking-wider mb-4">Explorer</h2>

        <div className="space-y-1">
          <div
            className="flex items-center gap-1 text-[#cccccc] hover:bg-[#37373d] px-2 py-1 rounded cursor-pointer"
            onClick={() => toggleFolder("projects")}
          >
            {expandedFolders.projects ? (
              <ChevronDown className="h-4 w-4 text-[#cccccc]" />
            ) : (
              <ChevronRight className="h-4 w-4 text-[#cccccc]" />
            )}
            <span className="text-sm">PORTFOLIO</span>
          </div>

          {expandedFolders.projects && (
            <div className="ml-4 space-y-1">
              <Link href="/" passHref>
                <div
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded text-sm",
                    isActive("/") ? "bg-[#37373d] text-white" : "text-[#cccccc] hover:bg-[#2a2d2e]",
                  )}
                >
                  <Home className="h-4 w-4" />
                  <span>home.tsx</span>
                </div>
              </Link>

              <Link href="/about" passHref>
                <div
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded text-sm",
                    isActive("/about") ? "bg-[#37373d] text-white" : "text-[#cccccc] hover:bg-[#2a2d2e]",
                  )}
                >
                  <User className="h-4 w-4" />
                  <span>about.tsx</span>
                </div>
              </Link>

              <Link href="/projects" passHref>
                <div
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded text-sm",
                    isActive("/projects") ? "bg-[#37373d] text-white" : "text-[#cccccc] hover:bg-[#2a2d2e]",
                  )}
                >
                  <Code className="h-4 w-4" />
                  <span>projects.tsx</span>
                </div>
              </Link>

              <Link href="/resume" passHref>
                <div
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded text-sm",
                    isActive("/resume") ? "bg-[#37373d] text-white" : "text-[#cccccc] hover:bg-[#2a2d2e]",
                  )}
                >
                  <FileText className="h-4 w-4" />
                  <span>resume.tsx</span>
                </div>
              </Link>

              <Link href="/contact" passHref>
                <div
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 rounded text-sm",
                    isActive("/contact") ? "bg-[#37373d] text-white" : "text-[#cccccc] hover:bg-[#2a2d2e]",
                  )}
                >
                  <Mail className="h-4 w-4" />
                  <span>contact.tsx</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
