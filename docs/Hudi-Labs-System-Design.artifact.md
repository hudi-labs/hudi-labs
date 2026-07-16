# Hudi Labs — System Design

## Purpose

Document the static marketing system after the ecosystem refactor: routes, content model, interactive modules, accessibility, export constraints, validation and rollout decisions.

## Audience

Hudi Labs product, design and engineering collaborators, plus future maintainers of the public site.

## System boundary

- Next.js static site with `basePath` and `trailingSlash` support.
- Public routes: Home, Products, Integrations, Launches and Brand Book.
- Centralized product/navigation content; no backend, database or simulated API documentation.
- Client-side motion only for progressive presentation and illustrative product demos.

## Core flow

Visitor → route shell → centralized content → semantic page composition → optional client motion → static export.

## Quality guarantees

- Stable internal product IDs and canonical public names.
- Brand Book discoverable only in the footer while remaining publicly addressable.
- Motion pauses on interaction and simplifies with `prefers-reduced-motion`.
- Navigation, WhatsApp destinations, launch dates and export output are covered by automated checks.

## Decision

Evolve the existing Hudi visual system and deepen modules without introducing a new motion dependency, backend or ChatGPT App manifest.
