import { Center, Stack, Title } from "@mantine/core";
import MoviePreviewsCarousel from "../../components/MoviePreviewsCarousel/MoviePreviewsCarousel";
import useGetTrendingMovies from "../../queries/useGetTrendingMovies";

export default function Trends() {
	const { data, isLoading } = useGetTrendingMovies();

	return (
		<Stack w="100%">
			<Title>Trends</Title>
			<Center>
				<MoviePreviewsCarousel isLoading={isLoading} movies={data?.results} />
			</Center>
		</Stack>
	);
}
