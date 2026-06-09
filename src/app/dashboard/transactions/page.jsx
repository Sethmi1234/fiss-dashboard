import TransactionsTable from '@/components/dashboard/transactions/TransactionsTable'
import { transactions } from '@/lib/data'

export default function TransactionsPage() {
  return (
    <div>
      {/* Header row */}
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Transactions</h1>
          <p className="text-gray-400 text-sm mt-1">View and track all monetary transactions.</p>
        </div>
        <button className="shrink-0 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition">
          + New Transaction
        </button>
      </div>

      <TransactionsTable transactions={transactions} />
    </div>
  )
}