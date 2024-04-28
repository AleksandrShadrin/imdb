import { Stack, Title } from "@mantine/core";
import MoviePreviewsCarousel from "../../components/MoviePreviewsCarousel/MoviePreviewsCarousel";
import useGetTrendingMovies from "../../queries/useGetTrendingMovies";

export default function Trends() {
	const { data, isLoading } = useGetTrendingMovies();

	return (
		<Stack>
			<Title>Trends</Title>
			<MoviePreviewsCarousel isLoading={isLoading} movies={data?.results} />
		</Stack>
	);
}
