# Portfolio

A React portfolio built with Vite and Sass.

## Development

Install dependencies and start the local Vite server:

```sh
npm install
npm run dev
```

The `npm start` alias is also available. The development server runs at
`http://localhost:5173`.

## Validation and production

```sh
npm test
npm run build
npm run preview
```

Production files are generated in `dist/`. `npm run deploy` publishes that
directory to GitHub Pages using the `/portfolio/` project-site base path.
The standard `npm run build` uses a root-relative base path for Vercel and
other root-hosted deployments.

## Source structure

- `src/app/` contains the app shell and page composition.
- `src/components/sections/` contains portfolio page sections.
- `src/components/shared/` contains reusable interface elements.
- `src/styles/` contains global Sass tokens and styles.
- Section-specific `.scss` files stay alongside their components.
