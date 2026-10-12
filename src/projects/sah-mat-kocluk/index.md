---
title: "Şah-Mat Koçluk"
description: "From paper tracking to a shared student, teacher, and guardian workspace."
date: 2026-10-12
author: Ahmet Zelka
portfolioOrder: 1
category: "Product engineering"
period: "Client project · App Store"
highlight: "Published on the App Store"
stack: [Flutter, Supabase, PostgreSQL]
image:
  src: /assets/projects/sah-mat.png
  alt: "Şah-Mat's existing store artwork showing weekly study plans and progress tracking in Turkish."
  width: 1024
  height: 500
  tone: cream
imageCaption: "Existing Şah-Mat store artwork. The interface shown here is promotional artwork."
links:
  - label: View on the App Store
    url: https://apps.apple.com/app/id6810422702
facts:
  - value: "4"
    label: User roles
  - value: "Weekly"
    label: Planning cycle
  - value: "RLS"
    label: Data access control
permalink: /projects/sah-mat-kocluk/
---

## A shared picture of a student's week

A course center needs more than a digital checklist. Teachers plan the week, students record their work, guardians follow progress, and administrators manage accounts. Each person needs a different view of the same system.

I built **Şah-Mat Koçluk**, published as **Şah-Mat VIP Kurs**, to bring those workflows into one application. It covers weekly assignments, study routines, curriculum topics, resource progress, exams, and notifications.

## What I built

I designed the Flutter application and its Supabase/PostgreSQL backend together. Role-based navigation gives each user the right workspace, while database policies enforce access to the underlying records.

- **Students** follow their current plan, record routines, and track books and exam results.
- **Teachers** assign work, review progress, and correct records with version checks and an immutable edit history.
- **Guardians** receive a focused summary through a role-gated backend operation.
- **Administrators** manage accounts and assignments of responsibility.

The interface adapts between mobile and desktop. A Turkish curriculum catalog supports shared topics without imposing the limits of a paper tracking sheet.

## The engineering challenge

The difficult part was defining who can change a record, and when. Historical weeks and completed resources need different rules from an active assignment. A teacher's correction also needs to preserve what changed rather than silently overwrite a student's history.

I kept those rules in the backend as well as the interface, with row-level security, guarded operations, and automated domain, widget, integration, and database-policy checks.

## Outcome

The application is published on the Apple App Store. Development continues around connected workflows and the account lifecycle. The project taught me to treat permissions, record history, and platform testing as part of the product itself.
