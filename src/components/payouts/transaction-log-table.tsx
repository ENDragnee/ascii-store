import { cn } from "@/lib/utils" // Fixed import path for cn utility function

const transactionLog = [
  {
    id: "TXN-001",
    date: "2024-01-16 14:30",
    type: "Sale",
    orderId: "ORD-2024-156",
    amount: "+2,450.00",
    balance: "88,210.00",
    amountColor: "text-green-600",
  },
  {
    id: "TXN-002",
    date: "2024-01-16 12:15",
    type: "Platform Fee",
    orderId: "ORD-2024-155",
    amount: "-125.50",
    balance: "85,760.00",
    amountColor: "text-red-600",
  },
  {
    id: "TXN-003",
    date: "2024-01-16 10:45",
    type: "Sale",
    orderId: "ORD-2024-155",
    amount: "+2,510.00",
    balance: "85,885.50",
    amountColor: "text-green-600",
  },
  {
    id: "TXN-004",
    date: "2024-01-15 16:20",
    type: "Refund",
    orderId: "ORD-2024-142",
    amount: "-890.00",
    balance: "83,375.50",
    amountColor: "text-red-600",
  },
  {
    id: "TXN-005",
    date: "2024-01-15 14:10",
    type: "Sale",
    orderId: "ORD-2024-154",
    amount: "+1,750.00",
    balance: "84,265.50",
    amountColor: "text-green-600",
  },
  {
    id: "TXN-006",
    date: "2024-01-15 11:30",
    type: "Platform Fee",
    orderId: "ORD-2024-153",
    amount: "-87.50",
    balance: "82,515.50",
    amountColor: "text-red-600",
  },
  {
    id: "TXN-007",
    date: "2024-01-15 11:25",
    type: "Sale",
    orderId: "ORD-2024-153",
    amount: "+1,750.00",
    balance: "82,603.00",
    amountColor: "text-green-600",
  },
]

export function TransactionLogTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-semibold">Transaction Log</h3>
        <p className="text-sm text-gray-600 mt-1">Detailed record of all transactions affecting your balance</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Resulting Balance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactionLog.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-600 hover:text-cyan-800 cursor-pointer">
                  {transaction.orderId}
                </td>
                <td className={cn("px-6 py-4 whitespace-nowrap text-sm font-medium", transaction.amountColor)}>
                  ETB {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ETB {transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
