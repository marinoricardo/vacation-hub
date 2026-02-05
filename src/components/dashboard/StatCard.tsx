import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  variant?: "default" | "primary" | "success" | "warning" | "pending";
}

const variantStyles = {
  default: "bg-card border",
  primary: "bg-primary text-primary-foreground border-transparent",
  success: "bg-card border-l-4 border-l-success",
  warning: "bg-card border-l-4 border-l-warning",
  pending: "bg-card border-l-4 border-l-muted-foreground",
};

export function StatCard({ 
  title, 
  value, 
  subtitle,
  variant = "default" 
}: StatCardProps) {
  return (
    <div className={cn(
      "rounded-xl p-6 transition-all hover:shadow-md",
      variantStyles[variant]
    )}>
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
  );
}
