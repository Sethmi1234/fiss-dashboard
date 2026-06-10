'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function NewTransactionModal({ onClose }) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    title: '',
    amount: '',
    type: '',
    category: '',
    description: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.title.trim()) newErrors.title = 'Title is required'
    if (!form.amount.trim()) newErrors.amount = 'Amount is required'
    else if (isNaN(form.amount) || Number(form.amount) <= 0) newErrors.amount = 'Enter a valid amount'
    if (!form.type) newErrors.type = 'Type is required'
    if (!form.category) newErrors.category = 'Category is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    console.log('New transaction:', form)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">

        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">New Transaction</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <div>
            <label htmlFor="txn-title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              id="txn-title"
              name="title"
              type="text"
              placeholder="e.g. Loan Repayment"
              value={form.title}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.title ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          <div>
            <label htmlFor="txn-amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount (Rs.) *
            </label>
            <input
              id="txn-amount"
              name="amount"
              type="number"
              placeholder="Enter amount"
              value={form.amount}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.amount ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
          </div>

          <div>
            <label htmlFor="txn-type" className="block text-sm font-medium text-gray-700 mb-1">
              Type *
            </label>
            <select
              id="txn-type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.type ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            >
              <option value="">Select type</option>
              <option value="Debit">Debit</option>
              <option value="Credit">Credit</option>
            </select>
            {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
          </div>

          <div>
            <label htmlFor="txn-category" className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              id="txn-category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.category ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            >
              <option value="">Select category</option>
              <option value="Loan Payment">Loan Payment</option>
              <option value="Loan Disbursement">Loan Disbursement</option>
              <option value="Staff Salary">Staff Salary</option>
              <option value="Investment Income">Investment Income</option>
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
          </div>

          <div>
            <label htmlFor="txn-description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="txn-description"
              name="description"
              placeholder="Optional description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
            >
              Save Transaction
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}