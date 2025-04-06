import { create } from "zustand";

type ContentState = {
    contentType: string;
    setContentType: (type: string) => void;
  };
  
  export const useContentStore = create<ContentState>((set) => ({
    contentType: "movies",
    setContentType: (type) => set({ contentType: type }),
  }));