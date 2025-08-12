import { ApiRequestConfig, FinalizeGoogleLoginRequestToken } from "@/lib/types/services";
import { Routes } from "./authEndpoints";
import { UserProfile } from "@/lib/types/account";
import { MakeRequest } from "./api-utils";


export async function FinalizeGoogleLogin({
  token,
}: FinalizeGoogleLoginRequestToken): Promise<UserProfile> {
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

export const handleGoogleLogin = () => {
  window.google.accounts.id.initialize({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    callback: (response: google.accounts.id.CredentialResponse) => {
      console.log("Google Credential Response:", response);
      // Send response.credential (ID Token) to your backend for verification
    },
  });

  google.accounts.id.prompt(); // opens the one-tap or popup
};