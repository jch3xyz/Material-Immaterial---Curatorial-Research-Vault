---
book: "The Age of Spiritual Machines: When Computers Exceed Human Intelligence"
author: "Ray Kurzweil"
type: about
---

# About this extraction

Ray Kurzweil, *The Age of Spiritual Machines: When Computers Exceed Human
Intelligence* (Viking, 1999). This folder is the immutable **source layer**: one
markdown file per section, each with YAML frontmatter (`type: source`).

## Provenance — born-digital, direct text extraction

This PDF is **born-digital** (produced from a Word document via Acrobat
Distiller), so the text was extracted **directly from the text layer** — no OCR.
Fidelity is high.

One systematic conversion quirk was normalized: the Word→PDF process rendered
quotes and hyphens as modifier/prime characters. These were mapped back:
`ʹ` (modifier prime) → `'`, `ʺ` (double prime) → `"`, and `‐` (Unicode hyphen,
U+2010, used throughout) → `-` (ASCII), with curly quotes also normalized to
straight. The ASCII-hyphen fix was necessary for de-hyphenation to work.
Verified: **zero residual prime/hyphen artifacts** in the output.

## Structure

Sectioning follows the PDF's own bookmarks with exact page boundaries: front
matter, A Note to the Reader, Contents, Acknowledgements, Prologue, the twelve
chapters (Ch. 8–12 are the forward-looking "1999 / 2009 / 2019 / 2029 / 2099"
chapters), Epilogue, Time Line, "How To Build an Intelligent Machine," Glossary,
Notes, Suggested Readings, and Web Links.

## How the text was reconstructed

- **Running headers** and **page numbers** were detected and removed; chapter
  **mastheads** (chapter number, title, subtitle) stripped, with the body start
  located positively.
- **Paragraphs** rebuilt from first-line indentation *and* blank-line breaks.
  The latter matters here because the book's signature **"Molly" dialogues**
  (Kurzweil's conversations with a future interlocutor, typeset in ALL CAPS for
  the future voice) are blank-line separated — each utterance is preserved as
  its own line/paragraph, and the all-caps styling is kept as in the book.
- **De-hyphenation** uses the book's own vocabulary plus a dictionary backstop.
- **Epigraphs** (chapter-opening quotations with their attributions) are
  preserved as paragraphs.
- **Bullet lists** (`▲`, `▪`, `•` in the source) are rendered as markdown list
  items.
- **Glossary, Notes, Suggested Readings, Time Line, Web Links** are rendered as
  per-entry blocks (hanging-indent / blank-line entry detection).

## Caveats

- **The Index is omitted** — it is absent from the source PDF (the bookmark
  itself is labeled "Index [omitted]"), so there is no index file.
- **Figures/graphs.** The book is chart-heavy (exponential-growth curves, the
  "knee of the curve," timeline graphics). Text inside figures (axis labels like
  "INCREASING CHAOS," data callouts) is not reconstructable as prose and may
  appear as occasional stray short lines within chapters; a few may be marked as
  `###`. The running prose is unaffected.
- **Notes** are grouped per numbered note; the per-chapter dividers within the
  Notes section appear inline rather than as headings.
- Otherwise fidelity is high — this is a clean text-layer extraction, not OCR.

## Contents

1. Front Matter
2. A Note to the Reader
3. Contents
4. Acknowledgements
5. Prologue: An Inexorable Emergence
6.–17. Chapters 1–12
18. Epilogue: The Rest of the Universe Revisited
19. Time Line
20. How To Build an Intelligent Machine in Three Easy Paradigms
21. Glossary
22. Notes
23. Suggested Readings
24. Web Links
