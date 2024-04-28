import { useQuery } from "@tanstack/react-query";
import axiosClient from "../utils/mdbAxiosClient";
import { Movie, ApiResponse } from "../types";

const useGetMoviesByScore = (page: number = 1) =>
	useQuery<ApiResponse<Movie>, Error>({
		queryKey: ["movies", "byScore", page],
		queryFn: async () => {
			const params = {
				page,
				sort_by: "vote_average.desc",
				"vote_count.gte": 3000,
			};

			const { data } = await axiosClient.get<ApiResponse<Movie>>(
				"/discover/movie",
				{ params }
			);

			return data;
		},
		staleTime: Infinity,
		retry: true,
	});

export default useGetMoviesByScore;
