import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export function PayoutSettings() {
  const bankAccounts = [
    {
      id: 1,
      bankName: "Commercial Bank of Ethiopia",
      accountNumber: "••••1234",
      isPrimary: true,
    },
    {
      id: 2,
      bankName: "Dashen Bank",
      accountNumber: "••••5678",
      isPrimary: false,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Linked Bank Accounts</CardTitle>
          <CardDescription>Manage where your payouts are sent.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {bankAccounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{account.bankName}</span>
                  {account.isPrimary && <Badge variant="secondary">Primary</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{account.accountNumber}</p>
              </div>
              <div className="flex items-center gap-2">
                {!account.isPrimary && (
                  <Button variant="outline" size="sm">
                    Set as Primary
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <Button className="w-full">+ Add Bank Account</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Legal Information</CardTitle>
          <CardDescription>Required for tax reporting and compliance.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="business-name">Legal Business Name</Label>
            <Input id="business-name" placeholder="Enter your legal business name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tin">TIN (Tax ID Number)</Label>
            <Input id="tin" placeholder="Enter your TIN" />
          </div>

          <Button>Save Legal Information</Button>
        </CardContent>
      </Card>
    </div>
  )
}
