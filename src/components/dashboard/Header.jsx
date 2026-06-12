'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Sidebar from './Sidebar'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 relative z-40">

        {/* Hamburger - only on mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-gray-600 hover:text-gray-800 p-1"
        >
          <Menu size={22} />
        </button>

        <div className="hidden lg:block" />

        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">Sethmi Didulani</p>
            <p className="text-xs text-gray-400 hidden sm:block">Admin</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold text-white">
            S
          </div>
        </div>
      </header>

      {/* Mobile overlay + drawer */}
      {menuOpen && (
        <>
          {/* Dark background */}
          <div
            className="fixed top-0 left-56 right-0 bottom-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sidebar drawer */}
          <div className="fixed top-0 left-0 h-full z-50 lg:hidden shadow-xl">
            <div className="relative">

              {/* X close button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-3 z-10 text-gray-500 hover:text-gray-800 bg-white rounded-full p-1"
              >
                <X size={18} />
              </button>

              {/* Pass isMobile so collapse button is hidden */}
              <Sidebar
                onClose={() => setMenuOpen(false)}
                isMobile={true}
              />

            </div>
          </div>
        </>
      )}
    </>
  )
}