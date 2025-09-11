import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const headingVariants = cva('text-foreground font-semibold tracking-tight', {
  variants: {
    level: {
      h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
      h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
      h3: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
      h4: 'text-base sm:text-lg md:text-xl lg:text-2xl',
      h5: 'text-sm sm:text-base md:text-lg lg:text-xl',
      h6: 'text-xs sm:text-sm md:text-base lg:text-lg',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
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
    },
  },
  defaultVariants: {
    level: 'h1',
    weight: 'semibold',
    color: 'default',
    align: 'left',
  },
})

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, weight, color, align, as, ...props }, ref) => {
    const Component = as || level || 'h1'

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, weight, color, align, className }))}
        {...props}
      />
    )
  },
)

Heading.displayName = 'Heading'

export { Heading, headingVariants }
