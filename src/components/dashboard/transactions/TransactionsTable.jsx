'use client'

import { useState } from 'react'

export default function TransactionsTable({ transactions }) {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const filtered = transactions.filter((t) => {
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.customer.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === 'All' || (typeFilter === 'Credit' ? !t.positive : t.positive)
    const matchCategory = categoryFilter === 'All' || t.category === categoryFilter
    return matchSearch && matchType && matchCategory
  })

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">

      {/* Search + Filters */}
      <div className="p-4 border-b border-gray-100 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <div className="flex gap-2">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-500 flex-1 focus:outline-none"
          >
            <option value="All">All Types</option>
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-500 flex-1 focus:outline-none"
          >
            <option value="All">All Categories</option>
            <option value="Loan Payment">Loan Payment</option>
            <option value="Loan Disbursement">Loan Disbursement</option>
            <option value="Staff Salary">Staff Salary</option>
            <option value="Investment Income">Investment Income</option>
          </select>
        </div>
      </div>

      {/* Mobile view - cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-8">No transactions found.</p>
        ) : (
          filtered.map((txn) => (
            <div key={txn.id} className="p-4 flex flex-col gap-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{txn.title}</p>
                  <p className="text-xs text-gray-400">{txn.description}</p>
                </div>
                <p className={`text-sm font-bold shrink-0 ml-2
                  ${txn.positive ? 'text-green-600' : 'text-red-500'}`}>
                  {txn.positive ? '+' : '-'} Rs.{txn.amount.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p className="text-xs text-gray-400">{txn.date} · {txn.time}</p>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                  {txn.category}
                </span>
              </div>
              <p className="text-xs text-gray-500">{txn.customer}</p>
            </div>
          ))
        )}
      </div>

      {/* Desktop view - table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Transaction Info</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-right">Amount</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-gray-400 py-8">
                  No transactions found.
                </td>
              </tr>
            ) : (
              filtered.map((txn) => (
                <tr key={txn.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-700">{txn.date}</p>
                    <p className="text-gray-400 text-xs">{txn.time}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-800">{txn.title}</p>
                    <p className="text-gray-400 text-xs">{txn.description}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-gray-700">{txn.customer}</p>
                    <p className="text-gray-400 text-xs">{txn.user}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {txn.category}
                    </span>
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold
                    ${txn.positive ? 'text-green-600' : 'text-red-500'}`}>
                    {txn.positive ? '+' : '-'} Rs. {txn.amount.toLocaleString()}.00
                  </td>
                  <td className="px-4 py-3 text-gray-400 cursor-pointer hover:text-red-500 text-lg">
                    🗑
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100 flex justify-between">
        <span>Showing {filtered.length} of {transactions.length} results</span>
        <span>Page 1 of 1</span>
      </div>
    </div>
  )
}