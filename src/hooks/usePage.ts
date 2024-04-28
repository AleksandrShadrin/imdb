import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export default function usePage() {
	let [searchParams, setSearchParams] = useSearchParams();

	const page = useMemo(() => {
		const pageParam = searchParams.get("page");
		const parsedPage = parseInt(pageParam!, 10);
		return Number.isNaN(parsedPage) ? 1 : parsedPage;
	}, [searchParams]);

	const setPage = useCallback(
		(newPage: number) => {
			const newSearchParams = new URLSearchParams(searchParams);
			newSearchParams.set("page", newPage.toString());
			setSearchParams(newSearchParams);
		},
		[setSearchParams]
	);

	return { page, setPage };
}
