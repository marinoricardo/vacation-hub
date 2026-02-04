import { PalmtreeIcon, CalendarPlus, FileText, Users, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { VacationRequestDialog } from "@/components/vacation/VacationRequestDialog";

const actions = [
  {
    icon: CalendarPlus,
    title: "Pedir Férias",
    description: "Submeter novo pedido",
    color: "bg-primary/10 text-primary",
    href: null, // Will use dialog
    isDialog: true
  },
  {
    icon: FileText,
    title: "Ver Pedidos",
    description: "Gerir aprovações",
    color: "bg-pending/10 text-pending",
    href: "/pedidos"
  },
  {
    icon: Users,
    title: "Equipa",
    description: "Ver disponibilidade",
    color: "bg-success/10 text-success",
    href: "/equipa"
  },
  {
    icon: PalmtreeIcon,
    title: "Calendário",
    description: "Vista mensal",
    color: "bg-secondary/10 text-secondary",
    href: "/calendario"
  },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => {
        if (action.isDialog) {
          return (
            <VacationRequestDialog
              key={action.title}
              trigger={
                <button
                  aria-label={action.title}
                  className="group p-4 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between w-full"
                >
                  <div>
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105",
                      action.color
                    )}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-foreground">{action.title}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{action.description}</p>
                  </div>
                  <div className="mt-4 text-muted-foreground group-hover:text-foreground transition">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              }
            />
          );
        }

        return (
          <Link
            key={action.title}
            to={action.href!}
            aria-label={action.title}
            className="group p-4 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105",
                action.color
              )}>
                <action.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground">{action.title}</h4>
              <p className="text-sm text-muted-foreground mt-0.5">{action.description}</p>
            </div>
            <div className="mt-4 text-muted-foreground group-hover:text-foreground transition">
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
