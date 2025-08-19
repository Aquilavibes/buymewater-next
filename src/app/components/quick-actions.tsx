"use client"

import { LinkIcon, Share, Download, Settings, ChevronRight } from "lucide-react"

const actions = [
  {
    name: "Create Link",
    description: "New donation link",
    icon: LinkIcon,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/20",
    action: "create-link",
  },
  {
    name: "Share Profile",
    description: "Share your page",
    icon: Share,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
    action: "share-profile",
  },
  {
    name: "Withdraw",
    description: "Transfer to wallet",
    icon: Download,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
    action: "withdraw",
  },
  {
    name: "Settings",
    description: "Account settings",
    icon: Settings,
    iconColor: "text-gray-400",
    iconBg: "bg-gray-500/20",
    action: "settings",
  },
]

export function QuickActions() {
  const handleAction = (actionType: string) => {
    console.log("Action triggered:", actionType)
    // Handle different actions
  }

  return (
    <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <button
              key={action.name}
              className="w-full flex items-center space-x-3 p-4 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 transition-all duration-200 group border border-sky-500/20 hover:border-sky-400/40"
              onClick={() => handleAction(action.action)}
            >
              <div className={`p-2 rounded-lg ${action.iconBg}`}>
                <Icon className={`h-5 w-5 ${action.iconColor}`} />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-white">{action.name}</p>
                <p className="text-xs text-gray-400">{action.description}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
