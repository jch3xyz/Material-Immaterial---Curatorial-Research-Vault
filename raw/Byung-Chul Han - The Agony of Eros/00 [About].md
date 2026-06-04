---
book: "The Agony of Eros"
author: "Byung-Chul Han"
translator: "Erik Butler"
foreword_author: "Alain Badiou"
edition: "MIT Press, Cambridge MA, 2017 (Untimely Meditations 1); trans. of Agonie des Eros, Matthes & Seitz Berlin, 2012"
type: "index"
---

# The Agony of Eros — Byung-Chul Han

This folder is the **immutable raw layer**: one markdown file per section, lightly cleaned from the text of the MIT Press 2017 edition (Erik Butler's translation of *Agonie des Eros*, 2012, with a foreword by Alain Badiou). A later wiki layer (summaries, concept hubs, cross-links) is meant to be built *on top of* this layer without altering it.

## Structure

The book is a foreword plus seven short chapters, followed by a consolidated Notes section:

- `01 Foreword - The Reinvention of Love` — Alain Badiou's foreword.
- `02 Melancholia`
- `03 Being Able Not to Be Able`
- `04 Bare Life`
- `05 Porn`
- `06 Fantasy`
- `07 The Politics of Eros`
- `08 The End of Theory`

Chapter number and title are recorded in each file's YAML frontmatter.

## A note on the endnotes

The book gathers all notes into one back-matter section, grouped by chapter. Rather than keep that as a separate file, the notes have been **split back to their chapters** and appended to each chapter file under a `## Notes` heading — consistent with how footnotes are handled in the other books in this vault, and more useful for reading a chapter alongside its references. The foreword has no notes. The superscript reference numbers remain attached inline in the body text (e.g. `atopos.1`); the bracketed number in each `## Notes` entry matches it. Note counts per chapter: Melancholia 4, Being Able Not to Be Able 13, Bare Life 27, Porn 11, Fantasy 14, The Politics of Eros 9, The End of Theory 8.

## What was cleaned vs. left alone

This was a clean digital text, not OCR, so there are essentially no transcription artifacts to flag. Only **structural** repairs were made:

- Running heads (chapter title + page number) and bare page numbers were stripped.
- Line-break (soft) hyphens were rejoined; genuine compounds were preserved (e.g. *self-love*, *self-negation*, *auto-exploitation*, *allo-exploitation*, *achievement-subject*, *death-bringing*, *narcissistic-depressive*, *non-economy*).
- Paragraphs broken across page boundaries were reflowed.
- The author's German terms are left exactly as printed, including hyphenated and umlauted forms: *Ver-Gleichen*, *Nicht-Können-Können* (being able not to be able), *Ent-Eignis*, *Urdistanz*, *bürgerliche Freiheit*, *entwerfendes Projekt*, *Ohn-Macht*, *Schlussform*, *Ent-Schluss*, *Erlebnis* / *Erfahrung*.
- Set-off block quotations (Blanchot, Levinas, Ficino, Aristotle, Bataille, Agamben, Illouz, Ballard, the Heidegger letter, Anderson, Butor) are rendered as markdown blockquotes (`>`). The two Wagner passages from *The Flying Dutchman* in *Bare Life* are kept as verse, one line per line. Short quotations that run inline in Han's own sentences are left inline, in quotation marks.

Wording is otherwise the translation as published.
