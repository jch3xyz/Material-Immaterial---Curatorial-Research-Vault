export const meta = {
  name: 'ingest-meadows-thinking-in-systems',
  description: 'Big-book ingest for Meadows Thinking in Systems (9 dense chapters + appendix): parallel analyses -> 4 sequential chunked planners (dedup via running canonical-names list) -> single generation (book/author/9 sources/interpretive/updates) -> one index pass. Update path uses ATOMIC full-file Writes (Ascott/Zuboff lesson: multi-Edit updates under-persist).',
  phases: [
    { title: 'Analysis Pass' },
    { title: 'Synthesis Plan (chunked)' },
    { title: 'Generation Pass' },
    { title: 'Indexes & Maps' },
  ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'Meadows - Thinking in Systems'
const BOOK_TITLE = 'Thinking in Systems'
const AUTHOR = 'Donella Meadows'
const TODAY = '2026-07-04'

const CHAPTERS = [
  { file: '04 Introduction - The Systems Lens.md', sha: '7a7847fb4351f5cb7e98c213ae520873cca1edf2a050b82799b3380e203883a4', title: 'Introduction - The Systems Lens' },
  { file: '05 Chapter 1 - The Basics.md', sha: '59db56846b46c023c6570ce078ecefd1310994e10d4f52b1b884a3c55d72b6b7', title: 'Ch1 - The Basics' },
  { file: '06 Chapter 2 - A Brief Visit to the Systems Zoo.md', sha: '8ab38d4ab189a4f3001a6387bc172d5b4f50ef25fc6cc93b7602bce1a3017475', title: 'Ch2 - The Systems Zoo' },
  { file: '07 Chapter 3 - Why Systems Work So Well.md', sha: 'be244431eb542549b54ca7eb799b0bb2954cff596afff8a4ef55cef73f66e749', title: 'Ch3 - Why Systems Work So Well' },
  { file: '08 Chapter 4 - Why Systems Surprise Us.md', sha: 'ffe7761f3c2ab228b0db691fcb4dde36a99f1232cae4c28d46497d455e149b3f', title: 'Ch4 - Why Systems Surprise Us' },
  { file: '09 Chapter 5 - System Traps and Opportunities.md', sha: '1c89df832d64d5aa04121755b2cbbfb93f5a2fbfdab26ca3d2c9dce8f77c5908', title: 'Ch5 - System Traps and Opportunities' },
  { file: '11 Chapter 6 - Leverage Points.md', sha: '97afef8f4f5e4b5c316c137ba8a97056e09e960c036d98af40c260da48e20150', title: 'Ch6 - Leverage Points' },
  { file: '12 Chapter 7 - Living in a World of Systems.md', sha: 'fa7587c2f22f9c12ae453794f769329ebc3543e4eaf3fad43fa027894fafa193', title: 'Ch7 - Living in a World of Systems' },
  { file: '13 Appendix.md', sha: '607e07e8a2e1aa1f1e0ecccc4a8cd5511d3e83b380dc12fc59089e08aeba6d94', title: 'Appendix - Glossary, Principles, Leverage Points' },
]

// 4 chunks (chapters are byte-dense, 15-66KB) following the book's 3-part structure. <=3 chapters/planner.
const CHUNKS = [[0,2],[3,4],[5,6],[7,8]]

const FOCUS = `Donella H. Meadows's *Thinking in Systems: A Primer* (drafted 1993, edited by Diana Wright, published posthumously 2008). Meadows was a lead system-dynamics scientist — a student of Jay Forrester at MIT and lead author of *The Limits to Growth*. This is the vault's PRIMARY, native-discipline SOURCE for systems theory: the cybernetics / feedback / self-organization vocabulary the vault's art and cybernetics books (Hayles, Burnham, Ascott) so far carry only secondhand. Core concepts to extract as durable notes: a SYSTEM ("a set of things—people, cells, molecules, or whatever—interconnected in such a way that they produce their own pattern of behavior over time"); STOCKS and FLOWS (the bathtub; a stock is the memory of a system's changing flows); FEEDBACK LOOPS — BALANCING (stabilizing, goal-seeking) vs REINFORCING (amplifying, runaway) loops; the SYSTEMS ZOO (a menagerie of simple stock-and-flow systems and their characteristic behaviors); DYNAMIC EQUILIBRIUM; OVERSHOOT and collapse; RESILIENCE (the ability to recover and persist, distinct from stability and from efficiency); SELF-ORGANIZATION (a system's capacity to make its own structure more complex); HIERARCHY (systems nested in systems, evolved to reduce information load); why systems WORK SO WELL and why they SURPRISE US — BOUNDED RATIONALITY (Herbert Simon: each actor behaves rationally within their own limited information horizon), NONLINEARITIES, DELAYS, and the maxim that there are NO SEPARATE SYSTEMS (boundaries are drawn by the observer, not given by the world); SYSTEM TRAPS / ARCHETYPES — Policy Resistance (fixes that fail), the Tragedy of the Commons, Drift to Low Performance, Escalation, Success to the Successful (competitive exclusion), Shifting the Burden to the Intervenor (addiction / dependence), Rule Beating, and Seeking the Wrong Goal; and the book's keystone — LEVERAGE POINTS, the twelve "places to intervene in a system, in increasing order of effectiveness" (12 numbers/parameters -> 11 buffers -> 10 stock-and-flow structures -> 9 delays -> 8 balancing feedback loops -> 7 reinforcing feedback loops -> 6 information flows -> 5 rules -> 4 self-organization -> 3 goals -> 2 PARADIGMS, the shared social mindset out of which the system arises -> 1 the power to TRANSCEND paradigms). THE deepest thesis for THIS vault: leverage RISES as the intervention becomes more IMMATERIAL — the physical parameters everyone fixates on are the WEAKEST leverage, while information flows, rules, goals, and paradigms (the least tangible, most mind-like elements) are the STRONGEST; "the least obvious part of the system, its function or purpose, is often the most crucial determinant of the system's behavior." Ch7 "Living in a World of Systems" gives the systems-wisdom / "Dancing with Systems" principles (get the beat of the system before disturbing it; expose and share mental models; honor, respect, and distribute information; locate responsibility within the system; stay humble and stay a learner; celebrate complexity). The Appendix is a GLOSSARY + "Summary of Systems Principles" + the leverage-points list + model equations — treat it as a REFERENCE that DRIVES DEFINITIONS and confirms concepts, not as a source of new arguments. Key interlocutors: Jay Forrester (system dynamics), Herbert Simon (bounded rationality), Ludwig von Bertalanffy (general systems theory), Kenneth Boulding, Garrett Hardin (tragedy of the commons), Gregory Bateson, Aldo Leopold, Wendell Berry, and the Sufi teaching stories. Meadows writes with vivid figures (the Slinky whose behavior comes from its own structure not the hand that holds it; the bathtub; the thermostat; "dancing" with systems) — capture these as metaphors. The raw is clean text (NOT OCR-corrupted); quote verbatim.`

const LINKRULE = `
## Link rules (MANDATORY — read first)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Thirteen books are already ingested (this is a re-expansion book — Meadows was re-added by the user).
- A wiki-link target is the bare canonical note title (filename without .md). NEVER a type prefix (\`[[Concept - X]]\`). One canonical name per concept; no article/variant duplicates.
- REUSE existing canonical names. This book GROUNDS the vault's systems/cybernetics cluster in its native discipline — EXTEND \`Feedback Loops\`, \`Systems Theory\`, \`Homeostasis\`, \`Emergence\`, \`Cybernetics\` (do NOT duplicate them). Do NOT collapse the new \`Self-Organization\` concept into \`Emergence\` or \`Autopoiesis\` — cross-link them.
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
- **matches_existing**: compare this chapter's concepts against canonical names in link_vocabulary.md — ESPECIALLY the systems/cybernetics cluster (Feedback Loops, Systems Theory, Homeostasis, Emergence, Cybernetics, Autopoiesis, The Observer, Systems Consciousness, Distributed Cognition, The Computational Universe, Systems Esthetics, Object and System, Object vs System, Material vs Immaterial) — recommend update_existing / create_distinct / link_only.
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

const UPDATE_HINTS = `Extend (with a clearly-marked \`## Donella Meadows (Thinking in Systems)\` section), do NOT duplicate, where this book treats a concept the vault already has. This book is the vault's PRIMARY, native-discipline source for the systems/cybernetics cluster — it GROUNDS notes the art/cybernetics books hold secondhand. PRIORITY cross-book UPDATE targets (emit update_notes, NOT create_notes):
- concepts/Feedback Loops.md — THE keystone merge. Meadows is the vault's clearest primary source on BALANCING vs REINFORCING feedback loops (Hayles/Burnham/Ascott carry feedback only secondhand from cybernetics).
- concepts/Systems Theory.md — Meadows's systems primer IS the discipline; big merge (extends Hayles + Burnham + Lippard).
- concepts/Homeostasis.md — balancing feedback holding a stock near a goal (the thermostat); Meadows names the mechanism Cannon/Hayles describe.
- concepts/Emergence.md — self-organization as the source of a system's own behavior (kept DISTINCT from the new Self-Organization concept; cross-link).
- concepts/Cybernetics.md — the feedback-control lineage (Wiener -> Forrester -> Meadows); Meadows is applied cybernetics.
- concepts/Autopoiesis.md — ONLY if genuinely supported (self-organization / self-production resonance; keep distinct).
- concepts/Systems Esthetics.md and concepts/Object and System.md and tensions/Object vs System.md — Burnham's 1968 systems art drew on exactly this systems-theory milieu (Bertalanffy, cybernetics); Meadows is the science under Burnham's art. Extend ONLY if the analyses support the bridge (it is interpretive synthesis, not a citation Meadows made).
- concepts/The Computational Universe.md / concepts/Distributed Cognition.md / concepts/The Observer.md — ONLY if genuinely supported.
- tensions/Material vs Immaterial.md — Meadows is a MAJOR new voice here (the vault's spine tension). Her leverage-points hierarchy literally ranks IMMATERIAL leverage (paradigms, goals, information, rules) ABOVE MATERIAL leverage (parameters, buffers, physical stocks): "the least obvious part of the system, its function or purpose, is often the most crucial determinant of the system's behavior." Add a Meadows section — this makes it an ELEVEN-author tension.
Mint NEW vault-internal interpretive references (label interpretive synthesis unless Meadows cites them): references/Donella Meadows and N. Katherine Hayles.md (the KEYSTONE — cybernetics / feedback / homeostasis / self-organization; the second-wave cybernetics Hayles chronicles is Meadows's native ground); references/Donella Meadows and Jack Burnham.md (systems esthetics: Burnham's object->system and Meadows's systems primer are the art and the science of the same systems moment); references/Donella Meadows and Roy Ascott.md (cybernetic / networked systems, feedback, connectivism). Mint references/Donella Meadows and Shoshana Zuboff.md and/or references/Donella Meadows and Yuval Noah Harari.md ONLY if the analyses genuinely support a systems reading (surveillance capitalism / the growth imperative as reinforcing loops and system traps). Only mint the ones genuinely supported.
Forward-stub authors (cited substantively, no book in raw/): Jay Forrester (system dynamics; Meadows's mentor), Herbert Simon (bounded rationality), Ludwig von Bertalanffy (general systems theory), Kenneth Boulding (existing stub), Garrett Hardin (tragedy of the commons), Gregory Bateson (existing stub), Aldo Leopold, Wendell Berry, Norbert Wiener (existing). One-off figures and the Sufi teaching stories render as plain text. Canonical author name: 'Donella Meadows'. New definitions use the suffix '(Meadows)'. Pick ONE canonical spelling per recurring term (e.g. 'Stocks and Flows', 'Balancing Feedback Loop', 'Reinforcing Feedback Loop', 'Leverage Points', 'Resilience', 'Self-Organization', 'Hierarchy (Systems)', 'Bounded Rationality', 'The Systems Zoo', 'Policy Resistance', 'The Tragedy of the Commons', 'Drift to Low Performance', 'Escalation', 'Success to the Successful', 'Shifting the Burden to the Intervenor', 'Rule Beating', 'Seeking the Wrong Goal', 'Paradigms', 'Dancing with Systems').`

const planPrompt = (chunkAnalyses, planned, label) => `
You are the **synthesis planner** for *${BOOK_TITLE}* by ${AUTHOR} — processing CHUNK "${label}" of a big book split into ${CHUNKS.length} sequential chunks. Produce a deduplicated, NO-CAP plan of the INTERPRETIVE notes to create or update FROM THIS CHUNK'S CHAPTERS ONLY. (The book note, author note, and per-chapter source summaries are generated separately and automatically — DO NOT plan them.)
## This chunk's per-chapter analyses
\`\`\`json
${JSON.stringify(chunkAnalyses, null, 2)}
\`\`\`
## Canonical names ALREADY PLANNED by earlier chunks of THIS SAME book (REUSE these exact titles — do not invent variants)
${planned.length ? planned.map(p=>`- [${p.kind}] ${p.title}  ->  ${p.file_path}`).join('\n') : '(none yet — this is the first chunk)'}
## Also read
\`${VAULT}/_system/link_vocabulary.md\` (controlled vocabulary across the 13 ingested books) and \`${VAULT}/maps/Home.md\`.
## Rules
- **No numerical caps**; be selective for durability/uniqueness. Minor per-example anecdotes (a specific thermostat, a specific fishery) belong in source summaries, not their own notes.
- **CROSS-CHUNK DEDUP (critical):** if a chapter here substantially treats a concept ALREADY PLANNED above, RE-LIST it in create_notes with the **EXACT same file_path and title**, adding THIS chunk's chapters to source_chapter_files and new candidate_passages — it will be MERGED, not duplicated. Never coin a variant name for an already-planned concept.
- **CROSS-BOOK MERGES (other authors' existing vault notes):** ${UPDATE_HINTS}
- **Paths**: concepts \`${VAULT}/concepts/<Title>.md\`; arguments \`${VAULT}/arguments/<one-sentence>.md\`; definitions \`${VAULT}/definitions/<Term> (Meadows).md\`; metaphors \`${VAULT}/metaphors/<Name>.md\`; symbols \`${VAULT}/symbols/<Name>.md\`; tensions \`${VAULT}/tensions/<Name>.md\`; references \`${VAULT}/references/Donella Meadows and <Other>.md\`.
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
  reference:`REFERENCE note (\`_system/templates/reference.md\`): relationship type, Explanation, Source Passages, Confidence. For a vault-internal interpretive reference (Meadows and an ingested author — Hayles/Burnham/Ascott/Zuboff/Harari), label the cross-reading clearly as interpretive synthesis unless Meadows actually cites them.`,
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
## Source chapters (the pre-selected candidate passages below are usually enough; open a raw chapter only if you need another verbatim quote — they are 15-66KB so read sparingly):
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
Brief Orientation: *${BOOK_TITLE}: A Primer* (drafted 1993 by systems scientist Donella H. Meadows, edited by Diana Wright, published posthumously 2008) is the accessible primary source for systems theory — stocks and flows, balancing and reinforcing feedback loops, resilience, self-organization, hierarchy, why systems surprise us (bounded rationality, nonlinearities, delays), the system traps/archetypes, and the twelve leverage points culminating in paradigms. Note its relation to the vault's systems/cybernetics cluster: it GROUNDS in its native discipline the feedback/self-organization vocabulary that Hayles (cybernetics), Burnham (systems esthetics), and Ascott (cybernetic/telematic art) carry secondhand; and its leverage-points hierarchy (immaterial paradigms/goals/information above material parameters/stocks) is a major new voice in the [[Material vs Immaterial]] tension.
Then bulleted wiki-linked lists of Major Concepts / Major Arguments / Important Definitions / Key Metaphors / Key Symbols / Major Tensions / References to Other Authors, using ONLY these REAL notes created in this ingest (do not invent titles):
${manifest}
Also list the cross-book notes this ingest EXTENDS (link them): ${updateNotes.map(u=>`[[${u.target_file.split('/').pop().replace(/\.md$/,'')}]]`).join(' · ') || '(none)'}.
Provide 2-3 reading pathways.
${LINKRULE}
Return only the path.`

const authorPrompt = `Write the AUTHOR note for ${AUTHOR}. The file IS the deliverable.
## Target: \`${authorTask.file_path}\`
FIRST read the target path to see whether it exists. It should NOT (Meadows is new).
- Create from \`${VAULT}/_system/templates/author.md\` — Central concerns (systems as producers of their own behavior; stocks, flows, and feedback loops; resilience, self-organization, and hierarchy; why systems surprise us — bounded rationality, nonlinearities, delays; system traps and archetypes; leverage points and the primacy of paradigms; living in / "dancing with" systems), major concepts/arguments (link the REAL notes created this ingest: ${createNotes.slice(0,40).map(n=>`[[${n.title}]]`).join(' · ')}), characteristic metaphors, related authors (N. Katherine Hayles, Jack Burnham, Roy Ascott as vault-internal interpretive kin — the cybernetics/systems bridge; Jay Forrester, Herbert Simon, Ludwig von Bertalanffy, Kenneth Boulding, Garrett Hardin, Gregory Bateson as forward-stubs), tensions. Frontmatter: type author, name ${AUTHOR}, books [[${BOOK_TITLE}]], last_updated ${TODAY}.
${LINKRULE}
Return only the path.`

const sourcePrompt = (t) => `Write ONE source summary. The file IS the deliverable.
## Write to: \`${t.file_path}\`
Inputs: raw chapter \`${VAULT}/raw/${BF}/${t.chapter.file}\`; existing analysis \`${VAULT}/_system/analysis/${BF} - ${t.chapter.file.replace(/\.md$/,'')}.md.analysis.md\`; template \`${VAULT}/_system/templates/source_summary.md\`; vocabulary \`${VAULT}/_system/link_vocabulary.md\`.
Frontmatter MUST include: type source_summary, title, book "${BOOK_TITLE}", author "${AUTHOR}", raw_file "raw/${BF}/${t.chapter.file}", sha256 "${t.chapter.sha}", sources, status generated, last_updated ${TODAY}.
Body: Orientation (2-3 paragraphs); wiki-linked Key Concepts/Arguments/Definitions/Metaphors/Symbols/Tensions (bare canonical titles — link the REAL notes from this ingest and reused vault concepts); Outgoing Links; Candidate Essay Uses; 2+ Source Citations with verbatim block quotes + Supports + confidence labels.
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
2. Read the analysis file(s) below for pre-extracted verbatim quotes (do NOT full-read the 15-66KB raw chapters; Grep a raw file only to confirm a quote):
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
// Run updates in their OWN wave AFTER creates (Zuboff lesson: updates starve inside the giant create wave).
const updated = await parallel(updateNotes.map(u => () => safeAgent(updatePrompt(u), { label:`upd:${u.target_file.split('/').pop().replace(/\.md$/,'').slice(0,24)}`, phase:'Generation Pass' }, 3)))
log(`Generation: created ${created.filter(Boolean).length}/${createThunks.length} (incl. book, author, ${sourceTasks.length} sources), updated ${updated.filter(Boolean).length}/${updateNotes.length}`)

// ===================== Phase 4: Indexes & Maps =====================
phase('Indexes & Maps')
const idxPrompt = `Update the vault maps/overview after ingesting *${BOOK_TITLE}* by ${AUTHOR}. This is a CORPUS RE-EXPANSION: Meadows was removed on 2026-06-04 and RE-ADDED by the user on 2026-07-04 (same pattern as the Zuboff re-add). The vault now holds 14 books / 12 authors (Donella Meadows is the new 12th author); more raw books remain queued for future ingests. Use Edit (not overwrite); add new entries without disturbing existing ones.
## Plan index entries:
\`\`\`json
${JSON.stringify(idxAgg, null, 2)}
\`\`\`
Tasks: 1) \`${VAULT}/maps/Concept Index.md\` (Alphabetical re-sort + thematic clusters; add/extend a systems-thinking cluster — stocks & flows, feedback loops, resilience, self-organization, hierarchy, leverage points, system traps). 2) \`${VAULT}/maps/Argument Index.md\` (add \`### ${AUTHOR} — ${BOOK_TITLE}\`). 3) \`${VAULT}/maps/Tension Index.md\`. 4) \`${VAULT}/maps/Symbol and Metaphor Index.md\`. 5) \`${VAULT}/maps/Author Network.md\` (Donella Meadows as a new node linked to Hayles/Burnham/Ascott — the cybernetics/systems bridge; realize the systems affinities; note Forrester/Simon/Bertalanffy/Boulding/Hardin/Bateson forward-stubs). 6) \`${VAULT}/maps/Reading Pathways.md\` (2-3 pathways for this book + a systems arc: Meadows systems primer -> Hayles cybernetics -> Burnham systems esthetics -> Ascott cybernetic/telematic art). 7) \`${VAULT}/maps/Home.md\` (Status: 14 books / 12 authors after the Meadows re-add; more raw books queued). 8) \`${VAULT}/overview.md\` (Current State).
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
