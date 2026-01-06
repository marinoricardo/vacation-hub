import { CalendarDays, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const upcomingVacations = [
  {
    id: 1,
    name: "João Silva",
    avatar: "",
    initials: "JS",
    dates: "15 - 22 Jan",
    days: 8,
    status: "approved",
    department: "Desenvolvimento"
  },
  {
    id: 2,
    name: "Ana Rodrigues",
    avatar: "",
    initials: "AR",
    dates: "20 - 25 Jan",
    days: 6,
    status: "approved",
    department: "Marketing"
  },
  {
    id: 3,
    name: "Pedro Santos",
    avatar: "",
    initials: "PS",
    dates: "01 - 10 Fev",
    days: 10,
    status: "pending",
    department: "Design"
  },
  {
    id: 4,
    name: "Marta Fernandes",
    avatar: "",
    initials: "MF",
    dates: "05 - 12 Fev",
    days: 8,
    status: "approved",
    department: "Recursos Humanos"
  },
];

export function UpcomingVacations() {
  return (
    <div className="bg-card rounded-xl border shadow-card">
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <CalendarDays className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground">Próximas Férias</h3>
            <p className="text-sm text-muted-foreground">Equipa de Janeiro - Fevereiro</p>
          </div>
        </div>
        <button className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
          Ver todas
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="divide-y">
        {upcomingVacations.map((vacation) => (
          <div 
            key={vacation.id} 
            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={vacation.avatar} />
                <AvatarFallback className="bg-gradient-primary text-white text-sm font-medium">
                  {vacation.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{vacation.name}</p>
                <p className="text-sm text-muted-foreground">{vacation.department}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-foreground">{vacation.dates}</p>
              <div className="flex items-center gap-2 justify-end mt-1">
                <span className="text-sm text-muted-foreground">{vacation.days} dias</span>
                <span className={
                  vacation.status === "approved" 
                    ? "badge-approved text-xs" 
                    : "badge-pending text-xs"
                }>
                  {vacation.status === "approved" ? "Aprovado" : "Pendente"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
