import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter, Download } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

// Mock calendar data with team vacations
const calendarDays = [
  { day: null }, { day: null }, { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 },
  { day: 6, isToday: true }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 },
  { day: 13 }, { day: 14 }, { day: 15, events: [{ name: "João S.", type: "vacation" }] }, 
  { day: 16, events: [{ name: "João S.", type: "vacation" }] }, 
  { day: 17, events: [{ name: "João S.", type: "vacation" }, { name: "Ana R.", type: "vacation" }] }, 
  { day: 18, events: [{ name: "João S.", type: "vacation" }, { name: "Ana R.", type: "vacation" }] }, 
  { day: 19, events: [{ name: "João S.", type: "vacation" }, { name: "Ana R.", type: "vacation" }] },
  { day: 20, events: [{ name: "João S.", type: "vacation" }, { name: "Ana R.", type: "vacation" }] }, 
  { day: 21, events: [{ name: "João S.", type: "vacation" }, { name: "Ana R.", type: "vacation" }] }, 
  { day: 22, events: [{ name: "João S.", type: "vacation" }, { name: "Ana R.", type: "vacation" }] }, 
  { day: 23, events: [{ name: "Ana R.", type: "vacation" }] }, 
  { day: 24, events: [{ name: "Ana R.", type: "vacation" }] }, 
  { day: 25, events: [{ name: "Pedro S.", type: "pending" }] }, 
  { day: 26, events: [{ name: "Pedro S.", type: "pending" }] },
  { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 }, { day: null }, { day: null },
];

const teamMembers = [
  { name: "João Silva", initials: "JS", department: "Dev", vacation: "15-22 Jan", status: "approved" },
  { name: "Ana Rodrigues", initials: "AR", department: "Marketing", vacation: "17-24 Jan", status: "approved" },
  { name: "Pedro Santos", initials: "PS", department: "Design", vacation: "25-26 Jan", status: "pending" },
];

export default function Calendario() {
  return (
    <AppLayout>
      <AppHeader 
        title="Calendário" 
        subtitle="Visualize as férias da equipa" 
      />
      
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Calendar Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Janeiro 2025</h2>
          </div>
          
          <div className="flex items-center gap-3">
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Calendar */}
          <div className="lg:col-span-3 bg-card rounded-xl border shadow-card overflow-hidden">
            {/* Week Days Header */}
            <div className="grid grid-cols-7 border-b bg-muted/30">
              {weekDays.map((day, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "py-3 text-center text-sm font-medium text-muted-foreground",
                    (i === 0 || i === 6) && "text-muted-foreground/60"
                  )}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7">
              {calendarDays.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "min-h-[100px] p-2 border-b border-r last:border-r-0 transition-colors",
                    item.day && "hover:bg-muted/30 cursor-pointer",
                    !item.day && "bg-muted/10"
                  )}
                >
                  {item.day && (
                    <>
                      <span className={cn(
                        "inline-flex items-center justify-center w-7 h-7 text-sm rounded-full",
                        item.isToday && "bg-primary text-primary-foreground font-semibold"
                      )}>
                        {item.day}
                      </span>
                      {item.events && (
                        <div className="mt-1 space-y-1">
                          {item.events.slice(0, 2).map((event, j) => (
                            <div
                              key={j}
                              className={cn(
                                "text-xs px-2 py-1 rounded-md truncate font-medium",
                                event.type === "vacation" && "bg-success-light text-success",
                                event.type === "pending" && "bg-pending-light text-pending"
                              )}
                            >
                              {event.name}
                            </div>
                          ))}
                          {item.events.length > 2 && (
                            <div className="text-xs text-muted-foreground px-2">
                              +{item.events.length - 2} mais
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Team Members */}
          <div className="space-y-4">
            {/* Legend */}
            <div className="bg-card rounded-xl border shadow-card p-4">
              <h3 className="font-semibold text-sm text-foreground mb-3">Legenda</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-sm text-muted-foreground">Férias aprovadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pending" />
                  <span className="text-sm text-muted-foreground">Pendente</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Hoje</span>
                </div>
              </div>
            </div>

            {/* Team Members on Leave */}
            <div className="bg-card rounded-xl border shadow-card p-4">
              <h3 className="font-semibold text-sm text-foreground mb-4">Férias este mês</h3>
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div 
                    key={member.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gradient-primary text-white text-xs">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {member.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{member.vacation}</p>
                    </div>
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded-full font-medium",
                      member.status === "approved" && "bg-success-light text-success",
                      member.status === "pending" && "bg-pending-light text-pending"
                    )}>
                      {member.status === "approved" ? "✓" : "..."}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-card rounded-xl border shadow-card p-4">
              <h3 className="font-semibold text-sm text-foreground mb-4">Este mês</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-display font-bold text-foreground">3</p>
                  <p className="text-xs text-muted-foreground">De férias</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-display font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground">Disponíveis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
