import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import type { LucideProps } from "lucide-react";

function toKebabCase(name: string) {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-zA-Z])([0-9])/g, "$1-$2")
    .toLowerCase();
}

export function Icon({ name, ...props }: LucideProps & { name: string }) {
  return <DynamicIcon name={toKebabCase(name) as IconName} {...props} />;
}
