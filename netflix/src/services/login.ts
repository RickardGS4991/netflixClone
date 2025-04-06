import { UserModel } from "../model/user.model";
import { URLAuth } from "../model/urlsAuth";
import axios from "axios";

export const LoginService = async (data: UserModel) => {
    try {
        let response = await axios.post(`${import.meta.env.VITE_BACKEND_URL || `http://localhost:1000`}${URLAuth.login}`,{
            email: data.email, 
            password: data.password
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status === 200){
            return response.data
        }
        return null;
    } catch (error: any) {
        throw new Error(error.message);
    }
};