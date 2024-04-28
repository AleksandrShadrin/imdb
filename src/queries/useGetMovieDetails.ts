import { useQuery } from "@tanstack/react-query";
import axiosClient from "../utils/mdbAxiosClient";
import { MovieDetailsDto } from "../types";

const useGetMovieDetails = (movieId: number) =>
	useQuery<MovieDetailsDto, Error>({
		queryKey: ["movie", movieId],
		queryFn: async () => {
			const { data } = await axiosClient.get(`/movie/${movieId}`);
			return data;
		},
		staleTime: Infinity,
		retry: true,
	});

export default useGetMovieDetails;
