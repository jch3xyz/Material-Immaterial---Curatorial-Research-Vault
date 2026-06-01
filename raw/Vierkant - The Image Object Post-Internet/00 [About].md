---
book: "The Image Object Post-Internet"
author: "Artie Vierkant"
year: "2010"
type: about
---

# About — Vierkant, *The Image Object Post-Internet*

*The Image Object Post-Internet* by Artie Vierkant (2010) — a self-published PDF that functions as an artist's statement and critique of art, objects, and images in "Post-Internet" culture. This folder is a clean Markdown extraction of the full text for reference use.

## Structure

Front Matter (title, author bio, links) → Preface ("Being Post-Internet") → the main essay ("The Image Object Post-Internet"). One Markdown file per section. `source_pages` gives the PDF page numbers. This is a short document (11 pages) and a single continuous essay rather than a chaptered book.

## Extraction method & caveats

The source is a born-digital PDF authored in NeoOffice/Writer, so the text layer is clean. Notes on the cleanup:

- **Footnotes.** The document uses page-bottom footnotes. In the Preface these are marked with symbol glyphs (⊘, ⊖, ⊗); in the main essay they are numbered 1–24 continuously. Footnote reference markers are kept inline in the body (numbered ones as `[1]`, symbol ones as the original glyph), and the footnotes themselves are collected into a `## Notes` section at the end of each file, with URLs preserved.
- **Section dividers.** The author's `//` section breaks are preserved as literal `//` lines, as in the original.
- **Figures.** Two embedded screenshots (the "Open questions." and "Deprecated tags" images) cannot be represented as text; each is marked `*[figure not captured in text extraction]*` followed by the author's italic caption, placed where it appears in the flow.
- **Typography.** Curly quotes, em-dashes, and ellipses were preserved; `fi`/`fl` ligatures were expanded to plain letters; Unicode was normalized (NFC). Justified-text double spaces were collapsed.
- Paragraphs (which carry no first-line indent in the source) were reconstructed from vertical spacing.
