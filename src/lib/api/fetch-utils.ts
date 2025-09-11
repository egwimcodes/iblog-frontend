import {
  ApiRequestConfig,
  FinalizeGoogleLoginRequestToken,
} from "@/lib/types/services";
import { Routes } from "./authEndpoints";
import { AuthResponseType, LoginRequest, RegisterRequest } from "@/lib/types/account";
import { MakeRequest } from "./api-utils";

export async function FinalizeGoogleLogin({
  token,
}: FinalizeGoogleLoginRequestToken): Promise<AuthResponseType> {
  try {
    const requestConfig: ApiRequestConfig = {
      path: Routes.FINALIZE_GOOGLE_LOGIN,
      method: "POST",
      removeAuth: true,
      data: {
        token,
      },
    };
    const response = await MakeRequest(requestConfig);
    return response;
  } catch (error) {
    throw error;
  }
}


export async function Login({data}: LoginRequest): Promise<AuthResponseType> {
  try {
    const requestConfig: ApiRequestConfig = {
      path: Routes.LOGIN,
      method: "POST",
      removeAuth: true,
      data: data
    };
    const response = await MakeRequest(requestConfig);
    return response;
  } catch (error) {
    throw error;
  }
}


export async function Register({ data }: RegisterRequest): Promise<AuthResponseType> {
  try {
    const requestConfig: ApiRequestConfig = {
      path: Routes.REGISTER,
      method: "POST",
      removeAuth: true,
      data: data,
    };
    const response = await MakeRequest(requestConfig);
    return response;
  } catch (error) {
    throw error;
  }
}


