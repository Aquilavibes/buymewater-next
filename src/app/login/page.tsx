'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation"; // ✅ App Router import
import { FcGoogle } from 'react-icons/fc'
import { auth } from "@/app/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { HiOutlineShieldCheck, HiOutlineLightningBolt } from 'react-icons/hi'

export default function AuthPage() {
  const [user, setUser] = useState(null);
  const router = useRouter(); // ✅ useRouter (renamed to router for clarity)

  // ✅ Sign In function
  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        setUser(result.user); // save logged in user
        router.push("/dashboard"); // navigate after login
      }
    } catch (err) {
      console.error("Sign in error:", err);
      alert("Google sign in failed");
    }
  };
  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Auth Card */}
        <div className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-gray-900/60 backdrop-blur-xl p-8 shadow-2xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-sky-900/20 opacity-30 rounded-3xl"></div>

          {/* Card Content */}
          <div className="relative z-10 space-y-8">
            {/* Header */}
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
              <p className="text-gray-400">Sign in to access your creator dashboard</p>
            </div>
            <p className="text-gray-400">
                {user ? "You’re signed in 🚀" : "Sign in to access your creator dashboard"}
              </p>
            {/* Google Sign In Button */}
            <button
                onClick={signIn}
                className="w-full flex items-center justify-center space-x-3 bg-black/70 hover:bg-black/50 border-2 border-sky-500/40 hover:border-sky-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-sky-500/20 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                <FcGoogle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Continue with Google</span>
              </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-sky-500/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black text-gray-400">Secure & Trusted</span>
              </div>
            </div>

            {/* Security Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <HiOutlineShieldCheck className="w-5 h-5 text-sky-400" />
                <span>Your data is encrypted and secure</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <HiOutlineLightningBolt className="w-5 h-5 text-sky-400" />
                <span>Fast, one-click authentication</span>
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By continuing, you agree to our{' '}
              <button className="text-sky-400 hover:text-sky-500 underline">
                Terms of Service
              </button>{' '}
              and{' '}
              <button className="text-sky-400 hover:text-sky-500 underline">
                Privacy Policy
              </button>
            </p>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            New to WaterAuth?{' '}
            <button className="text-sky-400 hover:text-sky-500 font-semibold">
              Learn more →
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
