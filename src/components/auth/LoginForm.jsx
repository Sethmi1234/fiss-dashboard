'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function LoginForm() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!username.trim()) newErrors.username = 'Username is required'
    if (!password.trim()) newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
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

      <div className="space-y-1.5">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            if (errors.username) setErrors({ ...errors, username: '' })
          }}
          className={errors.username ? 'border-destructive' : ''}
        />
        {errors.username && (
          <p className="text-destructive text-xs">{errors.username}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (errors.password) setErrors({ ...errors, password: '' })
            }}
            className={`pr-10 ${errors.password ? 'border-destructive' : ''}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-destructive text-xs">{errors.password}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="remember" name="remember" />
        <Label htmlFor="remember" className="text-muted-foreground font-normal cursor-pointer">
          Remember me
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-indigo-700 hover:bg-indigo-800 text-white transition-all duration-200 active:scale-95"
      >
        Login In
      </Button>

      <div className="flex items-center justify-between text-sm">
        <button type="button" className="text-muted-foreground underline hover:text-foreground">
          Forgot password?
        </button>
        <span className="text-muted-foreground">
          Need an account?{' '}
          <button type="button" className="text-indigo-600 underline hover:text-indigo-800">
            Sign up
          </button>
        </span>
      </div>

    </form>
  )
}