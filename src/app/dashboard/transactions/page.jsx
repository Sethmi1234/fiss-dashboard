import TransactionsTable from '@/components/dashboard/transactions/TransactionsTable'
import { transactions } from '@/lib/data'

export default function TransactionsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Transactions</h1>
          <p className="text-gray-400 text-sm">View and track all monetary transactions in the system.</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
          + New Transaction
        </button>
      </div>
      <TransactionsTable transactions={transactions} />
    </div>
  )
}