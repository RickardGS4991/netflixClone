import { LoginResponse } from "../../model/loginResponse";
import { RegisterModel } from "../../model/userRegister";

export interface IAuthViewModel{
    register(data: RegisterModel): Promise<any>;
    login(email: string, password: string): Promise<LoginResponse | null>;
};