'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function NewCustomerModal({ onClose }) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    console.log('New customer:', form)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">

        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">New Customer</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <div>
            <label htmlFor="cust-name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              id="cust-name"
              name="name"
              type="text"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="cust-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
            </label>
            <input
              id="cust-phone"
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
            <label htmlFor="cust-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              id="cust-email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="cust-address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              id="cust-address"
              name="address"
              placeholder="Enter address"
              value={form.address}
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
              Save Customer
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}