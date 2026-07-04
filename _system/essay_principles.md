---
type: system_doc
status: reference
last_updated: 2026-07-04
---

# Essay Principles — the learned layer between feedback and generation

This file is the **controller** in the essay feedback loop. Raw reactions to individual essays
live in `essay_feedback.md`; they are high-variance and are **never read by a generation agent as
rules**. This file holds the small, slow-moving set of directives distilled from *recurring*
feedback — the things that have earned the right to actually steer the next essay. The gap between
the two files is deliberate: it is the filter that keeps one hot take from swinging the work.

## The stability gradient

Feedback climbs tiers; each rung up is slower to change and harder to enter.

1. **Charter** (`templates/synthesis_essay.md`) — the constitution. Changes almost never.
2. **Established principles** (below) — evolve slowly, promoted only from repeated patterns.
3. **Provisional principles** (below) — on probation: applied to the next essay, flagged, and
   re-judged after that essay's feedback. Prove-then-harden. This is the loop's hysteresis.
4. **Feedback log** (`essay_feedback.md`) — raw, fast, per-essay. Recorded, not obeyed.

## How a note moves up

- **Default gate:** a pattern must recur across **2** essays' feedback before it is eligible to
  become a *provisional* principle.
- **Express lane:** John may tag any single note `[promote-now]`; it enters as *provisional*
  immediately, skipping the recurrence gate but **not** the probation that follows.
- **Graduation:** a provisional principle becomes *established* when the essay it was applied to
  comes back with feedback that confirms it helped (or simply doesn't complain about it).
- **Demotion / revision:** if the probation essay shows the principle overcorrected (John pushes
  back), it is revised or dropped — it does not silently persist.
- **No hard cap, but prune every review:** there is no fixed ceiling on principle count. Instead,
  each distillation MUST actively **merge** redundant principles, **retire** stale ones, and
  **fold** the most-settled into the charter (freeing them from this file). This is what keeps the
  list from becoming a checklist. (John's call, 2026-07-04: soft governance over a number.)

## For a generation agent (what actually changes the essay)

- Read the **charter** (binding) and the **established principles** (binding priors) before
  writing. Read **provisional principles** too, apply them, and note in the method-note draft or a
  scratch note whether applying each one helped — that observation feeds the next distillation.
- **Do NOT read `essay_feedback.md`.** Only the distillation agent reads the raw log.
- Treat every principle as a **prior that shapes judgment, not a box to tick**. The charter is
  seed instructions, not a checklist; this file inherits that. Where a principle collides with the
  charter's anti-checklist spirit or with what *this* essay's material actually wants, the charter
  and the material win — and say so.

## For the distillation agent (agent proposes, John ratifies)

Runs **before each new essay is generated** (so accumulated feedback is incorporated just in
time) and **whenever John asks**. Change nothing without John's ratification.

1. Read every `essay_feedback.md` header added since the last distillation, plus this file.
2. Propose, as a ratify-list:
   - **New provisional** principles where a pattern recurs across ≥2 essays, or a note carries
     `[promote-now]`.
   - **Graduations** (provisional → established) where the probation essay's feedback confirmed
     the fix.
   - **Demotions / revisions** of provisionals that overcorrected.
   - **Prunes / merges** of established principles that are stale, redundant, or now
     contradicted; and **fold-into-charter** candidates for the most stable.
   - **`[keep]` reinforcements** — positive feedback that should be recorded as "do more of this,"
     not only corrections. (Error-correction alone is unstable; the keep-signal is the restoring
     force.)
3. Distinguish signal from noise: notes tagged `[one-off]`, or tied to a single essay's topic, are
   **not** generalized into principles.
4. Present the ratify-list to John; apply only what he approves; stamp dates and corroborating
   essays on anything that lands.

## For John (how to steer without overcorrecting)

Write freely and fast in `essay_feedback.md` — that file is a vent, not a law, so speed is safe.
Lightweight tags help the distiller read intent: `[fix]` (do less/more of X), `[keep]` (this
worked), `[one-off]` (don't generalize this), `[promote-now]` (make this a principle immediately).
If the essays feel unresponsive, loosen the gate; if they feel volatile, tighten it. An
under-adaptive loop is merely annoying; an over-reactive one corrupts the work and is hard to see
from inside — so when unsure, err slow.

---

## Established principles

*(none yet — this layer fills as feedback on charter-era essays recurs. Format when it does:)*

<!--
### P1 — <one-line directive>
- **Status:** established (promoted YYYY-MM-DD)
- **From:** feedback on [[essay A]], [[essay B]] (+ any [promote-now])
- **Why:** <the reasoning, so a future agent can weigh it, not just obey it>
-->

## Provisional principles (on probation)

*(none yet. Format when it fills:)*

<!--
### V1 — <one-line directive>
- **Status:** provisional (entered YYYY-MM-DD, via recurrence | [promote-now])
- **Applied in:** [[the next essay]] — review its feedback before graduating or demoting
- **Why:** <reasoning>
-->

## Retired / folded into charter

*(changelog of prunes, merges, and fold-ins — keeps the loop's history legible.)*
