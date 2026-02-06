import { useState, useMemo } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Plus, Mail, Phone, MoreVertical, Filter, PalmtreeIcon, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const team = [
  { 
    id: 1, 
    name: "João Silva", 
    initials: "JS", 
    email: "joao.silva@empresa.com",
    phone: "+258 84 123 4567",
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
    phone: "+258 84 123 4568",
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
    phone: "+258 84 123 4569",
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
    phone: "+258 84 123 4570",
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
    phone: "+258 84 123 4571",
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
    phone: "+258 84 123 4572",
    role: "Account Manager",
    department: "Vendas",
    daysAvailable: 8,
    daysTotal: 22,
    status: "available"
  },
  { 
    id: 7, 
    name: "Ricardo Lopes", 
    initials: "RL", 
    email: "ricardo.lopes@empresa.com",
    phone: "+258 84 123 4573",
    role: "DevOps Engineer",
    department: "Desenvolvimento",
    daysAvailable: 19,
    daysTotal: 22,
    status: "available"
  },
  { 
    id: 8, 
    name: "Beatriz Costa", 
    initials: "BC", 
    email: "beatriz.costa@empresa.com",
    phone: "+258 84 123 4574",
    role: "Product Manager",
    department: "Produto",
    daysAvailable: 14,
    daysTotal: 22,
    status: "away"
  },
];

const statusConfig = {
  available: { label: "Disponível", className: "bg-success text-success-foreground" },
  vacation: { label: "De férias", className: "bg-primary text-primary-foreground" },
  away: { label: "Ausente", className: "bg-warning text-warning-foreground" },
};

type SortField = "name" | "days" | "department";
type SortOrder = "asc" | "desc";

const ITEMS_PER_PAGE = 6;

export default function Equipa() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const departments = useMemo(() => [...new Set(team.map(m => m.department))], []);
  const statuses = ["available", "vacation", "away"];

  const filteredAndSorted = useMemo(() => {
    let result = [...team];
    
    // Search
    if (searchQuery) {
      result = result.filter(m => 
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.department.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by department
    if (filterDepartment) {
      result = result.filter(m => m.department === filterDepartment);
    }
    
    // Filter by status
    if (filterStatus) {
      result = result.filter(m => m.status === filterStatus);
    }
    
    // Sort
    result.sort((a, b) => {
      if (sortField === "name") {
        return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      if (sortField === "days") {
        return sortOrder === "asc" ? a.daysAvailable - b.daysAvailable : b.daysAvailable - a.daysAvailable;
      }
      if (sortField === "department") {
        return sortOrder === "asc" ? a.department.localeCompare(b.department) : b.department.localeCompare(a.department);
      }
      return 0;
    });
    
    return result;
  }, [searchQuery, filterDepartment, filterStatus, sortField, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE);
  const paginatedTeam = filteredAndSorted.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  const handleAddMember = () => {
    toast.info("Funcionalidade de adicionar membro em desenvolvimento");
  };

  const clearFilters = () => {
    setSearchQuery("");
    setFilterDepartment(null);
    setFilterStatus(null);
    setCurrentPage(1);
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortOrder === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />;
  };

  return (
    <AppLayout>
      <AppHeader 
        title="Equipa" 
        subtitle="Gerir colaboradores" 
      />
      <PageTransition>
      <div className="p-4 md:p-6 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Pesquisar colaboradores..." 
              className="pl-9 bg-card border-border/50"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  {filterDepartment || "Departamento"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => { setFilterDepartment(null); setCurrentPage(1); }}>
                  Todos os departamentos
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {departments.map((dept) => (
                  <DropdownMenuItem key={dept} onClick={() => { setFilterDepartment(dept); setCurrentPage(1); }}>
                    {dept}
                    {filterDepartment === dept && <span className="ml-auto">✓</span>}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  {filterStatus ? statusConfig[filterStatus as keyof typeof statusConfig].label : "Estado"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => { setFilterStatus(null); setCurrentPage(1); }}>
                  Todos os estados
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {statuses.map((status) => (
                  <DropdownMenuItem key={status} onClick={() => { setFilterStatus(status); setCurrentPage(1); }}>
                    <span className={cn(
                      "w-2 h-2 rounded-full mr-2",
                      status === "available" && "bg-success",
                      status === "vacation" && "bg-primary",
                      status === "away" && "bg-warning"
                    )} />
                    {statusConfig[status as keyof typeof statusConfig].label}
                    {filterStatus === status && <span className="ml-auto">✓</span>}
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
                  Dias disponíveis <SortIcon field="days" />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleSort("department")} className="gap-2">
                  Departamento <SortIcon field="department" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {(searchQuery || filterDepartment || filterStatus) && (
              <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                Limpar filtros
              </Button>
            )}

            <Button className="bg-gradient-primary gap-2" onClick={handleAddMember}>
              <Plus className="w-4 h-4" />
              Adicionar
            </Button>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-xl border shadow-card p-4 text-center"
          >
            <p className="text-3xl font-display font-bold text-foreground">{team.length}</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl border shadow-card p-4 text-center"
          >
            <p className="text-3xl font-display font-bold text-success">
              {team.filter(t => t.status === "available").length}
            </p>
            <p className="text-sm text-muted-foreground">Disponíveis</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl border shadow-card p-4 text-center"
          >
            <p className="text-3xl font-display font-bold text-primary">
              {team.filter(t => t.status === "vacation").length}
            </p>
            <p className="text-sm text-muted-foreground">De férias</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl border shadow-card p-4 text-center"
          >
            <p className="text-3xl font-display font-bold text-warning">
              {team.filter(t => t.status === "away").length}
            </p>
            <p className="text-sm text-muted-foreground">Ausentes</p>
          </motion.div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          A mostrar {paginatedTeam.length} de {filteredAndSorted.length} colaboradores
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {paginatedTeam.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Nenhum colaborador encontrado com esses filtros.
            </div>
          ) : (
            paginatedTeam.map((member, index) => {
              const status = statusConfig[member.status as keyof typeof statusConfig];
              const daysPercentage = (member.daysAvailable / member.daysTotal) * 100;
              
              return (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
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
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-1.5 rounded-lg hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
                            <MoreVertical className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => toast.info(`Ver perfil de ${member.name}`)}>
                            Ver perfil completo
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast.info(`Editar ${member.name}`)}>
                            Editar colaborador
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="text-destructive"
                            onClick={() => toast.info(`Remover ${member.name}`)}
                          >
                            Remover
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
                        <motion.div 
                          className="h-full bg-gradient-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${daysPercentage}%` }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-gradient-primary" : ""}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
      </PageTransition>
    </AppLayout>
  );
}
