---
book: "Beyond Modern Sculpture: The Effects of Science and Technology on the Sculpture of This Century"
author: "Jack Burnham"
type: about
---

# About — Jack Burnham, *Beyond Modern Sculpture*

*Beyond Modern Sculpture: The Effects of Science and Technology on the Sculpture of This Century* by Jack Burnham (New York: George Braziller, 1968). This folder is a clean Markdown extraction of the full text for reference use.

## Structure

The book runs: front matter (Acknowledgments, A Key to the Reference Bibliography, Preface) → Introduction → **Part One: Sculpture as Object** (Chapters 1–4) → **Part Two: Sculpture as System** (Chapters 5–8) → Reference Bibliography → List of Illustrations → Index.

One Markdown file per chapter / major section, numbered in reading order. Each chapter's internal sections are `##` headings (taken from the book's table of contents); the Part each chapter belongs to is recorded in the `part:` field of the frontmatter. `source_pages` gives the printed book page range (printed page = PDF page − 14).

## Extraction method & caveats

This PDF is a **scanned copy with an OCR'd text layer** (produced by Readiris), not a born-digital file. The extraction reflows the OCR text into paragraphs from page geometry and the table-of-contents structure. Specific notes:

- **OCR character errors.** Occasional misreadings survive, mostly in proper names and foreign-language titles (e.g. *Duchamp* may appear as "Ducharnp", *Dubuffet* as "Dubutfet"). These were left **uncorrected** — automated "fixing" of a scan risks introducing worse errors. Treat exact spellings of names/titles as approximate.
- **Ligatures.** The OCR already mapped ligatures (ﬁ, ﬂ, …) to plain ASCII, so none remain.
- **Em-dashes.** In the scan, em-dashes were rendered as ordinary single hyphens with no surrounding spaces (e.g. "technics-to"). These were left as-is: real hyphenated compounds (*three-quarters*, *free-standing*) are indistinguishable from them by spelling, so restoring em-dashes would corrupt genuine compounds. Only unambiguous double hyphens (`--`) were converted to em-dashes.
- **Line-break hyphenation** was rejoined using a dictionary + the book's own vocabulary; genuine compounds (*avant-garde*, *self-conscious*, *socialist-feminism*) are preserved, while split words (*con-/sidered* → *considered*) are merged.
- A few **verbatim OCR artifacts** remain where the scan's text layer itself contained a stray hyphen-plus-space (e.g. "in- the", "pro- logue"). Suspended compounds like "two- and three-dimensional" are intentional.
- **Illustrations.** The book's photographic plates are images and are not captured as text. Their captions leak into the OCR as short fragments; these were removed from the chapter bodies, but the **complete caption list is preserved** in *12 List of Illustrations.md*. One run of un-extractable symbol noise is flagged inline as `*[symbol/figure content not captured in text extraction]*`.
- **Page folios** (printed page numbers) were stripped, including ones that the OCR merged into the running text.
- **Bibliography & Index** were originally two-column; they have been de-interleaved into single reading order. The bibliography is grouped by chapter (`###` headings) as in the original; a repeated author (ditto) is shown as `———`.
