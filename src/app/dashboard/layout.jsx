import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar - hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="p-4 md:p-6 flex-1">
          {children}
        </main>
      </div>

    </div>
  )
}