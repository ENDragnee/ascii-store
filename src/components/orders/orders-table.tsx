"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontalIcon } from "@/components/ui/simple-icons"

interface Order {
  id: string
  date: string
  product: {
    name: string
    imageUrl: string
  }
  buyer: {
    name: string
    phone: string
  }
  total: number
  status: string
}

interface OrdersTableProps {
  data: Order[]
}

export function OrdersTable({ data }: OrdersTableProps) {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Paid Held": { variant: "secondary", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
      Shipped: { variant: "secondary", className: "bg-blue-100 text-blue-800 hover:bg-blue-100" },
      Dispute: { variant: "destructive", className: "bg-red-100 text-red-800 hover:bg-red-100" },
      Completed: { variant: "secondary", className: "bg-green-100 text-green-800 hover:bg-green-100" },
      Cancelled: { variant: "secondary", className: "bg-gray-100 text-gray-600 hover:bg-gray-100" },
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["Cancelled"]

    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    )
  }

  const getContextualActions = (status: string, orderId: string) => {
    switch (status) {
      case "Paid Held":
        return (
          <>
            <DropdownMenuItem>Mark as Shipped</DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/orders/${orderId}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Start Refund</DropdownMenuItem>
          </>
        )
      case "Dispute":
        return (
          <>
            <DropdownMenuItem className="text-red-600 font-medium">
              <Link href={`/orders/${orderId}/dispute`}>Manage Dispute</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/orders/${orderId}`}>View Details</Link>
            </DropdownMenuItem>
          </>
        )
      case "Completed":
        return (
          <>
            <DropdownMenuItem>
              <Link href={`/orders/${orderId}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Download Invoice</DropdownMenuItem>
          </>
        )
      default:
        return (
          <DropdownMenuItem>
            <Link href={`/orders/${orderId}`}>View Details</Link>
          </DropdownMenuItem>
        )
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-ET", {
      style: "currency",
      currency: "ETB",
      minimumFractionDigits: 2,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => (window.location.href = `/orders/${order.id}`)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{order.id}</div>
                    <div className="text-sm text-gray-500">{formatDate(order.date)}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-md object-cover"
                        src={order.product.imageUrl || "/placeholder.svg"}
                        alt={order.product.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{order.product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{order.buyer.name}</div>
                    <div className="text-sm text-gray-500">{order.buyer.phone}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {formatCurrency(order.total)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(order.status)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0" onClick={(e) => e.stopPropagation()}>
                        <MoreHorizontalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {getContextualActions(order.status, order.id)}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
