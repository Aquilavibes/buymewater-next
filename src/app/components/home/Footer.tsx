"use client"
import {  Droplets } from "lucide-react"
const Footer = () => {
  return (
    <div>
        <footer className="border-t border-sky-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Droplets className="h-6 w-6 text-sky-400" />
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent font-mono">
                BUYMEWATER
              </span>
            </div>
            <div className="flex items-center space-x-6 text-gray-400">
              <a
                href="#"
                className="hover:text-sky-400 transition-colors font-semibold tracking-wide uppercase text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition-colors font-semibold tracking-wide uppercase text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition-colors font-semibold tracking-wide uppercase text-sm"
              >
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="font-normal tracking-wide">&copy; 2024 BUYMEWATER. BUILT ON SUI BLOCKCHAIN.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer