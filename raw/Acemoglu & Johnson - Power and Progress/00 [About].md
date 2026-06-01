---
book: "Power and Progress: Our Thousand-Year Struggle Over Technology and Prosperity"
author: "Daron Acemoglu and Simon Johnson"
type: about
---

# About — Acemoglu & Johnson, *Power and Progress*

*Power and Progress: Our Thousand-Year Struggle Over Technology and Prosperity* by Daron Acemoglu and Simon Johnson (2023). This folder is a clean Markdown extraction of the full text for reference use.

## Structure

Front matter → Prologue → Chapters 1–11 → Photos → Bibliographic Essay → References → Acknowledgments → Image Credits → About the Authors.

One Markdown file per chapter / major section, numbered in reading order. Each chapter's in-text section headings are `##` headings. `source_pages` gives the **PDF page range** (this edition has no printed folios). The book has no Parts — it is a straight run of eleven chapters.

## Extraction method & caveats

This is a clean, born-digital PDF (a calibre conversion of the ebook), so the text layer is high quality. Notes on the cleanup:

- **Typography preserved.** Curly quotes, em-dashes (—), en-dashes (–), the figure-dash (‒, used for year ranges like 1882‒1885), and ellipses are the authors' own and were kept; only Unicode normalization (NFC) and removal of invisible junk was applied. There was no watermark and no zero-width-space contamination in this file.
- **Epigraphs.** Each chapter opens with one or more epigraphs (a quotation and a `—Attribution`). These are rendered as Markdown blockquotes. Attribution lines that wrap across several lines — and the occasional editorial note such as "(italics in original)" — are folded into the attribution.
- **Section headings.** In-chapter section titles (centered, e.g. "The Bandwagon of Progress") were detected by font size and rendered as `##`. The Bibliographic Essay's two part-headings ("Part I…", "Part II…") are likewise `##`.
- **Enlarged lead words.** Each chapter's first paragraph opens with an oversized lead word in the source; this was treated as ordinary body text (no information lost).
- **Bulleted lists** in the text are preserved as Markdown list items.
- **References** are a single alphabetical author–date list (hanging indent in the original), rendered here as one entry per list item.
- **Photos** is a photographic insert; the images themselves are not captured. The numbered captions are listed in *14 Photos.md*.
- **Line-break hyphenation** was rejoined with a dictionary check so genuine compounds are preserved (*nineteenth-century*, *decision-making*, *well-being*).
- **Skipped pages.** Three back-matter promotional pages (Discover More, Also by…, Praise for…) were omitted as non-content.
