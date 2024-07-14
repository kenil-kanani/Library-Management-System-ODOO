import { axiosConfig } from "@/utils";

const updateLibrary = async (id, libName, address, name, email, password) => {
	try {
		const response = await axiosConfig.patch(`/lib/${id}`, {
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
};

export default updateLibrary;
