"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/lib/firebase"  

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        router.push("/") // redirect to sign-in if not logged in
      }
      setUser(firebaseUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  return <>{children}</>
}
