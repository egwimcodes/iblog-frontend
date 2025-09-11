"use client";

import { useContext } from "react";
import { NotificationContext } from "./NotificationContext";

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
};

export const useNotificationState = () => {
  const { state } = useNotifications();
  return state.notifications;
};
