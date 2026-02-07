import { Link } from "react-router-dom";
import { VacationRequestDialog } from "@/components/vacation/VacationRequestDialog";
import { PlusCircle, FileText, Users, CalendarDays } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface QuickAction {
  title: string;
  description: string;
  href: string | null;
  isDialog?: boolean;
  icon: LucideIcon;
}

const actions: QuickAction[] = [
  {
    title: "Pedir Férias",
    description: "Submeter novo pedido",
    href: null,
    isDialog: true,
    icon: PlusCircle,
  },
  {
    title: "Ver Pedidos",
    description: "Gerir aprovações",
    href: "/pedidos",
    icon: FileText,
  },
  {
    title: "Equipa",
    description: "Ver disponibilidade",
    href: "/equipa",
    icon: Users,
  },
  {
    title: "Calendário",
    description: "Vista mensal",
    href: "/calendario",
    icon: CalendarDays,
  },
];

function ActionCard({ action }: { action: QuickAction }) {
  const Icon = action.icon;
  return (
    <div className="group p-5 bg-card rounded-xl border hover:border-primary/30 hover:shadow-md transition-all text-left flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {action.title}
        </h4>
        <p className="text-sm text-muted-foreground mt-0.5">{action.description}</p>
      </div>
    </div>
  );
}

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => {
        if (action.isDialog) {
          return (
            <VacationRequestDialog
              key={action.title}
              trigger={
                <button aria-label={action.title} className="w-full">
                  <ActionCard action={action} />
                </button>
              }
            />
          );
        }

        return (
          <Link key={action.title} to={action.href!} aria-label={action.title}>
            <ActionCard action={action} />
          </Link>
        );
      })}
    </div>
  );
}
