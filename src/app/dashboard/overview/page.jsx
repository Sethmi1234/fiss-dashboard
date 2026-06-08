import StatsCards from '@/components/dashboard/overview/StatsCards'
import RecentTransactions from '@/components/dashboard/overview/RecentTransactions'
import QuickActions from '@/components/dashboard/overview/QuickActions'
import { statsData, recentTransactions } from '@/lib/data'

export default function OverviewPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">Overview</h1>
      <p className="text-gray-400 text-sm mb-6">Welcome back. Here's what's happening with your accounts today.</p>

      <StatsCards stats={statsData} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RecentTransactions transactions={recentTransactions} />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  )
}