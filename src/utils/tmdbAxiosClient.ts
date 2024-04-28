import axios from "axios";

const apiKey = import.meta.env.VITE_MOVIE_API;

const axiosClient = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: apiKey,
		language: "en-US",
	},
});

export default axiosClient;
