"use client"

import { useState, useEffect } from "react"

export default function TerminalText() {
  const [text, setText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const lines = [
    "Specializing in backend development with Django, FastAPI, and Node.js",
    "Building responsive frontends with React and Next.js",
    "Creating robust, scalable full-stack applications",
  ]

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentLine >= lines.length) return

    const line = lines[currentLine]

    if (currentIndex < line.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + line[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)

      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
        setCurrentIndex(0)
        setText((prev) => prev + "\n")
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, currentLine, lines])

  return (
    <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl text-left font-mono text-sm md:text-base max-w-3xl mx-auto border border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400 text-xs">terminal</span>
      </div>
      <div className="text-green-400 min-h-[120px]">
        <span className="text-blue-400">$ </span>
        <span className="text-gray-300">echo "About me"</span>
        <br />
        {text.split("\n").map((line, i) => (
          <div key={i} className="mt-1">
            {line}
            {i === text.split("\n").length - 1 && showCursor && <span className="text-green-400">|</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
