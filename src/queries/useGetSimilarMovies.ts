import { useQuery } from "@tanstack/react-query";
import axiosClient from "../utils/mdbAxiosClient";
import { ApiResponse, MovieDto } from "../types";

const useGetSimilarMovies = (movieId: number) =>
	useQuery<ApiResponse<MovieDto>, Error>({
		queryKey: ["similar", movieId],
		queryFn: async () => {
			const { data } = await axiosClient.get<ApiResponse<MovieDto>>(
				`/movie/${movieId}/similar`
			);
			return data;
		},
		staleTime: Infinity,
		retry: true,
	});

export default useGetSimilarMovies;
