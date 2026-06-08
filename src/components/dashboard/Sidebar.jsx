'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

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
  const router = useRouter()

  const handleLogout = () => {
    router.push('/login')
  }

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-6 px-3 min-h-screen">
      <div className="px-3 mb-8 flex flex-col items-center gap-2 text-center">
        <img src="/2logo.png" alt="FISS Logo" className="h-20 w-20 object-contain" />
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

      {/* Logout button */}
      <div className="mt-auto px-2">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-blue-900 text-white hover:bg-blue-800 transition"
        >
          <span>🚪</span>
          Logout
        </button>
      </div>
    </aside>
  )
}