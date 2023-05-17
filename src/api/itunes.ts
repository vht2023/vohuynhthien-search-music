import axios from "axios";
import { memoize } from "lodash";

const API_BASE_URL = "https://itunes.apple.com";

const memoizedSearchMusic = memoize(async (term) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search?term=${term}`);
        return response.data.results;
    } catch (error) {
        throw new Error("Failed to fetch music information");
    }
});

export const searchMusic = async (term: string) => {
    try {
        return await memoizedSearchMusic(term);
    } catch (error) {
        throw new Error("Failed to fetch music information");
    }
};
