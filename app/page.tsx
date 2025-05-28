"use client"

import { FileText, Github, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"

export default function Home() {
  const skills = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "Bootstrap", color: "bg-purple-500" },
    { name: "Node.js", color: "bg-teal-500" },
    { name: "Express.js", color: "bg-orange-500" },
    { name: "Tailwind", color: "bg-cyan-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React.js", color: "bg-blue-400" },
    { name: "React Native", color: "bg-blue-600" },
    { name: "PHP Laravel", color: "bg-red-500" },
    { name: "Solidity", color: "bg-gray-600" },
    { name: "Rust", color: "bg-orange-600" },
    { name: "Electron.js", color: "bg-blue-300" },
    { name: "GraphQL", color: "bg-pink-600" },
    { name: "REST API", color: "bg-green-500" },
  ]

  return (
    <div className="p-6 font-fira-code">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-[#569cd6] mb-2">Praise Folorunso</h1>
            <h2 className="text-2xl text-[#4ec9b0] mb-6">Full Stack Developer</h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-[#d4d4d4] mb-4">
                A results-driven Full Stack Developer with 3+ years of experience building scalable web applications and
                APIs for startups, agencies, and enterprise brands. Proficient in modern development frameworks, cloud
                technologies, and collaborative agile workflows. Passionate about delivering high-quality solutions,
                enhancing user experiences, and contributing to the open-source community.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="outline" className={`${skill.color} text-white border-none`}>
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold text-[#ce9178] mb-4">// Professional Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-[#569cd6] pl-4">
                <h4 className="text-[#4ec9b0] font-medium">Freelance Full Stack Developer</h4>
                <p className="text-[#9cdcfe]">Remote • 2024 - Present</p>
                <ul className="list-disc list-inside mt-2 text-[#d4d4d4]">
                  <li>
                    Designed, developed, and deployed over 20 high-performance websites and web apps for clients
                    globally, using React, Node.js, and MongoDB.
                  </li>
                  <li>
                    Worked with Supadao on blockchain-integrated solutions, delivering secure, scalable decentralized
                    applications.
                  </li>
                  <li>
                    Collaborated with marketing agencies and e-commerce brands such as bundled, spring mall x to build
                    custom CMS platforms and optimize online stores.
                  </li>
                  <li>
                    Spearheaded API integrations with third-party services (e.g. flutterwave, Paystack, PayPal) for
                    seamless user experiences.
                  </li>
                  <li>
                    Improved website performance and SEO by implementing lazy loading, image optimization, and schema
                    markup.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-[#569cd6] pl-4">
                <h4 className="text-[#4ec9b0] font-medium">Software Developer (Contract) – Pepsa.co</h4>
                <p className="text-[#9cdcfe]">Remote • 2023 - 2024</p>
                <ul className="list-disc list-inside mt-2 text-[#d4d4d4]">
                  <li>
                    Built and maintained scalable RESTful APIs using Express.js and integrated robust authentication
                    workflows.
                  </li>
                  <li>
                    Created dynamic dashboards for analytics using React and Chart.js, providing real-time business
                    insights.
                  </li>
                  <li>
                    Collaborated with UI/UX designers and QA teams to deliver polished products that exceeded client
                    expectations.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/3 bg-[#252526] rounded-md p-6"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-[#569cd6]">
              <Image
                src="/pfp.jpg"
                alt="Praise Folorunso"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#4ec9b0]">Contact Info</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-[#569cd6]" size={18} />
              <a
                href="mailto:folorunsopraise12@gmail.com"
                className="text-[#9cdcfe] hover:text-[#569cd6] transition-colors"
              >
                folorunsopraise12@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#569cd6]" size={18} />
              <a href="tel:+2349029566770" className="text-[#9cdcfe] hover:text-[#569cd6] transition-colors">
                +234 902 956 6770
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="text-[#569cd6]" size={18} />
              <a
                href="https://github.com/praisezee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9cdcfe] hover:text-[#569cd6] transition-colors"
              >
                github.com/praisezee
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="text-[#569cd6]" size={18} />
              <Link href="/resume" className="text-[#9cdcfe] hover:text-[#569cd6] transition-colors">
                View Resume
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact">
              <Button className="w-full bg-[#569cd6] hover:bg-[#4e8ac7] text-white">Contact Me</Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <h3 className="text-xl font-semibold text-[#ce9178] mb-4">// Selected Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#252526] rounded-md p-6 border-l-4 border-[#569cd6]">
            <h4 className="text-[#4ec9b0] font-medium text-lg">NFT Marketplace – Supadao</h4>
            <p className="text-[#d4d4d4] mt-2">
              Developed a fully functional NFT marketplace with wallet integration, real-time bidding, and advanced
              search filters. Ensured high security and efficiency by implementing smart contract interactions and
              encryption protocols.
            </p>
            <div className="mt-4 flex gap-2">
              <Badge variant="outline" className="bg-blue-600 text-white border-none">
                React
              </Badge>
              <Badge variant="outline" className="bg-gray-600 text-white border-none">
                Solidity
              </Badge>
              <Badge variant="outline" className="bg-purple-600 text-white border-none">
                Web3
              </Badge>
            </div>
          </div>

          <div className="bg-[#252526] rounded-md p-6 border-l-4 border-[#4ec9b0]">
            <h4 className="text-[#4ec9b0] font-medium text-lg">E-commerce Platform – Bundlet</h4>
            <p className="text-[#d4d4d4] mt-2">
              Created a feature-rich online store with product customization, order tracking, and payment gateway
              integrations. Designed a customer-centric UI using Next.js and Tailwind CSS.
            </p>
            <div className="mt-4 flex gap-2">
              <Badge variant="outline" className="bg-blue-400 text-white border-none">
                Next.js
              </Badge>
              <Badge variant="outline" className="bg-cyan-500 text-white border-none">
                Tailwind
              </Badge>
              <Badge variant="outline" className="bg-green-500 text-white border-none">
                REST API
              </Badge>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12"
      >
        <h3 className="text-xl font-semibold text-[#ce9178] mb-4">// Code Sample</h3>
        <CodeBlock />
      </motion.div>
    </div>
  )
}
