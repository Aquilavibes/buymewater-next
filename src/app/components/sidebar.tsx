"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  LayoutDashboard,
  BarChart3,
  CreditCard,
  LinkIcon,
  User,
  Settings,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onCloseSidebar: () => void
}

export function Sidebar({ isOpen, onCloseSidebar }: SidebarProps) {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState("")

  const navigationItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Analytics", icon: BarChart3, href: "/analytics" },
    { name: "Transactions", icon: CreditCard, href: "/transactions" },
    { name: "Donation Links", icon: LinkIcon, href: "/links" },
    { name: "Profile", icon: User, href: "/profile" },
    { name: "Settings", icon: Settings, href: "/settings" },
    { name: "Withdraw", icon: ArrowUpRight, href: "/withdraw" },
  ]

  useEffect(() => {
    const currentItem = navigationItems.find((item) => item.href === pathname)
    setActiveItem(currentItem?.name || "Dashboard")
  }, [pathname])

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName)
    onCloseSidebar()
  }

  return (
    <div className="h-[700px] fixed flex flex-col bg-gradient-to-br from-sky-900/20 via-black/40 to-purple-900/20 backdrop-blur-xl border-r border-sky-500/20 ">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 px-6 border-b border-sky-500/20">
        <svg className="h-8 w-8 text-sky-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
        <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
          BuyMeWater
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.name

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                  : "text-gray-300 hover:bg-sky-500/10 hover:text-sky-400"
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              <Icon className="mr-3 h-5 w-5 transition-colors" />
              <span>{item.name}</span>
              {isActive && <div className="ml-auto w-2 h-2 bg-sky-400 rounded-full animate-pulse" />}
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sky-500/20">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 transition-colors cursor-pointer">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-sky-400/50"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Alex Chen</p>
            <p className="text-xs text-sky-400 truncate">@alexchen</p>
          </div>
          <ChevronRight className="h-4 w-4 text-sky-400" />
        </div>
      </div>
    </div>
  )
}
