export interface MovieDto {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	vote_average: number;
}

type Genre = {
	id: number;
	name: string;
};

export interface MovieDetailsDto extends MovieDto {
	genres: Genre[];
	runtime: number;
	release_date: string;
}

export interface ApiResponse<T> {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}
