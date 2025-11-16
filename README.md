# React TS Front-End template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			// Other configs...

			// Remove tseslint.configs.recommended and replace with this
			tseslint.configs.recommendedTypeChecked,
			// Alternatively, use this for stricter rules
			tseslint.configs.strictTypeChecked,
			// Optionally, add this for stylistic rules
			tseslint.configs.stylisticTypeChecked

			// Other configs...
		],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname
			}
			// other options...
		}
	}
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			// Other configs...
			// Enable lint rules for React
			reactX.configs["recommended-typescript"],
			// Enable lint rules for React DOM
			reactDom.configs.recommended
		],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname
			}
			// other options...
		}
	}
]);
```

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
