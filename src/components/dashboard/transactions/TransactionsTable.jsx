'use client'

import { useState } from 'react'

export default function TransactionsTable({ transactions }) {
  const [search, setSearch] = useState('')

  const filtered = transactions.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.customer.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-wrap items-center gap-3 p-4 border-b border-gray-100">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-1.5 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-500">
          <option>All Types</option>
          <option>Debit</option>
          <option>Credit</option>
        </select>
        <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-500">
          <option>All Categories</option>
          <option>Loan Payment</option>
          <option>Loan Disbursement</option>
          <option>Staff Salary</option>
          <option>Investment Income</option>
        </select>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
          <tr>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Transaction Info</th>
            <th className="px-4 py-3 text-left">Customer / Employee</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-right">Amount</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((txn) => (
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
              <td className="px-4 py-3 text-gray-400 text-lg cursor-pointer hover:text-gray-600">🗑</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100 flex justify-between">
        <span>Showing 1 to {filtered.length} of {filtered.length} results</span>
        <span>Page 1 of 1</span>
      </div>
    </div>
  )
}