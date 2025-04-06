import axios from "axios";
import { UrlMoviesAndTv } from "../../model/urlsMovies";
import { getTokens } from "../../core/utils/localStorage";

export const trendingService = async (selector: string) => {
    try {
        let trending = await axios.get(`${import.meta.env.VITE_URL_FRONT || 'http://localhost:1000'}/v1/api/${selector}${UrlMoviesAndTv.trending}`);

        if(trending.status === 201 || trending.status === 200){
            return trending.data.data;
        }

        return null;
    } catch (error: any) {
        throw new Error(error.message);
    }
}