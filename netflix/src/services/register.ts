import axios from "axios";
import { RegisterModel } from "../model/userRegister";
import { URLAuth } from "../model/urlsAuth";

export const registerService = async (userRegister: RegisterModel) => {
    try {
        let response = await axios.post(`http://localhost:1000${URLAuth.register}`, userRegister, {
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