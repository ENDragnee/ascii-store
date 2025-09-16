import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DownloadIcon, TrendingUpIcon, TrendingDownIcon } from "@/components/ui/simple-icons"

// Sample data for analytics
const kpiData = [
  { title: "Conversion Rate", value: "5.4%", change: "+0.5%", isPositive: true },
  { title: "Average Order Value", value: "ETB 1,850.75", change: "-3.2%", isPositive: false },
  { title: "Total Customers", value: "68", change: "+15", isPositive: true },
  { title: "Refund Rate", value: "1.2%", change: "+0.1%", isPositive: false },
]

const topProducts = [
  { id: 1, name: "Blue Cotton T-Shirt", image: "/blue-t-shirt.png", unitsSold: 45, revenue: "ETB 22,500" },
  { id: 2, name: "Red Ceramic Mug", image: "/red-ceramic-mug.jpg", unitsSold: 38, revenue: "ETB 19,000" },
  { id: 3, name: "Black Hoodie", image: "/black-hoodie.png", unitsSold: 32, revenue: "ETB 48,000" },
  { id: 4, name: "Green Baseball Cap", image: "/green-baseball-cap.jpg", unitsSold: 28, revenue: "ETB 14,000" },
  { id: 5, name: "White Sneakers", image: "/white-sneakers.png", unitsSold: 25, revenue: "ETB 37,500" },
]

const trafficSources = [
  { linkName: "Main Store Link", product: "All Products", clicks: 1250, orders: 68, conversionRate: "5.4%" },
  { linkName: "T-Shirt Collection", product: "Blue Cotton T-Shirt", clicks: 890, orders: 45, conversionRate: "5.1%" },
  { linkName: "Accessories Link", product: "Red Ceramic Mug", clicks: 650, orders: 38, conversionRate: "5.8%" },
  { linkName: "Winter Collection", product: "Black Hoodie", clicks: 580, orders: 32, conversionRate: "5.5%" },
]

const salesData = [
  { date: "Jan 1", sales: 12500 },
  { date: "Jan 2", sales: 18200 },
  { date: "Jan 3", sales: 15800 },
  { date: "Jan 4", sales: 22100 },
  { date: "Jan 5", sales: 19500 },
  { date: "Jan 6", sales: 25300 },
  { date: "Jan 7", sales: 21800 },
]

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <div className="flex items-center gap-4">
          <Select defaultValue="30d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Main Grid for Analytics Widgets */}
      <div className="grid grid-cols-1 gap-6">
        {/* Top Level KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{kpi.title}</CardTitle>
                {kpi.isPositive ? (
                  <TrendingUpIcon className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDownIcon className="h-4 w-4 text-red-600" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <p className={`text-xs ${kpi.isPositive ? "text-green-600" : "text-red-600"}`}>
                  {kpi.change} from last period
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sales Trend Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Net Sales Over Time</CardTitle>
              <Select defaultValue="day">
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">By Day</SelectItem>
                  <SelectItem value="week">By Week</SelectItem>
                  <SelectItem value="month">By Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-end justify-between gap-2">
              {salesData.map((data, index) => (
                <div key={index} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="bg-blue-500 rounded-t w-full transition-all hover:bg-blue-600 cursor-pointer"
                    style={{ height: `${(data.sales / 25300) * 250}px` }}
                    title={`${data.date}: ETB ${data.sales.toLocaleString()}`}
                  />
                  <span className="text-xs text-gray-500 rotate-45 origin-left">{data.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Two-Column Layout for granular reports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-3">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.unitsSold} units sold</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{product.revenue}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full mt-4">
                  View All Products →
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Sales by Payment Link</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trafficSources.map((source, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">{source.linkName}</p>
                        <p className="text-xs text-gray-500 truncate">{source.product}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{source.conversionRate}</p>
                        <p className="text-xs text-gray-500">{source.orders} orders</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(source.clicks / 1250) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{source.clicks} clicks</span>
                      <span>{source.orders} orders</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
