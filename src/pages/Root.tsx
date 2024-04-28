import { AppShell, Box, Button, Flex, Menu, NavLink } from "@mantine/core";
import { IconHome2, IconTrendingUp } from "@tabler/icons-react";
import {
	Outlet,
	ScrollRestoration,
	NavLink as RouterNavLink,
} from "react-router-dom";

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
								<Menu.Item>
									<NavLink
										w={128}
										to="/Movies"
										component={RouterNavLink}
										label="Movies"
										leftSection={<IconHome2 size="1rem" stroke={1.5} />}
									/>
								</Menu.Item>
								<Menu.Item>
									<NavLink
										w={128}
										to="/"
										label="Trends"
										component={RouterNavLink}
										leftSection={<IconTrendingUp size="1rem" stroke={1.5} />}
									/>
								</Menu.Item>
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
