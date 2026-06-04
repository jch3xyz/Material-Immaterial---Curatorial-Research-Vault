---
book: "The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power"
author: "Shoshana Zuboff"
type: about
---

# About — Zuboff, *The Age of Surveillance Capitalism*

*The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power* by Shoshana Zuboff (2019). This folder is a clean Markdown extraction of the full text for reference use.

## Structure

Front Matter → The Definition → **Introduction** (Chapter 1) → **Part I: The Foundations of Surveillance Capitalism** (Chapters 2–6) → **Part II: The Advance of Surveillance Capitalism** (Chapters 7–11) → **Part III: Instrumentarian Power for a Third Modernity** (Chapters 12–17) → **Conclusion** (Chapter 18) → Acknowledgments → About the Author → Notes → Index.

One Markdown file per chapter / major section, numbered in reading order. In-chapter section headings (the roman-numeral sections such as "I. The Oldest Questions") are `##` headings. The section a chapter belongs to (Introduction / Part I–III / Conclusion) is recorded in the `part:` field of the frontmatter. `source_pages` gives the **PDF page range** (this edition has no printed folios).

## Extraction method & caveats

This is a clean, born-digital PDF (a calibre conversion of the ebook), so the text layer is high quality. Notes on the cleanup:

- **Typography preserved.** Curly quotes (the book quotes heavily — over 13,000), em-dashes (—), en-dashes (–), and ellipses are the author's own and were kept; only Unicode normalization (NFC) was applied. There was no watermark or zero-width-space contamination.
- **Endnote references.** The book uses superscript note numbers in the text. These were detected by their superscript flag and rendered inline as `[12]`, matching the numbered entries in *23 Notes.md* (1,301 references / 1,301 notes).
- **Epigraphs.** Each chapter opens with an epigraph (a quotation and a `—Attribution`, sometimes with a source line). These are rendered as blockquotes.
- **Block quotations.** Extended quotations set in smaller type within the text are rendered as blockquotes.
- **Enlarged lead words.** Where a chapter's first paragraph opens with an oversized lead word, it was treated as ordinary body text.
- **The Definition** (the book's defining front page) is kept as its own file, with the syllabified headword preserved exactly.
- **Notes** are grouped by chapter (`###` headings) and numbered as in the book.
- **Index** preserves the original run-in style (each main entry with its subentries and cross-references inline); page numbers refer to the print edition.
- **Figures.** Four figures are diagrams/images and could not be captured as text; their captions are retained inline with a marker.
- **Line-break hyphenation** was rejoined with a dictionary check so genuine compounds are preserved (*twenty-first*, *decision-making*, *well-being*).
- **Skipped pages.** The Praise pages and the Detailed Table of Contents were omitted as redundant/promotional.
