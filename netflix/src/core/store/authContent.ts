import { create } from "zustand";
import { LoginResponse } from "../../model/loginResponse";
import { AuthStore } from "../../model/authChange";

export const setAuth = create<AuthStore>((set) => ({
    username: null,
    image_path: null,
    changeAuth: (type:LoginResponse) => set({
        username: type.username,
        image_path: type.image_path
    })
}));