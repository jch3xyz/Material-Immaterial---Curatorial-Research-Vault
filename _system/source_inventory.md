---
type: system_doc
status: generated
last_updated: 2026-06-02
---

# Source Inventory

The book corpus for the vault. Each book lives in its own folder under `raw/` and contains one markdown file per chapter or section. File counts include all front matter, contents, chapters, notes, indexes, etc. — not all are substantive for ingest.

> **Corpus size: 16 books** (was 27). On 2026-06-02 the user intentionally removed 11 books — see **Removed from corpus** below. The inventory now matches the disk exactly: all 16 books are present in `raw/`. Of the 16, **8 are ingested** and 8 remain.

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
| 12  | `Kurzweil - The Singularity Is Near`           | 18    | Ray Kurzweil        | chapters                       |
| 13  | `Lippard - Six Years`                          | 13    | Lucy Lippard        | sections                       |
| 14  | `McLuhan - Understanding Media`                | 38    | Marshall McLuhan    | many short chapters            |
| 15  | `OGieblyn - God Human Animal Machine`          | 16    | Meghan O'Gieblyn    | chapters                       |
| 16  | `Zuboff - The Age of Surveillance Capitalism`  | 25    | Shoshana Zuboff     | chapters                       |

Total: 16 books, 292 raw markdown files (matches disk). 8 ingested (see `log.md`); 8 remain.

## Removed from corpus

All 11 intentionally removed by the user on 2026-06-02. Four had `raw/` files tracked in git (deleted via `git rm` and committed — recoverable from history); seven were plan entries whose `raw/` files were never in the repo.

Tracked-and-deleted (4):

- `Acemoglu & Johnson - Power and Progress` (Daron Acemoglu & Simon Johnson)
- `Harari - Nexus` (Yuval Noah Harari)
- `Shiner - The Invention of Art` (Larry Shiner)
- `Turner - From Counterculture to Cyberculture` (Fred Turner)

Plan-only, also dropped (7):

- `Kurzweil - The Age of Spiritual Machines` (Ray Kurzweil)
- `Marcuse - Eros and Civilization` (Herbert Marcuse)
- `Norman - The Design of Everyday Things` (Don Norman)
- `Price - Dispersion` (Seth Price)
- `Soni & Goodman - A Mind at Play` (Jimmy Soni & Rob Goodman)
- `Vierkant - The Image Object Post-Internet` (Artie Vierkant)
- `Waldrop - The Dream Machine` (M. Mitchell Waldrop)

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
- **Ray Kurzweil** — The Singularity Is Near
- **Lucy Lippard** — Six Years
- **Marshall McLuhan** — Understanding Media
- **Meghan O'Gieblyn** — God Human Animal Machine
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
