import { axiosConfig } from "@/utils";

const getAllLibrary = async () => {
    try {
        const response = await axiosConfig.get('/lib');
        return response.data;
    } catch (error) {
        if (error?.response?.data) {
            return error.response.data;
        }
        return null;
    }
}

export default getAllLibrary;