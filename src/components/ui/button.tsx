import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-['Nunito_Sans'] uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 cursor-pointer",
        outline:
          "border border-primary text-text bg-background hover:bg-primary hover:text-white cursor-pointer",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer",
        ghost: "hover:bg-accent hover:text-accent-foreground cursor-pointer",
        link: "text-primary underline-offset-4 hover:underline cursor-pointer",
        // Figma Design Variants
        purple: "bg-[#c347fc] text-white hover:bg-[#b33ee8] shadow-none rounded-[5px]",
        "purple-shadow": "bg-[#a006d8] text-white hover:bg-[#8f05c0] shadow-[3px_4px_8px_rgba(0,0,0,0.25)] rounded-[5px] cursor-pointer",
        cyan: "bg-[#28e7c5] text-[#081528] hover:bg-[#20d4b3] shadow-none rounded-[5px]",
        "cyan-shadow": "bg-[#28d7e7] text-[#081528] hover:bg-[#20c5d4] shadow-[3px_4px_10px_rgba(0,0,0,0.25)] rounded-[5px] cursor-pointer",
        whatsapp: "bg-[#25d366] text-white hover:bg-[#20c157] rounded-[5px] justify-between",
        "whatsapp-dark": "bg-[#0fb34c] text-white hover:bg-[#0da143] rounded-[5px] justify-between cursor-pointer",
      },
      size: {
        default: "py-3 px-4 py-2",
        sm: "py-3 rounded-md px-3",
        lg: "py-3 rounded-md px-8",
        xl: "py-3 rounded-md px-16",
        icon: "py-3 w-10",
        // Figma specific sizes
        figma: "px-[55px] py-[13px] text-[15px] leading-[17px] font-medium",
        "figma-whatsapp": "h-[39px] px-[19px] py-[7px] text-[15px] leading-[17px] font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /**
   * Loading state - shows spinner and disables button
   */
  loading?: boolean
  /**
   * Icon component to display (typically for WhatsApp buttons)
   */
  icon?: React.ReactNode
  /**
   * Make button full width
   */
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    icon,
    fullWidth = false,
    disabled,
    children,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && "w-full",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {children}
        {icon && !loading && icon}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }