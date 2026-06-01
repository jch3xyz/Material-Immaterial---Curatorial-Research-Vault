---
book: "Six Years: The Dematerialization of the Art Object from 1966 to 1972"
author: "Lucy R. Lippard"
type: about
---

# About this extraction

Lucy R. Lippard, *Six Years: The Dematerialization of the Art Object from 1966
to 1972…* (University of California Press, 1997 reissue of the 1973 Praeger
edition). This folder is the immutable **source layer**: one markdown file per
section, each with YAML frontmatter (`type: source`).

## Provenance — re-OCR'd from the page scans

The source PDF was a **scanned book** with a corrupt Adobe "Paper Capture" OCR
layer (e.g. "Fluxus" → "Flu1u1", "Galerie" → "Galerte"). That layer was
discarded and every page **re-OCR'd from the page images** with Tesseract 5
(PSM 3). The scans are low resolution (**~150 ppi**), which sets a real ceiling
on accuracy (see caveats).

Each PDF page is a **two-page spread** (left and right book pages scanned
together). Each spread was split into two half-pages at its **detected binding
gutter** (the gutter is off-center and varies per spread, so a fixed midpoint
split would clip text — it is detected per spread as the central minimum-ink
column). Half-pages were then assembled in reading order (left page, then right).

## Structure and page map

Sectioning follows the book's own contents. Printed-page starts: Escape
Attempts vii, Author's Notes 3, Preface 5, then the year chronology — 1966 (11),
1967 (21), 1968 (35), 1969 (68), 1970 (134), 1971 (208) — Postface 263, Index
265. Every boundary was confirmed by matching detected page numbers; pagination
runs +1 per half-page and was mapped by majority vote (so stray misreads were
rejected). `source_pages` gives the printed range; "Escape Attempts" shows
`vii–2` because the roman front-matter numbering resets to arabic just before
Author's Notes.

## How the text was reconstructed

- **Plates / facsimiles.** *Six Years* reproduces hundreds of photographed
  documents, typescripts, and artworks. At 150 ppi these do not OCR (a
  photographed typescript came out as "TMP ART Gaow wa…"). Half-pages are
  classified by median OCR confidence (real text ≈ 96; photographed-document
  garbage ≈ 40–50); plate pages are replaced with a single marker
  `*[image / facsimile reproduction — not captured in text extraction]*`, and
  low-confidence garbage lines inside otherwise-clean pages are likewise
  dropped to a marker.
- **Essays** (Escape Attempts, Author's Notes, Preface, Postface) are reflowed
  by first-line indent into paragraphs.
- **Chronology** (1966–1971) entries are separated by the vertical spacing
  between them; indented instruction-pieces, number works (e.g. Dan Graham's
  mileage piece), and aligned lists are **preserved with line breaks** rather
  than reflowed, so their structure survives.
- **De-hyphenation** uses the book's own vocabulary plus a dictionary backstop:
  line-break splits rejoined, attested compounds kept, accidental hyphens after
  function words split.
- **Index** is included but **low-fidelity** (dense, number-heavy hanging-indent
  list; some surrounding apparatus bleeds in).

## Caveats

- **Resolution ceiling (150 ppi).** Expect a heavier residual-OCR-error tail
  than a clean scan, especially in small or dense type and in reproduced
  artists' texts.
- **Gutter / binding clipping.** In dense full-width passages, roughly **4 % of
  long lines lose their final word(s)** where the text curves into the binding
  near the gutter. The gutter-aware split recovers most gutter-adjacent text,
  but characters physically degraded by binding curvature at 150 ppi are
  irrecoverable. This shows up mainly in long quoted artist statements.
- **Entry segmentation** in the chronology is gap-based; an entry that breaks
  exactly across a page boundary may occasionally merge with the next, and a
  few entry-opening artist names may be imperfect.
- **This is a faithful capture of Lippard's running text**, not of the
  reproduced documents/artworks, which are marked as figures.

## Contents

1. Front Matter (title, publication data, contents)
2. Escape Attempts — Lippard's 1997 introductory essay
3. Author's Notes
4. Preface
5. 1966
6. 1967
7. 1968
8. 1969
9. 1970
10. 1971
11. Postface
12. Index
