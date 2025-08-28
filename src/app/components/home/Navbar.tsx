"use client"
import { useState } from "react"
import Link from "next/link"
import { Droplets, Menu, X,} from "lucide-react"
const Navbar = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
     const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }
  return (
    <div>
          <nav className="border-b border-sky-500/20 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-sky-400" />
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent font-mono">
              BUYMEWATER
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="cursor-pointer text-gray-300 hover:text-sky-400 transition-colors font-semibold tracking-wide uppercase text-sm"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="cursor-pointer text-gray-300 hover:text-sky-400 transition-colors font-semibold tracking-wide uppercase text-sm"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="cursor-pointer text-gray-300 hover:text-sky-400 transition-colors font-semibold tracking-wide uppercase text-sm"
            >
              Stats
            </button>
            <Link href="/login">
              <button className="bg-sky-500 hover:bg-sky-600 text-black font-bold px-6 py-2 rounded-lg transition-colors tracking-wide uppercase">
                Get Started
              </button>
            </Link>
          </div>
          <button onClick={toggleMobileMenu} className="md:hidden text-sky-400">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-sky-500/20">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="block text-gray-300 hover:text-sky-400 transition-colors font-semibold tracking-wide uppercase text-sm"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block text-gray-300 hover:text-sky-400 transition-colors font-semibold tracking-wide uppercase text-sm"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block text-gray-300 hover:text-sky-400 transition-colors font-semibold tracking-wide uppercase text-sm"
              >
                Stats
              </button>
              <Link href="/dashboard">
                <button className="w-full bg-sky-500 hover:bg-sky-600 text-black font-bold px-6 py-2 rounded-lg transition-colors tracking-wide uppercase">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar