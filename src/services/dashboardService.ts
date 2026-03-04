import { api } from "@/lib/api";

export interface DashboardStats {
  availableDays: number;
  totalDays: number;
  usedDays: number;
  pendingRequests: number;
  nextVacationDate?: string;
  nextVacationDays?: number;
}

export interface MonthlyTrend {
  month: string;
  used: number;
}

export interface UpcomingVacation {
  id: string;
  userName: string;
  userInitials: string;
  department: string;
  startDate: string;
  endDate: string;
  days: number;
}

export const dashboardService = {
  getStats: () =>
    api.get<DashboardStats>("/dashboard/stats"),

  getMonthlyTrend: (year?: number) =>
    api.get<MonthlyTrend[]>(`/dashboard/trends${year ? `?year=${year}` : ""}`),

  getUpcomingVacations: () =>
    api.get<UpcomingVacation[]>("/dashboard/upcoming"),

  getTeamAvailability: () =>
    api.get<{ available: number; onVacation: number; absent: number }>("/dashboard/availability"),
};
