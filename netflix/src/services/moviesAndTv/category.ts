import axios from "axios";

export const categoryService = async (category: string, selector: string) => {
    try {
        let response = await axios.get(`${import.meta.env.VITE_URL_FRONT || 'http://localhost:1000'}/v1/api/${selector}/${category}`);

        if(response.status === 201){
            return response.data.data;
        }

        return null;
    } catch (error) {
        throw new Error(`Error on server`);
    }
}