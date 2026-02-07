import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { m: "Set", approved: 6, pending: 1, rejected: 1 },
  { m: "Out", approved: 9, pending: 2, rejected: 1 },
  { m: "Nov", approved: 7, pending: 1, rejected: 1 },
  { m: "Dez", approved: 4, pending: 1, rejected: 1 },
  { m: "Jan", approved: 10, pending: 3, rejected: 1 },
  { m: "Fev", approved: 7, pending: 3, rejected: 1 },
];

export function RequestsChart() {
  return (
    <div className="bg-card rounded-xl border p-5 shadow-card">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-display font-semibold text-foreground">Pedidos por Mês</h4>
        <span className="text-xs text-muted-foreground">6 meses</span>
      </div>
      <p className="text-xs text-muted-foreground mb-3">Aprovados, pendentes e rejeitados</p>

      <ChartContainer
        config={{
          approved: { label: "Aprovados", color: "hsl(var(--success))" },
          pending: { label: "Pendentes", color: "hsl(var(--warning))" },
          rejected: { label: "Rejeitados", color: "hsl(var(--destructive))" },
        }}
        className="h-40"
      >
        <BarChart data={data} margin={{ top: 0, right: 4, left: -14, bottom: 0 }}>
          <XAxis dataKey="m" axisLine={false} tickLine={false} fontSize={11} />
          <YAxis axisLine={false} tickLine={false} width={32} fontSize={11} />
          <Tooltip content={<ChartTooltipContent formatter={(v: number) => `${v}`} />} />
          <Bar dataKey="approved" stackId="a" fill="var(--color-approved)" radius={[0, 0, 0, 0]} />
          <Bar dataKey="pending" stackId="a" fill="var(--color-pending)" radius={[0, 0, 0, 0]} />
          <Bar dataKey="rejected" stackId="a" fill="var(--color-rejected)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ChartContainer>

      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-sm bg-success block" /> Aprovados
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-sm bg-warning block" /> Pendentes
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-sm bg-destructive block" /> Rejeitados
        </span>
      </div>
    </div>
  );
}
