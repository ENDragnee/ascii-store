import { cn } from "@/lib/utils" // Fixed import path for cn utility function

interface BalanceCardProps {
  title: string
  amount: string
  currency: string
  description: string
  isPrimary?: boolean
}

export function BalanceCard({ title, amount, currency, description, isPrimary = false }: BalanceCardProps) {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg shadow-sm border",
        isPrimary ? "border-cyan-200 bg-cyan-50" : "border-gray-200",
      )}
    >
      <h3 className={cn("font-semibold mb-2", isPrimary ? "text-cyan-900" : "text-gray-900")}>{title}</h3>
      <div className={cn("text-3xl font-bold mb-2", isPrimary ? "text-cyan-900" : "text-gray-900")}>
        {currency} {amount}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
