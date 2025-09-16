import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export function OrdersTable() {
  const orders = [
    {
      id: "#ORD-20250916-01",
      product: {
        name: "Blue T-shirt",
        variant: "Size L",
        image: "/blue-t-shirt.png",
      },
      buyer: "+2519XXXXXXX",
      amount: "ETB 1,500",
      status: "PAID_HELD",
      statusColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    {
      id: "#ORD-20250915-43",
      product: {
        name: "Red Mug",
        variant: "Ceramic",
        image: "/red-ceramic-mug.jpg",
      },
      buyer: "+2519YYYYYYY",
      amount: "ETB 450",
      status: "COMPLETED",
      statusColor: "bg-green-100 text-green-800 border-green-200",
    },
    {
      id: "#ORD-20250915-42",
      product: {
        name: "Black Hoodie",
        variant: "Size M",
        image: "/black-hoodie.png",
      },
      buyer: "+2519ZZZZZZZ",
      amount: "ETB 2,200",
      status: "PENDING",
      statusColor: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      id: "#ORD-20250914-38",
      product: {
        name: "Green Cap",
        variant: "Adjustable",
        image: "/green-baseball-cap.jpg",
      },
      buyer: "+2519AAAAAAA",
      amount: "ETB 800",
      status: "SHIPPED",
      statusColor: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      id: "#ORD-20250914-37",
      product: {
        name: "White Sneakers",
        variant: "Size 42",
        image: "/white-sneakers.png",
      },
      buyer: "+2519BBBBBBB",
      amount: "ETB 3,200",
      status: "PROCESSING",
      statusColor: "bg-orange-100 text-orange-800 border-orange-200",
    },
  ]

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="border-b border-gray-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">Recent Orders</CardTitle>
          <p className="text-sm text-gray-500">Showing 1-5 of 42 orders</p>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Order ID</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Product</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Buyer Phone</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Amount</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className={cn(
                    "border-b border-gray-100 hover:bg-gray-50 transition-colors",
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50",
                  )}
                >
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">{order.id}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10 rounded-lg">
                        <AvatarImage src={order.product.image || "/placeholder.svg"} alt={order.product.name} />
                        <AvatarFallback className="rounded-lg bg-gray-100">
                          {order.product.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-900">{order.product.name}</div>
                        <div className="text-sm text-gray-500">{order.product.variant}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{order.buyer}</td>
                  <td className="py-4 px-6 font-semibold text-gray-900">{order.amount}</td>
                  <td className="py-4 px-6">
                    <Badge variant="outline" className={cn("font-medium", order.statusColor)}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
