import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const textVariants = cva('text-foreground', {
  variants: {
    size: {
      xs: 'text-xs sm:text-sm',
      sm: 'text-sm sm:text-base',
      base: 'text-base sm:text-lg',
      lg: 'text-lg sm:text-xl',
      xl: 'text-xl sm:text-2xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive',
      accent: 'text-accent-foreground',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'default',
    align: 'left',
  },
})

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div'
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, align, as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, color, align, className }))}
        {...props}
      />
    )
  },
)

Text.displayName = 'Text'

export { Text, textVariants }
