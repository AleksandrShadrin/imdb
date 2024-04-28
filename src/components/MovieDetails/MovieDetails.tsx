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
	LoadingOverlay,
} from "@mantine/core";

import { getPosterUri, runtimeToHoursMinutes } from "../../utils/tmdbUtils";
import { Genre } from "../../types";

type Props = {
	posterPath?: string;
	movieTitle?: string;
	movieOverview?: string;
	genres?: Genre[];
	release?: string;
	runtime?: number;
	isLoading: boolean;
};

const loader = (
	<>
		<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
			<AspectRatio ratio={6 / 9} style={{ display: "flex" }}>
				<Skeleton />
				<LoadingOverlay
					visible={true}
					zIndex={1}
					overlayProps={{ radius: "sm", blur: 6 }}
				/>
			</AspectRatio>
		</Grid.Col>
		<Grid.Col
			span={{ base: 12, xs: 6, md: 8 }}
			style={{ position: "relative" }}
		>
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
				zIndex={1}
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
	release,
	runtime,
}: Props) {
	const posterUri = getPosterUri(posterPath);
	const runtimeHoursMinutes = runtimeToHoursMinutes(runtime || 0);

	return (
		<Grid>
			{isLoading ? (
				loader
			) : (
				<>
					<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
						<AspectRatio ratio={6 / 9}>
							<Image radius="sm" src={posterUri} />
						</AspectRatio>
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 6, md: 8 }}>
						<Stack h="100%">
							<Title>{movieTitle}</Title>
							<Group gap="sm">
								{genres?.map((g) => (
									<Pill bg="teal" c="white" key={g.id}>
										{g.name}
									</Pill>
								))}
							</Group>
							<Text size="md">{movieOverview}</Text>
							<Text size="lg" mt="auto">
								Runtime:{" "}
								{runtime
									? `${runtimeHoursMinutes?.hours} hours and ${runtimeHoursMinutes?.minutes} minutes`
									: "unknown"}
							</Text>
							<Text size="lg">{`Release date: ${release}`}</Text>
						</Stack>
					</Grid.Col>
				</>
			)}
		</Grid>
	);
}
