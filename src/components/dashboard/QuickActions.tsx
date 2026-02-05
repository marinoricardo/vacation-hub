import { Link } from "react-router-dom";
import { VacationRequestDialog } from "@/components/vacation/VacationRequestDialog";

const actions = [
  {
    title: "Pedir Férias",
    description: "Submeter novo pedido",
    href: null,
    isDialog: true
  },
  {
    title: "Ver Pedidos",
    description: "Gerir aprovações",
    href: "/pedidos"
  },
  {
    title: "Equipa",
    description: "Ver disponibilidade",
    href: "/equipa"
  },
  {
    title: "Calendário",
    description: "Vista mensal",
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
                  className="group p-5 bg-card rounded-xl border hover:border-primary/30 hover:shadow-md transition-all text-left"
                >
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {action.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{action.description}</p>
                  <span className="text-primary text-sm mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                    Abrir →
                  </span>
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
            className="group p-5 bg-card rounded-xl border hover:border-primary/30 hover:shadow-md transition-all"
          >
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {action.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">{action.description}</p>
            <span className="text-primary text-sm mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
              Abrir →
            </span>
          </Link>
        );
      })}
    </div>
  );
}
