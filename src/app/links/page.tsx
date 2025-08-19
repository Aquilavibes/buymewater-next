"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { Plus, Copy, Share, Edit, Trash2 } from "lucide-react"

interface DonationLink {
  id: number
  name: string
  url: string
  amount: string
  clicks: number
  earnings: string
}

interface CurrentLink {
  id: number | null
  name: string
  amount: string
  url: string
  clicks: number
  earnings: string
}

export default function Links() {
  const [showModal, setShowModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentLink, setCurrentLink] = useState<CurrentLink>({
    id: null,
    name: "",
    amount: "",
    url: "",
    clicks: 0,
    earnings: "0 SUI",
  })

  const [donationLinks, setDonationLinks] = useState<DonationLink[]>([
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
    {
      id: 3,
      name: "Premium Content",
      url: "buymewater.app/alexchen/premium",
      amount: "25 SUI",
      clicks: 156,
      earnings: "3,900 SUI",
    },
  ])

  const openCreateModal = () => {
    setIsEditing(false)
    setCurrentLink({
      id: null,
      name: "",
      amount: "",
      url: "",
      clicks: 0,
      earnings: "0 SUI",
    })
    setShowModal(true)
  }

  const editLink = (link: DonationLink) => {
    setIsEditing(true)
    setCurrentLink({ ...link })
    setShowModal(true)
  }

  const saveLink = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentLink.name || !currentLink.amount) {
      alert("Please fill in all fields.")
      return
    }

    if (isEditing) {
      setDonationLinks((prev) =>
        prev.map((link) => (link.id === currentLink.id ? ({ ...currentLink } as DonationLink) : link)),
      )
    } else {
      const newLink: DonationLink = {
        id: Date.now(),
        name: currentLink.name,
        url: `buymewater.app/user/${currentLink.name.toLowerCase().replace(/\s+/g, "-")}`,
        amount: currentLink.amount,
        clicks: 0,
        earnings: "0 SUI",
      }
      setDonationLinks((prev) => [...prev, newLink])
    }
    closeModal()
  }

  const deleteLink = (id: number) => {
    if (confirm("Are you sure you want to delete this link?")) {
      setDonationLinks((prev) => prev.filter((link) => link.id !== id))
    }
  }

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      alert("Link copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy: ", err)
      alert("Failed to copy link.")
    }
  }

  const shareLink = async (url: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "BuyMeWater Donation Link",
          url: url,
        })
        console.log("Link shared successfully")
      } catch (error) {
        console.error("Error sharing link:", error)
      }
    } else {
      alert("Web Share API is not supported in your browser. Please copy the link manually.")
      copyLink(url)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const updateCurrentLink = (field: keyof CurrentLink, value: string) => {
    setCurrentLink((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Donation Links</h1>
        <button
          onClick={openCreateModal}
          className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-black font-medium rounded-lg transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Create New Link</span>
        </button>
      </div>

      {/* Donation Links List */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <div className="space-y-4">
          {donationLinks.length > 0 ? (
            donationLinks.map((link) => (
              <div
                key={link.id}
                className="p-4 rounded-lg bg-sky-500/5 hover:bg-sky-500/10 transition-colors border border-sky-500/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-white">{link.name}</h4>
                    <p className="text-sm text-sky-400">{link.url}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => copyLink(link.url)}
                      className="p-2 text-gray-400 hover:text-sky-400 transition-colors"
                      title="Copy Link"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => shareLink(link.url)}
                      className="p-2 text-gray-400 hover:text-sky-400 transition-colors"
                      title="Share Link"
                    >
                      <Share className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => editLink(link)}
                      className="p-2 text-gray-400 hover:text-sky-400 transition-colors"
                      title="Edit Link"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => deleteLink(link.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Link"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Amount</p>
                    <p className="font-medium text-white">{link.amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Clicks</p>
                    <p className="font-medium text-white">{link.clicks}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Earnings</p>
                    <p className="font-medium text-sky-400">{link.earnings}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-8">
              No donation links created yet. Click "Create New Link" to get started!
            </p>
          )}
        </div>
      </div>

      {/* Create/Edit Link Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-sky-500/20 rounded-xl p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {isEditing ? "Edit Donation Link" : "Create Donation Link"}
            </h3>

            <form onSubmit={saveLink} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Link Name</label>
                <input
                  type="text"
                  value={currentLink.name}
                  onChange={(e) => updateCurrentLink("name", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-sky-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                  placeholder="e.g., Coffee Support"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Amount (SUI)</label>
                <input
                  type="text"
                  value={currentLink.amount}
                  onChange={(e) => updateCurrentLink("amount", e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-sky-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                  placeholder="e.g., 5 or Any"
                  required
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-black font-medium rounded-lg transition-colors"
                >
                  {isEditing ? "Save Changes" : "Create Link"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
