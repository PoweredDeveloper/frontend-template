import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <div>
    <div className="flex gap-2 p-2">
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
  </div>
)

export const Route = createRootRoute({ component: RootLayout })
