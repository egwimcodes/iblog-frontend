'use client';

import React, { createContext, ReactNode, useReducer, useEffect } from 'react';
import { themeReducer, initialState } from './themeReducer';
import { Theme, ThemeState, ThemeAction } from '../../types/theme';

interface ThemeContextType {
    state: ThemeState;
    dispatch: React.Dispatch<ThemeAction>;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (state.theme === 'system') {
                dispatch({ type: 'SET_RESOLVED_THEME', payload: e.matches ? 'dark' : 'light' });
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [state.resolvedTheme, state.theme]);

    // Update resolved theme when theme changes
    useEffect(() => {
        if (state.theme === 'system') {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            dispatch({ type: 'SET_RESOLVED_THEME', payload: isDark ? 'dark' : 'light' });
        } else {
            dispatch({ type: 'SET_RESOLVED_THEME', payload: state.theme });
        }
    }, [state.theme]);

    // Apply theme to document
    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove('light', 'dark');
        root.classList.add(state.resolvedTheme);

        // Save to localStorage
        localStorage.setItem('theme', state.theme);
    }, [
        
        // state.resolvedTheme

    ]);

    const setTheme = (theme: Theme) => {
        dispatch({ type: 'SET_THEME', payload: theme });
    };

    const toggleTheme = () => {
        setTheme(state.resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    const value: ThemeContextType = {
        state,
        dispatch,
        setTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext };
export type { ThemeContextType };