---
title: "Lattice"
description: "A job-application copilot that connects every recommendation to evidence in a reviewed CV."
date: 2026-10-12
author: Ahmet Zelka
portfolioOrder: 5
category: "Applied AI product"
period: "2026 · Invite-only MVP"
highlight: "Evidence-led job matching"
stack: [Next.js, Supabase, LLM workflows]
image:
  src: /assets/projects/lattice.png
  alt: "Lattice's existing product landing page, with a reviewed-CV workflow and an illustrative evidence-match card."
  width: 1440
  height: 900
  tone: sage
imageCaption: "A local capture of Lattice's existing landing-page source in the logged-out state. Its example match is illustrative."
links:
  - label: Ask for a walkthrough
    url: mailto:zelkahm@gmail.com?subject=Lattice%20walkthrough
facts:
  - value: "Reviewed"
    label: CV profile
  - value: "Cited"
    label: Matching evidence
  - value: "Manual"
    label: Application control
permalink: /projects/lattice/
---

## A clearer next step in a noisy job search

Job hunting creates a collection problem as well as a writing problem. Roles arrive through search, links, and email alerts; deciding which ones fit means repeatedly comparing their requirements with a CV.

I built **Lattice**, an invite-only European job-application MVP, to turn that loop into a reviewed profile, an evidence-led match, and an editable application kit.

## What I implemented

- **A reviewed CV profile.** PDF/DOCX ingestion creates a structured profile that the user checks before matching begins. Replacing the CV invalidates stale analyses.
- **Multiple ways to collect roles.** Manual URL/text import, forwarded email alerts, and country-aware Adzuna discovery feed a deduplicated workspace.
- **Evidence-led analysis.** Deterministic eligibility and scoring work alongside AI explanations. Strengths and proposed edits must be traceable to supplied evidence.
- **Application kits and tracking.** Users prepare drafts, record applications, and follow interview or offer stages. Sending remains their decision.

## The engineering challenge

The system has to stay coherent when inputs change or a provider retries. I added versioned profiles, idempotent analysis runs, atomic quotas, bounded workers, and retry handling. Supabase row-level security and private storage keep each user's CV and job data isolated.

The documented checks cover normalization, import safety, scoring, evidence rules, and an anonymized evaluation corpus.

## Current stage

The MVP is implemented. Acceptance of the external CV, email, job-discovery, and model integrations still requires configured staging credentials. The source is private; I can walk through the architecture and product flow.
