import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";
import userReducer from "./account/slice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
      user: userReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
