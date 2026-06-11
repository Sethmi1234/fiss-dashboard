'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'

export default function NewMicroLoanModal({ onClose }) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    customer: '', phone: '', principal: '',
    interestRate: '', installments: '', startDate: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.customer.trim()) newErrors.customer = 'Customer name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.principal.trim()) newErrors.principal = 'Principal amount is required'
    else if (isNaN(form.principal) || Number(form.principal) <= 0) newErrors.principal = 'Enter a valid amount'
    if (!form.interestRate.trim()) newErrors.interestRate = 'Interest rate is required'
    if (!form.installments.trim()) newErrors.installments = 'Installments is required'
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
        className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white">
          <h2 className="text-lg font-bold text-gray-800">New Micro Loan</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <div className="space-y-1.5">
            <Label htmlFor="ml-customer">Customer Name *</Label>
            <Input id="ml-customer" name="customer" type="text" placeholder="Enter customer name"
              value={form.customer} onChange={handleChange}
              className={errors.customer ? 'border-destructive' : ''} />
            {errors.customer && <p className="text-destructive text-xs">{errors.customer}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ml-phone">Phone *</Label>
            <Input id="ml-phone" name="phone" type="tel" placeholder="+94 77 123 4567"
              value={form.phone} onChange={handleChange}
              className={errors.phone ? 'border-destructive' : ''} />
            {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ml-principal">Principal Amount (Rs.) *</Label>
            <Input id="ml-principal" name="principal" type="number" placeholder="Enter amount"
              value={form.principal} onChange={handleChange}
              className={errors.principal ? 'border-destructive' : ''} />
            {errors.principal && <p className="text-destructive text-xs">{errors.principal}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ml-interest">Interest Rate (%) *</Label>
            <Input id="ml-interest" name="interestRate" type="number" placeholder="e.g. 15"
              value={form.interestRate} onChange={handleChange}
              className={errors.interestRate ? 'border-destructive' : ''} />
            {errors.interestRate && <p className="text-destructive text-xs">{errors.interestRate}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ml-installments">Number of Installments *</Label>
            <Input id="ml-installments" name="installments" type="number" placeholder="e.g. 12"
              value={form.installments} onChange={handleChange}
              className={errors.installments ? 'border-destructive' : ''} />
            {errors.installments && <p className="text-destructive text-xs">{errors.installments}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="ml-startdate">Start Date *</Label>
            <Input id="ml-startdate" name="startDate" type="date"
              value={form.startDate} onChange={handleChange}
              className={errors.startDate ? 'border-destructive' : ''} />
            {errors.startDate && <p className="text-destructive text-xs">{errors.startDate}</p>}
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 transition-all duration-200 active:scale-95">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-green-600 text-white hover:bg-green-700 transition-all duration-200 active:scale-95">
              Save Loan
            </Button>
          </div>

        </form>
      </motion.div>
    </motion.div>
  )
}