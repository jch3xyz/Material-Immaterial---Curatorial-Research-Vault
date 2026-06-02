---
type: system_doc
status: generated
last_updated: 2026-06-02
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

## Canonical Note Names — Lippard ingest (2026-06-01)

Added by *Six Years: The Dematerialization of the Art Object*. Book: `Six Years`. Author: `Lucy Lippard`. Source summaries: `Lippard - Six Years - <section>` (10: Escape Attempts, Author's Notes, Preface, 1966–1971, Postface).

- **concepts/**: Conceptual Art · Dematerialization · Exhibition as Medium · The Document (Conceptual Art). (`Information` and `Systems Theory` gained Lippard author-sections — shared notes, not new.)
- **arguments/**: Conceptual art achieved distribution but not accessibility · Dematerialization failed to escape the market · In conceptual art the form not the content carried the politics.
- **definitions/**: Dematerialization (Lippard).
- **tensions/**: `Material vs Immaterial` gained a Lippard section — now a THREE-author tension (Han + Hayles + Lippard).
- **references/**: Lucy Lippard and {Hans Haacke, Joseph Kosuth, N. Katherine Hayles, Seth Siegelaub, Sol LeWitt}. (The Lippard↔Hayles note is the interpretive dematerialization ↔ disembodiment parallel.)

New **artist/curator forward-stubs** (figures without a book in `raw/`): `Sol LeWitt`, `Joseph Kosuth`, `Lawrence Weiner`, `Robert Barry`, `Douglas Huebler`, `Hans Haacke`, `Seth Siegelaub`, `On Kawara`, `Mel Bochner`, `Dan Graham`, `Art & Language`, etc. Jack Burnham (*Beyond Modern Sculpture*, in `raw/`, not yet ingested) is a forward-stub.

### Lippard-internal variant fix (applied 2026-06-01)

| Variant | Canonical note |
|---|---|
| `The Document` | `The Document (Conceptual Art)` |

> Not realized by Lippard (kept as forward-stubs — better served by dedicated art/new-media books): `New Media Art` (37 refs) and `Art as Experiential Technology` (28 refs) are committed research-foci stubs; conceptual art is only their *precursor*. Realize when Ascott / Vierkant / Price / Burnham are ingested.

---

## Canonical Note Names — O'Gieblyn ingest (2026-06-01)

Added by *God, Human, Animal, Machine: Technology, Metaphor, and the Search for Meaning*. Book: `God Human Animal Machine`. Author: `Meghan O'Gieblyn`. Source summaries: `OGieblyn - God Human Animal Machine - <chapter>` (13).

**New concepts/** (~20): Algorithmic Determinism · Disembodied Information as the Soul · Disenchantment · Eliminativism · Idealism · Imago Dei · Integrated Information Theory · Mind Uploading · Panpsychism · Patternism · Re-enchantment · Technology as Metaphor · The Algorithm as Providence · The Black Box · The Hard Problem of Consciousness · The Measurement Problem · The Mind-Body Problem · The Simulation Hypothesis · Theodicy · Transhumanism.

**Cross-book UPDATES** (existing notes that gained an O'Gieblyn author-section — do NOT duplicate these): `The Computational Universe` (now 5 authors) · `Information` (4) · `Emergence` (4) · `The Body as Data` · `Posthumanism` · `Embodiment` · `The Liberal Humanist Subject` · `Pattern and Randomness` · `Distributed Cognition`.

**New arguments/** (21), **definitions/** (12, several `(O'Gieblyn)` or `(O'Gieblyn via X)`), **metaphors/** (8 — incl. the realized committed stub `Mind as Machine`, plus `The Golem`, `Graven Images`, `The Pattern in the Stream`), **symbols/** (`Job and the Algorithm`, `The Aibo`), **tensions/** (`Disenchantment vs Re-enchantment`, `Free Will vs Determinism`, `Human Exceptionalism vs Ontological Equality`, `Metaphor vs Literalism`, `Subject vs Object`).

**references/**: Meghan O'Gieblyn and {René Descartes, Max Weber, Ray Kurzweil, Hans Moravec, Norbert Wiener, David Chalmers, Nick Bostrom, N. Katherine Hayles}. (The O'Gieblyn↔Hayles note is the second vault-internal interpretive reference, on transhumanism/embodiment/the posthuman.)

New **author/figure forward-stubs**: `René Descartes`, `Max Weber`, `David Chalmers`, `Nick Bostrom`, `Max Tegmark`, `Giulio Tononi`, `Frank Tipler`, `Teilhard de Chardin`, `Alan Turing` (existing), plus theological figures (`John Calvin`, `Martin Luther`). Realize if their work is ingested.

---

## Canonical Note Names — Han Psychopolitics ingest (2026-06-02)

Added by *Psychopolitics: Neoliberalism and New Technologies of Power*. Book: `Psychopolitics`. Author: **`Byung-Chul Han` (his SECOND book in the vault)** — the author note was **extended, not duplicated** (Transparency Society content preserved). Source summaries: `Han - Psychopolitics - <chapter>` (13). This was the heaviest cross-book merge yet (27 existing notes gained a Psychopolitics author-section).

**New concepts/** (20): Psychopolitics · Smart Power · Big Data · Dataism · Emotional Capitalism · Gamification · Idiotism · Beyond the Subject · The Event · Immanence and A Life · Capital as Religion · Can vs Should · The Project (Han) · Biopolitics *(realized — was a Foucault forward-stub; now Han-anchored, open to a future Foucault author-section)* · Self-Optimization · Healing as Killing · Allo-Exploitation · Immaterial Labour · Dictatorship of Capital · Immunological Age.

**New definitions/** (4): Psychopolitics (Han) · Smart Power (Han) · Dataism (Han) · Feeling vs Emotion vs Affect (Han).

**New symbols/** (2): The Mole and the Snake · Friendly Big Brother.

**New tensions/** (4): Biopolitics vs Psychopolitics · Discipline vs Control · Subject vs Project · Counting vs Recounting.

**New arguments/** (4): Freedom itself is producing coercion · Foucault failed to make the turn to psychopolitics · Big Data is blind to the event and so blind to the future · Naomi Klein's shock model misreads neoliberal power.

**New references/** (8): `Byung-Chul Han and {Gilles Deleuze, Naomi Klein, Karl Marx, Friedrich Nietzsche, Antonio Negri, George Orwell, Eva Illouz, Bernard Stiegler}`. (Deleuze/Klein/Marx/Nietzsche from the planner; Negri/Orwell/Illouz/Stiegler added in finalize to close dangling cross-author links — "if linked, the page must exist".)

**Cross-book UPDATES** (existing notes that gained a Psychopolitics author-section — do NOT duplicate): `Exploitation of Freedom` · `Auto-Exploitation` · `Achievement Society` · `Digital Panopticon` · `Aperspectival Panopticon (Han)` · `Society of Control` (Deleuze attribution upgraded to Directly-stated) · `Positivity` · `Negativity` · `Information` (now 5-author) · `Smoothness` · `Transparency` · `Hell of the Same` · `Acceleration` · `Hypercommunication` · `Narrativity` · `Pornography (Han)` · `Gleichschaltung` · `The Body as Data` · `The Like Button` (symbol) · `Erfahrung vs Erlebnis (Han)` (def) · `Freedom vs Control` · `Positivity vs Negativity` · `Material vs Immaterial` (now FOUR-author) · `Narration vs Addition` (tensions) · `Byung-Chul Han and Michel Foucault` · `Byung-Chul Han and Hegel` · `Byung-Chul Han and Walter Benjamin` (references) · `The digital panopticon runs on voluntary self-exposure` (argument — now a TWO-book Han argument, extended in finalize).

New **author forward-stubs** (cited substantively, no book in `raw/`): `Antonio Negri`, `George Orwell`, `Eva Illouz`, `Bernard Stiegler`, `André Gorz`, `Milton Friedman`, `Robert Kurz`, `David Brooks`, `Chris Anderson`, `Zygmunt Bauman`, `David Lyon`, `Evgeny Morozov`, `Botho Strauss`, `Clément Rosset`. `Gilles Deleuze`, `Karl Marx`, `Friedrich Nietzsche` now have reference notes but their author pages remain forward-stubs per policy. One-off figures (Ewen Cameron, Tony Robbins, Csikszentmihalyi, Acxiom) render as plain text, not links.

> Realized this pass: `Biopolitics` (was a committed Foucault forward-stub, now Han-anchored). Still deferred per policy: `Disciplinary Society` (37 refs), `The Digital Unconscious`, `The Ban-opticon`, `Human Capital`, `Immaterial Production`, plus the Psychopolitics-internal argument/symbol stubs in the book/author notes (e.g. `The freedom of Can is more coercive than the disciplinary Should`, `The Smartphone`, `The Psychogram`) — strong candidates for a future orphan-generation pass.

### Psychopolitics-internal variant fixes (applied 2026-06-02, finalize)

Verified variant→canonical rewrites (alias-preserving) caught in the normalization backstop:

| Variant (as written) | Canonical note |
|---|---|
| `Klein's shock doctrine misreads neoliberal power` | `Naomi Klein's shock model misreads neoliberal power` |
| `Exhibition Value Exceeds the Marxian Frame` | `Exhibition value is a third value form beyond Marx` |
| `Biopolitics (Han via Foucault)` | `Biopolitics` |
| `The Immunological Age` | `Immunological Age` |
| `Foucault's Disciplinary Society` | `Disciplinary Society` *(forward-stub)* |
| `Bentham's Panopticon` | `The Panopticon` |
| `Nietzsche` | `Friedrich Nietzsche` |
| `Shock (Klein)` | *(no note — unlinked to plain text; covered by `Immunological Age` + the Klein argument)* |
| `The digital panopticon inverts Orwell from negativity to positivity` | `The digital panopticon runs on voluntary self-exposure` *(retargeted; the two-book argument)* |

---

## Canonical Note Names — Harari Homo Deus ingest (2026-06-02)

Added by *Homo Deus: A Brief History of Tomorrow*. Book: `Homo Deus`. Author: **`Yuval Noah Harari` (new)**. Source summaries: `Harari - Homo Deus - <file-ordinal> <title>` (11). First ingest under the **fixed source-filename regex** — sources are correctly single-`.md`. Deeply cross-connected with the Dataism / consciousness / posthuman cluster.

**New concepts/** (29): The New Human Agenda · Homo Deus *(concept; coexists with the `books/Homo Deus` note, same pattern as `Psychopolitics`)* · Intersubjective Reality · Large-Scale Flexible Cooperation · Organisms Are Algorithms · The Anthropocene · Humanism (Harari) · Liberal Humanism (Harari) · Evolutionary Humanism · Knowledge = Experiences × Sensitivity · The Modern Covenant · The Growth Imperative · Capitalism as Religion (Harari) · Religion as Social Order · Society as Algorithm · Writing Reshapes Reality · Can It Suffer (The Reality Test) · The Decoupling of Intelligence from Consciousness · The Experiencing Self vs The Narrating Self · Free Will as Fiction (Harari) · The Useless Class · Algorithms That Know Us Better Than We Know Ourselves · Upgrading Inequality · Techno-Humanism · The Ocean of Consciousness · Freedom of Information · The Internet-of-All-Things · Industrial Farming · Techno-Religion.

**New definitions/** (8): Algorithm (Harari) · Humanism (Harari) · Experience (Harari) · Religion (Harari) · The Reality Test (Harari) · The Narrating Self and the Experiencing Self (Harari) · Dataism (Harari) · A-mortality (Harari).

**New tensions/** (8): Intelligence vs Consciousness · Meaning vs Power · Objective vs Subjective vs Intersubjective · Healing vs Upgrading · Religion vs Spirituality · Truth vs Cooperative Power · Distributed vs Centralised Processing · Homo-Centric vs Data-Centric.

**New metaphors/** (5): The Web of Meaning · Consciousness as Mental Pollution · The Gun in Act I · Retiring the Horses · The Private CIA and State Department. **New symbols/** (3): The Hi-Tech Ark · The Gestation Crate · Aaron Swartz, Dataism's First Martyr.

**New arguments/** (4): Fulfilling humanism will destroy it by making humans irrelevant · Technology not philosophy will break liberalism · Science strengthens myths rather than replacing them with facts · The self is an imaginary story like nations gods and money.

**New references/** (10): `Yuval Noah Harari and {N. Katherine Hayles, Meghan O'Gieblyn, Byung-Chul Han}` (vault-internal interpretive bridges — Dataism / the posthuman / consciousness), plus `Yuval Noah Harari and {Karl Marx, Friedrich Nietzsche, Daniel Kahneman, Thomas Nagel, René Descartes, Charles Darwin, Alan Turing}` (added in finalize to close dangling links — "if linked, the page must exist").

**Cross-book UPDATES** (existing notes that gained a Harari author-section — do NOT duplicate): `Dataism` *(the keystone merge — Han + Harari; Brooks coined the word, Harari built the worldview/religion)* · `Information` · `The Computational Universe` · `The Body as Data` · `Posthumanism` · `Transhumanism` · `The Liberal Humanist Subject` · `The Hard Problem of Consciousness` · `Algorithmic Determinism` · `The Algorithm as Providence` (concepts) · `Free Will vs Determinism` · `Material vs Immaterial` · `Human Exceptionalism vs Ontological Equality` (tensions).

New **author forward-stubs** (cited substantively, no book in `raw/`): `Daniel Kahneman`, `Thomas Nagel`, `Friedrich Hayek`. Reused existing stubs now reference-linked: `Karl Marx`, `Friedrich Nietzsche`, `René Descartes`, `Charles Darwin`, `Alan Turing`, `Ray Kurzweil` (his book is in `raw/`, not yet ingested). Per policy, forward-stub author figures get **no author-note file** until their work is ingested (a stray `authors/Thomas Nagel.md` created mid-run was removed to preserve this). One-off figures (Aaron Swartz handled as a symbol; Dennett, de Waal, Harlow, Watson, Gazzaniga, Sperry, Valla, Borges, Ceaușescu) render as plain text.

> **Notes for future passes:** (1) `Homo Deus` exists as BOTH `books/Homo Deus.md` and `concepts/Homo Deus.md` (the upgraded human-god) — same accepted base-name pattern as `Psychopolitics`; Obsidian disambiguates by path. (2) Homo Deus's raw **file ordinals** (01, 03, 04, 06…) trail Harari's **internal chapter numbers** (Part dividers are skipped); source summaries follow the vault file-ordinal convention for SHA-cache consistency and record Harari's internal number in the body.

### Vault-wide variant normalization (2026-06-02 finalize, Homo Deus pass)

A thorough difflib sweep caught variant duplicates of real notes — several **pre-existing** from the Lippard/O'Gieblyn ingests that earlier passes missed. Verified, alias-aware rewrites (67 occurrences):

| Variant (as written) | Canonical note |
|---|---|
| `Lucy R. Lippard` | `Lucy Lippard` (20×, pre-existing) |
| `Pattern vs Randomness` | `Pattern and Randomness` (10×) |
| `Dematerialization failed to escape the art market` | `Dematerialization failed to escape the market` (8×, pre-existing) |
| `God, Human, Animal, Machine` | `God Human Animal Machine` (7×) |
| `Byung-Chul Han - The Transparency Society` | `The Transparency Society` (5×) |
| `Experiencing Self vs Narrating Self` | `The Experiencing Self vs The Narrating Self` (3×) |
| `The eternal questions have become engineering problems` | `All the eternal questions have become engineering problems` |
| `The Soul as Empty Carapace` | `The Soul as an Empty Carapace` |
| `The disembodiment of information was contingent, not inevitable` | `The disembodiment of information was contingent not inevitable` |
| `The digital panopticon exploits voluntary self-exposure` | `The digital panopticon runs on voluntary self-exposure` |
| `Computational Universe` | `The Computational Universe` |
| `Immaterial Labor` | `Immaterial Labour` |
| `The Theatrum Mundi` | `Theatrum Mundi` |
| `Intimacy is the psychological formula of transparency` | `Intimacy as Psychological Formula of Transparency` |
| `Processor vs Procession` | `Procession vs Processor` |
| `The Turing Test as Magic Trick` | `The Turing Test as a Magic Trick` |

Left as **genuinely distinct** (not variants): `The Ban-opticon` (Bauman/Lyon ≠ `The Panopticon`); `Virality` (O'Gieblyn ch. ≠ `Virtuality`).

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
