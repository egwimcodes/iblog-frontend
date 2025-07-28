interface GoogleTokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}

interface GoogleTokenClientConfig {
  client_id: string;
  scope: string;
  prompt?: "none" | "consent" | "select_account";
  callback: (response: GoogleTokenResponse) => void;
}

interface GoogleTokenClient {
  requestAccessToken: (overrideConfig?: { prompt?: string }) => void;
}

interface CredentialResponse {
  credential: string; // JWT ID token
  select_by: string; // "auto" | "user" | "user_1tap" etc.
  clientId?: string; // Optional
}

interface PromptMomentNotification {
  isDisplayMoment: () => boolean;
  isDisplayed: () => boolean;
  isNotDisplayed: () => boolean;
  getNotDisplayedReason: () =>
    | "browser_not_supported"
    | "invalid_client"
    | "missing_client_id"
    | "opt_out_or_no_session"
    | "secure_http_required"
    | "suppressed_by_user"
    | "unregistered_origin"
    | "unknown_reason";
  isSkippedMoment: () => boolean;
  getSkippedReason: () =>
    | "auto_cancel"
    | "user_cancel"
    | "tap_outside"
    | "issuing_failed";
  isDismissedMoment: () => boolean;
  getDismissedReason: () =>
    | "credential_returned"
    | "cancel_called"
    | "flow_restarted";
}

interface Window {
  google: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string;
          callback: (credentialResponse: CredentialResponse) => void;
          auto_select?: boolean;
          cancel_on_tap_outside?: boolean;
          context?: "signin" | "signup" | "use";
          ux_mode?: "popup" | "redirect";
          use_fedcm_for_prompt?: boolean;
        }) => void;
        prompt: (callback?: (notification: PromptMomentNotification) => void) => void;
        cancel: () => void;
        revoke: (hint: string, callback: () => void) => void;
      };
      oauth2: {
        initCodeClient: (config: {
          client_id: string;
          scope: string;
          prompt?: "none" | "consent" | "select_account";
          callback: (response: {
            code: string;
            scope: string;
            authuser: string;
            prompt: string;
          }) => void;
        }) => {
          requestCode: () => void;
        };
        initTokenClient: (config: GoogleTokenClientConfig) => GoogleTokenClient;
      };
    };
  };
}
