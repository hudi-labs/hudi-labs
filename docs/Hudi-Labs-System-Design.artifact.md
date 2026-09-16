# Hudi Labs — System Design

## Purpose

Document the static marketing system after the cleanup of discontinued subprojects: routes, content model, interactive modules, accessibility, export constraints, validation and rollout decisions.

## Audience

Hudi Labs product, design and engineering collaborators, plus future maintainers of the public site.

## System boundary

- Next.js static site with `basePath` and `trailingSlash` support.
- Public routes: Home, Products, Integrations and Brand Book.
- Centralized product and navigation content for Hudi Labs and its active public offering.
- Client-side motion only for progressive presentation; no backend, database or simulated API documentation.

## Core flow

Visitor → route shell → centralized content → semantic page composition → optional client motion → static export.

## Quality guarantees

- Stable internal product IDs and canonical public names.
- Brand Book discoverable only in the footer while remaining publicly addressable.
- Motion pauses on interaction and simplifies with `prefers-reduced-motion`.
- Navigation, product destinations and export output are covered by automated checks.

## Decision

Keep the Hudi Labs public site focused on the brand, the active product catalog and institutional integration capabilities, without retaining discontinued subproject routes or demos.
