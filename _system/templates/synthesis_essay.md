---
type: template_doc
status: reference
last_updated: 2026-06-17
---

# Synthesis Essay — Template & Craft Brief

A synthesis essay is the vault's only **finished, publishable** artifact — a piece you could
print in *October*, *Artforum*, *e-flux journal*, *n+1*, the *LRB*, or *Aeon*, that thinks
across several books in the vault and arrives somewhere. It is **not** a notes page, a summary,
or an outline. It must read as continuous, argued prose from the first sentence to the last.

The vault's provenance rules are non-negotiable and survive in full here — verbatim quotation, a
confidence label on every load-bearing claim, reversible compression down to the raw chapter, no
invented citations. The upgrade is only about **where the apparatus sits**: not threaded through
the prose as labels and tags, but set below the essay as endnotes and a method note — exactly the
way a journal prints its footnotes and acknowledgments *after* the piece. The read stays clean;
the provenance stays total.

---

## The one rule that does the most work

**Nothing in the reading layer announces its own function.** Never write a heading or a sentence
that names the part it belongs to — no `Central Question`, no `Thesis`, no `Section 1`, no "this
essay will argue," no "in conclusion." The essay *has* a question, a thesis, and movements; the
reader should *feel* them, never *see them labelled*. State the thesis as a sentence, in prose,
where it lands hardest — usually at the close of the opening, sometimes withheld and paid off at
the end.

If a sentence reads like a label for the paragraph beneath it, cut it and let the paragraph speak.

## Shape (felt, not labelled)

- **Opening.** Drop the reader into the problem in concrete terms — an image, a pairing, a
  question made of things, not of abstractions. Establish what is at stake in the first few
  sentences. Close the opening by stating the thesis plainly (or seed it and pay it off later).
- **Movements.** Each develops one turn of the argument: it opens with its own claim and earns it
  with evidence before handing off to the next. Separate movements with an **evocative,
  sentence-case subhead** (`## Two flights, one hierarchy`) **or** a plain break (`* * *`) — never
  a number, never a functional name.
- **Close.** Land the argument, then — for this vault specifically — name the curatorial or
  research payoff: what can now be *made*, *curated*, or *written* because the argument holds. A
  titled `## Coda` is fine; `Conclusion` is not.

## Voice and evidence

- **Quote verbatim, always**, and weave the quotation into your own sentence with in-text
  attribution ("as Hayles puts it," "in Lippard's own concession"). The prose carries the
  citation; the bracketed tag does not.
- **Every load-bearing quote or claim takes one Obsidian footnote `[^n]`.** That marker is the
  *only* apparatus the reader meets mid-sentence. The raw-chapter link, the verbatim check, and
  the confidence label all live in the **Notes** below the rule.
- Present tense for arguments ("Hayles insists…"); past tense only for historical events.
- First person is allowed but disciplined — the essayist's *I* of judgment, not the diarist's.
- Earn every adjective. Prefer the exact verb to the intensifier. One controlling idea, pursued —
  not a survey of everything the notes contain.
- Length: roughly **1,200–3,000 words**. Dense but readable; semi-academic.

## Provenance, relocated (how the hard rules survive a clean read)

- Each `[^n]` note carries three things: the `[[raw/Author - Book/Chapter]]` link, the verbatim
  passage (if it isn't already quoted in full in the body), and a compact provenance tag pairing a
  **status** with a **confidence**:
  `Directly stated, high` / `Strongly implied, medium` / `Interpretive synthesis, medium` /
  `Speculative connection, low`. (Status vocabulary and the high/medium/low scale are vault canon —
  see `_system/schemas.md`.)
- **The notes *are* the claim audit.** A standalone audit table is optional — add a
  `## Claim ledger` table only if a dense essay genuinely needs a scannable QA pass; otherwise the
  footnotes carry it.
- **Reserve the construction.** Where a connection is the vault's own — authors who never cited
  each other — say so: in the body where it bears on the argument, and always in the method note.
  A reader must never mistake an `Interpretive synthesis` for a historical fact. This honesty is
  not a disclaimer bolted on; at its best it is part of the argument.
- **A note on method** (the closing apparatus): one or two honest paragraphs — the essay's overall
  confidence; which links rest on citation and which the vault constructs; any speaker or
  attribution ambiguity in the sources; confirmation that every quotation was checked
  character-for-character against the raw chapters (only curly→straight quote normalization
  applied, the vault convention); and the scope — which notes and authors are deliberately in play
  and which are set aside.

## Frontmatter

Keep it machine-clean. `confidence` is the essay's overall evidentiary footing, not any single
claim's. `sources_used` lists the **vault notes** the essay draws on (books, concepts, references),
not raw files — the raw files are reached through the footnotes.

---

## Skeleton — copy from inside the block below

```markdown
---
type: synthesis_essay
status: draft            # draft | generated | final
deck: "One sentence that frames the stakes — the standfirst a journal runs under the title."
sources_used:
  - "[[Book or Concept Note]]"
  - "[[Author and Author]]"   # a vault reference note, where the link is the vault's own
authors:
  - "[[Author One]]"
  - "[[Author Two]]"
claims_audited: true
confidence: medium       # high | medium | low — the essay's overall footing
last_updated: YYYY-MM-DD
---

# Essay Title

*Deck: the one-line standfirst from the frontmatter, set in italics under the title.*

Open on the problem itself — a concrete image or pairing, not an abstraction. Pose the driving
question without ever naming it as a question. By the end of this opening movement, state the
thesis in a single plain sentence the rest of the essay will earn.[^1]

## An evocative subhead — or delete it and use a plain break

Open the movement with its own claim, then earn it. Quote verbatim, woven into your sentence with
attribution: as the author puts it, "…the exact words…".[^2] Keep moving; one idea per movement.

* * *

The next movement. Where a connection is the vault's own construction rather than a citation, say
so in the prose when it matters to the argument.[^3]

## Coda: the curatorial / research payoff

Land it. What can now be made, curated, or written because this argument holds?

---

## A note on method

The essay's overall confidence, in prose. Which links rest on citation and which the vault
constructs. Any speaker or attribution ambiguity in the sources, named honestly. Confirmation that
every quotation was verified character-for-character against the raw chapters (only curly→straight
quote normalization applied). Scope: which notes and authors are in play, and which are
deliberately set aside.

## Notes

[^1]: Thesis claim — if it is the vault's own synthesis, label it here. [[Author One and Author Two]] — Interpretive synthesis, medium.
[^2]: [[raw/Author - Book/Chapter]] — "verbatim passage if not fully quoted in the body." Directly stated, high.
[^3]: [[raw/Author - Book/Chapter]] — Strongly implied, medium.
```
