---
type: system_doc
status: generated
last_updated: 2026-06-01
---

# Link Vocabulary

The authoritative list of canonical wiki-link names in the vault, the variant→canonical normalization table, and the forward-stub policy.

**This file is the controlled vocabulary.** Generation agents and link-normalization passes MUST resolve every wiki-link to one of:

1. a **canonical note name** listed below (a note that exists or is being created in the same pass), or
2. a **declared forward-stub** — a canonical name for a note that does not yet exist but is committed (see policy), or
3. **plain text** — if the phrase does not name a durable, vault-worthy entity, do not wiki-link it.

Never invent a third naming convention (e.g. `Argument - X`, `Concept - X`, `Metaphor - X`). The wiki-link target is always the bare canonical note title, exactly as the filename (without `.md`).

---

## Canonical Note Names (exist as of 2026-06-01)

### books/
- The Transparency Society

### authors/
- Byung-Chul Han

### concepts/
- Acceleration
- Achievement Society
- Arcana of Power
- Auto-Exploitation *(new 2026-06-01)*
- Digital Panopticon
- Exhibition Value
- Exploitation of Freedom
- Gleichschaltung *(new 2026-06-01)*
- Hell of the Same
- Hypercommunication *(new 2026-06-01)*
- Hyperinformation *(new 2026-06-01)*
- Information
- Intimacy as Psychological Formula of Transparency
- Narrativity
- Negativity
- Pathos of Distance *(new 2026-06-01)*
- Pornography (Han)
- Positivity
- Smoothness
- Society of Control *(new 2026-06-01)*
- Theatrum Mundi *(new 2026-06-01)*
- Transparency
- Truth as Avowal

### arguments/
- Compulsive transparency stabilizes the existing system
- Exhibition value is a third value form beyond Marx
- Hyperinformation brings no light into darkness
- The crisis is not acceleration but loss of narrativity
- The digital panopticon runs on voluntary self-exposure
- The morality of total transparency switches into tyranny
- There is no erotics of transparency
- Transparency abolishes the Other and produces compulsive conformity
- Transparency is a neoliberal dispositive that dismantles negativity
- Transparency replaces trust with control

### definitions/
- Aperspectival Panopticon (Han)
- Cult Value vs Exhibition Value (Han via Benjamin)
- Erfahrung vs Erlebnis (Han)
- Information (Han)
- Transparency (Han)

> Note: `Transparency (Han)` and `Information (Han)` are **definition** files. Do not collapse them into the concept notes `Transparency` / `Information`. The `(Han)` suffix here marks a real definition note, not a stray variant.

### metaphors/
- Fragrance of Time
- Hell of the Same
- Lightless Radiation
- Procession vs Processor
- The Glassy Human
- The Veil

> Note: `Hell of the Same` exists as BOTH a concept and a metaphor by design (the figure and the concept it names). Link by intent; the concept note is the default target for conceptual references.

### symbols/
- The Like Button
- The Mask
- The Panopticon
- The Transparent Customer

### tensions/
- Desire vs Danger
- Freedom vs Control
- Narration vs Addition
- Positivity vs Negativity
- Transparency vs Opacity
- Visibility vs Understanding

### references/
- Byung-Chul Han and Carl Schmitt
- Byung-Chul Han and Hegel
- Byung-Chul Han and Jean Baudrillard
- Byung-Chul Han and Martin Heidegger
- Byung-Chul Han and Michel Foucault
- Byung-Chul Han and Walter Benjamin

### sources/
- Byung-Chul Han - The Transparency Society - 03 Preface
- Byung-Chul Han - The Transparency Society - 04 Ch1 - Positivity
- Byung-Chul Han - The Transparency Society - 05 Ch2 - Exhibition
- Byung-Chul Han - The Transparency Society - 06 Ch3 - Evidence
- Byung-Chul Han - The Transparency Society - 07 Ch4 - Pornography
- Byung-Chul Han - The Transparency Society - 08 Ch5 - Acceleration
- Byung-Chul Han - The Transparency Society - 09 Ch6 - Intimacy
- Byung-Chul Han - The Transparency Society - 10 Ch7 - Information
- Byung-Chul Han - The Transparency Society - 11 Ch8 - Unveiling
- Byung-Chul Han - The Transparency Society - 12 Ch9 - Control

### raw/ (source links — always full path, no .md)
- `[[raw/Byung-Chul Han - The Transparency Society/04 Ch1 - Positivity]]` etc.

---

## Canonical Note Names — Hayles ingest (2026-06-01)

Added by *How We Became Posthuman*. Book: `How We Became Posthuman`. Author: `N. Katherine Hayles`. Source summaries: `Hayles - How We Became Posthuman - <chapter>` (12).

- **concepts/**: Artificial Life · Autopoiesis · Cybernetics · Distributed Cognition · Embodiment · Emergence · Feedback Loops · Flickering Signifier · Homeostasis · Hyphen vs Splice · Informatics · Inscription vs Incorporation · Pattern and Randomness · Posthumanism · Reflexivity · Seriation · Skeuomorph · Systems Theory · The Body as Data · The Computational Universe · The Cyborg · The Extrapolated Body · The Liberal Humanist Subject · The Materiality of Informatics · The Observer · The Platonic Backhand and Forehand · The Schizoid Android · The Three Waves of Cybernetics · Virtuality. (`Information` is shared — Han + Hayles author-sections in one note.)
- **arguments/**: Conscious agency has never been in control · Disembodiment is impossible there is only different embodiment · The disappearance of the body is the symptom of a new subjectivity · The disembodiment of information was contingent not inevitable · The liberal subject and the posthuman both erase embodiment · The posthuman is lethal only when grafted onto liberal humanism · The strong claim of artificial life is constructed through narrative.
- **definitions/**: Information (Hayles) · The Posthuman (Hayles) · Turing Test (Hayles).
- **metaphors/**: Information Lost Its Body · The Body as Congealed Metaphor · The Turing Test as a Magic Trick · The Word as Virus.
- **symbols/**: Janet Freed · The Chinese Room.
- **tensions/**: Embodiment vs Information · Homeostasis vs Reflexivity · Liberal Humanist Subject vs Posthuman · Material vs Immaterial · Presence Absence vs Pattern Randomness.
- **references/**: N. Katherine Hayles and {Alan Turing, Byung-Chul Han, Claude Shannon, Donna Haraway, Hans Moravec, Humberto Maturana and Francisco Varela, Norbert Wiener, Philip K. Dick, Warren McCulloch}.

New **author forward-stubs** (figures without books in `raw/`): `Norbert Wiener`, `Claude Shannon`, `Alan Turing`, `Hans Moravec`, `Humberto Maturana`, `Francisco Varela`, `Warren McCulloch`, `Donna Haraway` (her *A Cyborg Manifesto* is in `raw/` but not yet ingested), `Philip K. Dick`. Realize when/if their work is ingested.

### Hayles-internal variant fixes (applied 2026-06-01)

| Variant | Canonical note |
|---|---|
| `Flickering Signifiers` | `Flickering Signifier` |
| `Liberal Humanist Subject` | `The Liberal Humanist Subject` |

---

## Variant → Canonical Normalization Table

These are **verified** pure format/article/qualifier variants that must be rewritten to the canonical name. Apply by exact match (full `[[Variant]]` and piped `[[Variant|alias]]` forms), preserving any alias text. Do NOT prefix-match where it risks corrupting a longer canonical name.

| Variant (as written) | Canonical |
|---|---|
| `Negativity (Han)` | `Negativity` |
| `Positivity (Han)` | `Positivity` |
| `Transparency Society` | `The Transparency Society` |
| `Inferno of the Same` | `Hell of the Same` |
| `The Inferno of the Same` | `Hell of the Same` |
| `The Hell of the Same` | `Hell of the Same` |
| `Pornography` | `Pornography (Han)` |
| `The Digital Panopticon` | `Digital Panopticon` |
| `Truth-as-Avowal` | `Truth as Avowal` |
| `Auto-exploitation` | `Auto-Exploitation` |
| `Society of the Spectacle` | `The Society of the Spectacle` *(forward-stub)* |
| `The Society of The Spectacle` | `The Society of the Spectacle` *(forward-stub)* |
| `The Society of Control` | `Society of Control` |

### Synonym consolidations (2026-06-01 within-Han pass)

Retargeted to **existing notes** (alias-preserving — display text kept):

| Variant (as written) | Canonical note |
|---|---|
| `Intimacy`, `The Society of Intimacy` | `Intimacy as Psychological Formula of Transparency` |
| `Attention Capital`, `Attention Economy` | `Exhibition Value` |
| `Achievement-Subject`, `Achievement Subject`, `The Achievement-Subject` | `Achievement Society` |
| `Veil`, `Veil and Veiling` | `The Veil` |
| `Mask`, `Mask (Persona)`, `Persona` | `The Mask` |
| `Panopticon` | `The Panopticon` |
| `Aperspectival Panopticon` | `Aperspectival Panopticon (Han)` |
| `Erfahrung`, `Erlebnis`, `Erfahrung vs Erlebnis`, `Erfahrung and Erlebnis`, `Erfahrung (Experience)`, `Erlebnis (Experiencing)` | `Erfahrung vs Erlebnis (Han)` |
| `Cult Value vs Exhibition Value`, `Cult value versus exhibition value` | `Cult Value vs Exhibition Value (Han via Benjamin)` |
| `Dialectic of Freedom`, `Freedom as Control`, `Freedom as a Form of Control`, `Freedom versus control`, `Freedom vs control` | `Freedom vs Control` |
| `Self-Exploitation` | `Auto-Exploitation` |
| `Self-Illumination`, `Voluntary Self-Illumination` | `Exploitation of Freedom` |
| `Addition vs Narration`, `Narration versus Addition`, `Narrativity vs Addition` | `Narration vs Addition` |
| `Negativity vs. Positivity`, `Negativity versus Positivity`, `Negativity vs Positivity` | `Positivity vs Negativity` |

Author surname → full name (forward-stub unification):

| Variant | Canonical forward-stub |
|---|---|
| `Foucault` | `Michel Foucault` |
| `Baudrillard` | `Jean Baudrillard` |
| `Rousseau` | `Jean-Jacques Rousseau` |
| `Bentham` | `Jeremy Bentham` |
| `Agamben` | `Giorgio Agamben` |
| `Barthes` | `Roland Barthes` |
| `G.W.F. Hegel`, `G. W. F. Hegel` | `Hegel` |

Han-internal variant → canonical forward-stub:

| Variant | Canonical forward-stub |
|---|---|
| `Other`, `Otherness`, `The Other (Han)` | `The Other` |
| `Secret`, `The Secret` | `Secrecy` |
| `punctum` | `Punctum` |
| `Storage vs Memory` | `Memory vs Storage` |
| `Framing (Heidegger)` | `Framing (Ge-Stell)` |
| `Postpolitical` | `Postpolitics` |
| `Tourist vs Pilgrim`, `Pilgrim and Tourist`, `Pilgrim and the Tourist` | `Pilgrim vs Tourist` |

**Do NOT auto-merge** (ambiguous or genuinely distinct — left as separate forward-stubs):
- `Transparency (Han)` — real definition file; leave.
- `Information (Han)` — real definition file; leave.
- `Pornographic Image`, `Pornographic Body`, `Porno-Society` — distinct phrasings; leave as forward-stubs or unlink.
- `Aperspectival Digital Panopticon` — distinct from `Digital Panopticon`; leave.
- `Deceleration` ≠ `Acceleration`; `Scenic Distance` / `Aesthetic Distance` / `Distance` are distinct; `The Same` ≠ `Hell of the Same`; `Concealment` left separate from `Secrecy`; `Neoliberal Dispositive`, `Ritual`, `Trust`, `Truth`, `Theory`, `Memory`/`Storage` (bare poles) left as standalone forward-stubs (strong note candidates for a future pass).
- Cross-author concepts (`Aura`, `Eros`, `Cult Value`, `Punctum`, `Studium`, `Seduction`, `Disciplinary Society`, `Homo Sacer`, `Ge-Stell`/`Ge-Menge`, `Tarrying with the Negative`, `das Ding`, `Halo (Agamben)`) — left as forward-stubs per policy; realized when their source book is ingested.

---

## Forward-Stub Policy

A **forward-stub** is a wiki-link to a canonical name whose note does not exist yet but is committed. Forward-stubs are allowed and expected. They are NOT errors — they mark durable concepts that will be realized when their primary source enters the vault.

Two classes of legitimate forward-stub:

1. **Cross-author concepts awaiting their source book.** Examples: `Aura`, `Punctum`, `Studium` (Barthes — *Camera Lucida*), `Spectacle` / `The Society of the Spectacle` (Debord), `Eros` (Marcuse — *Eros and Civilization*), `Disciplinary Society` / `Biopolitics` (Foucault), `Homo Sacer` (Agamben). Do not create these as Han-tinted stubs now; they get proper pages when Benjamin / Barthes / Debord / Marcuse / Foucault / Agamben are ingested.

2. **Author pages for figures without books in `raw/`.** Examples: `Martin Heidegger`, `Carl Schmitt`, `Jean-Jacques Rousseau`, `Friedrich Nietzsche`, `Gilles Deleuze`, `Roland Barthes`, `Giorgio Agamben`. These become real author notes only if/when their work is added to `raw/`. Until then they are valid forward-stub link targets.

**Do not** forward-stub one-off descriptive phrases that are not durable entities (e.g. `Light that Scorches the Soul`, `Audience of Papagenos`, `Drowning in Self-Intimacy`). Render those as plain text.

---

## The Link Naming Rule (for all generation)

> Every wiki-link target must be a bare canonical note title — identical to the filename without `.md`. It must resolve to (a) a note that exists, (b) a note being created in the same pass, or (c) a declared forward-stub per the policy above. Never wrap link targets in a type prefix (`Argument -`, `Concept -`, `Metaphor -`, etc.). When in doubt, prefer plain text over an invented link.

See also: [[_system/schemas|Schemas]] (Link Naming Rule section), [[_system/ingest_pipeline|Ingest Pipeline]].
