---
book: "Telematic Embrace: Visionary Theories of Art, Technology, and Consciousness"
author: "Roy Ascott"
editor: "Edward A. Shanken"
type: about
---

# About this extraction

Roy Ascott, *Telematic Embrace: Visionary Theories of Art, Technology, and
Consciousness*, edited and with an essay by Edward A. Shanken (University of
California Press, 2003). This folder is the immutable **source layer**: one
markdown file per section, each with YAML frontmatter (`type: source`).

## Provenance — born-digital, direct text extraction

Unlike the scanned books in this vault, this PDF is **born-digital** (Acrobat
Distiller, with fully embedded Janson/Interstate fonts). The text was extracted
**directly from the PDF's text layer** — no OCR — so fidelity is high.

One systematic encoding issue was repaired: the embedded fonts' f-ligatures
extract as wrong characters. These were mapped back before normalization:
`ª` → `ff` (e.g. "Diªusion" → "Diffusion"), `‹` → `ffi` ("a‹nities" →
"affinities"), `›` → `ffl` ("Loe›er" → "Loeffler"); the `fi`/`fl` ligatures were
NFKC-normalized. Verified: **zero residual ligature artifacts** in the output.

## Structure

Sectioning follows the book's own bookmarks, with exact page boundaries:
front matter, list of illustrations, preface, Shanken's long introductory essay
"From Cybernetics to Telematics," then **Ascott's 28 numbered essays** (each its
own file, with its year and — where it differs from the chapter title — its
original publication title in the frontmatter), four appendices, References, and
the Index.

## How the text was reconstructed

- **Running headers** (essay title, book title, author, "CHAPTER N") and
  **page numbers** (including the two-per-page footers) were detected by
  position/match and removed.
- **Mastheads** on chapter-opening pages (chapter number, title, year, original
  title) were stripped, with the year and original title harvested into
  frontmatter; the body start was located positively (first prose line).
- **Paragraphs** rebuilt from first-line indentation; **de-hyphenation** uses
  the book's own vocabulary plus a dictionary backstop (rejoin splits, keep
  attested compounds, split accidental hyphens after function words).
- **Subheadings** within essays are detected (short line at the margin, no
  terminal punctuation, followed by a prose paragraph) and rendered as `###`.
- **Originally-published** citations are preserved as italic notes.
- **References** and **Index** use hanging-indent entry detection; the four
  **appendices** (appointments, publications, projects, conferences) are
  rendered as line lists.

## Caveats

- **Chapter 2, "Statement from Control" (1966),** occupies a single source page
  that contains only the chapter title and publication citation — there is no
  body text in the source. The file notes this.
- **Subheading detection** is heuristic; a handful of short prose lines may be
  marked as `###`, and in the densely-sectioned "Ars Electronica Center
  Datapool" proposal some section labels vs. list entries are imperfect.
- **source_pages** gives the book's printed page numbers (detected from the page
  footers).
- Otherwise fidelity is high — this is a clean text-layer extraction, not OCR.

## Contents

1. Front Matter
2. Illustrations
3. Preface and Acknowledgments
4. From Cybernetics to Telematics — Edward A. Shanken's introduction
5.–32. Ascott's 28 essays (chapters 1–28)
33.–36. Appendices I–IV
37. References
38. Index
