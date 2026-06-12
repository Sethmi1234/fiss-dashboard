'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Sidebar from './Sidebar'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [renderMenu, setRenderMenu] = useState(false)

  const openMenu = () => {
    setRenderMenu(true)
    requestAnimationFrame(() => setMenuOpen(true))
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen && renderMenu) {
      const timeoutId = setTimeout(() => setRenderMenu(false), 300)
      return () => clearTimeout(timeoutId)
    }
    return undefined
  }, [menuOpen, renderMenu])

  return (
    <>
      <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 relative z-40">

        {/* Hamburger - only on mobile */}
        <button
          onClick={openMenu}
          className="lg:hidden text-gray-600 hover:text-gray-800 p-1 transition-all duration-200 active:scale-95"
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
      {renderMenu && (
        <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

          {/* Dark background overlay — fades in and out */}
          <div
            onClick={closeMenu}
            className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-40' : 'opacity-0'}`}
          />

          {/* Sidebar drawer — slides in from left */}
          <div className={`absolute top-0 left-0 h-full z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="relative h-full">

              {/* X close button */}
              <button
                onClick={closeMenu}
                className="absolute top-4 right-3 z-10 text-gray-500 hover:text-gray-800 bg-white rounded-full p-1 transition-all duration-200 active:scale-95"
              >
                <X size={18} />
              </button>

              <Sidebar
                onClose={closeMenu}
                isMobile={true}
              />

            </div>
          </div>
        </div>
      )}
    </>
  )
}