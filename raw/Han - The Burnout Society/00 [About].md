---
book: "The Burnout Society"
author: "Byung-Chul Han"
translator: "Erik Butler"
type: about
---

# About — Han, *The Burnout Society*

*The Burnout Society* (*Müdigkeitsgesellschaft*, 2010) by Byung-Chul Han, translated by Erik Butler (Stanford Briefs / Stanford University Press, 2015). This folder is a clean Markdown extraction of the full text for reference use.

## Structure

A short book of eight essay-chapters followed by Notes: Neuronal Power → Beyond Disciplinary Society → Profound Boredom → Vita Activa → The Pedagogy of Seeing → The Bartleby Case → The Society of Tiredness → Burnout Society → Notes. One Markdown file per chapter, numbered in reading order, plus front matter. There are no parts and no numbered chapters; the essay titles are the `#` headings. `source_pages` gives the book's **printed page numbers** (this edition has real printed folios).

## Extraction method & caveats

Unlike the calibre-converted ebooks elsewhere in this vault, this is a born-digital, professionally typeset PDF (Adobe InDesign, Stanford University Press), so the text layer is high quality. Notes on the cleanup:

- **De-letter-spacing.** Running heads, chapter titles, the Notes section headers, and the single epigraph were typeset with letter-spacing (tracking), so the raw text extracted as spaced-out capitals (e.g. `N E U R O N A L  P O W E R`). These were reconstructed to normal words (`Neuronal Power`). Running heads and folios were removed.
- **Block quotations.** The book sets extended quotations in smaller type. These are rendered as Markdown blockquotes (the Esposito, Baudrillard, Ehrenberg, Handke, Sennett, Arendt, Kant, and Agamben passages, among others).
- **Epigraph.** Only one chapter, "The Society of Tiredness," carries an epigraph (Maurice Blanchot, "Tiredness has a broad heart."). It is rendered as a blockquote with attribution.
- **Endnote references.** Superscript note numbers in the text were detected by their superscript flag and rendered inline as `[12]`, matching the numbered entries in *10 Notes.md* (74 references / 74 notes). The Notes are grouped by chapter (`###` headings).
- **German terms.** Han's text is dense with bracketed German originals (*[Gewalt]*, *[das Eigene]*, *[Gelassenheit]*, *[Bann der Leistung]*, etc.); all were preserved, including umlauts.
- **Typography preserved.** Curly quotes, em- and en-dashes, and the author's spaced-period ellipses (`. . .`) were kept; only Unicode normalization (NFC) was applied. Soft hyphens were removed and line-break hyphenation was rejoined with a dictionary check so genuine compounds (e.g. *twenty-first*, *self-exploitation*) are preserved.
- **Skipped pages.** The cover, half-titles, blank pages, and the table of contents were omitted as redundant.
