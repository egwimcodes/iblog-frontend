import { LoadingState, LoadingAction } from "./types";

export const initialState: LoadingState = {
  showLoader: false,
  loadingMessage: undefined,
};

export function loadingReducer(
  state: LoadingState,
  action: LoadingAction
): LoadingState {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        showLoader: true,
        loadingMessage: action.payload?.message,
      };

    case "HIDE_LOADER":
      return {
        showLoader: false,
        loadingMessage: undefined,
      };

    default:
      return state;
  }
}
