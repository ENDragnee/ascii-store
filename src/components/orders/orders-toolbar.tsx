"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon, DownloadIcon } from "@/components/ui/simple-icons"

export function OrdersToolbar() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="relative flex-1 max-w-sm">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input placeholder="Search by Order ID or buyer phone..." className="pl-10" />
      </div>

      <Button variant="outline" className="flex items-center gap-2 bg-transparent">
        <DownloadIcon className="h-4 w-4" />
        Export
      </Button>
    </div>
  )
}
