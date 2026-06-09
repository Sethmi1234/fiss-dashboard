'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  ArrowLeftRight,
  CreditCard,
  Star,
  Users,
  UserCheck,
  LogOut
} from 'lucide-react'

const navItems = [
  { label: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard },
  { label: 'Transactions', href: '/dashboard/transactions', icon: ArrowLeftRight },
  { label: 'Micro Loans', href: '/dashboard/micro-loans', icon: CreditCard },
  { label: 'Premium Loans', href: '/dashboard/premium-loans', icon: Star },
  { label: 'Customers', href: '/dashboard/customers', icon: Users },
  { label: 'Employees', href: '/dashboard/employees', icon: UserCheck },
]

export default function Sidebar({ onClose }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    router.push('/login')
  }

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-6 px-3 min-h-screen">

      {/* Logo */}
      <div className="px-3 mb-8 flex flex-col items-start gap-2">
        <Image
          src="/2logo.png"
          alt="FINEXA logo"
          width={5000}
          height={5000}
          className="h-20 w-20 object-contain"
          priority
        />
        <span className="text-lg font-semibold tracking-[0.18em] text-gray-700">FINEXA</span>
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
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition
                ${isActive
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="mt-auto px-2">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

    </aside>
  )
}