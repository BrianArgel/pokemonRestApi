import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { RouterLayout } from "@/common/RouterLayout";
import { HomePage, LoginPage, Pokemon } from "@/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};