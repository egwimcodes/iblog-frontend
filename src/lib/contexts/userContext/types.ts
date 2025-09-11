import { UserProfile } from "@/lib/types/account";

export interface UserState {
  user: UserProfile | null;
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean;
}

export type UserAction =
  | {
      type: "SET_USER";
      payload: { user: UserProfile; access: string; refresh: string };
    }
  | { type: "UPDATE_USER"; payload: Partial<UserProfile> }
  | { type: "LOGOUT" };
