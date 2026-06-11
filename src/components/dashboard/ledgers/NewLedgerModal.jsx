'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NewLedgerModal({ onClose }) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    description: '', type: '', amount: '', category: '', date: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.description.trim()) newErrors.description = 'Description is required'
    if (!form.type) newErrors.type = 'Type is required'
    if (!form.amount.trim()) newErrors.amount = 'Amount is required'
    else if (isNaN(form.amount) || Number(form.amount) <= 0) newErrors.amount = 'Enter a valid amount'
    if (!form.category) newErrors.category = 'Category is required'
    if (!form.date) newErrors.date = 'Date is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    console.log('New ledger entry:', form)
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">New Ledger Entry</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <div>
            <label htmlFor="ldg-description" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <input
              id="ldg-description" name="description" type="text"
              placeholder="e.g. Loan Repayment - ECL-001"
              value={form.description} onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400
                ${errors.description ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>

          <div>
            <label htmlFor="ldg-type" className="block text-sm font-medium text-gray-700 mb-1">
              Type *
            </label>
            <select
              id="ldg-type" name="type"
              value={form.type} onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400
                ${errors.type ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            >
              <option value="">Select type</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
            {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
          </div>

          <div>
            <label htmlFor="ldg-amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount (Rs.) *
            </label>
            <input
              id="ldg-amount" name="amount" type="number"
              placeholder="Enter amount"
              value={form.amount} onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400
                ${errors.amount ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
          </div>

          <div>
            <label htmlFor="ldg-category" className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              id="ldg-category" name="category"
              value={form.category} onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400
                ${errors.category ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            >
              <option value="">Select category</option>
              <option value="Loan Payment">Loan Payment</option>
              <option value="Loan Disbursement">Loan Disbursement</option>
              <option value="Staff Salary">Staff Salary</option>
              <option value="Investment">Investment</option>
              <option value="Expense">Expense</option>
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
          </div>

          <div>
            <label htmlFor="ldg-date" className="block text-sm font-medium text-gray-700 mb-1">
              Date *
            </label>
            <input
              id="ldg-date" name="date" type="date"
              value={form.date} onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400
                ${errors.date ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button" onClick={onClose}
              className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all duration-200 active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-200 active:scale-95"
            >
              Save Entry
            </button>
          </div>

        </form>
      </motion.div>
    </motion.div>
  )
}