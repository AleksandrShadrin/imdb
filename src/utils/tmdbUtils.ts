export function getPosterUri(poster_path: string | undefined): string {
	return poster_path
		? `https://image.tmdb.org/t/p/w500${poster_path}`
		: "https://placehold.co/400x600?text=Placeholder";
}

export function runtimeToHoursMinutes(runtime: number): {
	hours: number;
	minutes: number;
} {
	const hours = Math.floor(runtime / 60);
	const minutes = runtime - hours * 60;

	return {
		hours: Math.floor(runtime / 60),
		minutes: minutes,
	};
}
