---
book: "Thinking in Systems: A Primer"
author: "Donella H. Meadows"
type: about
---

# About this extraction

Donella H. Meadows, *Thinking in Systems: A Primer* (Chelsea Green, 2008; edited
by Diana Wright, Sustainability Institute). This folder is the immutable
**source layer**: one markdown file per section, each with YAML frontmatter
(`type: source`).

## Provenance — born-digital, but a complex page layout

This PDF is **born-digital** (Adobe InDesign CS3), so text was extracted directly
from the text layer — no OCR. Character fidelity is high: curly quotes, em/en
dashes, and degree signs all carry through. The `fi`/`fl` ligatures were
decomposed, and a masculine-ordinal character used in place of the degree sign
(`ºC` → `°C`) was corrected without full Unicode normalization (which would have
damaged it).

The real challenge was the **layout**. This book interleaves running body text
with **margin notes** (narrow sidebar pull-quotes), **diagrams** (stock-and-flow
diagrams), **time-series graphs**, **boxed examples**, and **footnotes**. A naive
layout-preserving extraction interleaves the margin column line-by-line with the
body and shatters paragraphs. To avoid that, extraction used **content-stream
(authored reading) order**, which keeps the body text contiguous and emits the
margin notes and footers as separate runs.

How the pieces were handled:

- **Body paragraphs** were rebuilt with a *relative* short-last-line heuristic —
  a line ends a paragraph only when it's clearly shorter than its neighbors. This
  adapts to the book's two column widths (full measure, and the narrow measure
  where body text wraps around a margin note), so paragraphs join correctly in
  both. Hyphenated line breaks were de-hyphenated against the book's own
  vocabulary, and spaces lost after punctuation were restored.
- **Section subheads** were injected from the PDF's (detailed) bookmark outline,
  matched against the body by normalized prefix so that headers wrapping across
  two lines (e.g. the twelve leverage points in Chapter Six) are still caught.
  All chapter subheads were recovered.
- **Margin notes** are rendered inline as blockquotes labeled `> **[margin
  note]**`, positioned near the body they accompany.
- **Footnotes** (Meadows's `*` notes, e.g. the recurring "bold = Glossary term")
  are pulled out of the body sentence they interrupted and rendered as `>
  **[footnote]**`.
- **Epigraphs** (chapter-opening quotations ending in an attribution) are
  rendered as blockquotes.
- **Bullet lists** are rendered as Markdown lists.

## Structure

Front matter, two notes (author, editor), Introduction, seven chapters grouped
into three Parts (recorded in each file's `part:` field), Appendix (six
reference sections including the Glossary and Model Equations), Notes,
Bibliography, Editor's Acknowledgments, About the Author, and Index. The
printed→PDF page offset is constant (`printed = PDF − 17`), used for
`source_pages`.

## Caveats

- **Diagrams, stock-and-flow figures, and graphs are omitted** — they are image
  content. Their axis labels and node labels were filtered out as non-prose
  noise, so occasionally a stray fragment may be missing or, rarely, a short
  label may survive. The narrative text is complete; the figures are not.
- **The Appendix "Model Equations"** are mathematical and will be imperfect /
  garbled where notation didn't survive as plain text.
- **The Index** is a two-column reference; its entries are present but run
  together rather than cleanly separated (low fidelity, as is normal for indexes).
- Paragraph boundaries are reconstructed heuristically, so an occasional break
  may fall a sentence early or late. Footnote/endnote reference numbers may
  appear inline.

The running body of all seven chapters and the front/back matter prose is clean
and complete.

## Contents

1. Front Matter
2. Contents
3. A Note from the Author
4. A Note from the Editor
5. Introduction: The System Lens
6.–12. Chapters One–Seven
13. Appendix
14. Notes
15. Bibliography of Systems Resources
16. Editor's Acknowledgments
17. About the Author
18. Index
