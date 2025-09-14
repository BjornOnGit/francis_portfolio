"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  {
    category: "Backend",
    items: [
      { name: "Django", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 80 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: 80 },
      { name: "Git", level: 85 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Linux", level: 80 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-blue-400">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
