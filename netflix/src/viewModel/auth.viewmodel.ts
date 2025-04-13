import 'reflect-metadata';
import { IAuthViewModel } from "./base/auth.viewmodel";
import { inject, injectable } from 'inversify';
import type { IAuthService } from '../model/services/base/auth.services';
import { LoginResponse } from '../model/loginResponse';
import { RegisterModel } from '../model/userRegister';

@injectable()
export class AuthViewModelImpl implements IAuthViewModel{
    constructor(
        @inject('IAuthService')
        private authService: IAuthService
    ){}

    async register(data: RegisterModel): Promise<any> {
        return await this.authService.signup(data);
    }

    async login(email: string, password: string): Promise<LoginResponse | null> {
        let userLogin = { email: email, password: password}
        return await this.authService.signIn(userLogin);
    }
}