import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Clock, MessageSquare, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const pendingRequests = [
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

const processedRequests = [
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

export default function Pedidos() {
  return (
    <AppLayout>
      <AppHeader 
        title="Gestão de Pedidos" 
        subtitle="Aprovar e gerir pedidos de férias" 
      />
      
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-pending-light border border-pending/20 rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pending/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-pending" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">{pendingRequests.length}</p>
              <p className="text-sm text-muted-foreground">Pendentes</p>
            </div>
          </div>
          <div className="bg-success-light border border-success/20 rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
              <Check className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">24</p>
              <p className="text-sm text-muted-foreground">Aprovados este mês</p>
            </div>
          </div>
          <div className="bg-destructive-light border border-destructive/20 rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
              <X className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground">Rejeitados este mês</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="pending" className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm">
              <Clock className="w-4 h-4" />
              Pendentes
              <span className="ml-1 px-2 py-0.5 bg-pending/10 text-pending rounded-full text-xs font-semibold">
                {pendingRequests.length}
              </span>
            </TabsTrigger>
            <TabsTrigger value="processed" className="data-[state=active]:bg-card data-[state=active]:shadow-sm">
              Processados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingRequests.map((request) => (
              <div 
                key={request.id}
                className="bg-card rounded-xl border shadow-card overflow-hidden"
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
                      >
                        <X className="w-4 h-4" />
                        <span className="hidden sm:inline ml-1">Rejeitar</span>
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-success hover:bg-success/90 text-success-foreground gap-1"
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
              </div>
            ))}
          </TabsContent>

          <TabsContent value="processed" className="space-y-4">
            {processedRequests.map((request) => (
              <div 
                key={request.id}
                className="bg-card rounded-xl border shadow-card p-6"
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
              </div>
            ))}
            
            <Button variant="outline" className="w-full gap-2">
              Carregar mais
              <ChevronDown className="w-4 h-4" />
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
