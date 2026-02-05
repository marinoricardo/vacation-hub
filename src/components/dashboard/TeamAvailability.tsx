import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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

  const filtered = team.filter(t => 
    (filter === "all" || t.status === filter) && 
    (t.name.toLowerCase().includes(query.toLowerCase()) || t.role.toLowerCase().includes(query.toLowerCase()))
  );

  const availableCount = team.filter(t => t.status === "available").length;

  return (
    <div className="bg-card rounded-xl border shadow-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground">Equipa Hoje</h3>
        <span className="text-sm text-muted-foreground">{availableCount}/{team.length} disponíveis</span>
      </div>

      <div className="space-y-3 mb-4">
        <Input 
          placeholder="Pesquisar..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          className="h-9"
        />
        <div className="flex gap-2 text-xs">
          {(["all", "available", "vacation", "away"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                "px-3 py-1.5 rounded-full transition-colors",
                filter === key 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {key === "all" ? "Todos" : statusLabels[key]}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {filtered.map((member) => (
          <div 
            key={member.name}
            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-muted text-foreground text-xs font-medium">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <span className={cn(
                  "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-card",
                  statusStyles[member.status as keyof typeof statusStyles]
                )} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center text-sm text-muted-foreground py-6">
            Nenhum membro encontrado.
          </div>
        )}
      </div>
    </div>
  );
}
