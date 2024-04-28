import { Box, Card, Center, Skeleton, Stack, Title } from "@mantine/core";
import { Movie } from "../../types";
import MoviePreview from "../MoviePreview/MoviePreview";
import { Carousel } from "@mantine/carousel";

type Props = {
	movies?: Movie[];
	isLoading: boolean;
};

const loader = Array(10)
	.fill(0)
	.map((_) => (
		<Carousel.Slide>
			<Box w="100%">
				<Card shadow="sm" padding="sm" radius="md" withBorder>
					<Card.Section>
						<Skeleton height={400} />
					</Card.Section>
				</Card>
			</Box>
		</Carousel.Slide>
	));

export default function MoviePreviewsCarousel({ movies, isLoading }: Props) {
	return (
		<Carousel
			align="start"
			slideSize={{ base: "60%", sm: "40%", lg: "20%" }}
			slideGap="sm"
			w="100%"
			loop
			dragFree
		>
			{!movies || isLoading
				? loader
				: movies.map((m) => (
						<Carousel.Slide>
							<MoviePreview
								key={m.id}
								id={m.id}
								poster_path={m.poster_path}
								title={m.title}
								avg_score={m.vote_average}
							/>
						</Carousel.Slide>
				  ))}
		</Carousel>
	);
}
