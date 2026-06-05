export const meta = {
  name: 'ingest-burnham-beyond-modern-sculpture',
  description: 'Big-book ingest for Burnham Beyond Modern Sculpture (9 dense chapters): parallel analyses -> 3 sequential chunked planners (dedup across chunks via a running canonical-names list) -> single generation (book/author/9 sources/interpretive/updates) -> one index pass.',
  phases: [
    { title: 'Analysis Pass' },
    { title: 'Synthesis Plan (chunked)' },
    { title: 'Generation Pass' },
    { title: 'Indexes & Maps' },
  ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'Burnham - Beyond Modern Sculpture'
const BOOK_TITLE = 'Beyond Modern Sculpture'
const AUTHOR = 'Jack Burnham'
const TODAY = '2026-06-05'

const CHAPTERS = [
  { file: '02 Introduction.md', sha: '4f57d659c58e9f30d7e002d0a6817348e8ef0173bd6f9073331c8cc790d718a3', title: 'Introduction' },
  { file: "03 Chapter 1 - Sculpture's Vanishing Base.md", sha: '9ec23b29550ed66ab2adbb5dd3ce596d6ded40ed2de7f317a93feb70e1c39663', title: "Ch1 - Sculpture's Vanishing Base" },
  { file: '04 Chapter 2 - The Biotic Sources of Modern Sculpture.md', sha: 'e16909c47d96460b4ca12326fcc793f2c5eff6e26928e265c6e4bc096ffab04c', title: 'Ch2 - The Biotic Sources of Modern Sculpture' },
  { file: '05 Chapter 3 - Formalism - The Weary Vocabulary.md', sha: 'dc932c47e9b8e8e58d673669c88a62203cd89abbf9b2d11dcbe627cd5537ce5d', title: 'Ch3 - Formalism: The Weary Vocabulary' },
  { file: '06 Chapter 4 - Form Exhaustion and the Rise of Phenomenalism.md', sha: 'd53cff7f1477fd18b5a167b3fcd7dbd354db11716e32f01c3848440f2dc504ae', title: 'Ch4 - Form Exhaustion and the Rise of Phenomenalism' },
  { file: '07 Chapter 5 - Sculpture and Automata.md', sha: '0ace0907d1f250f57b8afbe71e2ba5b2cc07adb6d32c13ceda75a0f75799270e', title: 'Ch5 - Sculpture and Automata' },
  { file: '08 Chapter 6 - Kineticism - The Unrequited Art.md', sha: 'a953b468e56d9a0f744352cc65858f2f1c5b9485bfee8e4f813164bd94859f2b', title: 'Ch6 - Kineticism: The Unrequited Art' },
  { file: '09 Chapter 7 - Light as Sculpture Medium.md', sha: 'b1dd840a79ad67d007e2a6c11cca699b91ddc8ebe3c95e30606649ccc65a07e2', title: 'Ch7 - Light as Sculpture Medium' },
  { file: '10 Chapter 8 - Robot and Cyborg Art.md', sha: '22d30cc60f13452ad4595b49309e23fd8a6d06f74d76f64b15410c67a01ddfab', title: 'Ch8 - Robot and Cyborg Art' },
]

// Chunk boundaries (inclusive index ranges) — 3 chunks of 3, each thematically coherent.
// Burnham's chapters are exceptionally byte-dense (Ch2 151KB, Ch6 159KB, Ch8 164KB), so we keep
// each chunked planner to 3 analyses to stay well within the planner's output budget.
//   Chunk 1 [0,2]: Intro + Vanishing Base + Biotic Sources  -> the object/reification theory + vitalism
//   Chunk 2 [3,5]: Formalism + Form Exhaustion/Phenomenalism + Automata -> formalism's exhaustion, the turn to system
//   Chunk 3 [6,8]: Kineticism + Light + Robot/Cyborg Art    -> the system: kinetic/light/cybernetic/cyborg art
const CHUNKS = [[0,2],[3,5],[6,8]]

const FOCUS = `Jack Burnham's *Beyond Modern Sculpture: The Effects of Science and Technology on the Sculpture of This Century* (1968) — the foundational text of SYSTEMS ESTHETICS. Burnham's master thesis: modern sculpture is not dying of formal exhaustion but undergoing "reification" ("thingification," Verdinglichung, after Marx) — the constant re-synchronization of artistic sensibility with the scientific form-world — and is migrating FROM THE OBJECT TO THE SYSTEM, toward the simulation of biological life through technology (kinetic, light, cybernetic, and finally "Cyborg Art," the art of cybernetic organisms). The book's two-part spine IS the vault's titular axis: Part I (Intro, Ch1-4) = sculpture as OBJECT (material, palpable, inert, place-bound); Part II (Ch5-8) = sculpture as SYSTEM (an interacting assembly with life-like properties: self-organization, growth, input/output, equilibrium, death). Core ideas to extract as durable notes: the object-to-system transition; reification/thingification; technics / "la technique" (Jacques Ellul) and "technology is the metaphysics of our century" (Friedrich Jünger); the scientific demiurge / scientific idealism; the paradigm and "normal science" (Thomas Kuhn); entropy / pockets of decreasing entropy (Kenneth Boulding, cybernetics); vitalism and the biotic/biomorphic sources of sculpture (Ch2); formalism as "the weary vocabulary" and the classical machine as an inadequate archetype of life (Ch3); form exhaustion and the rise of phenomenalism / Object (Minimal) art, "sculpture de-idealized" (Ch4); automata, the manikin, and the robot as a technological population's "collective obsession" dreaming of its own replacement (Ch5); Kinetic Art (Ch6); Light as a sculpture medium / the electromechanical system (Ch7); Cybernetic Art and Cyborg Art, the kybernetes/steersman, artificial intelligence aesthetics, and art with "a capacity for reciprocal relationships with human beings" (Ch8). Also: Herbert Read's "tortuous dematerialization... a scribble in the air" (this PRECEDES and bridges to Lippard's Dematerialization). Burnham anticipates the cyborg (Haraway, 1985) by 17 years and the systems/posthuman body (Hayles). The raw OCR carries scanning artifacts (broken hyphenation, mid-word line breaks, stray characters like "iack"/"lung" for "Jung", "demonstra tes"); quote CLEAN verbatim substrings only — never transcribe a corrupted fragment as Burnham's prose.`

const LINKRULE = `
## Link rules (MANDATORY — read first)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Ten books are already ingested.
- A wiki-link target is the bare canonical note title (filename without .md). NEVER a type prefix (\`[[Concept - X]]\`). One canonical name per concept; no article/variant duplicates.
- REUSE existing canonical names. Realize committed research-foci stubs by their canonical names where this book supports them.
- A link target must resolve to an existing note, a note created in this ingest, or a declared forward-stub (figures without a book in raw/, or cross-author concepts). Otherwise plain text.
## Provenance (MANDATORY)
- Verbatim quotes only — open the raw chapter under \`${VAULT}/raw/${BF}/\` and copy character-for-character. Never paraphrase inside quotation marks.
- Every note has a \`## Sources\` section; every major claim carries a confidence label: \`Directly stated\` / \`Strongly implied\` / \`Interpretive synthesis\` / \`Speculative connection\`.
- No invention. No emoji.
`

// Resilient agent wrapper: retries on the occasional "completed without calling StructuredOutput"
// (schema) failure or other transient throw, so one flaky subagent cannot abort the whole big-book run.
// Prompts/opts are passed through byte-identical, so resume cache-hits are preserved.
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
Analysis file to: \`${VAULT}/_system/analysis/${BF} - ${ch.file.replace(/\.md$/, '')}.md.analysis.md\` (use the template; fill Source Metadata: book, author, raw-relative path, SHA256, Date analyzed ${TODAY}). Be expansive — this is a long, dense chapter; surface ALL durable concepts/arguments/metaphors/tensions, not just a few.
## Focus for this book
${FOCUS}
## Then return the structured object.
- **matches_existing**: compare this chapter's concepts against the canonical names in link_vocabulary.md (Systems Theory, Cybernetics, The Cyborg, Dematerialization, Conceptual Art, Emergence, Autopoiesis, Material vs Immaterial, Technology as Metaphor, Posthumanism, Information, The Body as Data, Distributed Cognition, etc.); recommend update_existing / create_distinct / link_only for any genuine overlap (cross-book merges are the vault's engine).
- This book also realizes long-deferred committed research-foci stubs: **New Media Art** (21 inbound files) and **Art as Experiential Technology** (18 files) were deferred in the Lippard ingest "until Ascott/Burnham." If this chapter substantively grounds them (cybernetic/kinetic/light/systems art; art with reciprocal response), note that in matches_existing as update_existing.
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

const UPDATE_HINTS = `Extend (with a clearly-marked \`## Jack Burnham (Beyond Modern Sculpture)\` section), do NOT duplicate, where this book treats a concept the vault already has. Likely cross-book UPDATE targets (emit update_notes, NOT create_notes):
- concepts/Systems Theory.md — Burnham is THE systems-art figure; "object and system"; systems with life-like properties. (40 inbound files.)
- concepts/Dematerialization.md — Burnham (citing Herbert Read's "scribble in the air") is a precursor/parallel to Lippard's dematerialization of the art object; cross-link the two.
- concepts/The Cyborg.md — Burnham's "Cyborg Art (the art of cybernetic organisms)" is a 1968 art-world deployment of the cyborg, predating Haraway (1985) and Hayles.
- concepts/Cybernetics.md — kybernetes/steersman, cybernetic art, decreasing-entropy systems; Wiener-era cybernetics applied to art.
- tensions/Material vs Immaterial.md — THE titular axis: object (material/palpable/inert) vs system (immaterial/processual/life-like). This would make it an EIGHT-author tension.
- concepts/Conceptual Art.md and concepts/Exhibition as Medium.md — Lippard adjacencies (often link_only).
- concepts/Emergence.md / concepts/Autopoiesis.md — systems exhibiting self-organization, growth, equilibrium.
- concepts/Posthumanism.md and concepts/The Body as Data.md — "remaking the biological composition of its inhabitants"; life-simulating systems; the cyborg body.
- concepts/Technology as Metaphor.md — "technology is the metaphysics of our century" (Jünger via Burnham); science as the contemporary religion/icon.
- concepts/Information.md / concepts/Distributed Cognition.md — society as "one giant, interconnected, living system."
REALIZE long-deferred committed research-foci stubs where Burnham genuinely grounds them (emit as update_notes against the bare canonical names; the index pass upgrades the stub): **New Media Art** and **Art as Experiential Technology** (deferred in the Lippard ingest "until Ascott/Burnham" — Burnham's cybernetic/kinetic/light/systems art and his vision of art with "reciprocal relationships with human beings" are their direct ancestry).
Mint NEW vault-internal interpretive references where the cross-reading is real and substantive (label as interpretive synthesis, NOT a citation Burnham made):
- references/Jack Burnham and Lucy Lippard.md (the keystone — dematerialization of the art object; object->system; both 1968-era);
- references/Jack Burnham and Donna Haraway.md (cybernetic organism / cyborg; organism-machine boundary; Burnham 1968 anticipates Haraway 1985);
- references/Jack Burnham and N. Katherine Hayles.md (cybernetics, systems, the posthuman body, information);
- references/Jack Burnham and Marshall McLuhan.md (1960s technology-and-culture contemporaries; the electric/cybernetic age) — only if genuinely supported.
Burnham cites real figures with no book in raw/ — forward-stub authors / plain text: Herbert Read, Jacques Ellul, Friedrich Jünger, Kenneth Boulding (already a forward-stub), Thomas Kuhn, C. G. Jung, Wilhelm Worringer, Oswald Spengler, Karl Marx (existing). Artists (Brancusi, Arp, Moore, Gabo, Calder, Tinguely, Moholy-Nagy, etc.) are plain text unless durably central. Canonical author name: 'Jack Burnham'. New definitions use the suffix '(Burnham)'. If you mint a systems-esthetics concept, pick ONE canonical spelling (recommend 'Systems Esthetics' — Burnham's own American spelling — kept distinct from the broader concept 'Systems Theory', and cross-linked).`

const planPrompt = (chunkAnalyses, planned, label, isFirst) => `
You are the **synthesis planner** for *${BOOK_TITLE}* by ${AUTHOR} — processing CHUNK "${label}" of a big book split into 3 sequential chunks. Produce a deduplicated, NO-CAP plan of the INTERPRETIVE notes to create or update FROM THIS CHUNK'S CHAPTERS ONLY. (The book note, author note, and per-chapter source summaries are generated separately and automatically — DO NOT plan them.)
## This chunk's per-chapter analyses
\`\`\`json
${JSON.stringify(chunkAnalyses, null, 2)}
\`\`\`
## Canonical names ALREADY PLANNED by earlier chunks of THIS SAME book (REUSE these exact titles — do not invent variants)
${planned.length ? planned.map(p=>`- [${p.kind}] ${p.title}  ->  ${p.file_path}`).join('\n') : '(none yet — this is the first chunk)'}
## Also read
\`${VAULT}/_system/link_vocabulary.md\` (controlled vocabulary across the 10 ingested books) and \`${VAULT}/maps/Home.md\`.
## Rules
- **No numerical caps**; be selective for durability/uniqueness. Minor per-artist or per-work details belong in source summaries, not their own notes.
- **CROSS-CHUNK DEDUP (critical):** if a chapter here substantially treats a concept ALREADY PLANNED above, RE-LIST it in create_notes with the **EXACT same file_path and title**, adding THIS chunk's chapters to source_chapter_files and new candidate_passages — it will be MERGED, not duplicated. Never coin a variant name for an already-planned concept.
- **CROSS-BOOK MERGES (other authors' existing vault notes):** ${UPDATE_HINTS}
- **Paths**: concepts \`${VAULT}/concepts/<Title>.md\`; arguments \`${VAULT}/arguments/<one-sentence>.md\`; definitions \`${VAULT}/definitions/<Term> (Burnham).md\`; metaphors \`${VAULT}/metaphors/<Name>.md\`; symbols \`${VAULT}/symbols/<Name>.md\`; tensions \`${VAULT}/tensions/<Name>.md\`; references \`${VAULT}/references/Jack Burnham and <Other>.md\`.
- Each entry: sharp 2-4 sentence \`scope\` + pre-selected verbatim \`candidate_passages\` (set chapter_file to the raw-relative path \`raw/${BF}/<file>\`).
- **index_entries**: one bullet per NEW note this chunk introduces. **review_items**: cross-book merge calls, possible duplicates, naming concerns.
${LINKRULE}
Return the structured plan for THIS CHUNK.
`

const createMap = new Map()   // file_path -> merged create entry
const updateMap = new Map()   // target_file -> merged update entry
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
  const plan = await safeAgent(planPrompt(chunkAnalyses, planned, label, ci===0), { label:`plan:${label}`, phase:'Synthesis Plan (chunked)', schema: PLAN_SCHEMA }, 4)
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

// dedup index bullets
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
  reference:`REFERENCE note (\`_system/templates/reference.md\`): relationship type, Explanation, Source Passages, Confidence. For a vault-internal interpretive reference (Burnham and an author whose book IS ingested, e.g. Lippard/Haraway/Hayles/McLuhan), label the cross-reading clearly as interpretive synthesis, not a citation Burnham made.`,
}

const interpPrompt = (n) => {
  const chs=(n.source_chapter_files||[]).map(r=>`  - ${VAULT}/${r}`).join('\n')
  const cand=(n.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass. Write ONE new wiki note. The file IS the deliverable.
## Write to: \`${n.file_path}\`
## Idempotency guard: FIRST check whether this file already exists. If it already exists (a prior book created it), do NOT overwrite — PRESERVE all existing content and add a clearly-marked \`## ${AUTHOR} (${BOOK_TITLE})\` subsection plus a new \`## Sources\` entry. Otherwise create it fresh.
## Kind: ${n.kind} — ${KIND_GUIDE[n.kind]}
## Title: ${n.title}
## Scope: ${n.scope}
## Source chapters (read for verbatim quotes — these are long, dense chapters):
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
Brief Orientation: ${BOOK_TITLE} (1968) is the foundational text of systems esthetics. Part I (Intro, Ch1-4) treats sculpture as OBJECT (reification, vitalism, formalism, form exhaustion); Part II (Ch5-8) treats sculpture as SYSTEM (automata, kineticism, light, cybernetic/cyborg art). Note the book's direct relation to the vault's material-immaterial axis (object->system), the cyborg/posthuman cluster, systems theory, and the dematerialization debate (Lippard).
Then bulleted wiki-linked lists of Major Concepts / Major Arguments / Important Definitions / Key Metaphors / Key Symbols / Major Tensions / References to Other Authors, using ONLY these REAL notes created in this ingest (do not invent titles):
${manifest}
Also list the cross-book notes this ingest EXTENDS (link them): ${updateNotes.map(u=>`[[${u.target_file.split('/').pop().replace(/\.md$/,'')}]]`).join(' · ') || '(none)'}.
Provide 2-3 reading pathways.
${LINKRULE}
Return only the path.`

const authorPrompt = `Write or EXTEND the AUTHOR note for ${AUTHOR}. The file IS the deliverable.
## Target: \`${authorTask.file_path}\`
FIRST read the target path to see whether it exists.
- **If it EXISTS**: PRESERVE all content; extend it (ensure [[${BOOK_TITLE}]] in books: frontmatter; add this book's concepts/arguments/metaphors/related-authors/tensions linking the REAL notes created this ingest; append new \`## Sources\`; last_updated ${TODAY}).
- **If it DOES NOT EXIST**: create from \`${VAULT}/_system/templates/author.md\` — Central concerns (the effect of science and technology on sculpture; reification/thingification; the migration from object to system; systems esthetics; the simulation of life through technology; kinetic/light/cybernetic/cyborg art), major concepts/arguments (link the REAL notes created this ingest: ${createNotes.slice(0,40).map(n=>`[[${n.title}]]`).join(' · ')}), characteristic metaphors, related authors (Lippard/Haraway/Hayles/McLuhan as vault-internal interpretive kin; Jacques Ellul, Herbert Read, Thomas Kuhn, Kenneth Boulding, Friedrich Jünger and others as forward-stubs), tensions. Frontmatter: type author, name ${AUTHOR}, books [[${BOOK_TITLE}]], last_updated ${TODAY}.
${LINKRULE}
Return only the path.`

const sourcePrompt = (t) => `Write ONE source summary. The file IS the deliverable.
## Write to: \`${t.file_path}\`
Inputs: raw chapter \`${VAULT}/raw/${BF}/${t.chapter.file}\`; existing analysis \`${VAULT}/_system/analysis/${BF} - ${t.chapter.file.replace(/\.md$/,'')}.md.analysis.md\`; template \`${VAULT}/_system/templates/source_summary.md\`; vocabulary \`${VAULT}/_system/link_vocabulary.md\`.
Frontmatter MUST include: type source_summary, title, book "${BOOK_TITLE}", author "${AUTHOR}", raw_file "raw/${BF}/${t.chapter.file}", sha256 "${t.chapter.sha}", sources, status generated, last_updated ${TODAY}.
Body: Orientation (2-3 paragraphs); wiki-linked Key Concepts/Arguments/Definitions/Metaphors/Symbols/Tensions (bare canonical titles — link the REAL notes from this ingest and reused vault concepts); Outgoing Links; Candidate Essay Uses; 2+ Source Citations with verbatim block quotes + Supports + confidence labels.
${LINKRULE}
Return only the path.`

const updatePrompt = (u) => {
  const chs=(u.source_chapter_files||[]).map(r=>`  - ${VAULT}/${r}`).join('\n')
  const cand=(u.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass (UPDATE). EXTEND an existing vault note with a ${AUTHOR} section. Preserve ALL existing content.
## Target: \`${u.target_file}\`
1. Read it fully. 2. If absent, add/extend a brief \`## General Orientation\` distinguishing the multi-author senses (do not delete prose). 3. Add \`## ${u.section_title}\` with ${AUTHOR}'s treatment (1-3 paragraphs, verbatim-anchored). 4. Frontmatter: add this book's raw chapter(s) to sources and \`[[${AUTHOR}]]\` to authors; keep existing entries. 5. Append new \`## Sources\` entries; do NOT alter existing ones.
## Note for committed-stub realization: if this target file does NOT yet exist (e.g. New Media Art / Art as Experiential Technology were forward-stubs), CREATE it as a full concept note grounded in Burnham, and note in the body that it was a long-deferred committed research-focus stub now realized.
## Scope: ${u.scope}
## Source chapters:
${chs}
## Candidates:
${cand || '  (find your own)'}
${LINKRULE}
Return only the path.`
}

const createThunks = [
  () => safeAgent(bookPrompt, { label:`gen:book:${BOOK_TITLE.slice(0,20)}`, phase:'Generation Pass' }, 2),
  () => safeAgent(authorPrompt, { label:`gen:author:${AUTHOR}`, phase:'Generation Pass' }, 2),
  ...createNotes.map(n => () => safeAgent(interpPrompt(n), { label:`gen:${n.kind}:${n.title.slice(0,28)}`, phase:'Generation Pass' }, 2)),
  ...sourceTasks.map(t => () => safeAgent(sourcePrompt(t), { label:`source:${t.chapter.title.slice(0,24)}`, phase:'Generation Pass' }, 2)),
]
const created = await parallel(createThunks)
const updated = await parallel(updateNotes.map(u => () => safeAgent(updatePrompt(u), { label:`upd:${u.target_file.split('/').pop().replace(/\.md$/,'').slice(0,24)}`, phase:'Generation Pass' }, 2)))
log(`Generation: created ${created.filter(Boolean).length}/${createThunks.length} (incl. book, author, ${sourceTasks.length} sources), updated ${updated.filter(Boolean).length}/${updateNotes.length}`)

// ===================== Phase 4: Indexes & Maps =====================
phase('Indexes & Maps')
const idxPrompt = `Update the vault maps/overview after ingesting *${BOOK_TITLE}* by ${AUTHOR} (the 11th book; the first art/systems-esthetics primary source after Lippard). Use Edit (not overwrite); add new entries without disturbing existing ones.
## Plan index entries:
\`\`\`json
${JSON.stringify(idxAgg, null, 2)}
\`\`\`
Tasks: 1) \`${VAULT}/maps/Concept Index.md\` (Alphabetical re-sort + thematic clusters; add a Burnham/systems-esthetics/cybernetic-art cluster). 2) \`${VAULT}/maps/Argument Index.md\` (add \`### ${AUTHOR} — ${BOOK_TITLE}\`). 3) \`${VAULT}/maps/Tension Index.md\` (note Material vs Immaterial gains Burnham; realize any committed stub this book realizes). 4) \`${VAULT}/maps/Symbol and Metaphor Index.md\`. 5) \`${VAULT}/maps/Author Network.md\` (Realized References; Burnham as a new node linked to Lippard/Haraway/Hayles/McLuhan). 6) \`${VAULT}/maps/Reading Pathways.md\` (2-3 pathways for this book). 7) \`${VAULT}/maps/Home.md\` (Status: note the new book + 2-3 highlight links; New Media Art / Art as Experiential Technology stubs may now resolve). 8) \`${VAULT}/overview.md\` (Current State).
Canonical links only (no type prefixes); link only notes that exist. Return a one-paragraph summary.`
const idxReport = await safeAgent(idxPrompt, { label:'indexes & maps', phase:'Indexes & Maps' }, 2)

return {
  book: BOOK_TITLE,
  analyses_written: analyses.length,
  created: created.filter(Boolean).length,
  updated: updated.filter(Boolean).length,
  source_summaries: sourceTasks.length,
  create_plan: createNotes.map(n=>({kind:n.kind, title:n.title, file_path:n.file_path, chapters:n.source_chapter_files})),
  update_plan: updateNotes.map(u=>({target:u.target_file, section:u.section_title})),
  index_report: idxReport,
  review_items: allReview,
}
