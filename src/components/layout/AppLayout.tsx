import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { MobileBottomNav } from "./MobileBottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      {!isMobile && (
        <AppSidebar 
          collapsed={sidebarCollapsed} 
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
        />
      )}
      
      <main className={cn(
        "min-h-screen transition-all duration-300",
        !isMobile && (sidebarCollapsed ? "ml-20" : "ml-64"),
        isMobile && "pb-14"
      )}>
        {children}
      </main>

      {/* Mobile bottom nav */}
      {isMobile && <MobileBottomNav />}
    </div>
  );
}
