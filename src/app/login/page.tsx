"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { FcGoogle } from "react-icons/fc"
import { HiOutlineShieldCheck, HiOutlineLightningBolt } from "react-icons/hi"
import { auth, provider } from "@/app/lib/firebase"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"



export default function AuthPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  // ✅ Track user state across reloads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    })
    return () => unsubscribe()
  }, [])

  // ✅ Redirect if already signed in
  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  // ✅ Sign in with Google
  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (err) {
      console.error("Sign in error:", err)
    }
  }

  return (
    <>
    
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-gray-900/60 backdrop-blur-xl p-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-sky-900/20 opacity-30 rounded-3xl"></div>

          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
              <p className="text-gray-400">
                {user ? "You’re signed in 🚀 Redirecting..." : "Sign in to access your creator dashboard"}
              </p>
            </div>

            <button
              onClick={signIn}
              disabled={!!user}
              className="w-full flex items-center justify-center space-x-3 bg-black/70 hover:bg-black/50 border-2 border-sky-500/40 hover:border-sky-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-sky-500/20 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              <FcGoogle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Continue with Google</span>
            </button>

            {/* Security Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <HiOutlineShieldCheck className="w-5 h-5 text-sky-400" />
                <span>Your data is encrypted and secure</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlineLightningBolt className="w-5 h-5 text-sky-400" />
                <span>Fast, one-click authentication</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 text-center text-sm text-gray-400">
          New to WaterAuth?{" "}
          <button className="text-sky-400 hover:text-sky-500 font-semibold">Learn more →</button>
        </div>
      </div>
    </div>
    
    </>
  )
}
