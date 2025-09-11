import { ThemeState, ThemeAction } from "../../types/theme";

export const initialState: ThemeState = {
  theme: "system",
  resolvedTheme:
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : "light",
};

export function themeReducer(
  state: ThemeState,
  action: ThemeAction
): ThemeState {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "SET_RESOLVED_THEME":
      return {
        ...state,
        resolvedTheme: action.payload,
      };

    default:
      return state;
  }
}
