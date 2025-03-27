import { create } from "zustand";

export const useContentStore = create((set:any) => ({
    contentType: "movie",
    setContentType: (type:any) => set({contentType:type})
}));