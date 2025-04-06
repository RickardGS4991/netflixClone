import { Tokens } from "../../model/tokens";

export const setItems = (data: Tokens) => {
    localStorage.setItem('accessToken', data.access);
    localStorage.setItem('refreshToken', data.refresh);
};

export const getTokens = (info: string): string => {
    let token = localStorage.getItem(info);
    if(!token){
        throw new Error(`Error on server`);
    }
    return token;
};