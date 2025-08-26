import { useAppDispatch, useAppSelector } from "../store-hooks";

import { UserAccessToken, UserProfile } from "@/lib/types/account";
import { clearUser, setUser, updateProfile } from "./slice";

export function useUser() {
  const dispatch = useAppDispatch();
  const { profile, tokens, isAuthenticated } = useAppSelector(
    (state) => state.user
  );

  // Actions wrapped in handy functions
  const login = (profile: UserProfile, tokens: UserAccessToken) => {
    dispatch(setUser({ profile, tokens }));
  };

  const logout = () => {
    dispatch(clearUser());
  };

  const editProfile = (updates: Partial<UserProfile>) => {
    dispatch(updateProfile(updates));
  };

  return {
    profile,
    tokens,
    isAuthenticated,
    login,
    logout,
    editProfile,
  };
}
