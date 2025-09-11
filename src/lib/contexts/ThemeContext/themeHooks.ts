"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const useCurrentTheme = () => {
  const { state } = useTheme();
  return state.resolvedTheme;
};

export const useThemePreference = () => {
  const { state } = useTheme();
  return state.theme;
};
