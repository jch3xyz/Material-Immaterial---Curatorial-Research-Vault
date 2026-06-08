export const meta = {
  name: 'ingest-ascott-telematic-embrace',
  description: 'Big-book ingest for Ascott Telematic Embrace (29 substantive units): parallel analyses -> 7 sequential chunked planners (dedup via running canonical-names list) -> single generation (book/author/29 sources/interpretive/updates) -> one index pass. Update path is analysis-driven (Burnham lesson: do not full-read the huge raw chapters in update agents).',
  phases: [
    { title: 'Analysis Pass' },
    { title: 'Synthesis Plan (chunked)' },
    { title: 'Generation Pass' },
    { title: 'Indexes & Maps' },
  ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'Ascott - Telematic Embrace'
const BOOK_TITLE = 'Telematic Embrace'
const AUTHOR = 'Roy Ascott'
const TODAY = '2026-06-08'

const CHAPTERS = [
  { file: '04 From Cybernetics to Telematics.md', sha: 'e45aea12b323676a91221e1882434f801a361df5b25ecdc9b1f6a378de205ed6', title: 'Shanken Intro - From Cybernetics to Telematics' },
  { file: '05 The Construction of Change.md', sha: '409ef6292444e806714798820acff23fa1733ee94096f68319b4182c38ae89b8', title: 'The Construction of Change' },
  { file: '06 Statement from Control.md', sha: '8c216256e2da80cffa97b4ae8be6d691309c056f44c2a76908652e09647cb9b4', title: 'Statement from Control' },
  { file: '07 Behaviourist Art and the Cybernetic Vision.md', sha: '27a4fb9788453e5202192cd1a730d403329ff9ffe19283cf26b5cad767ab5b17', title: 'Behaviourist Art and the Cybernetic Vision' },
  { file: '08 Behaviourables and Futuribles.md', sha: '196f4bae077ff12b6df169cd84ffddeb6d7525aebc89a074a8379ad6c299cd28', title: 'Behaviourables and Futuribles' },
  { file: '09 The Psibernetic Arch.md', sha: '40bb377fca25b3ca3f16ebe38a799d2f0c665d6f1894c10a4a3ea9ca97458d96', title: 'The Psibernetic Arch' },
  { file: '10 Table.md', sha: '38b107dcf61a98cf85b917352875ca997705b54da47326cc0b016eedb7890224', title: 'Table' },
  { file: '11 Connective Criticism.md', sha: 'c827bb0bf2e033e50f4eaaf92c687ebdf72332c53b7bf7103fb0715385582739', title: 'Connective Criticism' },
  { file: '12 Network as Artwork: the Future of Visual Arts Education.md', sha: '4a9d5099cdd1c5f5642854a0fce0c1abc3797b3826acfb497ce42ed03a8b17d9', title: 'Network as Artwork' },
  { file: '13 Towards a Field Theory for Postmodernist Art.md', sha: '8ea41db09d806c2812dd5b965a5966d93b5a6fabf28a75bee57962b89c7e369f', title: 'Towards a Field Theory for Postmodernist Art' },
  { file: '14 TEN Wings.md', sha: 'a79206d18f099cd7102d397f1a9dbee424834f5b86afb342817d1776576b3cbd', title: 'TEN Wings' },
  { file: '15 Art and Telematics: towards a Network Consciousness.md', sha: 'c8094781d410d2155280931c1b8255a1b90aa8b659b4456af12a459713d79016', title: 'Art and Telematics: towards a Network Consciousness' },
  { file: '16 Concerning Nets and Spurs: Meaning, Mind, and Telematic.md', sha: '5142bfdb709a05d2268313e023fd1e503c96c3e18642c45e172962c1c46dcf47', title: 'Concerning Nets and Spurs' },
  { file: '17 Art and Education in the Telematic Culture.md', sha: '17e8c384814c3ada92cd37b001a19534b90d2c74d2b4341f1f242e4628dc745c', title: 'Art and Education in the Telematic Culture' },
  { file: '18 Gesamtdatenwerk: Connectivity, Transformation, and Tran.md', sha: '93be8ca0e561bc85f832c2186e0912df05e9d67ea9cb3396e9d7ba4994542757', title: 'Gesamtdatenwerk' },
  { file: '19 Beyond Time-Based Art: ESP, PDP, and PU.md', sha: 'e58c2ffa7d6ae638939c071eaaad17c5ae62b5ca0d0b4972571397b4dd719d19', title: 'Beyond Time-Based Art' },
  { file: '20 Is There Love in the Telematic Embrace?.md', sha: '04f84cd9b973164be94708ce4329082e86c2c501c0f73d7934d2e379d1d49dae', title: 'Is There Love in the Telematic Embrace?' },
  { file: '21 Photography at the Interface.md', sha: '23cbd17e1ea25162821f7553707e4adfa1731858bebb40c717c1ca47f2278be4', title: 'Photography at the Interface' },
  { file: '22 Heavenly Bodies: Teleconstructing a Zodiac for the Twen.md', sha: '31c3fecc325bf2edf2a923242aab222bd65bc677a471559b07f5a8c36128ab0f', title: 'Heavenly Bodies' },
  { file: '23 Telenoia.md', sha: '16f8883e0b2cfd67d8744d7e84ee412f13bfdfc707244f93e5e63452cf3460d6', title: 'Telenoia' },
  { file: '24 From Appearance to Apparition: Communication and Cultur.md', sha: '5bc6ca9760d8fd9e544324de4eba96ebea733c43a44127345fae3c561f5698cc', title: 'From Appearance to Apparition' },
  { file: '25 The ARS Electronica Center Datapool.md', sha: 'c495baed306f1a0ec77634ecb53915e3827075905fd2207fe8cc558e3c9f5dee', title: 'The ARS Electronica Center Datapool' },
  { file: '26 The Planetary Collegium: Art and Education in the Post-.md', sha: 'eba8c698c96f5c38a538a10fdfd0856dc3e233574c80b59ca82b6ca5a3ed0041', title: 'The Planetary Collegium' },
  { file: '27 The Architecture of Cyberception.md', sha: '45b2fd2d9482dc5df77d3e996ea3c49ad8bb4f8e40c5e616bcef7db5e3ed6077', title: 'The Architecture of Cyberception' },
  { file: '28 Back to Nature II: Art and Technology in the Twenty-Fir.md', sha: '91912e44702d1a763ef326c025e584d1d73b0c26f2d2a59c13ccf962278d20b5', title: 'Back to Nature II' },
  { file: '29 The Mind of the Museum.md', sha: '4b417770c83ac0af7f47888a7bb3d7ab09c2739767911b85f2c35af82503a21d', title: 'The Mind of the Museum' },
  { file: '30 Weaving the Shamantic Web: Art and Technologies in the .md', sha: '55005b88dc671c7dc8066eab9895446a2db0ff01d76905eafcfc4393cff18c11', title: 'Weaving the Shamantic Web' },
  { file: '31 Art @ the Edge of the NET: the Future Will Be Moist!.md', sha: 'cb34c9f54cc7082efdc739abf9e59174e7a71429304d2dee2de32d5a6130bbaf', title: 'Art @ the Edge of the NET (The Future Will Be Moist)' },
  { file: '32 Technoetic Aesthetics: 100 Terms and Definitions for th.md', sha: '09c6d426198b36331449600e043fbdbd0b5b4e3ed88b5c639721579f8e2a21a4', title: 'Technoetic Aesthetics' },
]

// 7 chunks, <=5 chapters each, roughly chronological/thematic (early cybernetic art -> telematics -> cyberception/technoetics).
const CHUNKS = [[0,4],[5,9],[10,13],[14,17],[18,21],[22,25],[26,28]]

const FOCUS = `Roy Ascott's *Telematic Embrace: Visionary Theories of Art, Technology, and Consciousness* (ed. Edward A. Shanken, 2003) — collected writings 1964-2003 by the founding theorist of TELEMATIC ART (art of computer-mediated telecommunications networks) and the pioneer, alongside Jack Burnham, of 1960s CYBERNETIC ART. The arc: (1) 1960s **cybernetic / behaviourist art** — the artwork as a behavioural, feedback-driven SYSTEM that the spectator completes ("the construction of change," the change-painting, "behaviourables," the cybernetic vision); (2) 1980s **telematic art** — the networked, distributed artwork and "the telematic embrace," "network consciousness," Gesamtdatenwerk, "Is There Love in the Telematic Embrace?"; (3) 1990s-2000s **cyberception, technoetics, and moistmedia** — perception extended by technology (cyberception), the fusion of technology + consciousness (technoetics / technoetic aesthetics), the convergence of dry digital / wet biological / spiritual ("the future will be moist"), shamanism / altered states / psi, and the Planetary Collegium. Core terms to extract as durable notes: Telematic Art / telematics; The Telematic Embrace; Network Consciousness; Cybernetic Art and the Cybernetic Vision; Behaviourist Art / behaviourables; Cyberception; Technoetics / Technoetic Aesthetics; Moistmedia; Telenoia (the networked opposite of paranoia); Gesamtdatenwerk; the double gaze; Apparition vs Appearance; the triad Connectivity / Immersion / Interaction / Transformation; the Planetary Collegium; the Shamantic Web; Psibernetics. CROSS-LINK heavily to the just-ingested Burnham (the two poles of 1960s cybernetic art: Burnham's systems esthetics of the OBJECT->SYSTEM vs Ascott's behavioural/participatory cybernetic art), to McLuhan (global village -> network consciousness), to Hayles/Haraway (the posthuman/cyborg networked body), and to O'Gieblyn (re-enchantment / consciousness / technoetics).
IMPORTANT — chapter 04 "From Cybernetics to Telematics" is EDWARD SHANKEN'S editorial INTRODUCTION (a scholar writing ABOUT Ascott), NOT Ascott's own essay. Attribute any quote from 04 to **Shanken (the editor)**, never to Ascott; use 04 for orientation and to identify which Ascott essays develop which concepts. All other chapters (05-32) are Ascott's own primary texts. The raw is OCR-scanned (broken hyphenation, mid-word breaks, stray characters); quote ONLY clean contiguous substrings, never a corrupted token.`

const LINKRULE = `
## Link rules (MANDATORY — read first)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Eleven books are already ingested (Burnham just added the art/systems-esthetics cluster — REUSE its notes).
- A wiki-link target is the bare canonical note title (filename without .md). NEVER a type prefix (\`[[Concept - X]]\`). One canonical name per concept; no article/variant duplicates.
- REUSE existing canonical names. Burnham realized the committed stubs \`New Media Art\`, \`Art as Experiential Technology\`, \`Cyborg Art\`, \`Systems Esthetics\`, \`Reciprocal Communication\` — EXTEND these (update_notes), do NOT re-create them.
- A link target must resolve to an existing note, a note created in this ingest, or a declared forward-stub (figures without a book in raw/, or cross-author concepts). Otherwise plain text.
## Provenance (MANDATORY)
- Verbatim quotes only — copy character-for-character from the raw chapter under \`${VAULT}/raw/${BF}/\`. Never paraphrase inside quotation marks. Chapter 04 quotes = Shanken (editor), not Ascott.
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
- **matches_existing**: compare this chapter's concepts against canonical names in link_vocabulary.md — ESPECIALLY the Burnham/art cluster (Systems Esthetics, Cyborg Art, New Media Art, Art as Experiential Technology, Reciprocal Communication, Cybernetics, Systems Theory, The Cyborg, Object and System, Material vs Immaterial) and the network/posthuman cluster (Distributed Cognition, The Global Village, Posthumanism, Embodiment, The Body as Data, Information, Emergence, Re-enchantment) — recommend update_existing / create_distinct / link_only.
- If this is chapter 04, remember it is SHANKEN'S introduction — record concepts as Shanken's framing of Ascott, and quote Shanken (label him as the editor).
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

const UPDATE_HINTS = `Extend (with a clearly-marked \`## Roy Ascott (Telematic Embrace)\` section), do NOT duplicate, where this book treats a concept the vault already has. PRIORITY cross-book UPDATE targets (emit update_notes, NOT create_notes):
- concepts/New Media Art.md — Ascott is THE telematic/interactive new-media theorist; the strongest single extension (Burnham realized this stub; Ascott deepens it from cybernetic to networked/telematic art).
- concepts/Art as Experiential Technology.md — Ascott's participatory, interactive, immersive, behavioural art (the spectator completes the work); cyberception.
- concepts/Cyborg Art.md and concepts/The Cyborg.md — the networked, post-biological, technoetic body.
- concepts/Cybernetics.md — Ascott's cybernetic art and the cybernetic vision (Gordon Pask, second-order cybernetics, Wiener).
- concepts/Systems Esthetics.md and concepts/Systems Theory.md — the artwork as behavioural system; cross-link Burnham.
- concepts/Reciprocal Communication.md — interactivity, two-way, the telematic embrace (Burnham coined this in the vault; Ascott is its fullest realization).
- tensions/Material vs Immaterial.md — telematic/immaterial networks vs the material object (this would make it a NINE-author tension).
- concepts/Distributed Cognition.md — network consciousness, the planetary/distributed mind.
- concepts/The Global Village.md — McLuhan's village -> Ascott's network consciousness (cross-link McLuhan).
- concepts/Re-enchantment.md — technoetics / shamanism / moistmedia as a re-enchantment of technology (O'Gieblyn).
- concepts/Posthumanism.md, concepts/Embodiment.md, concepts/The Body as Data.md, concepts/Emergence.md, concepts/Information.md — cyberception, moistmedia, the post-biological body.
- concepts/Conceptual Art.md, concepts/Exhibition as Medium.md, concepts/Dematerialization.md — the dematerialized, networked, immaterial artwork (Lippard).
Mint NEW vault-internal interpretive references (label interpretive synthesis, NOT citations Ascott made unless he actually cites them): references/Roy Ascott and Jack Burnham.md (the KEYSTONE — the two poles of 1960s cybernetic art); references/Roy Ascott and Marshall McLuhan.md (global village -> network consciousness); references/Roy Ascott and N. Katherine Hayles.md (posthuman/cybernetics/virtuality); references/Roy Ascott and Donna Haraway.md (cyborg/networked body); references/Roy Ascott and Lucy Lippard.md (dematerialization/conceptual/networks); references/Roy Ascott and Meghan O'Gieblyn.md (re-enchantment/consciousness/technoetics). Only mint the ones genuinely supported.
Forward-stub authors (cited substantively, no book in raw/): Gordon Pask (Ascott's key cybernetic influence), Norbert Wiener, Gregory Bateson, Teilhard de Chardin (noosphere — existing stub), Heinz von Foerster, Stafford Beer, Pierre Levy, Vilem Flusser, William S. Burroughs, Timothy Leary, F. S. C. Northrop, Marshall McLuhan (now an ingested author — use a reference note, not a stub). Artists (Nam June Paik, Roy Ascott's students, etc.) plain text unless durably central. Canonical author name: 'Roy Ascott'. New definitions use the suffix '(Ascott)'. Pick ONE canonical spelling per recurring term across chunks (e.g. 'Telematic Art', 'Cyberception', 'Technoetics', 'Moistmedia', 'Network Consciousness', 'The Telematic Embrace', 'Behaviourist Art', 'Telenoia').`

const planPrompt = (chunkAnalyses, planned, label) => `
You are the **synthesis planner** for *${BOOK_TITLE}* by ${AUTHOR} — processing CHUNK "${label}" of a big book split into 7 sequential chunks. Produce a deduplicated, NO-CAP plan of the INTERPRETIVE notes to create or update FROM THIS CHUNK'S CHAPTERS ONLY. (The book note, author note, and per-chapter source summaries are generated separately and automatically — DO NOT plan them.)
## This chunk's per-chapter analyses
\`\`\`json
${JSON.stringify(chunkAnalyses, null, 2)}
\`\`\`
## Canonical names ALREADY PLANNED by earlier chunks of THIS SAME book (REUSE these exact titles — do not invent variants)
${planned.length ? planned.map(p=>`- [${p.kind}] ${p.title}  ->  ${p.file_path}`).join('\n') : '(none yet — this is the first chunk)'}
## Also read
\`${VAULT}/_system/link_vocabulary.md\` (controlled vocabulary across the 11 ingested books) and \`${VAULT}/maps/Home.md\`.
## Rules
- **No numerical caps**; be selective for durability/uniqueness. Minor per-essay details belong in source summaries, not their own notes.
- **CROSS-CHUNK DEDUP (critical):** if a chapter here substantially treats a concept ALREADY PLANNED above, RE-LIST it in create_notes with the **EXACT same file_path and title**, adding THIS chunk's chapters to source_chapter_files and new candidate_passages — it will be MERGED, not duplicated. Never coin a variant name for an already-planned concept.
- **CROSS-BOOK MERGES (other authors' existing vault notes):** ${UPDATE_HINTS}
- **Paths**: concepts \`${VAULT}/concepts/<Title>.md\`; arguments \`${VAULT}/arguments/<one-sentence>.md\`; definitions \`${VAULT}/definitions/<Term> (Ascott).md\`; metaphors \`${VAULT}/metaphors/<Name>.md\`; symbols \`${VAULT}/symbols/<Name>.md\`; tensions \`${VAULT}/tensions/<Name>.md\`; references \`${VAULT}/references/Roy Ascott and <Other>.md\`.
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
  reference:`REFERENCE note (\`_system/templates/reference.md\`): relationship type, Explanation, Source Passages, Confidence. For a vault-internal interpretive reference (Ascott and an author whose book IS ingested — Burnham/McLuhan/Hayles/Haraway/Lippard/O'Gieblyn), label the cross-reading clearly as interpretive synthesis, not a citation Ascott made (unless he actually cites them).`,
}

const interpPrompt = (n) => {
  const chs=(n.source_chapter_files||[]).map(r=>`  - ${VAULT}/${r}`).join('\n')
  const cand=(n.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass. Write ONE new wiki note. The file IS the deliverable.
## Write to: \`${n.file_path}\`
## Idempotency guard: FIRST check whether this file already exists. If it already exists (a prior book created it — e.g. the Burnham art stubs), do NOT overwrite — PRESERVE all existing content and add a clearly-marked \`## ${AUTHOR} (${BOOK_TITLE})\` subsection plus a new \`## Sources\` entry. Otherwise create it fresh.
## Kind: ${n.kind} — ${KIND_GUIDE[n.kind]}
## Title: ${n.title}
## Scope: ${n.scope}
## Source chapters (the pre-selected candidate passages below are usually enough; open a raw chapter only if you need another verbatim quote — chapter 04 is huge (231KB) and is Shanken's intro, so prefer its analysis file):
${chs || '  (use scope)'}
## Pre-selected candidate passages:
${cand || '  (find your own)'}
## Required: frontmatter per \`${VAULT}/_system/schemas.md\`; status: generated; last_updated: ${TODAY}. A \`## Sources\` section: per chapter, Book *${BOOK_TITLE}* / Author ${AUTHOR} (or Shanken for ch.04) / Raw file \`[[raw/${BF}/<chapter>]]\` / verbatim block quote / Supports / label.
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
Brief Orientation: *${BOOK_TITLE}* (ed. Edward A. Shanken, 2003) collects Roy Ascott's writings 1964-2003: the founder of telematic art and a 1960s cybernetic-art pioneer (alongside Jack Burnham). Note the arc — cybernetic/behaviourist art -> telematic art/network consciousness -> cyberception/technoetics/moistmedia — and the book's relation to the vault's art/new-media cluster (Burnham, Lippard), the cyborg/posthuman cluster (Hayles, Haraway), McLuhan's global village, and the material/immaterial axis. Note that ch.04 is Shanken's editorial introduction.
Then bulleted wiki-linked lists of Major Concepts / Major Arguments / Important Definitions / Key Metaphors / Key Symbols / Major Tensions / References to Other Authors, using ONLY these REAL notes created in this ingest (do not invent titles):
${manifest}
Also list the cross-book notes this ingest EXTENDS (link them): ${updateNotes.map(u=>`[[${u.target_file.split('/').pop().replace(/\.md$/,'')}]]`).join(' · ') || '(none)'}.
Provide 2-3 reading pathways.
${LINKRULE}
Return only the path.`

const authorPrompt = `Write the AUTHOR note for ${AUTHOR}. The file IS the deliverable.
## Target: \`${authorTask.file_path}\`
FIRST read the target path to see whether it exists. It should NOT (Ascott is new).
- Create from \`${VAULT}/_system/templates/author.md\` — Central concerns (telematic art; cybernetic/behaviourist art; the artwork as a participatory behavioural system; network consciousness and the telematic embrace; cyberception; technoetics and moistmedia; the convergence of art, technology, and consciousness), major concepts/arguments (link the REAL notes created this ingest: ${createNotes.slice(0,40).map(n=>`[[${n.title}]]`).join(' · ')}), characteristic metaphors, related authors (Jack Burnham, Marshall McLuhan, N. Katherine Hayles, Donna Haraway, Lucy Lippard as vault-internal interpretive kin; Gordon Pask, Gregory Bateson, Teilhard de Chardin, Norbert Wiener as forward-stubs), tensions. Frontmatter: type author, name ${AUTHOR}, books [[${BOOK_TITLE}]], last_updated ${TODAY}.
${LINKRULE}
Return only the path.`

const sourcePrompt = (t) => `Write ONE source summary. The file IS the deliverable.
## Write to: \`${t.file_path}\`
Inputs: raw chapter \`${VAULT}/raw/${BF}/${t.chapter.file}\`; existing analysis \`${VAULT}/_system/analysis/${BF} - ${t.chapter.file.replace(/\.md$/,'')}.md.analysis.md\`; template \`${VAULT}/_system/templates/source_summary.md\`; vocabulary \`${VAULT}/_system/link_vocabulary.md\`.
Frontmatter MUST include: type source_summary, title, book "${BOOK_TITLE}", author "${AUTHOR}", raw_file "raw/${BF}/${t.chapter.file}", sha256 "${t.chapter.sha}", sources, status generated, last_updated ${TODAY}.
${t.chapter.file.startsWith('04 ') ? 'NOTE: this chapter is Edward Shanken\'s editorial INTRODUCTION — attribute its quotes to Shanken (the editor), not to Ascott; frame it as the orientation to Ascott\'s oeuvre.' : ''}
Body: Orientation (2-3 paragraphs); wiki-linked Key Concepts/Arguments/Definitions/Metaphors/Symbols/Tensions (bare canonical titles — link the REAL notes from this ingest and reused vault concepts); Outgoing Links; Candidate Essay Uses; 2+ Source Citations with verbatim block quotes + Supports + confidence labels.
${LINKRULE}
Return only the path.`

// UPDATE prompt — ANALYSIS-DRIVEN (Burnham lesson: update agents that full-read the huge raw chapters
// exhaust budget before the write lands). Read the small analysis files + candidates; Grep raw only to verify.
const updatePrompt = (u) => {
  const chs=(u.source_chapter_files||[]).map(r=>`  - analysis: ${VAULT}/_system/analysis/${BF} - ${r.split('/').pop().replace(/\.md$/,'')}.md.analysis.md`).join('\n')
  const cand=(u.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\n    > ${c.quote}`).join('\n')
  return `You are the generation pass (UPDATE) — repairing/extending an existing vault note with a ${AUTHOR} section. The file IS the deliverable; you MUST actually write it. PRESERVE ALL existing content.
## Target: \`${u.target_file}\`
## Do the work in this ORDER (so the most important content lands first):
1. Read the target note fully.
2. EDIT the body FIRST: insert ONE section headed EXACTLY \`## ${AUTHOR} (${BOOK_TITLE})\` (1-3 paragraphs, verbatim-anchored) immediately before the existing \`## Sources\` section (or at end of file if none). If the note is missing a \`## General Orientation\` and now has many authors, you may add a one-line orientation — but never delete existing prose.
3. EDIT \`## Sources\`: append a ${AUTHOR} entry — Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file the cited chapter(s) / verbatim block quote / Supports / confidence label.
4. EDIT frontmatter LAST: ensure [[${AUTHOR}]] is in authors and the cited raw chapter(s) are in sources — WITHOUT duplicating existing lines. Set last_updated ${TODAY}.
## Sources for your quotes — PREFER the small analysis files (pre-extracted verbatim quotes); the raw chapters are large, so Grep them for a distinctive substring only to CONFIRM a quote, do NOT full-read them:
${chs}
## Pre-selected candidate passages (usually enough):
${cand || '  (use the analysis files)'}
## Scope: ${u.scope}
${LINKRULE}
After writing, return only the absolute path.`
}

const createThunks = [
  () => safeAgent(bookPrompt, { label:`gen:book:${BOOK_TITLE.slice(0,20)}`, phase:'Generation Pass' }, 2),
  () => safeAgent(authorPrompt, { label:`gen:author:${AUTHOR}`, phase:'Generation Pass' }, 2),
  ...createNotes.map(n => () => safeAgent(interpPrompt(n), { label:`gen:${n.kind}:${n.title.slice(0,28)}`, phase:'Generation Pass' }, 2)),
  ...sourceTasks.map(t => () => safeAgent(sourcePrompt(t), { label:`source:${t.chapter.title.slice(0,24)}`, phase:'Generation Pass' }, 2)),
]
const created = await parallel(createThunks)
const updated = await parallel(updateNotes.map(u => () => safeAgent(updatePrompt(u), { label:`upd:${u.target_file.split('/').pop().replace(/\.md$/,'').slice(0,24)}`, phase:'Generation Pass' }, 3))) // 3 tries for the flaky update path
log(`Generation: created ${created.filter(Boolean).length}/${createThunks.length} (incl. book, author, ${sourceTasks.length} sources), updated ${updated.filter(Boolean).length}/${updateNotes.length}`)

// ===================== Phase 4: Indexes & Maps =====================
phase('Indexes & Maps')
const idxPrompt = `Update the vault maps/overview after ingesting *${BOOK_TITLE}* by ${AUTHOR} (the 12th and final art/new-media book; completes the corpus's planned art cluster alongside Burnham/Lippard). Use Edit (not overwrite); add new entries without disturbing existing ones.
## Plan index entries:
\`\`\`json
${JSON.stringify(idxAgg, null, 2)}
\`\`\`
Tasks: 1) \`${VAULT}/maps/Concept Index.md\` (Alphabetical re-sort + thematic clusters; add an Ascott/telematic-art/cyberception/technoetics cluster). 2) \`${VAULT}/maps/Argument Index.md\` (add \`### ${AUTHOR} — ${BOOK_TITLE}\`). 3) \`${VAULT}/maps/Tension Index.md\` (note Material vs Immaterial gains Ascott as the NINTH author). 4) \`${VAULT}/maps/Symbol and Metaphor Index.md\`. 5) \`${VAULT}/maps/Author Network.md\` (Roy Ascott as a new node linked to Burnham/McLuhan/Hayles/Haraway/Lippard/O'Gieblyn; the long-standing Ascott forward-stub now realized). 6) \`${VAULT}/maps/Reading Pathways.md\` (2-3 pathways for this book). 7) \`${VAULT}/maps/Home.md\` (Status: note the new book + 2-3 highlight links; New Media Art / Art as Experiential Technology / Cyborg Art now multi-author). 8) \`${VAULT}/overview.md\` (Current State).
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
