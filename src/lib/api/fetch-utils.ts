import { ApiRequestConfig, FinalizeGoogleLoginRequestToken } from "@/lib/types/services";
import { Routes } from "./authEndpoints";
import { FinalizeGoogleLoginType } from "@/lib/types/account";
import { MakeRequest } from "./api-utils";


export async function FinalizeGoogleLogin({
  token,
}: FinalizeGoogleLoginRequestToken): Promise<FinalizeGoogleLoginType> {
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


// fetch("/api/auth/google", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ token: id_token }),
//                 })
//                     .then((res) => {
//                         if (!res.ok) throw new Error("Login failed");
//                         return res.json();
//                     })
//                     .then((userData) => {
//                         console.log("User Data:", userData);
//                         toast.success("Signed in with Google");
//                         window.location.href = "/articles";
//                     })
//                     .catch((err) => {
//                         console.error(err);
//                         toast.error("Login failed");
//                     })
//                     .finally(() => {
//                         dispatch(hideLoader());
//                         window.removeEventListener("message", listener);
//                     });