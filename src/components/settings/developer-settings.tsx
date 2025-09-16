import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export function DeveloperSettings() {
  const apiKeys = [
    {
      id: 1,
      prefix: "pk_live_abc123...",
      createdAt: "2024-01-15",
      name: "Production Key",
    },
    {
      id: 2,
      prefix: "pk_test_xyz789...",
      createdAt: "2024-01-10",
      name: "Test Key",
    },
  ]

  const webhooks = [
    {
      id: 1,
      url: "https://mystore.com/webhooks/orders",
      events: ["order.created", "order.updated"],
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>Generate and manage API keys for integrating with your store.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {apiKeys.map((key) => (
            <div key={key.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{key.name}</span>
                  <Badge variant="outline">{key.prefix}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Created on {key.createdAt}</p>
              </div>
              <Button variant="outline" size="sm">
                Revoke
              </Button>
            </div>
          ))}

          <Button className="w-full">+ Generate New API Key</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Webhooks</CardTitle>
          <CardDescription>Configure webhook endpoints to receive real-time event notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {webhooks.map((webhook) => (
            <div key={webhook.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{webhook.url}</span>
                  <Badge variant={webhook.status === "active" ? "default" : "secondary"}>{webhook.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Events: {webhook.events.join(", ")}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </div>
            </div>
          ))}

          <div className="space-y-4 pt-4 border-t">
            <div className="space-y-2">
              <Label htmlFor="webhook-url">Webhook URL</Label>
              <Input id="webhook-url" placeholder="https://yoursite.com/webhook" />
            </div>
            <Button>+ Add Webhook</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
