"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="p-6 font-fira-code">
      <h1 className="text-3xl font-bold text-[#569cd6] mb-6">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <Card className="bg-[#252526] border-[#3c3c3c]">
            <CardHeader>
              <CardTitle className="text-[#4ec9b0]">Send Me a Message</CardTitle>
              <CardDescription className="text-[#9cdcfe]">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#9cdcfe]">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-[#1e1e1e] border-[#3c3c3c] focus:border-[#569cd6] text-[#d4d4d4]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#9cdcfe]">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="bg-[#1e1e1e] border-[#3c3c3c] focus:border-[#569cd6] text-[#d4d4d4]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#9cdcfe]">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                    className="bg-[#1e1e1e] border-[#3c3c3c] focus:border-[#569cd6] text-[#d4d4d4]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#9cdcfe]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    rows={6}
                    className="bg-[#1e1e1e] border-[#3c3c3c] focus:border-[#569cd6] text-[#d4d4d4]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#569cd6] hover:bg-[#4e8ac7] text-white w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-[#252526] border-[#3c3c3c]">
            <CardHeader>
              <CardTitle className="text-[#4ec9b0]">Contact Information</CardTitle>
              <CardDescription className="text-[#9cdcfe]">
                Feel free to reach out through any of these channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#1e1e1e] p-3 rounded-full">
                  <Mail className="text-[#569cd6] h-5 w-5" />
                </div>
                <div>
                  <p className="text-[#9cdcfe] text-sm">Email</p>
                  <a
                    href="mailto:folorunsopraise12@gmail.com"
                    className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors"
                  >
                    folorunsopraise12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#1e1e1e] p-3 rounded-full">
                  <Phone className="text-[#569cd6] h-5 w-5" />
                </div>
                <div>
                  <p className="text-[#9cdcfe] text-sm">Phone</p>
                  <a href="tel:+2349029566770" className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors">
                    +234 902 956 6770
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#1e1e1e] p-3 rounded-full">
                  <Github className="text-[#569cd6] h-5 w-5" />
                </div>
                <div>
                  <p className="text-[#9cdcfe] text-sm">GitHub</p>
                  <a
                    href="https://github.com/praisezee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors"
                  >
                    github.com/praisezee
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#1e1e1e] p-3 rounded-full">
                  <Linkedin className="text-[#569cd6] h-5 w-5" />
                </div>
                <div>
                  <p className="text-[#9cdcfe] text-sm">LinkedIn</p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4d4d4] hover:text-[#569cd6] transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
