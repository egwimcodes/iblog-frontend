// store/slices/userSlice.ts
import { UserAccessToken, UserProfile } from "@/lib/types/account";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  profile: UserProfile | null;
  tokens: UserAccessToken | null;
  isAuthenticated: boolean;
};

const initialState: UserState = {
  profile: null,
  tokens: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ profile: UserProfile; tokens: UserAccessToken }>
    ) => {
      state.profile = action.payload.profile;
      state.tokens = action.payload.tokens;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.profile = null;
      state.tokens = null;
      state.isAuthenticated = false;
    },
    updateProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
  },
});

export const { setUser, clearUser, updateProfile } = userSlice.actions;
export default userSlice.reducer;
