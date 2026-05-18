import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-md shadow-primary/25 hover:bg-primary/92 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] dark:shadow-primary/20 dark:hover:shadow-primary/35',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border border-primary/30 bg-card/90 text-foreground shadow-sm backdrop-blur-sm hover:border-primary/50 hover:bg-primary/8 hover:text-primary dark:border-2 dark:border-button-outline-border dark:bg-button-outline dark:text-foreground dark:shadow-[inset_0_1px_0_0_oklch(1_0_0/0.06)] dark:hover:border-primary dark:hover:bg-accent dark:hover:text-accent-foreground',
        secondary:
          'border border-primary/25 bg-primary/10 text-primary shadow-sm hover:border-primary/40 hover:bg-primary/16 dark:border-primary/55 dark:bg-button-filled dark:text-button-filled-foreground dark:shadow-md dark:shadow-primary/15 dark:hover:border-primary dark:hover:bg-button-filled/90 dark:hover:brightness-110',
        ghost:
          'text-foreground hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/15 dark:hover:text-primary',
        link: 'text-primary underline-offset-4 hover:underline hover:text-primary/80',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-11 rounded-lg px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
