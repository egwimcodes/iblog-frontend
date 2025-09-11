'use client';

import { UserProfile } from '@/lib/types/account';
import React, { createContext, ReactNode, useReducer } from 'react';
import { initialState, userReducer } from './userReducer';
import { UserAction, UserState } from './types';

interface UserContextType {
    state: UserState;
    dispatch: React.Dispatch<UserAction>;
    login: (data: { user: UserProfile; access: string; refresh: string }) => void;
    logout: () => void;
    updateUser: (updates: Partial<UserProfile>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    // Action creators
    const login = (data: { user: UserProfile; access: string; refresh: string }) => {
        dispatch({
            type: 'SET_USER',
            payload: data,
        });
        dispatch({
            type: 'SET_USER',
            payload: data,
        });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
    };

    const updateUser = (updates: Partial<UserProfile>) => {
        dispatch({
            type: 'UPDATE_USER',
            payload: updates
        });
    };

    const value: UserContextType = {
        state,
        dispatch,
        login,
        logout,
        updateUser,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext };
export type { UserContextType };