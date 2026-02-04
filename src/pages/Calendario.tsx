import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter, Download, PalmtreeIcon, X, Check, Eye } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { VacationRequestDialog } from "@/components/vacation/VacationRequestDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

// Mock calendar data with team vacations
const calendarDays = [
  { day: null }, { day: null }, { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 },
  { day: 6, isToday: true }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 },
  { day: 13 }, { day: 14 }, { day: 15, events: [{ name: "João Silva", type: "vacation", department: "Desenvolvimento", dates: "15-22 Jan" }] }, 
  { day: 16, events: [{ name: "João Silva", type: "vacation", department: "Desenvolvimento", dates: "15-22 Jan" }] }, 
  { day: 17, events: [{ name: "João Silva", type: "vacation", department: "Desenvolvimento", dates: "15-22 Jan" }, { name: "Ana Rodrigues", type: "vacation", department: "Marketing", dates: "17-24 Jan" }] }, 
  { day: 18, events: [{ name: "João Silva", type: "vacation", department: "Desenvolvimento", dates: "15-22 Jan" }, { name: "Ana Rodrigues", type: "vacation", department: "Marketing", dates: "17-24 Jan" }] }, 
  { day: 19, events: [{ name: "João Silva", type: "vacation", department: "Desenvolvimento", dates: "15-22 Jan" }, { name: "Ana Rodrigues", type: "vacation", department: "Marketing", dates: "17-24 Jan" }] },
  { day: 20, events: [{ name: "João Silva", type: "vacation", department: "Desenvolvimento", dates: "15-22 Jan" }, { name: "Ana Rodrigues", type: "vacation", department: "Marketing", dates: "17-24 Jan" }] }, 
  { day: 21, events: [{ name: "João Silva", type: "vacation", department: "Desenvolvimento", dates: "15-22 Jan" }, { name: "Ana Rodrigues", type: "vacation", department: "Marketing", dates: "17-24 Jan" }] }, 
  { day: 22, events: [{ name: "João Silva", type: "vacation", department: "Desenvolvimento", dates: "15-22 Jan" }, { name: "Ana Rodrigues", type: "vacation", department: "Marketing", dates: "17-24 Jan" }] }, 
  { day: 23, events: [{ name: "Ana Rodrigues", type: "vacation", department: "Marketing", dates: "17-24 Jan" }] }, 
  { day: 24, events: [{ name: "Ana Rodrigues", type: "vacation", department: "Marketing", dates: "17-24 Jan" }] }, 
  { day: 25, events: [{ name: "Pedro Santos", type: "pending", department: "Design", dates: "25-26 Jan" }] }, 
  { day: 26, events: [{ name: "Pedro Santos", type: "pending", department: "Design", dates: "25-26 Jan" }] },
  { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 }, { day: null }, { day: null },
];

const teamMembers = [
  { name: "João Silva", initials: "JS", department: "Desenvolvimento", vacation: "15-22 Jan", status: "approved" },
  { name: "Ana Rodrigues", initials: "AR", department: "Marketing", vacation: "17-24 Jan", status: "approved" },
  { name: "Pedro Santos", initials: "PS", department: "Design", vacation: "25-26 Jan", status: "pending" },
];

interface DayEvent {
  name: string;
  type: string;
  department: string;
  dates: string;
}

interface SelectedDay {
  day: number;
  events?: DayEvent[];
}

export default function Calendario() {
  const [view, setView] = useState<'month'|'week'>('month');
  const [showOnlyEvents, setShowOnlyEvents] = useState(false);
  const [selectedDay, setSelectedDay] = useState<SelectedDay | null>(null);
  const [dayDetailsOpen, setDayDetailsOpen] = useState(false);

  const todayIndex = calendarDays.findIndex((d) => d.isToday);
  const currentWeekStart = todayIndex >= 0 ? Math.floor(todayIndex / 7) * 7 : 0;

  const handleDayClick = (day: number, events?: DayEvent[]) => {
    setSelectedDay({ day, events });
    if (events && events.length > 0) {
      setDayDetailsOpen(true);
    } else {
      // Open vacation request dialog for empty days
      toast.info(`Dia ${day} de Janeiro - sem eventos. Clique em "Novo Pedido" para marcar férias.`);
    }
  };

  const handleApprove = (name: string) => {
    toast.success(`Pedido de ${name} aprovado!`);
    setDayDetailsOpen(false);
  };

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
                if (idx !== -1 && calendarDays[idx].day) {
                  handleDayClick(calendarDays[idx].day!, calendarDays[idx].events as DayEvent[]);
                }
              }}>
                Hoje
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-lg overflow-hidden border">
              <button onClick={() => setView('month')} className={cn("px-3 py-1 text-sm transition-colors", view === 'month' ? 'bg-primary text-primary-foreground font-medium' : 'text-muted-foreground hover:bg-muted/50')}>Mês</button>
              <button onClick={() => setView('week')} className={cn("px-3 py-1 text-sm transition-colors", view === 'week' ? 'bg-primary text-primary-foreground font-medium' : 'text-muted-foreground hover:bg-muted/50')}>Semana</button>
            </div>

            <Button variant="outline" className="gap-2" onClick={() => setShowOnlyEvents(s => !s)}>
              <Filter className="w-4 h-4" />
              {showOnlyEvents ? 'Mostrar todos' : 'Só eventos'}
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => toast.success("Calendário exportado!")}>
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
                const isHidden = view === 'week' && !isInWeek;

                if (isHidden) return null;

                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: item.day ? 1.02 : 1 }}
                    whileTap={{ scale: item.day ? 0.98 : 1 }}
                    onClick={() => item.day && handleDayClick(item.day, item.events as DayEvent[])}
                    aria-pressed={selectedDay?.day === item.day}
                    className={cn(
                      "min-h-[100px] p-3 border-b border-r last:border-r-0 text-left transition-all",
                      item.day && "hover:bg-muted/30 cursor-pointer",
                      !item.day && "bg-muted/10",
                      showOnlyEvents && !hasEvents && "opacity-30 pointer-events-none",
                      selectedDay?.day === item.day && "ring-2 ring-primary ring-inset"
                    )}
                  >
                    {item.day && (
                      <div>
                        <div className="flex items-start justify-between">
                          <span className={cn(
                            "inline-flex items-center justify-center w-7 h-7 text-sm rounded-full transition-colors",
                            item.isToday ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:bg-muted"
                          )}>
                            {item.day}
                          </span>
                          {hasEvents && <Badge className="text-xs">{item.events!.length}</Badge>}
                        </div>

                        {hasEvents && (
                          <div className="mt-3 space-y-2">
                            {item.events!.slice(0, 2).map((event: any, j: number) => (
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: j * 0.1 }}
                                className="flex items-center gap-2"
                              >
                                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium", event.type === 'vacation' ? 'bg-success text-white' : 'bg-pending text-white')}>{event.name.split(' ')[0][0]}</div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium truncate">{event.name}</div>
                                  <div className="text-xs text-muted-foreground">{event.type === 'vacation' ? 'De férias' : 'Pendente'}</div>
                                </div>
                              </motion.div>
                            ))}

                            {item.events!.length > 2 && (
                              <div className="text-xs text-muted-foreground">+{item.events!.length - 2} mais</div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Sidebar - Legend & Team Members */}
          <div className="space-y-4">
            {/* Quick Action */}
            <VacationRequestDialog 
              trigger={
                <Button className="w-full bg-gradient-primary gap-2">
                  <PalmtreeIcon className="w-4 h-4" />
                  Marcar Férias
                </Button>
              }
            />

            {/* Legend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-xl border shadow-card p-4"
            >
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
            </motion.div>

            {/* Team Members on Leave */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl border shadow-card p-4"
            >
              <h3 className="font-semibold text-sm text-foreground mb-4">Férias este mês</h3>
              <div className="space-y-3">
                {teamMembers.map((member, index) => (
                  <motion.div 
                    key={member.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => toast.info(`Ver detalhes de ${member.name}`)}
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
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl border shadow-card p-4"
            >
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Day Details Dialog */}
      <Dialog open={dayDetailsOpen} onOpenChange={setDayDetailsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">{selectedDay?.day}</span>
              </div>
              {selectedDay?.day} de Janeiro de 2025
            </DialogTitle>
            <DialogDescription>
              {selectedDay?.events?.length || 0} colaborador(es) de férias/ausente(s)
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <AnimatePresence>
              {selectedDay?.events?.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
                >
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={cn(
                      "font-medium",
                      event.type === 'vacation' ? 'bg-success text-white' : 'bg-pending text-white'
                    )}>
                      {event.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{event.name}</p>
                    <p className="text-sm text-muted-foreground">{event.department}</p>
                    <p className="text-xs text-muted-foreground mt-1">📅 {event.dates}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full font-medium text-center",
                      event.type === 'vacation' ? 'bg-success-light text-success' : 'bg-pending-light text-pending'
                    )}>
                      {event.type === 'vacation' ? 'Aprovado' : 'Pendente'}
                    </span>
                    {event.type === 'pending' && (
                      <div className="flex gap-1">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-7 px-2 text-destructive hover:bg-destructive/10"
                          onClick={() => toast.error(`Pedido de ${event.name} rejeitado`)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          className="h-7 px-2 bg-success hover:bg-success/90"
                          onClick={() => handleApprove(event.name)}
                        >
                          <Check className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setDayDetailsOpen(false)}>
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
}
