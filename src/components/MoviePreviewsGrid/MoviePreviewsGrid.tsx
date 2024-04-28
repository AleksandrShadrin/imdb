import { Box, Card, Center, SimpleGrid, Skeleton } from "@mantine/core";
import { Movie } from "../../types";
import MoviePreview from "../MoviePreview/MoviePreview";

type Props = {
	movies?: Movie[];
	isLoading: boolean;
};

const loader = Array(10)
	.fill(0)
	.map((_) => (
		<Center>
			<Box w="100%">
				<Card shadow="sm" padding="sm" radius="md" withBorder>
					<Card.Section>
						<Skeleton height={400} />
					</Card.Section>
				</Card>
			</Box>
		</Center>
	));

export default function MoviePreviewsGrid({ movies, isLoading }: Props) {
	return (
		<SimpleGrid cols={{ base: 1, xs: 2, sm: 4, md: 5 }}>
			{!movies || isLoading
				? loader
				: movies.map((m) => (
						<Center h="100%">
							<Box maw={340} h="100%" w="100%">
								<MoviePreview
									key={m.id}
									id={m.id}
									poster_path={m.poster_path}
									title={m.title}
									avg_score={m.vote_average}
								/>
							</Box>
						</Center>
				  ))}
		</SimpleGrid>
	);
}
