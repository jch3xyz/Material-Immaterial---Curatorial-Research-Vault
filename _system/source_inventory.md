---
type: system_doc
status: generated
last_updated: 2026-06-02
---

# Source Inventory

The book corpus for the vault. Each book lives in its own folder under `raw/` and contains one markdown file per chapter or section. File counts include all front matter, contents, chapters, notes, indexes, etc. — not all are substantive for ingest.

> **Corpus size: 23 books** (was 27). On 2026-06-02 the user intentionally removed 4 books from `raw/` and the corpus — see **Removed from corpus** below. Separately, several listed books are part of the plan but their `raw/` files are not in the repo yet (currently 16 book folders are present on disk); the table is the intended corpus, not a literal disk snapshot.

## Books in `raw/`

| #   | Folder                                         | Files | Author              | Likely substantive units       |
| --- | ---------------------------------------------- | ----- | ------------------- | ------------------------------ |
| 1   | `Ascott - Telematic Embrace`                   | 39    | Roy Ascott          | essay collection               |
| 2   | `Benjamin - Illuminations`                     | 16    | Walter Benjamin     | essays                         |
| 3   | `Burnham - Beyond Modern Sculpture`            | 14    | Jack Burnham        | chapters                       |
| 4   | `Byung-Chul Han - The Transparency Society`    | 14    | Byung-Chul Han      | 9 chapters + preface           |
| 5   | `Debord - The Society of the Spectacle`        | 15    | Guy Debord          | 9 chapters                     |
| 6   | `Donella Meadows - Thinking in Systems`        | 19    | Donella Meadows     | 7 chapters + intro             |
| 7   | `Han - Psychopolitics`                         | 13    | Byung-Chul Han      | chapters                       |
| 8   | `Han - The Burnout Society`                    | 11    | Byung-Chul Han      | chapters                       |
| 9   | `Harari - Homo Deus`                           | 17    | Yuval Noah Harari   | chapters                       |
| 10  | `Haraway - A Cyborg Manifesto`                 | 9     | Donna Haraway       | essay sections                 |
| 11  | `Hayles - How We Became Posthuman`             | 15    | N. Katherine Hayles | chapters                       |
| 12  | `Kurzweil - The Age of Spiritual Machines`     | 25    | Ray Kurzweil        | chapters                       |
| 13  | `Kurzweil - The Singularity Is Near`           | 18    | Ray Kurzweil        | chapters                       |
| 14  | `Lippard - Six Years`                          | 13    | Lucy Lippard        | sections                       |
| 15  | `Marcuse - Eros and Civilization`              | 18    | Herbert Marcuse     | chapters                       |
| 16  | `McLuhan - Understanding Media`                | 38    | Marshall McLuhan    | many short chapters            |
| 17  | `Norman - The Design of Everyday Things`       | 15    | Don Norman          | chapters                       |
| 18  | `OGieblyn - God Human Animal Machine`          | 16    | Meghan O'Gieblyn    | chapters                       |
| 19  | `Price - Dispersion`                           | 2     | Seth Price          | short essay                    |
| 20  | `Soni & Goodman - A Mind at Play`              | 37    | Soni & Goodman      | chapters (Shannon biography)   |
| 21  | `Vierkant - The Image Object Post-Internet`    | 4     | Artie Vierkant      | short manifesto                |
| 22  | `Waldrop - The Dream Machine`                  | 16    | M. Mitchell Waldrop | chapters (Licklider biography) |
| 23  | `Zuboff - The Age of Surveillance Capitalism`  | 25    | Shoshana Zuboff     | chapters                       |

Total: 23 books, 407 raw markdown files (planned). Of these, 8 are ingested (see `log.md`) and 16 book folders are currently present on disk.

## Removed from corpus

Intentionally deleted by the user on 2026-06-02 (removed from `raw/` and committed; were previously tracked in git, recoverable from history if ever needed):

- `Acemoglu & Johnson - Power and Progress` (Daron Acemoglu & Simon Johnson)
- `Harari - Nexus` (Yuval Noah Harari)
- `Shiner - The Invention of Art` (Larry Shiner)
- `Turner - From Counterculture to Cyberculture` (Fred Turner)

## Standard Non-Substantive Files (skipped by default)

These files typically appear in each book folder and are skipped by analysis unless they contain genuine substantive content:

- `00 [About].md` — bibliographic/metadata
- `01 Front Matter.md` — copyright, dedication
- `02 Contents.md` — table of contents
- `13 Notes.md` / `14 Notes.md` — endnotes (may be substantive; reviewed case by case)
- `Index.md`, `Bibliography*.md`, `About the Author.md`, `Acknowledgments.md`

## Author → Books Mapping

- **Roy Ascott** — Telematic Embrace
- **Walter Benjamin** — Illuminations
- **Jack Burnham** — Beyond Modern Sculpture
- **Byung-Chul Han** — The Transparency Society, Psychopolitics, The Burnout Society
- **Guy Debord** — The Society of the Spectacle
- **Donella Meadows** — Thinking in Systems
- **Yuval Noah Harari** — Homo Deus
- **Donna Haraway** — A Cyborg Manifesto
- **N. Katherine Hayles** — How We Became Posthuman
- **Ray Kurzweil** — The Age of Spiritual Machines, The Singularity Is Near
- **Lucy Lippard** — Six Years
- **Herbert Marcuse** — Eros and Civilization
- **Marshall McLuhan** — Understanding Media
- **Don Norman** — The Design of Everyday Things
- **Meghan O'Gieblyn** — God Human Animal Machine
- **Seth Price** — Dispersion
- **Jimmy Soni & Rob Goodman** — A Mind at Play
- **Artie Vierkant** — The Image Object Post-Internet
- **M. Mitchell Waldrop** — The Dream Machine
- **Shoshana Zuboff** — The Age of Surveillance Capitalism

## Prototype Book (Phase 3)

**`Byung-Chul Han - The Transparency Society`** — chosen because:

- Short (670 lines total), giving a tight feedback loop for schema refinement
- Direct alignment with the user's stated research foci (transparency, visibility vs understanding, surveillance, the body as data)
- Self-contained argument structure (9 chapters, each a discrete conceptual move)
- Han recurs across the library (Psychopolitics, Burnout Society) so concepts will compound

Substantive chapters for ingest:

1. `03 Preface.md`
2. `04 Ch1 - Positivity.md`
3. `05 Ch2 - Exhibition.md`
4. `06 Ch3 - Evidence.md`
5. `07 Ch4 - Pornography.md`
6. `08 Ch5 - Acceleration.md`
7. `09 Ch6 - Intimacy.md`
8. `10 Ch7 - Information.md`
9. `11 Ch8 - Unveiling.md`
10. `12 Ch9 - Control.md`

`00 [About].md`, `01 Front Matter.md`, `02 Contents.md`, and `13 Notes.md` are skipped in the prototype pass.
