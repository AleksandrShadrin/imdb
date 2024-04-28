import { MantineProvider } from "@mantine/core";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import queryClient from "./utils/queryClient";

import Root from "./pages/Root";
import Movies from "./pages/Movies/Movies";
import Trends from "./pages/Trends/Trends";
import Movie from "./pages/Movie/Movie";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Trends />,
			},
			{ path: "/movies", element: <Movies /> },
			{ path: "/movie/:id", element: <Movie /> },
		],
	},
]);

function App() {
	return (
		<MantineProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</MantineProvider>
	);
}

export default App;
