// store/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  showLoader: boolean;
}

const initialState: UIState = {
  showLoader: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.showLoader = true;
    },
    hideLoader: (state) => {
      state.showLoader = false;
    },
  },
});

export const { showLoader, hideLoader } = uiSlice.actions;
export default uiSlice.reducer;
