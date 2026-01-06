import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    positive: boolean;
  };
  variant?: "default" | "primary" | "success" | "warning" | "pending";
}

const variantStyles = {
  default: "bg-card",
  primary: "bg-gradient-primary text-white",
  success: "bg-success-light border-success/20",
  warning: "bg-warning-light border-warning/20",
  pending: "bg-pending-light border-pending/20",
};

const iconVariantStyles = {
  default: "bg-muted text-foreground",
  primary: "bg-white/20 text-white",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  pending: "bg-pending/10 text-pending",
};

export function StatCard({ 
  title, 
  value, 
  subtitle,
  icon: Icon, 
  trend,
  variant = "default" 
}: StatCardProps) {
  return (
    <div className={cn(
      "rounded-xl border p-6 transition-all hover:shadow-card-hover",
      variantStyles[variant],
      variant === "default" && "shadow-card"
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className={cn(
            "text-sm font-medium",
            variant === "primary" ? "text-white/80" : "text-muted-foreground"
          )}>
            {title}
          </p>
          <p className={cn(
            "text-3xl font-display font-bold tracking-tight",
            variant === "primary" ? "text-white" : "text-foreground"
          )}>
            {value}
          </p>
          {subtitle && (
            <p className={cn(
              "text-sm",
              variant === "primary" ? "text-white/70" : "text-muted-foreground"
            )}>
              {subtitle}
            </p>
          )}
          {trend && (
            <div className={cn(
              "flex items-center gap-1 text-sm font-medium",
              trend.positive ? "text-success" : "text-destructive"
            )}>
              <span>{trend.positive ? "+" : ""}{trend.value}%</span>
              <span className={cn(
                variant === "primary" ? "text-white/60" : "text-muted-foreground"
              )}>vs mês anterior</span>
            </div>
          )}
        </div>
        <div className={cn(
          "p-3 rounded-xl",
          iconVariantStyles[variant]
        )}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
