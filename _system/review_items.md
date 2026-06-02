---
type: system_doc
status: generated
last_updated: 2026-06-01
---

# Review Items

Unresolved questions requiring human judgment. Each item should follow the schema below. Items are appended chronologically; resolved items live under `## Resolved` with the decision recorded.

## Open

<!-- generation passes append review items here -->

## Pending Verification

These items have a confirmed policy decision but require a concrete textual verification step against the chapters' endnote apparatus or against later-ingested material. They will close out once the verification is done.

### Foucault attributions in the Han-Foucault reference need endnote verification

- **Date opened:** 2026-06-01
- **Source:** raw/Byung-Chul Han - The Transparency Society/03 Preface.md; raw/Byung-Chul Han - The Transparency Society/12 Ch9 - Control.md
- **Status:** Current handling (treat Foucault as the pervasive but partly unnamed interlocutor; label synthesis claims accordingly) is **approved**. Verification of each Foucault attribution against the book's endnote apparatus is the remaining outstanding work.
- **Relevant files:** `references/Byung-Chul Han and Michel Foucault.md`
- **Priority:** high

### Source of unattributed Gleichschaltung maxim (Ch1, fn1)

- **Date opened:** 2026-06-01
- **Source:** raw/Byung-Chul Han - The Transparency Society/04 Ch1 - Positivity.md
- **Status:** Policy approved — preserve the quotation marks and do not attribute until the endnote is verified. Attribution will be added once the source is confirmed.
- **Relevant files:** `concepts/Transparency.md`, `arguments/Transparency is a neoliberal dispositive that dismantles negativity.md`
- **Priority:** medium

## Pending Future Ingest

These items hold open consolidations that will happen automatically when the relevant later book is ingested.

### Smoothness scope across Han's corpus

- **Date opened:** 2026-06-01
- **Status:** Policy approved — keep the scoped note with a forward-stub. Consolidate once `Han - The Burnout Society` and any later Han books (e.g., *Saving Beauty*, *Non-Things*) enter the vault.
- **Relevant files:** `concepts/Smoothness.md`
- **Priority:** medium

### Achievement Society scope vs *The Burnout Society*

- **Date opened:** 2026-06-01
- **Status:** Policy approved — keep the scoped note. Merge with material from `Han - The Burnout Society` once that book is ingested.
- **Relevant files:** `concepts/Achievement Society.md`
- **Priority:** medium

### Pornography vs Exhibition Value overlap

- **Date opened:** 2026-06-01
- **Status:** Policy approved — keep distinct. Audit overlap after more Han books (and the Debord ingest) are processed.
- **Relevant files:** `concepts/Exhibition Value.md`, `concepts/Pornography (Han).md`, `concepts/Smoothness.md`
- **Priority:** medium

## Resolved

### 2026-06-01 — Foucault as unnamed interlocutor (policy)
Current handling (treat Foucault as the pervasive but partly unnamed interlocutor) is correct. Verification of attributions against endnotes carried over to **Pending Verification**.

### 2026-06-01 — "Hell of the Same" vs translator's "Inferno of the Same"
"Hell of the Same" stands as the canonical title. The translator's "inferno of the same" is preserved as the quoted text inside the note body.

### 2026-06-01 — Pornography (Han) risk of moralistic misreading
Current handling is correct — the note leads with the structural-formal definition and the title is qualified `(Han)`.

### 2026-06-01 — Schmitt, Baudrillard, Heidegger references deferred
**Caps lifted.** Generated `references/Byung-Chul Han and Martin Heidegger.md` and `references/Byung-Chul Han and Carl Schmitt.md` now. From here on, do not enforce numerical caps on notes — generate as many as are durable, and never leave a wiki-link without a corresponding page. See memory entry `no-hard-caps-on-notes`.

### 2026-06-01 — Debord cross-link
Added forward-stub Debord cross-links to `concepts/Pornography (Han).md` (related list + Authors and Variants entry upgraded from Speculative to Directly stated for the citation) and to `books/The Transparency Society.md` (added `[[Byung-Chul Han and Guy Debord]]` to References to Other Authors and inserted Debord into the Brief Orientation interlocutor list).

### 2026-06-01 — Truth-as-Avowal promotion
Promoted to standalone concept at `concepts/Truth as Avowal.md`, linked to both Han and Foucault (the Foucault dimension marked `Interpretive synthesis` since Foucault is not named in the Han passages).

---

### Review Item Schema

```markdown
## Review Item: short title

- **Date:** YYYY-MM-DD
- **Source:** raw/Author - Book/Chapter 01.md
- **Issue:** Description of the ambiguity or decision.
- **Recommended options:**
  - Option A
  - Option B
- **Relevant files:**
  - `concepts/X.md`
  - `concepts/Y.md`
- **Priority:** high | medium | low
```
