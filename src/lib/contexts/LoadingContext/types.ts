export interface LoadingState {
  showLoader: boolean;
  loadingMessage?: string;
}

export type LoadingAction =
  | { type: "SHOW_LOADER"; payload?: { message?: string } }
  | { type: "HIDE_LOADER" };

  