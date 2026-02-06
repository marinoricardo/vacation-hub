import { Input } from "@/components/ui/input";
import { NotificationsDropdown } from "@/components/notifications/NotificationsDropdown";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { VacationRequestDialog } from "@/components/vacation/VacationRequestDialog";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppHeaderProps {
  title: string;
  subtitle?: string;
}

export function AppHeader({ title, subtitle }: AppHeaderProps) {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
        {/* Left - Title */}
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-lg md:text-xl font-bold text-foreground truncate">{title}</h1>
          {subtitle && !isMobile && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2 md:gap-3 ml-3">
          {/* Search - desktop only */}
          {!isMobile && (
            <div className="relative hidden md:block">
              <Input
                placeholder="Pesquisar..."
                className="pl-4 w-48 bg-muted/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 text-sm"
              />
            </div>
          )}

          {/* New Request Button */}
          <VacationRequestDialog 
            trigger={
              <Button size="sm" className="text-xs md:text-sm">
                {isMobile ? "Novo" : "Novo Pedido"}
              </Button>
            }
          />

          {/* Theme Toggle - desktop only (available in mobile "Mais" sheet) */}
          {!isMobile && <ThemeToggle />}

          {/* Notifications */}
          <NotificationsDropdown />
        </div>
      </div>
    </header>
  );
}
