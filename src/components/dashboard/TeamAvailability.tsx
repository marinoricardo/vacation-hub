import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

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
  return (
    <div className="bg-card rounded-xl border shadow-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-semibold text-foreground">Equipa Hoje</h3>
        <span className="text-sm text-muted-foreground">
          {team.filter(t => t.status === "available").length}/{team.length} disponíveis
        </span>
      </div>

      <div className="space-y-3">
        {team.map((member) => (
          <div 
            key={member.name}
            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-9 h-9">
                  <AvatarFallback className="bg-gradient-primary text-white text-xs font-medium">
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
      </div>
    </div>
  );
}
