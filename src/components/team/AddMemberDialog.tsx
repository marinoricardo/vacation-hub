import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface AddMemberDialogProps {
  trigger?: React.ReactNode;
}

const departments = [
  "Desenvolvimento",
  "Design",
  "Marketing",
  "Recursos Humanos",
  "Vendas",
  "Produto",
  "Financeiro",
];

export function AddMemberDialog({ trigger }: AddMemberDialogProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen(false);
      toast.success("Colaborador adicionado com sucesso!");
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-gradient-primary gap-2">
            <Plus className="w-4 h-4" />
            Adicionar
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display">Adicionar Colaborador</DialogTitle>
          <DialogDescription>
            Preencha os dados do novo membro da equipa.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Primeiro nome</Label>
              <Input id="firstName" placeholder="João" required className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apelido</Label>
              <Input id="lastName" placeholder="Silva" required className="h-11" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="memberEmail">Email</Label>
            <Input id="memberEmail" type="email" placeholder="joao@empresa.com" required className="h-11" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="memberPhone">Telefone</Label>
            <Input id="memberPhone" type="tel" placeholder="+258 84 000 0000" className="h-11" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="memberRole">Cargo</Label>
            <Input id="memberRole" placeholder="ex: Desenvolvedor Senior" required className="h-11" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="memberDepartment">Departamento</Label>
            <select
              id="memberDepartment"
              required
              className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="">Selecione...</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="memberDays">Dias de férias anuais</Label>
            <Input id="memberDays" type="number" defaultValue="22" min="0" max="60" className="h-11" />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-primary"
              disabled={isLoading}
            >
              {isLoading ? "A adicionar..." : "Adicionar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
