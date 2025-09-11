'use client';

import React, { createContext, ReactNode, useReducer } from 'react';
import { notificationReducer, initialState } from './notificationReducer';
import { Notification, NotificationState, NotificationAction } from '../../types/notification';

interface NotificationContextType {
    state: NotificationState;
    dispatch: React.Dispatch<NotificationAction>;
    addNotification: (notification: Omit<Notification, 'id'>) => void;
    removeNotification: (id: string) => void;
    clearAllNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(notificationReducer, initialState);

    const addNotification = (notification: Omit<Notification, 'id'>) => {
        const id = Math.random().toString(36).substr(2, 9);
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: { ...notification, id },
        });

        // Auto-remove if duration is set
        if (notification.duration) {
            setTimeout(() => {
                removeNotification(id);
            }, notification.duration);
        }
    };

    const removeNotification = (id: string) => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
    };

    const clearAllNotifications = () => {
        dispatch({ type: 'CLEAR_ALL_NOTIFICATIONS' });
    };

    const value: NotificationContextType = {
        state,
        dispatch,
        addNotification,
        removeNotification,
        clearAllNotifications,
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};

export { NotificationContext };
export type { NotificationContextType };