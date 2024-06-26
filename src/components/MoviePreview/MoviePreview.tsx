import { AspectRatio, Card, Image, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import classes from "./MoviePreview.module.css";
import { getPosterUri } from "../../utils/tmdbUtils";

type Props = {
	poster_path: string;
	title: string;
	id: number;
	avg_score: number;
};

export default function MoviePreview({
	poster_path,
	id,
	title,
	avg_score,
}: Props) {
	const imageSrc = getPosterUri(poster_path);
	const navigate = useNavigate();

	return (
		<Card
			classNames={{ root: classes.card }}
			shadow="sm"
			padding="sm"
			radius="md"
			h="100%"
			onClick={() => navigate(`/movie/${id}`)}
			withBorder
		>
			<Card.Section>
				<AspectRatio ratio={6 / 9}>
					<Image
						src={imageSrc}
						fallbackSrc="https://placehold.co/400x600?text=Placeholder"
					/>
				</AspectRatio>
			</Card.Section>

			<Stack mt="md" mb="xs" px="sm" justify="space-between" h="100%">
				<Text fw={500}>{`${title}`}</Text>
				<Text fw={500}>{`Score: ${avg_score}`}</Text>
			</Stack>
		</Card>
	);
}
