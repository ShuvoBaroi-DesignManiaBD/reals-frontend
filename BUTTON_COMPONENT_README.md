# Button Component System

A comprehensive, reusable button component system based on Figma designs with full TypeScript support and accessibility features.

## 🎨 Design Sources

This component implements three main Figma design variants:

- **BUTTON 1**: Purple gradient buttons with optional shadows
- **Component 76**: Cyan/Teal buttons with optional shadows
- **Group 12714**: WhatsApp-style green buttons with icons

## 🚀 Quick Start

```tsx
import { Button } from '@/components/ui/button'

// Basic usage
<Button variant="purple" size="figma">
  Click Me
</Button>

// With loading state
<Button variant="cyan" loading>
  Processing...
</Button>

// WhatsApp style with icon
<Button 
  variant="whatsapp" 
  size="figma-whatsapp"
  icon={<WhatsAppIcon />}
>
  Pieteikties
</Button>
```

## 📋 Available Variants

### Purple Variants (BUTTON 1)
- `purple` - Primary purple (#c347fc)
- `purple-shadow` - Purple with shadow effect (#a006d8)

### Cyan Variants (Component 76)
- `cyan` - Primary cyan (#28e7c5)
- `cyan-shadow` - Cyan with shadow effect (#28d7e7)

### WhatsApp Variants (Group 12714)
- `whatsapp` - WhatsApp green (#25d366)
- `whatsapp-dark` - Dark WhatsApp green (#0fb34c)

### Standard Variants
- `default` - Default theme button
- `secondary` - Secondary styling
- `outline` - Outlined button
- `ghost` - Transparent background
- `link` - Link-style button
- `destructive` - Danger/error actions

## 📏 Available Sizes

- `sm` - Small button (36px height)
- `default` - Standard button (40px height)
- `lg` - Large button (44px height)
- `icon` - Square icon button (40x40px)
- `figma` - Figma design size (42px height)
- `figma-whatsapp` - WhatsApp button size (39px height)

## 🔧 Props API

```tsx
interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  fullWidth?: boolean
  disabled?: boolean
  asChild?: boolean
  className?: string
  children: React.ReactNode
  // ... all standard HTML button attributes
}
```

### Prop Details

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ButtonVariant` | `"default"` | Visual style variant |
| `size` | `ButtonSize` | `"default"` | Button size |
| `loading` | `boolean` | `false` | Shows spinner and disables button |
| `icon` | `React.ReactNode` | `undefined` | Icon component (typically for WhatsApp buttons) |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `disabled` | `boolean` | `false` | Disables button interaction |
| `asChild` | `boolean` | `false` | Renders as child component (Radix pattern) |

## 🎯 Usage Examples

### Basic Buttons

```tsx
// Purple variants
<Button variant="purple" size="figma">Submit</Button>
<Button variant="purple-shadow" size="figma">Submit with Shadow</Button>

// Cyan variants
<Button variant="cyan" size="figma">Continue</Button>
<Button variant="cyan-shadow" size="figma">Continue with Shadow</Button>
```

### WhatsApp Buttons

```tsx
// With WhatsApp icon
<Button 
  variant="whatsapp" 
  size="figma-whatsapp"
  className="min-w-[165px]"
  icon={
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path d="M12.5 2C6.98 2 2.5 6.48..." fill="white"/>
    </svg>
  }
>
  Pieteikties
</Button>

// Dark variant
<Button variant="whatsapp-dark" size="figma-whatsapp">
  Contact Us
</Button>
```

### Loading States

```tsx
<Button variant="purple" loading>
  Saving...
</Button>

<Button variant="cyan" loading disabled>
  Processing Payment
</Button>
```

### Full Width Buttons

```tsx
<Button variant="purple-shadow" fullWidth>
  Full Width Action
</Button>
```

### Custom Styling

```tsx
<Button 
  variant="cyan" 
  className="hover:scale-105 transition-transform"
>
  Custom Hover Effect
</Button>
```

## 🎨 Color Palette

### BUTTON 1 (Purple)
- Primary: `#c347fc`
- Shadow: `#a006d8`
- Text: `#ffffff`
- Hover: `#b33ee8` / `#8f05c0`

### Component 76 (Cyan)
- Primary: `#28e7c5`
- Shadow: `#28d7e7`
- Text: `#081528`
- Hover: `#20d4b3` / `#20c5d4`

### Group 12714 (WhatsApp)
- Primary: `#25d366`
- Dark: `#0fb34c`
- Text: `#ffffff`
- Hover: `#20c157` / `#0da143`

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support with proper focus indicators
- **Screen Readers**: Semantic HTML with proper ARIA attributes
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Visible focus rings with proper offset
- **Disabled States**: Proper disabled styling and interaction prevention

## 🔧 Technical Implementation

### Dependencies
- **React**: Component framework
- **Tailwind CSS**: Utility-first styling
- **Class Variance Authority (CVA)**: Variant management
- **Radix UI**: Accessibility primitives
- **Lucide React**: Icon system

### Font Integration
- **Nunito Sans**: Primary font family
- **Font Weight**: 500 (medium)
- **Text Transform**: Uppercase
- **Letter Spacing**: Wide tracking

### Animation & Transitions
- **Duration**: 200ms for smooth interactions
- **Properties**: All properties for comprehensive transitions
- **Loading Spinner**: Smooth rotation animation
- **Hover Effects**: Subtle color transitions

## 🧪 Testing

View the complete button showcase at `/buttons` to see all variants in action:

```bash
# Start development server
pnpm dev

# Navigate to button showcase
open http://localhost:3000/buttons
```

## 📁 File Structure

```
src/components/ui/
├── button.tsx           # Main button component
├── button.types.ts      # TypeScript definitions
src/components/
├── ButtonShowcase.tsx   # Demo component
src/app/
├── buttons/
│   └── page.tsx        # Showcase page
```

## 🔄 Migration Guide

If upgrading from a previous button implementation:

1. **Import Path**: Update to `@/components/ui/button`
2. **Variant Names**: Use new Figma-based variant names
3. **Size Props**: Update to new size system
4. **Icon Handling**: Use new `icon` prop for WhatsApp buttons
5. **Loading States**: Replace custom loading with `loading` prop

## 🤝 Contributing

When adding new button variants:

1. Add variant to `buttonVariants` CVA configuration
2. Update TypeScript types in `button.types.ts`
3. Add examples to `ButtonShowcase.tsx`
4. Update this documentation
5. Ensure accessibility compliance

## 📝 License

This component system is part of the Reals Frontend project and follows the project's licensing terms.