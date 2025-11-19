import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
	<>
		<div className="p-2 flex gap-2">
			<Link to="/" className="[&.active]:font-bold">
				House
			</Link>
			<Link to="/about" className="[&.active]:font-bold">
				Abouts us
			</Link>
		</div>
		<hr />
		<Outlet />
		<TanStackRouterDevtools />
	</>
);

export const Route = createRootRoute({ component: RootLayout });
