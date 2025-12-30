import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

interface SelectableCardProps {
  selected: boolean;
  onToggle: () => void;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function SelectableCard({
  selected,
  onToggle,
  icon,
  title,
  description,
  children,
  className,
}: SelectableCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "relative flex flex-col items-center gap-3 rounded-lg border-2 p-4 text-center transition-all",
        "hover:border-primary/50 hover:bg-muted/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        selected
          ? "border-primary bg-primary/5"
          : "border-muted-foreground/20 bg-background",
        className
      )}
    >
      {/* Checkmark badge */}
      {selected && (
        <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-4 w-4" />
        </div>
      )}

      {/* Icon */}
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center transition-colors",
          selected ? "text-primary" : "text-muted-foreground"
        )}
      >
        {icon}
      </div>

      {/* Title */}
      <div className="space-y-1">
        <h3
          className={cn(
            "font-medium leading-tight",
            selected ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {title}
        </h3>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Optional children for sub-options */}
      {children && selected && (
        <div className="mt-2 w-full border-t pt-2">{children}</div>
      )}
    </button>
  );
}
