import { SettingsNav } from "@/components/settings/settings-nav"
import { ProfileSettings } from "@/components/settings/profile-settings"
import { AccountSettings } from "@/components/settings/account-settings"
import { PayoutSettings } from "@/components/settings/payout-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { TeamSettings } from "@/components/settings/team-settings"
import { DeveloperSettings } from "@/components/settings/developer-settings"

interface SettingsPageProps {
  params: {
    slug?: string[]
  }
}

export default function SettingsPage({ params }: SettingsPageProps) {
  const activeTab = params.slug?.[0] || "profile"

  const renderActiveTab = () => {
    switch (activeTab) {
      case "account":
        return <AccountSettings />
      case "payouts":
        return <PayoutSettings />
      case "notifications":
        return <NotificationSettings />
      case "team":
        return <TeamSettings />
      case "developer":
        return <DeveloperSettings />
      case "profile":
      default:
        return <ProfileSettings />
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your store profile, payout methods, and account settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column: Sub-navigation */}
        <div className="md:col-span-1">
          <SettingsNav activeTab={activeTab} />
        </div>

        {/* Right Column: Dynamic Content */}
        <div className="md:col-span-3">{renderActiveTab()}</div>
      </div>
    </div>
  )
}
