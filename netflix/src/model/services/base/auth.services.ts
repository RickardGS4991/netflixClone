import { LoginResponse } from "../../loginResponse";
import { UserModel } from "../../user.model";
import { RegisterModel } from "../../userRegister";

export interface IAuthService{
    signup(data: RegisterModel): Promise<any>;
    signIn(user: UserModel): Promise<LoginResponse | null>;
}