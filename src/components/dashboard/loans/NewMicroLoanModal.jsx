'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function NewMicroLoanModal({ onClose }) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    customer: '',
    phone: '',
    principal: '',
    interestRate: '',
    installments: '',
    startDate: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.customer.trim()) newErrors.customer = 'Customer name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.principal.trim()) newErrors.principal = 'Principal amount is required'
    else if (isNaN(form.principal) || Number(form.principal) <= 0) newErrors.principal = 'Enter a valid amount'
    if (!form.interestRate.trim()) newErrors.interestRate = 'Interest rate is required'
    if (!form.installments.trim()) newErrors.installments = 'Number of installments is required'
    if (!form.startDate) newErrors.startDate = 'Start date is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    console.log('New micro loan:', form)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">

        <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white">
          <h2 className="text-lg font-bold text-gray-800">New Micro Loan</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <div>
            <label htmlFor="ml-customer" className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name *
            </label>
            <input
              id="ml-customer"
              name="customer"
              type="text"
              placeholder="Enter customer name"
              value={form.customer}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.customer ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.customer && <p className="text-red-500 text-xs mt-1">{errors.customer}</p>}
          </div>

          <div>
            <label htmlFor="ml-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
            </label>
            <input
              id="ml-phone"
              name="phone"
              type="tel"
              placeholder="+94 77 123 4567"
              value={form.phone}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="ml-principal" className="block text-sm font-medium text-gray-700 mb-1">
              Principal Amount (Rs.) *
            </label>
            <input
              id="ml-principal"
              name="principal"
              type="number"
              placeholder="Enter amount"
              value={form.principal}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.principal ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.principal && <p className="text-red-500 text-xs mt-1">{errors.principal}</p>}
          </div>

          <div>
            <label htmlFor="ml-interest" className="block text-sm font-medium text-gray-700 mb-1">
              Interest Rate (%) *
            </label>
            <input
              id="ml-interest"
              name="interestRate"
              type="number"
              placeholder="e.g. 15"
              value={form.interestRate}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.interestRate ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.interestRate && <p className="text-red-500 text-xs mt-1">{errors.interestRate}</p>}
          </div>

          <div>
            <label htmlFor="ml-installments" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Installments *
            </label>
            <input
              id="ml-installments"
              name="installments"
              type="number"
              placeholder="e.g. 12"
              value={form.installments}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.installments ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.installments && <p className="text-red-500 text-xs mt-1">{errors.installments}</p>}
          </div>

          <div>
            <label htmlFor="ml-startdate" className="block text-sm font-medium text-gray-700 mb-1">
              Start Date *
            </label>
            <input
              id="ml-startdate"
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.startDate ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
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
              Save Loan
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}