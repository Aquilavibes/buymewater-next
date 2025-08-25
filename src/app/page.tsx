"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Droplets, Menu, X, Zap, CheckCircle, Shield, Users } from "lucide-react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const stats = {
    creators: "10K",
    totalSupported: "2M",
    supporters: "50K",
    uptime: "99.9",
  }

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
    <div className="min-h-screen bg-black text-white font-sans">
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

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-sky-900/20"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 mb-8">
              <Zap className="h-4 w-4 text-sky-400" />
              <span className="text-sky-400 text-sm font-bold tracking-widest uppercase font-mono">
                Powered by Sui Blockchain
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              SUPPORT CREATORS WITH
              <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent block">
                DIGITAL WATER
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
              The future of creator support is here. Send instant, secure payments to your favorite creators using the
              power of Sui blockchain technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <button className="bg-sky-500 hover:bg-sky-600 text-black font-bold px-8 py-4 text-lg rounded-lg transition-colors flex items-center tracking-wide uppercase">
                  Start Supporting Creators
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link href="/dashboard">
                <button
                  
                  className="border border-sky-500 text-sky-400 hover:bg-sky-500/10 px-8 py-4 text-lg bg-transparent rounded-lg transition-colors tracking-wide uppercase font-bold"
                >
                  Create Your Page
                </button>
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-sky-400" />
                <span className="font-semibold tracking-wide uppercase text-sm">Instant Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-sky-400" />
                <span className="font-semibold tracking-wide uppercase text-sm">Zero Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-sky-400" />
                <span className="font-semibold tracking-wide uppercase text-sm">Blockchain Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gradient-to-b from-transparent to-sky-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">
              WHY CHOOSE <span className="text-sky-400">BUYMEWATER</span>?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-normal">
              Experience the next generation of creator support with cutting-edge blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-sky-500/20 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="bg-sky-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-sky-400" />
              </div>
              <h3 className="text-xl font-black mb-4 text-white tracking-tight uppercase">Lightning Fast</h3>
              <p className="text-gray-300 font-normal">
                Instant transactions powered by Sui's high-performance blockchain. No waiting, no delays.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-sky-500/20 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="bg-sky-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-sky-400" />
              </div>
              <h3 className="text-xl font-black mb-4 text-white tracking-tight uppercase">Ultra Secure</h3>
              <p className="text-gray-300 font-normal">
                Military-grade security with blockchain transparency. Your transactions are safe and verifiable.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-sky-500/20 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="bg-sky-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-sky-400" />
              </div>
              <h3 className="text-xl font-black mb-4 text-white tracking-tight uppercase">Global Community</h3>
              <p className="text-gray-300 font-normal">
                Connect with creators worldwide. No borders, no restrictions, just pure support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">How It Works</h2>
            <p className="text-gray-300 text-lg font-normal">Simple, fast, and secure in just three steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-black text-xl">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="14" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <path d="M2 10h20" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="17" cy="15" r="1.5" fill="currentColor"/>
              </svg>
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight uppercase">Connect Wallet</h3>
              <p className="text-gray-300 font-normal">
                Connect your Sui wallet to get started. We support all major Sui wallets.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-black text-xl">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="#0000"/>
            <rect x="4" y="9" width="16" height="6" rx="1" stroke="#0000" stroke-width="1.2" fill=""/>
            <circle cx="12" cy="12" r="2" fill="#0000"/>
            <path d="M6 7v10M18 7v10" stroke="#0000" stroke-width="1.2"/>
          </svg>


              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight uppercase">Choose Amount</h3>
              <p className="text-gray-300 font-normal">
                Select how much water you want to buy for your favorite creator.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-black text-xl">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M3 20l18-8-18-8v7l13 1-13 1z" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight uppercase">Send Support</h3>
              <p className="text-gray-300 font-normal">
                Your support is instantly delivered. The creator gets notified immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-r from-sky-950/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-sky-400 mb-2 tracking-tight font-mono">{stats.creators}+</div>
              <div className="text-gray-300 font-semibold tracking-wide uppercase text-sm">Active Creators</div>
            </div>
            <div>
              <div className="text-4xl font-black text-sky-400 mb-2 tracking-tight font-mono">
                ${stats.totalSupported}+
              </div>
              <div className="text-gray-300 font-semibold tracking-wide uppercase text-sm">Total Supported</div>
            </div>
            <div>
              <div className="text-4xl font-black text-sky-400 mb-2 tracking-tight font-mono">{stats.supporters}+</div>
              <div className="text-gray-300 font-semibold tracking-wide uppercase text-sm">Supporters</div>
            </div>
            <div>
              <div className="text-4xl font-black text-sky-400 mb-2 tracking-tight font-mono">{stats.uptime}%</div>
              <div className="text-gray-300 font-semibold tracking-wide uppercase text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6 tracking-tight uppercase">Ready to Start Supporting Creators?</h2>
            <p className="text-xl text-gray-300 mb-8 font-normal">
              Join thousands of supporters who are already making a difference in the creator economy.
            </p>
            <Link href="/dashboard">
              <button className="bg-sky-500 hover:bg-sky-600 text-black font-bold px-8 py-4 text-lg rounded-lg transition-colors flex items-center mx-auto tracking-wide uppercase">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

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
