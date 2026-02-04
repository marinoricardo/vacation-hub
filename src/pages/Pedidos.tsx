import { useState, useMemo } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Clock, MessageSquare, ChevronDown, ChevronUp, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const initialPendingRequests = [
  {
    id: 1,
    name: "Pedro Santos",
    initials: "PS",
    department: "Design",
    dates: "25 Jan - 02 Fev 2025",
    days: 9,
    type: "Férias",
    requestedAt: "há 2 dias",
    notes: "Viagem de família planeada há meses."
  },
  {
    id: 2,
    name: "Sofia Martins",
    initials: "SM",
    department: "Vendas",
    dates: "10 - 14 Fev 2025",
    days: 5,
    type: "Férias",
    requestedAt: "há 3 dias",
    notes: ""
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    initials: "CO",
    department: "Desenvolvimento",
    dates: "17 Fev 2025",
    days: 1,
    type: "Dia pessoal",
    requestedAt: "há 5 dias",
    notes: "Assunto familiar."
  },
];

const initialProcessedRequests = [
  {
    id: 4,
    name: "João Silva",
    initials: "JS",
    department: "Desenvolvimento",
    dates: "15 - 22 Jan 2025",
    days: 8,
    type: "Férias",
    status: "approved",
    processedAt: "06 Jan 2025"
  },
  {
    id: 5,
    name: "Ana Rodrigues",
    initials: "AR",
    department: "Marketing",
    dates: "20 - 25 Jan 2025",
    days: 6,
    type: "Férias",
    status: "approved",
    processedAt: "05 Jan 2025"
  },
  {
    id: 6,
    name: "Miguel Ferreira",
    initials: "MF",
    department: "Suporte",
    dates: "05 Jan 2025",
    days: 1,
    type: "Dia pessoal",
    status: "rejected",
    processedAt: "03 Jan 2025"
  },
];

type SortField = "name" | "days" | "date";
type SortOrder = "asc" | "desc";

export default function Pedidos() {
  const [pendingRequests, setPendingRequests] = useState(initialPendingRequests);
  const [processedRequests, setProcessedRequests] = useState(initialProcessedRequests);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [filterDepartment, setFilterDepartment] = useState<string | null>(null);
  
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    type: "approve" | "reject";
    requestId: number | null;
  }>({ open: false, type: "approve", requestId: null });

  const departments = useMemo(() => {
    const allDepts = [...pendingRequests, ...processedRequests].map(r => r.department);
    return [...new Set(allDepts)];
  }, [pendingRequests, processedRequests]);

  const filteredPending = useMemo(() => {
    let filtered = pendingRequests;
    
    if (searchQuery) {
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.department.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (filterDepartment) {
      filtered = filtered.filter(r => r.department === filterDepartment);
    }
    
    return filtered.sort((a, b) => {
      if (sortField === "name") {
        return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      if (sortField === "days") {
        return sortOrder === "asc" ? a.days - b.days : b.days - a.days;
      }
      return 0; // Default sort by date (keep original order)
    });
  }, [pendingRequests, searchQuery, filterDepartment, sortField, sortOrder]);

  const filteredProcessed = useMemo(() => {
    let filtered = processedRequests;
    
    if (searchQuery) {
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.department.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (filterDepartment) {
      filtered = filtered.filter(r => r.department === filterDepartment);
    }
    
    return filtered;
  }, [processedRequests, searchQuery, filterDepartment]);

  const handleApprove = () => {
    if (confirmDialog.requestId) {
      const request = pendingRequests.find(r => r.id === confirmDialog.requestId);
      if (request) {
        setPendingRequests(prev => prev.filter(r => r.id !== confirmDialog.requestId));
        setProcessedRequests(prev => [{
          ...request,
          status: "approved",
          processedAt: new Date().toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' })
        }, ...prev]);
        toast.success(`Pedido de ${request.name} aprovado!`);
      }
    }
    setConfirmDialog({ open: false, type: "approve", requestId: null });
  };

  const handleReject = () => {
    if (confirmDialog.requestId) {
      const request = pendingRequests.find(r => r.id === confirmDialog.requestId);
      if (request) {
        setPendingRequests(prev => prev.filter(r => r.id !== confirmDialog.requestId));
        setProcessedRequests(prev => [{
          ...request,
          status: "rejected",
          processedAt: new Date().toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' })
        }, ...prev]);
        toast.success(`Pedido de ${request.name} rejeitado.`);
      }
    }
    setConfirmDialog({ open: false, type: "reject", requestId: null });
  };

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortOrder === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />;
  };

  return (
    <AppLayout>
      <AppHeader 
        title="Gestão de Pedidos" 
        subtitle="Aprovar e gerir pedidos de férias" 
      />
      
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-pending-light border border-pending/20 rounded-xl p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-pending/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-pending" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">{pendingRequests.length}</p>
              <p className="text-sm text-muted-foreground">Pendentes</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-success-light border border-success/20 rounded-xl p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
              <Check className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">
                {processedRequests.filter(r => r.status === "approved").length}
              </p>
              <p className="text-sm text-muted-foreground">Aprovados este mês</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-destructive-light border border-destructive/20 rounded-xl p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <X className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">
                {processedRequests.filter(r => r.status === "rejected").length}
              </p>
              <p className="text-sm text-muted-foreground">Rejeitados este mês</p>
            </div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar por nome ou departamento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  {filterDepartment || "Departamento"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setFilterDepartment(null)}>
                  Todos
                </DropdownMenuItem>
                {departments.map((dept) => (
                  <DropdownMenuItem key={dept} onClick={() => setFilterDepartment(dept)}>
                    {dept}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  Ordenar
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => toggleSort("name")} className="gap-2">
                  Nome <SortIcon field="name" />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleSort("days")} className="gap-2">
                  Dias <SortIcon field="days" />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleSort("date")} className="gap-2">
                  Data <SortIcon field="date" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="pending" className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <Clock className="w-4 h-4" />
              Pendentes
              <span className="ml-1 px-2 py-0.5 bg-pending/10 text-pending rounded-full text-xs font-semibold">
                {filteredPending.length}
              </span>
            </TabsTrigger>
            <TabsTrigger value="processed" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Processados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            <AnimatePresence>
              {filteredPending.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 text-muted-foreground"
                >
                  {searchQuery || filterDepartment ? "Nenhum pedido encontrado com esses filtros." : "Não há pedidos pendentes."}
                </motion.div>
              ) : (
                filteredPending.map((request, index) => (
                  <motion.div 
                    key={request.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card rounded-xl border shadow-card overflow-hidden hover:shadow-card-hover transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        {/* Employee Info */}
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-primary text-white font-medium">
                              {request.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-foreground">{request.name}</p>
                            <p className="text-sm text-muted-foreground">{request.department}</p>
                          </div>
                        </div>

                        {/* Request Details */}
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                          <div>
                            <p className="text-muted-foreground">Período</p>
                            <p className="font-medium text-foreground">{request.dates}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Duração</p>
                            <p className="font-medium text-foreground">{request.days} dias</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Tipo</p>
                            <p className="font-medium text-foreground">{request.type}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Pedido</p>
                            <p className="font-medium text-foreground">{request.requestedAt}</p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="gap-2">
                            <MessageSquare className="w-4 h-4" />
                            <span className="hidden sm:inline">Comentar</span>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/30"
                            onClick={() => setConfirmDialog({ open: true, type: "reject", requestId: request.id })}
                          >
                            <X className="w-4 h-4" />
                            <span className="hidden sm:inline ml-1">Rejeitar</span>
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-success hover:bg-success/90 text-success-foreground gap-1"
                            onClick={() => setConfirmDialog({ open: true, type: "approve", requestId: request.id })}
                          >
                            <Check className="w-4 h-4" />
                            <span className="hidden sm:inline">Aprovar</span>
                          </Button>
                        </div>
                      </div>

                      {/* Notes */}
                      {request.notes && (
                        <div className="mt-4 p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Nota:</span> {request.notes}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="processed" className="space-y-4">
            <AnimatePresence>
              {filteredProcessed.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 text-muted-foreground"
                >
                  Nenhum pedido processado encontrado.
                </motion.div>
              ) : (
                filteredProcessed.map((request, index) => (
                  <motion.div 
                    key={request.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card rounded-xl border shadow-card p-6 hover:shadow-card-hover transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-primary text-white text-sm font-medium">
                            {request.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{request.name}</p>
                          <p className="text-sm text-muted-foreground">{request.department}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-sm">
                        <div>
                          <p className="font-medium text-foreground">{request.dates}</p>
                          <p className="text-muted-foreground">{request.days} dias • {request.type}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{request.processedAt}</span>
                        <span className={cn(
                          "flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium",
                          request.status === "approved" && "bg-success-light text-success",
                          request.status === "rejected" && "bg-destructive-light text-destructive"
                        )}>
                          {request.status === "approved" ? (
                            <><Check className="w-3.5 h-3.5" /> Aprovado</>
                          ) : (
                            <><X className="w-3.5 h-3.5" /> Rejeitado</>
                          )}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
            
            <Button variant="outline" className="w-full gap-2">
              Carregar mais
              <ChevronDown className="w-4 h-4" />
            </Button>
          </TabsContent>
        </Tabs>
      </div>

      <ConfirmDialog
        open={confirmDialog.open && confirmDialog.type === "approve"}
        onOpenChange={(open) => setConfirmDialog({ ...confirmDialog, open })}
        title="Aprovar pedido?"
        description="Tens a certeza de que queres aprovar este pedido de férias?"
        confirmText="Sim, aprovar"
        cancelText="Cancelar"
        onConfirm={handleApprove}
      />

      <ConfirmDialog
        open={confirmDialog.open && confirmDialog.type === "reject"}
        onOpenChange={(open) => setConfirmDialog({ ...confirmDialog, open })}
        title="Rejeitar pedido?"
        description="Tens a certeza de que queres rejeitar este pedido de férias?"
        confirmText="Sim, rejeitar"
        cancelText="Cancelar"
        onConfirm={handleReject}
        variant="destructive"
      />
    </AppLayout>
  );
}
