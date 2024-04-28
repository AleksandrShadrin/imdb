export interface Movie {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	vote_average: number;
}

export interface MovieDetails extends Movie {
	genres: Array<{ id: number; name: string }>;
	runtime: number;
	release_date: string;
}

export interface ApiResponse<T> {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}
