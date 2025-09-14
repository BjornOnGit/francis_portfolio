import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Full-Stack Developer Portfolio",
  description: "Backend-heavy full-stack software engineer portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
