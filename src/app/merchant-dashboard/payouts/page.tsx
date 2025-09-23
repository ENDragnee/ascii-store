import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BalanceCard } from "@/components/payouts/balance-card"
import { PayoutHistoryTable } from "@/components/payouts/payout-history-table"
import { TransactionLogTable } from "@/components/payouts/transaction-log-table"

export default function PayoutsPage() {
  // Mock data - in a real app this would come from API calls
  const balanceData = {
    available: "88,210.00",
    pending: "35,150.50",
  }
  const linkedAccount = "Commercial Bank of Ethiopia ••••1234"

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Payouts</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Summary & Actions */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <BalanceCard
            title="Available for Payout"
            amount={balanceData.available}
            currency="ETB"
            description="Total from completed orders, ready for transfer."
            isPrimary={true}
          />
          <BalanceCard
            title="Pending Settlement"
            amount={balanceData.pending}
            currency="ETB"
            description="Funds from orders awaiting buyer confirmation."
          />

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col gap-4">
            <h3 className="font-semibold">Request a Payout</h3>
            <Button size="lg" className="w-full" disabled={Number.parseFloat(balanceData.available) === 0}>
              Request Payout of ETB {balanceData.available}
            </Button>
            <p className="text-xs text-center text-gray-500">
              Payouts will be sent to: <br />
              <strong>{linkedAccount}</strong>
            </p>
            <p className="text-xs text-center text-gray-400 mt-2">Payouts are processed daily at 4 PM.</p>
          </div>
        </div>

        {/* Right Column: History & Logs */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="history" className="w-full">
            <TabsList>
              <TabsTrigger value="history">Payout History</TabsTrigger>
              <TabsTrigger value="log">Transaction Log</TabsTrigger>
            </TabsList>
            <TabsContent value="history">
              <PayoutHistoryTable />
            </TabsContent>
            <TabsContent value="log">
              <TransactionLogTable />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
