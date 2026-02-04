import { useState } from "react";
import { format, differenceInDays, addDays } from "date-fns";
import { pt } from "date-fns/locale";
import { Calendar as CalendarIcon, PalmtreeIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface VacationRequestDialogProps {
  trigger?: React.ReactNode;
}

export function VacationRequestDialog({ trigger }: VacationRequestDialogProps) {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [type, setType] = useState<string>("vacation");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculatedDays =
    startDate && endDate ? differenceInDays(endDate, startDate) + 1 : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      toast.error("Seleciona as datas de início e fim");
      return;
    }

    if (endDate < startDate) {
      toast.error("A data de fim deve ser posterior à data de início");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setOpen(false);

    toast.success("Pedido de férias submetido!", {
      description: `${calculatedDays} dia(s) de ${format(startDate, "d MMM", { locale: pt })} a ${format(endDate, "d MMM yyyy", { locale: pt })}`,
    });

    // Reset form
    setStartDate(undefined);
    setEndDate(undefined);
    setType("vacation");
    setNotes("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-gradient-primary hover:opacity-90 gap-2 shadow-md">
            <PalmtreeIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Novo Pedido</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <PalmtreeIcon className="w-5 h-5 text-primary" />
            </div>
            Novo Pedido de Férias
          </DialogTitle>
          <DialogDescription>
            Preenche os detalhes do teu pedido de ausência.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Start Date */}
            <div className="space-y-2">
              <Label>Data de início</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-11",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? (
                      format(startDate, "d MMM yyyy", { locale: pt })
                    ) : (
                      <span>Selecionar</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => {
                      setStartDate(date);
                      if (date && (!endDate || endDate < date)) {
                        setEndDate(date);
                      }
                    }}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* End Date */}
            <div className="space-y-2">
              <Label>Data de fim</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-11",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? (
                      format(endDate, "d MMM yyyy", { locale: pt })
                    ) : (
                      <span>Selecionar</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    disabled={(date) =>
                      date < (startDate || new Date()) ||
                      date < new Date()
                    }
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Type */}
          <div className="space-y-2">
            <Label>Tipo de ausência</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Selecionar tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vacation">🌴 Férias</SelectItem>
                <SelectItem value="personal">👤 Dia pessoal</SelectItem>
                <SelectItem value="medical">🏥 Consulta médica</SelectItem>
                <SelectItem value="family">👨‍👩‍👧 Assunto familiar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Calculated Days */}
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <span className="text-sm text-muted-foreground">Dias calculados</span>
            <span className="text-lg font-bold text-foreground">
              {calculatedDays > 0 ? (
                <>
                  {calculatedDays} {calculatedDays === 1 ? "dia" : "dias"}
                </>
              ) : (
                <span className="text-muted-foreground font-normal">—</span>
              )}
            </span>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label>Observações (opcional)</Label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Adicione notas ou contexto ao seu pedido..."
              className="min-h-[80px] resize-none"
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-gradient-primary gap-2"
              disabled={isSubmitting || !startDate || !endDate}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  A submeter...
                </>
              ) : (
                <>
                  <PalmtreeIcon className="w-4 h-4" />
                  Submeter Pedido
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
