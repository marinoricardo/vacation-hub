import { ChevronLeft } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { UserMenu } from "@/components/user/UserMenu";

interface AppSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Minhas Férias", href: "/ferias" },
  { name: "Calendário", href: "/calendario" },
  { name: "Histórico", href: "/historico" },
  { name: "Pedidos", href: "/pedidos" },
];

const adminNavigation = [
  { name: "Equipa", href: "/equipa" },
  { name: "Configurações", href: "/configuracoes" },
];

export function AppSidebar({ collapsed = false, onToggle }: AppSidebarProps) {
  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen bg-sidebar transition-all duration-300 flex flex-col",
      collapsed ? "w-20" : "w-64"
    )}>
      {/* Logo */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
          {!collapsed && (
            <span className="font-display font-bold text-xl text-sidebar-accent-foreground">
              VacaFlow
            </span>
          )}
        </div>
        <button 
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground"
        >
          <ChevronLeft className={cn(
            "w-5 h-5 transition-transform",
            collapsed && "rotate-180"
          )} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        <div className="space-y-1">
          {!collapsed && (
            <span className="px-3 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">
              Menu
            </span>
          )}
          <div className="mt-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all",
                  collapsed && "justify-center"
                )}
                activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
              >
                {collapsed ? (
                  <span className="text-sm font-medium">{item.name.charAt(0)}</span>
                ) : (
                  <span>{item.name}</span>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="pt-6 space-y-1">
          {!collapsed && (
            <span className="px-3 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">
              Admin
            </span>
          )}
          <div className="mt-2 space-y-1">
            {adminNavigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all",
                  collapsed && "justify-center"
                )}
                activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
              >
                {collapsed ? (
                  <span className="text-sm font-medium">{item.name.charAt(0)}</span>
                ) : (
                  <span>{item.name}</span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* User Section */}
      <div className="p-3 border-t border-sidebar-border">
        <UserMenu collapsed={collapsed} />
      </div>
    </aside>
  );
}
