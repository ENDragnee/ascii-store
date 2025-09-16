import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationSettings() {
  const notifications = [
    {
      id: "new-order",
      title: "New Order Received",
      description: "When a customer places a new order",
      email: true,
      sms: false,
      push: true,
    },
    {
      id: "dispute-opened",
      title: "Dispute Opened",
      description: "When a customer opens a dispute",
      email: true,
      sms: true,
      push: true,
    },
    {
      id: "payout-successful",
      title: "Payout Successful",
      description: "When a payout is processed successfully",
      email: true,
      sms: false,
      push: false,
    },
    {
      id: "low-inventory",
      title: "Low Inventory Alert",
      description: "When product stock is running low",
      email: false,
      sms: false,
      push: true,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Choose how you want to receive notifications for different events.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4 pb-4 border-b">
            <div className="font-medium">Event</div>
            <div className="font-medium text-center">Email</div>
            <div className="font-medium text-center">SMS</div>
            <div className="font-medium text-center">Push</div>
          </div>

          {notifications.map((notification) => (
            <div key={notification.id} className="grid grid-cols-4 gap-4 items-center">
              <div className="space-y-1">
                <Label className="font-medium">{notification.title}</Label>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
              <div className="flex justify-center">
                <Switch defaultChecked={notification.email} />
              </div>
              <div className="flex justify-center">
                <Switch defaultChecked={notification.sms} />
              </div>
              <div className="flex justify-center">
                <Switch defaultChecked={notification.push} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
