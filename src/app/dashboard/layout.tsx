"use client"
import { DashboardLayout } from "@/app/components/dashboard-layout"

export default function DashboardSectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
