import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserMenu } from "@/components/user/UserMenu";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { LayoutDashboard, Palmtree, CalendarDays, FileText, MoreHorizontal, History, Users, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const primaryNav: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "Home", href: "/dashboard", icon: LayoutDashboard },
  { name: "Férias", href: "/ferias", icon: Palmtree },
  { name: "Agenda", href: "/calendario", icon: CalendarDays },
  { name: "Pedidos", href: "/pedidos", icon: FileText },
];

const moreNav: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "Histórico", href: "/historico", icon: History },
  { name: "Equipa", href: "/equipa", icon: Users },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

export function MobileBottomNav() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/50 safe-area-bottom">
        <div className="flex items-stretch justify-around h-14">
          {primaryNav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className="flex-1 flex flex-col items-center justify-center gap-0.5 text-muted-foreground transition-colors"
                activeClassName="text-primary font-semibold"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] leading-tight">{item.name}</span>
              </NavLink>
            );
          })}
          
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="flex-1 flex flex-col items-center justify-center gap-0.5 text-muted-foreground">
                <MoreHorizontal className="w-5 h-5" />
                <span className="text-[10px] leading-tight">Mais</span>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-2xl px-6 pb-8">
              <SheetHeader className="text-left pb-4">
                <SheetTitle className="font-display text-lg">Menu</SheetTitle>
              </SheetHeader>
              
              <div className="space-y-1">
                {moreNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
                      activeClassName="bg-primary/10 text-primary font-medium"
                      onClick={() => setSheetOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                <UserMenu collapsed={false} />
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden behind bottom nav */}
      <div className="h-14 md:hidden" />
    </>
  );
}
