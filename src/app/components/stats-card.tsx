"use client"

import { Wallet, TrendingUp, Users, CheckCircle, CreditCard } from "lucide-react"
import { cn } from "@/app/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  icon: "wallet" | "trending-up" | "users" | "check-circle" | "credit-card"
  trend: string
  color: "sky" | "emerald" | "purple" | "blue"
  className?: string
}

const iconMap = {
  wallet: Wallet,
  "trending-up": TrendingUp,
  users: Users,
  "check-circle": CheckCircle,
  "credit-card": CreditCard,
}

const colorClasses = {
  sky: {
    background: "from-sky-500/10 to-sky-600/10",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
    trend: "text-emerald-400",
  },
  emerald: {
    background: "from-emerald-500/10 to-emerald-600/10",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    trend: "text-emerald-400",
  },
  purple: {
    background: "from-purple-500/10 to-purple-600/10",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    trend: "text-emerald-400",
  },
  blue: {
    background: "from-blue-500/10 to-blue-600/10",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    trend: "text-emerald-400",
  },
}

export function StatsCard({ title, value, icon, trend, color, className }: StatsCardProps) {
  const Icon = iconMap[icon]
  const classes = colorClasses[color]

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 p-6 hover:border-sky-400/40 transition-all duration-300 group animate-fade-in-up",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300",
          classes.background,
        )}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-2 rounded-lg", classes.iconBg)}>
            <Icon className={cn("h-6 w-6", classes.iconColor)} />
          </div>

          <div className={cn("flex items-center text-sm", classes.trend)}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {trend}
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold text-white mb-1">{value}</p>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-flow bg-gradient-to-r from-transparent via-sky-500/10 to-transparent" />
    </div>
  )
}
