"use server";

import { cookies } from "next/headers";

import { UserAccessToken } from "../types/account";
import { ACCESS_TOKEN_LIFETIME_DAYS, REFRESH_TOKEN_LIFETIME_DAYS } from "./constants/accessTokenConfig";



export async function saveAccessToken({ refresh, access }: UserAccessToken) {
  const cookieStore = await cookies();
  const now = new Date();
  const accessTokenExpiry = new Date(
    now.getTime() + ACCESS_TOKEN_LIFETIME_DAYS * 24 * 60 * 60 * 1000
  );

  const refreshTokenExpiry = new Date(
    now.getTime() + REFRESH_TOKEN_LIFETIME_DAYS * 24 * 60 * 60 * 1000
  );

  cookieStore.set("access_token", access, {
    expires: accessTokenExpiry,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
  });

  cookieStore.set("refresh_token", refresh, {
    expires: refreshTokenExpiry,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
  });
}

export async function clearCookieStore() {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
}
export async function retrieveAccessToken(): Promise<string> {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  return token?.value ?? "";
}

export async function retrieveRefreshToken(): Promise<string> {
  const cookieStore = await cookies();
  const refresh = cookieStore.get("refresh_token");
  return refresh?.value ?? "";
}
