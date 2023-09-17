import React, { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NOTIFY_TYPES } from "../const";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const notify = (message, severity) => {
    switch (severity) {
    case NOTIFY_TYPES.SUCCESS:
      toast.success(message, { position: toast.POSITION.BOTTOM_LEFT });
      break;
    case NOTIFY_TYPES.ERROR:
      toast.error(message, { position: toast.POSITION.BOTTOM_LEFT });
      break;
    default:
      toast(message, { position: toast.POSITION.BOTTOM_LEFT });
    }
  };

  const value = { notify };

  return (
    <NotificationContext.Provider value={value}>
      <ToastContainer />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
