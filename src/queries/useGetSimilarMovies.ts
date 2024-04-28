import { useQuery } from "@tanstack/react-query";
import axiosClient from "../utils/mdbAxiosClient";
import { ApiResponse, Movie } from "../types";

const useGetSimilarMovies = (movieId: number) =>
	useQuery<ApiResponse<Movie[]>, Error>({
		queryKey: ["similar", movieId],
		queryFn: async () => {
			const { data } = await axiosClient.get<ApiResponse<Movie[]>>(
				`/movie/${movieId}/similar`
			);
			return data;
		},
		staleTime: Infinity,
		retry: true,
	});

export default useGetSimilarMovies;
