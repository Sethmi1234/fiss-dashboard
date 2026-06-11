'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ledgers } from '@/lib/data'
import NewLedgerModal from '@/components/dashboard/ledgers/NewLedgerModal'

const tableVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
}

export default function LedgersPage() {
  const [showModal, setShowModal] = useState(false)
  const [search, setSearch] = useState('')

  const filtered = ledgers.filter(
    (l) =>
      l.description.toLowerCase().includes(search.toLowerCase()) ||
      l.category.toLowerCase().includes(search.toLowerCase())
  )

  const totalCredit = ledgers.reduce((sum, l) => sum + l.credit, 0)
  const totalDebit = ledgers.reduce((sum, l) => sum + l.debit, 0)

  return (
    <div>
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Ledgers</h1>
          <p className="text-gray-400 text-sm mt-1">Company ledger and accounting records.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="shrink-0 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-all duration-200 hover:scale-[1.02] active:scale-95"
        >
          + New Entry
        </button>
      </div>

      {showModal && <NewLedgerModal onClose={() => setShowModal(false)} />}

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-l-4 border-l-green-400 border-gray-100 shadow-sm p-4">
          <p className="text-xs text-gray-500 mb-1">Total Credit</p>
          <p className="text-xl font-bold text-green-600">Rs. {totalCredit.toLocaleString()}.00</p>
        </div>
        <div className="bg-white rounded-xl border border-l-4 border-l-red-400 border-gray-100 shadow-sm p-4">
          <p className="text-xs text-gray-500 mb-1">Total Debit</p>
          <p className="text-xl font-bold text-red-500">Rs. {totalDebit.toLocaleString()}.00</p>
        </div>
        <div className="bg-white rounded-xl border border-l-4 border-l-blue-400 border-gray-100 shadow-sm p-4">
          <p className="text-xs text-gray-500 mb-1">Current Balance</p>
          <p className="text-xl font-bold text-blue-600">
            Rs. {ledgers[ledgers.length - 1]?.balance.toLocaleString()}.00
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">

        {/* Search */}
        <div className="p-4 border-b border-gray-100">
          <input
            type="text"
            placeholder="Search ledger entries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Mobile cards */}
        <motion.div
          className="md:hidden divide-y divide-gray-100"
          variants={tableVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-8">No entries found.</p>
          ) : (
            filtered.map((l) => (
              <motion.div key={l.id} variants={rowVariants} className="p-4 flex flex-col gap-1">
                <div className="flex items-start justify-between">
                  <p className="font-semibold text-gray-800 text-sm">{l.description}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold shrink-0 ml-2
                    ${l.type === 'Credit' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                    {l.type}
                  </span>
                </div>
                <p className="text-xs text-gray-400">{l.id} · {l.date}</p>
                <p className="text-xs text-gray-500">{l.category}</p>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  <div className="bg-green-50 rounded-lg p-2">
                    <p className="text-xs text-gray-400">Credit</p>
                    <p className="text-sm font-semibold text-green-600">Rs. {l.credit.toLocaleString()}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2">
                    <p className="text-xs text-gray-400">Debit</p>
                    <p className="text-sm font-semibold text-red-500">Rs. {l.debit.toLocaleString()}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2">
                    <p className="text-xs text-gray-400">Balance</p>
                    <p className="text-sm font-semibold text-blue-600">Rs. {l.balance.toLocaleString()}</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-right">Debit</th>
                <th className="px-4 py-3 text-right">Credit</th>
                <th className="px-4 py-3 text-right">Balance</th>
              </tr>
            </thead>
            <motion.tbody variants={tableVariants} initial="hidden" animate="visible">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center text-gray-400 py-8">
                    No entries found.
                  </td>
                </tr>
              ) : (
                filtered.map((l) => (
                  <motion.tr key={l.id} variants={rowVariants} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-500">{l.id}</td>
                    <td className="px-4 py-3 text-gray-600">{l.date}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{l.description}</td>
                    <td className="px-4 py-3">
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {l.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${l.type === 'Credit' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                        {l.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-red-500 font-medium">
                      {l.debit > 0 ? `Rs. ${l.debit.toLocaleString()}` : '-'}
                    </td>
                    <td className="px-4 py-3 text-right text-green-600 font-medium">
                      {l.credit > 0 ? `Rs. ${l.credit.toLocaleString()}` : '-'}
                    </td>
                    <td className="px-4 py-3 text-right text-blue-600 font-medium">
                      Rs. {l.balance.toLocaleString()}
                    </td>
                  </motion.tr>
                ))
              )}
            </motion.tbody>
          </table>
        </div>

        <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100 flex justify-between">
          <span>Showing {filtered.length} of {ledgers.length} entries</span>
          <span>Page 1 of 1</span>
        </div>
      </div>
    </div>
  )
}