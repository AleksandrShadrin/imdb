import { AppShell, Box, Button, Flex, Menu, NavLink } from "@mantine/core";
import { IconHome2, IconTrendingUp } from "@tabler/icons-react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Root() {
	return (
		<>
			<AppShell header={{ height: 48 }} padding="md" miw={300}>
				<AppShell.Header>
					<Flex h="100%" align="center" pl="md">
						<Menu>
							<Menu.Target>
								<Button variant="default">Menu</Button>
							</Menu.Target>
							<Menu.Dropdown>
								<NavLink
									w={128}
									href="/movies"
									label="Movies"
									leftSection={<IconHome2 size="1rem" stroke={1.5} />}
								/>
								<NavLink
									w={128}
									href="/"
									label="Trends"
									leftSection={<IconTrendingUp size="1rem" stroke={1.5} />}
								/>
							</Menu.Dropdown>
						</Menu>
					</Flex>
				</AppShell.Header>
				<AppShell.Main>
					<Flex justify="center">
						<Box maw={1280} w="100%">
							<Outlet />
						</Box>
					</Flex>
				</AppShell.Main>
			</AppShell>

			<ScrollRestoration />
		</>
	);
}
