# Selected Work

A focused collection of **six projects**: four résumé highlights and two recent products. Each case study explains the problem, my contribution, the evidence, and what I learned.

| Project | Why it earns a place | Case study |
| --- | --- | --- |
| **Şah-Mat Koçluk** | Shipped client software; permissions and real academic workflows. | [Read](src/projects/sah-mat-kocluk/index.md) |
| **MRI Field Translation** | A team prize, a conditional vision model, and measured validation results. | [Read](src/projects/mri-field-translation/index.md) |
| **Trendyol Search Ranking** | Catalog-scale NLP, positive-only learning, and a clear performance progression. | [Read](src/projects/trendyol-product-search/index.md) |
| **Marine Mucilage** | Research collaboration with a specific segmentation contribution. | [Read](src/projects/marine-mucilage/index.md) |
| **Lattice** | Recent applied AI with evidence rules, ingestion, privacy, and product workflows. | [Read](src/projects/lattice/index.md) |
| **Ambient Focus** | A published extension with an immediately visible product effect. | [Read](src/projects/ambient-focus/index.md) |

## Presentation

The homepage uses an ordered list matching the Notes section: project heading, date, reading time, author, and a short text excerpt. Each heading opens a Markdown case study with an overview, compact facts, existing imagery, and relevant public links. Private source repositories are represented through their product story and walkthrough availability.

The visual treatment follows the site's paper background, serif body text, and quiet teal palette. Other writing and the existing navigation remain part of the same site.

## Image provenance

No generative image tools were used.

- **Şah-Mat:** existing `rehberlik/store_assets/play_feature_graphic.png`; labeled as store artwork rather than an application screenshot.
- **MRI:** existing Task 3 overview SVG and FPS-Former result PNG from `mri_competition`. The result figure is limited to the recorded public-validation runs.
- **Trendyol:** a Matplotlib chart drawn from the five recorded public scores in the project README. The horizontal axis starts at zero; positive-rate settings are explained in the caption.
- **Marine Mucilage:** [Copernicus Sentinel-2 imagery of Bostancı, 6 June 2021](https://commons.wikimedia.org/wiki/File:Sea_snot_in_the_Marmara_Sea_(Copernicus).jpg). Attribution: European Union / Copernicus Sentinel-2 imagery; contains modified Copernicus Sentinel data 2021. This is a contextual photograph, not a project prediction. The source image includes its annotations and credits.
- **Lattice:** capture rendered from the existing `app/page.tsx`, `components/brand.tsx`, and `app/globals.css` in the logged-out state. No live user account or CV data was used; the example card is part of the original landing page.
- **Ambient Focus:** existing extension store screenshot from `safari_yt_tr_bg/store-assets/screenshot-1.png`.

## Evidence and editing

Project descriptions use the local documentation, public repositories, and `cv_opt/resume.tex`. The MRI team award is taken from the résumé; its public-validation metrics are separately reported. The inzva report confirms the marine project and team participation. Lattice's external-provider acceptance remains a staging step.

Edit the corresponding Markdown file to change a case study. Its front matter supplies the heading order and the case study's overview, image, facts, and links. Images live in `src/assets/projects/`; the homepage does not display thumbnails.

```sh
pnpm test
pnpm run build
pnpm dev
```
