---
type: system_doc
status: generated
last_updated: 2026-06-04
---

# Source Inventory

The book corpus for the vault. Each book lives in its own folder under `raw/` and contains one markdown file per chapter or section. File counts include all front matter, contents, chapters, notes, indexes, etc. — not all are substantive for ingest.

> **Corpus size: 12 books** (was 27 → 16 → 12). On 2026-06-02 the user removed 11 books, then on 2026-06-04 removed 4 more (Benjamin, Debord, Meadows, Zuboff) — see **Removed from corpus** below. The inventory now matches the disk exactly: all 12 books are present in `raw/`. Of the 12, **11 are ingested** and **1 remains (Ascott)**.

## Books in `raw/`

| #   | Folder                                         | Files | Author              | Status   |
| --- | ---------------------------------------------- | ----- | ------------------- | -------- |
| 1   | `Ascott - Telematic Embrace`                   | 39    | Roy Ascott          | **TODO** |
| 2   | `Burnham - Beyond Modern Sculpture`            | 14    | Jack Burnham        | ingested |
| 3   | `Byung-Chul Han - The Transparency Society`    | 14    | Byung-Chul Han      | ingested |
| 4   | `Han - Psychopolitics`                         | 13    | Byung-Chul Han      | ingested |
| 5   | `Han - The Burnout Society`                    | 11    | Byung-Chul Han      | ingested |
| 6   | `Harari - Homo Deus`                           | 17    | Yuval Noah Harari   | ingested |
| 7   | `Haraway - A Cyborg Manifesto`                 | 9     | Donna Haraway       | ingested |
| 8   | `Hayles - How We Became Posthuman`             | 15    | N. Katherine Hayles | ingested |
| 9   | `Kurzweil - The Singularity Is Near`           | 18    | Ray Kurzweil        | ingested |
| 10  | `Lippard - Six Years`                          | 13    | Lucy Lippard        | ingested |
| 11  | `McLuhan - Understanding Media`                | 38    | Marshall McLuhan    | ingested |
| 12  | `OGieblyn - God Human Animal Machine`          | 16    | Meghan O'Gieblyn    | ingested |

Total: 12 books, 217 raw markdown files (matches disk). 11 ingested (see `log.md`); 1 remains (Ascott).

## Removed from corpus

### Removed 2026-06-04 (4)

Intentionally removed by the user after the Burnout Society ingest, trimming the corpus from 16 → 12. `raw/` is gitignored, so these were deleted from disk only (no git action needed):

- `Benjamin - Illuminations` (Walter Benjamin)
- `Debord - The Society of the Spectacle` (Guy Debord)
- `Donella Meadows - Thinking in Systems` (Donella Meadows)
- `Zuboff - The Age of Surveillance Capitalism` (Shoshana Zuboff)

> Note: forward-stub links to these authors/works (e.g. `[[Walter Benjamin]]`, `[[The Society of the Spectacle]]`, `[[Shoshana Zuboff]]`, `[[The Age of Surveillance Capitalism]]`) remain valid as forward-stubs per policy — they simply will not be realized from a primary source now.

### Removed 2026-06-02 (11)

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

- **Roy Ascott** — Telematic Embrace *(TODO)*
- **Jack Burnham** — Beyond Modern Sculpture
- **Byung-Chul Han** — The Transparency Society, Psychopolitics, The Burnout Society
- **Yuval Noah Harari** — Homo Deus
- **Donna Haraway** — A Cyborg Manifesto
- **N. Katherine Hayles** — How We Became Posthuman
- **Ray Kurzweil** — The Singularity Is Near
- **Lucy Lippard** — Six Years
- **Marshall McLuhan** — Understanding Media
- **Meghan O'Gieblyn** — God Human Animal Machine

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
