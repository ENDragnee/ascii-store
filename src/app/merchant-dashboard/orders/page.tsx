import { OrderStatusTabs } from "@/components/orders/order-status-tabs"
import { OrdersToolbar } from "@/components/orders/orders-toolbar"
import { OrdersTable } from "@/components/orders/orders-table"

interface OrdersPageProps {
  searchParams: { status?: string }
}

export default function OrdersPage({ searchParams }: OrdersPageProps) {
  const currentStatus = searchParams.status || "all"

  // Sample order data - in a real app, this would be fetched from an API
  const ordersData = [
    {
      id: "ORD-20250918-AB1C",
      date: "2025-09-18",
      product: {
        name: "Blue T-shirt, Large",
        imageUrl: "/blue-t-shirt.png",
      },
      buyer: {
        name: "John Doe",
        phone: "+251912345678",
      },
      total: 1500.0,
      status: "Paid Held",
    },
    {
      id: "ORD-20250918-DE2F",
      date: "2025-09-18",
      product: {
        name: "Leather Messenger Bag",
        imageUrl: "/black-hoodie.png",
      },
      buyer: {
        name: "Jane Smith",
        phone: "+251987654321",
      },
      total: 4500.0,
      status: "Dispute",
    },
    {
      id: "ORD-20250917-GH3I",
      date: "2025-09-17",
      product: {
        name: "Stainless Steel Water Bottle",
        imageUrl: "/white-sneakers.png",
      },
      buyer: {
        name: "Abebe Bikila",
        phone: "+251911223344",
      },
      total: 800.0,
      status: "Completed",
    },
    {
      id: "ORD-20250917-JK4L",
      date: "2025-09-17",
      product: {
        name: "Red Ceramic Mug",
        imageUrl: "/red-ceramic-mug.jpg",
      },
      buyer: {
        name: "Sarah Wilson",
        phone: "+251955667788",
      },
      total: 350.0,
      status: "Shipped",
    },
    {
      id: "ORD-20250916-MN5O",
      date: "2025-09-16",
      product: {
        name: "Green Baseball Cap",
        imageUrl: "/green-baseball-cap.jpg",
      },
      buyer: {
        name: "Michael Brown",
        phone: "+251944556677",
      },
      total: 650.0,
      status: "Cancelled",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
      </div>

      {/* Status Filter Tabs */}
      <OrderStatusTabs currentStatus={currentStatus} />

      {/* Toolbar for Search and Actions */}
      <OrdersToolbar />

      {/* Main Content: The Orders Table */}
      <OrdersTable data={ordersData} />
    </div>
  )
}
