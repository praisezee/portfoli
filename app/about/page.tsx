"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js"] },
    { category: "Backend", items: ["Node.js", "Express.js", "PHP Laravel"] },
    { category: "Mobile & Desktop", items: ["React Native", "Electron.js"] },
    { category: "Blockchain", items: ["Solidity", "Rust (Basic)"] },
    { category: "Other", items: ["GraphQL", "REST API", "Git/GitHub", "Responsive Design"] },
  ]

  return (
    <div className="p-6 font-fira-code">
      <h1 className="text-3xl font-bold text-[#569cd6] mb-6">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-[#4ec9b0] mb-4">Hello, I'm Praise Folorunso</h2>

            <p className="text-[#d4d4d4] mb-4">
              I'm a Full Stack Developer with over 3 years of experience building scalable web applications and APIs for
              startups, agencies, and enterprise brands. My journey in tech has been driven by a passion for creating
              elegant solutions to complex problems.
            </p>

            <p className="text-[#d4d4d4] mb-4">
              I specialize in building modern web applications using React, Node.js, and various other technologies. I'm
              also experienced in blockchain development, having worked on NFT marketplaces and other decentralized
              applications.
            </p>

            <p className="text-[#d4d4d4] mb-6">
              When I'm not coding, I enjoy contributing to open-source projects, mentoring junior developers, and
              staying up-to-date with the latest trends in technology. I believe in writing clean, maintainable code and
              following best practices to deliver high-quality solutions.
            </p>

            <h3 className="text-xl font-semibold text-[#ce9178] mb-4">My Approach</h3>

            <p className="text-[#d4d4d4] mb-4">
              I approach each project with a focus on understanding the client's needs and business goals. I believe in
              clear communication, agile methodologies, and delivering value at every stage of the development process.
            </p>

            <p className="text-[#d4d4d4] mb-4">
              My technical expertise spans both frontend and backend development, allowing me to build complete
              solutions from the ground up. I'm comfortable working with various databases, APIs, and third-party
              integrations to create seamless user experiences.
            </p>

            <h3 className="text-xl font-semibold text-[#ce9178] mb-4">Education & Learning</h3>

            <p className="text-[#d4d4d4] mb-4">
              I hold a Bachelor of Science in Microbiology from ISCOM University, Benin Republic. While my formal
              education is in a different field, I've pursued my passion for programming through self-study, online
              courses, and hands-on experience.
            </p>

            <p className="text-[#d4d4d4]">
              I'm a firm believer in continuous learning and regularly update my skills to stay current with the latest
              technologies and best practices in the industry.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-[#252526] rounded-md p-6 mb-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-[#569cd6]">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Praise Folorunso"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#4ec9b0]">Praise Folorunso</h3>
              <p className="text-[#9cdcfe]">Full Stack Developer</p>
            </div>

            <div className="space-y-2">
              <p className="text-[#d4d4d4]">
                <span className="text-[#9cdcfe]">Location:</span> Lagos, Nigeria
              </p>
              <p className="text-[#d4d4d4]">
                <span className="text-[#9cdcfe]">Experience:</span> 3+ years
              </p>
              <p className="text-[#d4d4d4]">
                <span className="text-[#9cdcfe]">Email:</span> folorunsopraise12@gmail.com
              </p>
              <p className="text-[#d4d4d4]">
                <span className="text-[#9cdcfe]">GitHub:</span> github.com/praisezee
              </p>
            </div>
          </div>

          <div className="bg-[#252526] rounded-md p-6">
            <h3 className="text-xl font-semibold text-[#4ec9b0] mb-4">Skills</h3>

            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-[#ce9178] mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="bg-[#1e1e1e] border-[#569cd6] text-[#9cdcfe]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
