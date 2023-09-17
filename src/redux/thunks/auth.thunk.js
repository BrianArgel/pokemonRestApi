import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticationService } from "@/api/login";

export const authThunk = createAsyncThunk(
  "authentication/auth",
  async (userData) => {
    try {
      const response = await authenticationService.login(userData);
      const token = response.data.token;
      return token;
    } catch (error) {
      const errors = error.response.data.error;
      throw new Error(errors);
    }
  }
);
