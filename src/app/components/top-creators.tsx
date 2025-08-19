"use client"

interface Creator {
  id: number
  name: string
  avatar: string
  earnings: string
  supporters: number
}

interface TopCreatorsProps {
  creators: Creator[]
}

export function TopCreators({ creators }: TopCreatorsProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-sky-500/20 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Top Creators</h3>

      <div className="space-y-4">
        {creators.map((creator, index) => (
          <div
            key={creator.id}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-sky-500/10 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 text-sm font-semibold">
              #{index + 1}
            </div>
            <img
              src={creator.avatar || "/placeholder.svg"}
              alt={creator.name}
              className="w-10 h-10 rounded-full border-2 border-sky-400/50"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{creator.name}</p>
              <p className="text-xs text-gray-400">{creator.supporters.toLocaleString()} supporters</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-sky-400">{creator.earnings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
