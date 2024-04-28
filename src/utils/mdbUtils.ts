export function getPosterUri(poster_path: string | undefined): string {
	return poster_path
		? `https://image.tmdb.org/t/p/w500${poster_path}`
		: "https://placehold.co/400x600?text=Placeholder";
}
