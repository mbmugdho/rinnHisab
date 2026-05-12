import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils/cn'

const badgeVariants = cva(
  [
    'inline-flex w-fit shrink-0 items-center justify-center gap-1.5',
    'overflow-hidden rounded-full border border-transparent',
    'px-3 py-1 text-xs font-medium whitespace-nowrap',
    'transition-colors',
    '[&>svg]:pointer-events-none [&>svg]:size-3',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-surface-raised text-foreground-muted border-border',
        outline: 'border-border text-foreground-muted bg-transparent',
        destructive: 'bg-danger/15 text-danger border-danger/20',
        success: 'bg-primary/15 text-primary border-primary/20',
      },
      size: {
        default: 'h-6 px-3 text-xs',
        sm: 'h-5 px-2.5 text-[10px]',
        lg: 'h-7 px-4 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Badge({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
