import axios from "axios";

const axiosClient = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: "8ae4e0e6db6793711410c40d26fbf13c",
		language: "en-US",
	},
});

export default axiosClient;
