import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { dept: "Dev", used: 45, total: 88 },
  { dept: "Design", used: 22, total: 44 },
  { dept: "Marketing", used: 18, total: 44 },
  { dept: "RH", used: 12, total: 22 },
  { dept: "Vendas", used: 30, total: 66 },
];

export function DepartmentChart() {
  return (
    <div className="bg-card rounded-xl border shadow-card p-6">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display font-semibold text-foreground">Férias por Departamento</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">Dias usados vs total disponível</p>

      <ChartContainer
        config={{
          used: { label: "Usados", color: "hsl(var(--primary))" },
          total: { label: "Total", color: "hsl(var(--muted))" },
        }}
        className="h-48"
      >
        <BarChart data={data} margin={{ top: 0, right: 6, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} vertical={false} />
          <XAxis dataKey="dept" axisLine={false} tickLine={false} fontSize={12} />
          <YAxis axisLine={false} tickLine={false} width={40} fontSize={12} />
          <Tooltip content={<ChartTooltipContent formatter={(v: number) => `${v} dias`} />} />
          <Bar dataKey="total" fill="var(--color-total)" radius={[6, 6, 0, 0]} opacity={0.3} />
          <Bar dataKey="used" fill="var(--color-used)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ChartContainer>

      <div className="mt-3 flex items-center gap-4 justify-end text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-primary block" /> Usados
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-muted block" /> Total
        </span>
      </div>
    </div>
  );
}
