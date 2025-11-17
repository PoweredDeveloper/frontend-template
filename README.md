# React TS Front-End template

Simple template for front-end development

## About:

### Stack:
- Base: [Node.js](https://nodejs.org/en), [TypeScript](https://www.typescriptlang.org)
- Framework: [React](https://react.dev), [Vite](https://vite.dev)
- Styling: [Headless UI](https://headlessui.com), [Tailwind CSS](https://tailwindcss.com)
- Routing: [Tanstack Router](https://tanstack.com/router/latest)
- API: [OpenAPI](https://openapi-ts.dev), [Tanstack Query](https://tanstack.com/query/latest)

### Project Structure

```graphql
/src
├── app/                               # App-wide config, providers, router
│   ├── router/
│   │   ├── routes/                    # Route files (file-based routing)
│   │   │   ├── index.tsx              # /
│   │   │   ├── dashboard/
│   │   │   │   ├── index.tsx          # e.g /dashboard
│   │   │   │   ├── users.tsx          # e.g /dashboard/users
│   │   │   └── settings/
│   │   │       └── index.tsx          # /settings
│   │   └── __root.tsx                 # Router context types
│   ├── providers/                     # Global providers
│   │   ├── query-provider.tsx         # QueryClientProvider
│   │   └── theme-provider.tsx
│   ├── main.tsx                       # Entry point
│   └── routeTree.gen.ts               # Generated routeTree
│
├── modules/                           # Module-based domain modules
│   ├── auth/
│   │   ├── components/
│   │   │   └── LoginForm.tsx
│   │   ├── hooks/
│   │   │   └── useLogin.ts
│   │   ├── pages/
│   │   │   └── LoginPage.tsx
│   │   ├── api/                       # Module-specific API wrappers
│   │   │   └── auth.api.ts
│   │   └── index.ts
│   └── ... (more modules)
│
├── api/                               # Auto-generated OpenAPI client
│   ├── schemas.ts                     # Generated Zod/TS schemas (if using zod)
│   ├── client.ts                      # API client instance (fetch/axios)
│   ├── endpoints.ts                   # Wrapped endpoint functions
│   └── types.d.ts                     # Generated types
│
├── components/                        # Reusable UI components (global)
│   ├── ui/                            # Design system atoms/molecules
│   │   └── Button.tsx
│   └── form/                          # Form components
│       └── Input.tsx
│
├── hooks/                             # Global cross-feature hooks
│   └── useWindowSize.ts
│
├── lib/                               # Core libraries/utilities (non-React)
│   ├── http.ts                        # fetch wrapper, interceptors
│   ├── env.ts                         # environment variables handling
│   ├── storage.ts                     # localStorage/session helpers
│   └── logger.ts
│
├── services/                          # Side-effect services (analytics, auth)
│   ├── analytics.service.ts
│   └── auth.service.ts
│
├── styles/                            # Global styles, tokens
│   ├── globals.css
│   └── theme.css
│
└── assets/                            # Static assets
    └── logo.svg
```

## Development:
1. Download [Docker](https://www.docker.com)
2. Run
```bash
docker build -t frontend-template .
```
3. Then run
```bash
docker run -p 8080:80 frontend-template
```
4. Open application at [http://localhost:8080](http://localhost:8080)

> [!IMPORTANT]
> Restart machine to generate routes