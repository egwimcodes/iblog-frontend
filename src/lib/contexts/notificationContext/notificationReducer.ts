import { NotificationState, NotificationAction } from "../../types/notification";

export const initialState: NotificationState = {
  notifications: [],
};

export function notificationReducer(
  state: NotificationState,
  action: NotificationAction
): NotificationState {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        notifications: [...state.notifications, action.payload],
      };

    case "REMOVE_NOTIFICATION":
      return {
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };

    case "CLEAR_ALL_NOTIFICATIONS":
      return {
        notifications: [],
      };

    default:
      return state;
  }
}
