---
title: "Marine Mucilage"
description: "Fine-tuning segmentation models to read an environmental signal in satellite imagery."
date: 2026-10-12
author: Ahmet Zelka
portfolioOrder: 4
category: "Satellite imaging research"
period: "2025 · inzva AI Projects"
highlight: "SAM fine-tuning · Sentinel-2"
stack: [SAM, Sentinel-2, Computer vision]
image:
  src: /assets/projects/marmara-sentinel.jpg
  alt: "Real Sentinel-2 imagery of Bostancı's coastline and visible marine mucilage in the Marmara Sea on 6 June 2021."
  width: 4221
  height: 2540
  tone: sea
imageCaption: "Context image: Bostancı, 6 June 2021. European Union / Copernicus Sentinel-2 imagery; contains modified Copernicus Sentinel data 2021. This is not a model prediction."
imageCreditUrl: https://commons.wikimedia.org/wiki/File:Sea_snot_in_the_Marmara_Sea_(Copernicus).jpg
links:
  - label: Read the inzva report
    url: https://inzva.com/reports/2025/ai-projects-9
facts:
  - value: "4"
    label: Team members
  - value: "SAM"
    label: Segmentation experiments
  - value: "Marmara"
    label: Study area
permalink: /projects/marine-mucilage/
---

## Finding a subtle signal from space

Marine mucilage can form visible patterns on the sea surface, but detecting it from satellite imagery requires more than looking for a particular color. Texture, lighting, coastlines, and other bright regions all affect the masks a model produces.

I worked in a four-person team during **inzva AI Projects #9** on monitoring marine mucilage in the Marmara Sea. The wider project combined Sentinel-2 imagery and ERA5 climate variables for detection and forecasting.

## My role

I owned experiments to fine-tune variants of Meta's **Segment Anything Model** for mucilage segmentation. I reviewed false-positive and missed-region masks, then iterated on image preprocessing and prompt selection before fine-tuning.

That work required close attention to the images themselves: where a predicted region followed the environmental signal, where it followed an unrelated visual cue, and how preprocessing changed the boundary a model could recognize.

## Research context

The project was part of a four-month research program culminating in the September 2025 showcase. The [public inzva report](https://inzva.com/reports/2025/ai-projects-9) lists our team and describes its broader environmental-monitoring objective.

This case study focuses on my segmentation work. I do not have a published quantitative segmentation score to report here. The satellite image above provides context for the problem; it is not an output from our model.

## What I took from it

Qualitative error review shaped the next experiment as much as the training setup did. Looking carefully at missed regions and false detections helped turn a broad fine-tuning task into more specific questions about prompts, preprocessing, and the visual cues the model used.
