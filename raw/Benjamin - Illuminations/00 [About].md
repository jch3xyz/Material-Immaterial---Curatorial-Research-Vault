---
book: "Illuminations: Essays and Reflections"
author: "Walter Benjamin"
editor: "Hannah Arendt"
translator: "Harry Zohn"
type: about
---

# About this extraction

Walter Benjamin, *Illuminations: Essays and Reflections*. Edited and with an
introduction by Hannah Arendt; translated by Harry Zohn; preface by Leon
Wieseltier. Schocken Books, New York (2007 paperback; English translation
originally 1968). This folder is the immutable **source layer**: one markdown
file per section, each with YAML frontmatter (`type: source`).

## Provenance — re-OCR'd from the page scans

The source PDF was a **scanned book** carrying a corrupt 2009 Adobe "Paper
Capture" OCR text layer (character substitutions such as "too luuch",
"modernlifej", "rIe"). That layer was discarded. Every page was **re-OCR'd from
the native page images** with Tesseract 5 (page-segmentation mode 3, languages
`eng+fra+deu` to handle the French and German quotations in the Baudelaire,
Proust, and Kafka material). The cleaned text was then assembled using each
page's word **geometry** (from Tesseract TSV), not the raw text stream.

## How the text was reconstructed

- **Page mapping.** Printed pages map to PDF pages by a constant offset
  (printed arabic page + 9 = PDF page; e.g. the Introduction's printed p. 1 is
  PDF p. 10). Every section boundary was independently confirmed by matching the
  display-size title on its opening page. `source_pages` in each file gives the
  **printed** page range.
- **Running headers** (the verso "Illuminations" and the recto essay title) and
  **printed page numbers** were detected by position/size and removed.
- **Paragraphs** were rebuilt from first-line indentation (≈85 px against each
  page's body-left margin); text flows correctly across page breaks.
- **De-hyphenation** used a three-way rule driven by the book's own vocabulary
  plus an English dictionary backstop: line-break splits are rejoined
  (*philoso-phy* → *philosophy*), attested compounds keep their hyphen
  (*far-reaching*, *high-minded*), and accidental hyphens after function words
  are split (*the-art* → *the art*). Across the book: **~1,584 rejoined,
  7 hyphens kept** as compounds, plus mid-line splits resolved in the index and
  notes.
- **Section dividers** (the roman numerals I, II, III … and the Theses
  appendices A, B) are rendered as `###` headings. They are numbered from each
  divider's own reading, corrected against the running sequence, so a divider
  that OCR'd illegibly is **skipped (leaving a gap) rather than mislabeled** —
  no numbering drift, nothing fabricated. ~67 dividers recovered.
- **Footnotes.** The page-bottom symbol notes (`*`, `†`, `‡`) are collected per
  section into a `## Footnotes (page-bottom notes)` block at the end of the
  file, each anchored to its printed page; markers are renormalized in order.
  The longer end-of-essay notes (the Introduction's and the Work of Art's
  `## Notes` sections) are kept inline where they appear. ~40 footnotes total.

## Caveats

- **Residual OCR tail.** Re-OCR is much cleaner than the original layer but not
  perfect. Expect occasional character errors (e.g. *Fxperience* for
  *Experience*, *Jooks* for *looks*), and a few em-dashes that scanned as
  hyphens (e.g. *ambitions-though*). These were **not** hand-corrected, to avoid
  introducing new errors; they are sparse and do not affect readability.
- **A few section dividers are missing** (clean gaps in the roman sequence,
  e.g. the Storyteller skips IX and XI) where the numeral OCR'd illegibly. The
  surrounding prose is intact; only the divider line is absent.
- **Block quotations** are rendered as ordinary paragraphs (Benjamin's quotes
  are mostly inline with quotation marks in this edition).
- **Front Matter** (`01`) transcribes the title page, publication/copyright
  data, and contents line-by-line; it is provenance, not prose.
- **Index of Names** (`15`) is included for completeness but is **low-fidelity**:
  it is a dense, number-heavy hanging-indent list and OCRs noisily. Entry/
  page-number digits should not be trusted without checking the scan.

## Contents

1. Front Matter
2. Preface — *Leon Wieseltier*
3. Introduction: Walter Benjamin, 1892–1940 — *Hannah Arendt* (parts: The Hunchback / The Dark Times / The Pearl Diver)
4. Unpacking My Library
5. The Task of the Translator
6. The Storyteller
7. Franz Kafka
8. Some Reflections on Kafka
9. What Is Epic Theater?
10. On Some Motifs in Baudelaire
11. The Image of Proust
12. The Work of Art in the Age of Mechanical Reproduction
13. Theses on the Philosophy of History
14. Editor's Note — *Hannah Arendt*
15. Index of Names
