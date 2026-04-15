Live site: [z3lka.github.io](https://z3lka.github.io)

![Blog](/blog_main.png)

# z3lka

A minimalist personal site built with [Eleventy (11ty)](https://www.11ty.dev/). It includes notes, project/post scaffolding, and a monthly GitHub activity widget that updates during builds.

## Tech Stack

- **Generator**: Eleventy (11ty)
- **Content**: Markdown + Nunjucks layouts
- **Styling**: Custom `/src/css/main.css`
- **Syntax highlighting**: Prism via `@11ty/eleventy-plugin-syntaxhighlight`
- **Deploy**: GitHub Pages via GitHub Actions

## Quick start

1. Clone and install

```bash
git clone https://github.com/z3lka/z3lka.github.io.git
cd z3lka.github.io
pnpm install
```

2. Run the dev server

```bash
pnpm dev
# or: pnpm start
```

3. Build the site

```bash
pnpm run build
# Output goes to _site/
```

## Scripts

- `pnpm dev` / `pnpm start`: Run Eleventy with local server and watch
- `pnpm run build`: Generate the static site into `_site/`

## GitHub activity

The homepage uses `src/_data/githubActivity.js` to fetch the current month's GitHub contribution calendar at build time. For local development, create a local `.env` file:

```env
GITHUB_USERNAME=z3lka
GITHUB_TOKEN=your_github_token
```

`.env` is ignored by git. Do not commit the token.

For GitHub Actions, add a repository secret named `GH_ACTIVITY_TOKEN`. The workflow maps that secret into the build as `GITHUB_TOKEN`:

```yml
GITHUB_TOKEN: ${{ secrets.GH_ACTIVITY_TOKEN }}
```

Because this is a static site, GitHub activity updates only when the site rebuilds. The workflow runs on pushes, can be triggered manually, and is scheduled daily at `21:10 UTC` (`00:10` in Turkey).

## Project structure

```
src/
  _data/            # Global data (e.g. site metadata)
  _includes/        # Nunjucks layouts and partials
  css/              # Styles (copied to /css)
  posts/            # Long-form posts (tag: posts)
  notes/            # Notes and write-ups (tag: note)
  projects/         # Project pages (tag: projects)
  daily_log/        # Daily log entries (tag: log)
eleventy.config.js  # Filters, plugins, passthroughs, dir config
```

Site metadata lives in `src/_data/site.json` and powers the title, description, and footer links. The top navigation is defined in `src/_includes/base.njk`.

## Authoring content

Create Markdown files inside the matching folder. Each content type uses a layout and tag to join its collection.

- Posts (`src/posts/`):

```md
---
title: My first post
author: z3lka
layout: post.njk # notes.njk or other pages
tags: [posts] # notes etc
published: true
# date is optional; it is computed if omitted
---

Your post content here.
```

### Dates and collections

- If you omit `date`, the site computes one automatically: first Git commit date of the file, then file creation time, then Eleventy’s page date.
- Collections are built from tags used above: `collections.posts`, `collections.notes`, `collections.projects`, `collections.log`.

## Built-in filters

- `readTime` — estimates minutes at ~200 wpm
- `excerpt(content, words=50)` — returns the first N words with an ellipsis
- `date(dateObj, format="dd-MM-yyyy")` — formats dates (default shown)

## Styling and assets

- Main styles live in `src/css/main.css`.
- Prism's Tomorrow theme is loaded for code blocks.
- Static assets can be placed in `src/assets/`; Eleventy copies them to `/assets/`.

## Deployment

Deployment is handled by `.github/workflows/eleventy.yml`.

1. Push to `main`, or run the workflow manually from GitHub Actions.
2. The workflow installs dependencies, runs `pnpm run build`, uploads `_site`, and deploys through GitHub Pages.
3. In repository settings, GitHub Pages should use **GitHub Actions** as the source.

`_site/` is generated build output and is ignored by git.

---

If you find this useful, feel free to fork and adapt it. PRs welcome.
