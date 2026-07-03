---
type: system_doc
status: generated
last_updated: 2026-07-03
---

# Wiki Schemas

This file defines the YAML frontmatter and structural conventions used across the vault. Templates that follow these schemas live in `_system/templates/`.

## Note Types

| Type | Folder | Purpose |
|---|---|---|
| `book` | `books/` | One per book in `raw/` — orientation, TOC, themes |
| `author` | `authors/` | One per author — concerns, books, related figures |
| `concept` | `concepts/` | Recurring ideas, theoretical terms, categories |
| `definition` | `definitions/` | Terms explicitly defined by an author |
| `argument` | `arguments/` | Claims, theses, causal explanations, critiques |
| `metaphor` | `metaphors/` | Analogies, images, conceptual metaphors |
| `symbol` | `symbols/` | Symbols, motifs, archetypal images |
| `tension` | `tensions/` | Oppositions, contradictions, paradoxes |
| `reference` | `references/` | Cross-author relationships |
| `synthesis_essay` | `essays/` | Long-form synthesis essays, journal/chapter grade (see charter in `_system/templates/`) |
| `audit` | `audits/` | Audits of user's own writing in `inbox/` |
| `source_summary` | `sources/` | Per-raw-file orientation and citations |
| `analysis` | `_system/analysis/` | Intermediate analysis scaffolding (step 1 of ingest) |
| `map` | `maps/` | Index notes and research maps |

## Frontmatter — Concept

```yaml
type: concept
status: generated         # generated | stub | manual | needs_review
sources:
  - "[[raw/Author - Book/Chapter 01]]"
related:
  - "[[Another Concept]]"
opposes:
  - "[[Opposed Concept]]"
authors:
  - "[[Author Name]]"
confidence: medium        # high | medium | low
last_updated: YYYY-MM-DD
```

## Frontmatter — Argument

```yaml
type: argument
status: generated
claim: "The argument in one sentence."
sources:
  - source_file: "raw/Author - Book/Chapter 01.md"
    passage: "Short quoted excerpt or block reference."
related_arguments:
  - "[[Another Argument]]"
tensions:
  - "[[Tension Name]]"
confidence: medium
last_updated: YYYY-MM-DD
```

## Frontmatter — Definition

```yaml
type: definition
status: generated
term: "Term as used"
author: "Author Name"
sources:
  - source_file: "raw/Author - Book/Chapter 01.md"
    passage: "Verbatim quote of the definition."
related_concepts:
  - "[[Related Concept]]"
confidence: high
last_updated: YYYY-MM-DD
```

## Frontmatter — Metaphor

```yaml
type: metaphor
status: generated
target: "What is being described"
source_domain: "The image or analogy used"
authors:
  - "[[Author Name]]"
sources:
  - "[[raw/Author - Book/Chapter 01]]"
related:
  - "[[Related Symbol or Concept]]"
confidence: medium
last_updated: YYYY-MM-DD
```

## Frontmatter — Symbol

```yaml
type: symbol
status: generated
symbol: "The Mirror"
authors:
  - "[[Author Name]]"
sources:
  - "[[raw/Author - Book/Chapter 01]]"
related:
  - "[[Related Metaphor]]"
confidence: medium
last_updated: YYYY-MM-DD
```

## Frontmatter — Tension

```yaml
type: tension
status: generated
poles:
  - "Pole A"
  - "Pole B"
authors:
  - "[[Author A]]"
  - "[[Author B]]"
sources:
  - "[[raw/Author - Book/Chapter 01]]"
related_concepts:
  - "[[Concept]]"
confidence: medium
last_updated: YYYY-MM-DD
```

## Frontmatter — Reference (between authors)

```yaml
type: reference
status: generated
author_a: "[[Author A]]"
author_b: "[[Author B]]"
relationship: direct_citation   # direct_citation | shared_tradition | conceptual_parallel | disagreement | historical_influence | possible_resonance
sources:
  - "[[raw/Author - Book/Chapter 01]]"
confidence: medium
last_updated: YYYY-MM-DD
```

## Frontmatter — Book

```yaml
type: book
status: generated
title: "Book Title"
author: "[[Author Name]]"
raw_folder: "raw/Author - Book"
sources:
  - "[[raw/Author - Book/Chapter 01]]"
last_updated: YYYY-MM-DD
```

## Frontmatter — Author

```yaml
type: author
status: generated
name: "Full Name"
books:
  - "[[Book Title]]"
related_authors:
  - "[[Another Author]]"
last_updated: YYYY-MM-DD
```

## Frontmatter — Synthesis Essay

(Charter and craft rules: `_system/templates/synthesis_essay.md`, rewritten 2026-07-03.)

```yaml
type: synthesis_essay
status: draft             # draft | generated | final
question: "The research question investigated — written before the essay."
deck: "One- or two-sentence standfirst reporting the finding — written after."
sources_used:
  - "[[Book A]]"
  - "[[Book B]]"
  - "[[Concept X]]"
authors:
  - "[[Author One]]"
external_sources: true    # include only when sources beyond raw/ are cited
claims_audited: true
confidence: medium
last_updated: YYYY-MM-DD
```

## Frontmatter — Audit

```yaml
type: audit
status: generated
audited_file: "[[inbox/My Draft]]"
last_updated: YYYY-MM-DD
```

## Frontmatter — Source Summary

```yaml
type: source_summary
title: "Chapter or Section Title"
book: "Book Title"
author: "Author Name"
raw_file: "raw/Author - Book/Chapter 01.md"
sha256: "hash_here"
sources:
  - "raw/Author - Book/Chapter 01.md"
status: generated
last_updated: YYYY-MM-DD
```

## Frontmatter — Analysis

```yaml
type: analysis
book: "Book Title"
author: "Author Name"
raw_file: "raw/Author - Book/Chapter 01.md"
sha256: "hash_here"
status: intermediate
date_analyzed: YYYY-MM-DD
```

## Confidence Labels (claim provenance)

Use these inside note bodies, near each major claim:

- `Directly stated` — author explicitly says it
- `Strongly implied` — clearly inferable from text
- `Interpretive synthesis` — system synthesizes across passages
- `Speculative connection` — possible link, not asserted

## Required `Sources` Section

Every generated note must include a `## Sources` section with one or more entries:

```markdown
### Source 1

Book: *Book Title*
Author: Author Name
Raw file: [[raw/Author - Book/Chapter 01]]
Relevant passage:

> Short quotation from the original text.

Supports: How this passage supports the claim.
```

## Linking Conventions

- Prefer Obsidian wiki links: `[[Embodiment]]`, `[[raw/Author - Book/Chapter 01]]`
- Use `[[name|alias]]` when display text differs from filename
- Heavily cross-link concepts, authors, books, arguments, metaphors, symbols, tensions
- Do not create empty stubs unless they serve as index points; mark stubs `status: stub`

## Link Naming Rule (MANDATORY)

This rule exists because the first prototype ingest produced ~600 distinct link targets for 62 files — agents invented per-note link vocabularies (`[[Argument - Eros Requires the Veil]]`, `[[Reference - Han and Foucault]]`, `[[Pornography]]` vs `[[Pornography (Han)]]`), leaving hundreds of dead links. To prevent recurrence:

1. **A wiki-link target is always the bare canonical note title — identical to the filename without `.md`.** Never wrap a target in a type prefix. Write `[[There is no erotics of transparency]]`, never `[[Argument - Eros Requires the Veil]]`. Write `[[Byung-Chul Han and Michel Foucault]]`, never `[[Reference - Han and Foucault]]`.

2. **Every target must resolve to one of three things:**
   - a canonical note that **exists**, or
   - a canonical note **being created in the same pass**, or
   - a **declared forward-stub** (a committed-but-not-yet-created note per the forward-stub policy).

   If a phrase is none of these, render it as **plain text**, not a link.

3. **Use the controlled vocabulary.** The authoritative canonical names, the verified variant→canonical table, and the forward-stub policy live in [[_system/link_vocabulary|Link Vocabulary]]. Generation and normalization passes must load that file and resolve links against it. When a new durable note is created, add its name there.

4. **One canonical name per concept.** Do not introduce article/qualifier variants (`The Digital Panopticon` vs `Digital Panopticon`, `Inferno of the Same` vs `Hell of the Same`, `Transparency Society` vs `The Transparency Society`). Pick the canonical form from the vocabulary.

5. **The `(Author)` qualifier is reserved for real disambiguating notes** (e.g. the definition `Transparency (Han)`, the concept `Pornography (Han)` distinguished from the everyday word). Do not append `(Han)` ad hoc to concept links — `[[Negativity (Han)]]` is wrong; the canonical concept is `[[Negativity]]`.

See [[_system/ingest_pipeline|Ingest Pipeline]] for how this rule is enforced at each pass.
