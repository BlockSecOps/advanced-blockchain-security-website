import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',

          // Size variants
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-8 py-4 text-base': size === 'md',
            'px-10 py-5 text-lg': size === 'lg',
          },

          // Variant styles
          {
            // Primary button
            'bg-primary-600 text-white hover:bg-primary-500 hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0':
              variant === 'primary',

            // Secondary button
            'bg-transparent text-secondary-500 border-2 border-secondary-500 hover:bg-secondary-500/10 hover:shadow-glow-secondary hover:-translate-y-0.5 active:translate-y-0':
              variant === 'secondary',

            // Ghost button
            'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/40':
              variant === 'ghost',
          },

          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
