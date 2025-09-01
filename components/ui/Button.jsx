import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

// Simple className joiner (replaces `cn` from shadcn)
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Button = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
