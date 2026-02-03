import { 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  Settings, 
  PalmtreeIcon,
  Clock,
  FileText,
  LogOut,
  ChevronLeft,
  Bell
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Minhas Férias", href: "/ferias", icon: PalmtreeIcon },
  { name: "Calendário", href: "/calendario", icon: CalendarDays },
  { name: "Histórico", href: "/historico", icon: Clock },
  { name: "Pedidos", href: "/pedidos", icon: FileText },
];

const adminNavigation = [
  { name: "Equipa", href: "/equipa", icon: Users },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
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
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <PalmtreeIcon className="w-6 h-6 text-white" />
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
              Menu Principal
            </span>
          )}
          <div className="mt-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all group",
                  collapsed && "justify-center"
                )}
                activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="pt-6 space-y-1">
          {!collapsed && (
            <span className="px-3 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">
              Administração
            </span>
          )}
          <div className="mt-2 space-y-1">
            {adminNavigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all",
                  collapsed && "justify-center"
                )}
                activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* User Section */}
      <div className="p-3 border-t border-sidebar-border">
        <div className={cn(
          "flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer",
          collapsed && "justify-center"
        )}>
          <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center text-white font-semibold text-sm">
            MC
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-accent-foreground truncate">
                Maria Costa
              </p>
              <p className="text-xs text-sidebar-foreground truncate">
                Gestora de RH
              </p>
            </div>
          )}
          {!collapsed && (
            <button className="p-2 hover:bg-sidebar-border rounded-lg transition-colors text-sidebar-foreground">
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
