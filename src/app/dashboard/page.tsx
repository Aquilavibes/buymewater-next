"use client"

import { StatsCard } from "@/app/components/stats-card"
import { EarningsChart } from "@/app/components/earnings-charts"
import { TopCreators } from "@/app/components/top-creators"
import { RecentTransactions } from "@/app/components/recent-transactions"
import { QuickActions } from "@/app/components/quick-actions"
import { DonationLinksManager } from "@/app/components/donation-links-manager"

export default function DashboardPage() {
  const stats = {
    balance: "2,847.50 SUI",
    monthlyEarnings: "1,234.80 SUI",
    supporters: "1,847",
    successRate: "98.5%",
  }

  const chartData = [
    { month: "Jan", earnings: 1200 },
    { month: "Feb", earnings: 1900 },
    { month: "Mar", earnings: 1500 },
    { month: "Apr", earnings: 2200 },
    { month: "May", earnings: 1800 },
    { month: "Jun", earnings: 2400 },
  ]

  const topCreators = [
    { id: 1, name: "Alex Chen", avatar: "/placeholder.svg", earnings: "5,240 SUI", supporters: 2840 },
    { id: 2, name: "Sarah Kim", avatar: "/placeholder.svg", earnings: "4,180 SUI", supporters: 2156 },
    { id: 3, name: "Mike Johnson", avatar: "/placeholder.svg", earnings: "3,920 SUI", supporters: 1987 },
    { id: 4, name: "Emma Davis", avatar: "/placeholder.svg", earnings: "3,650 SUI", supporters: 1743 },
  ]

  const recentTransactions = [
    { id: 1, from: "john_doe", amount: "25.50 SUI", time: "2m ago", status: "completed" as const, message: "Thanks!" },
    { id: 2, from: "crypto_fan", amount: "50.00 SUI", time: "15m ago", status: "completed" as const, message: "Keep it up!" },
  ]

  const donationLinks = [
    { id: 1, name: "General Support", url: "buymewater.app/alexchen", amount: "Any", clicks: 1247, earnings: "2,840 SUI" },
    { id: 2, name: "Coffee Alt", url: "buymewater.app/alexchen/coffee", amount: "5 SUI", clicks: 892, earnings: "4,460 SUI" },
  ]

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Balance" value={stats.balance} icon="wallet" trend="+12.5%" color="sky" />
        <StatsCard title="This Month" value={stats.monthlyEarnings} icon="trending-up" trend="+8.2%" color="emerald" />
        <StatsCard title="Total Supporters" value={stats.supporters} icon="users" trend="+15.3%" color="purple"/>
        
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsChart data={chartData} />
        <TopCreators creators={topCreators} />
      </div>

      {/* Transactions + Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentTransactions transactions={recentTransactions} />
        </div>
        <QuickActions />
      </div>

      {/* Links */}
      <DonationLinksManager links={donationLinks} />
    </>
  )
}
