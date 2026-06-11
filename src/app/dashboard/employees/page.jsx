'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { employees } from '@/lib/data'
import NewEmployeeModal from '@/components/dashboard/employees/NewEmployeeModel'

const tableVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
}

export default function EmployeesPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Employees</h1>
          <p className="text-gray-400 text-sm mt-1">Manage all staff members.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="shrink-0 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-all duration-200 hover:scale-[1.02] active:scale-95"
        >
          + New Employee
        </button>
      </div>

      {showModal && <NewEmployeeModal onClose={() => setShowModal(false)} />}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <motion.div
          className="md:hidden divide-y divide-gray-100"
          variants={tableVariants}
          initial="hidden"
          animate="visible"
        >
          {employees.map((e) => (
            <motion.div key={e.id} variants={rowVariants} className="p-4 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">{e.name}</p>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                  {e.status}
                </span>
              </div>
              <p className="text-xs text-gray-400">{e.id}</p>
              <p className="text-sm text-gray-600">{e.role}</p>
              <p className="text-sm text-gray-600">{e.email}</p>
              <p className="text-sm text-gray-600">{e.phone}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <motion.tbody variants={tableVariants} initial="hidden" animate="visible">
              {employees.map((e) => (
                <motion.tr key={e.id} variants={rowVariants} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">{e.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{e.name}</td>
                  <td className="px-4 py-3 text-gray-600">{e.role}</td>
                  <td className="px-4 py-3 text-gray-600">{e.email}</td>
                  <td className="px-4 py-3 text-gray-600">{e.phone}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {e.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
        <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100">
          Showing {employees.length} results
        </div>
      </div>
    </div>
  )
}