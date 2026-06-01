---
book: "The Design of Everyday Things: Revised and Expanded Edition"
author: "Don Norman"
type: about
---

# About this extraction

Don Norman, *The Design of Everyday Things: Revised and Expanded Edition*
(Basic Books, 2013). This folder is the immutable **source layer**: one markdown
file per section, each with YAML frontmatter (`type: source`).

## Provenance — born-digital, direct text extraction

This PDF is **born-digital** (Adobe InDesign CS6 → Acrobat Distiller), so the
text was extracted **directly from the text layer** — no OCR. Fidelity is high.

Character normalization applied: `º` (masculine ordinal, used as a degree sign
in temperatures like `5ºF`) → `°`; the Unicode hyphen `‐` (U+2010) → ASCII `-`
(needed for de-hyphenation); `―` (horizontal bar) → em dash. Curly quotation
marks, which were already correct Unicode, were left as-is. No NFKC pass was used
(there are no ligatures to fix, and NFKC would have wrongly turned `º` into "o").
The InDesign print-production footer that runs on every page
(`9780465050659-text.indd …`) was stripped. Verified: **zero print-artifact
junk, zero residual `º`/prime characters, zero stray page-number lines** in the
output.

## Structure

Sectioning follows the PDF's own bookmarks with exact page boundaries: front
matter, Contents, Preface to the Revised Edition, the seven chapters,
Acknowledgments, General Readings and Notes, References, and Index.

Within each chapter, **section headings are injected from the book's own
bookmark outline** (so they are complete and correctly cased), and an additional
heuristic catches the all-caps sub-subheadings (e.g. the AFFORDANCES /
SIGNIFIERS / MAPPING / FEEDBACK / CONCEPTUAL MODELS principles). Both render as
`###`.

## How the text was reconstructed

- **Running headers**, **page numbers**, and the **InDesign print footer** were
  detected and removed; chapter **mastheads** (chapter number + multi-line title)
  stripped, with the body start located positively.
- **Paragraphs** rebuilt from first-line indentation and blank-line breaks;
  **de-hyphenation** uses the book's own vocabulary plus a dictionary backstop.
- **Letter-spaced figure labels** ("F IGU R E 1 .1 .") are collapsed to
  "FIGURE 1.1."; figure captions are kept as paragraphs.
- **Bulleted lists** (`•` in the source) render as markdown list items.
- **References** are hanging-indent entries (entry indent vs. continuation indent
  detected after excluding headers/footers).
- **The Index is two-column**; because the column layout scrambles under layout
  extraction, it was read in raw column order (column 1 top-to-bottom, then
  column 2) and split into entries heuristically.

## Caveats

- **Index fidelity is moderate.** Reading order is correct, but sub-entries
  (originally indented under a main term) are merged into their main entry rather
  than kept as a hierarchy, and an occasional capitalized continuation line may
  start a spurious entry. Good enough to look up a term and its page numbers, not
  a faithful reproduction of the index's typographic structure.
- **Figures/captions.** The book is figure-heavy; figure-caption text is kept as
  prose paragraphs, and a small amount of in-figure label text may appear as
  stray lines. The running prose is unaffected.
- **Subheading detection** is partly heuristic; a handful of short prose lines
  could be marked as `###`.
- **Original typos are preserved** (e.g. "collegues" in the Figure 1.1 caption).
- Otherwise fidelity is high — this is a clean text-layer extraction, not OCR.

## Contents

1. Front Matter
2. Contents
3. Preface to the Revised Edition
4.–10. Chapters 1–7
11. Acknowledgments
12. General Readings and Notes
13. References
14. Index
