'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard,
  ArrowLeftRight,
  CreditCard,
  Star,
  Users,
  UserCheck,
  LogOut,
  ChevronLeft,
  ChevronRight,
  FileText,
  BookOpen,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard },
  { label: 'Transactions', href: '/dashboard/transactions', icon: ArrowLeftRight },
  { label: 'Micro Loans', href: '/dashboard/micro-loans', icon: CreditCard },
  { label: 'Premium Loans', href: '/dashboard/premium-loans', icon: Star },
  { label: 'Customers', href: '/dashboard/customers', icon: Users },
  { label: 'Employees', href: '/dashboard/employees', icon: UserCheck },
  { label: 'Reports', href: '/dashboard/reports', icon: FileText },
  { label: 'Ledgers', href: '/dashboard/ledgers', icon: BookOpen },
]

export default function Sidebar({ onClose }) {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const handleLogout = () => {
    router.push('/login')
  }

  return (
    <aside
      className={`
        bg-white border-r border-gray-200 flex flex-col py-6 min-h-screen
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-16 px-2' : 'w-56 px-3'}
      `}
    >

      {/* Logo + collapse button */}
      <div className={`
        flex items-center mb-8 px-1
        ${collapsed ? 'justify-center' : 'justify-between'}
      `}>

        {/* Logo - hide text when collapsed */}
        {!collapsed && (
          <div className="flex flex-col items-start gap-1 transition-all duration-300">
            <Image
              src="/2logo.png"
              alt="FINEXA logo"
              width={5000}
              height={5000}
              className="h-14 w-14 object-contain"
              priority
            />
            <span className="text-lg font-semibold tracking-[0.18em] text-gray-700">
              FINEXA
            </span>
          </div>
        )}

        {/* Collapse toggle button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              title={collapsed ? item.label : ''}
              className={`
                flex items-center rounded-md text-sm font-medium
                transition-all duration-200 hover:scale-[1.02] active:scale-95
                ${collapsed ? 'justify-center px-2 py-2.5' : 'gap-3 px-3 py-2'}
                ${isActive
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <Icon size={18} className="shrink-0" />
              {/* Label fades out when collapsed */}
              {!collapsed && (
                <span className="transition-all duration-300 overflow-hidden whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Logout button */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          title={collapsed ? 'Logout' : ''}
          className={`
            w-full flex items-center rounded-md text-sm font-medium
            bg-red-500 text-white hover:bg-red-600
            transition-all duration-200 hover:scale-[1.02] active:scale-95
            ${collapsed ? 'justify-center px-2 py-2.5' : 'gap-3 px-3 py-2'}
          `}
        >
          <LogOut size={18} className="shrink-0" />
          {!collapsed && (
            <span className="transition-all duration-300 overflow-hidden whitespace-nowrap">
              Logout
            </span>
          )}
        </button>
      </div>

    </aside>
  )
}