"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const projects = [
    {
      title: "NFT Marketplace – Supadao",
      description:
        "A fully functional NFT marketplace with wallet integration, real-time bidding, and advanced search filters. Ensured high security and efficiency by implementing smart contract interactions and encryption protocols.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Solidity", "Web3", "Blockchain"],
      github: "https://github.com/praisezee",
      demo: "#",
    },
    {
      title: "E-commerce Platform – Bundlet",
      description:
        "A feature-rich online store with product customization, order tracking, and payment gateway integrations. Designed a customer-centric UI using Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Tailwind CSS", "REST API", "Payment Integration"],
      github: "https://github.com/praisezee",
      demo: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Dynamic dashboards for analytics using React and Chart.js, providing real-time business insights for clients.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Chart.js", "Express.js", "MongoDB"],
      github: "https://github.com/praisezee",
      demo: "#",
    },
    {
      title: "CMS Platform",
      description:
        "Custom CMS platform for marketing agencies and e-commerce brands to manage their content and products.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
      github: "https://github.com/praisezee",
      demo: "#",
    },
  ]

  return (
    <div className="p-6 font-fira-code">
      <h1 className="text-3xl font-bold text-[#569cd6] mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#252526] rounded-md overflow-hidden border border-[#3c3c3c]"
          >
            <div className="relative h-48">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#4ec9b0] mb-2">{project.title}</h3>
              <p className="text-[#d4d4d4] mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="bg-[#1e1e1e] border-[#569cd6] text-[#9cdcfe]">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#569cd6] text-[#569cd6] hover:bg-[#569cd6] hover:text-white"
                >
                  <Github className="mr-2 h-4 w-4" />
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button>
                <Button size="sm" className="bg-[#569cd6] hover:bg-[#4e8ac7] text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
