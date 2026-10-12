---
title: "MRI Field Translation"
description: "One conditional model for translating MRI across modalities and magnetic field strengths."
date: 2026-10-12
author: Ahmet Zelka
portfolioOrder: 2
category: "Computer vision research"
period: "2026 · MRIxFields / inzva"
highlight: "Third Prize · inzvamri team"
stack: [PyTorch, ViT, FPS-Former]
image:
  src: /assets/projects/mri-workflow.svg
  alt: "The existing Task 3 diagram: one shared model connects five MRI field strengths across T1W, T2W, and T2FLAIR."
  width: 1200
  height: 360
  tone: navy
imageCaption: "Task 3 overview from the project repository: three modalities, five field strengths, and twenty directed field pairs."
links:
  - label: Explore the code
    url: https://github.com/z3lka/mri_fields_task_3
  - label: Results and evidence
    url: https://github.com/z3lka/mri_fields_task_3/blob/main/docs/results.md
facts:
  - value: "13.0%"
    label: Lower public nRMSE
  - value: "0.8795"
    label: Public SSIM
  - value: "180"
    label: Predictions per run
permalink: /projects/mri-field-translation/
---

## One model, many translation directions

MRI appearance changes with the scan modality and magnetic field strength. MRIxFields2026 Task 3 asks for controllable translation between those domains, including translations toward lower fields.

Our **inzvamri** team received a **Third Prize in Task 3**. My work focused on adapting FPS-Former into a shared conditional model and making its inference and submission workflow reproducible.

## My contribution

I adapted the frequency, spatial, and multi-scale architecture for field translation, conditioning an approximately **11.5M-parameter** model on modality and source/target field strength.

The workflow covers T1W, T2W, and T2FLAIR, all twenty non-identity field pairs, and a complete **180-prediction** validation submission. I also built checks for output domains, spatial metadata, numerical values, and archive structure.

## Recorded results

<figure>
  <img src="/assets/projects/mri-results.png" alt="Three recorded public FPS-Former runs: nRMSE falls from 0.2839 to 0.2471, SSIM rises from 0.8649 to 0.8795, and LPIPS falls from 0.1561 to 0.1492." width="1800" height="760" loading="lazy">
  <figcaption>Existing experiment figure from the project report. These are organizer-evaluated public-validation results.</figcaption>
</figure>

| Metric | First recorded run | Best recorded run |
| --- | ---: | ---: |
| nRMSE ↓ | 0.283937 | **0.247053** |
| SSIM ↑ | 0.864881 | **0.879531** |
| LPIPS ↓ | 0.156116 | **0.149198** |

nRMSE improved by **13.0%** across these experiments. Patch and batch settings also changed, so this is a comparison of successive runs rather than an isolated test of training duration. The team award and these personal validation results describe different parts of the competition outcome.

## What I learned

Lower training loss did not always produce better local translation metrics. That made it essential to keep training diagnostics, local holdouts, and public validation results distinct—and to audit the complete prediction pipeline alongside the model.
