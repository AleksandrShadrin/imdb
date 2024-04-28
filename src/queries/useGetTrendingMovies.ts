import { useQuery } from "@tanstack/react-query";
import axiosClient from "../utils/mdbAxiosClient";
import { Movie, ApiResponse } from "../types";

const useGetTrendingMovies = () =>
	useQuery<ApiResponse<Movie>, Error>({
		queryKey: ["movies", "trending"],
		queryFn: async () => {
			const { data } = await axiosClient.get<ApiResponse<Movie>>(
				"/trending/movie/week"
			);

			return data;
		},
		staleTime: Infinity,
		retry: true,
	});

export default useGetTrendingMovies;
