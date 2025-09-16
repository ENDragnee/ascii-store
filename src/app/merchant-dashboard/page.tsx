import { KPICards } from "@/components/kpi-cards"
import { OrdersTable } from "@/components/orders-table"
import { PaymentLinkCard } from "@/components/payment-link-card"
import { LowStockWidget } from "@/components/low-stock-widget"
import { RecentLinksWidget } from "@/components/recent-links-widget"

export default function MerchantDashboard() {
  return (
    <>
      {/* KPI Cards Section */}
      <div className="mb-8">
        <KPICards />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Orders and Payment Links */}
        <div className="lg:col-span-2 space-y-6">
          <OrdersTable />
          <PaymentLinkCard />
        </div>

        {/* Right Column - Sidebar Widgets */}
        <aside className="space-y-6">
          <LowStockWidget />
          <RecentLinksWidget />
        </aside>
      </div>
    </>
  )
}
