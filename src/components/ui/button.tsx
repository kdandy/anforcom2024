import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background font-serif transition-all duration-150',
  {
    variants: {
      color: {
        primary: 'bg-primary text-primary-foreground',
        secondary1: 'bg-secondary1 text-secondary1-foreground',
        secondary2: 'bg-secondary2 text-secondary2-foreground'
      },
      variant: {
        default: '',
        disable: 'bg-disabled text-disabled-foreground border border-disabled',
        light: '',
        outline:
          'bg-transparent border hover:bg-primary-hover active:bg-primary-pressed hover:text-white active:text-white',
        subtle: 'bg-transparent underline-offset-4 hover:underline'
      },
      size: {
        default: 'text-base h-[50px] font-semibold py-1 px-7 rounded-full',
        sm: 'text-sm h-[40px] font-semibold py-0.5 px-5 rounded-full',
        lg: 'text-sm h-[57px] font-semibold py-1.5 px-10 rounded-full'
      }
    },

    //kinda hardcode tp gatau lagi bg cape gw :(

    compoundVariants: [
      {
        variant: 'default',
        color: 'primary',
        className: 'hover:bg-primary-hover active:bg-primary-pressed'
      },
      {
        variant: 'default',
        color: 'secondary1',
        className: 'hover:bg-secondary1-hover active:bg-secondary1-pressed'
      },
      {
        variant: 'default',
        color: 'secondary2',
        className: 'hover:bg-secondary2-hover active:bg-secondary2-pressed'
      },
      {
        variant: 'light',
        color: 'primary',
        className: 'bg-primary-light text-primary-lightForeground'
      },
      {
        variant: 'light',
        color: 'secondary1',
        className: 'bg-secondary1-light text-secondary1-lightForeground'
      },
      {
        variant: 'light',
        color: 'secondary2',
        className: 'bg-secondary2-light text-secondary2-lightForeground'
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-primary text-primary'
      },
      {
        variant: 'outline',
        color: 'secondary1',
        className: 'border-secondary1 text-secondary1'
      },
      {
        variant: 'outline',
        color: 'secondary2',
        className: 'border-secondary2 text-secondary2'
      },
      {
        variant: 'subtle',
        color: 'primary',
        className: 'text-primary'
      },
      {
        variant: 'subtle',
        color: 'secondary1',
        className: 'text-secondary1'
      },
      {
        variant: 'subtle',
        color: 'secondary2',
        className: 'text-secondary2'
      }
    ],

    defaultVariants: {
      variant: 'default',
      size: 'default',
      color: 'primary'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  color?: 'primary' | 'secondary1' | 'secondary2'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ color, variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
