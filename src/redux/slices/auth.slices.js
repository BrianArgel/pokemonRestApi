import { createSlice } from "@reduxjs/toolkit";
import { authThunk } from "../thunks/auth.thunk";
import { ACCESS_TOKEN } from "@/const";

const initialState = {
  isAuth: localStorage.getItem(ACCESS_TOKEN) ? true : false,
  accessToken: localStorage.getItem(ACCESS_TOKEN) || false,
  error: null,
  loading: false,
  success: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(authThunk.pending, (state) => {
      return (state = {
        ...initialState,
        loading: true
      });
    });
    builder.addCase(authThunk.fulfilled, (state, action) => {
      return (state = {
        ...initialState,
        loading: false,
        success: true,
        accessToken: action.payload,
        isAuth: true
      });
    });
    builder.addCase(authThunk.rejected, (state, action) => {
      return (state = {
        ...initialState,
        error: action.error.message,
        loading: false,
      });
    });
  }
});

export const { login } = authSlice.actions;