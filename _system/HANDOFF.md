---
type: system_doc
status: generated
last_updated: 2026-07-03
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

1. **Pick a book** not yet in the cache. (As of 2026-06-05: Han–Transparency, Hayles–Posthuman,
   Lippard–Six Years, O'Gieblyn–God Human Animal Machine, Han–Psychopolitics, Harari–Homo Deus,
   Kurzweil–The Singularity Is Near, Haraway–A Cyborg Manifesto, McLuhan–Understanding Media,
   Han–*The Burnout Society*, Burnham–*Beyond Modern Sculpture*, Ascott–*Telematic Embrace*, Zuboff–*The Age of
   Surveillance Capitalism* are DONE — **all 13 of 13 ingested; the planned corpus is COMPLETE (0 remain) as of
   2026-06-08.** NOTE: the corpus is **13 books** (matches `raw/` on disk exactly) — on 2026-06-02 the user
   intentionally removed 11 books from the plan (Acemoglu, Harari–Nexus, Shiner, Turner, Kurzweil–*Age of
   Spiritual Machines*, Marcuse, Norman, Price, Soni & Goodman, Vierkant, Waldrop), and on 2026-06-04 removed
   4 more (Benjamin–*Illuminations*, Debord–*Society of the Spectacle*, Meadows–*Thinking in Systems*,
   Zuboff–*Age of Surveillance Capitalism*) — but on **2026-06-08 the user RE-ADDED Zuboff** (so Benjamin,
   Debord, Meadows stay removed; Zuboff is back); see `source_inventory.md` → Removed from corpus. Do not treat
   Benjamin/Debord/Meadows as pending ingests — they remain removed from the corpus. **There is NO book left to
   ingest** unless the user re-expands the corpus (as they did with Zuboff on 2026-06-08). Zuboff (book 13,
   2026-06-08) realized the surveillance cluster (`Surveillance`, `Quantified Self`, Instrumentarian Power,
   `Big Other`) and made `Material vs Immaterial` a TEN-author tension; Ascott (book 12) realized the telematic-art
   cluster and EXTENDED the Burnham art stubs (`New Media Art` is now a three-author note). **With the corpus
   complete, the natural next phase is Phase 6 synthesis essays** (see the latest `log.md` entry for candidates),
   or an orphan-generation pass to realize the heaviest remaining forward-stubs (Foucault, Deleuze, Skinner,
   Arendt now carry many inbound refs).)
   **Repeat-author note:** the workflow's author task and create tasks are now **create-or-extend**
   (they read the target and extend it if it exists), so a second book by an already-ingested author
   (e.g. Han's *Burnout Society*, which extends the existing Byung-Chul Han note) extends the
   existing author note rather than overwriting it. Pass a strong `updateHints` listing the existing
   notes to merge into. When splitting a book into halves (below), pass Half 2 the exact list of notes
   Half 1 created so its planner extends them instead of duplicating.
   **BIG-BOOK RULE (learned on Kurzweil):** for books with > ~8 substantive chapters or very long
   chapters (≳ 800 lines), **split the synthesis planning** — a single oversized pass makes the planner
   overflow and return an EMPTY plan (`CREATE 0`), and the index agent then pollutes the maps with phantom
   links. Two proven shapes: (a) run the monograph workflow in **sequential halves** of ≤ ~6 chapters
   (Kurzweil); or (b) for a VERY chapter-dense book (McLuhan, 34 ch), a **custom big-book workflow**
   (`_system/workflows/_run_mcluhan.js` is the template): 34 parallel analyses → **N sequential chunked
   planners** (≤6 ch each) each handed the *running list of already-planned canonical names* so concepts
   dedup across chunks by file_path → a SINGLE generation + index pass (avoids the book-note/index thrash
   of re-running the whole workflow per chunk). The remaining big books (Zuboff 25 ch, Ascott 39 ch) should
   use one of these up front.
   **RESILIENT-AGENT WRAPPER (learned on McLuhan — IMPORTANT for any schema'd fan-out):** despite the
   Workflow docs saying `parallel()` coerces a throwing thunk to `null`, a schema agent that "completed
   without calling StructuredOutput (after 2 nudges)" **throws and aborts the whole run**. Wrap every
   `agent({schema})` call in a retry helper (`async safeAgent(prompt,opts,tries){ for…try{return await
   agent(prompt,opts)}catch{} return null }`) — 4 tries for analysis/planners, 2 for generation. Keep
   prompt/opts byte-identical so `resumeFromRunId` still cache-hits prior successes. On McLuhan the first
   run aborted on 3/34 analysis agents; the wrapper + resume (cached 31, re-ran 3) recovered cleanly.
   **As of 2026-06-04 the `safeAgent` wrapper is BAKED INTO the durable monograph workflow**
   (`ingest-book.monograph.js`) at every analysis/plan/generation/index call site — so a standard
   monograph ingest no longer needs a custom wrapper; the Burnout Society run completed clean on the
   first try. (A custom big-book workflow like McLuhan's must still include its own copy of `safeAgent`.)
   **VERIFY-ON-DISK + COMMIT EACH PHASE (learned the hard way):** the workflow's reported `created: N`
   is OPTIMISTIC — content-heavy agents (sources, references, arguments, author-note extensions)
   sometimes return a path WITHOUT the Write landing. After each run, parse its `create_plan`/`update_plan`
   and check every file exists on disk; regenerate any missing note with a focused single-note agent
   (ample budget → reliably persists). Then **`git commit` immediately** — untracked notes have twice
   vanished during interruptions (likely an Obsidian Git plugin clean/reset); committing makes them safe.
   **BURNHAM REINFORCEMENT (2026-06-05): the UPDATE (Edit-existing) path flakes far worse than the CREATE
   (Write-new) path.** On Burnham the generation pass reported `updated 24/24` but only ~5 actually landed —
   16 existing notes were left untouched and 2 stub-creates never wrote, while all 126 create_notes persisted.
   So **content-verify every UPDATE, not just file-existence**: grep each update target for a real
   `## <Author> (<Book>)` heading (or git-modified status), don't trust the count. And when you regenerate
   the stragglers, **feed the repair agents the small `_system/analysis/*.analysis.md` files (which already
   hold the verbatim candidate passages), NOT the raw chapters** — a first Burnham repair that re-read the
   150KB raw chapters mostly no-op'd (~4K tokens/agent, budget exhausted before the write); the
   analysis-driven re-run landed 22/22 cleanly. (`_system/workflows/_run_burnham_fix.js` is the template.)
   **ASCOTT REINFORCEMENT (2026-06-08): for REPAIRING existing notes, a single full-file Write beats a
   sequence of Edits.** On Ascott the generation pass under-persisted ALL 30 updates (and the run was
   interrupted before any commit — so commit creates IMMEDIATELY). A first analysis-driven *multi-Edit* repair
   still only landed 7/30: the body `## <Author> (<Book>)` heading lands but the follow-up Sources + frontmatter
   Edits silently don't (agents stop after the first edit). Rewriting the repair so each agent does ONE atomic
   **Write** of the complete file (read target + analysis file → emit the whole note with the new section +
   Source entry + frontmatter) landed **30/30 with 0 content loss**. VERIFY the Write didn't truncate: compare
   each repaired file's byte length to its committed `HEAD` version — none should shrink (`git show HEAD:<path>`).
   (`_system/workflows/_run_ascott_fix.js` v2 is the atomic-Write template.)
   **ZUBOFF REINFORCEMENT (2026-06-08): updates flake even with atomic-Write when run INSIDE the giant generation
   wave.** The Zuboff workflow baked atomic-Write into the in-workflow update path, yet still only 4/27 genuine
   cross-book updates landed — the update agents were starved running concurrently with 264 creates + 19 sources
   in one parallel wave. A SMALL dedicated atomic-Write repair wave (`_run_zuboff_fix.js`, ~25 agents) then landed
   them cleanly. So: **expect to run a dedicated repair pass for cross-book updates after every big-book ingest**
   (or, better, split the generation phase so updates run in their own wave after creates). Also: planners may
   DOUBLE-LIST the book's own concepts as both create_notes and update_notes — harmless (creates handle them) but
   it inflates the reported `updated` count, so when verifying separate self-notes (target ∈ create_plan) from
   genuine cross-book updates. And a 4-note "partial" may actually be a COMPLETE merge done via the concept
   template's native `## Authors and Variants` bullet + a Sources entry — accept that form, don't force a heading.
   **DON'T `git add -A` / `git add .` after an ingest; stage note folders explicitly:**
   `git add books authors sources concepts definitions arguments tensions metaphors symbols references maps overview.md _system/analysis`.
   A blanket add sweeps in unrelated working-tree state (`.obsidian/` UI churn, `.DS_Store`) and, more
   importantly, any `raw/` changes. If `git status` shows `raw/` files **deleted**, STOP and find out why
   before acting — it may be an intentional user edit, not an accident. (On the Haraway pass, 4 `raw/` book
   folders showed as deleted mid-run; I first assumed the interruption-loss failure mode above and restored
   them with `git checkout HEAD -- "raw/<folder>"`, but the user had deleted them **on purpose** — those 4
   books were dropped from the corpus on 2026-06-02 and the deletion was committed. So: surface unexpected
   `raw/` deletions, don't reflexively restore or commit them.)
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

## Phase 6 — synthesis essays (the current phase)

The corpus is complete; the work now is essays. **Read the charter first:**
`_system/templates/synthesis_essay.md` (rewritten 2026-07-03 — it supersedes the 2026-06-17
craft brief and the shape of the nine essays written under it; do NOT pattern-match new essays
on the old ones in `essays/`). The short version of the charter:

- **Journal/chapter grade, standalone.** No "the vault," no other essays, no reader address, no
  curatorial-payoff coda, no trace of the prompt — anywhere, including footnotes and method note
  (the apparatus says "this essay's synthesis," never "the vault's").
- **Research-first, bottom-up.** The user's essay prompt is a research question to test, not a
  design brief to satisfy. Gather evidence including counter-readings BEFORE forming the thesis;
  a conclusion that overturns the prompt's premise is a good outcome; confirming it plainly is
  too. No thumb on either pan.
- **Quotation is the spine.** Reconstruct each source's internal argument at length (block
  quotes welcome); depth over author-coverage; surface book/chapter names in prose so the reader
  goes to the original — transmitting the primary sources is the essays' purpose.
- **No fixed shape, no length target.** Structure per argument; chapter scale (often
  6,000–15,000+ words) is normal; padding and re-establishment are defects.
- **Provenance unchanged.** `[^n]` endnotes with raw links + status/confidence, method note,
  character-for-character verification (external sources allowed at identical rigor, full
  citation, no status labels). Post-draft adversarial verification workflow (one agent per cited
  chapter + attribution critic) still applies — see log entries from 2026-06-18 on.
- **How to run the pipeline:** `_system/essay_pipeline.md` — the four-stage process (harvest →
  critique → write → verify) and the routing/efficiency rule (index with `sources/`+`analysis/`,
  scaled to the question's breadth; harvest verbatim and verify character-for-character from
  `raw/`, which is irreducible). Read it before spinning up an essay workflow.
- **Feedback loop:** John's quality notes accumulate in `_system/essay_feedback.md` (raw, per
  essay, never read as rules) and are distilled — agent proposes, John ratifies — into
  `_system/essay_principles.md` (the slow layer that steers generation). **Before generating a new
  essay, run the distillation step; after one lands, add its feedback header.** Full protocol at
  the top of `essay_principles.md`.
