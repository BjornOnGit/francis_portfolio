"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import TerminalText from "./terminal-text"

export default function Hero() {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block mb-2">Hello, I'm a</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mb-10">
            <TerminalText />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg hover:shadow-xl transition-all duration-300"
            onClick={handleScrollDown}
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        onClick={handleScrollDown}
      >
        <ArrowDown className="text-white/60 hover:text-white transition-colors" size={32} />
      </motion.div>
    </section>
  )
}
