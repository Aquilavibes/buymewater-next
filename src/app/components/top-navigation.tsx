"use client"

import { Menu, Search, Bell } from "lucide-react"

interface TopNavigationProps {
  onToggleSidebar: () => void
}

export function TopNavigation({ onToggleSidebar }: TopNavigationProps) {
  return (
    <header className="bg-black/50 backdrop-blur-xl border-b border-sky-500/20 sticky top-0 z-40">
        
      <div className="flex items-center justify-between px-6 py-4">
        {/* Mobile menu button */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 lg:ml-[300px]" />
            <input
              type="text"
              placeholder="Search transactions, creators..."
              className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-sky-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 backdrop-blur-sm lg:ml-[300px]"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
          </button>

          {/* User profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-white">JD</span>
            </div>
          </div>

          <button className="relative p-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition-colors ">
            Sui Wallet
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
          </button>
        </div>
      </div>
    </header>
  )
}
