import { axiosConfig } from "@/utils";

const lib = async (libName,address,name,email,password) => {
    try {
        const response = await axiosConfig.post('/lib', {
            libName,
            address,
            name,
            email,
            password,
            
        });
        return response.data;
    } catch (error) {
        if (error?.response?.data) {
            return error.response.data;
        }
        return null;
    }
}

export default signUp;