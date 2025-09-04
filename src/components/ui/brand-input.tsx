'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface BrandInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  variant?: 'default' | 'filled' | 'outlined'
  inputSize?: 'sm' | 'md' | 'lg'
}

const BrandInput = React.forwardRef<HTMLInputElement, BrandInputProps>(
  ({ className, label, error, variant = 'default', inputSize = 'md', type, ...props }, ref) => {
    const variants = {
      default: 'border border-gray-300 bg-white focus:border-[#D151FF] focus:ring-[#D151FF]',
      filled: 'bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#D151FF] focus:ring-[#D151FF]',
      outlined: 'border-2 border-[#D151FF]/30 bg-white focus:border-[#D151FF] focus:ring-[#D151FF]'
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm h-8',
      md: 'px-3 py-2 text-base h-10',
      lg: 'px-4 py-3 text-lg h-12'
    }
    
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-[#D151FF] ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(
            'w-full rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200',
            variants[variant],
            sizes[inputSize],
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)
BrandInput.displayName = 'BrandInput'

export { BrandInput }