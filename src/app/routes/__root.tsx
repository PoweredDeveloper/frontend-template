import ThemeToggle from '@/components/ui/ThemeToggle'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <div>
    <div className="flex items-center justify-between gap-2 p-2">
      <div className="flex items-center gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Buttons
        </Link>
        <Link to="/table" className="[&.active]:font-bold">
          Table
        </Link>
      </div>
      <ThemeToggle />
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </div>
)

export const Route = createRootRoute({ component: RootLayout })
