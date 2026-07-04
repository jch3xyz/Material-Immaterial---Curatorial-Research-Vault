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

## Canonical Note Names — Kurzweil The Singularity Is Near ingest (2026-06-02)

Added by *The Singularity Is Near: When Humans Transcend Biology*. Book: `The Singularity Is Near`. Author: **`Ray Kurzweil` (new)** — realizes the most heavily forward-stubbed figure in the vault (57+ inbound refs from O'Gieblyn/Harari/Hayles). Source summaries: `Kurzweil - The Singularity Is Near - <file-ordinal> <title>` (11). **Ingested in two halves** (Prologue+Ch1-4, then Ch5-9+Epilogue) because the book is the largest in the queue and the single-pass planner overflowed; see log.

**New concepts/** (18): The Singularity · The Law of Accelerating Returns · The Six Epochs · Reverse-Engineering the Human Brain · Order as Information That Fits a Purpose · Paradigm Shift and the S-Curve · Transcending Biology · Nanobots · Neuromorphic Modeling · GNR (Genetics Nanotechnology Robotics) · Strong AI · Full-Immersion Virtual Reality · Human Body Version 2.0 · The Universe Wakes Up · Singularitarian · Decentralization · Self-Replication Risk (Gray Goo) · Defensive Technologies.

**New definitions/** (2): The Singularity (Kurzweil) · The Law of Accelerating Returns (Kurzweil). *(Note: `The Singularity` exists as a concept AND `definitions/The Singularity (Kurzweil)` AND the pre-existing `definitions/The Singularity (O'Gieblyn)` — distinct by design; `books/The Singularity Is Near` is the book. Obsidian disambiguates by path, as with `Psychopolitics`/`Homo Deus`.)*

**New tensions/** (5): Exponential vs Linear · Biology vs Technology · Promise vs Peril · Privacy vs Security · Relinquishment vs Development.

**New metaphors/** (5): Technology as Magic · Version 1.0 Biological Bodies · How Smart Is a Rock · The Lily Pads on the Lake · The Event Horizon of the Singularity. **New symbols/** (2): The Ultimate Laptop · Smart Dust.

**New arguments/** (10): We are not our bodies but a pattern of information that persists through material turnover · Uploading is a gradual unnoticed merger not a sudden scan and copy · The Chinese Room proves nothing because understanding belongs to the whole system not the man · Whether a machine is conscious is not a scientific question but the fundamental philosophical one · Broad relinquishment is unworkable and would require totalitarianism and make the dangers worse · Strong AI cannot be contained only value-aligned because it will be us · Molecular manufacturing collapses physical value into information · Immortality is contingent on continual maintenance of the mind file · The human is central after all not dethroned by science · Biology is dramatically suboptimal and must be transcended not merely repaired.

**New references/** (5): `Ray Kurzweil and {N. Katherine Hayles, Yuval Noah Harari, Byung-Chul Han, John Searle, Bill Joy}`. The **Kurzweil ↔ Han** note is the standout cross-book bridge (Kurzweil *embraces* the pervasive decentralized surveillance — smart dust, the nanobot-instrumented body — that Han's `Digital Panopticon` and Harari's Dataism diagnose as domination; he concedes abuse via `Privacy vs Security` without resolving it).

**Cross-book UPDATES** (existing notes that gained a Kurzweil author-section — do NOT duplicate): `Patternism` *(Kurzweil is the primary source O'Gieblyn reports on — 'I describe myself as a patternist')* · `Mind Uploading` · `The Computational Universe` · `Information` · `The Body as Data` · `Transhumanism` · `Posthumanism` · `Emergence` (concepts) · `Material vs Immaterial` *(now 5 authors)* · `Embodiment vs Information` (tensions) · `Digital Panopticon` · `Dataism` · `The Hard Problem of Consciousness` · `Re-enchantment` (Half-2 surveillance/consciousness/cosmology merges) · the reference `Meghan O'Gieblyn and Ray Kurzweil` (corroborated from the primary text).

New **author forward-stubs**: `John Searle`, `Bill Joy`, `Vernor Vinge`, `Edward Fredkin`, `Bill McKibben` (cited, no book in `raw/`). `Hans Moravec`, `Marvin Minsky` already existed. Distinctions enforced (NOT merged): `The Law of Accelerating Returns` (Kurzweil — celebratory exponential tech growth) vs `Acceleration` (Han — pathological temporal/social acceleration); `A-mortality` stays Harari's coinage (Kurzweil's radical life extension cross-links it).

### Singularity-pass variant fixes (applied 2026-06-02, finalize)

Verified alias-aware rewrites (25 occurrences): `Singularity`→`The Singularity` (9×) · `GNR (Genetics, Nanotechnology, Robotics)`→`GNR (Genetics Nanotechnology Robotics)` (7×, comma) · `Like Button`→`The Like Button` (4×) · `"How Smart Is a Rock?"`→`How Smart Is a Rock` · `Exhibition Value (Han)`→`Exhibition Value` · `Internet-of-All-Things`→`The Internet-of-All-Things` · `The Singularitarian`→`Singularitarian` · `references/Meghan O'Gieblyn and Ray Kurzweil`→`Meghan O'Gieblyn and Ray Kurzweil`. Left distinct: `Deculturalization` (Han concept ≠ `Decentralization`); `The Transparent House` (Han's Roman-house symbol ≠ `The Transparent Customer`).

---

## Canonical Note Names — Haraway A Cyborg Manifesto ingest (2026-06-02)

Added by *A Cyborg Manifesto* (1985). Book: `A Cyborg Manifesto`. Author: **`Donna Haraway` (new — realizes the forward-stub declared in the Hayles ingest; canonical name is `Donna Haraway`, NOT `Donna J. Haraway`)**. Source summaries: `Haraway - A Cyborg Manifesto - <NN [Section]>` (6: An Ironic Dream of a Common Language, Fractured Identities, The Informatics of Domination, The Homework Economy Outside the Home, Women in the Integrated Circuit, Cyborgs - A Myth of Political Identity). This is the primary-source ingest of the cyborg, so it was a heavy cross-book merge into notes the vault had grounded only secondhand in Hayles.

**New concepts/** (11): The Informatics of Domination *(Haraway's coinage — the historic shift from organic hierarchical dominations to coded command-control-communication networks; the source Hayles took the word `Informatics` from; kept DISTINCT from `Informatics`)* · The Breached Boundaries *(the three boundary breakdowns: human/animal, organism/machine, physical/nonphysical)* · The Refusal of Innocence · Affinity Not Identity · Fractured Identities · Oppositional Consciousness *(Chela Sandoval, via Haraway)* · Women of Color as a Cyborg Identity · Cyborg Writing · Women in the Integrated Circuit · The Homework Economy · The World as a Problem of Coding.

**New definitions/** (3): Cyborg (Haraway) · The Informatics of Domination (Haraway) · The Homework Economy (Haraway after Gordon). *(Note: `Cyborg (Haraway)` is a definition note distinct from the concept `The Cyborg`; `The Informatics of Domination (Haraway)` is the definition beside the concept `The Informatics of Domination`, same pattern as `Information`/`Information (Han)`.)*

**New tensions/** (3): Domination vs Possibility *(the "double vision" — folds the identity-vs-affinity and totality-vs-partiality oppositions)* · Cyborg vs Goddess · Regeneration vs Rebirth.

**New metaphors/** (2): Machines Made of Sunshine · The Salamander (Regeneration). **New symbols/** (3): I Would Rather Be a Cyborg Than a Goddess · Blasphemy · C3I.

**New arguments/** (7): The cyborg is our ontology and it gives us our politics · Take pleasure in the confusion of boundaries and responsibility for their construction · The cyborg has no origin story in the Western sense · There is no natural basis for the unity of women · The world is being translated into a problem of coding · The homework economy is made possible by not caused by the new technologies · The machine is us an aspect of our embodiment.

**New references/** (2): `Donna Haraway and Michel Foucault` *(her 1985 demotion of biopolitics — "the cyborg simulates politics" — converging with Han's later "Foucault failed to make the turn to psychopolitics"; Foucault remains a forward-stub author)* · `Donna Haraway and Karl Marx` *(socialist-feminism with internal critique; Marx remains a forward-stub author)*.

**Cross-book UPDATES** (existing notes that gained a Donna Haraway author-section — do NOT duplicate): `The Cyborg` *(THE keystone — the note now carries Haraway's OWN primary-text section beside Hayles's secondhand account)* · `Informatics` *(the originating "informatics of domination" sense Hayles borrowed; the note's deferral language to "await Haraway's ingest" is now resolved)* · `Posthumanism` · `Embodiment` · `Cybernetics` · `The Body as Data` · `Information` · `Immaterial Labour` *(the feminized homework economy as a precursor to Han's immaterial labour)* (concepts) · `Material vs Immaterial` *(now a SIX-author tension — the cyborg as "a condensed image of both imagination and material reality")* · `Human Exceptionalism vs Ontological Equality` (tensions) · the reference `N. Katherine Hayles and Donna Haraway` *(upgraded from one-sided/deferred to a two-sided account from the primary text)*.

New **author forward-stubs / one-off figures** (cited substantively, no book in `raw/`): `Michel Foucault` and `Karl Marx` now have Haraway reference notes but their author pages remain forward-stubs per policy. Rendered as **plain text** (one-off figures, no author-note files): Chela Sandoval, Katie King, Catharine MacKinnon, Julia Kristeva, Richard Gordon, Fredric Jameson, Rachel Grossman, Zoë Sofoulis/Sofia, Bruno Latour, Audre Lorde, Cherríe Moraga, Octavia Butler, Joanna Russ, and the other SF writers. `Herbert Marcuse` (One-Dimensional Man) and `Carolyn Merchant` (The Death of Nature) named as the organicist tradition Haraway argues against — left as forward-stubs, no reference note this pass.

### Distinctions enforced (NOT merged)

- `The Informatics of Domination` (Haraway — the coded-control regime) is kept **distinct** from `Informatics` (Hayles — the broader relational field of information technologies + social/cultural change). The two are cross-linked; this is the keystone merge of the ingest.
- `Cyborg (Haraway)` (definition) ≠ `The Cyborg` (concept). `The Informatics of Domination (Haraway)` (definition) ≠ `The Informatics of Domination` (concept).
- The Haraway–Han biopolitics convergence is captured **inside** `Donna Haraway and Michel Foucault` (cross-linked to `Biopolitics vs Psychopolitics`); NO `Byung-Chul Han and Donna Haraway` note was minted (they never cite each other, stakes differ).

### Haraway-pass variant/dangling fixes (applied 2026-06-02, finalize)

Verified alias-aware rewrites, all in the book and author notes' "Major Arguments/Definitions/Symbols/Tensions" lists and Supports lines (the generation agents paraphrased argument titles instead of using the canonical filenames):

| Variant (as written) | Canonical note |
|---|---|
| `The cyborg is our ontology and our politics` | `The cyborg is our ontology and it gives us our politics` |
| `Take pleasure in the confusion of boundaries and responsibility in their construction` | `Take pleasure in the confusion of boundaries and responsibility for their construction` |
| `The Three Breached Boundaries` | `The Breached Boundaries` |
| `The Homework Economy (Haraway)` | `The Homework Economy (Haraway after Gordon)` |
| `There is nothing natural that binds women into a unity` | `There is no natural basis for the unity of women` |
| `Political unity must be built through affinity not natural identity` | `Affinity Not Identity` / `There is no natural basis for the unity of women` |
| `Totalizing feminisms leave no structural room for race`, `MacKinnon's radical feminism constructs woman as a nonbeing` | `Fractured Identities` |
| `The world has shifted from organic domination to the informatics of domination` | `The Informatics of Domination` / `The world is being translated into a problem of coding` |
| `Communications sciences and biology translate the world into a problem of coding` | `The world is being translated into a problem of coding` |
| `The cyborg is not subject to biopolitics it simulates politics`, `Foucault's biopolitics is a flaccid premonition of cyborg politics` | `Donna Haraway and Michel Foucault` |
| `Cyborg politics refuses innocence and organic wholeness` | `The Refusal of Innocence` |
| `The cyborg has no origin story and refuses the myth of original unity` | `The cyborg has no origin story in the Western sense` |
| `The machine is us not an other to dominate` | `The machine is us an aspect of our embodiment` |
| `Identity vs Affinity` | `Affinity Not Identity` |
| `Totality vs Partiality` | `The Refusal of Innocence` |
| `We require regeneration not rebirth` | *(unlinked — captured by the `Regeneration vs Rebirth` tension + `The Salamander (Regeneration)` metaphor)* |
| `The Goddess (Opposed)`, `Refused Origin Myths`, `Women in the Integrated Circuit (Haraway)` | *(folded — into `Cyborg vs Goddess` / `The Refusal of Innocence` / the `Women in the Integrated Circuit` concept)* |

`[[#Cross-book note]]` in `Donna Haraway and Michel Foucault` is a valid same-file heading anchor (not a dangling note).

---

## Canonical Note Names — McLuhan Understanding Media ingest (2026-06-03)

Added by *Understanding Media: The Extensions of Man* (1964). Book: `Understanding Media`. Author: **`Marshall McLuhan` (new)**. Source summaries: `McLuhan - Understanding Media - <NN [Chapter]>` (34 — Introduction + Ch1-33). The vault's largest book; ingested via a **custom big-book workflow** (34 parallel analyses → 7 sequential chunked planners sharing a running canonical-names list → single generation + index). 136 interpretive notes created; 21 cross-book updates. See `log.md`.

**New concepts/** (42): The Medium Is the Message · Media as Extensions of Man · Media Hot and Cold · The Global Village · The Content of Any Medium Is Another Medium · Reversal of the Overheated Medium · Hybrid Energy · Autoamputation · Narcosis · Sense Ratios · Acoustic vs Visual Space · Explosion vs Implosion · Detribalization and Retribalization · Typographic Man · The Phonetic Alphabet · The Electric Age as Extension of the Central Nervous System · The Technological Extension of Consciousness · Leasing the Central Nervous System · Man as Servomechanism of His Extensions · The Mosaic · The Break Boundary · Media as Translators · Challenge and Collapse · Media Change as Collective Surgery · Specialism as Counter-Irritant · Depth as Insight Not Point of View · A Pluralism of Centers · Center-Margin Structure · Statement Without Syntax · The Artist as Integral Awareness · The Authority of Knowledge · The Restoration of the Role · Money as a Medium · Number as the Extension of Touch · Print as the Architect of Nationalism · Automation as Learning a Living · Games as Extensions of the Social Man · Transportation as Communication · Advertising as the Extension of Automation Toward a Collective Consciousness · The Social Hormone · Government by News Leak · The War of the Icons · **The Content Obsession** *(added in finalize — the fixation on content that blinds us to the medium; "the numb stance of the technological idiot"; opposes `The Medium Is the Message`)*.

**New definitions/** (13): The Medium Is the Message (McLuhan) · Extensions of Man (McLuhan) · Hot and Cool Media (McLuhan) · Autoamputation (McLuhan) · Narcosis (McLuhan) · Hybrid Energy (McLuhan) · Number (McLuhan) · Money (McLuhan) · Nationalism (McLuhan) · Automation (McLuhan) · Collective Surgery (McLuhan) · The Phonetic Alphabet (McLuhan) · The Break Boundary (Boulding via McLuhan).

**New tensions/** (8): Hot vs Cool Media · Mechanical vs Electric · Fragmentation vs Wholeness · Numbness vs Awareness · Detachment vs Participation · Center vs Margin · Job vs Role · Liberty vs Capture.

**New metaphors/** (28): incl. Narcissus as Narcosis · The Brothel-without-Walls · The Tribal Drum · Man as the Sex Organs of the Machine World · The Brain Outside the Skull · An Eye for an Ear · The Global Village (metaphor — coexists with the concept, base name `The Global Village`) · The Gift of Gutenberg · The Midas Touch · The Carapace (Car as Shell) · The Age of the Iron Whim · The Burglar's Meat · The Seamless Web · Babel vs Pentecost · The Dragon's Teeth (Cadmus) · The Schmoo · Consciousness Without Walls · etc. **New symbols/** (5): The Electric Light · The Credit Card · Canned Dreams · The Forest of Arden · The Idol (113th Psalm).

**New arguments/** (32): incl. The medium not its content is the message · Every extension of man is an autoamputation that numbs perception · Electric light is the clearest proof that the medium is the message because light is information without content · The neutral-instrument view of technology is the numb stance of the technological idiot · We have leased our central nervous systems to private corporations · Electric speed reverses explosion into implosion · Only the phonetic alphabet not writing in general created the detribalized civilized individual · Hitler's rise was a media effect of radio's form not its content · Art is the only known immunity to technological trauma so the artist is indispensable to survival · etc.

**New references/** (8): `Marshall McLuhan and {N. Katherine Hayles, Byung-Chul Han, Donna Haraway, Ray Kurzweil, Yuval Noah Harari}` (vault-internal interpretive bridges — McLuhan is foundational to all of them: media/embodiment, electric speed/acceleration, extensions→cyborg, the global nervous system→network/Dataism) + `Marshall McLuhan and {Karl Marx, Lewis Mumford, Elias Canetti}` (Marx/Mumford/Canetti are forward-stub authors).

**Cross-book UPDATES** (existing notes that gained a Marshall McLuhan author-section — do NOT duplicate): `Information` · `Embodiment` · `The Body as Data` · `The Cyborg` · `Posthumanism` · `Acceleration` · `Distributed Cognition` · `Cybernetics` · `Homeostasis` · `Inscription vs Incorporation` · `Feedback Loops` · `Mind Uploading` · `Immaterial Labour` · `Digital Panopticon` · `Decentralization` · `Exhibition Value` (concepts) · `Material vs Immaterial` *(now a SEVEN-author tension)* · `Fragrance of Time` (metaphor) · the references `Marshall McLuhan and {Kurzweil, Harari, Hayles}` (extended across chunks).

New **author forward-stubs** (cited substantively, no book in `raw/`): `Lewis Mumford`, `Elias Canetti`, `Henri Bergson`, `Kenneth Boulding`, `Harold Innis` (McLuhan's mentor). `Karl Marx` reused. Per policy, no author-note files for these until their work is ingested.

### Distinctions enforced / coexisting base names (NOT errors)

- `Media as Extensions of Man` (concept) ≠ `Extensions of Man (McLuhan)` (definition).
- `Media Hot and Cold` (concept) beside `Hot and Cool Media (McLuhan)` (definition) and `Hot vs Cool Media` (tension). Note the concept uses "Cold" while the def/tension use McLuhan's "Cool" — kept as-is; all three cross-reference each other. Canonical concept link target: `Media Hot and Cold`.
- `The Global Village` exists as BOTH a concept and a metaphor (same base name, different folders — Obsidian disambiguates by path; same pattern as `Hell of the Same`). Link to `[[The Global Village]]`; do NOT write `[[The Global Village (metaphor)]]`.
- `The Medium Is the Message` exists as concept AND `The Medium Is the Message (McLuhan)` definition.

### McLuhan-pass variant/dangling fixes (applied 2026-06-03, finalize)

Verified alias-preserving rewrites caught in the normalization backstop (chunked-planner naming divergence):

| Variant (as written) | Canonical note |
|---|---|
| `Hot and Cool Media` (bare, 8×) | `Media Hot and Cold` (the concept; the def is `Hot and Cool Media (McLuhan)`) |
| `Hot vs Cool` (6×) | `Hot vs Cool Media` |
| `The Extensions of Man` (3×) | `Media as Extensions of Man` |
| `The Medium is the Message` (lowercase "is", 3×) | `The Medium Is the Message` |
| `The Global Village (metaphor)` | `The Global Village` |
| `The Printed Word - Architect of Nationalism` | `Print as the Architect of Nationalism` |
| `The Content Obsession` (6×, dangling) | *(realized — concept note created in finalize)* |
| filename `...radios form...` + `[[...radio's form...]]` split | unified on `Hitler's rise was a media effect of radio's form not its content` (file renamed via `git mv`, all 8 links standardized to the apostrophe form) |

Left correct (false positive): `[[Media as Extensions of Man\|central nervous system]]` inside a markdown table — the `\|` is a table-escaped alias pipe, valid Obsidian syntax, NOT a dangling `Media as Extensions of Man\` link.

---

## Canonical Note Names — Han The Burnout Society ingest (2026-06-04)

Added by *The Burnout Society* (*Müdigkeitsgesellschaft*, 2010, trans. Erik Butler). Book: `The Burnout Society`. Author: **`Byung-Chul Han` (his THIRD book in the vault)** — the author note was **extended, not duplicated** (Transparency Society + Psychopolitics content preserved; the "Books in the Vault" line flipped from "not yet processed" to ingested). Source summaries: `Han - The Burnout Society - <NN Chapter>` (8: Neuronal Power, Beyond Disciplinary Society, Profound Boredom, Vita Activa, The Pedagogy of Seeing, The Bartleby Case, The Society of Tiredness, Burnout Society). This book is the **chronological ORIGIN** of much of the vault's existing Han vocabulary (achievement society, auto-exploitation, positivity/negativity, the immunological→neuronal shift, Can/Should), so it was a heavy create-or-extend pass (30 updates) anchoring those notes in their primary text.

**New concepts/** (15 — 14 planned + 1 realized in finalize): Negative Potency *(Agamben's potenza di non / "the power not-to"; the single canonical name — NOT "The Power Not-To"; kept DISTINCT from `Negativity`)* · Hyperattention · Multitasking · Deep Contemplative Attention · Profound Boredom · Vita Contemplativa · Hyperactivity as Hyperpassivity · Bare Life *(Han-anchored via Agamben — the achievement-subject as homo sacer of itself; open to a future Agamben section; kept DISTINCT from the forward-stub `Homo Sacer`)* · Animal Laborans *(Han-anchored via Arendt)* · Fundamental Tiredness *(the keystone tiredness concept, holding both the I-/we-tiredness poles)* · Community of Singularities · Doping Society · Burnout *(the title malady; coexists with `books/The Burnout Society` per the Psychopolitics/Homo Deus base-name pattern)* · Neuronal Violence · **Disciplinary Society** *(realized in finalize — was the vault's most heavily-linked forward-stub at 61 inbound refs/19 files; ch.3 "Beyond Disciplinary Society" + ch.7 Bartleby + ch.9 are now the strongest Han primary-text anchor; realized Han-anchored on the `Biopolitics` precedent, open to a future Foucault author-section; `Michel Foucault` stays a forward-stub author)*.

**New arguments/** (7): The achievement society supersedes the disciplinary society · Depression is caused by the imperative to achieve not the failure to become oneself · The pathologies of the present are infarctions not infections · The contemplative life is more active than hyperactivity · Bartleby is a story of exhaustion not de-creation · The society to come is a society of tiredness · The achievement-subject is the homo sacer of its own self.

**New tensions/** (5): Vita Activa vs Vita Contemplativa · Deep Attention vs Hyperattention · I-Tiredness vs We-Tiredness · **Discipline vs Achievement** *(realizes the dangling tension the Han author note already referenced; kept DISTINCT from the Deleuzean `Discipline vs Control` — Han explicitly rejects "control society" as the successor and names achievement; the two are cross-linked)* · Positive Potency vs Negative Potency.

**New metaphors/** (7): The Project as Projectile · Prometheus and the Eagle · The Dream Bird That Hatches the Egg of Experience *(Benjamin)* · Dancing Escapes the Achievement-Principle · The Machine of Positivity *(Positivmaschine; also holds ch.6's pejorative "idiot savant" — NOT to be merged with the affirmative `Idiotism`)* · The Pentecostal Company · The Internal Work Camp.

**New references/** (6): `Byung-Chul Han and {Hannah Arendt, Giorgio Agamben, Alain Ehrenberg, Peter Handke, Sigmund Freud, Richard Sennett}`. (Agamben note is the keystone — homo sacer/bare life borrowed-and-inverted, the Bartleby polemic, state of exception. Ehrenberg is Han's running polemical target on depression. Freud/Sennett were already in the author note's related_authors.)

**Cross-book UPDATES** (30 existing notes gained a Burnout-Society author-section — do NOT duplicate; many are the note's PRIMARY source): `Immunological Age` *(ch.2 Neuronal Power is its fullest exposition)* · `Achievement Society` · `Auto-Exploitation` · `Allo-Exploitation` · `Can vs Should` · `Positivity` · `Negativity` · `Hell of the Same` · `Acceleration` · `Narrativity` · `Society of Control` · `Self-Optimization` · `Healing as Killing` · `Exploitation of Freedom` · `Gleichschaltung` · `The Project (Han)` (concepts) · `Erfahrung vs Erlebnis (Han)` (def) · `Positivity vs Negativity` · `Discipline vs Control` · `Subject vs Project` · `Freedom vs Control` · `Narration vs Addition` (tensions) · the references `Byung-Chul Han and {Jean Baudrillard, Friedrich Nietzsche, Walter Benjamin, Martin Heidegger, Hegel, Carl Schmitt, Michel Foucault}`.

New **author forward-stubs** (cited substantively, no book in `raw/`): `Hannah Arendt`, `Alain Ehrenberg`, `Peter Handke`, `Herman Melville` (each now has, or is named in, a reference note). `Giorgio Agamben`, `Sigmund Freud`, `Richard Sennett` already existed as related-author stubs. Agamben-owned concepts kept as forward-stubs: `Homo Sacer`, `State of Exception`, plus the literary figure `Bartleby`. Rendered as **plain text** (one-off figures): Roberto Esposito, Jürgen Habermas, Cézanne, Merleau-Ponty, Maurice Blanchot, Kafka (Prometheus/Hunger Artist handled inside metaphors). `Obedience-Subject` retargeted to `[[Disciplinary Society|obedience-subject]]`.

### Distinctions enforced / coexisting base names (NOT errors)

- `Burnout` (concept, the malady) ≠ `The Burnout Society` (book). `Negative Potency` (Agambenian faculty) ≠ `Negativity` (dialectical/immunological category). `Bare Life` (realized, Han-anchored) ≠ `Homo Sacer` (Agamben forward-stub). `Disciplinary Society` (realized, Han-anchored) ≠ `Discipline`/`Discipline vs Control`/`Discipline vs Achievement`.
- `Vita Contemplativa` is a concept; `Vita Activa` is covered by the `Vita Activa vs Vita Contemplativa` tension + the Arendt reference (no standalone `Vita Activa` concept — 0 dangling links).
- The ch.6 "idiot savant"/"autistic" (a NEGATIVE figure of pure positivity, inside `The Machine of Positivity`) must NOT be merged with the affirmative `Idiotism` (Psychopolitics ch.13).

### Burnout-pass variant/dangling fixes (applied 2026-06-04, finalize)

| Variant (as written) | Canonical note |
|---|---|
| `[[Burnout Society\|depression and burnout]]` | `Burnout` *(the malady; the book is `The Burnout Society`)* |
| `[[Obedience-Subject]]` | `[[Disciplinary Society\|obedience-subject]]` |
| `Deep Boredom` (chapter prose) | `Profound Boredom` *(chapter title / canonical concept)* |

---

## Canonical Note Names — Burnham *Beyond Modern Sculpture* ingest (2026-06-05)

Added by *Beyond Modern Sculpture: The Effects of Science and Technology on the Sculpture of This Century* (1968) — the vault's foundational **systems-esthetics** primary source. Book: `Beyond Modern Sculpture`. Author: **`Jack Burnham` (new — realizes the forward-stub declared in the Lippard ingest; canonical name `Jack Burnham`)**. Source summaries: `Burnham - Beyond Modern Sculpture - <NN Chapter>` (9: Introduction + Ch1-8). Ingested via a **custom big-book workflow** (`_system/workflows/_run_burnham.js`): 9 parallel analyses → 3 sequential chunked planners (object-side / formalism→automata / system-side) sharing a running canonical-names list → single generation + index. 128 interpretive notes + book + author + 9 sources (139 new); 20 cross-book updates. The cross-book UPDATE notes + 2 committed-stub creates **under-persisted** in the first generation pass (returned a path without the write landing) and were regenerated via an **analysis-driven** repair workflow (`_run_burnham_fix.js` — read the small analysis files, not the 150KB raw). See `log.md`.

**New concepts/** (36): Systems Esthetics *(Burnham's art-specific object→system thesis; American spelling; kept DISTINCT from `Systems Theory`)* · Object and System *(the book's spine)* · Reification *(thingification / Verdinglichung, after Marx)* · Technics *(la technique, after Ellul)* · Scientific Idealism · The Scientific Demiurge · The Sculpture Base · The Vanishing Base · The Readymade · Object Art · Vitalism · Organicism · Form Exhaustion · Formalism (Burnham) · The Scientific Model · Topology as the New Formalism · Light as a Sculpture Medium · Phenomenalism (Burnham) · Automata · Subsculpture · The Robot · The Faustian Urge to Re-create Life Nonbiologically · The Clockwork Universe · Luminosity · The Unrequited Art · Kinetic Art · The New Tendency and Field Kinetics · The Closed Kinematic Chain · Systems Consciousness · Cyborg Art · Reciprocal Communication · The Mock Robot · Anthropomorphism in Sculpture · Sculpture as Biological Signal · **New Media Art** *(realized — was a committed research-focus forward-stub, 21 inbound files, deferred in the Lippard ingest "until Ascott/Burnham")* · **Art as Experiential Technology** *(realized — committed stub, 18 inbound files; both to be EXTENDED when Ascott is ingested)*.

**New definitions/** (21, all `(Burnham)` or `(X via Burnham)`): System (Burnham) · Object (Burnham) · Reification (Burnham) · Technique (Ellul via Burnham) · Entropy (Burnham) · Elan Vital (Bergson via Burnham) · Mechanism (Burnham) · Base Pedestal Plinth (Burnham) · Topology (Burnham) · Phenomenological Reduction (Husserl via Burnham) · Carnal Intersubjectivity (Merleau-Ponty via Burnham) · Subsculpture (Burnham) · Automata (Burnham) · Robot (Capek via Burnham) · Cyborg (Burnham) · Cybernetics (Burnham) · Negative Feedback (Burnham) · Homeostasis (Cannon via Burnham) · Plasma (Burnham) · Kinematics vs Kinetics (Burnham) · Objecthood (Fried via Burnham).

**New arguments/** (28): incl. Modern sculpture is not dying of formal exhaustion but achieving its oldest goal the simulation of life · Only the machine not anthropomorphism can bring inert matter to life · A base-less sculpture ceases to be an object and becomes a physical system of forces · Constructivist sculpture dematerialized its support from the conceptual models of science · Vitalism is the transitional step from the sculptural object to the system · Technology's logic of duplication has dealt a death blow to the unique art object · The history of automata is the aesthetic core of a Faustian drive to re-create life nonbiologically · A machine may be more responsive to human needs than another person · The true goal of the kinetic revival was immateriality not machine motion · For Object Art presence is everything for Systems Art information is the key · There are no qualitative differences between living and nonliving matter · A biological society that builds superintelligent automata will be dominated by them · Sculpture seeks its own obliteration by becoming the life it imitates · (see `log.md`/`maps/Argument Index.md` for the full 28).

**New metaphors/** (14): A Scribble in the Air *(Herbert Read, Introduction — the dematerialization bridge to Lippard)* · The Kybernetes as the New Prime Mover · The Universe as a Spendthrift Artist *(Boulding)* · Form as a Waterfall Not a Crystal · Embodying Space Without Matter Like Music · The Hooded Machine · The Transistor Radio vs the Watch · The Mechanized Stage as Organism · Joey the Mechanical Boy · Pygmalion and Galatea · The Music-Box Automata · The Bicycle Wheel as a Turtle on Its Back · The Light Bulb as Pure Information · Technology as a Self-Propelled Time-Binding Web.

**New symbols/** (10): The Scientific Model as Icon · The Automobile as Leased System · The Pylon Sign (Las Vegas) · The No-Sculptures (Goodman) · Vaucansons Duck · The Strasbourg Cathedral Clock · The Robot *(coexists with the concept `The Robot`)* · The Tortoise (Machina Speculatrix) · Searcher (Seawright) · The Pieta Shipped Across the Ocean.

**New tensions/** (15): Object vs System *(the keystone — distinct from, and cross-linked to, `Material vs Immaterial`)* · Mechanism vs Vitalism · Organic vs Geometric · Vitalism vs Organicism · Gravity vs Mobility · Form vs Light · Idealism vs Phenomenalism · Apollonian vs Faustian · Anthropomorphic vs Non-Anthropomorphic Logic Machine · Determinism vs Randomness · Art vs Technics · One-Way Stimulation vs Two-Way Communication · Living vs Nonliving Matter · Magical vs Scientific Imitation of Life · Objecthood vs Theatre.

**New references/** (4 — all vault-internal interpretive bridges, labelled interpretive synthesis NOT citations Burnham made): `Jack Burnham and {Lucy Lippard, Donna Haraway, N. Katherine Hayles, Marshall McLuhan}`. The **Burnham ↔ Lippard** note is the keystone (Burnham 1968 object→system / Read's "scribble in the air" predates and parallels Lippard's dematerialization). **Burnham ↔ Haraway**: Burnham's 1968 "Cyborg Art (the art of cybernetic organisms)" anticipates Haraway's 1985 cyborg by 17 years.

**Cross-book UPDATES** (20 existing notes gained a `## Jack Burnham (Beyond Modern Sculpture)` section — do NOT duplicate): `Material vs Immaterial` *(now an **EIGHT-author** tension — Han, Hayles, Lippard, Harari, Kurzweil, Haraway, McLuhan, Burnham; the book's literal object→system spine)* · `Systems Theory` · `Dematerialization` *(Burnham as PRECURSOR to Lippard, cross-linked)* · `The Cyborg` *(Burnham's 1968 cyborg-art section beside Hayles/Haraway)* · `Cybernetics` · `Artificial Life` · `Emergence` *(kept DISTINCT from the new `Vitalism`)* · `Posthumanism` · `Homeostasis` · `Technology as Metaphor` · `Distributed Cognition` · `Conceptual Art` · `Feedback Loops` · `Idealism` *(scientific idealism; kept distinct from philosophy-of-mind Idealism)* · `The Computational Universe` · `Pattern and Randomness` · `Metaphor vs Literalism` · `Embodiment` · `The Body as Data` · `Acceleration` · `Information` · `Exhibition as Medium`. (Systems Theory + Feedback Loops landed in the first pass; the rest via the repair pass.)

New **author forward-stubs** (cited substantively, no book in `raw/`): `Jacques Ellul`, `Herbert Read`, `Friedrich Jünger`, `Thomas Kuhn`, `C. G. Jung`, `Wilhelm Worringer`, `Oswald Spengler`, `Henri Focillon`, `Edmund Husserl`, `Maurice Merleau-Ponty`, `Karel Capek`, `Christopher Langton`, `Edward Fredkin`, `Michael Fried`. Reused existing stubs: `Kenneth Boulding`, `Henri Bergson`, `Lewis Mumford`, `Karl Marx`, `Norbert Wiener`, `Marvin Minsky`, `Niels Bohr`, `René Descartes`, `Max Weber`, `Nick Bostrom`, `David Chalmers`, `Hans Moravec`, `Claude Shannon`, `Humberto Maturana`, `Francisco Varela`, `Warren McCulloch`, `Sol LeWitt`, `Hans Haacke`, `Seth Siegelaub`, `Marcel Duchamp`, `Joseph Kosuth`. Artists (Brancusi, Gabo, Calder, Tinguely, Moholy-Nagy, Schöffer, Takis, Rickey, Wilfred, Flavin, Paik, Seawright, etc.) render as plain text per one-off policy.

### Distinctions enforced / coexisting base names (NOT errors)

- `Systems Esthetics` (Burnham — the art object→system thesis) ≠ `Systems Theory` (the broader cross-author field). Cross-linked.
- `The Robot` exists as BOTH a concept (the automaton-form + its sociology) and a symbol (the stainless-steel folklore icon) — same base name, different folders (Obsidian disambiguates by path; the `Hell of the Same` / `The Global Village` precedent). Link to `[[The Robot]]`; the concept is the default conceptual target.
- The Cyborg cluster — four distinct notes: concept `The Cyborg` (cross-author, updated with a Burnham section) · new concept `Cyborg Art` (the art form) · new definition `Cyborg (Burnham)` · existing definition `Cyborg (Haraway)`. Do not merge.
- Object cluster: concept `Object Art` ≠ concept `Object and System` ≠ definition `Object (Burnham)` ≠ tension `Object vs System`.
- `Automata` (concept) beside `Automata (Burnham)` (def); `Subsculpture` (concept) beside `Subsculpture (Burnham)` (def); `Phenomenalism (Burnham)` (concept) beside `Phenomenological Reduction (Husserl via Burnham)` (def) and `Idealism vs Phenomenalism` (tension).
- `The Sculpture Base` (the base as institution/convention) and `The Vanishing Base` (its disappearance, Ch1) are kept distinct and cross-linked.
- `Vitalism` (concept, non-material life-essence) kept DISTINCT from `Emergence` (bottom-up self-organization) and from `Organicism` (the `Vitalism vs Organicism` tension carries the relation).
- `New Media Art` and `Art as Experiential Technology` are realized as full Burnham-anchored concepts (committed stubs), to be EXTENDED — not re-created — when Ascott (*Telematic Embrace*) is ingested.

### Burnham-pass variant/dangling fixes (applied 2026-06-05, finalize)

Verified alias-preserving rewrites caught in the normalization backstop (chunked-planner naming divergence + source-summary over-linking):

| Variant (as written) | Canonical note |
|---|---|
| `Mechanism` (13×) | `Mechanism (Burnham)` |
| `Entropy` (4×) | `Entropy (Burnham)` |
| `Cyborg` (2×) | `The Cyborg` |
| `Base, Pedestal, Plinth (Burnham)` (3×) | `Base Pedestal Plinth (Burnham)` |
| `Object Art (Minimalism)` (3×) | `Object Art` |
| `Joey, the Mechanical Boy` | `Joey the Mechanical Boy` |
| `McLuhan` (bare surname) | `Marshall McLuhan` |
| `From Object to System` (3×) | `Object and System` |
| `The vanishing base is symptomatic of sculpture's transformation` | `The Vanishing Base` |
| `A base-less sculpture becomes a system of forces not a formal object` | `A base-less sculpture ceases to be an object and becomes a physical system of forces` |
| `Constructivism dematerialized support by importing the conceptual models of science`, `Constructivist Dematerialization` | `Constructivist sculpture dematerialized its support from the conceptual models of science` |
| `Technologys logic…` (file renamed via `git mv` to the apostrophe form) | `Technology's logic of duplication has dealt a death blow to the unique art object` |
| `Jack Burnham and Henri Focillon` *(bogus ref — Focillon not ingested)* | `Henri Focillon` *(author forward-stub)* |
| `Hitler's rise was a media effect of radios form not its content` *(pre-existing McLuhan straggler)* | `Hitler's rise was a media effect of radio's form not its content` |

**Unlinked to plain text** (one-off descriptive phrases / Ch1 base-paraphrases, not durable standalone notes — content captured by the created notes): `The Base as Anti-Base`, `The Base as Launching Pad`, `The Twilight Zone of the Base`, `Floor-Bound Sculpture`, `Air-Borne Sculpture`, `The Bird Leaving the Nest`, `A Different Animal`, `Animism of the Base (Brancusi)`, `If any object on a base is sculpture the base destroys its own meaning`, `The base encodes biological immobility and gravity…`, `The withering of the base secularizes…`, `Secularization of Sculpture`, `Idealism vs Secularization`, `Dis-synchrony`, `Denigration vs Iconization`, `Tensegrity`, `Symbolic Appearance`, `Operationalization`, `Hermeneutic Depth`, `Pornography of the Visible`, `Technology and Perception`, `Aesthetic Contemplation`, `The Visible vs The Invisible`, `The Readymade is a Goedel's Theorem of aesthetics`, `The Life of Forms (Focillon)`, bare `Material`/`Immaterial`, and malformed book links `Donella Meadows - Thinking in Systems` / `Guy Debord - The Society of the Spectacle`.

---

## Canonical Note Names — Ascott *Telematic Embrace* ingest (2026-06-08)

Added by *Telematic Embrace: Visionary Theories of Art, Technology, and Consciousness* (Roy Ascott, ed. Edward A. Shanken, 2003) — collected writings 1964-2003 by the founder of **telematic art** and a 1960s **cybernetic-art** pioneer alongside Jack Burnham. Book: `Telematic Embrace`. Author: **`Roy Ascott` (new — realizes the last forward-stub author in the corpus)**. Source summaries: `Ascott - Telematic Embrace - <NN Title>` (29: Shanken's editorial intro "From Cybernetics to Telematics" + 28 Ascott essays). Ingested via the **custom big-book chunked workflow** (`_system/workflows/_run_ascott.js`): 29 parallel analyses → 7 sequential chunked planners (early cybernetic/behaviourist art → telematics/network consciousness → cyberception/technoetics/moistmedia) sharing a running canonical-names list → single generation + index. 213 interpretive notes + book + author + 29 sources (244 new); 30 cross-book updates. **NOTE: ch.04 is Edward Shanken's editorial introduction — its quotes are attributed to Shanken (the editor), not Ascott.** The 30 cross-book updates + 1 metaphor create under-persisted in the generation pass and the first (multi-Edit) repair; a **single-full-file-Write** repair (`_run_ascott_fix.js` v2) landed all 30/30 with 0 content loss. See `log.md`.

**New concepts/** (75): Telematic Art · The Telematic Embrace *(coexists with the metaphor of the same name)* · Network Consciousness · Behaviourist Art · The Cybernetic Vision · Cybernetic Art Matrix · The Participator · Distributed Authorship · A Field Theory of Art · Network as Artwork · Cyberception · Technoetics · Technoetic Aesthetics · Moistmedia · Telenoia · Gesamtdatenwerk · Apparition · The Double Gaze · Double Consciousness · The Shamantic Web · The Post-Biological Body · The Post-Biological Era · The Distributed Self · Telepresence · Net Art · The Datapool · Data Space · Hypermedia · Telematic Discourse · Negotiated Meaning · The Democratisation of Meaning · Observer-Created Reality · The Planetary Collegium · Nature II · The Rematerialization of Art · Connectivism · Transpersonal Art · Visionary Pragmatism · Psibernetics · Futuribles · Psychotechnology · The Cybernated Society · The Groundcourse · Connective Criticism · Formalist Modernism (Ascott) · Postmodernist Art (Ascott) · Radical Constructivism (Ascott) · Simulation (Ascott) · Triangulation (Ascott) · The Computer as Matrix · The Computer as Behaviour Not Thing · The Computer as an Extra-Sensory Device · The Interface as Doorway · The Holomatic Principle · Global Vision · Telematic Time · Electronic Space and Molecular Time · Post-Photographic Practice · The Second Order of Reproduction · The Five-Fold Path · The Five Defining Features · Art as a Form of Behaviour · The City as Zone of Transformation · Inter-Reality · Cyber-estate · The Cybernet · The Mind of the Museum · The Museum of the Third Kind · Gardens of Hypotheses · Cyberbotany · The Building of Sentience · The Telematic Imperative · The Transformative Vocation · The Artist as Designer of Context. (See `maps/Concept Index.md` for clustering.)

**New definitions/** (22, all `(Ascott)` or `(X via Ascott)`): incl. Telematics (Ascott) · Cyberception (Ascott) · Technoetics (Ascott) · Moistmedia (Ascott) · Telenoia (Ascott) · Behaviourist Art (Ascott) · Gesamtdatenwerk (Ascott) · Network Consciousness (Ascott). **New metaphors/** (20): incl. The Telematic Embrace *(metaphor — coexists with the concept)* · The Shamantic Web · The Double Gaze · The Interface as Doorway · Gardens of Hypotheses. **New symbols/** (5): incl. The Change Painting. **New tensions/** (25): incl. Form vs Behaviour-adjacent oppositions, Dry vs Wet (Moist), Appearance vs Apparition, Connected vs Isolated, Object vs Process. **New arguments/** (57): see `maps/Argument Index.md`.

**New references/** (9 — all vault-internal interpretive bridges unless Ascott cites them): `Roy Ascott and {Jack Burnham, Marshall McLuhan, N. Katherine Hayles, Donna Haraway, Lucy Lippard, Meghan O'Gieblyn, Byung-Chul Han, Hans Moravec, Ray Kurzweil}`. The **Ascott ↔ Burnham** note is the keystone (the two poles of 1960s cybernetic art: Burnham's systems esthetics of the object→system vs Ascott's behavioural/participatory cybernetic art); **Ascott ↔ McLuhan** (global village → network consciousness).

**Cross-book UPDATES** (30 existing notes gained a `## Roy Ascott (Telematic Embrace)` section — do NOT duplicate): `Material vs Immaterial` *(now a **NINE-author** tension — Han, Hayles, Lippard, Harari, Kurzweil, Haraway, McLuhan, Burnham, Ascott)* · `New Media Art` *(Burnham realized it from cybernetic art; Ascott carries it into networked/telematic art — the dimension the stub was built to receive)* · `Art as Experiential Technology` · `Cyborg Art` · `The Cyborg` · `Reciprocal Communication` · `Cybernetics` · `Systems Esthetics` · `Systems Theory` · `Object and System` · `Object vs System` · `One-Way Stimulation vs Two-Way Communication` · `Feedback Loops` · `Emergence` · `Information` · `The Global Village` · `Distributed Cognition` · `The Observer` · `Re-enchantment` · `Dematerialization` · `Exhibition as Medium` · `The Seamless Web` · `The Computational Universe` · `Posthumanism` · `Embodiment` · `Conceptual Art` · `Virtuality` · `Autopoiesis` · `The Body as Data` · `Artificial Life` · `Mind Uploading`.

New **author forward-stubs** (cited substantively, no book in `raw/`): `Gordon Pask` *(Ascott's key cybernetic influence)* · `Gregory Bateson` · `Heinz von Foerster` · `Stafford Beer` · `Edward A. Shanken` *(the editor)* · `Pierre Lévy` · `Vilém Flusser` · `William S. Burroughs` · `Timothy Leary` · `B. F. Skinner` · `Jacques Derrida` · `Roland Barthes` · `Charles Taylor`. Reused existing stubs: `Norbert Wiener`, `Hans Moravec`, `Humberto Maturana`, `Francisco Varela`, `Christopher Langton`, `Edward Fredkin`, `Marvin Minsky`, `Teilhard de Chardin`, `Walter Benjamin`, `Marcel Duchamp`, `Sol LeWitt`, `Seth Siegelaub`, `Hans Haacke`, `Joseph Kosuth`, `Jean Baudrillard`, `Michel Foucault`, `Max Weber`. `Marshall McLuhan` is an ingested author → reference note, not a stub.

### Distinctions enforced / coexisting base names (NOT errors)

- `The Telematic Embrace` exists as BOTH a concept and a metaphor (same base name, different folders; Obsidian disambiguates by path — the `Hell of the Same` / `The Global Village` / `The Robot` precedent). Link to `[[The Telematic Embrace]]`; the concept is the default conceptual target.
- `Technoetics` (concept) ≠ `Technoetics (Ascott)` (definition); `Technoetic Aesthetics` is the distinct named aesthetic programme.
- `The Cybernetic Vision` (Ascott's term) and `Cybernetic Art Matrix` (his CAM proposal) are distinct; bare `Cybernetic Art` links retarget to `The Cybernetic Vision`. Cross-linked to Burnham's `Cyborg Art` / `Systems Esthetics` and the shared `Cybernetics` note.
- `Distributed Authorship` (Ascott) is the canonical name; `Dispersed Authorship` is a variant → retargeted.
- Ascott EXTENDS the Burnham-realized stubs (`New Media Art`, `Art as Experiential Technology`, `Cyborg Art`, `Systems Esthetics`, `Reciprocal Communication`) — these are multi-author notes now, not re-created.

### Ascott-pass variant/dangling fixes (applied 2026-06-08, finalize)

Verified alias-preserving rewrites (chunked-planner naming divergence + source-summary over-linking):

| Variant (as written) | Canonical note |
|---|---|
| `Dispersed Authorship` (9×) | `Distributed Authorship` |
| `Technoetics (Ascott)` (6×, as a concept link) | `Technoetics` *(the `(Ascott)` form is the definition)* |
| `Cybernetic Art` (4×) | `The Cybernetic Vision` |
| `Telematic Love` (4×) | `The Telematic Embrace` |
| `telematic embrace` (lowercase) | `The Telematic Embrace` |
| `Telematic Culture` | `Telematic Art` |
| `Global Village` | `The Global Village` |

**Unlinked to plain text** (one-off phrases / essay-&-section titles / paraphrased argument titles, not durable standalone notes): `Form vs Behaviour`, `The Construction of Change`, `Connective Paradigm`, `Art and Consciousness`, `Closing the Loop`, `Laying Out the Threads of a Network`, `Mirror Mirror on the Wall`, `The Artwork as Matrix`, `The Horizontal Surface`, `Art as System and Process`, `Art as an Arrow to the Future`, `Linear vs Cyclical`, and ~9 paraphrased argument sentences (e.g. "Art is a behavioural field…", "The vision of art has shifted from the field of objects to the field of behaviour", "Formalist modernism is Newtonian…").

---

## Canonical Note Names — Zuboff *The Age of Surveillance Capitalism* ingest (2026-06-08)

Added by *The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power* (Shoshana Zuboff, 2019) — **the 13th and FINAL book; completes the planned corpus** and realizes the vault's **surveillance research focus**. Book: `The Age of Surveillance Capitalism`. Author: **`Shoshana Zuboff` (new — the corpus's 11th and last author)**. Source summaries: `Zuboff - The Age of Surveillance Capitalism - <NN Chapter>` (19: "The Definition" + Ch1-18). Ingested via the custom big-book chunked workflow (`_system/workflows/_run_zuboff.js`): 19 parallel analyses → 6 sequential chunked planners (Foundations / Advance / Instrumentarian Power — the book's 3-part structure) → single generation + index. 264 interpretive notes + book + author + 19 sources (285 new); 27 genuine cross-book updates (the planner also double-listed 26 of Zuboff's own concepts as "updates" — handled by the create path). The cross-book updates + 2 creates under-persisted in the generation wave even with the atomic-Write update path; a dedicated atomic-Write repair (`_run_zuboff_fix.js`) landed them. See `log.md`.

**New concepts/** (87): Surveillance Capitalism · Behavioral Surplus · Instrumentarian Power · Big Other · Prediction Products · Behavioral Futures Markets · The Means of Behavioral Modification · The Division of Learning in Society · Rendition · The Reality Business · The Right to the Future Tense · The Right to Sanctuary · The Hive · A Utopia of Certainty · The Coup from Above · Radical Indifference · Guaranteed Outcomes · Anticipatory Conformity · Tuning, Herding, and Conditioning · Telestimulation · The Will to Will · The Extraction Imperative · The Prediction Imperative · Economies of Action · Economies of Scope · The Uncontract · Inevitabilism · The Unprecedented · Second Modernity · Digital Dispossession · The Dispossession Cycle · Asymmetries of Knowledge and Power · Radical Behaviorism · Social Physics · Reality Mining · The Machine Zone · Glass Life · The Art and Science of Hiding · Be the Friction · The Other-One · The One Voice · Affective Computing · Machine Intelligence · Surveillance Exceptionalism · The Two Texts · Conquest by Declaration · The Hiding Strategy · The Behavioral Value Reinvestment Cycle · Databases of Ruin · The God View · Homing to the Herd · No Exit · The Fourth Fictional Commodity · The Horseless Carriage · The Syndrome of the Horseless Carriage · … (see `maps/Concept Index.md` for the full list + clustering).

**New definitions/** (31, all `(Zuboff)` or `(X via Zuboff)`): incl. Surveillance Capitalism (Zuboff) *(her 8-part dictionary definition)* · Instrumentarian Power (Zuboff) · Big Other (Zuboff) · Behavioral Surplus (Zuboff) · Rendition (Zuboff). **New arguments/** (67), **metaphors/** (27), **symbols/** (13, incl. The Aware Home · The Nest Thermostat), **tensions/** (27, incl. Knowledge vs Power · Inevitability vs Contingency · The Individual vs The Hive · Market Power vs Popular Sovereignty).

**New references/** (12): `Shoshana Zuboff and {Byung-Chul Han, Yuval Noah Harari, Ray Kurzweil, Meghan O'Gieblyn, Donna Haraway, …}`. The **Zuboff ↔ Han** note is the keystone (Big Other ↔ the digital panopticon; surveillance capitalism ↔ psychopolitics); the **Zuboff ↔ Kurzweil** note is the standout "surveillance embraced vs diagnosed" pairing (Kurzweil celebrates the ubiquitous computing Zuboff indicts).

**Cross-book UPDATES** (27 existing notes gained a `## Shoshana Zuboff (...)` section or an Authors-and-Variants Zuboff bullet — do NOT duplicate): the keystones are `Digital Panopticon` (Big Other), `Big Data` (behavioral surplus), `Dataism` (the data economy) · plus `Society of Control` · `Smart Power` · `Psychopolitics` · `Biopolitics` · `The Body as Data` · `Information` · `The Algorithm as Providence` · `Society as Algorithm` · `Gamification` · `Self-Optimization` · `Capital as Religion` · `Auto-Exploitation` · `Narcosis` · `New Media Art` *(now a THREE-author note — Burnham + Ascott + Zuboff's anti-surveillance art)* · `Art as Experiential Technology` · the tensions `Material vs Immaterial` *(now a **TEN-author** tension)* · `Free Will vs Determinism` · the symbols `Friendly Big Brother` · `The Mole and the Snake` · `The Transparent Customer` · `The Like Button`. **REALIZED the long-committed forward-stubs `Surveillance` and `Quantified Self`** (Zuboff-anchored, open to other authors).

New **author forward-stubs** (cited substantively, no book in `raw/`): `B. F. Skinner` *(radical behaviorism — already a stub)* · `Hannah Arendt` · `Émile Durkheim` · `Hal Varian` · `Alex Pentland` · `Karl Polanyi` · `Zygmunt Bauman` · `David Brin`. Reused existing stubs: `Karl Marx`, `Max Weber`, `Michel Foucault`, `Gilles Deleuze`, `Hannah Arendt`, `Giorgio Agamben`, `Norbert Wiener`, `George Orwell`. Companies/executives (Google, Facebook, Eric Schmidt, Larry Page, Mark Zuckerberg) render as plain text.

### Distinctions enforced (NOT errors)

- `Surveillance Capitalism` (concept) ≠ `Surveillance Capitalism (Zuboff)` (the 8-part definition). `Big Other` (concept) ≠ `Big Other (Zuboff)` (def); Big Other is contrasted with — not merged into — Orwell's Big Brother / `Friendly Big Brother`.
- `Instrumentarian Power` is kept distinct from totalitarianism (the `Two Species of Power` argument) and from Han's `Psychopolitics` / Deleuze's `Society of Control` (cross-linked, not merged).
- `The Horseless Carriage` (concept — the metaphor of misreading the new through the old) ≠ `The Syndrome of the Horseless Carriage` (the specific ch.12 syndrome). Both kept.
- `Quantified Self` and `Surveillance` realized Zuboff-anchored but explicitly open to other authors (cross-author concepts).

### Zuboff-pass variant/dangling fixes (applied 2026-06-08, finalize)

| Variant (as written) | Canonical note |
|---|---|
| `Behavioral Modification` | `The Means of Behavioral Modification` |
| `Tuning`, `Herding`, `Conditioning` | `Tuning, Herding, and Conditioning` |
| `The Quantified Self` | `Quantified Self` |
| `Extraction Imperative` | `The Extraction Imperative` |
| `Prediction Imperative` | `The Prediction Imperative` |
| `Economies of Scale Scope and Action` | `Economies of Action` |
| `Contract vs Uncontract` | `The Uncontract` |
| `Knowledge vs Power (Zuboff)` | `Knowledge vs Power` |
| `Inevitability vs Agency` | `Inevitability vs Contingency` |
| `The Instrumentarian Collective` | `Instrumentarian Power` |
| `A Coup from Above` | `The Coup from Above` |
| `Right to Sanctuary` | `The Right to Sanctuary` |
| `The Discovery of Behavioral Surplus` | `Behavioral Surplus` |

**Unlinked to plain text** (~68 occurrences — paraphrased argument sentences + one-off metaphor/example phrases, e.g. "Surveillance capitalism is a coup from above", "The Diamond Mine (Behavioral Surplus)", "The Shark Circling the Depths", "Invisible Ribbons of Scent", "The Montes Bakery (La Dulce)", "02 The Definition", and the stray confidence-label link "Interpretive synthesis"). Entity-like Zuboff stubs (`The Aware Home`, `The Nest Thermostat`, `Market Power vs Popular Sovereignty`, `Section 230 (The Intermediary Shield)`, `Elective Affinity (Zuboff via Weber)`) left as legitimate forward-stubs.

---

## Canonical Note Names — Meadows *Thinking in Systems* ingest (2026-07-04)

Added by *Thinking in Systems: A Primer* (Donella H. Meadows, drafted 1993, ed. Diana Wright, pub. posthumously 2008) — the vault's PRIMARY, native-discipline source for **systems theory** (system dynamics; Meadows was a student of Jay Forrester and lead author of *The Limits to Growth*). **CORPUS RE-EXPANSION:** Meadows was removed 2026-06-04 and RE-ADDED by the user 2026-07-04 (same pattern as the Zuboff re-add). Book: `Thinking in Systems`. Author: **`Donella Meadows` (new — the corpus's 12th author)**. Source summaries: `Meadows - Thinking in Systems - <NN Chapter>` (9: Introduction + Ch1-7 + Appendix). Ingested via the custom big-book chunked workflow (`_system/workflows/_run_meadows.js`): 9 parallel analyses → 4 sequential chunked planners (System Structure & Behavior / Systems & Us / Change & Leverage / Living-with-Systems & Appendix) → single generation with updates in a SEPARATE post-create wave → one index pass. 154 new notes (book + author + 9 sources + 143 interpretive) + 11 cross-book updates. **The cleanest big-book run to date** — 0 create stragglers, all 11 updates landed with a `## Donella Meadows` section on the first pass (the split-wave + atomic-Write update path worked).

**New concepts/** (45): A System · Elements Interconnections and Purpose · Structure Determines Behavior · Systems Thinking · Stocks and Flows · Balancing Feedback Loop · Reinforcing Feedback Loop · Dynamic Equilibrium · Shifting Dominance · Delays · Oscillation · Overshoot and Collapse · The Limits-to-Growth Archetype · Stock-Limited vs Flow-Limited Resources · The Systems Zoo · Event Behavior Structure · Feedback Policy · Limiting Factor · Layers of Limits · Resilience · Self-Organization *(kept DISTINCT from `Emergence` and `Autopoiesis`)* · Hierarchy (Systems) · Bounded Rationality · Nonlinearity · No Separate Systems · System Traps · Policy Resistance · Drift to Low Performance · Escalation · Success to the Successful · Shifting the Burden to the Intervenor · Rule Beating · Seeking the Wrong Goal · The Tragedy of the Commons · Leverage Points · The Twelve Leverage Points · Information Flows · Rules (Systems) · System Goals · Paradigms · Transcending Paradigms · Suboptimization · Mental Models · Intrinsic Responsibility · Dancing with Systems.

**New definitions/** (23, all `(Meadows)` or `(X via Meadows)`): System · Stock · Flow · Feedback Loop · Balancing Feedback Loop · Reinforcing Feedback Loop · Dynamic Equilibrium · Nonlinear Relationship · Limiting Factor · Buffer · Resilience · Self-Organization · Hierarchy · Bounded Rationality (Simon via Meadows) · Leverage Points · Paradigm · Suboptimization · Rule Beating · Intrinsic Responsibility · Archetypes · Behavior and Structure of a System · Function vs Purpose · Nonrenewable and Renewable Resources — all suffixed `(Meadows)`.

**New arguments/** (37): incl. A system causes its own behavior through its structure · Structure Determines Behavior / Events explain nothing only structure explains behavior · The purpose of a system is the most crucial determinant of its behavior · A systems purpose is deduced from its behavior not its stated goals · The behavior of a system cannot be known from its parts alone · **Leverage rises as the intervention point becomes more immaterial** *(the keystone `Material vs Immaterial` argument)* · Paradigms are the sources of systems · The highest leverage point is to transcend paradigms · People intuit leverage points but push them in the wrong direction · The tragedy of the commons is a failure of feedback not of morality · Resilience is invisible until it fails so we sacrifice it for legible stability and productivity · We cannot control systems but we can dance with them · There are no separate systems boundaries are drawn by the observer · Most of what goes wrong in systems goes wrong because of missing information · The systems lens is complementary to reductionist analysis not superior · (see `maps/Argument Index.md` for all 37).

**New metaphors/** (14): The Slinky · The Bathtub · The Systems Lens · The Blind Men and the Elephant · The Boiled Frog · The Black Box (Boulding) *(kept DISTINCT from the O'Gieblyn concept `The Black Box`)* · The Two Watchmakers *(Herbert Simon's parable)* · The Koch Snowflake · The Tip of the Iceberg · Dancing with the System · The Over-Optimized Racing Yacht · The Resilience Plateau · Arranging the Deck Chairs on the Titanic · The Three Wishes. **New symbols/** (5): The Commons · The Spruce Budworm · The GNP · The Electric Meter · Pyramids and Skyscrapers.

**New tensions/** (16): Balancing vs Reinforcing Feedback · Stability vs Resilience · Optimization vs Resilience · Growth vs Limits · Individual Rationality vs System Welfare · Central Control vs Autonomy · Model vs Reality · Prediction vs Exploration · Internal Structure vs External Event · Understanding vs Implementation · Leverage vs Resistance · Trap vs Opportunity · Letter vs Spirit of the Law · Effort vs Result · Quantity vs Quality · Ecologically Stable vs Economically Unstable.

**New references/** (3 — all vault-internal interpretive bridges labelled interpretive synthesis): `Donella Meadows and {N. Katherine Hayles, Jack Burnham, Roy Ascott}`. The **Meadows ↔ Hayles** note is the KEYSTONE (cybernetics / feedback / homeostasis / self-organization — the second-wave cybernetics Hayles chronicles is Meadows's native ground); **Meadows ↔ Burnham** (systems esthetics: Burnham's object→system and Meadows's systems primer are the art and the science of the same systems moment); **Meadows ↔ Ascott** (cybernetic/networked systems, feedback, connectivism). Han/Zuboff/Harari resonances deliberately kept interpretive-only — NO reference notes minted (the planner correctly deferred).

**Cross-book UPDATES** (11 existing notes gained a `## Donella Meadows (Thinking in Systems)` section — do NOT duplicate; Meadows GROUNDS these in their native discipline): `Feedback Loops` *(THE keystone — balancing vs reinforcing, Meadows is the clearest primary source; Hayles/Burnham/Ascott held it secondhand)* · `Systems Theory` · `Homeostasis` · `Cybernetics` · `Emergence` · `Information` · `The Observer` · `Systems Consciousness` · `Dataism` · `Material vs Immaterial` *(now an **ELEVEN-author** tension — the leverage-points hierarchy ranks immaterial paradigms/goals/information/rules ABOVE material parameters/stocks)* · `Reductionism vs Holism` *(was an Ascott tension; now Ascott + Meadows — the planner labelled it `Holism vs Reductionism` but generation correctly merged into the existing reversed-order canonical note)*.

New **author forward-stubs** (cited substantively, no book in `raw/`): `Jay Forrester` *(system dynamics; Meadows's mentor)* · `Herbert Simon` *(bounded rationality; the two-watchmakers parable)* · `Ludwig von Bertalanffy` *(general systems theory)* · `Garrett Hardin` *(tragedy of the commons)* · `Aldo Leopold` · `Wendell Berry`. Reused existing stubs: `Kenneth Boulding` *(the "Black Box" metaphor; the spendthrift-artist universe)* · `Gregory Bateson` · `Norbert Wiener`. One-off figures (Russell Ackoff, Einstein, Forrester's specific models) and the Sufi teaching stories render as plain text.

### Distinctions enforced / coexisting base names (NOT errors)

- FOUR distinct "systems" notes: `A System` (concept — the noun/object) · `Systems Theory` (the cross-author field) · `Systems Thinking` (Meadows's method/practice) · `Systems Consciousness` (Ascott). All cross-linked, none merged.
- `Self-Organization` (Meadows — a system's capacity to complexify its own structure) kept DISTINCT from `Emergence` (bottom-up behavior) and `Autopoiesis` (Maturana/Varela self-production). Cross-linked.
- `Dynamic Equilibrium` (a stock held steady by balanced flows) kept DISTINCT from `Homeostasis` (the balancing-feedback mechanism); cross-linked.
- `Nonlinearity` (Meadows) kept DISTINCT from Kurzweil's `Exponential vs Linear` tension.
- `The Black Box (Boulding)` (metaphor) ≠ `The Black Box` (O'Gieblyn concept) — different folders, Obsidian disambiguates by path.
- Concept/definition pairs (same base name, different folders): `Balancing Feedback Loop` / `Reinforcing Feedback Loop` / `Resilience` / `Self-Organization` / `Leverage Points` / `Suboptimization` / `Rule Beating` / `Intrinsic Responsibility` each exist as a concept AND a `(Meadows)` definition; `Hierarchy (Systems)` (concept) beside `Hierarchy (Meadows)` (def). Link the bare concept title by default.
- The leverage rungs #1-#12 are folded into `Leverage Points` / `The Twelve Leverage Points`; the four with the most cross-vault weight got their own notes (`Paradigms`, `Transcending Paradigms`, `Information Flows`, `Rules (Systems)`, `System Goals`) — the rest are covered inside `The Twelve Leverage Points`.

### Meadows-pass variant/dangling fixes (applied 2026-07-04, finalize)

| Variant (as written) | Canonical note |
|---|---|
| `Holism vs Reductionism` *(planner label)* | `Reductionism vs Holism` *(the existing Ascott+Meadows tension; generation merged correctly, 0 dangling `[[Holism vs Reductionism]]` links)* |

Hygiene: 0 invented prefix links · 0 bracket mismatches · 0 `Donella Meadows` surname fragmentation (no bare `[[Meadows]]`). No unlinked-to-plain-text cleanup needed this pass.

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
| `Burnout Society` *(as a book reference)* | `The Burnout Society` |
| `Deep Boredom` | `Profound Boredom` |
| `The Power Not-To` | `Negative Potency` |
| `Systems Aesthetics`, `Systems Art` | `Systems Esthetics` *(Burnham's American spelling; distinct from `Systems Theory`)* |
| `Cyborg` | `The Cyborg` |
| `Mechanism` | `Mechanism (Burnham)` |
| `Entropy` | `Entropy (Burnham)` |
| `Dispersed Authorship` | `Distributed Authorship` *(Ascott)* |
| `Cybernetic Art` | `The Cybernetic Vision` *(Ascott; cross-linked to Burnham's `Cyborg Art`)* |
| `Telematic Love`, `telematic embrace`, `Telematic Culture` | `The Telematic Embrace` / `Telematic Art` *(Ascott)* |
| `Global Village` | `The Global Village` |
| `Holism vs Reductionism` | `Reductionism vs Holism` *(Ascott + Meadows tension)* |

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
