import { useQuery } from "@tanstack/react-query";
import axiosClient from "../utils/mdbAxiosClient";
import { MovieDetails } from "../types";

const useGetMovieDetails = (movieId: number) =>
	useQuery<MovieDetails, Error>({
		queryKey: ["movie", movieId],
		queryFn: async () => {
			const { data } = await axiosClient.get(`/movie/${movieId}`);
			return data;
		},
		staleTime: Infinity,
		retry: true,
	});

export default useGetMovieDetails;
