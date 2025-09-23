import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const payoutHistory = [
  {
    id: "PO-2024-001",
    date: "2024-01-15",
    amount: "125,450.00",
    status: "Paid",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "PO-2024-002",
    date: "2024-01-08",
    amount: "89,320.50",
    status: "Paid",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "PO-2024-003",
    date: "2024-01-01",
    amount: "156,780.25",
    status: "Processing",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "PO-2023-045",
    date: "2023-12-25",
    amount: "203,150.00",
    status: "Paid",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: "PO-2023-044",
    date: "2023-12-18",
    amount: "78,920.75",
    status: "Failed",
    statusColor: "bg-red-100 text-red-800",
  },
]

export function PayoutHistoryTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-semibold">Payout History</h3>
        <p className="text-sm text-gray-600 mt-1">All payouts sent to your bank account</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payout ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payoutHistory.map((payout) => (
              <tr key={payout.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(payout.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payout.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ETB {payout.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={cn("inline-flex px-2 py-1 text-xs font-semibold rounded-full", payout.statusColor)}>
                    {payout.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Button variant="outline" size="sm">
                    Download Statement
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
