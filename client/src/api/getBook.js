import { axiosConfig } from "@/utils";

const getBook = async (id) => {
    try {
        const response = await axiosConfig.get(`/book/${id}`);
        return response.data.data;
    } catch (error) {
        if (error?.response?.data) {
            return error.response.data;
        }
        return null;
    }
}

export default getBook;