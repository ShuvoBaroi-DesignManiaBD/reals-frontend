# Brand Implementation Guide - Reals Piedzivojums

## Brand Color System

### Primary Colors
```css
:root {
  /* Primary Brand Colors */
  --primary-purple: #D151FF;
  --secondary-cyan: #0BC8E5;
  
  /* Color Variations */
  --primary-purple-light: #E084FF;
  --primary-purple-dark: #B91EFF;
  --secondary-cyan-light: #4DD4EA;
  --secondary-cyan-dark: #0AA5C2;
  
  /* Neutral Colors */
  --white: #FFFFFF;
  --black: #000000;
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
}
```

### Tailwind CSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D151FF',
          50: '#F8E8FF',
          100: '#F1D1FF',
          200: '#E9B9FF',
          300: '#E084FF',
          400: '#D86BFF',
          500: '#D151FF',
          600: '#B91EFF',
          700: '#9A00E6',
          800: '#7A00B8',
          900: '#5A0089',
        },
        secondary: {
          DEFAULT: '#0BC8E5',
          50: '#E8F9FC',
          100: '#D1F3F9',
          200: '#B9EDF6',
          300: '#4DD4EA',
          400: '#2DCEE7',
          500: '#0BC8E5',
          600: '#0AA5C2',
          700: '#08829F',
          800: '#065F7C',
          900: '#043C59',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gradients: {
        'primary-gradient': 'linear-gradient(135deg, #D151FF 0%, #0BC8E5 100%)',
        'purple-gradient': 'linear-gradient(135deg, #D151FF 0%, #B91EFF 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #0BC8E5 0%, #0AA5C2 100%)',
      },
    },
  },
}
```

## Typography System

### Poppins Font Implementation
```css
/* Import Poppins from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Typography Scale */
.text-display {
  font-family: 'Poppins', sans-serif;
  font-size: 3.75rem; /* 60px */
  font-weight: 700;
  line-height: 1.1;
}

.text-h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem; /* 48px */
  font-weight: 600;
  line-height: 1.2;
}

.text-h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 600;
  line-height: 1.3;
}

.text-h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.875rem; /* 30px */
  font-weight: 500;
  line-height: 1.4;
}

.text-h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem; /* 24px */
  font-weight: 500;
  line-height: 1.4;
}

.text-body-large {
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem; /* 18px */
  font-weight: 400;
  line-height: 1.6;
}

.text-body {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.6;
}

.text-body-small {
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem; /* 14px */
  font-weight: 400;
  line-height: 1.5;
}

.text-caption {
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem; /* 12px */
  font-weight: 300;
  line-height: 1.4;
}
```

## Component Design System

### Button Components
```tsx
// components/ui/button.tsx
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-poppins font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 focus:ring-primary-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }
  
  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
```

### Card Components
```tsx
// components/ui/card.tsx
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'bordered'
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white shadow-lg',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-100',
    bordered: 'bg-white border-2 border-primary-200'
  }
  
  return (
    <div className={cn(
      'rounded-xl p-6 transition-all duration-200',
      variants[variant],
      className
    )}>
      {children}
    </div>
  )
}
```

### Gradient Backgrounds
```css
/* Gradient Utilities */
.bg-primary-gradient {
  background: linear-gradient(135deg, #D151FF 0%, #0BC8E5 100%);
}

.bg-purple-gradient {
  background: linear-gradient(135deg, #D151FF 0%, #B91EFF 100%);
}

.bg-cyan-gradient {
  background: linear-gradient(135deg, #0BC8E5 0%, #0AA5C2 100%);
}

.bg-hero-gradient {
  background: linear-gradient(135deg, rgba(209, 81, 255, 0.9) 0%, rgba(11, 200, 229, 0.9) 100%);
}

.bg-section-gradient {
  background: linear-gradient(180deg, rgba(209, 81, 255, 0.05) 0%, rgba(11, 200, 229, 0.05) 100%);
}
```

## Layout Components

### Container System
```tsx
// components/ui/container.tsx
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Container({ children, className, size = 'lg' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  }
  
  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8',
      sizes[size],
      className
    )}>
      {children}
    </div>
  )
}
```

### Section Wrapper
```tsx
// components/ui/section.tsx
import { cn } from '@/lib/utils'
import { Container } from './container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient' | 'primary' | 'secondary'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({ 
  children, 
  className, 
  background = 'white',
  padding = 'lg'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-section-gradient',
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500'
  }
  
  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  }
  
  return (
    <section className={cn(
      backgrounds[background],
      paddings[padding],
      className
    )}>
      <Container>
        {children}
      </Container>
    </section>
  )
}
```

## Form Components

### Input Components
```tsx
// components/ui/input.tsx
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  variant?: 'default' | 'filled'
}

export function Input({ 
  label, 
  error, 
  variant = 'default',
  className,
  ...props 
}: InputProps) {
  const variants = {
    default: 'border border-gray-300 focus:border-primary-500 focus:ring-primary-500',
    filled: 'bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary-500 focus:ring-primary-500'
  }
  
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 font-poppins">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-3 py-2 rounded-lg font-poppins text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
          variants[variant],
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 font-poppins">{error}</p>
      )}
    </div>
  )
}
```

## Animation System

### Transition Utilities
```css
/* Animation Classes */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

## Responsive Design Guidelines

### Breakpoint System
```css
/* Tailwind Breakpoints */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
/* 2xl: 1536px */

/* Mobile-first approach */
.responsive-text {
  @apply text-2xl;
  @apply md:text-3xl;
  @apply lg:text-4xl;
  @apply xl:text-5xl;
}

.responsive-spacing {
  @apply p-4;
  @apply md:p-6;
  @apply lg:p-8;
  @apply xl:p-12;
}
```

### Grid System
```css
/* Responsive Grid Layouts */
.grid-responsive {
  @apply grid grid-cols-1;
  @apply md:grid-cols-2;
  @apply lg:grid-cols-3;
  @apply xl:grid-cols-4;
  @apply gap-4;
  @apply md:gap-6;
  @apply lg:gap-8;
}

.grid-cards {
  @apply grid grid-cols-1;
  @apply sm:grid-cols-2;
  @apply lg:grid-cols-3;
  @apply gap-6;
}
```

## Implementation Checklist

### Brand Colors ✅
- [x] Primary purple (#D151FF) implemented
- [x] Secondary cyan (#0BC8E5) implemented
- [x] Color variations and shades defined
- [x] Tailwind configuration updated
- [x] CSS custom properties set

### Typography ✅
- [x] Poppins font family imported
- [x] Font weight variations defined
- [x] Typography scale established
- [x] Responsive text sizing

### Components 🔄
- [x] Button component with brand colors
- [x] Card components with gradient options
- [x] Form input components
- [x] Container and section wrappers
- [ ] Navigation components
- [ ] Modal components
- [ ] Loading states

### Design System 🔄
- [x] Color system documentation
- [x] Typography guidelines
- [x] Component specifications
- [ ] Icon library integration
- [ ] Animation guidelines
- [ ] Accessibility standards

---

**Next Steps:**
1. Implement remaining UI components
2. Create component documentation
3. Set up design tokens
4. Establish testing procedures
5. Create style guide documentation