"use server";
import { ApiRequestConfig } from "@/lib/types/services";
import { retrieveAccessToken } from "@/lib/utils/security";
import Axios from "axios";
const BACKEND_URL = process.env.SERVER_URL!;

export const MakeRequest = async (
  requestObj: ApiRequestConfig,
  config: Record<string, unknown> = {}
) => {
  try {
    const { path, data, method, contentType, removeAuth, url } = requestObj;

    const accessToken = await retrieveAccessToken();
    const token: string | undefined = !removeAuth ? accessToken : undefined;
    console.log(token);
    const headers = {
      Authorization: removeAuth
        ? "No Auth"
        : token
        ? `Bearer ${token}`
        : "No Auth",
      Accept: "application/json",
      "Content-Type": contentType
        ? contentType
        : "application/json;charset=UTF-8",
    };
    // Always make sure path ends with slash (/)
    const base_url = url ? url : `${BACKEND_URL}${path}`;
    const response = await Axios({
      url: base_url,
      method,
      headers,
      data,
      ...config,
    });

    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Request failed with status code ${response.status}`);
    }
  } catch (e) {
    throw e;
  }
};
