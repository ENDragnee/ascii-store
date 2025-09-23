import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SettingsNavProps {
  activeTab: string
}

export function SettingsNav({ activeTab }: SettingsNavProps) {
  const navItems = [
    { slug: "profile", label: "Store Profile" },
    { slug: "account", label: "Account & Security" },
    { slug: "payouts", label: "Payouts" },
    { slug: "notifications", label: "Notifications" },
    { slug: "team", label: "Team Management" },
    { slug: "developer", label: "API & Developers" },
  ]

  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => {
        const isActive = activeTab === item.slug
        return (
          <Link key={item.slug} href={`/settings/${item.slug}`}>
            <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start text-left font-normal">
              {item.label}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}
