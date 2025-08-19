"use client"

import { useState } from "react"
import { LinkIcon, Copy, Edit, Trash2, Plus } from "lucide-react"

interface DonationLink {
  id: number
  name: string
  url: string
  amount: string
  clicks: number
  earnings: string
}

interface DonationLinksManagerProps {
  links: DonationLink[]
}

export function DonationLinksManager({ links }: DonationLinksManagerProps) {
  const [showCreateForm, setShowCreateForm] = useState(false)

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url)
    // You could add a toast notification here
  }

  return (
    <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Donation Links</h3>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="flex items-center space-x-2 px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 rounded-lg transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Create Link</span>
        </button>
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <div key={link.id} className="p-4 rounded-lg bg-sky-500/10 border border-sky-500/20">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-sky-500/20 rounded-lg">
                  <LinkIcon className="h-4 w-4 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">{link.name}</h4>
                  <p className="text-sm text-gray-400">{link.url}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopyLink(link.url)}
                  className="p-2 hover:bg-sky-500/20 rounded-lg transition-colors"
                >
                  <Copy className="h-4 w-4 text-gray-400 hover:text-sky-400" />
                </button>
                <button className="p-2 hover:bg-sky-500/20 rounded-lg transition-colors">
                  <Edit className="h-4 w-4 text-gray-400 hover:text-sky-400" />
                </button>
                <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors">
                  <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-400" />
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
                <p className="font-medium text-white">{link.clicks.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400">Earnings</p>
                <p className="font-medium text-sky-400">{link.earnings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
