'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Overview', href: '/dashboard/overview', icon: '⊞' },
  { label: 'Transactions', href: '/dashboard/transactions', icon: '⇄' },
  { label: 'Micro Loans', href: '/dashboard/micro-loans', icon: '▦' },
  { label: 'Premium Loans', href: '/dashboard/premium-loans', icon: '◈' },
  { label: 'Customers', href: '/dashboard/customers', icon: '👤' },
  { label: 'Employees', href: '/dashboard/employees', icon: '👥' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-6 px-3 min-h-screen">
      <div className="px-3 mb-8">
        <span className="text-xl font-bold text-gray-800">FINEXA</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition
                ${isActive
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto mx-2 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
        <p className="font-semibold mb-1">Need Help?</p>
        <p className="mb-2 text-blue-500">Check our docs or contact support.</p>
        <button className="w-full bg-white border border-blue-300 rounded py-1 text-xs font-medium text-blue-600 hover:bg-blue-100">
          Support Center
        </button>
      </div>
    </aside>
  )
}