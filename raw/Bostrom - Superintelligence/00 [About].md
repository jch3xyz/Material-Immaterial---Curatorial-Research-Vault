---
book: "Superintelligence: Paths, Dangers, Strategies"
author: "Nick Bostrom"
publisher: "Oxford University Press"
year: 2014
isbn: "978-0-19-967811-2"
type: about
---

# About this extraction

Nick Bostrom, *Superintelligence: Paths, Dangers, Strategies* (Oxford University
Press, First Edition 2014; ISBN 978-0-19-967811-2). This folder is the immutable
**source layer**: one markdown file per section, each with YAML frontmatter
(`type: source`).

**This book has NOT been ingested into the note graph** — it is present as raw
source only, awaiting a future ingest pass.

## Provenance — born-digital PDF, converted with markitdown (pdfminer text layer)

The source PDF is **born-digital** with an embedded text layer (a typeset OUP
edition, not a scan), so the text was extracted **directly from that text layer —
no OCR**. The conversion was performed with the **markitdown** tool (Microsoft
`markitdown`, which uses pdfminer for PDF text), producing a single continuous
markdown stream that was then split and cleaned into the per-section files here.

This is a **different extraction path** from the vault's earlier raw books (which
were produced with custom PDF-geometry scripts that rebuilt paragraphs from
indentation). markitdown/pdfminer preserves the *visual line breaks* of the page
but not paragraph indentation, so the paragraph structure here was reconstructed
heuristically (see below).

## Cleanup applied (deterministic, reversible)

- **Sectioning.** Split into one file per section using the printed Table of
  Contents: front matter, the 15 chapters, Notes, Bibliography, Index.
- **Running headers/footers stripped.** Every page carries a running head in one
  of two forms — `PAGE | CHAPTER TITLE` (verso) and `SECTION TITLE | PAGE`
  (recto); both were removed, along with bare page-number lines.
- **De-hyphenation.** Line-break (soft) hyphens were rejoined. In prose this is
  implicit in the reflow; in the reference lists (Bibliography, Index) a word
  broken across a line was rejoined **only when the continuation began lowercase**,
  so genuine compounds that happen to break at their hyphen (e.g.
  "Anglo-American") keep the hyphen. Verified: **0** residual end-of-line hyphens
  in the reflowed chapters/notes.
- **Paragraph reflow (chapters, Preface, Acknowledgments, Notes).** Because
  paragraph indentation is not recoverable from the text layer, paragraph breaks
  were reconstructed with a heuristic that is reliable for **justified** body text:
  a line that ends a sentence *and* is noticeably shorter than the full measure
  marks a paragraph end (mid-paragraph lines in justified text are stretched to
  full width, so short lines are almost always paragraph-final). A small number of
  paragraph boundaries may be merged or split; **no words are changed, added, or
  dropped**, so the reflow is fully reversible.
- **Sub-headings.** Section headings (A-heads) and their italic sub-heads
  (C-heads) were matched against the printed TOC and marked `##` / `###`. Two of
  the longest headings — "Existential catastrophe as the default outcome of an
  intelligence explosion" (Ch. 8) and one Ch. 5 head — wrapped across two source
  lines and so were left unmarked (their text is present as ordinary lines).
- **Figure furniture dropped.** Figure panel labels ("(a)", "(b) 45"), axis
  tick/data rows, and clearly rotated axis-label tokens were removed. Figure
  *captions* are real authorial text and were kept, isolated into their own
  paragraphs where detected.

## Page numbering

The PDF has an unnumbered cover plus front matter, then two numbering runs. The
offsets are: **roman** front matter `printed = PDF − 1` (Preface p. vii = PDF
p. 8); **arabic** body `printed = PDF − 17` (Chapter 1 p. 1 = PDF p. 18, the
count restarting at the body). Each file's `source_pages` uses the **printed**
range taken from the Table of Contents.

## Structure

- **Front matter:** title page + copyright + *The Unfinished Fable of the
  Sparrows* (the book's dedicatory parable) → `01`; Preface → `02`;
  Acknowledgments → `03`; Contents → `04`; Lists of Figures, Tables, and Boxes →
  `05`.
- **Body:** 15 chapters (`06`–`20`), *Past developments and present capabilities*
  → *Crunch time*.
- **Back matter:** Notes (endnotes, grouped by chapter — the chapter dividers
  render as `## Notes to Chapter N: …`) → `21`; Bibliography → `22`; Index → `23`.

## Caveats (pdfminer text-layer artifacts — no OCR errors, but layout noise)

- **Figures.** The book has 14 figures. A figure's caption, and occasionally a
  fragment of its axis labels, may surface **inline within a nearby paragraph**;
  rotated (vertical) axis labels can appear reversed (e.g. "PDG" = *GDP* set on
  its side). Captions were isolated where detected, but some fragments remain.
  This is the same "figure/chart text may surface as stray fragments" limitation
  noted for the vault's other born-digital books.
- **Inline endnote numbers.** Endnote reference markers appear inline in the body
  (e.g. "…the timeline of future advances.1"), since they cannot be reliably told
  apart from ordinary numbers.
- **Small caps.** Small-capital text renders lowercase — e.g. "5000 bc".
- **Tables and Boxes.** The 13 tables and 13 boxes are preserved as text, but
  tabular column layout does not reconstruct — table cell values may run together
  on a line. Box prose (e.g. Box 8, "Anthropic capture") reads normally.
- **Bibliography.** Entries that span more than one line remain wrapped (entry
  boundaries are not recoverable from the text layer); a few line-break hyphens
  inside URLs or compounds may have been merged when rejoined.
- **Index.** Two-column and alphabetical; column order is imperfectly recovered,
  so entries and their page locators can interleave, and the final fragment
  rendered as a stray markdown table. Kept as-is for reference.

## Contents

1. Front Matter (title, copyright, *The Unfinished Fable of the Sparrows*)
2. Preface
3. Acknowledgments
4. Contents
5. Lists of Figures, Tables, and Boxes
6.–20. Chapters 1–15
21. Notes (endnotes, keyed by chapter)
22. Bibliography
23. Index
