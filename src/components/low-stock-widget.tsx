import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function LowStockWidget() {
  const lowStockItems = [
    { name: "Black Hoodie L", stock: 2, sku: "BH-L-001" },
    { name: "Green Cap", stock: 4, sku: "GC-ADJ-002" },
    { name: "Blue T-shirt M", stock: 1, sku: "BT-M-003" },
    { name: "Red Mug", stock: 3, sku: "RM-CER-004" },
  ]

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="border-b border-gray-100">
        <CardTitle className="text-sm font-semibold flex items-center text-gray-900">
          <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
          Stock running low for these items
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {lowStockItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full h-auto p-3 justify-between hover:bg-gray-50 border border-transparent hover:border-gray-200 rounded-lg"
            >
              <div className="text-left">
                <div className="font-medium text-gray-900 text-sm">{item.name}</div>
                <div className="text-xs text-gray-500">{item.sku}</div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={cn(
                    "text-xs px-2 py-1 rounded-full font-medium",
                    item.stock <= 2 ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700",
                  )}
                >
                  {item.stock} left
                </span>
                <ChevronRight className="h-3 w-3 text-gray-400" />
              </div>
            </Button>
          ))}
        </div>

        {lowStockItems.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 text-sm">All products are well stocked!</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
