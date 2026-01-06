import { AppLayout } from "@/components/layout/AppLayout";
import { AppHeader } from "@/components/layout/AppHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { UpcomingVacations } from "@/components/dashboard/UpcomingVacations";
import { MiniCalendar } from "@/components/dashboard/MiniCalendar";
import { TeamAvailability } from "@/components/dashboard/TeamAvailability";
import { PalmtreeIcon, CalendarCheck, Clock, CalendarDays } from "lucide-react";

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
          {/* Upcoming Vacations - 2 cols */}
          <div className="lg:col-span-2">
            <UpcomingVacations />
          </div>
          
          {/* Right Column - Calendar & Team */}
          <div className="space-y-6">
            <MiniCalendar />
            <TeamAvailability />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
