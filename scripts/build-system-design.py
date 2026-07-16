from __future__ import annotations

from copy import deepcopy
from datetime import date
from pathlib import Path
import shutil

from docx import Document
from docx.enum.text import WD_BREAK
from docx.shared import Inches


ROOT = Path(__file__).resolve().parents[1]
TEMPLATE = Path(r"C:\Users\atene.adm\.codex\plugins\cache\openai-curated-remote\openai-templates\0.1.0\skills\artifact-template-system-design\assets\reference.docx")
OUTPUT = ROOT / "docs" / "Hudi-Labs-System-Design.docx"


def replace_paragraph(paragraph, text: str) -> None:
    paragraph.clear()
    paragraph.add_run(text)


def set_cell(cell, text: str) -> None:
    cell.text = text


def fill_table(table, rows: list[list[str]]) -> None:
    for row_index, values in enumerate(rows):
        for column_index, value in enumerate(values):
            set_cell(table.rows[row_index].cells[column_index], value)


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(TEMPLATE, OUTPUT)
    document = Document(OUTPUT)

    paragraph_text = {
        8: "Hudi Labs",
        9: "Ecosystem Website System Design",
        21: "1.  Abstract",
        22: "The Hudi Labs website is a statically exported Next.js experience that presents a family of independent products through one coherent brand system. The refactor adds dedicated catalog, integrations and launches routes, centralizes navigation and product metadata, and replaces decorative-only motion with small, accessible modules that explain each product.",
        23: "The system serves clients and partners on desktop and mobile. It does not provide an application backend, operational API reference, authentication, product administration or a ChatGPT App. All integrations content remains conceptual and truthful; launch interest is routed to product-specific WhatsApp messages.",
        25: "2.  Goals and Non-Goals",
        27: "3.  Background and Problem Statement",
        28: "The previous single-page experience exposed the Brand Book in primary navigation, treated the ecosystem as three orbiting cards, and mixed product storytelling with a dense technology grid. Product launches had no dedicated destination and several interface illustrations were visually static. This weakened information hierarchy, made the hero hard to read at responsive sizes and blurred the distinction between available and upcoming products.",
        29: "The new boundary is intentionally narrow: the route shell and centralized content model determine labels and destinations; page sections compose that content; isolated client modules add optional motion. Static HTML remains the source of truth. Motion may enrich comprehension but must never be required to navigate, read status or complete a conversion.",
        30: "4.  Proposed Architecture",
        33: "Figure 1. Static route composition and progressive motion boundary.",
        35: "Core components",
        39: "5.  Request Lifecycle",
        40: "1. A visitor enters through /, /produtos, /integracoes, /lancamentos or /brandbook. Next.js resolves the statically generated route under the configured base path and trailing slash policy.",
        41: "2. The shared layout renders the header, route-aware navigation, footer and back-to-top control. No user identity or server authorization is required.",
        42: "3. Navigation and product data are loaded from centralized TypeScript modules. Stable ProductId values select canonical names, summaries, status and destinations.",
        43: "4. The route composes semantic server-rendered content. Client motion modules hydrate only their own small interaction boundary.",
        44: "5. There is no durable site state. Launch and contact actions leave the site through pre-filled WhatsApp URLs; external product destinations remain explicit links.",
        45: "6. Timed demos cycle locally, pause on hover or focus and stop or simplify when reduced motion is requested. They have no network retry or downstream side effect.",
        46: "7. The browser receives a readable static response before animation. Build verification confirms required routes and rejects localhost references in exported output.",
        48: "6.  API and Data Contracts",
        49: "Primary product content contract",
        52: "Contract guarantees",
        54: "ProductId remains stable for internal compatibility; public names are canonical and centralized.",
        55: "Navigation destinations resolve consistently across routes, including Home anchors reached from inner pages.",
        56: "Launch metadata is optional and includes a display date plus a product-specific WhatsApp destination.",
        57: "The content model is the source of truth for website presentation, not for operational product availability or external system data.",
        58: "The contract is maintained in src/types/site.ts and src/data/site-content.ts.",
        59: "Changes to public labels, destinations or launch metadata must update automated navigation and export checks.",
        61: "7. Consistency, Idempotency, and Replay",
        63: "Static rendering makes repeated requests deterministic for a given build. Client animation state is disposable and can restart without changing content or creating side effects. WhatsApp actions are user-initiated external navigations; the site does not claim delivery or deduplicate messages. A failed animation, hydration or timer leaves the semantic page and CTAs intact.",
        65: "8. Security and Privacy Considerations",
        67: "Public pages require no authentication. The Brand Book remains public by direct link but is intentionally absent from desktop and mobile primary navigation.",
        68: "The site collects no personal data and stores no form payload. WhatsApp links contain only predefined product context; users choose whether to send the message.",
        69: "No credentials, API keys or private endpoints belong in client bundles, content modules or exported HTML.",
        70: "Integrations copy must describe capabilities without inventing endpoints, credentials, customer data or production guarantees.",
        71: "External analytics, consent, retention and deletion controls must be reviewed separately before any telemetry is introduced.",
        74: "9.  Operational Readiness",
        76: "10. Alternatives Considered",
        80: "11. Open Questions",
        81: "Which external URL will become the canonical Hudi Delivery destination at launch?",
        82: "Should launch dates become structured ISO values when a release calendar exists?",
        83: "Which privacy-preserving analytics, if any, should be added after the static launch?",
        84: "Who owns approval of future integrations claims and Brand Book visibility changes?",
        86: "12. Decision and Next Steps",
        87: "Adopt the refactored static architecture. Release first with the new Home and three supporting routes, validate keyboard and responsive behavior, then publish through the existing static hosting workflow. Broader promotion requires clean typecheck, tests, build and export verification, no critical visual findings, and confirmed external product destinations.",
    }
    for index, text in paragraph_text.items():
        replace_paragraph(document.paragraphs[index], text)

    fill_table(document.tables[0], [["STATUS\nImplemented", "", "OWNER\nHudi Labs", "", f"LAST UPDATED\n{date.today():%B %d, %Y}"]])
    fill_table(document.tables[1], [
        ["Authors", "Hudi Labs / Coletivo Inspira"],
        ["Reviewers", "Product, Design and Engineering"],
        ["Related docs", "docs/Hudi-Labs-System-Design.artifact.md"],
        ["Scope", "Public ecosystem website routes, content, motion and static delivery."],
    ])
    fill_table(document.tables[2], [
        ["Goals", "Non-goals"],
        ["Present three products with clear status and canonical naming.", "Build product application backends or dashboards."],
        ["Provide accessible motion with deterministic static fallbacks.", "Publish simulated API endpoints or credentials."],
        ["Centralize navigation, product metadata and launch destinations.", "Introduce a new brand identity or animation dependency."],
        ["Export every route safely under basePath and trailingSlash.", "Generate a ChatGPT App submission without an MCP server."],
    ])
    fill_table(document.tables[3], [
        ["Component", "Responsibility", "Primary storage", "Failure behavior"],
        ["Route shell", "Shared layout, header, footer and route-aware links.", "Next.js app tree", "Static content remains reachable by direct URL."],
        ["Content model", "Canonical product and navigation metadata.", "TypeScript modules", "Typecheck and tests fail on contract drift."],
        ["Page compositions", "Home, catalog, integrations, launches and Brand Book.", "React server components", "Affected route fails build; other source remains isolated."],
        ["Motion modules", "Hero slider, product demos and back-to-top behavior.", "Client component state", "Semantic content remains visible without motion."],
        ["Export verifier", "Asserts routes, links and deployment-safe output.", "Generated out directory", "Build pipeline fails before publication."],
    ])
    fill_table(document.tables[4], [
        ["Field", "Type", "Required", "Description"],
        ["id", "ProductId", "Yes", "Stable internal identifier: deliveries, esporte or pages."],
        ["name", "string", "Yes", "Canonical public product name."],
        ["summary", "string", "Yes", "Short catalog-ready explanation."],
        ["status", "string", "Yes", "Current public availability label."],
        ["href", "string", "Yes", "External product site or internal launch destination."],
        ["launchLabel", "string", "No", "Human-readable forecast, currently Outubro de 2026."],
        ["launchHref", "string", "No", "Product-specific, pre-filled WhatsApp URL."],
    ])
    fill_table(document.tables[5], [
        ["Scenario", "Expected behavior", "Reasoning"],
        ["Animation restarts", "Return to the first deterministic visual state.", "Motion carries no durable or business state."],
        ["JavaScript unavailable", "Static copy, status and links remain usable.", "Server-rendered HTML is the authoritative experience."],
        ["External destination fails", "Browser displays the external failure; no local state changes.", "The website cannot guarantee third-party availability."],
        ["Content changes during build", "One compiled content version ships atomically.", "Static export prevents mid-request configuration drift."],
    ])
    fill_table(document.tables[6], [
        ["Signal", "SLO or alert", "Owner", "Launch gate"],
        ["Required routes", "All five routes exist in export.", "Engineering", "Required"],
        ["Automated checks", "Typecheck, tests, build and export verification pass.", "Engineering", "Required"],
        ["Responsive layout", "No clipping or CTA overlap at desktop and mobile breakpoints.", "Design", "Required"],
        ["Accessibility", "Keyboard focus, reduced motion and contrast reviewed.", "Design / Engineering", "Required"],
        ["External links", "WhatsApp and product destinations confirmed before publish.", "Product", "Required"],
        ["Rollout constraint: publish only after critical and high-severity review findings are resolved; retain the previous static artifact for rollback.", "", "", ""],
    ])
    fill_table(document.tables[7], [
        ["Alternative", "Why it was considered", "Why it was not selected"],
        ["Single-page only", "Smallest routing surface.", "Cannot provide focused catalog, technical and launch narratives."],
        ["Third-party motion library", "Faster access to complex choreography.", "Adds weight and dependency risk for effects achievable with CSS and small hooks."],
        ["Interactive API documentation", "Could look technically complete.", "No verified endpoints exist; simulated docs would be misleading."],
        ["Hide Brand Book behind authentication", "Stronger access restriction.", "Requirement is low discoverability, not private access or a backend."],
    ])
    fill_table(document.tables[8], [
        ["Milestone", "Deliverable", "Exit criteria"],
        ["M1", "Shared navigation, content contracts and Home refactor.", "Routes resolve and hero remains readable at breakpoints."],
        ["M2", "Products, Integrations and Launches pages.", "Content and WhatsApp assertions pass."],
        ["M3", "Accessible product demonstrations and back-to-top control.", "Timer, pause and reduced-motion behavior passes."],
        ["M4", "Static publication readiness.", "Full check suite and severity review are clean."],
    ])

    # Remove the template architecture drawing while preserving its caption and page rhythm.
    for shape in list(document.inline_shapes):
        parent = shape._inline.getparent()
        if parent is not None:
            parent.remove(shape._inline)

    document.core_properties.title = "Hudi Labs Ecosystem Website System Design"
    document.core_properties.subject = "Routes, modules, data, motion, accessibility and static delivery"
    document.core_properties.author = "Hudi Labs / Coletivo Inspira"
    document.core_properties.comments = "Generated from the retained system-design reference template."
    document.save(OUTPUT)
    print(OUTPUT)


if __name__ == "__main__":
    main()
