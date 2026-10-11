# ICS – Integrated Care Solutions

Marketing site for Integrated Care Solutions, built with Vite + React.

## Local development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

Requires Node 20.19+ or 22.12+ (`.node-version` pins 22 for Cloudflare builds).

## Deploying to Cloudflare

### Option A: Cloudflare Pages (Git integration)

Workers & Pages → Create → Pages → Connect to Git → pick this repo, then:

| Setting                | Value           |
| ---------------------- | --------------- |
| Framework preset       | React (Vite)    |
| Build command          | `npm run build` |
| Build output directory | `dist`          |

### Option B: Cloudflare Workers (static assets)

Workers & Pages → Create → Import a repository → pick this repo, then:

| Setting        | Value                 |
| -------------- | --------------------- |
| Build command  | `npm run build`       |
| Deploy command | `npx wrangler deploy` |

`wrangler.jsonc` points Wrangler at `dist/`.

### Both options

- `public/_headers` is copied into `dist/` and sets security headers plus long-lived caching for hashed files in `/assets/`.
- Add the custom domain `integratedcaresolutions.in` under the project's **Custom domains** tab once the first deploy succeeds.
