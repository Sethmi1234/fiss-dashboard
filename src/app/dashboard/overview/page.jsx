'use client'

import { motion } from 'framer-motion'
import StatsCards from '@/components/dashboard/overview/StatsCards'
import RecentTransactions from '@/components/dashboard/overview/RecentTransactions'
import QuickActions from '@/components/dashboard/overview/QuickActions'
import { statsData, recentTransactions } from '@/lib/data'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function OverviewPage() {
  return (
    <div>
      {/* Page title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Overview</h1>
        <p className="text-gray-400 text-sm mb-4 md:mb-6">
          Welcome back. Here's what's happening with your accounts today.
        </p>
      </motion.div>

      {/* Stats cards */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <StatsCards stats={statsData} />
      </motion.div>

      {/* Bottom section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="lg:col-span-2">
          <RecentTransactions transactions={recentTransactions} />
        </div>
        <div>
          <QuickActions />
        </div>
      </motion.div>
    </div>
  )
}