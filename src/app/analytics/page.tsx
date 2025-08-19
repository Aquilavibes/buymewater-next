"use client"

import { useState } from "react"
import { DashboardLayout } from "@/app/components/dashboard-layout"
import { StatsCard } from "@/app/components/stats-card"

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 Days")
  const periods = ["Last 7 Days", "Last 30 Days", "Last 90 Days", "All Time"]

  const analyticsStats = {
    totalEarnings: "15,230.75 SUI",
    uniqueSupporters: "5,890",
    avgDonation: "25.80 SUI",
    conversionRate: "4.2%",
  }

  const earningsChartData = [
    { label: "Day 1", value: 120 },
    { label: "Day 2", value: 150 },
    { label: "Day 3", value: 130 },
    { label: "Day 4", value: 180 },
    { label: "Day 5", value: 200 },
    { label: "Day 6", value: 170 },
    { label: "Day 7", value: 220 },
    { label: "Day 8", value: 250 },
    { label: "Day 9", value: 210 },
    { label: "Day 10", value: 280 },
  ]

  const topDonationLinks = [
    { name: "General Support", earnings: 5200 },
    { name: "Coffee Alternative", earnings: 4100 },
    { name: "Premium Content", earnings: 3500 },
    { name: "Tutorial Series", earnings: 2800 },
    { name: "Monthly Goal", earnings: 1900 },
  ]

  const detailedAnalytics = [
    { linkName: "General Support", clicks: 5890, conversions: 2100, earnings: "5,230.75" },
    { linkName: "Coffee Alternative", clicks: 4120, conversions: 1850, earnings: "4,100.00" },
    { linkName: "Premium Content", clicks: 2500, conversions: 1200, earnings: "3,500.00" },
    { linkName: "Tutorial Series", clicks: 1800, conversions: 950, earnings: "2,800.00" },
    { linkName: "Monthly Goal", clicks: 1200, conversions: 700, earnings: "1,900.00" },
    { linkName: "Exclusive Access", clicks: 800, conversions: 300, earnings: "1,000.00" },
  ]

  const maxChartValue = Math.max(...earningsChartData.map((item) => item.value))
  const maxLinkEarnings = Math.max(...topDonationLinks.map((item) => item.earnings))

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-white mb-6">Analytics Overview</h1>

      {/* Date Range Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">Period:</span>
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                selectedPeriod === period
                  ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                  : "text-gray-400 hover:bg-sky-500/10 hover:text-sky-400"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Earnings"
          value={analyticsStats.totalEarnings}
          icon="wallet"
          trend="+15.2%"
          color="sky"
        />
        <StatsCard
          title="Unique Supporters"
          value={analyticsStats.uniqueSupporters}
          icon="users"
          trend="+10.5%"
          color="purple"
        />
        <StatsCard
          title="Avg. Donation"
          value={analyticsStats.avgDonation}
          icon="credit-card"
          trend="-2.1%"
          color="emerald"
        />
        <StatsCard
          title="Conversion Rate"
          value={analyticsStats.conversionRate}
          icon="check-circle"
          trend="+0.8%"
          color="blue"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earnings Over Time Chart */}
        <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Earnings Over Time</h3>
          <div className="space-y-4">
            {earningsChartData.map((item, index) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-sm text-gray-400 w-16">{item.label}</span>
                <div className="flex-1 mx-4 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(item.value / maxChartValue) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-white w-20 text-right">{item.value} SUI</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Donation Links Chart */}
        <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Top Donation Links</h3>
          <div className="space-y-4">
            {topDonationLinks.map((link, index) => (
              <div key={link.name} className="flex items-center justify-between">
                <span className="text-sm text-gray-400 w-32 truncate">{link.name}</span>
                <div className="flex-1 mx-4 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(link.earnings / maxLinkEarnings) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-white w-20 text-right">{link.earnings} SUI</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics Table */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Detailed Analytics</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="text-xs text-gray-300 uppercase bg-gray-800/50 border-b border-sky-500/20">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Link Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Clicks
                </th>
                <th scope="col" className="px-6 py-3">
                  Conversions
                </th>
                <th scope="col" className="px-6 py-3">
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody>
              {detailedAnalytics.map((detail) => (
                <tr key={detail.linkName} className="border-b border-sky-500/10 hover:bg-sky-500/5 transition-colors">
                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    {detail.linkName}
                  </th>
                  <td className="px-6 py-4">{detail.clicks}</td>
                  <td className="px-6 py-4">{detail.conversions}</td>
                  <td className="px-6 py-4 text-sky-400 font-semibold">{detail.earnings} SUI</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
