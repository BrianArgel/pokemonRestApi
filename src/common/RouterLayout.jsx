import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { useAppSelector } from "@/redux/hooks";
import { ACCESS_TOKEN } from "@/const";

export const RouterLayout = () => {

  const { accessToken } = useAppSelector((state) => state.authReducer);

  /**
   * Effect for storing the access token in local storage when it changes.
   *
   * @function
   * @param {string|null} accessToken - The access token to be stored in local storage.
   */
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN, accessToken);
    }
  }, []);

  return accessToken ? (
    <div>
      <NavBar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};