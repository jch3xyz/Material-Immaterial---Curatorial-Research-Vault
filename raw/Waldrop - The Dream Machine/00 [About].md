---
book: "The Dream Machine: J.C.R. Licklider and the Revolution That Made Computing Personal"
author: "M. Mitchell Waldrop"
type: about
---

# About this extraction

M. Mitchell Waldrop, *The Dream Machine: J.C.R. Licklider and the Revolution
That Made Computing Personal* (Viking, 2001; part of the Sloan Technology
Series). This folder is the immutable **source layer**: one markdown file per
section, each with YAML frontmatter (`type: source`).

## Provenance — image-only PDF, re-OCR'd

This PDF was produced by **Zamzar and has no text layer at all** — every page is
a scanned image (high-resolution bitonal CCITT scans, ~3360×5330 px). All text
here was therefore produced by **running OCR (Tesseract 5) on all 510 pages**.
The source scans are clean, so OCR fidelity is high, but this is OCR, not a
publisher text layer — see caveats.

## How the text was reconstructed

The OCR was done to TSV (word-level geometry), and the page text was rebuilt from
that geometry:

- **Running headers** — `N THE DREAM MACHINE` (verso) and `CHAPTER TITLE N`
  (recto), which carry the printed page number — were removed by dropping the
  top header band of each page. Verified: zero residual headers or stray
  page-number lines in the body.
- **Chapter-opening titles** (large centered display type) were dropped and
  replaced with a clean `#` heading from the table of contents; the body start
  was detected positively (first line at the body margin).
- **Paragraphs** were rebuilt from first-line indentation (flush ≈ left 280 px,
  paragraph indent ≈ +98 px), which is more reliable than Tesseract's own block
  grouping.
- **De-hyphenation** uses the book's own OCR'd vocabulary plus a dictionary
  backstop (rejoin splits / keep attested compounds / split accidental hyphens).
- A few safe, unambiguous OCR corrections were applied (`1n`→in, `1s`→is,
  `G6ttingen`→Göttingen).

## Structure

Sectioning follows the book's table of contents; the printed→PDF page offset is
a constant **+9** (printed page 1 = PDF page 10), used for `source_pages`.

- Prologue: Tracy's Dad
- Chapters 1–9 (Missouri Boys → Lick's Kids)
- Acknowledgments
- **Notes** — endnotes, grouped by chapter (the `CHAPTER N: TITLE` dividers
  render as `###`); each numbered note is its own entry.
- **Bibliography** — a bibliographic essay; its all-caps section headings render
  as `###`.
- **Index** — see below.

Note that the **Notes are endnotes collected at the back**, so the chapters
themselves contain no footnotes; the superscript endnote-reference numbers in the
body are part of the original text.

## Caveats

- **This is OCR.** Fidelity is high, but expect occasional character-level errors
  that are inherent to OCR of a scanned book — e.g. a superscript endnote number
  read as a stray digit or `?` attached to a word, an `i`/`1` or `o`/`0`
  confusion, or a rare misread proper name. The prose is fully readable; it has
  not been hand-proofread against the print.
- **The Index is three-column.** Reading order under normal extraction would
  scramble the columns, so it was rebuilt by splitting OCR words into three
  columns by x-coordinate and reading each column top-to-bottom. Term→page
  lookups are reliable, but a few entries that begin in lowercase may merge into
  the preceding entry, and there is occasional OCR noise in the page-number runs.
  Treat the index as a usable finding aid, not a faithful typographic
  reproduction.
- **Front matter** (series page, copyright, contents, dedication) is included as
  plain reflowed text.

## Contents

1. Front Matter
2. Prologue: Tracy's Dad
3.–11. Chapters 1–9
12. Acknowledgments
13. Notes
14. Bibliography
15. Index
