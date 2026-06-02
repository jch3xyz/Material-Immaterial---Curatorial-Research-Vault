---
type: system_doc
status: generated
last_updated: 2026-06-01
---

# Ingest Pipeline

How a book is ingested into the interpretive layer. This documents the hardened pipeline after the prototype (Han — *The Transparency Society*) revealed two failure modes: (1) numerical caps dropping important notes to dead links, and (2) uncontrolled link vocabularies producing ~600 distinct targets for 62 files. Both are now closed.

## Stages

For each book in `raw/`, process **one chapter at a time** through:

1. **Hash + cache check.** Compute SHA256 of the chapter. If `_system/ingest_cache.json` has a matching hash, skip. Otherwise proceed.
2. **Analysis pass** (one agent per chapter). Reads the raw chapter, writes a verbose analysis file to `_system/analysis/`. Expansive, uncertain, candidate-heavy. Returns a structured summary.
3. **Synthesis plan** (one agent over all analyses). Produces a deduplicated list of notes to create — book, author, source summaries, concepts, arguments, definitions, metaphors, symbols, tensions, references. **No numerical caps** (see below). Assigns each planned note an exact `file_path`.
4. **Generation pass** (parallel, one agent per planned note). Reads the cited raw chapters for verbatim quotes and writes the note. **Links resolved against the controlled vocabulary** (see below).
5. **Finalize.** Update indexes, `index.md`/`overview.md`, `_system/log.md`, `_system/ingest_cache.json`, `_system/review_items.md`, and add any new canonical names to `_system/link_vocabulary.md`.

## Rule 1 — No numerical caps

Do not cap the number of notes per kind. The selection filter is **durability and uniqueness**, not a budget. If a note's body wiki-links a concept/argument/figure as durable, that link is a commitment: either create the note (or declare it a forward-stub), or don't link it. Caps were the cause of the prototype's dropped-to-dead-link pattern. (Memory: `no-hard-caps-on-notes`.)

## Rule 2 — Controlled link vocabulary

Every pass that emits wiki-links MUST load [[_system/link_vocabulary|Link Vocabulary]] and obey the [[_system/schemas|Link Naming Rule]]. Concretely:

- **Planner**: assigns canonical `file_path`s. The bare title (filename without `.md`) is the only legal link form for that note. The planner should reuse existing canonical names rather than coining variants, and should mark cross-author concepts as forward-stubs rather than planning Han-tinted duplicates.
- **Generation agent prompt** must include:
  - "Link targets are bare canonical note titles, identical to filenames without `.md`. Never use a type prefix (`Argument -`, `Concept -`, `Metaphor -`, `Reference -`, etc.)."
  - "Resolve every link against `_system/link_vocabulary.md`: it must be an existing note, a note planned in this pass, or a declared forward-stub. Otherwise use plain text."
  - "Do not coin article/qualifier variants. One canonical name per concept."
  - The relevant slice of the canonical name list and the forward-stub policy.
- **Book-note agent prompt** must additionally include: "Your TOC, Major Concepts/Arguments/Definitions/Metaphors/Symbols/Tensions, and References sections must link ONLY to canonical note names that exist or are planned this pass, or to declared forward-stubs. Do not invent titles that summarize a note — use its actual filename."
- **Finalize** appends any newly created canonical names to `_system/link_vocabulary.md` so the next book sees them.

## Rule 3 — Normalization backstop

After generation, run a normalization pass:

- Apply the verified variant→canonical table from `_system/link_vocabulary.md` (exact-string, alias-preserving; never prefix-match where it could corrupt a longer canonical name).
- Re-grep for the invented prefix convention (`[[Argument - `, `[[Concept - `, etc.) and for variant clusters; fix or report.
- Report residual forward-stubs (expected) vs. true orphans (to fix).

## Provenance rules (unchanged)

Verbatim quotes only; every claim source-linked; confidence labels (`Directly stated` / `Strongly implied` / `Interpretive synthesis` / `Speculative connection`); never invent citations; compression reversible. See [[_system/schemas]].
