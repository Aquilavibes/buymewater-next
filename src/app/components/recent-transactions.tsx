"use client"

interface Transaction {
  id: number
  from: string
  amount: string
  time: string
  status: "completed" | "pending"
  message: string
}

interface RecentTransactionsProps {
  transactions: Transaction[]
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Recent Transactions</h3>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-sky-500/10 transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-white">{transaction.from.charAt(0).toUpperCase()}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-white truncate">@{transaction.from}</p>
                <span className="text-sm font-semibold text-sky-400">{transaction.amount}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{transaction.message}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{transaction.time}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    transaction.status === "completed"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {transaction.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
