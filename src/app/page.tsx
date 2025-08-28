"use client"

import Navbar from "./components/home/Navbar"
import Hero from "./components/home/Hero"
import Footer from "./components/home/Footer"


export default function LandingPage() {



  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <style>{`
        html {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
      `}</style>
    
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar/>

      <Hero />

      <Footer />
    </div></>
  )
}
