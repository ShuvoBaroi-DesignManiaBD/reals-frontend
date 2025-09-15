/**
 * Button Component Types and Documentation
 * 
 * This file contains TypeScript definitions and documentation for the Button component
 * based on Figma designs: BUTTON 1, Component 76, and Group 12714
 */

import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from "./button"

/**
 * Button Variant Types
 * 
 * Each variant corresponds to specific Figma designs:
 * - purple/purple-shadow: BUTTON 1 design with purple gradients
 * - cyan/cyan-shadow: Component 76 design with cyan/teal colors
 * - whatsapp/whatsapp-dark: Group 12714 design with WhatsApp styling
 */
export type ButtonVariant = 
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'purple'           // BUTTON 1 - Primary purple (#c347fc)
  | 'purple-shadow'    // BUTTON 1 - Purple with shadow (#a006d8)
  | 'cyan'             // Component 76 - Primary cyan (#28e7c5)
  | 'cyan-shadow'      // Component 76 - Cyan with shadow (#28d7e7)
  | 'whatsapp'         // Group 12714 - WhatsApp green (#25d366)
  | 'whatsapp-dark'    // Group 12714 - Dark WhatsApp green (#0fb34c)

/**
 * Button Size Types
 * 
 * Includes standard sizes plus Figma-specific dimensions
 */
export type ButtonSize = 
  | 'default'
  | 'sm'
  | 'lg'
  | 'icon'
  | 'figma'            // Standard Figma button size (42px height)
  | 'figma-whatsapp'   // WhatsApp button size (39px height)

/**
 * Extended Button Props
 * 
 * Combines standard HTML button attributes with variant props
 */
export interface ExtendedButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /**
   * Custom icon component for WhatsApp buttons
   * Should be placed after the text content
   */
  icon?: React.ReactNode
  /**
   * Loading state for async operations
   */
  loading?: boolean
  /**
   * Full width button
   */
  fullWidth?: boolean
}

/**
 * Button Usage Examples
 * 
 * @example
 * // BUTTON 1 - Purple variant
 * <Button variant="purple" size="figma">
 *   Click Me
 * </Button>
 * 
 * @example
 * // BUTTON 1 - Purple with shadow
 * <Button variant="purple-shadow" size="figma">
 *   Submit
 * </Button>
 * 
 * @example
 * // Component 76 - Cyan variant
 * <Button variant="cyan" size="figma">
 *   Continue
 * </Button>
 * 
 * @example
 * // Component 76 - Cyan with shadow
 * <Button variant="cyan-shadow" size="figma">
 *   Next Step
 * </Button>
 * 
 * @example
 * // Group 12714 - WhatsApp button
 * <Button variant="whatsapp" size="figma-whatsapp" className="min-w-[165px]">
 *   <span>Pieteikties</span>
 *   <WhatsAppIcon className="ml-2" />
 * </Button>
 * 
 * @example
 * // Group 12714 - Dark WhatsApp button
 * <Button variant="whatsapp-dark" size="figma-whatsapp" className="min-w-[165px]">
 *   <span>Pieteikties</span>
 *   <WhatsAppIcon className="ml-2" />
 * </Button>
 */

/**
 * Color Palette Reference
 * 
 * BUTTON 1 (Purple variants):
 * - Primary: #c347fc
 * - Shadow: #a006d8
 * - Text: #ffffff
 * 
 * Component 76 (Cyan variants):
 * - Primary: #28e7c5
 * - Shadow: #28d7e7
 * - Text: #081528
 * 
 * Group 12714 (WhatsApp variants):
 * - Primary: #25d366
 * - Dark: #0fb34c
 * - Text: #ffffff
 */

/**
 * Accessibility Guidelines
 * 
 * - All buttons include proper focus states with ring indicators
 * - Color contrast ratios meet WCAG AA standards
 * - Buttons are keyboard navigable
 * - Screen reader friendly with proper ARIA attributes
 * - Disabled state prevents interaction and reduces opacity
 */

/**
 * Design System Integration
 * 
 * This component integrates with:
 * - Tailwind CSS for utility classes
 * - Class Variance Authority (CVA) for variant management
 * - Radix UI for accessibility features
 * - Nunito Sans font family for consistent typography
 */