import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, PalmtreeIcon, Clock, CheckCircle2, XCircle, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

const vacationHistory = [
  { id: 1, startDate: "15 Jan 2025", endDate: "22 Jan 2025", days: 8, status: "approved", type: "Férias" },
  { id: 2, startDate: "25 Jan 2025", endDate: "26 Jan 2025", days: 2, status: "pending", type: "Férias" },
  { id: 3, startDate: "10 Dez 2024", endDate: "15 Dez 2024", days: 6, status: "approved", type: "Férias" },
  { id: 4, startDate: "05 Nov 2024", endDate: "05 Nov 2024", days: 1, status: "rejected", type: "Pessoal" },
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

export default function Ferias() {
  const [showForm, setShowForm] = useState(false);

  return (
    <AppLayout>
      <AppHeader 
        title="Minhas Férias" 
        subtitle="Gerir pedidos e histórico" 
      />
      
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-primary text-white rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/20">
                <PalmtreeIcon className="w-5 h-5" />
              </div>
              <span className="text-white/80 font-medium">Dias Disponíveis</span>
            </div>
            <p className="text-4xl font-display font-bold">18</p>
            <p className="text-white/60 text-sm mt-1">de 22 dias anuais</p>
          </div>
          
          <div className="bg-card rounded-xl border shadow-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-success/10">
                <CalendarDays className="w-5 h-5 text-success" />
              </div>
              <span className="text-muted-foreground font-medium">Dias Usados</span>
            </div>
            <p className="text-4xl font-display font-bold text-foreground">4</p>
            <p className="text-muted-foreground text-sm mt-1">em 2025</p>
          </div>
          
          <div className="bg-card rounded-xl border shadow-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-pending/10">
                <Clock className="w-5 h-5 text-pending" />
              </div>
              <span className="text-muted-foreground font-medium">Pendentes</span>
            </div>
            <p className="text-4xl font-display font-bold text-foreground">2</p>
            <p className="text-muted-foreground text-sm mt-1">dias a aguardar</p>
          </div>
        </div>

        {/* New Request Section */}
        <div className="bg-card rounded-xl border shadow-card overflow-hidden">
          <div 
            className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors"
            onClick={() => setShowForm(!showForm)}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Novo Pedido de Férias</h3>
                <p className="text-sm text-muted-foreground">Submeter um novo pedido</p>
              </div>
            </div>
            <Button 
              variant={showForm ? "secondary" : "default"}
              className={!showForm ? "bg-gradient-primary" : ""}
            >
              {showForm ? "Fechar" : "Abrir formulário"}
            </Button>
          </div>
          
          {showForm && (
            <div className="p-6 pt-0 border-t animate-slide-up">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <Label>Data de início</Label>
                  <Input type="date" className="h-12 input-focus" />
                </div>
                <div className="space-y-2">
                  <Label>Data de fim</Label>
                  <Input type="date" className="h-12 input-focus" />
                </div>
                <div className="space-y-2">
                  <Label>Tipo de ausência</Label>
                  <select className="flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm input-focus">
                    <option value="vacation">Férias</option>
                    <option value="personal">Dia pessoal</option>
                    <option value="medical">Consulta médica</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Dias calculados</Label>
                  <div className="h-12 px-4 bg-muted/50 rounded-lg flex items-center text-muted-foreground">
                    Selecione as datas
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label>Observações (opcional)</Label>
                  <Textarea 
                    placeholder="Adicione notas ou contexto ao seu pedido..."
                    className="min-h-[100px] input-focus"
                  />
                </div>
                <div className="md:col-span-2 flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit" className="bg-gradient-primary gap-2">
                    <PalmtreeIcon className="w-4 h-4" />
                    Submeter Pedido
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Vacation History */}
        <div className="bg-card rounded-xl border shadow-card">
          <div className="p-6 border-b">
            <h3 className="font-display font-semibold text-foreground">Histórico de Pedidos</h3>
            <p className="text-sm text-muted-foreground mt-1">Todos os seus pedidos de férias</p>
          </div>
          
          <div className="divide-y">
            {vacationHistory.map((item) => {
              const status = statusConfig[item.status as keyof typeof statusConfig];
              return (
                <div 
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-muted/30 transition-colors gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
                      <PalmtreeIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {item.startDate} - {item.endDate}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.type} • {item.days} {item.days === 1 ? "dia" : "dias"}
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
              );
            })}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
