import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold w-fit whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-secondary/10 text-secondary border-secondary/20",
        accent: "bg-accent/10 text-accent border-accent/20",
        success: "bg-success/10 text-success border-success/20",
        muted: "bg-muted text-muted-foreground border-border",
        outline: "bg-transparent text-foreground border-border",
        solid: "bg-primary text-primary-foreground border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
