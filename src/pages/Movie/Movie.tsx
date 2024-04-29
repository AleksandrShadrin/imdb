import { Stack, Title } from "@mantine/core";

import { useParams } from "react-router-dom";

import useGetMovieDetails from "../../queries/useGetMovieDetails";
import MoviePreviewsCarousel from "../../components/MoviePreviewsCarousel/MoviePreviewsCarousel";
import useGetSimilarMovies from "../../queries/useGetSimilarMovies";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

export default function Movie() {
	const { id } = useParams();
	const { data: movieDetails, isLoading: movieDetailsLoading } =
		useGetMovieDetails(parseInt(id!));
	const { data: similarMovies, isLoading: similarMoviesLoading } =
		useGetSimilarMovies(parseInt(id!));

	return (
		<Stack>
			<MovieDetails
				genres={movieDetails?.genres}
				movieOverview={movieDetails?.overview}
				movieTitle={movieDetails?.title}
				posterPath={movieDetails?.poster_path}
				release={movieDetails?.release_date}
				runtime={movieDetails?.runtime}
				isLoading={movieDetailsLoading}
				rating={movieDetails?.vote_average}
			/>
			<Title>Similar Movies</Title>
			<MoviePreviewsCarousel
				movies={similarMovies?.results}
				isLoading={similarMoviesLoading}
			/>
		</Stack>
	);
}
