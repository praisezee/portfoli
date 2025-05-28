"use client"

import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ResumePage() {
  return (
    <div className="p-6 font-fira-code">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#569cd6]">Resume</h1>
        <Button className="bg-[#569cd6] hover:bg-[#4e8ac7]">
          <FileDown className="mr-2 h-4 w-4" />
          <Link href="/resume.pdf" download>
            Download PDF
          </Link>
        </Button>
      </div>

      <div className="bg-[#252526] p-8 rounded-md max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#4ec9b0]">Praise Folorunso</h2>
            <p className="text-xl text-[#9cdcfe]">Full Stack Developer</p>
            <div className="flex justify-center gap-4 mt-2 text-sm text-[#d4d4d4]">
              <span>Lagos, Nigeria</span>
              <span>+234 902 956 6770</span>
              <span>folorunsopraise12@gmail.com</span>
            </div>
            <div className="flex justify-center gap-4 mt-1 text-sm text-[#d4d4d4]">
              <span>folorunsopraise.vercel.app</span>
              <span>github.com/praisezee</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#ce9178] border-b border-[#ce9178] pb-1 mb-3">
              Professional Summary
            </h3>
            <p className="text-[#d4d4d4]">
              A results-driven Full Stack Developer with 3+ years of experience building scalable web applications and
              APIs for startups, agencies, and enterprise brands. Proficient in modern development frameworks, cloud
              technologies, and collaborative agile workflows. Passionate about delivering high-quality solutions,
              enhancing user experiences, and contributing to the open-source community.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#ce9178] border-b border-[#ce9178] pb-1 mb-3">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <p>
                  <span className="text-[#9cdcfe] font-medium">Languages:</span> JavaScript (ES6+), TypeScript, PHP,
                  Solidity
                </p>
                <p>
                  <span className="text-[#9cdcfe] font-medium">Frontend:</span> React, HTML5, CSS3, Tailwind CSS,
                  Bootstrap CSS
                </p>
                <p>
                  <span className="text-[#9cdcfe] font-medium">Backend:</span> Node.js, Express.js, Laravel, Foundry
                </p>
              </div>
              <div>
                <p>
                  <span className="text-[#9cdcfe] font-medium">Databases:</span> MongoDB, PostgreSQL, MySQL
                </p>
                <p>
                  <span className="text-[#9cdcfe] font-medium">Version Control:</span> Git, GitHub
                </p>
                <p>
                  <span className="text-[#9cdcfe] font-medium">Collaboration Tools:</span> Trello, Slack, Freedcamp
                </p>
                <p>
                  <span className="text-[#9cdcfe] font-medium">Testing:</span> Postman
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#ce9178] border-b border-[#ce9178] pb-1 mb-3">
              Professional Experience
            </h3>

            <div className="mb-4">
              <div className="flex justify-between">
                <h4 className="text-[#4ec9b0] font-medium">Freelance Full Stack Developer</h4>
                <p className="text-[#9cdcfe]">2024 – Present</p>
              </div>
              <p className="text-[#d4d4d4] italic mb-2">Remote</p>
              <ul className="list-disc list-inside text-[#d4d4d4]">
                <li>
                  Designed, developed, and deployed over 20 high-performance websites and web apps for clients globally,
                  using React, Node.js, and MongoDB.
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

            <div>
              <div className="flex justify-between">
                <h4 className="text-[#4ec9b0] font-medium">Software Developer (Contract) – Pepsa.co</h4>
                <p className="text-[#9cdcfe]">2023 – 2024</p>
              </div>
              <p className="text-[#d4d4d4] italic mb-2">Remote</p>
              <ul className="list-disc list-inside text-[#d4d4d4]">
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

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#ce9178] border-b border-[#ce9178] pb-1 mb-3">
              Selected Projects
            </h3>

            <div className="mb-4">
              <div className="flex justify-between">
                <h4 className="text-[#4ec9b0] font-medium">NFT Marketplace – Supadao</h4>
              </div>
              <ul className="list-disc list-inside text-[#d4d4d4]">
                <li>
                  Developed a fully functional NFT marketplace with wallet integration, real-time bidding, and advanced
                  search filters.
                </li>
                <li>
                  Ensured high security and efficiency by implementing smart contract interactions and encryption
                  protocols.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between">
                <h4 className="text-[#4ec9b0] font-medium">E-commerce Platform – Bundlet</h4>
              </div>
              <ul className="list-disc list-inside text-[#d4d4d4]">
                <li>
                  Created a feature-rich online store with product customization, order tracking, and payment gateway
                  integrations.
                </li>
                <li>Designed a customer-centric UI using Next.js and Tailwind CSS.</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#ce9178] border-b border-[#ce9178] pb-1 mb-3">Education</h3>
            <div className="flex justify-between">
              <div>
                <h4 className="text-[#4ec9b0] font-medium">Bachelor of Science in Microbiology</h4>
                <p className="text-[#d4d4d4]">ISCOM University, Benin Republic</p>
              </div>
              <p className="text-[#9cdcfe]">2018-2021</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#ce9178] border-b border-[#ce9178] pb-1 mb-3">Certifications</h3>
            <p>
              <span className="text-[#9cdcfe]">Frontend Development with React</span> – sololearn
            </p>
            <p>
              <span className="text-[#9cdcfe]">Full Stack Web Development</span> – freeCodeCamp
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
