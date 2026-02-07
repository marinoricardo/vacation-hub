import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Usados", value: 4, color: "hsl(var(--primary))" },
  { name: "Agendados", value: 8, color: "hsl(var(--pending))" },
  { name: "Disponíveis", value: 10, color: "hsl(var(--muted))" },
];

export function VacationBalanceChart() {
  const total = data.reduce((acc, d) => acc + d.value, 0);

  return (
    <div className="bg-card rounded-xl border shadow-card p-6">
      <h3 className="font-display font-semibold text-foreground mb-1">Saldo de Férias</h3>
      <p className="text-sm text-muted-foreground mb-4">Distribuição de 22 dias anuais</p>

      <div className="flex items-center gap-6">
        <div className="w-36 h-36 relative">
          <ChartContainer
            config={{
              used: { label: "Usados", color: "hsl(var(--primary))" },
              scheduled: { label: "Agendados", color: "hsl(var(--pending))" },
              available: { label: "Disponíveis", color: "hsl(var(--muted))" },
            }}
            className="h-36"
          >
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={62}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltipContent formatter={(v: number) => `${v} dias`} />} />
            </PieChart>
          </ChartContainer>
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-display font-bold text-foreground">{total}</span>
            <span className="text-xs text-muted-foreground">dias</span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full block shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">{item.value} dias</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
