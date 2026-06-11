'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'

export default function NewEmployeeModal({ onClose }) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '', role: '', email: '', phone: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.role) newErrors.role = 'Role is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    console.log('New employee:', form)
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
          <h2 className="text-lg font-bold text-gray-800">New Employee</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <div className="space-y-1.5">
            <Label htmlFor="emp-name">Full Name *</Label>
            <Input
              id="emp-name" name="name" type="text"
              placeholder="Enter full name"
              value={form.name} onChange={handleChange}
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="emp-role">Role *</Label>
            <select
              id="emp-role" name="role"
              value={form.role} onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.role ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            >
              <option value="">Select role</option>
              <option value="Admin">Admin</option>
              <option value="Loan Officer">Loan Officer</option>
              <option value="Accountant">Accountant</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.role && <p className="text-destructive text-xs">{errors.role}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="emp-email">Email *</Label>
            <Input
              id="emp-email" name="email" type="email"
              placeholder="example@finexa.com"
              value={form.email} onChange={handleChange}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="emp-phone">Phone *</Label>
            <Input
              id="emp-phone" name="phone" type="tel"
              placeholder="+94 77 123 4567"
              value={form.phone} onChange={handleChange}
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 transition-all duration-200 active:scale-95">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-green-600 text-white hover:bg-green-700 transition-all duration-200 active:scale-95">
              Save Employee
            </Button>
          </div>

        </form>
      </motion.div>
    </motion.div>
  )
}