import { api } from "@/lib/api";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  initials: string;
  role: string;
  department: string;
  status: "available" | "on_vacation" | "absent";
  avatar?: string;
  joinedAt: string;
}

export interface AddMemberPayload {
  name: string;
  email: string;
  role: string;
  department: string;
}

export interface DepartmentStats {
  department: string;
  totalMembers: number;
  onVacation: number;
  available: number;
}

export const teamService = {
  getAll: (params?: { department?: string; status?: string }) => {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return api.get<TeamMember[]>(`/team${query ? `?${query}` : ""}`);
  },

  getById: (id: string) =>
    api.get<TeamMember>(`/team/${id}`),

  add: (payload: AddMemberPayload) =>
    api.post<TeamMember>("/team", payload),

  update: (id: string, payload: Partial<AddMemberPayload>) =>
    api.put<TeamMember>(`/team/${id}`, payload),

  remove: (id: string) =>
    api.delete<{ message: string }>(`/team/${id}`),

  getDepartmentStats: () =>
    api.get<DepartmentStats[]>("/team/departments/stats"),
};
