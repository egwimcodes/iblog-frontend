type RequestMethod = "POST" | "GET" | "PATCH" | "DELETE";

export type ApiRequestConfig = {
  path: string; //endpoint e.g  waitlist/
  data?: object; // Optional data payload
  method: RequestMethod; // GET, POST
  contentType?: string; // json, media
  removeAuth?: boolean; // Optional flag to remove authorization
  url?: string;
};

export type GoogleUserInfoResponse = {
  sub: string;
  name: string;
  given_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
}

export interface FinalizeGoogleLoginRequestToken {
  token: string;
}

