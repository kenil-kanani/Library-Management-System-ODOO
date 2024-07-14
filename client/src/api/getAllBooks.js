import { axiosConfig } from "@/utils";

const getAllBooks = async () => {
    try {
        const response = await axiosConfig.get('/book');
        return response.data.data;
    } catch (error) {
        if (error?.response?.data) {
            return error.response.data;
        }
        return null;
    }
}

export default getAllBooks;