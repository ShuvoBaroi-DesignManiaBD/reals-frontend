# Design System - Tailwind Configuration

This document outlines the standardized design system implemented in the Tailwind configuration for consistent typography and color usage across the project.

## Color Palette

### Primary Colors
- **Primary Blue**: `bg-primary` or `text-primary` (#109AFC)
- **Secondary Purple**: `bg-secondary` or `text-secondary` (#C347FC)
- **Success Green**: `bg-success` or `text-success` (#1FE886)
- **Neutral Dark**: `bg-neutral` or `text-neutral` (#131313)
- **Light Gray**: `bg-neutral-200` or `text-neutral-200` (#EAEAEA)

### Usage Examples
```tsx
// Primary button
<button className="bg-primary text-white hover:bg-primary-600">
  Click me
</button>

// Secondary accent
<div className="border-l-4 border-secondary bg-secondary-50">
  Highlighted content
</div>

// Success state
<div className="bg-success-100 text-success-800 border border-success-200">
  Success message
</div>
```

## Typography System

### Heading Styles
- **Extra Large Heading**: `text-heading-xl` (60px/66px line-height, font-weight 700)
- **Large Heading**: `text-heading-lg` (44px/48px line-height, font-weight 600)
- **Medium Heading**: `text-heading-md` (26px/32px line-height, font-weight 600)
- **Small Heading**: `text-heading-sm` (20px/28px line-height, font-weight 500)

### Body Text Styles
- **Large Body**: `text-body-lg` (18px/28px line-height, font-weight 400)
- **Medium Body**: `text-body-md` (16px/24px line-height, font-weight 400)
- **Small Body**: `text-body-sm` (14px/20px line-height, font-weight 400)
- **Caption**: `text-caption` (13px/18px line-height, font-weight 400)
- **Small**: `text-small` (12px/16px line-height, font-weight 400)

### Usage Examples
```tsx
// Page title
<h1 className="text-heading-xl font-heading text-neutral-900">
  Welcome to Our Platform
</h1>

// Section heading
<h2 className="text-heading-lg font-heading text-neutral-800">
  About Us
</h2>

// Subheading
<h3 className="text-heading-md font-heading text-neutral-700">
  Our Services
</h3>

// Body text
<p className="text-body-lg font-body text-neutral-600">
  This is the main content paragraph with proper spacing and readability.
</p>

// Button text
<button className="text-body-md font-medium">
  Learn More
</button>

// Caption or small text
<span className="text-caption text-neutral-500">
  Last updated: January 2024
</span>
```

## Font Families
- **Headings**: `font-heading` (Poppins)
- **Body Text**: `font-body` (Inter)
- **Default Sans**: `font-sans` (Poppins, Inter fallback)

## Gradients
- **Primary Gradient**: `bg-gradient-primary` (Blue to Purple)
- **Secondary Gradient**: `bg-gradient-secondary` (Purple to Green)
- **Hero Gradient**: `bg-gradient-hero` (Hero section background)
- **Section Gradient**: `bg-gradient-section` (Subtle section backgrounds)

### Usage Examples
```tsx
// Hero section with gradient
<section className="bg-gradient-hero text-white">
  <h1 className="text-heading-xl">Hero Title</h1>
</section>

// Card with primary gradient
<div className="bg-gradient-primary text-white rounded-lg p-6">
  <h3 className="text-heading-md">Featured Content</h3>
</div>
```

## Animations
- **Fade In**: `animate-fade-in`
- **Slide In Left**: `animate-slide-in-left`
- **Slide In Right**: `animate-slide-in-right`
- **Accordion Down**: `animate-accordion-down`
- **Accordion Up**: `animate-accordion-up`

## Best Practices

1. **Consistency**: Always use the predefined typography classes instead of custom font sizes
2. **Hierarchy**: Use heading sizes appropriately (xl for page titles, lg for section headers, etc.)
3. **Color Contrast**: Ensure sufficient contrast between text and background colors
4. **Responsive Design**: Typography scales appropriately on different screen sizes
5. **Semantic HTML**: Use proper heading tags (h1, h2, h3) with corresponding typography classes

## Component Examples

### Card Component
```tsx
const Card = ({ title, content, isHighlighted = false }) => (
  <div className={`
    rounded-lg p-6 border transition-all duration-300
    ${isHighlighted 
      ? 'bg-gradient-primary text-white border-primary-300' 
      : 'bg-white border-neutral-200 hover:border-primary-200'
    }
  `}>
    <h3 className="text-heading-md font-heading mb-4">
      {title}
    </h3>
    <p className="text-body-lg font-body">
      {content}
    </p>
  </div>
);
```

### Button Component
```tsx
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-primary-200',
    secondary: 'bg-secondary text-white hover:bg-secondary-600 focus:ring-secondary-200',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-body-sm',
    md: 'px-4 py-2 text-body-md',
    lg: 'px-6 py-3 text-body-lg',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

This design system ensures consistent visual hierarchy and brand identity across all components and pages in the application.