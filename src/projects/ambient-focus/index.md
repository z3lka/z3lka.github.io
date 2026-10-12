---
title: "Ambient Focus"
description: "A calmer YouTube viewing experience, drawn locally from the video itself."
date: 2026-10-12
author: Ahmet Zelka
portfolioOrder: 6
category: "Browser extension"
period: "2026 · Chrome Web Store"
highlight: "Published Chrome extension"
stack: [JavaScript, CSS, Canvas]
image:
  src: /assets/projects/ambient-focus.png
  alt: "An existing Ambient Focus screenshot showing a centered video and a warm background sampled from its frames."
  width: 1280
  height: 800
  tone: warm
imageCaption: "Existing screenshot from the extension's store assets. The ambient background is generated locally from the playing video."
links:
  - label: Get the extension
    url: https://chromewebstore.google.com/detail/ambient-focus-for-youtube/jpoiojmfppemkclkbgamiecobngipkhe
  - label: Explore the code
    url: https://github.com/z3lka/chrome-ambient-effect
facts:
  - value: "2"
    label: Background styles
  - value: "Local"
    label: Frame processing
  - value: "Vanilla JS"
    label: Runtime
permalink: /projects/ambient-focus/
---

## Let the video set the room

YouTube's player is surrounded by navigation, recommendations, and other competing elements. I wanted a viewing mode that gives the video more space and carries its colors into the background.

**Ambient Focus** centers the player, hides the surrounding clutter, and creates a blurred-video or sampled-gradient background from the current frames.

## What I built

The extension uses plain JavaScript, CSS, and a low-resolution canvas. Frame sampling stays inside the open tab, with no accounts, analytics, or external image-processing service.

Users can switch the ambient style, toggle the effect, or press Escape to restore the normal layout. The extension also has a toolbar control and a documented browser check for the live YouTube page.

## Outcome

Ambient Focus is available through the Chrome Web Store, with source code and store assets on GitHub. The original idea included Safari; the released implementation featured here is the Chrome extension.

## What mattered

The effect needed to be easy to leave as well as pleasant to enter. Keeping frame processing local and making the layout reversible helped keep the extension small and focused on the viewing experience.
