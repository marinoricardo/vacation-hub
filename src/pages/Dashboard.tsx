import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { UpcomingVacations } from "@/components/dashboard/UpcomingVacations";
import { MiniCalendar } from "@/components/dashboard/MiniCalendar";
import { TeamAvailability } from "@/components/dashboard/TeamAvailability";
import { PalmtreeIcon, CalendarCheck, Clock, CalendarDays } from "lucide-react";

// Charts
import { ChartContainer, ChartTooltipContent, ChartLegend } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

export default function Dashboard() {
  return (
    <AppLayout>
      <AppHeader 
        title="Dashboard" 
        subtitle="Bem-vinda de volta, Maria" 
      />
      
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          <StatCard
            title="Dias Disponíveis"
            value="18"
            subtitle="de 22 dias anuais"
            icon={PalmtreeIcon}
            variant="primary"
          />
          <StatCard
            title="Dias Usados"
            value="4"
            subtitle="em 2025"
            icon={CalendarCheck}
            variant="success"
          />
          <StatCard
            title="Pedidos Pendentes"
            value="3"
            subtitle="aguardam aprovação"
            icon={Clock}
            variant="pending"
          />
          <StatCard
            title="Próximas Férias"
            value="15 Jan"
            subtitle="8 dias marcados"
            icon={CalendarDays}
            variant="default"
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Usage Chart + Upcoming Vacations - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border p-6 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-semibold text-foreground">Utilização de Férias (12 meses)</h3>
                  <p className="text-sm text-muted-foreground">Dias usados vs dias disponíveis</p>
                </div>
                <div className="text-sm text-muted-foreground">Últimos 12 meses</div>
              </div>

              <ChartContainer
                config={{ used: { label: "Dias Usados", color: "#7c3aed" }, available: { label: "Dias Disponíveis", color: "#06b6d4" } }}
                className="h-56"
              >
                <AreaChart
                  data={[
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
                  ]}
                  margin={{ top: 6, right: 6, left: -12, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="usedGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-used)" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="var(--color-used)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="availGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-available)" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="var(--color-available)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} width={48} />
                  <CartesianGrid strokeDasharray="3 3" opacity={0.6} />
                  <Tooltip content={<ChartTooltipContent formatter={(v:number) => `${v} dias`} />} />

                  <Area type="monotone" dataKey="available" stroke="var(--color-available)" fill="url(#availGrad)" strokeWidth={2} />
                  <Area type="monotone" dataKey="used" stroke="var(--color-used)" fill="url(#usedGrad)" strokeWidth={2} />
                </AreaChart>
              </ChartContainer>

              <div className="mt-4 flex items-center gap-4 justify-end">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-3 h-3 rounded-full bg-[#7c3aed] block" /> Dias Usados
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-3 h-3 rounded-full bg-[#06b6d4] block" /> Dias Disponíveis
                </div>
              </div>
            </div>

            <UpcomingVacations />
          </div>
          
          {/* Right Column - small bar chart, Calendar & Team */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl border p-4 shadow-card">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">Pedidos por Mês</h4>
                <span className="text-xs text-muted-foreground">Últimos 6 meses</span>
              </div>
              <ChartContainer config={{ requests: { label: "Pedidos", color: "#f97316" } }} className="h-36">
                <BarChart data={[{ m: "Set", requests: 8 },{ m: "Out", requests: 12 },{ m: "Nov", requests: 9 },{ m: "Dez", requests: 6 },{ m: "Jan", requests: 14 },{ m: "Fev", requests: 11 }]} margin={{ top: 0, right: 6, left: -10, bottom: 0 }}>
                  <XAxis dataKey="m" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} width={36} />
                  <Tooltip content={<ChartTooltipContent formatter={(v:number) => `${v}`} />} />
                  <Bar dataKey="requests" fill="var(--color-requests)" radius={[6,6,0,0]} />
                </BarChart>
              </ChartContainer>
            </div>

            <MiniCalendar />
            <TeamAvailability />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
