import { Pagination, Stack } from "@mantine/core";
import usePage from "../../hooks/usePage";

import MoviePreviewsGrid from "../../components/MoviePreviewsGrid/MoviePreviewsGrid";
import useGetMoviesByScore from "../../queries/useGetMoviesByScore";

export default function Movies() {
	const { page, setPage } = usePage();
	const { data, isLoading } = useGetMoviesByScore(page);

	return (
		<Stack w="100%">
			<MoviePreviewsGrid isLoading={isLoading} movies={data?.results} />
			<Pagination
				mx="auto"
				mt="auto"
				value={page}
				onChange={(v) => setPage(v.toString())}
				total={data?.total_pages || 10}
			/>
		</Stack>
	);
}
