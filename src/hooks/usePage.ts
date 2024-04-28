import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export default function usePage() {
	let [searchParams, setSearchParams] = useSearchParams();

	const page = useMemo(() => {
		const page = searchParams.get("page");
		if (!page) {
			return 1;
		}

		return parseInt(page);
	}, [searchParams]);

	const setPage = useCallback(
		(newPage: string) =>
			setSearchParams((prev) => {
				return { ...prev, page: newPage };
			}),
		[searchParams, setSearchParams]
	);

	return { page, setPage };
}
