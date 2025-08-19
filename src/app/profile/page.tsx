"use client"

import { useState } from "react"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Plus, Check, ChevronRight } from "lucide-react"

interface Profile {
  avatar: string
  name: string
  handle: string
  bio: string
}

interface SocialLinks {
  twitter: string
  github: string
  youtube: string
  website: string
}

interface DonationLink {
  id: number
  name: string
  url: string
  amount: string
  clicks: number
  earnings: string
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile>({
    avatar: "/placeholder.svg?height=100&width=100",
    name: "Alex Chen",
    handle: "@alexchen",
    bio: "Creator passionate about web3, open-source, and building communities. Buy me water to support my work!",
  })

  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    twitter: "https://twitter.com/alexchen",
    github: "https://github.com/alexchen",
    youtube: "https://youtube.com/alexchen",
    website: "https://alexchen.dev",
  })

  const donationLinks: DonationLink[] = [
    {
      id: 1,
      name: "General Support",
      url: "buymewater.app/alexchen",
      amount: "Any",
      clicks: 1247,
      earnings: "2,840 SUI",
    },
    {
      id: 2,
      name: "Coffee Alternative",
      url: "buymewater.app/alexchen/coffee",
      amount: "5 SUI",
      clicks: 892,
      earnings: "4,460 SUI",
    },
  ]

  const updateProfile = (field: keyof Profile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  const updateSocialLink = (platform: keyof SocialLinks, value: string) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }))
  }

  const capitalize = (s: string) => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const saveProfile = () => {
    console.log("Saving profile:", { profile, socialLinks })
    // Here you would typically send this data to a backend API
    alert("Profile saved successfully!")
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-white mb-6">My Profile</h1>

      {/* Profile Information Section */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Public Profile</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-24 h-24 shrink-0">
            <img
              src={profile.avatar || "/placeholder.svg"}
              alt="Profile Avatar"
              className="w-full h-full rounded-full object-cover border-2 border-sky-400/50"
            />
            <button className="absolute bottom-0 right-0 bg-sky-500 text-black rounded-full p-1.5 hover:bg-sky-600 transition-colors">
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={profile.name}
                  onChange={(e) => updateProfile("name", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-sky-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                />
              </div>
              <div>
                <label htmlFor="handle" className="block text-sm font-medium text-gray-300 mb-2">
                  Handle
                </label>
                <input
                  id="handle"
                  type="text"
                  value={profile.handle}
                  onChange={(e) => updateProfile("handle", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-sky-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  value={profile.bio}
                  onChange={(e) => updateProfile("bio", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-sky-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 resize-y"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Social Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(socialLinks).map(([platform, link]) => (
            <div key={platform}>
              <label htmlFor={platform} className="block text-sm font-medium text-gray-300 mb-2">
                {capitalize(platform)}
              </label>
              <input
                id={platform}
                type="text"
                value={link}
                onChange={(e) => updateSocialLink(platform as keyof SocialLinks, e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-sky-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                placeholder={`Your ${platform} URL`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Donation Links Overview */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Your Donation Links</h3>
          <a
            href="/links"
            className="text-sm text-sky-400 hover:text-sky-300 transition-colors flex items-center space-x-1"
          >
            <span>Manage All</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="space-y-3">
          {donationLinks.length > 0 ? (
            donationLinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center justify-between p-3 rounded-lg bg-sky-500/5 hover:bg-sky-500/10 transition-colors"
              >
                <div>
                  <p className="font-medium text-white">{link.name}</p>
                  <p className="text-xs text-gray-400">{link.url}</p>
                </div>
                <p className="font-semibold text-sky-400">{link.earnings}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">No donation links created yet.</p>
          )}
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end">
        <button
          onClick={saveProfile}
          className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-black font-medium rounded-lg transition-colors flex items-center space-x-2"
        >
          <Check className="h-5 w-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </DashboardLayout>
  )
}
