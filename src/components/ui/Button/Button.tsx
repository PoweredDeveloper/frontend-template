import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'success' | 'warning' | 'error'
}

// All Tailwind classes must be statically known → list everything here
const colorMap = {
  primary: {
    base: 'bg-primary text-primary-foreground border-primary',
    hover: 'hover:bg-primary/85 hover:border-primary/85',
    active: 'active:bg-primary active:border-primary',

    outline: {
      base: 'text-primary border-primary bg-transparent',
      hover: 'hover:bg-primary/10',
      active: 'active:bg-primary/20',
    },

    ghost: {
      base: 'text-primary bg-transparent border-transparent',
      hover: 'hover:bg-primary/10',
      active: 'active:bg-primary/20',
    },
  },

  success: {
    base: 'bg-success text-success-foreground border-success',
    hover: 'hover:bg-success/85 hover:border-success/85',
    active: 'active:bg-success active:border-success',

    outline: {
      base: 'text-success border-success bg-transparent',
      hover: 'hover:bg-success/10',
      active: 'active:bg-success/20',
    },

    ghost: {
      base: 'text-success bg-transparent border-transparent',
      hover: 'hover:bg-success/10',
      active: 'active:bg-success/20',
    },
  },

  warning: {
    base: 'bg-warning text-warning-foreground border-warning',
    hover: 'hover:bg-warning/85 hover:border-warning/85',
    active: 'active:bg-warning active:border-warning',

    outline: {
      base: 'text-warning border-warning bg-transparent',
      hover: 'hover:bg-warning/10',
      active: 'active:bg-warning/20',
    },

    ghost: {
      base: 'text-warning bg-transparent border-transparent',
      hover: 'hover:bg-warning/10',
      active: 'active:bg-warning/20',
    },
  },

  error: {
    base: 'bg-error text-error-foreground border-error',
    hover: 'hover:bg-error/85 hover:border-error/85',
    active: 'active:bg-error active:border-error',

    outline: {
      base: 'text-error border-error bg-transparent',
      hover: 'hover:bg-error/10',
      active: 'active:bg-error/20',
    },

    ghost: {
      base: 'text-error bg-transparent border-transparent',
      hover: 'hover:bg-error/10',
      active: 'active:bg-error/20',
    },
  },
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant = 'primary', size = 'md', color = 'primary', className, disabled, ...props }, ref) => {
  const base = 'font-semibold text-center rounded-lg cursor-pointer transition-colors duration-100 h-min w-min text-nowrap border'
  const disabledClasses = 'bg-secondary text-secondary-foreground border-secondary-foreground cursor-not-allowed'

  const styles = variant === 'primary' ? cn(colorMap[color].base, colorMap[color].hover, colorMap[color].active) : cn(colorMap[color][variant].base, colorMap[color][variant].hover, colorMap[color][variant].active)

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
    xl: 'text-lg px-8 py-4',
  }

  return (
    <button ref={ref} disabled={disabled} className={cn(base, disabled ? disabledClasses : styles, sizes[size], className)} {...props}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
