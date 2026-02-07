import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { UpcomingVacations } from "@/components/dashboard/UpcomingVacations";
import { MiniCalendar } from "@/components/dashboard/MiniCalendar";
import { TeamAvailability } from "@/components/dashboard/TeamAvailability";
import { VacationBalanceChart } from "@/components/dashboard/VacationBalanceChart";
import { DepartmentChart } from "@/components/dashboard/DepartmentChart";
import { MonthlyTrendChart } from "@/components/dashboard/MonthlyTrendChart";
import { RequestsChart } from "@/components/dashboard/RequestsChart";
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
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          <StatCard
            title="Dias Disponíveis"
            value="18"
            subtitle="de 22 dias anuais"
            icon={Palmtree}
            variant="primary"
          />
          <StatCard
            title="Dias Usados"
            value="4"
            subtitle="em 2025"
            icon={CheckCircle}
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

        {/* Charts Row - Balance + Department */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VacationBalanceChart />
          <DepartmentChart />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Usage Trend + Upcoming Vacations - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <MonthlyTrendChart />
            <UpcomingVacations />
          </div>
          
          {/* Right Column - Requests chart, Calendar & Team */}
          <div className="space-y-6">
            <RequestsChart />
            <MiniCalendar />
            <TeamAvailability />
          </div>
        </div>
      </div>
      </PageTransition>
    </AppLayout>
  );
}
