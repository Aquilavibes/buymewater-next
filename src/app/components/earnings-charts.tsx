"use client"

import { useState } from "react"

interface ChartData {
  month: string
  earnings: number
}

interface EarningsChartProps {
  data: ChartData[]
}

export function EarningsChart({ data }: EarningsChartProps) {
  const [selectedPeriod, setSelectedPeriod] = useState("6M")
  const periods = ["1M", "3M", "6M", "1Y"]

  const maxEarnings = Math.max(...data.map((item) => item.earnings))
  const totalEarnings = data.reduce((sum, item) => sum + item.earnings, 0).toLocaleString()

  return (
    <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Earnings Overview</h3>
        <div className="flex space-x-2">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                selectedPeriod === period ? "bg-sky-500/20 text-sky-400" : "text-gray-400 hover:text-sky-400"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Simple chart representation */}
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={item.month} className="flex items-center justify-between">
            <span className="text-sm text-gray-400 w-12">{item.month}</span>
            <div className="flex-1 mx-4 bg-gray-800 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${(item.earnings / maxEarnings) * 100}%`,
                  animationDelay: `${index * 100}ms`,
                }}
              />
            </div>
            <span className="text-sm font-medium text-white w-20 text-right">{item.earnings} SUI</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 pt-4 border-t border-sky-500/20">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Total Earnings</span>
          <span className="text-xl font-bold text-sky-400">{totalEarnings} SUI</span>
        </div>
      </div>
    </div>
  )
}
