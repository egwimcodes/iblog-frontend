"use server";

import { ApiRequestConfig } from "@/lib/types/services";
import { retrieveAccessToken } from "@/lib/utils/security";
import Axios from "axios";

const BACKEND_URL = process.env.PRODCUTION
  ? process.env.PRODCUTION_SERVER_URL!
  : process.env.DEVELOPMENT_SERVER_URL!;

export const MakeRequest = async (
  requestObj: ApiRequestConfig,
  config: Record<string, unknown> = {}
) => {
  const { path, data, method, contentType, removeAuth, url } = requestObj;

  try {
    const accessToken = await retrieveAccessToken();
    const token: string | undefined = !removeAuth ? accessToken : undefined;

    const headers = {
      Authorization: removeAuth
        ? undefined
        : token
        ? `Bearer ${token}`
        : undefined,
      Accept: "application/json",
      "Content-Type": contentType ?? "application/json;charset=UTF-8",
    };

    // Always make sure path ends with slash (/)
    const base_url = url ?? `${BACKEND_URL}${path}`;

    const response = await Axios({
      url: base_url,
      method,
      headers,
      data,
      ...config,
    });

    return response.data;
  } catch (err) {
    if (Axios.isAxiosError(err)) {
      // Extract only the useful parts
      const status = err.response?.status;
      const message =
        err.response?.data?.message || err.response?.statusText || err.message;

      console.error("❌ API Error:", {
        url: err.config?.url,
        method: err.config?.method,
        status,
        message,
      });

      // Re-throw a cleaner error to the caller
      throw new Error(`Request failed (${status}): ${message}`);
    }

    // Non-Axios errors
    console.error("❌ Unexpected Error:", err);
    throw err;
  }
};
