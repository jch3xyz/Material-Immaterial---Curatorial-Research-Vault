---
book: "The Singularity Is Near: When Humans Transcend Biology"
author: "Ray Kurzweil"
type: about
---

# About this extraction

Ray Kurzweil, *The Singularity Is Near: When Humans Transcend Biology* (Viking,
2005). This folder is the immutable **source layer**: one markdown file per
section, each with YAML frontmatter (`type: source`).

## Provenance — born-digital (from Microsoft Word), direct text extraction

This PDF is **born-digital** with embedded fonts, so the text was extracted
**directly from the text layer** — no OCR. A note appended to the last page of
the source confirms it was "formatted in Microsoft Word," which explains the
equation/symbol handling below.

## Character handling

The book's equations, math operators, and bullets were set in Symbol/Wingdings
fonts, which extract as Private Use Area (PUA) code points. These were mapped:
the bullet `` (U+F0B7, ×225) → a markdown list item; `=`, `−`, `×` recovered
from their Symbol code points; and the remaining PUA glyphs (equation
bracket-builders and other Symbol pieces that don't have clean Unicode
equivalents) were stripped. Verified: **zero residual PUA characters** in the
output.

Other reconstruction:

- **Letter-spaced headings.** Chapter heads are letter-spaced in the source
  (`C H A P T E R  ON E`); these were normalized for detection and replaced with
  clean `#` headings.
- **Drop caps.** Each chapter/section opens with a large drop-cap letter on its
  own line (`A` / `t the…`); these were rejoined to the following word
  (→ "At the…", "I am…").
- **Running headers/page numbers** (`THE SINGULARITY IS NEAR`, page numbers) were
  stripped. Verified: zero residual headers or stray page-number lines.
- **De-hyphenation** uses the book's own vocabulary plus a dictionary backstop;
  paragraphs were rebuilt from indentation and blank lines.

## Structure

The PDF has no bookmarks, so sectioning was derived from the table of contents
and confirmed by locating each chapter's opening in the body. The printed→PDF
page offset is a constant **printed = PDF + 2**, used for `source_pages`.

Sections: front matter, Contents, Acknowledgments, Prologue, the nine chapters
(The Six Epochs → Response to Critics), Epilogue, Resources and Contact
Information, the Appendix (The Law of Accelerating Returns Revisited), and Notes.
Kurzweil's signature **dialogues** (Molly 2004, Molly 2104, Ned Ludd, and others)
are preserved inline as paragraphs. The **Notes are endnotes** grouped by chapter
— the `Chapter N: Title` dividers render as `###`, and each numbered note is its
own entry.

## Caveats

- **There is no Index.** This Word-document version of the book omits it (as does
  the similarly-sourced *Age of Spiritual Machines*), so there is no index file.
- **Equations, tables, and charts.** This is a famously chart- and equation-heavy
  book. Simple inline math is readable (e.g. "V = c1W", "6.6 × 10^14"), but
  complex MathType formulas, large bracketed expressions, and data tables do not
  reconstruct as clean text — expect garbled fragments in the
  Law-of-Accelerating-Returns passages and the Appendix. Figure/chart text may
  also surface as occasional stray lines. The running prose is unaffected.
- **Endnote reference numbers** appear inline in the body (e.g. "…every
  decade.28"), as they cannot be reliably distinguished from ordinary numbers.
- **Notes** are split per numbered note; a few notes that contain their own
  internal enumerations may over-split.
- Otherwise fidelity is high — this is a clean text-layer extraction, not OCR.

## Contents

1. Front Matter
2. Contents
3. Acknowledgments
4. Prologue: The Power of Ideas
5.–13. Chapters 1–9
14. Epilogue
15. Resources and Contact Information
16. Appendix: The Law of Accelerating Returns Revisited
17. Notes
