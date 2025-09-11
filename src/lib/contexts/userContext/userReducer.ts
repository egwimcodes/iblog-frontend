import { UserState, UserAction } from "./types";

export const initialState: UserState = {
  user: null,
  access: null,
  refresh: null,
  isAuthenticated: false,
};

export function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "SET_USER":
      return {
        user: action.payload.user,
        access: action.payload.access,
        refresh: action.payload.refresh,
        isAuthenticated: true,
      };

    case "UPDATE_USER":
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      };

    case "LOGOUT":
      return {
        user: null,
        access: null,
        refresh: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
