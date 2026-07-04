---
type: system_doc
status: reference
last_updated: 2026-07-04
---

# Essay Pipeline — how to produce a synthesis essay under the charter

The charter (`_system/templates/synthesis_essay.md`) says *what a good essay is*. This doc says
*how to produce one* — the research-first, multi-agent process behind it, and how to run that
process without wasting tokens or cutting fidelity. Proven on the first charter essay,
`essays/The Music and Art of Bacteria.md` (2026-07-03); see that day's `log.md` entry.

## The pipeline (four stages)

1. **Harvest** — one agent per book. Each reconstructs that author's argument chains as ordered
   verbatim quotes at **block-quote scale (2–6 sentences, with surrounding context)**, covers the
   question's sub-parts, and runs a **mandatory counter-evidence hunt** (passages against the
   intuitive answer; the author undercutting himself). Each writes its full harvest to disk and
   returns only a compact summary. Harvests are the essay's evidence base — read them
   movement-by-movement while drafting and move quotes into the draft just-in-time.
2. **Critique** — in parallel once harvests land: an **adversarial counter-case** agent (steelman
   the NO / the malformed-question reading), a **gap audit** (what the harvest missed + a
   quote-fidelity spot-check against raw), and **N thesis proposers**, each assigned a different
   starting lens and told to reject it if the evidence points elsewhere. The finding is what the
   evidence converges on, not what any lens presupposed.
3. **Write** — the essayist (main loop) forms the thesis *after* reading the evidence, and writes
   the deck last.
4. **Verify** — per-book **character-for-character quote verifiers** (against raw), plus a
   **charter-compliance critic** (hunts standalone-rule violations — "the vault", reader address,
   commission traces; these hide in the method note, not the body) and an **attribution/honesty
   critic** (reported speech flagged? constructions owned? confidence labels sane?). Apply fixes.

## Routing & efficiency (the 2026-07-04 lesson)

The question came up: why have harvest agents read `raw/` when `sources/*` (per-chapter
summaries) and `_system/analysis/*` (pre-extracted verbatim quotes) already exist? The answer is
**use the pre-digested layers to route, but harvest and verify from raw** — and here is exactly
why the raw reading is not the waste it looks like:

- **Route with the index; scale it to the question's breadth.** `sources/*` and `analysis/*` are
  the index layer — use them to decide *which* raw chapters a harvester opens. For a **narrow**
  question ("what does Han say about the veil"), do a cheap routing pass first (summary sweep →
  chapter shortlist), then open only those chapters. For a **broad / survey** question (the
  posthuman-art essay touched aesthetics, subject, materials, forms, role of art, role of artist),
  the net is wide anyway — routing saves little, and the harvester should read raw across most
  substantive chapters. Don't run an expensive routing pass for a question whose answer lives
  everywhere.
- **Two costs are irreducible and must hit raw.** (a) Charter-grade harvesting needs block-quote
  spans *with context*; the `analysis/*` files keep only **clipped** quotes — harvesting from them
  rebuilds the over-compression the charter exists to kill. (b) Verification is
  character-for-character against raw *by definition* — you cannot verify a quote against a
  summary. Together these are most of the token spend, and neither can move to the pre-digested
  layers.
- **The pre-digested layers are lossy and were built for a different job.** `analysis/*` and
  `sources/*` were produced during *ingest*, to extract concepts for the note graph — not to
  answer this essay's question. Trusting them to decide salience (i) inherits the ingest's framing
  (a top-down, confirm-the-existing-picture bias the charter warns against), and (ii) misses the
  two things they were never built to flag: **counter-evidence** (authors undercutting themselves
  — on the posthuman-art essay these were the load-bearing finds: Kurzweil's Ned Ludd rejoinder,
  Burnham's death-wish final page) and **whatever the index didn't emphasize** (the gap audit
  exists precisely to catch this — it found 7 such misses).
- **Net rule:** index with `sources/`+`analysis/`, weighted to how narrow the question is; harvest
  verbatim from raw; always verify against raw. The savings from harder routing are real but
  bounded, and pushing past the bound trades tokens for fidelity and neutrality — the two things
  an essay under this charter is most trying to protect.

## Feedback incorporation

John's quality notes on essays feed back into future generations through a **two-file, tiered
loop** designed to adapt without over-correcting on any single note:

- `essay_feedback.md` — raw per-essay notes (one header per essay). High-variance; **a generation
  agent never reads it as rules.**
- `essay_principles.md` — the small, slow set of directives distilled from *recurring* feedback;
  the layer that actually steers generation. Its top documents the full protocol (stability
  gradient, promotion gate, probation, pruning).

**Two obligations this pipeline owes the loop:**

1. **After an essay lands:** append a new `## <Essay Title> (date)` header to `essay_feedback.md`
   so John has somewhere to write.
2. **Before generating a new essay:** run the **distillation agent** (see `essay_principles.md` →
   "For the distillation agent") over feedback accumulated since the last distillation. It
   *proposes* promotions/graduations/prunes; **John ratifies**; only then generate. The generation
   agent reads the charter + established principles as binding priors and provisional principles as
   on-probation, and treats all of them as judgment-shaping priors, never a checklist.
