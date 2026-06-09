'use client'

import { useState } from 'react'

const statusStyles = {
  ACTIVE: 'bg-green-100 text-green-700',
  OVERDUE: 'bg-red-100 text-red-600',
  CLOSED: 'bg-gray-200 text-gray-500',
}

export default function LoansTable({ loans }) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const filtered = loans.filter((loan) => {
    const matchSearch =
      loan.customer.toLowerCase().includes(search.toLowerCase()) ||
      loan.id.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || loan.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">

      {/* Search + Filters */}
      <div className="p-4 border-b border-gray-100 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Search code or customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-500 flex-1 focus:outline-none"
          >
            <option value="All">All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="OVERDUE">Overdue</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>
      </div>

      {/* Mobile - cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-8">No loans found.</p>
        ) : (
          filtered.map((loan) => (
            <div key={loan.id} className="p-4 flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{loan.id}</p>
                  <p className="text-xs text-gray-400">{loan.date}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[loan.status]}`}>
                  {loan.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">{loan.customer}</p>
                  <p className="text-xs text-gray-400">{loan.phone}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-400">Principal</p>
                  <p className="text-sm font-semibold text-gray-700">Rs. {loan.principal.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-400">Total</p>
                  <p className="text-sm font-semibold text-gray-700">Rs. {loan.total.toLocaleString()}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xs text-gray-400">Paid</p>
                  <p className="text-sm font-semibold text-green-600">Rs. {loan.paid.toLocaleString()}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-2">
                  <p className="text-xs text-gray-400">Balance</p>
                  <p className="text-sm font-semibold text-red-500">Rs. {loan.balance.toLocaleString()}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400">{loan.installments} installments</p>
            </div>
          ))
        )}
      </div>

      {/* Desktop - table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">Loan Details</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Financials</th>
              <th className="px-4 py-3 text-left">Payment Info</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-gray-400 py-8">No loans found.</td>
              </tr>
            ) : (
              filtered.map((loan) => (
                <tr key={loan.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-800">{loan.id}</p>
                    <p className="text-gray-400 text-xs">{loan.date}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-700">{loan.customer}</p>
                    <p className="text-gray-400 text-xs">{loan.phone}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-gray-600">Principal: <span className="font-medium">Rs. {loan.principal.toLocaleString()}</span></p>
                    <p className="text-gray-600">Total: <span className="font-medium">Rs. {loan.total.toLocaleString()}</span></p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-gray-600">Paid: <span className="text-green-600 font-medium">Rs. {loan.paid.toLocaleString()}</span></p>
                    <p className="text-gray-600">Balance: <span className="text-red-500 font-medium">Rs. {loan.balance.toLocaleString()}</span></p>
                    <p className="text-gray-400 text-xs">{loan.installments} installments</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[loan.status]}`}>
                      {loan.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-lg cursor-pointer hover:text-gray-600">⋯</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100 flex justify-between">
        <span>Showing {filtered.length} of {loans.length} results</span>
        <span>Page 1 of 1</span>
      </div>
    </div>
  )
}