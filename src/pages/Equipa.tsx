import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus, Mail, Phone, MoreVertical, Filter, PalmtreeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const team = [
  { 
    id: 1, 
    name: "João Silva", 
    initials: "JS", 
    email: "joao.silva@empresa.com",
    phone: "+351 912 345 678",
    role: "Desenvolvedor Senior",
    department: "Desenvolvimento",
    daysAvailable: 18,
    daysTotal: 22,
    status: "vacation"
  },
  { 
    id: 2, 
    name: "Ana Rodrigues", 
    initials: "AR", 
    email: "ana.rodrigues@empresa.com",
    phone: "+351 923 456 789",
    role: "Designer UX",
    department: "Design",
    daysAvailable: 15,
    daysTotal: 22,
    status: "vacation"
  },
  { 
    id: 3, 
    name: "Pedro Santos", 
    initials: "PS", 
    email: "pedro.santos@empresa.com",
    phone: "+351 934 567 890",
    role: "Designer UI",
    department: "Design",
    daysAvailable: 20,
    daysTotal: 22,
    status: "available"
  },
  { 
    id: 4, 
    name: "Marta Fernandes", 
    initials: "MF", 
    email: "marta.fernandes@empresa.com",
    phone: "+351 945 678 901",
    role: "Gestora de RH",
    department: "Recursos Humanos",
    daysAvailable: 12,
    daysTotal: 22,
    status: "available"
  },
  { 
    id: 5, 
    name: "Carlos Oliveira", 
    initials: "CO", 
    email: "carlos.oliveira@empresa.com",
    phone: "+351 956 789 012",
    role: "Desenvolvedor Full Stack",
    department: "Desenvolvimento",
    daysAvailable: 22,
    daysTotal: 22,
    status: "available"
  },
  { 
    id: 6, 
    name: "Sofia Martins", 
    initials: "SM", 
    email: "sofia.martins@empresa.com",
    phone: "+351 967 890 123",
    role: "Account Manager",
    department: "Vendas",
    daysAvailable: 8,
    daysTotal: 22,
    status: "available"
  },
];

const statusConfig = {
  available: { label: "Disponível", className: "bg-success text-success-foreground" },
  vacation: { label: "De férias", className: "bg-primary text-primary-foreground" },
  away: { label: "Ausente", className: "bg-warning text-warning-foreground" },
};

export default function Equipa() {
  return (
    <AppLayout>
      <AppHeader 
        title="Equipa" 
        subtitle="Gerir colaboradores" 
      />
      
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Pesquisar colaboradores..." 
              className="pl-9 bg-card border-border/50"
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtrar
            </Button>
            <Button className="bg-gradient-primary gap-2">
              <Plus className="w-4 h-4" />
              Adicionar
            </Button>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl border shadow-card p-4 text-center">
            <p className="text-3xl font-display font-bold text-foreground">{team.length}</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </div>
          <div className="bg-card rounded-xl border shadow-card p-4 text-center">
            <p className="text-3xl font-display font-bold text-success">
              {team.filter(t => t.status === "available").length}
            </p>
            <p className="text-sm text-muted-foreground">Disponíveis</p>
          </div>
          <div className="bg-card rounded-xl border shadow-card p-4 text-center">
            <p className="text-3xl font-display font-bold text-primary">
              {team.filter(t => t.status === "vacation").length}
            </p>
            <p className="text-sm text-muted-foreground">De férias</p>
          </div>
          <div className="bg-card rounded-xl border shadow-card p-4 text-center">
            <p className="text-3xl font-display font-bold text-warning">
              {team.filter(t => t.status === "away").length}
            </p>
            <p className="text-sm text-muted-foreground">Ausentes</p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {team.map((member) => {
            const status = statusConfig[member.status as keyof typeof statusConfig];
            const daysPercentage = (member.daysAvailable / member.daysTotal) * 100;
            
            return (
              <div 
                key={member.id}
                className="bg-card rounded-xl border shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-gradient-primary text-white font-medium">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className={cn(
                          "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card",
                          member.status === "available" && "bg-success",
                          member.status === "vacation" && "bg-primary",
                          member.status === "away" && "bg-warning"
                        )} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <button className="p-1.5 rounded-lg hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Status Badge */}
                  <span className={cn(
                    "inline-flex px-2.5 py-1 rounded-full text-xs font-medium mb-4",
                    status.className
                  )}>
                    {status.label}
                  </span>

                  {/* Department */}
                  <div className="text-sm text-muted-foreground mb-4">
                    {member.department}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  {/* Vacation Balance */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <PalmtreeIcon className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Dias disponíveis</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {member.daysAvailable}/{member.daysTotal}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all"
                        style={{ width: `${daysPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
