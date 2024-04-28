import { useQuery } from "@tanstack/react-query";
import axiosClient from "../utils/tmdbAxiosClient";
import { MovieDto, ApiResponse } from "../types";

const useGetTopMovies = (page: number = 1) =>
	useQuery<ApiResponse<MovieDto>, Error>({
		queryKey: ["movies", "top", page],
		queryFn: async () => {
			const params = {
				page,
			};

			const { data } = await axiosClient.get<ApiResponse<MovieDto>>(
				"/movie/top_rated",
				{ params }
			);

			return data;
		},
		staleTime: Infinity,
		retry: true,
	});

export default useGetTopMovies;
