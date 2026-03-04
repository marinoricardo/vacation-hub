import { api } from "@/lib/api";

export interface Notification {
  id: string;
  type: "approval" | "rejection" | "reminder" | "info";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export const notificationService = {
  getAll: () =>
    api.get<Notification[]>("/notifications"),

  markAsRead: (id: string) =>
    api.patch<Notification>(`/notifications/${id}/read`, {}),

  markAllAsRead: () =>
    api.patch<{ message: string }>("/notifications/read-all", {}),

  getUnreadCount: () =>
    api.get<{ count: number }>("/notifications/unread-count"),
};
