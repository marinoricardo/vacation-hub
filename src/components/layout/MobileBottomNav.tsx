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

const primaryNav = [
  { name: "Home", href: "/dashboard" },
  { name: "Férias", href: "/ferias" },
  { name: "Agenda", href: "/calendario" },
  { name: "Pedidos", href: "/pedidos" },
];

const moreNav = [
  { name: "Histórico", href: "/historico" },
  { name: "Equipa", href: "/equipa" },
  { name: "Configurações", href: "/configuracoes" },
];

export function MobileBottomNav() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/50 safe-area-bottom">
        <div className="flex items-stretch justify-around h-14">
          {primaryNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 text-muted-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              <span className="text-[11px] leading-tight">{item.name}</span>
            </NavLink>
          ))}
          
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="flex-1 flex flex-col items-center justify-center gap-0.5 text-muted-foreground">
                <span className="text-[11px] leading-tight">Mais</span>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-2xl px-6 pb-8">
              <SheetHeader className="text-left pb-4">
                <SheetTitle className="font-display text-lg">Menu</SheetTitle>
              </SheetHeader>
              
              <div className="space-y-1">
                {moreNav.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
                    activeClassName="bg-primary/10 text-primary font-medium"
                    onClick={() => setSheetOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
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
