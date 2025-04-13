import 'reflect-metadata';
import { injectable } from 'inversify';
import { IAuthService } from './base/auth.services';
import { UserModel } from '../user.model';
import { RegisterModel } from '../userRegister';
import axios from 'axios';
import { URLAuth } from '../urlsAuth';
import { LoginResponse } from '../loginResponse';

@injectable()
export class AuthServiceImpl implements IAuthService{
    async signIn(user: UserModel): Promise<LoginResponse | null> {
        try {
            let response = await axios.post(`${import.meta.env.VITE_BACKEND_URL || `http://localhost:1000`}${URLAuth.login}`,{
                email: user.email, 
                password: user.password
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if(response.status === 201){
                return response.data.data;
            }
            return null;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async signup(data: RegisterModel): Promise<any> {
        try {
            let response = await axios.post(`http://localhost:1000${URLAuth.register}`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if(response.status === 200 || response.status === 201){
                return response.data;
            };
    
            return null;
        } catch (error) {
            console.log('err');
            throw new Error(`Error on server`);
        }
    }
}