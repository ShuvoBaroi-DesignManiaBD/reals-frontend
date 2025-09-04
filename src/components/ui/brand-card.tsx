'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface BrandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient' | 'bordered' | 'elevated' | 'primary' | 'secondary'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

const BrandCard = React.forwardRef<HTMLDivElement, BrandCardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white shadow-lg border border-gray-100',
      gradient: 'bg-section-gradient border border-[#D151FF]/20',
      bordered: 'bg-white border-2 border-[#D151FF]/30 hover:border-[#D151FF]/50 transition-colors',
      elevated: 'bg-white shadow-xl hover:shadow-2xl transition-shadow border border-gray-50',
      primary: 'bg-purple-gradient text-white shadow-lg',
      secondary: 'bg-cyan-gradient text-white shadow-lg'
    }
    
    const paddings = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl transition-all duration-200',
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
BrandCard.displayName = 'BrandCard'

const BrandCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 pb-4', className)}
    {...props}
  />
))
BrandCardHeader.displayName = 'BrandCardHeader'

const BrandCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-h4 font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
BrandCardTitle.displayName = 'BrandCardTitle'

const BrandCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-body-small text-gray-600', className)}
    {...props}
  />
))
BrandCardDescription.displayName = 'BrandCardDescription'

const BrandCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('pt-0', className)} {...props} />
))
BrandCardContent.displayName = 'BrandCardContent'

const BrandCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-4', className)}
    {...props}
  />
))
BrandCardFooter.displayName = 'BrandCardFooter'

export {
  BrandCard,
  BrandCardHeader,
  BrandCardFooter,
  BrandCardTitle,
  BrandCardDescription,
  BrandCardContent,
}