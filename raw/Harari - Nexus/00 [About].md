---
book: "Nexus: A Brief History of Information Networks from the Stone Age to AI"
author: "Yuval Noah Harari"
type: about
---

# About — Yuval Noah Harari, *Nexus*

*Nexus: A Brief History of Information Networks from the Stone Age to AI* by Yuval Noah Harari (2024). This folder is a clean Markdown extraction of the full text for reference use.

## Structure

Front matter → Prologue → **Part I: Human Networks** (Chapters 1–5) → **Part II: The Inorganic Network** (Chapters 6–8) → **Part III: Computer Politics** (Chapters 9–11) → Epilogue → Acknowledgments → Notes → Index → About the Author.

One Markdown file per chapter / major section, numbered in reading order. Each chapter's in-text section headings are `##` headings; the Part each chapter belongs to is recorded in the `part:` field of the frontmatter. `source_pages` gives the **PDF page range** (this edition has no printed folios).

## Extraction method & caveats

This is a clean, born-digital PDF (a calibre conversion of the ebook), so the text layer is high quality. Notes on the cleanup:

- **Typography preserved.** Curly quotes, em-dashes (—) and en-dashes (–) are the author's own and were kept; only Unicode normalization (NFC) and removal of invisible junk was applied.
- **Invisible characters removed.** ~1,400 zero-width spaces, non-breaking spaces, and en-spaces (calibre artifacts, common inside URLs and before page numbers) were stripped, as was an "OceanofPDF.com" watermark that appeared at section boundaries.
- **Drop caps rejoined.** Each chapter opens with a large decorative initial that the PDF stores as a separate oversized glyph (e.g. the chapter would otherwise begin "I  t is always…"); these were merged back into their words ("It is always…").
- **In-text section headings** (small caps in the original, e.g. "Majority Dictatorship") were detected by font size and rendered as `##` subheadings in title case.
- **Endnote references** are kept inline in the form `[12]`, matching the numbered entries in *16 Notes.md*.
- **Notes** are grouped by chapter (`###` headings) and numbered as in the book; the ebook's "BACK TO NOTE REFERENCE" navigation links were removed.
- **Index** preserves the original hierarchy (main entries as bullets, subentries indented). Its page numbers refer to the **print edition**, not to this file.
- **Line-break hyphenation** was rejoined with a dictionary check so genuine compounds are preserved (*self-correcting*, *decision-making*, *twenty-first*). A handful of hyphenated URLs in the Notes may retain a stray break.
