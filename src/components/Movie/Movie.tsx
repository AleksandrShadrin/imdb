import { Button, Card, Group, Image, Skeleton, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type Props = {
	poster_path: string;
	title: string;
	overview: string;
	id: string;
};

export default function Movie({ poster_path, id, title }: Props) {
	const imageSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;
	const navigate = useNavigate();

	return (
		<>
			<Group>
				<Image src={imageSrc} height={440} />
			</Group>
			<Card shadow="sm" padding="sm" radius="md" withBorder>
				<Card.Section>
					{poster_path === "null" ? (
						<Skeleton />
					) : (
						<Image src={imageSrc} fit="contain" w="auto" />
					)}
					<Group justify="space-between" mt="md" mb="xs">
						<Text fw={500}>{title}</Text>
						<Button onClick={() => navigate(id)} />
					</Group>
				</Card.Section>
			</Card>
		</>
	);
}
