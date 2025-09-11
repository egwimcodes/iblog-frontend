export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  duration?: number; // Auto-close after ms (optional)
}

export interface NotificationState {
  notifications: Notification[];
}

export type NotificationAction =
  | { type: "ADD_NOTIFICATION"; payload: Notification }
  | { type: "REMOVE_NOTIFICATION"; payload: string } // id
  | { type: "CLEAR_ALL_NOTIFICATIONS" };
