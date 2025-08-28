"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/app/components/sidebar"
import { TopNavigation } from "@/app/components/top-navigation"
import { cn } from "@/app/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
  className?: string
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
  

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <TopNavigation onToggleSidebar={toggleSidebar} />

      {/* Layout Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 shrink-0 border-r border-sky-500/20">
          <Sidebar isOpen={true} onCloseSidebar={toggleSidebar} />
        </div>

        {/* Mobile Sidebar (Overlay) */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fade-in-up"
              onClick={toggleSidebar}
            />
            <div className="fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 bg-black bg-opacity-90 p-4 lg:hidden animate-slide-in-left">
              <Sidebar isOpen={sidebarOpen} onCloseSidebar={toggleSidebar} />
            </div>
          </>
        )}

        <main className={cn("flex-1 p-6 overflow-y-auto space-y-6 custom-scrollbar", className)}>{children}</main>
      </div>
    </div>
  )
}
