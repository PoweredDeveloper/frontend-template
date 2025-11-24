import { forwardRef, type ButtonHTMLAttributes } from 'react'
import cva, { type VariantProps } from '@/lib/cva'
import { cn } from '@/lib/cn'

export const buttonVariants = cva(
  'font-semibold text-center rounded-lg cursor-pointer transition-colors duration-100 h-min w-min text-nowrap border select-none',
  {
    variants: {
      size: {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-sm px-4 py-2',
        lg: 'text-base px-6 py-3',
        xl: 'text-lg px-8 py-4',
      },
      variant: {
        primary: 'bg-__COLOR__ text-__COLOR__-foreground border-__COLOR__ hover:bg-__COLOR__/85 hover:border-__COLOR__/85 active:bg-__COLOR__ active:border-__COLOR__',
        outline: 'text-__COLOR__ border-__COLOR__ bg-transparent hover:bg-__COLOR__/10 active:bg-__COLOR__/20',
        ghost: 'text-__COLOR__ bg-transparent border-transparent hover:bg-__COLOR__/10 active:bg-__COLOR__/20',
        disabled: 'bg-secondary text-secondary-foreground border-secondary-foreground cursor-not-allowed',
      },
      color: {
        primary: 'primary',
        success: 'success',
        warning: 'warning',
        error: 'error',
      },
    },
    default: {
      size: 'md',
      variant: 'primary',
      color: 'primary',
    },
  },
  '__COLOR__',
)

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
