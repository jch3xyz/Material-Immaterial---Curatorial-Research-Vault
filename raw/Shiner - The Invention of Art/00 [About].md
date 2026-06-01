---
book: "The Invention of Art: A Cultural History"
author: "Larry Shiner"
publisher: "University of Chicago Press"
year: 2001
type: about
---

# About this extraction

This folder is the immutable **`raw/` source layer** for Larry Shiner's *The Invention of Art: A Cultural History* (University of Chicago Press, 2001) — one clean Markdown file per chapter/section, generated from a scanned PDF (Internet Archive copy with an invisible OCR text layer). It is intended as the faithful foundation beneath any later LLM-wiki / notes layer, so the text here is kept close to the source and is not interpreted or rewritten.

## Structure

The book is organized into a Preface, an Introduction, five Parts (each opening with an Overview), fifteen Chapters, a Conclusion, and the back-matter Notes and References. Files are numbered to sort in reading order:

- `01 Preface` → `02 Introduction`
- `03 Part I Overview` and `04`–`07` (Chapters 1–4)
- `08 Part II Overview` and `09`–`11` (Chapters 5–7)
- `12 Part III Overview` and `13`–`14` (Chapters 8–9)
- `15 Part IV Overview` and `16`–`18` (Chapters 10–12)
- `19 Part V Overview` and `20`–`22` (Chapters 13–15)
- `23 Conclusion` → `24 Notes` → `25 References`

Each file carries YAML frontmatter (book, author, part, chapter, `source_pages` as the book's own printed page numbers, and `type: source`) followed by an `# H1` heading. In-chapter section breaks from the table of contents are promoted to `## subheadings`. The endnotes in `24 Notes` are grouped under `## Chapter N: Title` headings exactly as the book groups them (Chapters 11 and 13 have no endnotes, so they do not appear there). References preserve the repeated-author em-dash (`———.`) convention.

## What was cleaned

Reflowed line-wrapped prose into paragraphs; rejoined hyphenated word-breaks (while preserving real compounds such as "religious-political" and "sixteenth-century"); normalized ligatures and smart quotes; removed running heads, page numbers, and the chapter/part opening label blocks; repaired drop-capitals; and separated figure captions and the Notes/References apparatus.

## Caveats and known limitations

- **OCR transcription errors are left as-is.** The underlying scan has occasional uncorrectable character errors — e.g. lost apostrophes ("Seurat s"), a misread word here and there ("Vas" for "was"), dropped diacritics, and garbled inline citations (e.g. "(i990> 4)"). These were deliberately *not* second-guessed, to keep the layer faithful rather than silently "corrected."
- **A few drop-capitals are imperfect.** Most were repaired cleanly. Two known exceptions: the **Introduction** opens "oday you can call…" (the large initial "T" was mis-scanned and a stray "X" landed a few words later), and the **Part II Overview** opens "H. Plumb…" (the initial "J" of "J. H. Plumb" was lost with the drop-cap).
- **Figure-internal text is flagged, not transcribed.** Where a figure, diagram, or table OCR'd into unreadable fragments (most notably the Encyclopédie "tree of knowledge" diagram in Chapter 5), the content is replaced with the marker `*[symbol/figure content not captured in text extraction]*`. A handful of short caption fragments (artwork credits, dimensions, diagram labels) survive as their own short lines.
- **The Index was not extracted** (PDF pp. 357–378). It is page-locator noise with little value in a reading/notes layer.
- **Printed page numbers** are recorded in each file's `source_pages` from the numbers actually printed in the book (roman numerals for the Preface, arabic thereafter).
