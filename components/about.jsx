"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=400" alt="Developer" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Backend-Heavy Full-Stack Developer</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate software engineer with extensive experience in building robust backend systems and
              scalable web applications. With a strong foundation in both frontend and backend technologies, I
              specialize in creating efficient, maintainable, and high-performance solutions.
            </p>
            <p className="text-gray-300 mb-6">
              My expertise spans across multiple frameworks and languages, with a particular focus on Django, FastAPI,
              and Node.js/Express.js for backend development, and React for frontend interfaces. I enjoy solving complex
              problems and continuously learning new technologies to enhance my skill set.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-600 text-white rounded-full"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
