"use client"

import { useState, useMemo } from "react"
import { DashboardLayout } from "@/app/components/dashboard-layout"

interface Transaction {
  id: string
  type: "received" | "sent"
  from: string
  to: string
  amount: string
  message?: string
  status: "completed" | "pending" | "failed"
  timestamp: string
}

export default function Transactions() {
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [loadedTransactionsCount, setLoadedTransactionsCount] = useState(5)

  const transactionsPerPage = 5
  const transactionStatuses = ["All", "completed", "pending", "failed"]
  const transactionTypes = ["All", "received", "sent"]

  const allTransactions: Transaction[] = [
    {
      id: "tx_001",
      type: "received",
      from: "john_doe",
      to: "alex_chen",
      amount: "25.50 SUI",
      message: "Thanks for the amazing content!",
      status: "completed",
      timestamp: "2025-07-30T10:30:00Z",
    },
    {
      id: "tx_002",
      type: "sent",
      from: "alex_chen",
      to: "sarah_kim",
      amount: "15.00 SUI",
      message: "Payment for design work",
      status: "completed",
      timestamp: "2025-07-29T14:00:00Z",
    },
    {
      id: "tx_003",
      type: "received",
      from: "crypto_fan",
      to: "alex_chen",
      amount: "50.00 SUI",
      message: "Keep up the great work!",
      status: "completed",
      timestamp: "2025-07-28T09:15:00Z",
    },
    {
      id: "tx_004",
      type: "received",
      from: "water_lover",
      to: "alex_chen",
      amount: "10.25 SUI",
      message: "Love your tutorials",
      status: "pending",
      timestamp: "2025-07-27T18:45:00Z",
    },
    {
      id: "tx_005",
      type: "sent",
      from: "alex_chen",
      to: "mike_j",
      amount: "5.00 SUI",
      message: "Quick support",
      status: "completed",
      timestamp: "2025-07-26T11:20:00Z",
    },
    {
      id: "tx_006",
      type: "received",
      from: "blockchain_dev",
      to: "alex_chen",
      amount: "75.00 SUI",
      message: "Amazing insights on DeFi",
      status: "completed",
      timestamp: "2025-07-25T08:00:00Z",
    },
    {
      id: "tx_007",
      type: "received",
      from: "anon_user",
      to: "alex_chen",
      amount: "5.00 SUI",
      message: "Small token of appreciation",
      status: "completed",
      timestamp: "2025-07-24T16:00:00Z",
    },
    {
      id: "tx_008",
      type: "sent",
      from: "alex_chen",
      to: "exchange_x",
      amount: "100.00 SUI",
      message: "Withdrawal to exchange",
      status: "pending",
      timestamp: "2025-07-23T10:00:00Z",
    },
    {
      id: "tx_009",
      type: "received",
      from: "fan_22",
      to: "alex_chen",
      amount: "12.00 SUI",
      message: "Great content!",
      status: "completed",
      timestamp: "2025-07-22T19:30:00Z",
    },
    {
      id: "tx_010",
      type: "sent",
      from: "alex_chen",
      to: "charity_org",
      amount: "20.00 SUI",
      message: "Donation",
      status: "failed",
      timestamp: "2025-07-21T12:00:00Z",
    },
  ]

  const filteredTransactions = useMemo(() => {
    let filtered = allTransactions

    if (selectedStatus !== "All") {
      filtered = filtered.filter((tx) => tx.status === selectedStatus)
    }
    if (selectedType !== "All") {
      filtered = filtered.filter((tx) => tx.type === selectedType)
    }

    return filtered.slice(0, loadedTransactionsCount)
  }, [selectedStatus, selectedType, loadedTransactionsCount])

  const hasMoreTransactions = useMemo(() => {
    let filtered = allTransactions
    if (selectedStatus !== "All") {
      filtered = filtered.filter((tx) => tx.status === selectedStatus)
    }
    if (selectedType !== "All") {
      filtered = filtered.filter((tx) => tx.type === selectedType)
    }
    return loadedTransactionsCount < filtered.length
  }, [selectedStatus, selectedType, loadedTransactionsCount])

  const loadMoreTransactions = () => {
    setLoadedTransactionsCount((prev) => prev + transactionsPerPage)
  }

  const formatDate = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleString()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 text-emerald-400"
      case "pending":
        return "bg-yellow-500/20 text-yellow-400"
      case "failed":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getTypeColor = (type: string) => {
    return type === "received" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-white mb-6">Transactions</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">Status:</span>
          {transactionStatuses.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                selectedStatus === status
                  ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                  : "text-gray-400 hover:bg-sky-500/10 hover:text-sky-400"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">Type:</span>
          {transactionTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                selectedType === type
                  ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                  : "text-gray-400 hover:bg-sky-500/10 hover:text-sky-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Transaction List */}
      <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-lg bg-sky-500/5 hover:bg-sky-500/10 transition-colors group"
            >
              <div className="flex items-start space-x-3 mb-3 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-black font-bold text-sm shrink-0">
                  {(transaction.type === "received" ? transaction.from : transaction.to).charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-white truncate">
                      {transaction.type === "received" ? transaction.from : transaction.to}
                    </p>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(transaction.type)}`}>
                      {transaction.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 truncate">{transaction.message || "No message"}</p>
                  <p className="text-xs text-gray-500 mt-1">{formatDate(transaction.timestamp)}</p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <p className={`font-semibold ${transaction.type === "received" ? "text-sky-400" : "text-red-400"}`}>
                  {transaction.type === "received" ? "+" : "-"}
                  {transaction.amount}
                </p>
                <p className="text-xs text-gray-500">ID: {transaction.id}</p>
              </div>
            </div>
          ))}
        </div>
        {hasMoreTransactions && (
          <button
            onClick={loadMoreTransactions}
            className="w-full mt-6 py-2 text-sm text-sky-400 hover:text-sky-300 transition-colors border border-sky-500/20 rounded-lg hover:bg-sky-500/10"
          >
            Load More
          </button>
        )}
      </div>
    </DashboardLayout>
  )
}
