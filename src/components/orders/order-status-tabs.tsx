"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"

interface OrderStatusTabsProps {
  currentStatus: string
}

export function OrderStatusTabs({ currentStatus }: OrderStatusTabsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const tabs = [
    { label: "All", status: "all", count: 120 },
    { label: "Needs Action", status: "needs_action", count: 14, isUrgent: true },
    { label: "Paid Held", status: "paid_held", count: 12 },
    { label: "Shipped", status: "shipped", count: 30 },
    { label: "Completed", status: "completed", count: 60 },
    { label: "Dispute", status: "dispute", count: 2, isUrgent: true },
    { label: "Cancelled", status: "cancelled", count: 4 },
  ]

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)
    return params.toString()
  }

  return (
    <nav className="border-b border-gray-200">
      <div className="flex space-x-8">
        {tabs.map((tab) => {
          const isActive = currentStatus === tab.status
          const href = tab.status === "all" ? pathname : `${pathname}?${createQueryString("status", tab.status)}`

          return (
            <Link
              key={tab.status}
              href={href}
              className={`
                flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${
                  isActive
                    ? "border-cyan-500 text-cyan-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab.label}
              <Badge
                variant={tab.isUrgent && tab.count > 0 ? "destructive" : "secondary"}
                className={`
                  ${
                    tab.isUrgent && tab.count > 0
                      ? "bg-red-100 text-red-800 hover:bg-red-100"
                      : "bg-gray-100 text-gray-600"
                  }
                `}
              >
                {tab.count}
              </Badge>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
