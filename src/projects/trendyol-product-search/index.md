---
title: "Trendyol Search Ranking"
description: "Learning product relevance from positive-only data at catalog scale."
date: 2026-10-12
author: Ahmet Zelka
portfolioOrder: 3
category: "NLP & ranking"
period: "2026 · TEKNOFEST"
highlight: "0.760 → 0.870 public Macro-F1"
stack: [Transformers, LightGBM, CatBoost]
image:
  src: /assets/projects/trendyol-results.png
  alt: "A chart of five recorded public Macro-F1 scores, improving from 0.760 for the lexical baseline to 0.870 for the calibrated rank blend."
  width: 1100
  height: 660
  tone: sage
imageCaption: "Plotted from the repository's recorded public scores. Blend percentages denote the calibrated positive rate."
links:
  - label: Explore the code
    url: https://github.com/z3lka/tr_e_tic_hack
  - label: Experiment notes
    url: https://github.com/z3lka/tr_e_tic_hack/blob/main/docs/project_notes.md
facts:
  - value: "966K"
    label: Products
  - value: "3.36M"
    label: Candidate pairs
  - value: "0.870"
    label: Public Macro-F1
permalink: /projects/trendyol-product-search/
---

## Relevance without negative labels

The training data tells us which products match a Turkish search query, but supplies no explicit negative pairs. The task therefore starts before model fitting: deciding how to create useful negatives without leaking information from test candidates.

I built an end-to-end retrieval and ranking pipeline for **966,444 products** and **3,359,679 candidate pairs** in the TEKNOFEST 2026 Trendyol competition.

## How the pipeline works

1. **Retrieve and mine negatives.** Deterministic catalog sampling combines uniform, hard, and semi-hard examples.
2. **Represent the match.** Turkish-aware lexical features capture token overlap, brands, categories, and product attributes. Transformer bi-encoders add semantic similarity.
3. **Rank the candidates.** LightGBM and CatBoost combine lexical and category signals. Within-query ranks make outputs from different model families comparable.
4. **Calibrate the decision.** A positive-rate decision rule turns the blended ranking into the competition's binary output.

I used term-grouped validation so that a search term stays in one fold, keeping the evaluation focused on unseen queries.

## Results

The recorded public Macro-F1 increased from **0.760** for the lexical baseline to **0.870** for the final rank blend. Intermediate runs made the effect of semantic blending and positive-rate calibration visible. The final recorded placement was **116 of 377 participants**.

## The useful lesson

Better ranking does not automatically mean a better binary decision. Macro-F1 was sensitive to the positive rate, and lexical and semantic models made different mistakes. The strongest improvement came from making those models work together and validating the decision rule with the same care as the model.
