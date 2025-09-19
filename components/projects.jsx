"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Redibuy API",
    description:
      "A robust RESTful API built with FastAPI for an e-commerce platform with authentication, product management, and order processing.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["FastAPI", "PostgreSQL", "Docker", "Redis"],
    github: "https://github.com/BjornOnGit/redi-buy_api",
    demo: "#",
    category: "Backend",
  },
  {
    title: "Niarobi Liqour Store",
    description:
      "A scalable e-commerce liquor store with coupons, product inventory management, and analytics.",
    image: "/projects/niarobi_img.png?height=300&width=500",
    tags: ["Next.js", "Supabase", "Vercel"],
    github: "https://github.com/BjornOnGit/niarobi-store",
    demo: "https://niarobi-store.vercel.app/",
    category: "Full-Stack",
  },
  {
    title: "ShieldForce - A Cybersecurity SaaS Platform",
    description:
      "A comprehensive cybersecurity platform offering vulnerability management, threat detection, and compliance reporting for businesses.",
    image: "/projects/shieldforce_img.png?height=300&width=500",
    tags: ["React", "Next.js", "Chargebee", "HubSpot"],
    github: "https://github.com/EPINECNG",
    demo: "https://shieldforce.io/",
    category: "Full-Stack",
  },
  {
    title: "Loan Decision Engine",
    description: "A backend service that evaluates loan applications based on various criteria and returns approval or rejection decisions.",
    image: "/projects/mini-loan-decision-engine.png?height=300&width=500",
    tags: ["TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/BjornOnGit/mini-loan-decision-engine",
    demo: "https://mini-loan-decision-engine-1xwv.vercel.app/",
    category: "Backend",
  },
  // {
  //   title: "Task Management App",
  //   description:
  //     "A Kanban-style task management application with drag-and-drop functionality, user roles, and notifications.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   tags: ["Next.js", "Express.js", "MongoDB", "Socket.io"],
  //   github: "#",
  //   demo: "#",
  //   category: "Full-Stack",
  // },
  // {
  //   title: "API Gateway Service",
  //   description:
  //     "A microservice gateway that handles routing, authentication, rate limiting, and request transformation for a distributed system.",
  //   image: "/placeholder.svg?height=300&width=500",
  //   tags: ["FastAPI", "Redis", "Docker", "Kubernetes"],
  //   github: "#",
  //   demo: "#",
  //   category: "Backend",
  // },
]

const categories = ["All", "Backend", "Full-Stack", "Frontend"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A selection of my recent work across backend and full-stack development
        </motion.p>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                  activeCategory === category ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gray-800/80 p-2 rounded-full hover:bg-gray-700/80 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-blue-600/80 p-2 rounded-full hover:bg-blue-500/80 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-800 text-blue-400 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
