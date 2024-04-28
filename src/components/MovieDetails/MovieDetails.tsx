import {
	AspectRatio,
	Grid,
	Group,
	Image,
	Stack,
	Title,
	Text,
	Pill,
	Skeleton,
	Center,
	Loader,
	LoadingOverlay,
} from "@mantine/core";

import { getPosterUri } from "../../utils/mdbUtils";
import { Genre } from "../../types";

type Props = {
	posterPath?: string;
	movieTitle?: string;
	movieOverview?: string;
	genres?: Genre[];
	isLoading: boolean;
};

const loader = (
	<>
		<Grid.Col span={{ base: 12, xs: 4 }}>
			<AspectRatio ratio={6 / 9} style={{ display: "flex" }}>
				<Skeleton />
				<LoadingOverlay
					visible={true}
					zIndex={1000}
					overlayProps={{ radius: "sm", blur: 6 }}
				/>
			</AspectRatio>
		</Grid.Col>
		<Grid.Col span={{ base: 12, xs: 8 }} style={{ position: "relative" }}>
			<Stack>
				<Title>Movie Title</Title>
				<Group gap="sm">
					<Pill bg="teal" c="white">
						Text
					</Pill>
					<Pill bg="teal" c="white">
						Text
					</Pill>
					<Pill bg="teal" c="white">
						Text
					</Pill>
				</Group>
				<Skeleton h="12px" />
				<Skeleton h="12px" />
				<Skeleton h="12px" w="45%" />
			</Stack>
			<LoadingOverlay
				visible={true}
				zIndex={1000}
				overlayProps={{ radius: "sm", blur: 6 }}
			/>
		</Grid.Col>
	</>
);

export default function MovieDetails({
	posterPath,
	movieTitle,
	genres,
	movieOverview,
	isLoading,
}: Props) {
	const posterUri = getPosterUri(posterPath);

	return (
		<Grid>
			{isLoading ? (
				loader
			) : (
				<>
					<Grid.Col span={{ base: 12, xs: 4 }}>
						<AspectRatio ratio={6 / 9}>
							<Image radius="sm" src={posterUri} />
						</AspectRatio>
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 8 }}>
						<Stack>
							<Title>{movieTitle}</Title>
							<Group gap="sm">
								{genres?.map((g) => (
									<Pill bg="teal" c="white" key={g.id}>
										{g.name}
									</Pill>
								))}
							</Group>
							<Text size="xl">{movieOverview}</Text>
						</Stack>
					</Grid.Col>
				</>
			)}
		</Grid>
	);
}
