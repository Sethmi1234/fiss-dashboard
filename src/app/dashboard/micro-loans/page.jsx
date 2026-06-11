'use client'

import { useState } from 'react'
import { microLoans } from '@/lib/data'
import LoansTable from '@/components/dashboard/loans/LoansTable'
import NewMicroLoanModal from '@/components/dashboard/loans/NewMicroLoanModal'

export default function MicroLoansPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Micro Loans</h1>
          <p className="text-gray-400 text-sm mt-1">Manage and track all micro loans.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="shrink-0 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-all duration-200 hover:scale-[1.02] active:scale-95"
        >
          + New Loan
        </button>
      </div>

      {showModal && <NewMicroLoanModal onClose={() => setShowModal(false)} />}

      <LoansTable loans={microLoans} />
    </div>
  )
}