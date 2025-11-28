import { forwardRef, type ButtonHTMLAttributes } from 'react'
import cva, { type VariantProps } from '@/lib/cva'
import { cn } from '@/lib/cn'

export const buttonVariants = cva('font-semibold text-center rounded-lg cursor-pointer transition-colors duration-100 h-min w-min text-nowrap border select-none', {
  variants: {
    size: {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-6 py-3',
      xl: 'text-lg px-8 py-4',
    },
    variant: {
      primary: '',
      outline: 'bg-transparent',
      ghost: 'bg-transparent border-transparent',
      disabled: 'bg-secondary text-secondary-foreground border-secondary-foreground cursor-not-allowed',
    },
    color: {
      primary: 'primary',
      success: 'success',
      warning: 'warning',
      error: 'error',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      class: ({ color }) =>
        `bg-${color} text-${color}-foreground border-${color}
           hover:bg-${color}/85 hover:border-${color}/85
           active:bg-${color} active:border-${color}`,
    },
    {
      variant: 'outline',
      class: ({ color }) =>
        `text-${color} border-${color}
           hover:bg-${color}/10 active:bg-${color}/20`,
    },
    {
      variant: 'ghost',
      class: ({ color }) => `text-${color} hover:bg-${color}/10 active:bg-${color}/20`,
    },
  ],
  default: {
    size: 'md',
    variant: 'primary',
    color: 'primary',
  },
})

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant, size, color, className, disabled, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(buttonVariants({ variant: disabled ? 'disabled' : variant, size, color, className }))} {...props}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
