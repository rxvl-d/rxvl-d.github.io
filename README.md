# rxvl-d.github.io

Personal website, built with Astro.

- Publications: edit `src/data/publications.ts`.
- Blog posts: add a markdown file to `src/posts/` with `title`, `date` and an optional `description`. The Writing section appears in the navigation once there are 10 posts (`src/data/posts.ts`).
- Contact links: fill in `src/data/site.ts`.

```sh
npm install
npm run dev     # local server
npm run build   # static output in dist/
```

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.
