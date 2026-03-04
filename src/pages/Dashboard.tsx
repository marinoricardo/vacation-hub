import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { UpcomingVacations } from "@/components/dashboard/UpcomingVacations";
import { MiniCalendar } from "@/components/dashboard/MiniCalendar";
import { TeamAvailability } from "@/components/dashboard/TeamAvailability";
import { VacationBalanceChart } from "@/components/dashboard/VacationBalanceChart";
import { MonthlyTrendChart } from "@/components/dashboard/MonthlyTrendChart";
import { Palmtree, CheckCircle, Clock, CalendarDays } from "lucide-react";

export default function Dashboard() {
  return (
    <AppLayout>
      <AppHeader 
        title="Dashboard" 
        subtitle="Bem-vinda de volta, Maria" 
      />
      
      <PageTransition>
      <div className="p-4 md:p-6 space-y-6">
        {/* Stat Cards - uniform style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Dias Disponíveis"
            value="18"
            subtitle="de 22 dias anuais"
            icon={Palmtree}
          />
          <StatCard
            title="Dias Usados"
            value="4"
            subtitle="em 2025"
            icon={CheckCircle}
          />
          <StatCard
            title="Pedidos Pendentes"
            value="3"
            subtitle="aguardam aprovação"
            icon={Clock}
          />
          <StatCard
            title="Próximas Férias"
            value="15 Jan"
            subtitle="8 dias marcados"
            icon={CalendarDays}
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <VacationBalanceChart />
            <MonthlyTrendChart />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <MiniCalendar />
            <TeamAvailability />
          </div>
        </div>

        <UpcomingVacations />
      </div>
      </PageTransition>
    </AppLayout>
  );
}
