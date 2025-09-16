import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TrendingUpIcon,
  TrendingDownIcon,
  DollarSignIcon,
  PackageIcon,
  ClockIcon,
  WalletIcon,
} from "@/components/ui/simple-icons"
import { cn } from "@/lib/utils"

export function KPICards() {
  const kpis = [
    {
      title: "GMV (30d)",
      value: "ETB 45,230",
      change: "+12.5%",
      changeValue: "+ETB 5,020",
      icon: DollarSignIcon,
      trend: "up",
      sparklineData: [20, 25, 30, 28, 35, 40, 45], // Simplified sparkline representation
    },
    {
      title: "Orders Today",
      value: "23",
      change: "+8.2%",
      changeValue: "+2 orders",
      icon: PackageIcon,
      trend: "up",
      sparklineData: [15, 18, 20, 19, 21, 22, 23],
    },
    {
      title: "Pending Shipments",
      value: "7",
      change: "-2.1%",
      changeValue: "-1 shipment",
      icon: ClockIcon,
      trend: "down",
      sparklineData: [12, 10, 8, 9, 8, 7, 7],
    },
    {
      title: "Available Balance",
      value: "ETB 12,450",
      change: "+5.8%",
      changeValue: "+ETB 680",
      icon: WalletIcon,
      trend: "up",
      sparklineData: [10, 11, 10.5, 11.2, 11.8, 12.1, 12.45],
    },
  ]

  // Simple sparkline component using CSS
  const Sparkline = ({ data, trend }: { data: number[]; trend: string }) => {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min

    return (
      <div className="flex items-end space-x-0.5 h-8 w-16">
        {data.map((value, index) => {
          const height = range === 0 ? 50 : ((value - min) / range) * 100
          return (
            <div
              key={index}
              className={`w-1 rounded-sm ${trend === "up" ? "bg-green-500" : "bg-red-500"}`}
              style={{ height: `${Math.max(height, 10)}%` }}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <Card key={index} className="bg-white shadow-sm border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{kpi.title}</CardTitle>
            <kpi.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-2">{kpi.value}</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {kpi.trend === "up" ? (
                  <TrendingUpIcon className="h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDownIcon className="h-3 w-3 text-red-600" />
                )}
                <span className={cn("text-xs font-medium", kpi.trend === "up" ? "text-green-600" : "text-red-600")}>
                  {kpi.change}
                </span>
              </div>
              <Sparkline data={kpi.sparklineData} trend={kpi.trend} />
            </div>
            <p className="text-xs text-gray-500 mt-1">{kpi.changeValue} vs last period</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
