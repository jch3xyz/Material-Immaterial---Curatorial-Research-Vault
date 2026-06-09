export const meta = {
  name: 'ingest-zuboff-surveillance-capitalism',
  description: 'Big-book ingest for Zuboff The Age of Surveillance Capitalism (19 dense chapters): parallel analyses -> 6 sequential chunked planners (dedup via running canonical-names list) -> single generation (book/author/19 sources/interpretive/updates) -> one index pass. Update path uses ATOMIC full-file Writes (Ascott lesson: multi-Edit updates under-persist).',
  phases: [
    { title: 'Analysis Pass' },
    { title: 'Synthesis Plan (chunked)' },
    { title: 'Generation Pass' },
    { title: 'Indexes & Maps' },
  ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'Zuboff - The Age of Surveillance Capitalism'
const BOOK_TITLE = 'The Age of Surveillance Capitalism'
const AUTHOR = 'Shoshana Zuboff'
const TODAY = '2026-06-08'

const CHAPTERS = [
  { file: '02 The Definition.md', sha: 'b2c9a18597b6d62f8bb454c75e70671a026dcc5698e0c105b0e9e6f4e06d5303', title: 'The Definition' },
  { file: '03 Chapter 1 - Home or Exile in the Digital Future.md', sha: 'd60f40787b6e11f8df88d8e30db70e589009bcc8361cac0967dd09e2c028ea34', title: 'Ch1 - Home or Exile in the Digital Future' },
  { file: '04 Chapter 2 - August 9, 2011 - Setting the Stage for Surveillance Capitalism.md', sha: '4d3ba309387efe314673abc20d6748cc1bc7f18fdcf297820d9806c697694b66', title: 'Ch2 - Setting the Stage' },
  { file: '05 Chapter 3 - The Discovery of Behavioral Surplus.md', sha: 'a79ce89dc8247922ccb22ece0349dea8df096cbe8513078c5a5a3fe0702be470', title: 'Ch3 - The Discovery of Behavioral Surplus' },
  { file: '06 Chapter 4 - The Moat Around the Castle.md', sha: '53dcf99ccb2ff7730626fc884bb89ddb1d1bdac97750989b021e32f1bcfb98b3', title: 'Ch4 - The Moat Around the Castle' },
  { file: '07 Chapter 5 - The Elaboration of Surveillance Capitalism - Kidnap, Corner, Compete.md', sha: 'e79b143b31d25cd04b37da79b5a7bf279f1cbc3a6e82d0cbab0c369b0d1c8445', title: 'Ch5 - Kidnap, Corner, Compete' },
  { file: '08 Chapter 6 - Hijacked - The Division of Learning in Society.md', sha: '7f0fa3b5401ee7c49d764d8dee5ee740d2c80eebaeec1440c1997f9e3019bb91', title: 'Ch6 - Hijacked: The Division of Learning' },
  { file: '09 Chapter 7 - The Reality Business.md', sha: '35ce6323cc121fa8354e68de4c62f1ec59583991732deebc25aabc72a1d65334', title: 'Ch7 - The Reality Business' },
  { file: '10 Chapter 8 - Rendition - From Experience to Data.md', sha: '80e9e045df764acd5253ba61ee72d4fa7710a5b35b374da516bc2a9337b66837', title: 'Ch8 - Rendition: From Experience to Data' },
  { file: '11 Chapter 9 - Rendition from the Depths.md', sha: '44356b5b212af97878e3c5895d51007e530def15bb0c02a48f30c42d74b9dbcd', title: 'Ch9 - Rendition from the Depths' },
  { file: '12 Chapter 10 - Make Them Dance.md', sha: '0cdc3d1e2d81ad37ca604b39201185f58ebfd0ea8bc2e5ce805682b002ebdc0e', title: 'Ch10 - Make Them Dance' },
  { file: '13 Chapter 11 - The Right to the Future Tense.md', sha: '364a83b819777758c80f4b7d86c75054dcdc01eec8bd93f3c79179931c02285b', title: 'Ch11 - The Right to the Future Tense' },
  { file: '14 Chapter 12 - Two Species of Power.md', sha: '2a147d94202fbc4efcc78b7726c33ef318f276939aa6465f1b62ddd2bdb2b7cb', title: 'Ch12 - Two Species of Power' },
  { file: '15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md', sha: '54573ade33242259b171833a888e37f845891440eb7808c6720db94e0c601e77', title: 'Ch13 - Big Other and Instrumentarian Power' },
  { file: '16 Chapter 14 - A Utopia of Certainty.md', sha: '83f8c3902b93dd2d7f22d19640ba85abe02ee1ae81bb61533ea1e168faf1915e', title: 'Ch14 - A Utopia of Certainty' },
  { file: '17 Chapter 15 - The Instrumentarian Collective.md', sha: 'b40258feb0f0254e365db4ac37396e9bdc7227c3d3f9701001af543bf1f07e74', title: 'Ch15 - The Instrumentarian Collective' },
  { file: '18 Chapter 16 - Of Life in the Hive.md', sha: '2bfaef2881901c63fcac13c92e0db69a998488eb51fa9602ca4625a6626e0c68', title: 'Ch16 - Of Life in the Hive' },
  { file: '19 Chapter 17 - The Right to Sanctuary.md', sha: '8fe94a69c76060779aa27418da0f1866e810898765de290e5b8888ff0be1c27d', title: 'Ch17 - The Right to Sanctuary' },
  { file: '20 Chapter 18 - A Coup from Above.md', sha: 'a99cb73bd50c4c0ab8cd15e397e8730c2317ff9244b086ed8134e1126fdfeec2', title: 'Ch18 - A Coup from Above' },
]

// 6 chunks (Zuboff's chapters are byte-dense, 40-116KB) following the book's 3-part structure.
const CHUNKS = [[0,2],[3,5],[6,8],[9,11],[12,14],[15,18]]

const FOCUS = `Shoshana Zuboff's *The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power* (2019). Master thesis: a new economic logic, SURVEILLANCE CAPITALISM, "unilaterally claims human experience as free raw material for translation into behavioral data," which is fed to machine intelligence to make PREDICTION PRODUCTS traded in BEHAVIORAL FUTURES MARKETS. Core concepts to extract as durable notes: Surveillance Capitalism (and Zuboff's 8-part dictionary DEFINITION in ch.02); Behavioral Surplus (the data exhaust beyond service improvement, claimed for prediction — "the discovery of behavioral surplus"); The Extraction Imperative; Prediction Products; Behavioral Futures Markets; The Means of Behavioral Modification (Zuboff's deliberate echo of Marx's means of production); Economies of Scale, Scope, and Action; Rendition (the concrete operations that render human experience as data — "rendition from the depths" = body, emotion, voice, personality); The Reality Business (extending extraction from the online to the physical world); The Division of Learning in Society (who knows? who decides? who decides who decides?); Instrumentarian Power (a NEW species of power, contrasted with totalitarianism — it tunes, herds, and conditions behavior toward guaranteed outcomes, indifferent to the soul); Big Other (the ubiquitous sensate, networked, computational apparatus that renders, monitors, and modifies — contrasted with Orwell's Big Brother); Radical Indifference; A Utopia of Certainty / Guaranteed Outcomes; The Right to the Future Tense (the right to act free of others' manipulation of the future); The Right to Sanctuary; Two Species of Power (instrumentarian vs totalitarian); Anticipatory Conformity; The Hive / Confluence / The Instrumentarian Collective (Skinner + Alex Pentland's "social physics"); Second Modernity and Third Modernity; The Coup from Above (the overthrow of popular sovereignty from above). Key interlocutors Zuboff engages: B. F. Skinner (*Beyond Freedom and Dignity*, radical behaviorism), Hannah Arendt (totalitarianism), Karl Marx (means of production), Émile Durkheim (the division of labor), Max Weber (economic orientation), Hal Varian (Google's chief economist, "data extraction and network effects"), Alex Pentland (social physics). This realizes the vault's SURVEILLANCE research focus and is deeply resonant with Han's digital panopticon / psychopolitics, Harari's Dataism, and Kurzweil's embraced ubiquitous computing. The raw is OCR-scanned; quote ONLY clean contiguous substrings, never a corrupted token.`

const LINKRULE = `
## Link rules (MANDATORY — read first)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Twelve books are already ingested.
- A wiki-link target is the bare canonical note title (filename without .md). NEVER a type prefix (\`[[Concept - X]]\`). One canonical name per concept; no article/variant duplicates.
- REUSE existing canonical names. This book REALIZES the long-committed surveillance forward-stubs \`Surveillance\` and \`Quantified Self\` — emit them as update_notes against the bare names (the generator will create the file if absent). EXTEND the Han/Harari surveillance & data notes, do NOT duplicate them.
- A link target must resolve to an existing note, a note created in this ingest, or a declared forward-stub. Otherwise plain text.
## Provenance (MANDATORY)
- Verbatim quotes only — copy character-for-character from the raw chapter under \`${VAULT}/raw/${BF}/\`. Never paraphrase inside quotation marks.
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
Analysis file to: \`${VAULT}/_system/analysis/${BF} - ${ch.file.replace(/\.md$/, '')}.md.analysis.md\` (use the template; fill Source Metadata: book, author, raw-relative path, SHA256, Date analyzed ${TODAY}). Be expansive.
## Focus for this book
${FOCUS}
## Then return the structured object.
- **matches_existing**: compare this chapter's concepts against canonical names in link_vocabulary.md — ESPECIALLY the surveillance/data cluster (Digital Panopticon, Big Data, Dataism, Society of Control, Biopolitics, Psychopolitics, Smart Power, The Body as Data, Information, Free Will vs Determinism, Algorithmic Determinism, The Algorithm as Providence, Friendly Big Brother, The Mole and the Snake, The Transparent Customer, Capital as Religion, Achievement Society, Auto-Exploitation) and the committed forward-stubs Surveillance and Quantified Self — recommend update_existing / create_distinct / link_only.
- Quotes verbatim, under 400 chars, copied clean (skip OCR-corrupted fragments). Do not invent.
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

const UPDATE_HINTS = `Extend (with a clearly-marked \`## Shoshana Zuboff (The Age of Surveillance Capitalism)\` section), do NOT duplicate, where this book treats a concept the vault already has. PRIORITY cross-book UPDATE targets (emit update_notes, NOT create_notes):
- concepts/Digital Panopticon.md — Big Other is the keystone surveillance merge (Han's digital panopticon ↔ Zuboff's ubiquitous sensate apparatus).
- concepts/Big Data.md — behavioral surplus / data extraction is Zuboff's central mechanism (Han coined Big Data in the vault; Zuboff is its political economy).
- concepts/Dataism.md — surveillance capitalism is the economic engine behind the data worldview (Han + Harari + now Zuboff).
- concepts/Society of Control.md — instrumentarian power as the new control regime (Deleuze/Han).
- concepts/Biopolitics.md and concepts/Psychopolitics.md — behavioral modification / instrumentarian power vs Han's psychopolitics.
- concepts/Smart Power.md — instrumentarian "tuning/herding/conditioning" vs Han's smart power.
- concepts/The Body as Data.md — "rendition from the depths" renders body, emotion, voice, face as data.
- concepts/Information.md — the division of learning in society (who knows / who decides).
- concepts/The Algorithm as Providence.md and concepts/Algorithmic Determinism.md — prediction, guaranteed outcomes (O'Gieblyn).
- tensions/Free Will vs Determinism.md — behavioral modification, anticipatory conformity, the right to the future tense.
- symbols/Friendly Big Brother.md and symbols/The Mole and the Snake.md — Big Other contrasted with Big Brother (Han/Orwell/Deleuze).
- concepts/Capital as Religion.md / concepts/Dictatorship of Capital.md — surveillance capitalism as a new economic order.
- concepts/Achievement Society.md / concepts/Auto-Exploitation.md — only if genuinely supported.
REALIZE the long-committed forward-stubs (emit as update_notes against the bare canonical names; the generator creates the file): **Surveillance** (Zuboff is THE surveillance book — realize it Zuboff-anchored, open to other authors) and **Quantified Self** (rendition of the self).
Mint NEW vault-internal interpretive references (label interpretive synthesis unless Zuboff cites them): references/Shoshana Zuboff and Byung-Chul Han.md (the KEYSTONE — Big Other vs the digital panopticon; surveillance capitalism vs psychopolitics); references/Shoshana Zuboff and Yuval Noah Harari.md (Dataism / the threat to agency); references/Shoshana Zuboff and Ray Kurzweil.md (Kurzweil EMBRACES the ubiquitous computing Zuboff diagnoses as domination — the standout "surveillance embraced vs diagnosed" pairing); references/Shoshana Zuboff and Meghan O'Gieblyn.md (prediction/providence); references/Shoshana Zuboff and Donna Haraway.md (the informatics of domination -> Big Other). Only mint the ones genuinely supported.
Forward-stub authors (no book in raw/): B. F. Skinner (existing stub), Hannah Arendt (existing), Karl Marx (existing), Émile Durkheim, Max Weber (existing), Hal Varian, Alex Pentland. Companies/executives (Google, Facebook, Eric Schmidt, Larry Page, Mark Zuckerberg, etc.) render as plain text. Canonical author name: 'Shoshana Zuboff'. New definitions use the suffix '(Zuboff)'. Pick ONE canonical spelling per recurring term (e.g. 'Surveillance Capitalism', 'Behavioral Surplus', 'Instrumentarian Power', 'Big Other', 'Rendition', 'The Division of Learning in Society').`

const planPrompt = (chunkAnalyses, planned, label) => `
You are the **synthesis planner** for *${BOOK_TITLE}* by ${AUTHOR} — processing CHUNK "${label}" of a big book split into 6 sequential chunks. Produce a deduplicated, NO-CAP plan of the INTERPRETIVE notes to create or update FROM THIS CHUNK'S CHAPTERS ONLY. (The book note, author note, and per-chapter source summaries are generated separately and automatically — DO NOT plan them.)
## This chunk's per-chapter analyses
\`\`\`json
${JSON.stringify(chunkAnalyses, null, 2)}
\`\`\`
## Canonical names ALREADY PLANNED by earlier chunks of THIS SAME book (REUSE these exact titles — do not invent variants)
${planned.length ? planned.map(p=>`- [${p.kind}] ${p.title}  ->  ${p.file_path}`).join('\n') : '(none yet — this is the first chunk)'}
## Also read
\`${VAULT}/_system/link_vocabulary.md\` (controlled vocabulary across the 12 ingested books) and \`${VAULT}/maps/Home.md\`.
## Rules
- **No numerical caps**; be selective for durability/uniqueness. Minor per-company anecdotes belong in source summaries, not their own notes.
- **CROSS-CHUNK DEDUP (critical):** if a chapter here substantially treats a concept ALREADY PLANNED above, RE-LIST it in create_notes with the **EXACT same file_path and title**, adding THIS chunk's chapters to source_chapter_files and new candidate_passages — it will be MERGED, not duplicated. Never coin a variant name for an already-planned concept.
- **CROSS-BOOK MERGES (other authors' existing vault notes):** ${UPDATE_HINTS}
- **Paths**: concepts \`${VAULT}/concepts/<Title>.md\`; arguments \`${VAULT}/arguments/<one-sentence>.md\`; definitions \`${VAULT}/definitions/<Term> (Zuboff).md\`; metaphors \`${VAULT}/metaphors/<Name>.md\`; symbols \`${VAULT}/symbols/<Name>.md\`; tensions \`${VAULT}/tensions/<Name>.md\`; references \`${VAULT}/references/Shoshana Zuboff and <Other>.md\`.
- Each entry: sharp 2-4 sentence \`scope\` + pre-selected verbatim \`candidate_passages\` (set chapter_file to the raw-relative path \`raw/${BF}/<file>\`).
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
  reference:`REFERENCE note (\`_system/templates/reference.md\`): relationship type, Explanation, Source Passages, Confidence. For a vault-internal interpretive reference (Zuboff and an ingested author — Han/Harari/Kurzweil/O'Gieblyn/Haraway), label the cross-reading clearly as interpretive synthesis unless Zuboff actually cites them.`,
}

const interpPrompt = (n) => {
  const chs=(n.source_chapter_files||[]).map(r=>`  - ${VAULT}/${r}`).join('\n')
  const cand=(n.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass. Write ONE new wiki note. The file IS the deliverable.
## Write to: \`${n.file_path}\`
## Idempotency guard: FIRST check whether this file already exists. If it already exists, do NOT overwrite — PRESERVE all existing content and add a clearly-marked \`## ${AUTHOR} (${BOOK_TITLE})\` subsection plus a new \`## Sources\` entry. Otherwise create it fresh.
## Kind: ${n.kind} — ${KIND_GUIDE[n.kind]}
## Title: ${n.title}
## Scope: ${n.scope}
## Source chapters (the pre-selected candidate passages below are usually enough; open a raw chapter only if you need another verbatim quote — they are 40-116KB so read sparingly):
${chs || '  (use scope)'}
## Pre-selected candidate passages:
${cand || '  (find your own)'}
## Required: frontmatter per \`${VAULT}/_system/schemas.md\`; status: generated; last_updated: ${TODAY}. A \`## Sources\` section: per chapter, Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file \`[[raw/${BF}/<chapter>]]\` / verbatim block quote / Supports / label.
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
Brief Orientation: *${BOOK_TITLE}* (2019) is the definitive critique of surveillance capitalism — the economic logic that claims human experience as free raw material for behavioral data, prediction, and behavioral modification, culminating in instrumentarian power and Big Other. Note its relation to the vault's surveillance focus and to Han's digital panopticon / psychopolitics, Harari's Dataism, and Kurzweil's embraced ubiquitous computing.
Then bulleted wiki-linked lists of Major Concepts / Major Arguments / Important Definitions / Key Metaphors / Key Symbols / Major Tensions / References to Other Authors, using ONLY these REAL notes created in this ingest (do not invent titles):
${manifest}
Also list the cross-book notes this ingest EXTENDS (link them): ${updateNotes.map(u=>`[[${u.target_file.split('/').pop().replace(/\.md$/,'')}]]`).join(' · ') || '(none)'}.
Provide 2-3 reading pathways.
${LINKRULE}
Return only the path.`

const authorPrompt = `Write the AUTHOR note for ${AUTHOR}. The file IS the deliverable.
## Target: \`${authorTask.file_path}\`
FIRST read the target path to see whether it exists. It should NOT (Zuboff is new).
- Create from \`${VAULT}/_system/templates/author.md\` — Central concerns (surveillance capitalism; behavioral surplus and the extraction imperative; prediction products and behavioral futures markets; the means of behavioral modification; instrumentarian power and Big Other; the division of learning in society; the right to the future tense and to sanctuary), major concepts/arguments (link the REAL notes created this ingest: ${createNotes.slice(0,40).map(n=>`[[${n.title}]]`).join(' · ')}), characteristic metaphors, related authors (Byung-Chul Han, Yuval Noah Harari, Ray Kurzweil as vault-internal interpretive kin; B. F. Skinner, Hannah Arendt, Karl Marx, Émile Durkheim, Hal Varian, Alex Pentland as forward-stubs), tensions. Frontmatter: type author, name ${AUTHOR}, books [[${BOOK_TITLE}]], last_updated ${TODAY}.
${LINKRULE}
Return only the path.`

const sourcePrompt = (t) => `Write ONE source summary. The file IS the deliverable.
## Write to: \`${t.file_path}\`
Inputs: raw chapter \`${VAULT}/raw/${BF}/${t.chapter.file}\`; existing analysis \`${VAULT}/_system/analysis/${BF} - ${t.chapter.file.replace(/\.md$/,'')}.md.analysis.md\`; template \`${VAULT}/_system/templates/source_summary.md\`; vocabulary \`${VAULT}/_system/link_vocabulary.md\`.
Frontmatter MUST include: type source_summary, title, book "${BOOK_TITLE}", author "${AUTHOR}", raw_file "raw/${BF}/${t.chapter.file}", sha256 "${t.chapter.sha}", sources, status generated, last_updated ${TODAY}.
Body: Orientation (2-3 paragraphs); wiki-linked Key Concepts/Arguments/Definitions/Metaphors/Symbols/Tensions (bare canonical titles — link the REAL notes from this ingest and reused vault concepts); Outgoing Links; Candidate Essay Uses; 2+ Source Citations with verbatim block quotes + Supports + confidence labels.
${LINKRULE}
Return only the path.`

// UPDATE prompt — ATOMIC full-file Write (Ascott lesson: a sequence of Edits under-persists; one Write lands).
const updatePrompt = (u) => {
  const chs=(u.source_chapter_files||[]).map(r=>`  - analysis: ${VAULT}/_system/analysis/${BF} - ${r.split('/').pop().replace(/\.md$/,'')}.md.analysis.md`).join('\n')
  const cand=(u.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass (UPDATE) — extend an existing vault note with a ${AUTHOR} section. The file IS the deliverable. Use ONE atomic Write (NOT a sequence of Edits — multiple edits under-persist).
## Target: \`${u.target_file}\`
## Steps:
1. Read the ENTIRE target file. (If it does NOT exist — e.g. the committed stubs Surveillance / Quantified Self — CREATE it fresh as a full concept note instead, ${AUTHOR}-anchored, noting it was a committed forward-stub now realized.)
2. Read the analysis file(s) below for pre-extracted verbatim quotes (do NOT full-read the 40-116KB raw chapters; Grep a raw file only to confirm a quote):
${chs}
3. Use the **Write** tool to output the COMPLETE updated file in a SINGLE write:
   - Preserve EVERY byte of existing content (all existing author sections, all \`### Source N\` entries, all frontmatter) verbatim — do NOT drop, summarize, or reorder.
   - Add exactly ONE \`## ${u.section_title}\` section (1-3 paragraphs, verbatim-anchored) immediately before \`## Sources\`.
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
const updated = await parallel(updateNotes.map(u => () => safeAgent(updatePrompt(u), { label:`upd:${u.target_file.split('/').pop().replace(/\.md$/,'').slice(0,24)}`, phase:'Generation Pass' }, 3)))
log(`Generation: created ${created.filter(Boolean).length}/${createThunks.length} (incl. book, author, ${sourceTasks.length} sources), updated ${updated.filter(Boolean).length}/${updateNotes.length}`)

// ===================== Phase 4: Indexes & Maps =====================
phase('Indexes & Maps')
const idxPrompt = `Update the vault maps/overview after ingesting *${BOOK_TITLE}* by ${AUTHOR} (the 13th and FINAL book — completes the corpus). Use Edit (not overwrite); add new entries without disturbing existing ones.
## Plan index entries:
\`\`\`json
${JSON.stringify(idxAgg, null, 2)}
\`\`\`
Tasks: 1) \`${VAULT}/maps/Concept Index.md\` (Alphabetical re-sort + thematic clusters; add a Zuboff/surveillance-capitalism cluster). 2) \`${VAULT}/maps/Argument Index.md\` (add \`### ${AUTHOR} — ${BOOK_TITLE}\`). 3) \`${VAULT}/maps/Tension Index.md\`. 4) \`${VAULT}/maps/Symbol and Metaphor Index.md\`. 5) \`${VAULT}/maps/Author Network.md\` (Shoshana Zuboff as a new node linked to Han/Harari/Kurzweil/O'Gieblyn/Haraway; realize the surveillance affinities). 6) \`${VAULT}/maps/Reading Pathways.md\` (2-3 pathways for this book + a surveillance arc: Han digital panopticon -> Harari Dataism -> Zuboff surveillance capitalism). 7) \`${VAULT}/maps/Home.md\` (Status: note the new book completes the corpus at 13 books / 11 authors; realize the Surveillance / Quantified Self stubs). 8) \`${VAULT}/overview.md\` (Current State).
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
