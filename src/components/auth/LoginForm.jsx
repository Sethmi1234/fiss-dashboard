'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!username.trim()) {
      newErrors.username = 'Username is required'
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    return newErrors
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    router.push('/dashboard/overview')
  }

  return (
    <form onSubmit={handleLogin} className="space-y-5">

      <div>
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            if (errors.username) setErrors({ ...errors, username: '' })
          }}
          className={`w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-500 text-sm
            ${errors.username ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">{errors.username}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (errors.password) setErrors({ ...errors, password: '' })
            }}
            className={`w-full border p-3 pr-10 rounded-xl outline-none focus:ring-2 focus:ring-green-500 text-sm
              ${errors.password ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor="remember" className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="w-4 h-4 accent-green-600"
          />
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-700 text-white py-3 rounded-xl hover:bg-indigo-800 active:scale-95 transition text-sm font-semibold"
      >
        Login In
      </button>

      <div className="flex items-center justify-between text-sm">
        <button type="button" className="text-gray-500 underline hover:text-gray-700">
          Forgot password?
        </button>
        <span className="text-gray-400">
          Need an account?{' '}
          <button type="button" className="text-indigo-600 underline">
            Sign up
          </button>
        </span>
      </div>

    </form>
  )
}