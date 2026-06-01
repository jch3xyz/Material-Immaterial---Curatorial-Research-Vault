---
book: "The Society of the Spectacle (Annotated Edition, trans. Ken Knabb)"
author: "Guy Debord"
translator: "Ken Knabb"
type: about
---

# About this extraction

Guy Debord, *The Society of the Spectacle*, annotated edition translated by Ken
Knabb (Bureau of Public Secrets). This folder is the immutable **source layer**:
one markdown file per section, each with YAML frontmatter (`type: source`).

## Provenance — scanned, then Adobe ClearScan OCR

This PDF was **scanned** (on a Fujitsu fi-6770 scanner) and OCR'd with **Adobe
Acrobat's ClearScan**, which replaces the page images with synthetic vector
fonts plus a Unicode text layer. The text here was extracted **from that OCR text
layer** (not re-OCR'd) — quality is high, but it is OCR, so see caveats.

Cleanup applied: **soft-hyphen** line-break hyphens (U+00AD, ×938) were removed
to rejoin words; hard line-break hyphens were de-hyphenated against the book's
own vocabulary; doubled apostrophes (`''`) were normalized to `"`; and HTML
entities from the geometry extraction were decoded. Verified: zero residual soft
hyphens or entities.

## Structure and Debord's theses

*The Society of the Spectacle* is built from **221 numbered theses** across nine
chapters. **All 221 theses are present and continuous** (Ch. 1 = 1–34, Ch. 2 =
35–53, … Ch. 9 = 212–221). Each thesis number is rendered as a bold marker
(`**34**`) before its text, so theses remain citable. Chapter-opening
**epigraphs** (Debord's détourned quotations from Feuerbach, Hegel, Marx, etc.)
are rendered as blockquotes.

Distinguishing thesis numbers from page numbers needed care: both appear as bare
numbers. Page numbers were identified by position (bottom of page) and value
(printed = PDF − 9); everything else in range 1–221 is a thesis marker. OCR also
split some numbers across spaces (`1 25` = 125), which were rejoined.

- **Notes** are Knabb's annotations, **keyed to thesis numbers** (rendered
  `**12.** …`). The notes are set in two columns and were reconstructed by
  splitting the OCR word-geometry into columns and reading each top-to-bottom.
- **The Index references theses, not pages** ("Arabic numerals refer to theses,
  Roman to chapter epigraphs"); it is likewise two-column and column-reconstructed.

## Caveats (OCR)

This is OCR, and ClearScan made the kinds of errors a scanner-OCR makes:

- **French accents are dropped** (é→e): e.g. "Releve provisoire des citations et
  des detournements de La Societe du Spectacle." This affects French titles in
  the Notes especially.
- **~12 individual characters failed to map** and appear as `�` (e.g.
  "perform�d" = performed, "fa�ade" = façade). These were left in place rather
  than stripped, since removing them would silently corrupt the words.
- **Occasional split or joined words** ("His tory" = History, "ofChristianity" =
  of Christianity, "liter ally" = literally) and a chapter heading OCR'd as
  "CHAPTER S" (= Chapter 5; the clean heading is supplied from the contents).
- **Epigraph attributions** may break across two blockquote lines.
- A small amount of OCR noise remains in the two-column Notes and Index
  (occasional word/number artifacts). The running thesis text is clean and fully
  readable.

## Contents

1. Front Matter
2. Contents
3. Preface by Ken Knabb
4.–12. Chapters 1–9 (theses 1–221)
13. Notes (keyed to theses)
14. Index (references theses)
