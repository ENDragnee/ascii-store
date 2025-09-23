import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ProfileSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Profile</CardTitle>
        <CardDescription>Manage the public-facing details of your store.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="store-logo">Store Logo</Label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Logo</span>
            </div>
            <Button variant="outline" size="sm">
              Upload Image
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="store-name">Store Name</Label>
          <Input id="store-name" placeholder="Enter your store name" defaultValue="My Store" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-phone">Public Contact Phone</Label>
          <Input id="contact-phone" placeholder="+251 911 123 456" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="store-bio">Short Bio / Description</Label>
          <Textarea id="store-bio" placeholder="Tell customers about your store..." className="min-h-[100px]" />
        </div>

        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  )
}
