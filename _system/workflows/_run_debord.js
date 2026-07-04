export const meta = {
  name: 'ingest-debord-society-of-the-spectacle',
  description: 'Big-book ingest for Debord The Society of the Spectacle (9 chapters / 221 theses; Ch4 is a 68KB giant, isolated): parallel analyses -> 4 sequential chunked planners (dedup via running canonical-names list) -> single generation (book/author/9 sources/interpretive/updates in a post-create wave) -> one index pass. Atomic full-file Writes for updates.',
  phases: [
    { title: 'Analysis Pass' },
    { title: 'Synthesis Plan (chunked)' },
    { title: 'Generation Pass' },
    { title: 'Indexes & Maps' },
  ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'Debord - The Society of the Spectacle'
const BOOK_TITLE = 'The Society of the Spectacle'
const AUTHOR = 'Guy Debord'
const TODAY = '2026-07-04'

const CHAPTERS = [
  { file: '04 Ch1 - Separation Perfected.md', sha: '68f6338e25eee542999f6ab58c2a433e273b0a30852acf3a1aecfacd2569ab52', title: 'Ch1 - Separation Perfected' },
  { file: '05 Ch2 - The Commodity as Spectacle.md', sha: 'bf8f6f7b068ec360906e614e809934026dbff92e200f1c93434bc8dcb4604a85', title: 'Ch2 - The Commodity as Spectacle' },
  { file: '06 Ch3 - Unity and Division Within Appearances.md', sha: '0ccccbc12ec310585fd941e0c50113fbfa95e520099ac798969645f657557d9e', title: 'Ch3 - Unity and Division Within Appearances' },
  { file: '07 Ch4 - The Proletariat as Subject and Representation.md', sha: '64960ce05e84d9cc72a0f425f1930850967785073ce92e0c7841d0e4f248ccea', title: 'Ch4 - The Proletariat as Subject and Representation' },
  { file: '08 Ch5 - Time and History.md', sha: 'b4d4dbf2028e8d5423c287ec2e2ccb190bfe5063e89920564eba4ccf71ce7d95', title: 'Ch5 - Time and History' },
  { file: '09 Ch6 - Spectacular Time.md', sha: '4b3896794f55a13db8d0ad75dc7383a70f42e923189d11e5a07810baf4b0cdfe', title: 'Ch6 - Spectacular Time' },
  { file: '10 Ch7 - Territorial Management.md', sha: 'fe747a032727a6e7555e3246081f6401569672394fdebf047f3ca117a9ef0174', title: 'Ch7 - Territorial Management' },
  { file: '11 Ch8 - Negation and Consumption Within Culture.md', sha: '399e8a8d7d8ef8ad857bbbe4b7a9be141fcd35fbe830db777689876dd88b401d', title: 'Ch8 - Negation and Consumption Within Culture' },
  { file: '12 Ch9 - Ideology Materialized.md', sha: 'f6ab67c36872e4dd8c2059e944b77ab4de078c03a27505679dbecbf2c4f69d9a', title: 'Ch9 - Ideology Materialized' },
]

// 4 chunks. Ch4 (index 3) is a 68KB giant -> isolated in its own chunk.
const CHUNKS = [[0,2],[3,3],[4,6],[7,8]]

const FOCUS = `Guy Debord's *The Society of the Spectacle* (*La société du spectacle*, 1967; this edition is Ken Knabb's translation). The founding text of the Situationist International, written as **221 numbered theses** grouped into 9 chapters. Master thesis: under modern conditions of production, life presents itself as "an immense accumulation of SPECTACLES," and "all that was once directly lived has become mere representation" (thesis 1). The SPECTACLE is Debord's central concept — NOT merely mass media or a collection of images but "a social relation between people that is mediated by images" (thesis 4); "capital accumulated to the point where it becomes image" (thesis 34); "the material reconstruction of the religious illusion" (thesis 20). Core concepts to extract as durable notes: the **Spectacle** *(realize the 9-inbound forward-stub — the canonical concept name is the bare word \`Spectacle\`, NOT "The Spectacle")*; **Separation** ("separation perfected," Ch1 — the fragmentation of a life whose lost unity now exists only in the image); **Representation** (lived life become image/appearance); the **Commodity as Spectacle** (the stage the commodity reached when it "attained the total occupation of social life," thesis 42 — descendant of Marx's commodity fetishism and Lukács's reification); **Reification** *(Debord after Lukács — EXTEND the existing Burnham note, do NOT duplicate)*; **Alienation** (spectacular alienation — the more the spectator contemplates, the less he lives); the movement **from Being to Having to Appearing** (thesis 17); **Pseudo-needs** and the pseudo-world of consumption; the **Concentrated Spectacle** vs the **Diffuse Spectacle** (theses 63-64 — the bureaucratic/totalitarian pole vs the American/abundance pole); the **Star / Celebrity** (the spectacular representation of a living human being; the agent of the spectacle); **Irreversible Time**, **Cyclical Time**, **Pseudo-cyclical Time**, and **Spectacular Time** (Ch5-6 — the spectacle's consumable, exchangeable, falsified time); **Territorial Management** / urbanism (Ch7); **Détournement** and **Recuperation** (Ch8 — the SI's method of hijacking/reversal, and the spectacle's re-absorption of its own critique); **Ideology Materialized** (Ch9 — the spectacle as ideology become concrete, "the epitome of all ideology"). Key interlocutors Debord engages directly: **Karl Marx** (commodity fetishism, the base, the proletariat), **Hegel** (appearance/essence, subject-object, the dialectic of history), **Georg Lukács** (reification, *History and Class Consciousness*), **Ludwig Feuerbach** (the epigraph — "the present age prefers the sign to the thing signified... appearance to essence"), **Henri Lefebvre** (everyday life), and the failed history of the workers' movement (councils vs the vanguard party — Bolshevism, anarchism, the Bolshevik/Leninist counter-revolution; Ch4). THE keystone cross-vault fact: **Byung-Chul Han's diagnosis descends directly from Debord** — Han identifies pornography with the spectacle, the society of transparency with the society of the spectacle, and exhibition value with spectacular appearance (the vault already carries forward-stub links to Debord from the Han notes). Debord also prefigures Zuboff's surveillance capitalism and Baudrillard's simulation, and stands OPPOSITE McLuhan's celebratory media theory (same media moment, inverted valence). Cite by **thesis number** where the raw shows it. The raw is clean digital text (Knabb translation) — quote verbatim, never paraphrase inside quotation marks.`

const LINKRULE = `
## Link rules (MANDATORY — read first)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Fourteen books are already ingested (this is a re-expansion book — Debord was re-added by the user).
- A wiki-link target is the bare canonical note title (filename without .md). NEVER a type prefix (\`[[Concept - X]]\`). One canonical name per concept; no article/variant duplicates.
- REALIZE these long-committed forward-stubs at their EXISTING canonical names (there are live inbound links — do NOT coin variants): the concept **\`Spectacle\`** (9 inbound links; normalize any \`The Spectacle\`/\`the Spectacle\` to \`Spectacle\`), the book **\`The Society of the Spectacle\`** (22 inbound), the author **\`Guy Debord\`** (25 inbound), and the reference **\`Byung-Chul Han and Guy Debord\`** (Han-FIRST — the existing stub name; do NOT create \`Guy Debord and Byung-Chul Han\`).
- EXTEND the existing **\`Reification\`** note (Burnham/Marx) with a Debord section — do NOT duplicate it.
- A link target must resolve to an existing note, a note created in this ingest, or a declared forward-stub. Otherwise plain text.
## Provenance (MANDATORY)
- Verbatim quotes only — copy character-for-character from the raw chapter under \`${VAULT}/raw/${BF}/\`. Cite the thesis number where visible. Never paraphrase inside quotation marks.
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
Analysis file to: \`${VAULT}/_system/analysis/${BF} - ${ch.file.replace(/\.md$/, '')}.md.analysis.md\` (use the template; fill Source Metadata: book, author, raw-relative path, SHA256, Date analyzed ${TODAY}). Be expansive. This book is written in numbered theses — record the thesis number of each quoted passage.
## Focus for this book
${FOCUS}
## Then return the structured object.
- **matches_existing**: compare this chapter's concepts against canonical names in link_vocabulary.md — ESPECIALLY the forward-stubs \`Spectacle\` / \`The Society of the Spectacle\` / \`Guy Debord\` / \`Byung-Chul Han and Guy Debord\`, the existing \`Reification\` note (Burnham/Marx), and the Han cluster it grounds (Pornography (Han), Exhibition Value, Transparency, Digital Panopticon, Capital as Religion, Acceleration, Narrativity) plus Material vs Immaterial — recommend update_existing / create_distinct / link_only.
- Quotes verbatim, under 400 chars, cite thesis number. Do not invent.
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

const UPDATE_HINTS = `Extend (with a clearly-marked \`## Guy Debord (The Society of the Spectacle)\` section), do NOT duplicate, where this book treats a concept the vault already has. Debord is a foundational cross-vault node — the ancestor of Han's whole diagnosis. PRIORITY cross-book UPDATE targets (emit update_notes, NOT create_notes):
- concepts/Reification.md — THE keystone concept-merge. The note is currently Burnham (Marx's Verdinglichung, inverted to an affirmative aesthetic engine). Debord takes reification from Lukács as CRITIQUE (the spectacle IS reification perfected — "capital accumulated to the point where it becomes image"). Add a Debord section; the note becomes Burnham + Debord, two opposite valences on the same Marxian concept.
- concepts/Pornography (Han).md — Han explicitly identifies pornography with the spectacle; realize the Debord primary-text grounding (the note already carries a Debord cross-link from the first ingest).
- concepts/Exhibition Value.md — spectacular appearance / the society of exhibition descends from the spectacle's affirmation of appearance.
- concepts/Capital as Religion.md — thesis 20: "the spectacle is the material reconstruction of the religious illusion"; Debord anchors the spectacle-as-religion reading (Han/Harari).
- concepts/Transparency.md and concepts/Digital Panopticon.md — Han's society of transparency IS the society of the spectacle intensified; extend ONLY if the analyses support it (interpretive).
- concepts/Acceleration.md and concepts/Narrativity.md — spectacular/pseudo-cyclical time and the loss of history; extend ONLY if genuinely supported.
- tensions/Material vs Immaterial.md — Debord is a MAJOR new voice (now the vault's spine tension). "The spectacle is capital accumulated to the point where it becomes IMAGE" — the commodity becomes immaterial appearance; being -> having -> appearing. Add a Debord section — this makes it a TWELVE-author tension.
REALIZE the long-committed forward-stubs at their EXISTING canonical names (emit as create_notes; there are live inbound links): the concept **Spectacle** (bare — 9 inbound; the book note is separate), and the reference **references/Byung-Chul Han and Guy Debord.md** (Han-FIRST — this is the existing stub name; the KEYSTONE reference: Han's transparency/pornography/exhibition-value diagnosis descends from Debord's spectacle; label the cross-reading interpretive synthesis where Han is not directly citing Debord, but note Han DOES cite Debord directly on pornography=spectacle). Optionally realize the committed argument stub **The society of transparency is a society of the spectacle** (2 inbound Han links) — as an argument note or folded into the Han↔Debord reference.
Mint NEW vault-internal interpretive references (Guy Debord and <Other>): references/Guy Debord and Marshall McLuhan.md (same 1964-67 media moment, INVERTED valence — the global village vs the spectacle; both make media the environment); references/Guy Debord and Shoshana Zuboff.md (the spectacle as ancestor of surveillance capitalism / instrumentarian power — appearance-management -> behavior-management); references/Guy Debord and Jean Baudrillard.md (simulation/hyperreality descends from the spectacle — Baudrillard is a forward-stub). Mint references/Guy Debord and Yuval Noah Harari.md ONLY if genuinely supported (the spectacle as intersubjective fiction). Only mint the ones the analyses support.
Forward-stub authors (cited substantively, no book in raw/): Karl Marx (existing), Hegel (existing), Georg Lukács (reification — new), Ludwig Feuerbach (the epigraph — new), Henri Lefebvre (everyday life — new), Jean Baudrillard (existing), Herbert Marcuse (existing). Historical figures in Ch4/Ch5 (Bakunin, Lenin, Machiavelli, Bossuet, etc.) render as plain text unless durably conceptual. Canonical author name: 'Guy Debord'. New definitions use the suffix '(Debord)'. Pick ONE canonical spelling per recurring term (e.g. 'Spectacle', 'Separation', 'The Commodity as Spectacle', 'Pseudo-cyclical Time', 'Spectacular Time', 'The Concentrated Spectacle', 'The Diffuse Spectacle', 'Détournement', 'Recuperation', 'Ideology Materialized').`

const planPrompt = (chunkAnalyses, planned, label) => `
You are the **synthesis planner** for *${BOOK_TITLE}* by ${AUTHOR} — processing CHUNK "${label}" of a big book split into ${CHUNKS.length} sequential chunks. Produce a deduplicated, NO-CAP plan of the INTERPRETIVE notes to create or update FROM THIS CHUNK'S CHAPTERS ONLY. (The book note, author note, and per-chapter source summaries are generated separately and automatically — DO NOT plan them.)
## This chunk's per-chapter analyses
\`\`\`json
${JSON.stringify(chunkAnalyses, null, 2)}
\`\`\`
## Canonical names ALREADY PLANNED by earlier chunks of THIS SAME book (REUSE these exact titles — do not invent variants)
${planned.length ? planned.map(p=>`- [${p.kind}] ${p.title}  ->  ${p.file_path}`).join('\n') : '(none yet — this is the first chunk)'}
## Also read
\`${VAULT}/_system/link_vocabulary.md\` (controlled vocabulary across the 14 ingested books) and \`${VAULT}/maps/Home.md\`.
## Rules
- **No numerical caps**; be selective for durability/uniqueness. Minor per-thesis historical anecdotes belong in source summaries, not their own notes.
- **CROSS-CHUNK DEDUP (critical):** if a chapter here substantially treats a concept ALREADY PLANNED above, RE-LIST it in create_notes with the **EXACT same file_path and title**, adding THIS chunk's chapters to source_chapter_files and new candidate_passages — it will be MERGED, not duplicated. Never coin a variant name for an already-planned concept.
- **CROSS-BOOK MERGES (other authors' existing vault notes):** ${UPDATE_HINTS}
- **Paths**: concepts \`${VAULT}/concepts/<Title>.md\`; arguments \`${VAULT}/arguments/<one-sentence>.md\`; definitions \`${VAULT}/definitions/<Term> (Debord).md\`; metaphors \`${VAULT}/metaphors/<Name>.md\`; symbols \`${VAULT}/symbols/<Name>.md\`; tensions \`${VAULT}/tensions/<Name>.md\`; references \`${VAULT}/references/Guy Debord and <Other>.md\` (EXCEPT the Han reference which is \`${VAULT}/references/Byung-Chul Han and Guy Debord.md\`).
- Each entry: sharp 2-4 sentence \`scope\` + pre-selected verbatim \`candidate_passages\` (set chapter_file to the raw-relative path \`raw/${BF}/<file>\`; keep the thesis number in the quote where present).
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
  concept:`CONCEPT note (\`_system/templates/concept.md\`): Brief Definition, Longer Explanation anchored in ${AUTHOR}'s usage, Authors and Variants, Related/Opposing Concepts, Questions It Raises, Sources (2+ verbatim, cite thesis numbers).`,
  argument:`ARGUMENT note (\`_system/templates/argument.md\`): frontmatter claim = one sentence; Reasoning, Evidence, Counterarguments/Limitations, Related Arguments, Tensions, Sources.`,
  definition:`DEFINITION note (\`_system/templates/definition.md\`): Author's Definition with verbatim quote; Context; Differences from Other Uses; Related Concepts; Sources.`,
  metaphor:`METAPHOR note (\`_system/templates/metaphor.md\`): The Metaphor, What It Compares, What It Reveals, What It Hides/Distorts, Related, Sources.`,
  symbol:`SYMBOL note (\`_system/templates/symbol.md\`).`,
  tension:`TENSION note (\`_system/templates/tension.md\`): Poles, Why It Matters, Authors/Books, Related, Possible Synthesis or Unresolved Status, Sources.`,
  reference:`REFERENCE note (\`_system/templates/reference.md\`): relationship type, Explanation, Source Passages, Confidence. For a vault-internal interpretive reference (Debord and an ingested author — Han/McLuhan/Zuboff/Harari), label the cross-reading as interpretive synthesis unless the author actually cites Debord (Han DOES cite Debord on pornography=spectacle).`,
}

const interpPrompt = (n) => {
  const chs=(n.source_chapter_files||[]).map(r=>`  - ${VAULT}/${r}`).join('\n')
  const cand=(n.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass. Write ONE new wiki note. The file IS the deliverable.
## Write to: \`${n.file_path}\`
## Idempotency guard: FIRST check whether this file already exists. If it already exists, do NOT overwrite — PRESERVE all existing content and add a clearly-marked \`## ${AUTHOR} (${BOOK_TITLE})\` subsection plus a new \`## Sources\` entry. Otherwise create it fresh. (Notably \`references/Byung-Chul Han and Guy Debord.md\` and \`concepts/Spectacle.md\` should NOT exist yet — realize them fresh.)
## Kind: ${n.kind} — ${KIND_GUIDE[n.kind]}
## Title: ${n.title}
## Scope: ${n.scope}
## Source chapters (the pre-selected candidate passages below are usually enough; open a raw chapter only if you need another verbatim quote — Ch4 is 68KB so read sparingly):
${chs || '  (use scope)'}
## Pre-selected candidate passages:
${cand || '  (find your own)'}
## Required: frontmatter per \`${VAULT}/_system/schemas.md\`; status: generated; last_updated: ${TODAY}. A \`## Sources\` section: per chapter, Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file \`[[raw/${BF}/<chapter>]]\` / verbatim block quote (cite thesis number) / Supports / label.
${LINKRULE}
Return only the absolute path written.`
}

const manifest = ['concept','definition','argument','metaphor','symbol','tension','reference'].map(k => {
  const items = createNotes.filter(n=>n.kind===k).map(n=>n.title)
  return items.length ? `- ${k}s: ${items.map(t=>`[[${t}]]`).join(' · ')}` : ''
}).filter(Boolean).join('\n')

const bookPrompt = `Write the BOOK note. The file IS the deliverable.
## Write to: \`${bookTask.file_path}\`
Use \`${VAULT}/_system/templates/book.md\`. Realize the forward-stub [[${BOOK_TITLE}]] (22 inbound links). Frontmatter: type book, title "${BOOK_TITLE}", author [[${AUTHOR}]], raw_folder "raw/${BF}", sources (the chapters), last_updated ${TODAY}.
TOC links every chapter: ${tocLinks}
Brief Orientation: *${BOOK_TITLE}* (1967, trans. Ken Knabb) is Guy Debord's founding Situationist text — 221 numbered theses arguing that in advanced capitalism "all that was once directly lived has become mere representation," the SPECTACLE being not a set of images but "a social relation between people that is mediated by images" and "capital accumulated to the point where it becomes image." Note its foundational relation to the vault: Han's diagnosis (transparency/pornography/exhibition value) descends from it; it grounds the vault's [[Reification]] note alongside Burnham; it makes [[Material vs Immaterial]] a twelve-author tension (the commodity become image); and it prefigures Zuboff's surveillance capitalism while standing opposite McLuhan's celebratory media theory.
Then bulleted wiki-linked lists of Major Concepts / Major Arguments / Important Definitions / Key Metaphors / Key Symbols / Major Tensions / References to Other Authors, using ONLY these REAL notes created in this ingest (do not invent titles):
${manifest}
Also list the cross-book notes this ingest EXTENDS (link them): ${updateNotes.map(u=>`[[${u.target_file.split('/').pop().replace(/\.md$/,'')}]]`).join(' · ') || '(none)'}.
Provide 2-3 reading pathways.
${LINKRULE}
Return only the path.`

const authorPrompt = `Write the AUTHOR note for ${AUTHOR}. The file IS the deliverable.
## Target: \`${authorTask.file_path}\`
FIRST read the target path to see whether it exists. It should NOT (Debord is new). Realize the [[${AUTHOR}]] forward-stub (25 inbound links).
- Create from \`${VAULT}/_system/templates/author.md\` — Central concerns (the spectacle as social relation mediated by images; separation and representation; the commodity's total occupation of life; reification after Lukács; spectacular/pseudo-cyclical time; détournement and recuperation; the failed history of the workers' councils), major concepts/arguments (link the REAL notes created this ingest: ${createNotes.slice(0,40).map(n=>`[[${n.title}]]`).join(' · ')}), characteristic figures, related authors (Byung-Chul Han as the vault's key descendant — link [[Byung-Chul Han and Guy Debord]]; Marshall McLuhan and Shoshana Zuboff as vault-internal interpretive kin; Karl Marx, Hegel, Georg Lukács, Ludwig Feuerbach, Henri Lefebvre, Jean Baudrillard as forward-stubs), tensions. Frontmatter: type author, name ${AUTHOR}, books [[${BOOK_TITLE}]], last_updated ${TODAY}.
${LINKRULE}
Return only the path.`

const sourcePrompt = (t) => `Write ONE source summary. The file IS the deliverable.
## Write to: \`${t.file_path}\`
Inputs: raw chapter \`${VAULT}/raw/${BF}/${t.chapter.file}\`; existing analysis \`${VAULT}/_system/analysis/${BF} - ${t.chapter.file.replace(/\.md$/,'')}.md.analysis.md\`; template \`${VAULT}/_system/templates/source_summary.md\`; vocabulary \`${VAULT}/_system/link_vocabulary.md\`.
Frontmatter MUST include: type source_summary, title, book "${BOOK_TITLE}", author "${AUTHOR}", raw_file "raw/${BF}/${t.chapter.file}", sha256 "${t.chapter.sha}", sources, status generated, last_updated ${TODAY}.
Body: Orientation (2-3 paragraphs); wiki-linked Key Concepts/Arguments/Definitions/Metaphors/Symbols/Tensions (bare canonical titles — link the REAL notes from this ingest and reused vault concepts); Outgoing Links; Candidate Essay Uses; 2+ Source Citations with verbatim block quotes (cite thesis numbers) + Supports + confidence labels.
${LINKRULE}
Return only the path.`

// UPDATE prompt — ATOMIC full-file Write (Ascott/Zuboff lesson: a sequence of Edits under-persists; one Write lands).
const updatePrompt = (u) => {
  const chs=(u.source_chapter_files||[]).map(r=>`  - analysis: ${VAULT}/_system/analysis/${BF} - ${r.split('/').pop().replace(/\.md$/,'')}.md.analysis.md`).join('\n')
  const cand=(u.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass (UPDATE) — extend an existing vault note with a ${AUTHOR} section. The file IS the deliverable. Use ONE atomic Write (NOT a sequence of Edits — multiple edits under-persist).
## Target: \`${u.target_file}\`
## Steps:
1. Read the ENTIRE target file. (If it does NOT exist, CREATE it fresh as a full note instead, ${AUTHOR}-anchored.)
2. Read the analysis file(s) below for pre-extracted verbatim quotes (do NOT full-read the raw chapters; Grep a raw file only to confirm a quote):
${chs}
3. Use the **Write** tool to output the COMPLETE updated file in a SINGLE write:
   - Preserve EVERY byte of existing content (all existing author sections, all \`### Source N\` entries, all frontmatter) verbatim — do NOT drop, summarize, or reorder.
   - Add exactly ONE \`## ${u.section_title}\` section (1-3 paragraphs, verbatim-anchored, cite thesis numbers) immediately before \`## Sources\`.
   - Append a new \`### Source N\` entry in \`## Sources\`: Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file the cited chapter(s) / verbatim block quote / Supports / confidence label.
   - In frontmatter add \`[[${AUTHOR}]]\` to authors and the cited raw chapter(s) to sources (no duplicates). Set last_updated ${TODAY}.
## Scope: ${u.scope}
## Pre-selected candidate passages:
${cand || '  (use the analysis files)'}
${LINKRULE}
After writing, return only the absolute path.`
}

const createThunks = [
  () => safeAgent(bookPrompt, { label:`gen:book`, phase:'Generation Pass' }, 2),
  () => safeAgent(authorPrompt, { label:`gen:author:${AUTHOR}`, phase:'Generation Pass' }, 2),
  ...createNotes.map(n => () => safeAgent(interpPrompt(n), { label:`gen:${n.kind}:${n.title.slice(0,28)}`, phase:'Generation Pass' }, 2)),
  ...sourceTasks.map(t => () => safeAgent(sourcePrompt(t), { label:`source:${t.chapter.title.slice(0,24)}`, phase:'Generation Pass' }, 2)),
]
const created = await parallel(createThunks)
// Run updates in their OWN wave AFTER creates (Zuboff lesson: updates starve inside the giant create wave; Meadows validated the split).
const updated = await parallel(updateNotes.map(u => () => safeAgent(updatePrompt(u), { label:`upd:${u.target_file.split('/').pop().replace(/\.md$/,'').slice(0,24)}`, phase:'Generation Pass' }, 3)))
log(`Generation: created ${created.filter(Boolean).length}/${createThunks.length} (incl. book, author, ${sourceTasks.length} sources), updated ${updated.filter(Boolean).length}/${updateNotes.length}`)

// ===================== Phase 4: Indexes & Maps =====================
phase('Indexes & Maps')
const idxPrompt = `Update the vault maps/overview after ingesting *${BOOK_TITLE}* by ${AUTHOR}. CORPUS RE-EXPANSION: the user re-added Debord 2026-07-04 (after Meadows the same day). The vault now holds 15 books / 13 authors (Guy Debord is the new 13th author); one raw book remains queued (Benjamin–Illuminations; Han–The Agony of Eros too if not yet ingested). Use Edit (not overwrite); add new entries without disturbing existing ones.
## Plan index entries:
\`\`\`json
${JSON.stringify(idxAgg, null, 2)}
\`\`\`
Tasks: 1) \`${VAULT}/maps/Concept Index.md\` (Alphabetical re-sort + thematic clusters; add a Debord/spectacle cluster — spectacle, separation, representation, commodity-spectacle, spectacular time, détournement/recuperation). 2) \`${VAULT}/maps/Argument Index.md\` (add \`### ${AUTHOR} — ${BOOK_TITLE}\`). 3) \`${VAULT}/maps/Tension Index.md\`. 4) \`${VAULT}/maps/Symbol and Metaphor Index.md\`. 5) \`${VAULT}/maps/Author Network.md\` (Guy Debord as a new node; realize the Byung-Chul Han and Guy Debord edge — the vault's ancestor→descendant spine; link McLuhan/Zuboff; note Marx/Hegel/Lukács/Feuerbach/Lefebvre/Baudrillard forward-stubs). 6) \`${VAULT}/maps/Reading Pathways.md\` (2-3 pathways for this book + a spectacle→transparency arc: Debord spectacle -> Han transparency/pornography -> Zuboff surveillance capitalism). 7) \`${VAULT}/maps/Home.md\` (Status: 15 books / 13 authors after the Debord re-add). 8) \`${VAULT}/overview.md\` (Current State).
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
