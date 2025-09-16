import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link, QrCode, Plus, Package } from "lucide-react"

export function PaymentLinkCard() {
  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="border-b border-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm text-gray-600 mb-6">
          Create payment links, import products, or generate QR codes to share with your customers and start selling
          instantly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12 justify-start">
            <Link className="h-4 w-4 mr-3" />
            <div className="text-left">
              <div className="font-medium">Quick Link</div>
              <div className="text-xs opacity-90">Create instant payment link</div>
            </div>
          </Button>

          <Button variant="outline" className="h-12 justify-start border-gray-200 hover:bg-gray-50 bg-transparent">
            <QrCode className="h-4 w-4 mr-3" />
            <div className="text-left">
              <div className="font-medium">Create QR Code</div>
              <div className="text-xs text-gray-500">Generate scannable code</div>
            </div>
          </Button>

          <Button variant="outline" className="h-12 justify-start border-gray-200 hover:bg-gray-50 bg-transparent">
            <Package className="h-4 w-4 mr-3" />
            <div className="text-left">
              <div className="font-medium">Import Product</div>
              <div className="text-xs text-gray-500">Add from catalog</div>
            </div>
          </Button>

          <Button variant="outline" className="h-12 justify-start border-gray-200 hover:bg-gray-50 bg-transparent">
            <Plus className="h-4 w-4 mr-3" />
            <div className="text-left">
              <div className="font-medium">New Product</div>
              <div className="text-xs text-gray-500">Create from scratch</div>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
