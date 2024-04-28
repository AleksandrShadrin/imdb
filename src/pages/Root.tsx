import { AppShell, Flex, NavLink } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<AppShell header={{ height: 48 }} padding="md">
			<AppShell.Header>
				<Flex h="100%" align="center" pl="sm">
					<NavLink
						w={128}
						href="/movie/123"
						label="Movies"
						leftSection={<IconHome2 size="1rem" stroke={1.5} />}
					/>
				</Flex>
			</AppShell.Header>
			<AppShell.Main display="flex">
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
}
