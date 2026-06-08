'use client'

import Link from 'next/link'

const actions = [
  { label: 'New Micro Loan', icon: '➕', color: 'text-green-600', bg: 'bg-green-50 border-green-200', href: '/dashboard/micro-loans' },
  { label: 'New Premium Loan', icon: '💎', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200', href: '/dashboard/premium-loans' },
  { label: 'New Customer', icon: '👤', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200', href: '/dashboard/customers' },
  { label: 'Transactions', icon: '⇄', color: 'text-orange-500', bg: 'bg-orange-50 border-orange-200', href: '/dashboard/transactions' },
  { label: 'Company Ledger', icon: '📒', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', href: '/dashboard/ledgers' },
  { label: 'Overdue Loan Report', icon: '⚠️', color: 'text-red-500', bg: 'bg-red-50 border-red-200', href: '/dashboard/reports' },
  { label: 'Daily Collection Report', icon: '📊', color: 'text-teal-600', bg: 'bg-teal-50 border-teal-200', href: '/dashboard/reports' },
  { label: 'Change Password', icon: '🔒', color: 'text-gray-500', bg: 'bg-gray-50 border-gray-200', href: '/dashboard/settings' },
]

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <h2 className="text-base font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={`flex flex-col items-center justify-center gap-1 p-3 rounded-lg border transition text-center hover:opacity-80 ${action.bg}`}
          >
            <span className={`text-xl ${action.color}`}>{action.icon}</span>
            <span className="text-xs text-gray-600 font-medium leading-tight">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}