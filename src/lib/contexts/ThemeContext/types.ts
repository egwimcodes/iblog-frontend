export type Theme = "light" | "dark" | "system";

export interface ThemeState {
  theme: Theme;
  resolvedTheme: "light" | "dark"; // Actual theme after resolving 'system'
}

export type ThemeAction =
  | { type: "SET_THEME"; payload: Theme }
  | { type: "SET_RESOLVED_THEME"; payload: "light" | "dark" };
