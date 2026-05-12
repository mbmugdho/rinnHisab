import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center gap-2',
    'rounded-xl border border-transparent',
    'text-sm font-semibold whitespace-nowrap',
    'transition-all outline-none select-none',
    'focus-visible:ring-2 focus-visible:ring-ring/50',
    'active:translate-y-px',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground border-primary/30 hover:brightness-110',
        secondary:
          'bg-surface-raised text-foreground border-border hover:bg-surface-overlay hover:border-border-strong',
        outline:
          'border-border bg-transparent text-foreground hover:bg-surface hover:border-border-strong',
        ghost: 'text-foreground-muted hover:bg-surface hover:text-foreground',
        destructive:
          'bg-danger/15 text-danger border-danger/20 hover:bg-danger/25',
        link: 'text-primary underline-offset-4 hover:underline p-0 h-auto border-none',
      },
      size: {
        default: 'h-10 px-5',
        xs: 'h-7 px-3 text-xs rounded-lg gap-1',
        sm: 'h-8 px-4 text-xs rounded-lg gap-1.5',
        lg: 'h-12 px-7 text-base rounded-xl gap-2.5',
        icon: 'size-10 rounded-xl',
        'icon-xs': 'size-7 rounded-lg',
        'icon-sm': 'size-8 rounded-lg',
        'icon-lg': 'size-12 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
