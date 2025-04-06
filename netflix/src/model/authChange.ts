import { LoginResponse } from "./loginResponse";

export type AuthStore = LoginResponse & {
    changeAuth: (data: LoginResponse) => void;
  };