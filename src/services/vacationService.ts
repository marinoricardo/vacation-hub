import { api } from "@/lib/api";

export interface VacationRequest {
  id: string;
  userId: string;
  userName: string;
  userInitials: string;
  department: string;
  startDate: string;
  endDate: string;
  days: number;
  type: "vacation" | "personal" | "medical" | "family";
  status: "pending" | "approved" | "rejected";
  notes?: string;
  rejectionReason?: string;
  createdAt: string;
  processedAt?: string;
  processedBy?: string;
}

export interface CreateVacationPayload {
  startDate: string;
  endDate: string;
  type: string;
  notes?: string;
}

export interface VacationBalance {
  total: number;
  used: number;
  pending: number;
  available: number;
}

export const vacationService = {
  getMyRequests: () =>
    api.get<VacationRequest[]>("/vacations/me"),

  getAll: (params?: { status?: string; department?: string }) => {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return api.get<VacationRequest[]>(`/vacations${query ? `?${query}` : ""}`);
  },

  getById: (id: string) =>
    api.get<VacationRequest>(`/vacations/${id}`),

  create: (payload: CreateVacationPayload) =>
    api.post<VacationRequest>("/vacations", payload),

  approve: (id: string) =>
    api.patch<VacationRequest>(`/vacations/${id}/approve`, {}),

  reject: (id: string, reason: string) =>
    api.patch<VacationRequest>(`/vacations/${id}/reject`, { reason }),

  cancel: (id: string) =>
    api.delete<{ message: string }>(`/vacations/${id}`),

  getBalance: () =>
    api.get<VacationBalance>("/vacations/balance"),
};
