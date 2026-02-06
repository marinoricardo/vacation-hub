import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Clock,
  PalmtreeIcon,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

const history = [
  {
    id: 1,
    year: 2025,
    entries: [
      { id: 1, startDate: "15 Jan", endDate: "22 Jan", days: 8, type: "Férias", status: "approved" },
      { id: 2, startDate: "25 Jan", endDate: "26 Jan", days: 2, type: "Férias", status: "pending" },
    ]
  },
  {
    id: 2,
    year: 2024,
    entries: [
      { id: 3, startDate: "10 Dez", endDate: "15 Dez", days: 6, type: "Férias", status: "approved" },
      { id: 4, startDate: "05 Nov", endDate: "05 Nov", days: 1, type: "Pessoal", status: "rejected" },
      { id: 5, startDate: "15 Ago", endDate: "30 Ago", days: 12, type: "Férias", status: "approved" },
      { id: 6, startDate: "01 Jun", endDate: "05 Jun", days: 5, type: "Férias", status: "approved" },
      { id: 7, startDate: "10 Abr", endDate: "12 Abr", days: 3, type: "Férias", status: "approved" },
    ]
  },
  {
    id: 3,
    year: 2023,
    entries: [
      { id: 8, startDate: "20 Dez", endDate: "31 Dez", days: 8, type: "Férias", status: "approved" },
      { id: 9, startDate: "01 Jul", endDate: "15 Jul", days: 11, type: "Férias", status: "approved" },
      { id: 10, startDate: "15 Mar", endDate: "17 Mar", days: 3, type: "Pessoal", status: "approved" },
    ]
  },
];

const statusConfig = {
  approved: { 
    label: "Aprovado", 
    icon: CheckCircle2, 
    className: "bg-success-light text-success" 
  },
  pending: { 
    label: "Pendente", 
    icon: Clock, 
    className: "bg-pending-light text-pending" 
  },
  rejected: { 
    label: "Rejeitado", 
    icon: XCircle, 
    className: "bg-destructive-light text-destructive" 
  },
};

export default function Historico() {
  return (
    <AppLayout>
      <AppHeader 
        title="Histórico" 
        subtitle="Consultar histórico de férias" 
      />
      <PageTransition>
      <div className="p-4 md:p-6 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Pesquisar no histórico..." 
              className="pl-9 bg-card border-border/50"
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtrar
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl border shadow-card p-4">
            <p className="text-sm text-muted-foreground mb-1">Total 2024</p>
            <p className="text-2xl font-display font-bold text-foreground">27 dias</p>
          </div>
          <div className="bg-card rounded-xl border shadow-card p-4">
            <p className="text-sm text-muted-foreground mb-1">Total 2023</p>
            <p className="text-2xl font-display font-bold text-foreground">22 dias</p>
          </div>
          <div className="bg-success-light border border-success/20 rounded-xl p-4">
            <p className="text-sm text-muted-foreground mb-1">Aprovados</p>
            <p className="text-2xl font-display font-bold text-success">48</p>
          </div>
          <div className="bg-destructive-light border border-destructive/20 rounded-xl p-4">
            <p className="text-sm text-muted-foreground mb-1">Rejeitados</p>
            <p className="text-2xl font-display font-bold text-destructive">1</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {history.map((year) => (
            <div key={year.id}>
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-display text-xl font-bold text-foreground">{year.year}</h3>
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground">
                  {year.entries.reduce((acc, e) => acc + e.days, 0)} dias
                </span>
              </div>

              {/* Entries */}
              <div className="space-y-3 pl-4 border-l-2 border-border ml-2">
                {year.entries.map((entry) => {
                  const status = statusConfig[entry.status as keyof typeof statusConfig];
                  return (
                    <div 
                      key={entry.id}
                      className="relative pl-6 py-2"
                    >
                      {/* Timeline dot */}
                      <div className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(50%+1px)] w-3 h-3 rounded-full border-2 border-background",
                        entry.status === "approved" && "bg-success",
                        entry.status === "pending" && "bg-pending",
                        entry.status === "rejected" && "bg-destructive"
                      )} />
                      
                      <div className="bg-card rounded-lg border shadow-card p-4 hover:shadow-card-hover transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <PalmtreeIcon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">
                                {entry.startDate} - {entry.endDate} {year.year}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {entry.type} • {entry.days} {entry.days === 1 ? "dia" : "dias"}
                              </p>
                            </div>
                          </div>
                          
                          <div className={cn(
                            "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium w-fit",
                            status.className
                          )}>
                            <status.icon className="w-4 h-4" />
                            {status.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center pt-4">
          <Button variant="outline" className="gap-2">
            Carregar mais anos
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
      </PageTransition>
    </AppLayout>
  );
}
