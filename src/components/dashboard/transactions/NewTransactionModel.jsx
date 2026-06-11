'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'

export default function NewTransactionModal({ onClose }) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    title: '', amount: '', type: '', category: '', description: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
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
          <h2 className="text-lg font-bold text-gray-800">New Transaction</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <div className="space-y-1.5">
            <Label htmlFor="txn-title">Title *</Label>
            <Input
              id="txn-title" name="title" type="text"
              placeholder="e.g. Loan Repayment"
              value={form.title} onChange={handleChange}
              className={errors.title ? 'border-destructive' : ''}
            />
            {errors.title && <p className="text-destructive text-xs">{errors.title}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="txn-amount">Amount (Rs.) *</Label>
            <Input
              id="txn-amount" name="amount" type="number"
              placeholder="Enter amount"
              value={form.amount} onChange={handleChange}
              className={errors.amount ? 'border-destructive' : ''}
            />
            {errors.amount && <p className="text-destructive text-xs">{errors.amount}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="txn-type">Type *</Label>
            <select
              id="txn-type" name="type"
              value={form.type} onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.type ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            >
              <option value="">Select type</option>
              <option value="Debit">Debit</option>
              <option value="Credit">Credit</option>
            </select>
            {errors.type && <p className="text-destructive text-xs">{errors.type}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="txn-category">Category *</Label>
            <select
              id="txn-category" name="category"
              value={form.category} onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400
                ${errors.category ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
            >
              <option value="">Select category</option>
              <option value="Loan Payment">Loan Payment</option>
              <option value="Loan Disbursement">Loan Disbursement</option>
              <option value="Staff Salary">Staff Salary</option>
              <option value="Investment Income">Investment Income</option>
            </select>
            {errors.category && <p className="text-destructive text-xs">{errors.category}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="txn-description">Description</Label>
            <textarea
              id="txn-description" name="description"
              placeholder="Optional description"
              value={form.description} onChange={handleChange}
              rows={3}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 transition-all duration-200 active:scale-95">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-green-600 text-white hover:bg-green-700 transition-all duration-200 active:scale-95">
              Save Transaction
            </Button>
          </div>

        </form>
      </motion.div>
    </motion.div>
  )
}