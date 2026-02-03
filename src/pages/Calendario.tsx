import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter, Download } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
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
  const [view, setView] = useState<'month'|'week'>('month');
  const [showOnlyEvents, setShowOnlyEvents] = useState(false);
  const [selectedDay, setSelectedDay] = useState<{ day: number; events?: any[] } | null>(null);

  const todayIndex = calendarDays.findIndex((d) => d.isToday);
  const currentWeekStart = todayIndex >= 0 ? Math.floor(todayIndex / 7) * 7 : 0;

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
              <Button variant="outline" size="icon" aria-label="Mês anterior">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Próximo mês">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Janeiro 2025</h2>
              <Button size="sm" variant="outline" className="h-8" onClick={() => {
                const idx = calendarDays.findIndex(d => d.isToday);
                if (idx !== -1 && calendarDays[idx].day) setSelectedDay({ day: calendarDays[idx].day, events: calendarDays[idx].events });
              }}>
                Hoje
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-lg overflow-hidden border">
              <button onClick={() => setView('month')} className={cn("px-3 py-1 text-sm", view === 'month' ? 'bg-muted/10 font-medium' : 'text-muted-foreground hover:bg-muted/5')}>Mês</button>
              <button onClick={() => setView('week')} className={cn("px-3 py-1 text-sm", view === 'week' ? 'bg-muted/10 font-medium' : 'text-muted-foreground hover:bg-muted/5')}>Semana</button>
            </div>

            <Button variant="outline" className="gap-2" onClick={() => setShowOnlyEvents(s => !s)}>
              <Filter className="w-4 h-4" />
              {showOnlyEvents ? 'Mostrar todos' : 'Ver só dias com eventos'}
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
              {calendarDays.map((item, i) => {
                const hasEvents = !!item.events && item.events.length > 0;
                const isInWeek = view === 'week' && i >= currentWeekStart && i <= currentWeekStart + 6;

                return (
                  <button
                    key={i}
                    onClick={() => item.day && setSelectedDay({ day: item.day, events: item.events })}
                    aria-pressed={selectedDay?.day === item.day}
                    className={cn(
                      "min-h-[100px] p-3 border-b border-r last:border-r-0 text-left transition-all",
                      item.day && "hover:bg-muted/30 cursor-pointer",
                      !item.day && "bg-muted/10",
                      showOnlyEvents && !hasEvents && "opacity-30 pointer-events-none",
                      isInWeek && "ring-1 ring-accent/20 rounded-md"
                    )}
                  >
                    {item.day && (
                      <div>
                        <div className="flex items-start justify-between">
                          <span className={cn(
                            "inline-flex items-center justify-center w-7 h-7 text-sm rounded-full",
                            item.isToday ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground"
                          )}>
                            {item.day}
                          </span>
                          {hasEvents && <Badge className="text-xs">{item.events.length}</Badge>}
                        </div>

                        {hasEvents && (
                          <div className="mt-3 space-y-2">
                            {item.events.slice(0, 2).map((event: any, j: number) => (
                              <div key={j} className="flex items-center gap-2">
                                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium", event.type === 'vacation' ? 'bg-success text-white' : 'bg-pending text-white')}>{event.name.split(' ')[0][0]}</div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium truncate">{event.name}</div>
                                  <div className="text-xs text-muted-foreground">{event.type === 'vacation' ? 'De férias' : 'Pendente'}</div>
                                </div>
                              </div>
                            ))}

                            {item.events.length > 2 && (
                              <div className="text-xs text-muted-foreground">+{item.events.length - 2} mais</div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sidebar - Day Details, Legend & Team Members */}
          <div className="space-y-4">
            {selectedDay ? (
              <div className="bg-card rounded-xl border shadow-card p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">Detalhes - Dia {selectedDay.day}</h3>
                    <p className="text-xs text-muted-foreground">{selectedDay.events?.length || 0} evento(s)</p>
                  </div>
                  <div>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedDay(null)} aria-label="Fechar detalhes">×</Button>
                  </div>
                </div>

                <div className="space-y-3">
                  {selectedDay.events?.map((ev:any, i:number) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/5 transition-colors">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className={cn(ev.type === 'vacation' ? 'bg-success text-white' : 'bg-pending text-white')}>{ev.name.split(' ')[0][0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground truncate">{ev.name}</div>
                        <div className="text-xs text-muted-foreground">{ev.type === 'vacation' ? 'De férias' : 'Pendente'}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Ver</Button>
                        <Button size="sm" className={ev.type === 'pending' ? 'bg-primary text-white' : 'hidden'}>Aprovar</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
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
            )}

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
                      <AvatarFallback className="bg-primary text-white text-xs">
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
