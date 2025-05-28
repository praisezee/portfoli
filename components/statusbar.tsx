import { CircleDot, GitBranch, Heart } from "lucide-react"

export default function Statusbar() {
  return (
    <div className="bg-[#007acc] text-white text-xs flex items-center justify-between px-4 py-1">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <GitBranch className="h-3.5 w-3.5" />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1">
          <CircleDot className="h-3.5 w-3.5" />
          <span>Next.js</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Heart className="h-3.5 w-3.5" />
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </div>
  )
}
