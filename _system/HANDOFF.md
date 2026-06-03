---
type: system_doc
status: generated
last_updated: 2026-06-02
---

# Handoff — continuing the vault in a fresh chat

**You do not need any previous conversation's history to continue this project.** All durable
state lives on disk and in auto-loading memory. A new chat inherits everything required. This
page is the operating manual.

## What a fresh chat already knows (automatically)

- **The project brief** (CLAUDE.md) — loads into context every session.
- **Memory files** (`~/.claude/projects/<this vault>/memory/`) — load every session: methodology,
  the no-caps rule, the vault architecture + reusable workflow shape, the known pipeline gaps.

## What a fresh chat reads on demand (point it here first)

1. `_system/HANDOFF.md` — this file.
2. `_system/ingest_cache.json` — **which chapters are already ingested** (SHA-keyed). Skip these.
3. `_system/link_vocabulary.md` — the controlled vocabulary: canonical names, variant table,
   forward-stub policy. **This is what keeps links clean. Every generation agent must read it.**
4. `_system/schemas.md` — frontmatter schemas + the **Link Naming Rule**.
5. `_system/ingest_pipeline.md` — the hardened pipeline, in prose.
6. `_system/log.md` — full history of every ingest (what was created, decisions, gaps).
7. `_system/source_inventory.md` — the 27 books and which are done.
8. `_system/templates/` — note templates.
9. `_system/workflows/ingest-book.monograph.js` — **the reusable ingest workflow** (durable).

## Ingest protocol (the whole loop)

1. **Pick a book** not yet in the cache. (As of 2026-06-02: Han–Transparency, Hayles–Posthuman,
   Lippard–Six Years, O'Gieblyn–God Human Animal Machine, Han–Psychopolitics, Harari–Homo Deus,
   Kurzweil–The Singularity Is Near, Haraway–A Cyborg Manifesto are DONE. 19 remain.)
   **Repeat-author note:** the workflow's author task and create tasks are now **create-or-extend**
   (they read the target and extend it if it exists), so a second book by an already-ingested author
   (e.g. Han's *Burnout Society*, Kurzweil's *Age of Spiritual Machines*, Harari's *Nexus*) extends the
   existing author note rather than overwriting it. Pass a strong `updateHints` listing the existing
   notes to merge into. When splitting a book into halves (below), pass Half 2 the exact list of notes
   Half 1 created so its planner extends them instead of duplicating.
   **BIG-BOOK RULE (learned on Kurzweil):** for books with > ~8 substantive chapters or very long
   chapters (≳ 800 lines), **split the ingest into halves of ≤ ~6 chapters each** and run them
   SEQUENTIALLY (not parallel — they share the book/author note). A single oversized pass makes the
   synthesis planner overflow and return an EMPTY plan (`CREATE 0`), and the index agent then pollutes
   the maps with links to phantom notes. The other big books (Acemoglu, McLuhan 38 ch, Zuboff,
   Soni&Goodman 37 ch, Shiner, Ascott 39 ch, the Kurzweil/Waldrop bios) should be split up front.
   **VERIFY-ON-DISK + COMMIT EACH PHASE (learned the hard way):** the workflow's reported `created: N`
   is OPTIMISTIC — content-heavy agents (sources, references, arguments, author-note extensions)
   sometimes return a path WITHOUT the Write landing. After each run, parse its `create_plan`/`update_plan`
   and check every file exists on disk; regenerate any missing note with a focused single-note agent
   (ample budget → reliably persists). Then **`git commit` immediately** — untracked notes have twice
   vanished during interruptions (likely an Obsidian Git plugin clean/reset); committing makes them safe.
   **NEVER `git add -A` / `git add .` after an ingest (learned on Haraway):** the same clean/reset process
   has also **deleted *tracked* `raw/` folders mid-run** (on the Haraway pass: Acemoglu, Harari–Nexus, Shiner,
   Turner — all future ingest sources, no vault notes lost). A blanket add would commit those deletions and
   destroy the sources. Instead: (a) inspect `git status` first; (b) if any `raw/` files show as deleted, restore
   them with `git checkout HEAD -- "raw/<folder>"`; (c) stage ONLY the note folders explicitly
   (`git add books authors sources concepts definitions arguments tensions metaphors symbols references maps overview.md _system/analysis`).
   Also: the durable monograph workflow's top-level `args` does NOT bind through `scriptPath` — run it via a thin
   wrapper script that calls `workflow({scriptPath: ".../ingest-book.monograph.js"}, ARGS)` with the args inlined.
2. **Inspect**: `ls "raw/<Author - Book>/"` and `wc -l` to find substantive chapters. Skip
   About / Front Matter / Contents / Notes / Index / Acknowledgments / Bibliography.
3. **Hash**: `cd "raw/<Author - Book>" && for f in <files>; do shasum -a 256 "$f"; done`.
   Cross-check `ingest_cache.json`; skip any unchanged chapter.
4. **Run the workflow**:
   ```
   Workflow({ scriptPath: "_system/workflows/ingest-book.monograph.js", args: {
     bookFolder, bookTitle, author, today: "<date>",
     chapters: [ { file, sha, title }, ... ],
     focusHints: "<1-3 sentences naming the book's core concepts>",
     updateHints: "<existing notes to extend with an author-section, the cross-book merges>"
   }})
   ```
   The script auto-generates the book note, author note, and **one source summary per chapter**
   (so they can never be skipped — this fixes the O'Gieblyn gap), then the planner's concepts/
   arguments/etc. + cross-book updates, then the index/map updates.
   - For an **anthology / non-argument book** (e.g. Lippard), adapt the template's analysis prompt
     with an essay-vs-chronicle split (essays drive concepts; chronicle files yield source
     summaries + forward-stub entities). See the Lippard entry in `log.md`.
5. **Finalize inline** (deterministic — do NOT skip):
   - **Verify on disk** (agents self-report optimistically): file counts; `ls sources/ | grep -c "<book>"`
     should equal the chapter count.
   - **Hygiene re-check** — both should be 0:
     - prefix links: `grep -rhoE '\[\[(Argument|Tension|Metaphor|Symbol|Reference|Concept|Definition) - ' books authors concepts arguments definitions metaphors symbols tensions references sources maps | wc -l`
     - bracket mismatches: count files where `[[` ≠ `]]` (exclude `raw/` and `_system/ingest_pipeline.md`).
     - author-surname fragmentation (e.g. `[[Wiener]]` vs `[[Norbert Wiener]]`) — fix alias-preserving if any.
   - **Rebuild cache**: for each chapter, scan all note frontmatter for the raw-chapter link and write
     `{sha256, last_ingested, analysis_file, generated_files}` into `ingest_cache.json`. Validate JSON.
   - **Update `link_vocabulary.md`**: append the new canonical names + new author forward-stubs.
   - **Append `log.md`**: a dated entry (created/updated counts, cross-book merges, hygiene numbers,
     any gap caught, next tasks).
   - **Fill heavily-linked uncreated stubs** ONLY when well-sourced by ingested books (like
     `Material vs Immaterial` was). Leave cross-author / not-yet-sourced stubs as forward-stubs.

## Kickoff prompt for a brand-new chat (copy-paste)

> Continue the Material/Immaterial vault. Read `_system/HANDOFF.md`, then `_system/ingest_cache.json`,
> `_system/link_vocabulary.md`, and `_system/log.md`. Then ingest `raw/<Author - Book>` following the
> protocol (hash chapters, run `_system/workflows/ingest-book.monograph.js` with args, then the inline
> finalize). Keyword: ultracode.

(Include `ultracode` so the chat is allowed to run the multi-agent workflow.)

## Context-window management (the practical question)

- **Each ingest is self-contained and idempotent.** The SHA cache means a re-run never re-ingests a
  done chapter. So there is **zero penalty to starting a fresh chat between books.**
- **Prefer a fresh chat over `/compact`** for this workload. Compaction summarizes lossy-ly and still
  fills the window; a fresh chat starts clean and reads exactly the durable state it needs. Rule of
  thumb: **one fresh chat per book** (or per 1-2 small books) keeps you well under any limit.
- **Always let the inline finalize complete before ending a chat** — that's what flushes state
  (cache, vocabulary, log) to disk. If you stop mid-ingest, the next chat can tell from the cache
  (chapter present?) and `sources/` (summaries present?) what landed and re-run safely.
- **Token cost lives in the workflow agents, not the main chat.** A book ingest spends ~1-7M tokens
  across sub-agents but only a small slice in the orchestrating chat's own window. The main-chat
  window mostly fills with the workflow *result* notifications and your verification greps — another
  reason fresh chats per book stay lean.

## Quality bars that must not regress (verified across 4 books)

- 0 invented `Prefix - Title` links. 0 article/variant duplicates. 0 author-surname fragmentation.
- Every claim source-linked + confidence-labelled. Verbatim quotes only. `raw/` never edited.
- Cross-book overlap → extend the existing note with an author-section, never a duplicate.
- One source summary per ingested chapter (the template enforces this).
