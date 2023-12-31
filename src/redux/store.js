import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slices";

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
  },
});