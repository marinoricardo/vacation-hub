import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning" | "pending";
}

const variantStyles = {
  default: "bg-card border",
  primary: "bg-primary text-primary-foreground border-transparent",
  success: "bg-card border-l-4 border-l-success",
  warning: "bg-card border-l-4 border-l-warning",
  pending: "bg-card border-l-4 border-l-muted-foreground",
};

const iconContainerStyles = {
  default: "bg-muted text-muted-foreground",
  primary: "bg-primary-foreground/15 text-primary-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  pending: "bg-muted text-muted-foreground",
};

export function StatCard({ 
  title, 
  value, 
  subtitle,
  icon: Icon,
  variant = "default" 
}: StatCardProps) {
  return (
    <div className={cn(
      "rounded-xl p-6 transition-all hover:shadow-md",
      variantStyles[variant]
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={cn(
            "text-sm font-medium mb-2",
            variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>
            {title}
          </p>
          <p className={cn(
            "text-3xl font-display font-bold tracking-tight",
            variant === "primary" ? "text-primary-foreground" : "text-foreground"
          )}>
            {value}
          </p>
          {subtitle && (
            <p className={cn(
              "text-sm mt-1",
              variant === "primary" ? "text-primary-foreground/60" : "text-muted-foreground"
            )}>
              {subtitle}
            </p>
          )}
        </div>
        {Icon && (
          <div className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
            iconContainerStyles[variant]
          )}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
}
