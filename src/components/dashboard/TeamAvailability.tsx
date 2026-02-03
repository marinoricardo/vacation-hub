import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const team = [
  { name: "João Silva", initials: "JS", status: "available", role: "Developer" },
  { name: "Ana Rodrigues", initials: "AR", status: "vacation", role: "Designer" },
  { name: "Pedro Santos", initials: "PS", status: "available", role: "Marketing" },
  { name: "Marta Fernandes", initials: "MF", status: "away", role: "HR Manager" },
  { name: "Carlos Oliveira", initials: "CO", status: "available", role: "Developer" },
  { name: "Sofia Martins", initials: "SM", status: "available", role: "Sales" },
];

const statusStyles = {
  available: "bg-success",
  vacation: "bg-primary",
  away: "bg-warning",
};

const statusLabels = {
  available: "Disponível",
  vacation: "De férias",
  away: "Ausente",
};

export function TeamAvailability() {
  const [filter, setFilter] = useState<"all" | "available" | "vacation" | "away">("all");
  const [query, setQuery] = useState("");

  const filtered = team.filter(t => (filter === "all" || t.status === filter) && (t.name.toLowerCase().includes(query.toLowerCase()) || t.role.toLowerCase().includes(query.toLowerCase())));

  return (
    <div className="bg-card rounded-xl border shadow-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground">Equipa Hoje</h3>
        <span className="text-sm text-muted-foreground">{team.filter(t => t.status === "available").length}/{team.length} disponíveis</span>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Input placeholder="Pesquisar membro ou cargo" value={query} onChange={(e) => setQuery(e.target.value)} className="flex-1" />
        <div className="inline-flex rounded-lg overflow-hidden border">
          {(["all","available","vacation","away"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                "px-3 py-1 text-sm",
                filter === key ? "bg-muted/10 font-medium" : "text-muted-foreground hover:bg-muted/5"
              )}
            >
              {key === "all" ? "Todos" : statusLabels[key as keyof typeof statusLabels]}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((member) => (
          <div 
            key={member.name}
            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-9 h-9">
                  <AvatarFallback className="bg-primary text-white text-xs font-medium">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <span className={cn(
                  "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card",
                  statusStyles[member.status as keyof typeof statusStyles]
                )} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
            <span className={cn(
              "text-xs px-2 py-1 rounded-full font-medium",
              member.status === "available" && "bg-success-light text-success",
              member.status === "vacation" && "bg-primary/10 text-primary",
              member.status === "away" && "bg-warning-light text-warning"
            )}>
              {statusLabels[member.status as keyof typeof statusLabels]}
            </span>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center text-sm text-muted-foreground py-6">Nenhum membro encontrado.</div>
        )}
      </div>
    </div>
  );
}
