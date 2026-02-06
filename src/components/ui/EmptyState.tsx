import { ReactNode } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  children?: ReactNode;
}

export function EmptyState({ title, description, action, className, children }: EmptyStateProps) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center py-16 px-6 text-center",
      className
    )}>
      {/* Minimalist geometric decoration */}
      <div className="mb-6 relative">
        <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
          <div className="w-6 h-6 rounded-lg bg-primary/10" />
        </div>
      </div>
      
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        {description}
      </p>
      
      {action && (
        <Button onClick={action.onClick} size="sm">
          {action.label}
        </Button>
      )}
      
      {children}
    </div>
  );
}
