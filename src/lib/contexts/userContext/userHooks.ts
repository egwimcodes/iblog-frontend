"use client";

import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const useUserData = () => {
  const { state } = useUser();
  return state.user;
};

export const useAccessToken = () => {
  const { state } = useUser();
  return state.access;
};

export const useIsAuthenticated = () => {
  const { state } = useUser();
  return state.isAuthenticated;
};
