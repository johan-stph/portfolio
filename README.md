# Johannes Stephan — Portfolio

## Technologies

- React 19
- React Router v7 (server + dev)
- TypeScript
- Vite
- Tailwind CSS
- Radix UI (`@radix-ui/react-slot`)
- lucide-react, react-icons
- class-variance-authority, clsx, tailwind-merge
- ESLint, Prettier

## Quick start

1. Install dependencies

   npm install

2. Start development server

   npm run dev

3. Build for production

   npm run build

4. Serve the production build

   npm run start

Helpful scripts:

- `npm run typecheck` — run route typegen + `tsc`
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run format` — Prettier

## Deployment

This repo includes a `Dockerfile` and a `Caddyfile` for containerized deployments and simple reverse-proxy configuration.

## Notes

- Node 18+ recommended.
- App source is under `app/` and static assets live in `public/`.
