'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

export interface BrandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
}

const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none inline-flex items-center justify-center whitespace-nowrap'
    
    const variants = {
      primary: 'bg-[#D151FF] text-white hover:bg-[#B91EFF] focus:ring-[#D151FF] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
      secondary: 'bg-[#0BC8E5] text-white hover:bg-[#0AA5C2] focus:ring-[#0BC8E5] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
      outline: 'border-2 border-[#D151FF] text-[#D151FF] hover:bg-[#D151FF] hover:text-white focus:ring-[#D151FF] bg-transparent',
      ghost: 'text-[#D151FF] hover:bg-[#D151FF]/10 focus:ring-[#D151FF] bg-transparent',
      gradient: 'bg-primary-gradient text-white hover:opacity-90 focus:ring-[#D151FF] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm h-8',
      md: 'px-4 py-2 text-base h-10',
      lg: 'px-6 py-3 text-lg h-12',
      xl: 'px-8 py-4 text-xl h-14'
    }
    
    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
BrandButton.displayName = 'BrandButton'

export { BrandButton }