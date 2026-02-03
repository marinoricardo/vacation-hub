import { cn } from "@/lib/utils";
import { LucideIcon, ChevronUp, ChevronDown } from "lucide-react";

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
  default: "bg-card border",
  primary: "bg-primary text-white border-transparent",
  success: "bg-success/5 border border-success/10",
  warning: "bg-warning/5 border border-warning/10",
  pending: "bg-muted/5 border border-muted/10",
};

const iconVariantStyles = {
  default: "bg-muted/10 text-foreground",
  primary: "bg-white/10 text-white",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  pending: "bg-muted/10 text-muted-foreground",
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
      "rounded-xl p-6 transition-all hover:shadow-card-hover hover:-translate-y-0.5",
      variantStyles[variant]
    )}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className={cn(
            "text-sm font-medium",
            variant === "primary" ? "text-white/90" : "text-muted-foreground"
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
            <div className="mt-2 inline-flex items-center gap-2">
              <div className={cn(
                "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-sm font-medium",
                trend.positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
              )}>
                {trend.positive ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                <span>{trend.positive ? "+" : ""}{trend.value}%</span>
              </div>
              <span className="text-xs text-muted-foreground">vs mês anterior</span>
            </div>
          )}
        </div>

        <div className={cn(
          "p-3 rounded-xl flex items-center justify-center w-12 h-12",
          iconVariantStyles[variant]
        )}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
