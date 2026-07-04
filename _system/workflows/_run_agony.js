export const meta = {
  name: 'ingest-han-agony-of-eros',
  description: 'Repeat-author ingest for Han The Agony of Eros (8 short chapters incl. Badiou foreword): parallel analyses -> 2 sequential chunked planners (dedup via running canonical-names list) -> generation (book/EXTEND author/8 sources/interpretive/updates in a post-create wave) -> one index pass. Han is his 4th book: EXTEND the existing author note + heavy Han-cluster merges. Foreword quotes attributed to Alain Badiou. Atomic full-file Writes for updates.',
  phases: [
    { title: 'Analysis Pass' },
    { title: 'Synthesis Plan (chunked)' },
    { title: 'Generation Pass' },
    { title: 'Indexes & Maps' },
  ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'Byung-Chul Han - The Agony of Eros'
const BOOK_TITLE = 'The Agony of Eros'
const AUTHOR = 'Byung-Chul Han'
const TODAY = '2026-07-04'

const CHAPTERS = [
  { file: '01 Foreword - The Reinvention of Love.md', sha: '5d9f8e9d02feb8e1cab603c9bbf2c29205e408a7d579205af2ecfa70e311a9b0', title: 'Foreword - The Reinvention of Love (Badiou)' },
  { file: '02 Melancholia.md', sha: '98a1521325ca1bd5b503616336b27cab2177a3d44bcbeb8a1f424ef0c4e64836', title: 'Melancholia' },
  { file: '03 Being Able Not to Be Able.md', sha: '56f4f86e51a1c8c9a9c412ea696c1418741eb87af14133d257e1deba80c720b8', title: 'Being Able Not to Be Able' },
  { file: '04 Bare Life.md', sha: 'ea9c79f69780294c20441b182eab9a995e692653f35bb700d987b9eaae001cca', title: 'Bare Life' },
  { file: '05 Porn.md', sha: '2d7c3679f06a984681906dd0eb38197021d78c350f1dbe2212431f7844662e51', title: 'Porn' },
  { file: '06 Fantasy.md', sha: '72f48afd81fb07e243769e61b0035ae0f85282dc4e1caaa778a7cef9e8df6dc8', title: 'Fantasy' },
  { file: '07 The Politics of Eros.md', sha: 'f66338d33fb27232b104285fb728591cf3da0bfe7882ad7adc021d823d8f7bdd', title: 'The Politics of Eros' },
  { file: '08 The End of Theory.md', sha: '14936289c898be56f1fef764d54068323e3e936509437c711281fcd45ad06ae3', title: 'The End of Theory' },
]

// 2 chunks (8 short chapters, 7-19KB each).
const CHUNKS = [[0,3],[4,7]]

const FOCUS = `Byung-Chul Han's *The Agony of Eros* (*Agonie des Eros*, 2012; foreword by Alain Badiou, "The Reinvention of Love"). Han's SHORT, dense polemic — his FOURTH book in this vault (after The Transparency Society, Psychopolitics, The Burnout Society), and the fullest statement of his theory of EROS and THE OTHER. Master thesis: eros is the relation to the wholly OTHER — the *atopos*, the placeless one who cannot be assimilated, consumed, or made calculable; and today's achievement society, the "hell of the same," is ABOLISHING eros by leveling the Other into an object of consumption, a mirror of the narcissistic self. Core material to extract as durable notes: **Eros** *(realize the forward-stub — the relation to the atopic Other; requires the courage to lose oneself, the negativity of the not-I; Han-anchored, open to a future Marcuse section)*; **The Other** *(realize the forward-stub — the atopos, the wholly other whose alterity resists the ego; Levinas/Buber lineage, Han-anchored)*; **Atopia** (the Other as *atopos*, without place, escaping comparison); the **Death / Expulsion of the Other** (the Other's disappearance into the Same, into "the like"); **Melancholia** / depression (the narcissistic achievement-subject cannot love because it cannot reach the Other — Freud's mourning-and-melancholia read against Lars von Trier's film *Melancholia*, ch2); **Being Able Not to Be Able** (ch3 — eros as the *power not-to*, the negative potency the achievement society's "you can" destroys — EXTEND the existing \`Negative Potency\` note); **Bare Life** (ch4 — the fantasy of survival, health as the new goddess, the loss of the sovereignty of death and of the Liebestod — EXTEND the existing \`Bare Life\` note); **Pornography / Porn** (ch5 — the pornographic exhibition of naked flesh destroys eros by abolishing the veil, negativity, and distance; the pornographic = the transparent = the exhibited/spectacular commodity — EXTEND \`Pornography (Han)\`, cross-link Debord's \`Spectacle\`); **Fantasy** (ch6 — eros needs the detour, absence, and imagination that pornographic immediacy destroys); the **Politics of Eros** (ch7 — eros is the ground of the We, of community, of the courage for radical/utopian change; the erosion of eros is the erosion of the political); the **End of Theory** (ch8 — theory in the emphatic sense is erotic: it needs the Other, distance, and the event; Big Data and additive positive science without theory = the end of theory — connects to \`Dataism\`, \`Big Data\`, \`Psychopolitics\`). Key interlocutors: **Alain Badiou** (the foreword — love as "the scene of the Two," the Two experiencing the world from the standpoint of difference; ATTRIBUTE all foreword quotes to BADIOU, not Han), **Emmanuel Levinas** (the Other, the face), **Roland Barthes** (the image; the pornographic vs the punctum), **Sigmund Freud** (mourning and melancholia), **Eva Illouz** (*Cold Intimacies* / emotional capitalism — EXTEND the existing \`Byung-Chul Han and Eva Illouz\` reference), **Hegel** (negativity, the master/slave), **Agamben** (bare life, the face), **Heidegger** (death, Gelassenheit), **Marcuse** (Eros). This book is the primary source for Han's negative concepts (Eros, the Other, negativity, the power not-to) that the vault currently holds only in fragments. The raw is clean digital text — quote verbatim.`

const LINKRULE = `
## Link rules (MANDATORY — read first)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Fifteen books are already ingested; this is Byung-Chul Han's FOURTH book (repeat author).
- A wiki-link target is the bare canonical note title (filename without .md). NEVER a type prefix (\`[[Concept - X]]\`). One canonical name per concept; no article/variant duplicates.
- REALIZE these long-committed forward-stubs Han-anchored (there are inbound links; do NOT coin variants): the concept **\`Eros\`** (open to a future Marcuse section) and the concept **\`The Other\`** (NOT \`The Other (Han)\` — that is a known variant of this concept). Definitions may use \`(Han)\` but NEVER name a definition \`The Other (Han)\`.
- EXTEND existing Han notes with a clearly-marked \`## Byung-Chul Han (The Agony of Eros)\` section — do NOT duplicate: Negative Potency, Bare Life, Pornography (Han), Hell of the Same, Achievement Society, Positivity, Negativity, Transparency, Dataism, and the reference Byung-Chul Han and Eva Illouz.
- A link target must resolve to an existing note, a note created in this ingest, or a declared forward-stub. Otherwise plain text.
## Provenance (MANDATORY)
- Verbatim quotes only — copy character-for-character from the raw chapter under \`${VAULT}/raw/${BF}/\`. Never paraphrase inside quotation marks. **The Foreword (ch 01) is by Alain Badiou — attribute its quotes to Badiou, not Han.**
- Every note has a \`## Sources\` section; every major claim carries a confidence label: \`Directly stated\` / \`Strongly implied\` / \`Interpretive synthesis\` / \`Speculative connection\`.
- No invention. No emoji.
`

async function safeAgent(prompt, opts, tries) {
  tries = tries || 3
  for (let i = 0; i < tries; i++) {
    try { const r = await agent(prompt, opts); if (r !== null && r !== undefined) return r } catch (e) { log(`retry ${i+1}/${tries} ${opts && opts.label}: ${String(e).slice(0,70)}`) }
  }
  return null
}

// ===================== Phase 1: Analysis =====================
phase('Analysis Pass')

const ANALYSIS_SCHEMA = {
  type:'object', additionalProperties:false,
  required:['chapter_file','analysis_file_written','executive_summary','concepts','arguments','definitions','metaphors_symbols','tensions','references_to_other_authors','candidate_passages','matches_existing','review_items'],
  properties:{
    chapter_file:{type:'string'}, analysis_file_written:{type:'string'}, executive_summary:{type:'string'},
    concepts:{type:'array', items:{type:'object', additionalProperties:false, required:['name','description','key_passage'], properties:{name:{type:'string'},description:{type:'string'},key_passage:{type:'string'}}}},
    arguments:{type:'array', items:{type:'object', additionalProperties:false, required:['claim','key_passage'], properties:{claim:{type:'string'},reasoning:{type:'string'},key_passage:{type:'string'}}}},
    definitions:{type:'array', items:{type:'object', additionalProperties:false, required:['term','definition','key_passage'], properties:{term:{type:'string'},definition:{type:'string'},key_passage:{type:'string'}}}},
    metaphors_symbols:{type:'array', items:{type:'object', additionalProperties:false, required:['name','kind','key_passage'], properties:{name:{type:'string'},kind:{type:'string',enum:['metaphor','symbol']},key_passage:{type:'string'}}}},
    tensions:{type:'array', items:{type:'object', additionalProperties:false, required:['name','poles','key_passage'], properties:{name:{type:'string'},poles:{type:'array',items:{type:'string'}},key_passage:{type:'string'}}}},
    references_to_other_authors:{type:'array', items:{type:'object', additionalProperties:false, required:['author','relationship','key_passage'], properties:{author:{type:'string'},relationship:{type:'string',enum:['direct_citation','shared_tradition','conceptual_parallel','disagreement','historical_influence','possible_resonance']},key_passage:{type:'string'}}}},
    candidate_passages:{type:'array', items:{type:'object', additionalProperties:false, required:['quote','supports'], properties:{quote:{type:'string'},supports:{type:'string'}}}},
    matches_existing:{type:'array', items:{type:'object', additionalProperties:false, required:['concept','existing_note','recommendation'], properties:{concept:{type:'string'},existing_note:{type:'string'},recommendation:{type:'string',enum:['update_existing','create_distinct','link_only']}}}},
    review_items:{type:'array', items:{type:'object', additionalProperties:false, required:['issue','priority'], properties:{issue:{type:'string'},priority:{type:'string',enum:['high','medium','low']}}}},
  },
}

const analysisPrompt = (ch) => `
You are the **analysis pass** (step 1) for *${BOOK_TITLE}* by ${AUTHOR}. Analyze ONE chapter and write an analysis file. Do NOT create public wiki notes.
## Read
- Chapter: \`${VAULT}/raw/${BF}/${ch.file}\` (raw-relative \`raw/${BF}/${ch.file}\`, SHA256 \`${ch.sha}\`)
- Controlled vocabulary: \`${VAULT}/_system/link_vocabulary.md\`. Template: \`${VAULT}/_system/templates/analysis.md\`.
## Write
Analysis file to: \`${VAULT}/_system/analysis/${BF} - ${ch.file.replace(/\.md$/, '')}.md.analysis.md\` (use the template; fill Source Metadata: book, author, raw-relative path, SHA256, Date analyzed ${TODAY}). Be expansive. ${ch.file.startsWith('01 Foreword') ? '**THIS CHAPTER IS THE FOREWORD BY ALAIN BADIOU — attribute every quote to Alain Badiou, not Han. Its main yield is the Byung-Chul Han and Alain Badiou reference + the concept of love as the scene of the Two.**' : ''}
## Focus for this book
${FOCUS}
## Then return the structured object.
- **matches_existing**: compare this chapter's concepts against canonical names in link_vocabulary.md — ESPECIALLY the Han cluster (Hell of the Same, Negative Potency, Bare Life, Pornography (Han), Achievement Society, Positivity, Negativity, Transparency, Dataism, Digital Panopticon, Smoothness) and the forward-stubs Eros / The Other — recommend update_existing / create_distinct / link_only.
- Quotes verbatim, under 400 chars, copied clean. Do not invent.
${LINKRULE}
Begin.
`

const analyses = (await parallel(CHAPTERS.map(ch => () =>
  safeAgent(analysisPrompt(ch), { label: `analyze:${ch.title.slice(0,26)}`, phase: 'Analysis Pass', schema: ANALYSIS_SCHEMA }, 4)
))).filter(Boolean)
log(`Analysis: ${analyses.length}/${CHAPTERS.length} chapters analyzed`)
if (analyses.length === 0) { return { error: 'no analyses' } }

// ===================== Phase 2: Chunked sequential plan =====================
phase('Synthesis Plan (chunked)')

const CAND = { type:'array', items:{ type:'object', additionalProperties:false, required:['quote','chapter_file'], properties:{ quote:{type:'string'}, chapter_file:{type:'string'} } } }
const CREATE_ENTRY = { type:'object', additionalProperties:false, required:['kind','file_path','title','source_chapter_files','scope'], properties:{
  kind:{type:'string', enum:['concept','argument','definition','metaphor','symbol','tension','reference']},
  file_path:{type:'string'}, title:{type:'string'}, source_chapter_files:{type:'array',items:{type:'string'}}, scope:{type:'string'}, candidate_passages: CAND } }
const UPDATE_ENTRY = { type:'object', additionalProperties:false, required:['target_file','section_title','source_chapter_files','scope'], properties:{
  target_file:{type:'string'}, section_title:{type:'string'}, source_chapter_files:{type:'array',items:{type:'string'}}, scope:{type:'string'}, candidate_passages: CAND } }
const PLAN_SCHEMA = { type:'object', additionalProperties:false, required:['create_notes','update_notes','index_entries','review_items'], properties:{
  create_notes:{ type:'array', items: CREATE_ENTRY },
  update_notes:{ type:'array', items: UPDATE_ENTRY },
  index_entries:{ type:'object', additionalProperties:false, required:['concept_index','argument_index','tension_index','symbol_and_metaphor_index','author_network','reading_pathways'], properties:{
    concept_index:{type:'array',items:{type:'string'}}, argument_index:{type:'array',items:{type:'string'}}, tension_index:{type:'array',items:{type:'string'}}, symbol_and_metaphor_index:{type:'array',items:{type:'string'}}, author_network:{type:'array',items:{type:'string'}}, reading_pathways:{type:'array',items:{type:'string'}} } },
  review_items:{ type:'array', items:{ type:'object', additionalProperties:false, required:['title','issue','priority'], properties:{ title:{type:'string'}, issue:{type:'string'}, priority:{type:'string',enum:['high','medium','low']}, relevant_files:{type:'array',items:{type:'string'}} } } },
} }

const UPDATE_HINTS = `Extend (with a clearly-marked \`## Byung-Chul Han (The Agony of Eros)\` section), do NOT duplicate, where this book treats a concept the vault already has. This is Han's FOURTH book — it is the PRIMARY source for his negative concepts. PRIORITY cross-book UPDATE targets (emit update_notes, NOT create_notes):
- concepts/Negative Potency.md — ch3 "Being Able Not to Be Able" is the fullest statement of the power not-to; extend the Burnout-anchored note.
- concepts/Bare Life.md — ch4 extends the achievement-subject-as-bare-life with the loss of death, health as goddess, the Liebestod.
- concepts/Pornography (Han).md — ch5 "Porn" is the fullest treatment: pornography as the destruction of eros by abolishing the veil/negativity/distance; cross-link Debord's Spectacle.
- concepts/Hell of the Same.md — THE keystone framing: eros dies because the Other is leveled into the Same/the like.
- concepts/Achievement Society.md — the achievement-subject cannot love (depression/melancholia); the "you can" destroys the power not-to.
- concepts/Positivity.md and concepts/Negativity.md — eros requires the negativity of the Other that the society of positivity abolishes.
- concepts/Transparency.md — the pornographic/transparent exhibition destroys the erotic veil.
- concepts/Dataism.md and concepts/Big Data.md — ch8 "The End of Theory": additive data without theory ends theory (extend if supported).
- references/Byung-Chul Han and Eva Illouz.md — extend with Agony of Eros (Cold Intimacies / emotional capitalism / the positivization of love).
- references/Byung-Chul Han and Guy Debord.md — extend ONLY if ch5 Porn genuinely grounds the pornographic-society-as-spectacle link (optional).
- tensions/Positivity vs Negativity.md, tensions/Discipline vs Achievement.md — extend ONLY if genuinely supported.
REALIZE the long-committed forward-stubs Han-anchored (emit as create_notes; there are inbound links): the concept **Eros** (the relation to the atopic Other; open to a future Marcuse section) and the concept **The Other** (the atopos; do NOT name it "The Other (Han)").
Mint NEW references (Byung-Chul Han and <Other>): references/Byung-Chul Han and Alain Badiou.md (the foreword — love as the scene of the Two; Badiou is a forward-stub author) and references/Byung-Chul Han and Emmanuel Levinas.md (the Other / the face; Levinas is a forward-stub). Mint references/Byung-Chul Han and Roland Barthes.md ONLY if ch5/ch6 genuinely engage Barthes on the image (Barthes is an existing forward-stub).
Forward-stub authors (cited substantively, no book in raw/): Alain Badiou (new), Emmanuel Levinas (new), Roland Barthes (existing), Eva Illouz (existing), Herbert Marcuse (existing), Sigmund Freud (existing), Giorgio Agamben (existing), Hegel (existing), Martin Heidegger (existing). One-off figures (Lars von Trier, Proust, Fromm, Lacan, Flaubert, etc.) render as plain text unless durably conceptual. Canonical author name: 'Byung-Chul Han'. New definitions use the suffix '(Han)' EXCEPT never 'The Other (Han)'. Pick ONE canonical spelling per recurring term (e.g. 'Eros', 'The Other', 'Atopia', 'Melancholia', 'Fantasy', 'The Politics of Eros', 'The End of Theory').`

const planPrompt = (chunkAnalyses, planned, label) => `
You are the **synthesis planner** for *${BOOK_TITLE}* by ${AUTHOR} — processing CHUNK "${label}" of a book split into ${CHUNKS.length} sequential chunks. Produce a deduplicated, NO-CAP plan of the INTERPRETIVE notes to create or update FROM THIS CHUNK'S CHAPTERS ONLY. (The book note, author note, and per-chapter source summaries are generated separately and automatically — DO NOT plan them.)
## This chunk's per-chapter analyses
\`\`\`json
${JSON.stringify(chunkAnalyses, null, 2)}
\`\`\`
## Canonical names ALREADY PLANNED by earlier chunks of THIS SAME book (REUSE these exact titles — do not invent variants)
${planned.length ? planned.map(p=>`- [${p.kind}] ${p.title}  ->  ${p.file_path}`).join('\n') : '(none yet — this is the first chunk)'}
## Also read
\`${VAULT}/_system/link_vocabulary.md\` (controlled vocabulary across the 15 ingested books, incl. the many existing Han notes) and \`${VAULT}/maps/Home.md\`.
## Rules
- **No numerical caps**; be selective for durability/uniqueness. This is a SHORT dense book — favor extending existing Han notes over minting thin new ones.
- **CROSS-CHUNK DEDUP (critical):** if a chapter here substantially treats a concept ALREADY PLANNED above, RE-LIST it in create_notes with the **EXACT same file_path and title**, adding THIS chunk's chapters to source_chapter_files and new candidate_passages — it will be MERGED, not duplicated. Never coin a variant name for an already-planned concept.
- **CROSS-BOOK MERGES (existing vault notes — MANY are existing Han notes):** ${UPDATE_HINTS}
- **Paths**: concepts \`${VAULT}/concepts/<Title>.md\`; arguments \`${VAULT}/arguments/<one-sentence>.md\`; definitions \`${VAULT}/definitions/<Term> (Han).md\`; metaphors \`${VAULT}/metaphors/<Name>.md\`; symbols \`${VAULT}/symbols/<Name>.md\`; tensions \`${VAULT}/tensions/<Name>.md\`; references \`${VAULT}/references/Byung-Chul Han and <Other>.md\`.
- Each entry: sharp 2-4 sentence \`scope\` + pre-selected verbatim \`candidate_passages\` (set chapter_file to the raw-relative path \`raw/${BF}/<file>\`). Attribute Foreword quotes to Badiou.
- **index_entries**: one bullet per NEW note this chunk introduces. **review_items**: cross-book merge calls, possible duplicates, naming concerns.
${LINKRULE}
Return the structured plan for THIS CHUNK.
`

const createMap = new Map()
const updateMap = new Map()
const idxAgg = { concept_index:[], argument_index:[], tension_index:[], symbol_and_metaphor_index:[], author_network:[], reading_pathways:[] }
const allReview = []
const mergeChapters = (a, b) => { const s = new Set([...(a||[]), ...(b||[])]); return [...s] }

for (let ci = 0; ci < CHUNKS.length; ci++) {
  const [lo, hi] = CHUNKS[ci]
  const chunkAnalyses = analyses.filter(a => {
    const idx = CHAPTERS.findIndex(c => a.chapter_file && a.chapter_file.indexOf(c.file) !== -1)
    return idx >= lo && idx <= hi
  })
  const label = `ch ${lo+1}-${hi+1}`
  const planned = [...createMap.values()].map(n => ({ kind:n.kind, title:n.title, file_path:n.file_path }))
  const plan = await safeAgent(planPrompt(chunkAnalyses, planned, label), { label:`plan:${label}`, phase:'Synthesis Plan (chunked)', schema: PLAN_SCHEMA }, 4)
  if (!plan) { log(`Chunk ${label}: plan failed, skipping`); continue }
  for (const n of (plan.create_notes||[])) {
    const ex = createMap.get(n.file_path)
    if (ex) {
      ex.source_chapter_files = mergeChapters(ex.source_chapter_files, n.source_chapter_files)
      ex.candidate_passages = [...(ex.candidate_passages||[]), ...(n.candidate_passages||[])].slice(0, 10)
    } else {
      createMap.set(n.file_path, { kind:n.kind, file_path:n.file_path, title:n.title, scope:n.scope, source_chapter_files:[...(n.source_chapter_files||[])], candidate_passages:[...(n.candidate_passages||[])] })
    }
  }
  for (const u of (plan.update_notes||[])) {
    const ex = updateMap.get(u.target_file)
    if (ex) {
      ex.source_chapter_files = mergeChapters(ex.source_chapter_files, u.source_chapter_files)
      ex.candidate_passages = [...(ex.candidate_passages||[]), ...(u.candidate_passages||[])].slice(0, 10)
    } else {
      updateMap.set(u.target_file, { target_file:u.target_file, section_title:u.section_title, scope:u.scope, source_chapter_files:[...(u.source_chapter_files||[])], candidate_passages:[...(u.candidate_passages||[])] })
    }
  }
  if (plan.index_entries) for (const k of Object.keys(idxAgg)) idxAgg[k].push(...(plan.index_entries[k]||[]))
  allReview.push(...(plan.review_items||[]))
  log(`Chunk ${label}: +${(plan.create_notes||[]).length} creates, +${(plan.update_notes||[]).length} updates  (running: ${createMap.size} creates / ${updateMap.size} updates)`)
}

for (const k of Object.keys(idxAgg)) idxAgg[k] = [...new Set(idxAgg[k])]
const createNotes = [...createMap.values()]
const updateNotes = [...updateMap.values()]
const byKind = {}; for (const n of createNotes) byKind[n.kind]=(byKind[n.kind]||0)+1
log(`PLAN TOTAL: CREATE ${createNotes.length} (${Object.entries(byKind).map(([k,v])=>k+':'+v).join(', ')}); UPDATE ${updateNotes.length}`)

// ===================== Phase 3: Generation =====================
phase('Generation Pass')

const tocLinks = CHAPTERS.map(c => `[[raw/${BF}/${c.file.replace(/\.md$/,'')}]]`).join(' · ')
const bookTask = { file_path:`${VAULT}/books/${BOOK_TITLE}.md` }
const authorTask = { file_path:`${VAULT}/authors/${AUTHOR}.md` }
const sourceTasks = CHAPTERS.map(c => ({ chapter:c, file_path:`${VAULT}/sources/${BF} - ${c.file.replace(/\.md$/,'')}.md` }))

const KIND_GUIDE = {
  concept:`CONCEPT note (\`_system/templates/concept.md\`): Brief Definition, Longer Explanation anchored in ${AUTHOR}'s usage, Authors and Variants, Related/Opposing Concepts, Questions It Raises, Sources (2+ verbatim).`,
  argument:`ARGUMENT note (\`_system/templates/argument.md\`): frontmatter claim = one sentence; Reasoning, Evidence, Counterarguments/Limitations, Related Arguments, Tensions, Sources.`,
  definition:`DEFINITION note (\`_system/templates/definition.md\`): Author's Definition with verbatim quote; Context; Differences from Other Uses; Related Concepts; Sources.`,
  metaphor:`METAPHOR note (\`_system/templates/metaphor.md\`): The Metaphor, What It Compares, What It Reveals, What It Hides/Distorts, Related, Sources.`,
  symbol:`SYMBOL note (\`_system/templates/symbol.md\`).`,
  tension:`TENSION note (\`_system/templates/tension.md\`): Poles, Why It Matters, Authors/Books, Related, Possible Synthesis or Unresolved Status, Sources.`,
  reference:`REFERENCE note (\`_system/templates/reference.md\`): relationship type, Explanation, Source Passages, Confidence. For Byung-Chul Han and Alain Badiou, the primary source is Badiou's Foreword (attribute those quotes to Badiou).`,
}

const interpPrompt = (n) => {
  const chs=(n.source_chapter_files||[]).map(r=>`  - ${VAULT}/${r}`).join('\n')
  const cand=(n.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass. Write ONE new wiki note. The file IS the deliverable.
## Write to: \`${n.file_path}\`
## Idempotency guard: FIRST check whether this file already exists. If it already exists, do NOT overwrite — PRESERVE all existing content and add a clearly-marked \`## ${AUTHOR} (${BOOK_TITLE})\` subsection plus a new \`## Sources\` entry. Otherwise create it fresh. (Notably \`concepts/Eros.md\` and \`concepts/The Other.md\` should NOT exist yet — realize them fresh, Han-anchored, noting each was a committed forward-stub now realized and open to other authors.)
## Kind: ${n.kind} — ${KIND_GUIDE[n.kind]}
## Title: ${n.title}
## Scope: ${n.scope}
## Source chapters (the pre-selected candidate passages below are usually enough; open a raw chapter only if you need another verbatim quote — they are short, 7-19KB):
${chs || '  (use scope)'}
## Pre-selected candidate passages:
${cand || '  (find your own)'}
## Required: frontmatter per \`${VAULT}/_system/schemas.md\`; status: generated; last_updated: ${TODAY}. A \`## Sources\` section: per chapter, Book *${BOOK_TITLE}* / Author ${AUTHOR} (or Alain Badiou for Foreword quotes) / Raw file \`[[raw/${BF}/<chapter>]]\` / verbatim block quote / Supports / label.
${LINKRULE}
Return only the absolute path written.`
}

const manifest = ['concept','definition','argument','metaphor','symbol','tension','reference'].map(k => {
  const items = createNotes.filter(n=>n.kind===k).map(n=>n.title)
  return items.length ? `- ${k}s: ${items.map(t=>`[[${t}]]`).join(' · ')}` : ''
}).filter(Boolean).join('\n')

const bookPrompt = `Write the BOOK note. The file IS the deliverable.
## Write to: \`${bookTask.file_path}\`
Use \`${VAULT}/_system/templates/book.md\`. Realize the forward-stub [[${BOOK_TITLE}]]. Frontmatter: type book, title "${BOOK_TITLE}", author [[${AUTHOR}]], raw_folder "raw/${BF}", sources (the chapters), last_updated ${TODAY}.
TOC links every chapter: ${tocLinks}
Brief Orientation: *${BOOK_TITLE}* (2012, foreword by Alain Badiou) is Byung-Chul Han's short polemic that today's achievement society — the "hell of the same" — is abolishing EROS, the relation to the wholly OTHER (the atopos). Note its place in the vault as Han's FOURTH book: it is the primary source for his negative concepts (eros, the Other, negativity, the power not-to) that the vault held only in fragments; it extends the Han cluster (Negative Potency, Bare Life, Pornography (Han), Hell of the Same, Achievement Society); it realizes [[Eros]] and [[The Other]]; and its critique of the pornographic/transparent connects to Debord's [[Spectacle]].
Then bulleted wiki-linked lists of Major Concepts / Major Arguments / Important Definitions / Key Metaphors / Key Symbols / Major Tensions / References to Other Authors, using ONLY these REAL notes created in this ingest (do not invent titles):
${manifest}
Also list the cross-book notes this ingest EXTENDS (link them): ${updateNotes.map(u=>`[[${u.target_file.split('/').pop().replace(/\.md$/,'')}]]`).join(' · ') || '(none)'}.
Provide 2-3 reading pathways.
${LINKRULE}
Return only the path.`

// AUTHOR note — Han is a REPEAT author (4th book). EXTEND with an atomic full-file Write; never overwrite.
const authorPrompt = `EXTEND the EXISTING author note for ${AUTHOR} — this is his FOURTH book in the vault (after The Transparency Society, Psychopolitics, The Burnout Society). The file IS the deliverable. Use ONE atomic Write (not a sequence of Edits).
## Target: \`${authorTask.file_path}\`
## Steps:
1. Read the ENTIRE existing note. It already covers three books — PRESERVE every byte of existing content verbatim (all book sections, all existing links, frontmatter).
2. Use the **Write** tool to output the COMPLETE updated note in a SINGLE write:
   - Add *The Agony of Eros* to the "Books in the Vault" / books frontmatter list — link [[${BOOK_TITLE}]].
   - Add a clearly-marked subsection for THIS book's central concerns (eros as the relation to the atopic Other; the erosion of the Other into the Same; the melancholia/depression of the achievement-subject who cannot love; the power not-to; bare life and the loss of death; pornography as the destruction of eros; fantasy; the politics of eros / the We; the end of theory), linking the REAL new notes created this ingest: ${createNotes.slice(0,40).map(n=>`[[${n.title}]]`).join(' · ')}.
   - Add new related authors if a related_authors field exists: [[Alain Badiou]], [[Emmanuel Levinas]] (forward-stubs).
   - Set last_updated ${TODAY}. Do NOT drop or reorder existing content.
${LINKRULE}
Return only the path.`

const sourcePrompt = (t) => `Write ONE source summary. The file IS the deliverable.
## Write to: \`${t.file_path}\`
Inputs: raw chapter \`${VAULT}/raw/${BF}/${t.chapter.file}\`; existing analysis \`${VAULT}/_system/analysis/${BF} - ${t.chapter.file.replace(/\.md$/,'')}.md.analysis.md\`; template \`${VAULT}/_system/templates/source_summary.md\`; vocabulary \`${VAULT}/_system/link_vocabulary.md\`.
Frontmatter MUST include: type source_summary, title, book "${BOOK_TITLE}", author "${AUTHOR}", raw_file "raw/${BF}/${t.chapter.file}", sha256 "${t.chapter.sha}", sources, status generated, last_updated ${TODAY}.
${t.chapter.file.startsWith('01 Foreword') ? '**This chapter is the Foreword by Alain Badiou — attribute its quotes to Badiou in the body; note the book author remains Han.**' : ''}
Body: Orientation (2-3 paragraphs); wiki-linked Key Concepts/Arguments/Definitions/Metaphors/Symbols/Tensions (bare canonical titles — link the REAL notes from this ingest and reused vault concepts); Outgoing Links; Candidate Essay Uses; 2+ Source Citations with verbatim block quotes + Supports + confidence labels.
${LINKRULE}
Return only the path.`

// UPDATE prompt — ATOMIC full-file Write.
const updatePrompt = (u) => {
  const chs=(u.source_chapter_files||[]).map(r=>`  - analysis: ${VAULT}/_system/analysis/${BF} - ${r.split('/').pop().replace(/\.md$/,'')}.md.analysis.md`).join('\n')
  const cand=(u.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass (UPDATE) — extend an existing vault note (mostly existing Han notes) with an Agony of Eros section. The file IS the deliverable. Use ONE atomic Write (NOT a sequence of Edits — multiple edits under-persist).
## Target: \`${u.target_file}\`
## Steps:
1. Read the ENTIRE target file. (If it does NOT exist, CREATE it fresh as a full note instead, ${AUTHOR}-anchored.)
2. Read the analysis file(s) below for pre-extracted verbatim quotes (do NOT full-read the raw chapters; Grep a raw file only to confirm a quote):
${chs}
3. Use the **Write** tool to output the COMPLETE updated file in a SINGLE write:
   - Preserve EVERY byte of existing content (all existing author/book sections, all \`### Source N\` entries, all frontmatter) verbatim — do NOT drop, summarize, or reorder. (These notes already carry up to THREE Han-book sections — keep them all.)
   - Add exactly ONE \`## ${u.section_title}\` section (1-3 paragraphs, verbatim-anchored) immediately before \`## Sources\` — OR, for a concept note that uses the \`## Authors and Variants\` form, add/extend the Han bullet there. Do not create a second Han heading if a cleaner integration exists.
   - Append a new \`### Source N\` entry in \`## Sources\`: Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file the cited chapter(s) / verbatim block quote / Supports / confidence label.
   - In frontmatter add the cited raw chapter(s) to sources (no duplicates; [[${AUTHOR}]] is already an author). Set last_updated ${TODAY}.
## Scope: ${u.scope}
## Pre-selected candidate passages:
${cand || '  (use the analysis files)'}
${LINKRULE}
After writing, return only the absolute path.`
}

const createThunks = [
  () => safeAgent(bookPrompt, { label:`gen:book`, phase:'Generation Pass' }, 2),
  () => safeAgent(authorPrompt, { label:`gen:author:extend`, phase:'Generation Pass' }, 3),
  ...createNotes.map(n => () => safeAgent(interpPrompt(n), { label:`gen:${n.kind}:${n.title.slice(0,28)}`, phase:'Generation Pass' }, 2)),
  ...sourceTasks.map(t => () => safeAgent(sourcePrompt(t), { label:`source:${t.chapter.title.slice(0,24)}`, phase:'Generation Pass' }, 2)),
]
const created = await parallel(createThunks)
// Updates in their OWN wave AFTER creates (Zuboff/Meadows/Debord lesson).
const updated = await parallel(updateNotes.map(u => () => safeAgent(updatePrompt(u), { label:`upd:${u.target_file.split('/').pop().replace(/\.md$/,'').slice(0,24)}`, phase:'Generation Pass' }, 3)))
log(`Generation: created ${created.filter(Boolean).length}/${createThunks.length} (incl. book, author-extend, ${sourceTasks.length} sources), updated ${updated.filter(Boolean).length}/${updateNotes.length}`)

// ===================== Phase 4: Indexes & Maps =====================
phase('Indexes & Maps')
const idxPrompt = `Update the vault maps/overview after ingesting *${BOOK_TITLE}* by ${AUTHOR} (his FOURTH book — a repeat author, NOT a new node). CORPUS RE-EXPANSION: re-added 2026-07-04. The vault now holds 16 books / 13 authors (Han's 4th book — no new author). Use Edit (not overwrite); add new entries without disturbing existing ones.
## Plan index entries:
\`\`\`json
${JSON.stringify(idxAgg, null, 2)}
\`\`\`
Tasks: 1) \`${VAULT}/maps/Concept Index.md\` (add the new eros/Other cluster — Eros, The Other, Atopia, Melancholia, Fantasy; realize the Eros/The Other stubs). 2) \`${VAULT}/maps/Argument Index.md\` (add \`### ${AUTHOR} — ${BOOK_TITLE}\`). 3) \`${VAULT}/maps/Tension Index.md\`. 4) \`${VAULT}/maps/Symbol and Metaphor Index.md\`. 5) \`${VAULT}/maps/Author Network.md\` (Han already a node — add the new edges to Alain Badiou, Emmanuel Levinas; note the book under Han). 6) \`${VAULT}/maps/Reading Pathways.md\` (a Han eros/negativity pathway; the eros→transparency→spectacle arc). 7) \`${VAULT}/maps/Home.md\` (Status: 16 books / 13 authors). 8) \`${VAULT}/overview.md\` (Current State).
Canonical links only (no type prefixes); link only notes that exist. Return a one-paragraph summary.`
const idxReport = await safeAgent(idxPrompt, { label:'indexes & maps', phase:'Indexes & Maps' }, 2)

return {
  book: BOOK_TITLE,
  analyses_written: analyses.length,
  created: created.filter(Boolean).length,
  updated: updated.filter(Boolean).length,
  source_summaries: sourceTasks.length,
  create_plan: createNotes.map(n=>({kind:n.kind, title:n.title, file_path:n.file_path, chapters:n.source_chapter_files})),
  update_plan: updateNotes.map(u=>({target:u.target_file, section:u.section_title, chapters:u.source_chapter_files})),
  index_report: idxReport,
  review_items: allReview,
}
