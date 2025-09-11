'use client';

import React, { createContext, ReactNode, useReducer } from 'react';
import { LoadingState, LoadingAction } from './types';
import { loadingReducer, initialState } from './loadingReducer';

interface LoadingContextType {
    state: LoadingState;
    dispatch: React.Dispatch<LoadingAction>;
    showLoader: (message?: string) => void;
    hideLoader: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(loadingReducer, initialState);

    const showLoader = (message?: string) => {
        dispatch({
            type: 'SHOW_LOADER',
            payload: { message }
        });
    };

    const hideLoader = () => {
        dispatch({ type: 'HIDE_LOADER' });
    };

    const value: LoadingContextType = {
        state,
        dispatch,
        showLoader,
        hideLoader,
    };

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
};

export { LoadingContext };
export type { LoadingContextType };