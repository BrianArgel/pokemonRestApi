import React from "react";

export { HomePage } from "./home";
export { Pokemon } from "./Pokemon";

export const LoginPage = React.lazy(()=> import("./login"));