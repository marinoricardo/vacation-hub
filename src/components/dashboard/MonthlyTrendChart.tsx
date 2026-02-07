import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { month: "Mar", used: 12, available: 20 },
  { month: "Abr", used: 14, available: 18 },
  { month: "Mai", used: 10, available: 22 },
  { month: "Jun", used: 8, available: 24 },
  { month: "Jul", used: 16, available: 16 },
  { month: "Ago", used: 18, available: 14 },
  { month: "Set", used: 20, available: 12 },
  { month: "Out", used: 15, available: 17 },
  { month: "Nov", used: 11, available: 21 },
  { month: "Dez", used: 9, available: 23 },
  { month: "Jan", used: 6, available: 26 },
  { month: "Fev", used: 4, available: 28 },
];

export function MonthlyTrendChart() {
  return (
    <div className="bg-card rounded-xl border p-6 shadow-card">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display font-semibold text-foreground">Tendência de Utilização</h3>
        <span className="text-xs text-muted-foreground">12 meses</span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">Dias usados vs dias disponíveis por mês</p>

      <ChartContainer
        config={{
          used: { label: "Dias Usados", color: "hsl(var(--primary))" },
          available: { label: "Dias Disponíveis", color: "hsl(var(--success))" },
        }}
        className="h-56"
      >
        <AreaChart data={data} margin={{ top: 6, right: 6, left: -12, bottom: 0 }}>
          <defs>
            <linearGradient id="usedGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-used)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--color-used)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="availGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-available)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--color-available)" stopOpacity="0" />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" opacity={0.3} vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
          <YAxis axisLine={false} tickLine={false} width={40} fontSize={12} />
          <Tooltip content={<ChartTooltipContent formatter={(v: number) => `${v} dias`} />} />

          <Area
            type="monotone"
            dataKey="available"
            stroke="var(--color-available)"
            fill="url(#availGrad)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="used"
            stroke="var(--color-used)"
            fill="url(#usedGrad)"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>

      <div className="mt-4 flex items-center gap-4 justify-end text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary block" /> Usados
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-success block" /> Disponíveis
        </span>
      </div>
    </div>
  );
}
