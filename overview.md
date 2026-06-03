---
type: map
status: generated
last_updated: 2026-06-02
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

Seven books are now ingested. The prototype ingest of `Byung-Chul Han - The Transparency Society` (10 chapters), the ingest of `N. Katherine Hayles - How We Became Posthuman` (12 chapters), the ingest of `Lucy Lippard - Six Years`, the ingest of `Meghan O'Gieblyn - God Human Animal Machine`, the ingest of `Byung-Chul Han - Psychopolitics`, the ingest of `Yuval Noah Harari - Homo Deus`, and the ingest of `Ray Kurzweil - The Singularity Is Near` are all complete: analyzed and synthesized into the interpretive layer (books, authors, source summaries, concepts, arguments, definitions, metaphors, symbols, tensions, references). Han (Transparency Society) entry points: [[Transparency]], [[The digital panopticon runs on voluntary self-exposure]], [[Byung-Chul Han and Michel Foucault]]. Hayles entry points: [[Embodiment]], [[Disembodiment is impossible there is only different embodiment]], [[Embodiment vs Information]]. Lippard entry points: [[Dematerialization]], [[Dematerialization failed to escape the market]], [[Conceptual Art]]. O'Gieblyn entry points: [[Technology as Metaphor]], [[All the eternal questions have become engineering problems]], [[Disenchantment]] (the metaphor stub [[Mind as Machine]] is now realized). Han (Psychopolitics) entry points: [[Psychopolitics]], [[Freedom itself is producing coercion]], [[Biopolitics vs Psychopolitics]] (the concept stub [[Biopolitics]] is now realized). Harari entry points: [[Organisms Are Algorithms]], [[The self is an imaginary story like nations gods and money]], [[Dataism]]. Kurzweil entry points: [[The Law of Accelerating Returns]], [[We are not our bodies but a pattern of information that persists through material turnover]], [[The Singularity]] (the heavily forward-stubbed author [[Ray Kurzweil]] is now realized). The books meet on the vault's [[Material vs Immaterial]] axis — which now spans four author sections — via [[N. Katherine Hayles and Byung-Chul Han]] and [[Lucy Lippard and N. Katherine Hayles]]; O'Gieblyn joins the posthuman/embodiment thread theologically via [[Meghan O'Gieblyn and N. Katherine Hayles]]; Psychopolitics deepens the Han thread from passive surveillance to the active steering of the psyche; Homo Deus joins via the keystone-merge bridge [[Yuval Noah Harari and Byung-Chul Han]] on Dataism and growth-as-religion, with [[Yuval Noah Harari and N. Katherine Hayles]] extending the dissolution of the liberal subject; and Kurzweil supplies the affirmative proponent of disembodiment the others write against, via [[Ray Kurzweil and N. Katherine Hayles]] (the keystone disagreement) and [[Ray Kurzweil and Yuval Noah Harari]] (the two affirmative cosmologists of information). See [[_system/log|Processing Log]] for history and next suggested tasks.
