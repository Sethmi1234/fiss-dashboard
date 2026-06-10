'use client'

import { useState } from 'react'
import { transactions } from '@/lib/data'
import TransactionsTable from '@/components/dashboard/transactions/TransactionsTable'
import NewTransactionModal from '@/components/dashboard/transactions/NewTransactionModel'

export default function TransactionsPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Transactions</h1>
          <p className="text-gray-400 text-sm mt-1">View and track all monetary transactions.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="shrink-0 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition"
        >
          + New Transaction
        </button>
      </div>

      {showModal && <NewTransactionModal onClose={() => setShowModal(false)} />}

      <TransactionsTable transactions={transactions} />
    </div>
  )
}