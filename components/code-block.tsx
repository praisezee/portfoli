"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function CodeBlock() {
  const [isHovered, setIsHovered] = useState(false)

  const codeString = `// Example React component
import { useState, useEffect } from 'react';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Load project data
    console.log('Project loaded:', project.title);
    
    return () => {
      console.log('Component unmounted');
    };
  }, [project]);
  
  const handleClick = () => {
    console.log('Project clicked:', project.title);
  };
  
  return (
    <div 
      className={\`card \${isHovered ? 'card-hovered' : ''}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}`

  const lines = codeString.split("\n")

  return (
    <motion.div
      className="bg-[#1e1e1e] rounded-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#252526] px-4 py-2 flex justify-between items-center border-b border-[#3c3c3c]">
        <span className="text-[#9cdcfe]">ProjectCard.jsx</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-fira-code text-sm">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="inline-block w-8 text-right mr-4 text-[#858585]">{i + 1}</span>
                <span className="text-[#d4d4d4]">
                  {line
                    .replace(/\/\/(.*)/g, '<span class="text-[#6a9955]">$&</span>')
                    .replace(/(['"`])(?:(?=(\\?))\2.)*?\1/g, '<span class="text-[#ce9178]">$&</span>')
                    .replace(
                      /\b(import|export|from|default|function|return|const|let|var|if|else|for|while|class|extends|new|this|typeof|try|catch|finally)\b/g,
                      '<span class="text-[#c586c0]">$&</span>',
                    )
                    .replace(
                      /\b(useState|useEffect|useContext|useRef|useMemo|useCallback)\b/g,
                      '<span class="text-[#dcdcaa]">$&</span>',
                    )
                    .replace(
                      /\b(console|document|window|Math|Array|Object|String|Number|Boolean|Date|RegExp)\b/g,
                      '<span class="text-[#4ec9b0]">$&</span>',
                    )
                    .replace(
                      /\b(log|error|warn|info|debug|table|time|timeEnd|group|groupEnd)\b/g,
                      '<span class="text-[#dcdcaa]">$&</span>',
                    )
                    .replace(/\{|\}|$$|$$|\[|\]/g, '<span class="text-[#d4d4d4]">$&</span>')}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </motion.div>
  )
}
