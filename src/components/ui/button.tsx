import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25 hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5",
        primary:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5",
        accent:
          "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:-translate-y-0.5",
        outline:
          "border-2 border-border bg-transparent hover:bg-muted hover:border-secondary/40",
        ghost: "hover:bg-muted",
        link: "text-secondary underline-offset-4 hover:underline",
        white:
          "bg-white text-primary shadow-lg hover:bg-white/90 hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-5",
        sm: "h-9 px-4 text-sm has-[>svg]:px-3.5",
        lg: "h-14 px-8 text-base has-[>svg]:px-7",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
