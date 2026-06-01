---
book: "The Transparency Society"
author: "Byung-Chul Han"
translator: "Erik Butler"
type: about
---

# About this extraction

Byung-Chul Han, *The Transparency Society* (Stanford Briefs / Stanford
University Press, 2015), translated by Erik Butler from *Transparenzgesellschaft*
(Matthes & Seitz Berlin, 2012). This folder is the immutable **source layer**:
one markdown file per section, each with YAML frontmatter (`type: source`).

## Provenance — born-digital, direct text extraction

This PDF is **born-digital** (Adobe InDesign CS6, embedded Garamond and
News Gothic fonts with Unicode), so the text was extracted directly from the
text layer — no OCR. Character fidelity is high: curly quotation marks,
em/en dashes, and German diacritics (ö, ü, ä, é, Ž) all carry through cleanly.

Cleanup applied: Unicode normalization (NFKC) collapsed the en/thin spaces used
in display type; soft hyphens were removed and hard line-break hyphens
de-hyphenated against the book's own vocabulary; and paragraphs were rebuilt
from the layout. Verified: zero residual soft hyphens, stray page numbers, or
broken hyphenations.

## Structure

The PDF's bookmarks gave exact section boundaries. The printed→PDF page offset
is constant: **printed = PDF − 13** (used for `source_pages`). Sections: front
matter, Contents, Preface, the nine chapters ("The Society of Positivity"
through "The Society of Control"), and Notes. The Peter Handke epigraph is
included in the Front Matter.

Two layout features needed special handling:

- **Letterspaced headers.** Running heads and chapter titles are set in
  letter-spaced caps (`T H E  S O CI E T Y  OF  POS ITIVITY`). These were
  detected by removing spacing and matched against the known titles, then
  stripped; clean `#` headings are supplied instead. (A few letterspaced
  display lines on the title page were dropped for the same reason.)
- **Block quotes.** Han quotes heavily from Humboldt, Hegel, Simmel, Benjamin,
  Barthes, Baudrillard, Agamben, Lacan, Heidegger, Plato, Rousseau, and others.
  The set-off extracts are indented in the source and are rendered here as
  Markdown blockquotes (`>`). Quotations that run inline within Han's prose are
  left in place, in the paragraph text.

The **Notes** are endnotes grouped by chapter: each `### Chapter` divider is
followed by its numbered notes (`**1.** …`), and the opening epigraph source is
labeled `**Epigraph**`.

## Caveats

- **Endnote reference numbers appear inline** in the body (e.g. "…a
  divergence.²" renders as "…a divergence.2"), since the superscript markers
  can't be reliably separated from surrounding text. The note targets are
  preserved in the Notes file.
- Otherwise fidelity is high — this is a clean text-layer extraction of a short,
  carefully typeset book.

## Contents

1. Front Matter (with epigraph)
2. Contents
3. Preface
4.–12. The nine "Society of …" chapters
13. Notes
