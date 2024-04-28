import { Pagination, Stack, Title } from "@mantine/core";
import usePage from "../../hooks/usePage";

import MoviePreviewsGrid from "../../components/MoviePreviewsGrid/MoviePreviewsGrid";
import useGetTopMovies from "../../queries/useGetTopMovies";
import { useEffect, useState } from "react";

export default function Movies() {
	const { page, setPage } = usePage();
	const { data, isLoading } = useGetTopMovies(page);
	const [totalPages, setTotalPages] = useState(10);

	useEffect(() => {
		if (data) {
			setTotalPages(data?.total_pages);
		}
	}, [data]);

	return (
		<Stack align="start" pos="relative">
			<Title>Best Movies</Title>
			<MoviePreviewsGrid isLoading={isLoading} movies={data?.results} />
			<Pagination
				mt="auto"
				mx="auto"
				value={page}
				onChange={(v) => setPage(v.toString())}
				total={totalPages}
			/>
		</Stack>
	);
}
