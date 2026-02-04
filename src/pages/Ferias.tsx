import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { Button } from "@/components/ui/button";
import { PalmtreeIcon, Clock, CheckCircle2, XCircle, CalendarDays, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { VacationRequestDialog } from "@/components/vacation/VacationRequestDialog";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const initialVacationHistory = [
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
  const [vacationHistory, setVacationHistory] = useState(initialVacationHistory);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  const handleDelete = () => {
    if (itemToDelete !== null) {
      setVacationHistory((prev) => prev.filter((item) => item.id !== itemToDelete));
      toast.success("Pedido cancelado com sucesso");
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const openDeleteDialog = (id: number) => {
    setItemToDelete(id);
    setDeleteDialogOpen(true);
  };

  return (
    <AppLayout>
      <AppHeader 
        title="Minhas Férias" 
        subtitle="Gerir pedidos e histórico" 
      />
      
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-primary text-white rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white/20">
                <PalmtreeIcon className="w-5 h-5" />
              </div>
              <span className="text-white/80 font-medium">Dias Disponíveis</span>
            </div>
            <p className="text-4xl font-display font-bold">18</p>
            <p className="text-white/60 text-sm mt-1">de 22 dias anuais</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-card rounded-xl border shadow-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-success/10">
                <CalendarDays className="w-5 h-5 text-success" />
              </div>
              <span className="text-muted-foreground font-medium">Dias Usados</span>
            </div>
            <p className="text-4xl font-display font-bold text-foreground">4</p>
            <p className="text-muted-foreground text-sm mt-1">em 2025</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-card rounded-xl border shadow-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-pending/10">
                <Clock className="w-5 h-5 text-pending" />
              </div>
              <span className="text-muted-foreground font-medium">Pendentes</span>
            </div>
            <p className="text-4xl font-display font-bold text-foreground">2</p>
            <p className="text-muted-foreground text-sm mt-1">dias a aguardar</p>
          </motion.div>
        </div>

        {/* New Request Section - Now with Dialog */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-card rounded-xl border shadow-card overflow-hidden"
        >
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <PalmtreeIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Novo Pedido de Férias</h3>
                <p className="text-sm text-muted-foreground">Submeter um novo pedido</p>
              </div>
            </div>
            <VacationRequestDialog 
              trigger={
                <Button className="bg-gradient-primary gap-2">
                  <PalmtreeIcon className="w-4 h-4" />
                  Pedir Férias
                </Button>
              }
            />
          </div>
        </motion.div>

        {/* Vacation History */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-card rounded-xl border shadow-card"
        >
          <div className="p-6 border-b">
            <h3 className="font-display font-semibold text-foreground">Histórico de Pedidos</h3>
            <p className="text-sm text-muted-foreground mt-1">Todos os seus pedidos de férias</p>
          </div>
          
          <div className="divide-y">
            <AnimatePresence>
              {vacationHistory.map((item, index) => {
                const status = statusConfig[item.status as keyof typeof statusConfig];
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-muted/30 transition-colors gap-4 group"
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
                    
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium",
                        status.className
                      )}>
                        <status.icon className="w-4 h-4" />
                        {status.label}
                      </div>
                      
                      {item.status === "pending" && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => openDeleteDialog(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title="Cancelar pedido?"
        description="Tens a certeza de que queres cancelar este pedido de férias? Esta ação não pode ser revertida."
        confirmText="Sim, cancelar"
        cancelText="Não, manter"
        onConfirm={handleDelete}
        variant="destructive"
      />
    </AppLayout>
  );
}
