# Role Map — Frontend

A React + Vite + Tailwind frontend for the education/career roadmap explorer.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/App.jsx` — the full app (data model + all screens)
- `src/main.jsx` — React entry point
- `src/index.css` — Tailwind imports
- `tailwind.config.js` / `postcss.config.js` — Tailwind setup
- `vite.config.js` — Vite + React plugin config
