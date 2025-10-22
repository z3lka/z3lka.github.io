Live site: [z3lka.github.io](https://z3lka.github.io)

![Blog](/blog_main.png)

![Blog Sample](./blog_samp.png)

# Just a Blog

A minimalist, fast personal site built with [Eleventy (11ty)](https://www.11ty.dev/). I use it to share posts, notes, daily logs, and projects.

## Tech Stack

- **Generator**: Eleventy (11ty)
- **Content**: Markdown + Nunjucks layouts
- **Styling**: water.css + custom `/src/css/main.css`
- **Syntax highlighting**: Prism via `@11ty/eleventy-plugin-syntaxhighlight`
- **Deploy**: GitHub Pages, Netlify, or Vercel

## Quick start

1. Clone and install

```bash
git clone https://github.com/z3lka/z3lka.github.io.git
cd z3lka.github.io
npm install
```

2. Run the dev server

```bash
npm run dev
# or: npm start
```

3. Build the site

```bash
npm run build
# Output goes to _site/
```

## Scripts

- `npm run dev` / `npm start`: Run Eleventy with local server and watch
- `npm run build`: Generate the static site into `_site/`

## Project structure

```
src/
  _data/            # Global data (e.g. site metadata)
  _includes/        # Nunjucks layouts and partials
  assets/           # Images and static assets (copied to /assets)
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
- Collections are built from tags used above: `collections.posts`, `collections.note`, `collections.projects`, `collections.log`.

## Built-in filters

- `readTime` — estimates minutes at ~200 wpm
- `excerpt(content, words=50)` — returns the first N words with an ellipsis
- `date(dateObj, format="dd-MM-yyyy")` — formats dates (default shown)

## Styling and assets

- Base styles via water.css and Prism (Tomorrow theme) for code blocks.
- Add or edit styles in `src/css/main.css`.
- Place images in `src/assets/`; they are served from `/assets/`.

## Deployment

1. Build locally: `npm run build`
2. Deploy the `_site/` folder to your host (GitHub Pages, Netlify, Vercel). For GitHub Pages on a user/organization site, push the repository named `<user>.github.io` and enable Pages.

---

If you find this useful, feel free to fork and adapt it. PRs welcome.
