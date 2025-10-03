import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { SimpleLogo } from '../components/ui/SimpleLogo'
import { useDispatch, useSelector } from 'react-redux'
import { loginStart, loginSuccess, loginFailure, clearError } from '../store/slices/authSlice'
import { RootState } from '../store'
import { User } from '../types'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector((state: RootState) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  // Clear error when user starts typing
  const handleInputChange = () => {
    if (error) {
      dispatch(clearError())
    }
  }

  const onSubmit = async (data: LoginFormData) => {
    try {
      dispatch(loginStart())
      
      // Simulate API call - in a real app, this would be an actual API request
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, accept any email/password combination
      // In a real app, you would validate credentials with your backend
      if (data.email && data.password.length >= 6) {
        // Mock user data - in a real app, this would come from your API
        const user: User = {
          id: '1',
          name: data.email.split('@')[0], // Use part of email as name for demo
          email: data.email,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.email.split('@')[0])}&background=6366f1&color=fff`,
          agency: 'Demo Agency'
        }
        
        dispatch(loginSuccess(user))
      } else {
        dispatch(loginFailure('Invalid credentials. Please try again.'))
      }
    } catch (error) {
      dispatch(loginFailure('Login failed. Please try again.'))
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-500 to-secondary-500 items-center justify-center p-12">
        <div className="text-center text-white">
          <div className="flex justify-center mb-8">
            <SimpleLogo size="xl" showText={false} className="bg-white bg-opacity-20" />
          </div>
          <h1 className="text-5xl font-bold mb-6">FLUXORA</h1>
          <p className="text-xl opacity-90 mb-8 max-w-md">
            Streamline your social media presence across all platforms with intelligent automation
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm opacity-75">
            <span>🚀 Save 10+ hours per week</span>
            <span>•</span>
            <span>📈 Increase engagement by 40%</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex justify-center mb-4">
              <SimpleLogo size="lg" showText={false} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">FLUXORA</h1>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
            <p className="text-gray-600">
              Sign in to your account to continue managing your content
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                {...register('email')}
                type="email"
                className="input-field"
                placeholder="Enter your email"
                onChange={(e) => {
                  handleInputChange()
                  register('email').onChange(e)
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className="input-field pr-10"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    handleInputChange()
                    register('password').onChange(e)
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-primary-600 hover:text-primary-500"
              >
                Forgot your password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign in'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <span>Google</span>
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <span>Microsoft</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button className="font-medium text-primary-600 hover:text-primary-500">
                Start your free trial
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
