import { Pagination, Stack } from "@mantine/core";
import usePage from "../../hooks/usePage";

import MoviePreviews from "../../components/MoviePreviews/MoviePreviews";
import useGetMoviesByScore from "../../queries/useGetMoviesByScore";

export default function Movies() {
	const { page, setPage } = usePage();
	const { data, isLoading } = useGetMoviesByScore(page);

	return (
		<Stack w="100%">
			<MoviePreviews isLoading={isLoading} movies={data?.results} />
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
