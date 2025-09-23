import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BarChart3, Copy, TrendingUp } from "lucide-react"

export function RecentLinksWidget() {
  const recentLinks = [
    {
      url: "link.ascii/pay/abc123",
      clicks: 24,
      conversions: 3,
      revenue: "ETB 4,500",
      created: "2 hours ago",
    },
    {
      url: "link.ascii/pay/def456",
      clicks: 18,
      conversions: 2,
      revenue: "ETB 3,200",
      created: "1 day ago",
    },
    {
      url: "link.ascii/pay/ghi789",
      clicks: 12,
      conversions: 1,
      revenue: "ETB 1,500",
      created: "2 days ago",
    },
  ]

  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardHeader className="border-b border-gray-100">
        <CardTitle className="text-sm font-semibold flex items-center text-gray-900">
          <ExternalLink className="h-4 w-4 mr-2" />
          Latest payment links you've created
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {recentLinks.map((link, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="font-mono text-sm text-blue-600 truncate flex-1 mr-2">{link.url}</div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Copy className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>Created {link.created}</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>{((link.conversions / link.clicks) * 100).toFixed(1)}% conversion</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <BarChart3 className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{link.clicks} clicks</span>
                  </div>
                  <div className="text-gray-600">{link.conversions} sales</div>
                </div>
                <div className="font-medium text-sm text-gray-900">{link.revenue}</div>
              </div>
            </div>
          ))}
        </div>

        {recentLinks.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 text-sm mb-2">No payment links created yet</div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Create your first link
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
