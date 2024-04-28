import { useQuery } from "@tanstack/react-query";
import axiosClient from "../utils/tmdbAxiosClient";
import { MovieDto, ApiResponse } from "../types";

const useGetTrendingMovies = () =>
	useQuery<ApiResponse<MovieDto>, Error>({
		queryKey: ["movies", "trending"],
		queryFn: async () => {
			const { data } = await axiosClient.get<ApiResponse<MovieDto>>(
				"/trending/movie/week"
			);

			return data;
		},
		staleTime: Infinity,
		retry: true,
	});

export default useGetTrendingMovies;
