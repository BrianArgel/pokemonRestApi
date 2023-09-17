import { instanceLoginApi } from "./base.api";

export const authenticationService = {
  login: function(userData) {
    return instanceLoginApi.post("login", userData);
  }
};