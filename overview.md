---
type: map
status: generated
last_updated: 2026-06-01
---

# Overview

This Obsidian vault holds a library of full-text books in `raw/` and a generated interpretive layer (concepts, arguments, definitions, metaphors, symbols, tensions, references, essays, audits) outside `raw/`. The interpretive layer is built by a two-step ingest pipeline (analysis → generation) with SHA256 incremental caching, defined in [[_system/schemas]].

## How to Navigate

1. Start at [[maps/Home]].
2. Browse a concept or tension to find authors and books that engage it.
3. Follow source citations down to the exact raw chapter to verify any claim.
4. Drop your own drafts into `inbox/` and ask for an audit in `audits/`.

## Principles

- The `raw/` folder is immutable. Never edit raw source files.
- Every generated claim must trace back to a raw passage via the `Sources` section.
- Confidence is always declared: `Directly stated` | `Strongly implied` | `Interpretive synthesis` | `Speculative connection`.
- Compression is reversible: every synthesis links back to the original.

## Current State

Two books are now ingested. The prototype ingest of `Byung-Chul Han - The Transparency Society` (10 chapters) and the ingest of `N. Katherine Hayles - How We Became Posthuman` (12 chapters) are both complete: analyzed and synthesized into the interpretive layer (books, authors, source summaries, concepts, arguments, definitions, metaphors, symbols, tensions, references). Han entry points: [[Transparency]], [[The digital panopticon runs on voluntary self-exposure]], [[Byung-Chul Han and Michel Foucault]]. Hayles entry points: [[Embodiment]], [[Disembodiment is impossible there is only different embodiment]], [[Embodiment vs Information]]. The two books meet on the vault's [[Material vs Immaterial]] axis via [[N. Katherine Hayles and Byung-Chul Han]]. See [[_system/log|Processing Log]] for history and next suggested tasks.
