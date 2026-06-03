export const meta = {
  name: 'ingest-mcluhan-understanding-media',
  description: 'Big-book ingest for McLuhan Understanding Media (34 chapters): parallel analyses -> 7 sequential chunked planners (dedup across chunks via a running canonical-names list) -> single generation (book/author/34 sources/interpretive/updates) -> one index pass.',
  phases: [
    { title: 'Analysis Pass' },
    { title: 'Synthesis Plan (chunked)' },
    { title: 'Generation Pass' },
    { title: 'Indexes & Maps' },
  ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'McLuhan - Understanding Media'
const BOOK_TITLE = 'Understanding Media'
const AUTHOR = 'Marshall McLuhan'
const TODAY = '2026-06-03'

const CHAPTERS = [
  { file: '03 Introduction.md', sha: '5f2110dc62dc40a6d8e3026c3ff8a9a5b1c2801480d2481883c68e9835b0fd51', title: 'Introduction' },
  { file: '04 Chapter 1 - The Medium Is the Message.md', sha: '5c8509ac9ded8ac0adc7e3573632cde1ce9a7fa15ef2913902585c78b7ea36c5', title: 'Ch1 - The Medium Is the Message' },
  { file: '05 Chapter 2 - Media Cold and Hot.md', sha: '60ecb22d307735235600745bebc020362b4eac05fdcab2edefdc2827767adb30', title: 'Ch2 - Media Cold and Hot' },
  { file: '06 Chapter 3 - Reversal of the Overheated Medium.md', sha: 'e5249847d3a903f3a1d5d325d05629e6a171ef7344a106293f1b99feb09b4fdb', title: 'Ch3 - Reversal of the Overheated Medium' },
  { file: '07 Chapter 4 - The Gadget Lover - Narcissus as Narcosis.md', sha: 'ce0edc71263ba317c947d040ef72aeaa7e6c4d43a64e43cd1ced40559d91e911', title: 'Ch4 - The Gadget Lover (Narcissus as Narcosis)' },
  { file: '08 Chapter 5 - Hybrid Energy - Les Liaisons Dangereuses.md', sha: '6971cb1276d53ff7d3be81182e404ad8782423f15c3d9f25bf353052ba90dec9', title: 'Ch5 - Hybrid Energy' },
  { file: '09 Chapter 6 - Media as Translators.md', sha: 'e216d590fea06653c0ce9435d395bc1d0671efd780304c616a3c1b87a5293f0d', title: 'Ch6 - Media as Translators' },
  { file: '10 Chapter 7 - Challenge and Collapse - The Nemesis of Creativity.md', sha: '836a175bad1e24bc1f66b175ff3c6b83bde94758de80c26565a040cffc8f896f', title: 'Ch7 - Challenge and Collapse' },
  { file: '12 Chapter 8 - The Spoken Word - Flower of Evil.md', sha: '81dc242875fc0c3dfbcb3f4b72fb01e4fa9a32764daf70e3518f3f715d57602e', title: 'Ch8 - The Spoken Word' },
  { file: '13 Chapter 9 - The Written Word - An Eye for an Ear.md', sha: '76e14311b7f8267a320ee700368fb2f62c309fb283ec905b28bcd158064ad4ea', title: 'Ch9 - The Written Word' },
  { file: '14 Chapter 10 - Roads and Paper Routes.md', sha: '7eec05ed14fd3d7d8dce7eb6b958ab234da35dc038ba7bb73bb364e97875c86c', title: 'Ch10 - Roads and Paper Routes' },
  { file: '15 Chapter 11 - Number - Profile of the Crowd.md', sha: '3d9aa3ffdfd467c0aebc7a3bf1d972319718833b045906fc64c2bb31e583551d', title: 'Ch11 - Number' },
  { file: '16 Chapter 12 - Clothing - Our Extended Skin.md', sha: '89a3f743cad1e7d716093e7bd733fc8859e6e2171c417e45e74a6d5a0a94bf0d', title: 'Ch12 - Clothing' },
  { file: '17 Chapter 13 - Housing - New Look and New Outlook.md', sha: 'a70fde53fdbfc3cdb5d924270e3de7128061138829504a498c40163e6d93e534', title: 'Ch13 - Housing' },
  { file: "18 Chapter 14 - Money - The Poor Man's Credit Card.md", sha: 'e960c2a30f0f26bfd3e5f7b44dbfc7436ed80d6938402ffa362831437125739a', title: 'Ch14 - Money' },
  { file: '19 Chapter 15 - Clocks - The Scent of Time.md', sha: '2327604e8417b60bd40f398c1a2f4778cfa1642b0df9fa5cdeb8d58faa14e3fd', title: 'Ch15 - Clocks' },
  { file: '20 Chapter 16 - The Print - How to Dig It.md', sha: '5e212931d73f02694f7e698b05ad87a53ec071137fca09f2e89880ce588aa3e9', title: 'Ch16 - The Print' },
  { file: '21 Chapter 17 - Comics - Mad Vestibule to TV.md', sha: '334c1cf8be44de57aca8d4986e95f56bcae0251922135a463e4b8d6ab8220658', title: 'Ch17 - Comics' },
  { file: '22 Chapter 18 - The Printed Word - Architect of Nationalism.md', sha: 'd82d671286bc66fa656348c69e5eb41cea3d78720ee662c4f34ad511b51554ae', title: 'Ch18 - The Printed Word' },
  { file: '23 Chapter 19 - Wheel, Bicycle, and Airplane.md', sha: '4c2328773b63bebe38be93c99d3a434c21f3e38a08e85aac4009dbf6105b69a6', title: 'Ch19 - Wheel, Bicycle, and Airplane' },
  { file: '24 Chapter 20 - The Photograph - The Brothel-without-Walls.md', sha: '2b6759fa71e5e6d8858eff1058d590cbe8c4e4ffb396933e7ea61861395fe046', title: 'Ch20 - The Photograph' },
  { file: '25 Chapter 21 - Press - Government by News Leak.md', sha: 'fd9f8eb420cbec5c4de5b25dc8f070534fe527b4e530caca2528bfa5c4722a5d', title: 'Ch21 - Press' },
  { file: '26 Chapter 22 - Motorcar - The Mechanical Bride.md', sha: '88cb25ea033591d062c9ba430dcf44420915d58aafd742be09255f49b6763b27', title: 'Ch22 - Motorcar' },
  { file: '27 Chapter 23 - Ads - Keeping Upset with the Joneses.md', sha: 'cd3bfff132f846efcd2bc83ae7d50bcbc242d8e6ccfe71a9a9a95f40bc4afc23', title: 'Ch23 - Ads' },
  { file: '28 Chapter 24 - Games - The Extensions of Man.md', sha: '505ca4b4555b18c3e5e269ab9c2abbe164c69dc60fce240a2dc64c96c8d05c5c', title: 'Ch24 - Games' },
  { file: '29 Chapter 25 - Telegraph - The Social Hormone.md', sha: 'a8b9ff55f792e0803465f32b0f4559d3f4f1da0eb2be392ea81ce98e664f07e6', title: 'Ch25 - Telegraph' },
  { file: '30 Chapter 26 - The Typewriter - Into the Age of the Iron Whim.md', sha: '50b02c9907cbbcecd95fb0c6a9ab40dd430531f6e55e26717bd3b06e361a9b03', title: 'Ch26 - The Typewriter' },
  { file: '31 Chapter 27 - The Telephone - Sounding Brass or Tinkling Symbol.md', sha: '2af51f6cb4753c6acf20dfdbcfd76b8a325541c8066fc217438be494019f35c9', title: 'Ch27 - The Telephone' },
  { file: '32 Chapter 28 - Phonograph - The Toy That Shrank the National Chest.md', sha: 'e43f9e8c04f2830ff8cd3404a5295074cea8b75c4d80fa936dd5e5898817463e', title: 'Ch28 - Phonograph' },
  { file: '33 Chapter 29 - Movies - The Reel World.md', sha: '5d5eaaec9bf2f8e5b0539299fbdfcec3565c6c0f47c0791fbe2c974860dd5a4e', title: 'Ch29 - Movies' },
  { file: '34 Chapter 30 - Radio - The Tribal Drum.md', sha: '19c67e247a6fba9745f5d0ab068b9abaf43414febc679dcba0b5ea325da10f66', title: 'Ch30 - Radio' },
  { file: '35 Chapter 31 - Television - The Timid Giant.md', sha: '07912ac60b5c8faf3ad664895bd2f15185198d210727bf9e7d28eaa26d3e1373', title: 'Ch31 - Television' },
  { file: '36 Chapter 32 - Weapons - War of the Icons.md', sha: 'f9c37baf2f965fed5ecb10b46fb6860b4a8740606b68b8e31970d9e1521fdc94', title: 'Ch32 - Weapons' },
  { file: '37 Chapter 33 - Automation - Learning a Living.md', sha: 'cde6b526fd129c4bc6344ff370e2c7e631d2d5a60dc1cd50b9c3b49bd9dedba4', title: 'Ch33 - Automation' },
]

// Chunk boundaries (inclusive index ranges) — 7 chunks, <=6 chapters each, Part-I-coherent.
const CHUNKS = [[0,3],[4,7],[8,13],[14,19],[20,25],[26,29],[30,33]]

const FOCUS = `Marshall McLuhan's *Understanding Media: The Extensions of Man* (1964). Part I (Introduction, Ch1-7) carries the core THEORY — extract its durable concepts/arguments/definitions/metaphors/tensions. Part II (Ch8-33) is 33 case studies of individual media that mostly REINFORCE the Part I apparatus: give each a source summary and reuse the Part I concepts; mint a NEW concept only where McLuhan says something durably distinctive. Core concepts: The Medium Is the Message; Media Hot and Cold (high-definition/low-participation vs low-definition/high-participation); Media as Extensions of Man (every medium an extension of a sense or faculty); Autoamputation and Narcosis (the Narcissus numbness — we are numbed to our own extensions); The Global Village (electric speed retribalizes); the Content of Any Medium Is Always Another Medium; Reversal of the Overheated Medium; Hybrid Energy (the meeting/crossing of two media releases energy); Acoustic vs Visual Space; Sense Ratios; the Electric Age as the extension of the central nervous system / consciousness; Typographic (Gutenberg) Man and mechanical fragmentation; figure and ground. Definitions to mint: The Medium Is the Message (McLuhan); Hot and Cold Media (McLuhan); Extensions of Man (McLuhan); Autoamputation (McLuhan). Tensions: Hot vs Cold; Mechanical vs Electric; Fragmentation vs Wholeness (Visual vs Acoustic / Print vs Electric); Figure vs Ground; Numbness vs Awareness. The raw OCR may carry hyphenation/spacing artifacts — quote clean verbatim substrings only; never transcribe corrupted fragments as McLuhan's prose.`

const LINKRULE = `
## Link rules (MANDATORY — read first)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Eight books are already ingested.
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
Analysis file to: \`${VAULT}/_system/analysis/${BF} - ${ch.file.replace(/\.md$/, '')}.md.analysis.md\` (use the template; fill Source Metadata: book, author, raw-relative path, SHA256, Date analyzed ${TODAY}). Be expansive.
## Focus for this book
${FOCUS}
## Then return the structured object.
- This is a Part II case-study chapter UNLESS its title is "Introduction" or "Ch1".."Ch7". For Part II chapters, prefer mapping to the Part I concepts (matches_existing → link_only/update_existing) and propose a NEW concept only for a durably distinctive idea. Always propose a source-summary-worthy executive_summary and candidate_passages.
- **matches_existing**: compare this chapter's concepts against the canonical names in link_vocabulary.md AND McLuhan's own recurring concepts; recommend update_existing / create_distinct / link_only.
- Quotes verbatim, under 400 chars. Do not invent.
${LINKRULE}
Begin.
`

const analyses = (await parallel(CHAPTERS.map(ch => () =>
  safeAgent(analysisPrompt(ch), { label: `analyze:${ch.title.slice(0,26)}`, phase: 'Analysis Pass', schema: ANALYSIS_SCHEMA }, 4)
))).filter(Boolean)
log(`Analysis: ${analyses.length}/${CHAPTERS.length} chapters analyzed`)
if (analyses.length === 0) { return { error: 'no analyses' } }

// map chapter_file -> raw-relative path, for plan candidate passages
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

const UPDATE_HINTS = `Extend (with a clearly-marked \`## Marshall McLuhan (Understanding Media)\` section), do NOT duplicate, where this book treats a concept the vault already has. Likely cross-book UPDATE targets (emit update_notes, NOT create_notes): concepts/Information.md (the medium-is-the-message reframes "content"); concepts/Embodiment.md and concepts/The Body as Data.md (media as extensions/amputations of the body and senses); concepts/Acceleration.md (Han — McLuhan's "electric speed"); concepts/Distributed Cognition.md (the global village / collective electric consciousness); concepts/Cybernetics.md and concepts/Feedback Loops.md (autoamputation as servo-mechanism; the central nervous system extended); concepts/The Cyborg.md (Haraway/Hayles — "extensions of man" as a precursor to the cyborg); concepts/Posthumanism.md (the extension/obsolescence of "Man"); concepts/The Extrapolated Body.md; tensions/Material vs Immaterial.md (electric/immaterial vs mechanical/material media). Mint NEW vault-internal interpretive references where the link is real and substantive: references/Marshall McLuhan and N. Katherine Hayles.md (media/embodiment/the posthuman body), references/Marshall McLuhan and Byung-Chul Han.md (electric speed/acceleration; transparency), references/Marshall McLuhan and Donna Haraway.md (extensions of man -> the cyborg). McLuhan cites real figures (e.g. Harold Innis his mentor) — those are forward-stub authors. Canonical author name: 'Marshall McLuhan'.`

const planPrompt = (chunkAnalyses, planned, label, isFirst) => `
You are the **synthesis planner** for *${BOOK_TITLE}* by ${AUTHOR} — processing CHUNK "${label}" of a big book split into 7 sequential chunks. Produce a deduplicated, NO-CAP plan of the INTERPRETIVE notes to create or update FROM THIS CHUNK'S CHAPTERS ONLY. (The book note, author note, and per-chapter source summaries are generated separately and automatically — DO NOT plan them.)
## This chunk's per-chapter analyses
\`\`\`json
${JSON.stringify(chunkAnalyses, null, 2)}
\`\`\`
## Canonical names ALREADY PLANNED by earlier chunks of THIS SAME book (REUSE these exact titles — do not invent variants)
${planned.length ? planned.map(p=>`- [${p.kind}] ${p.title}  ->  ${p.file_path}`).join('\n') : '(none yet — this is the first chunk)'}
## Also read
\`${VAULT}/_system/link_vocabulary.md\` (controlled vocabulary across the 8 ingested books) and \`${VAULT}/maps/Home.md\`.
## Rules
- **No numerical caps**; be selective for durability/uniqueness. Minor per-medium details belong in source summaries, not their own notes.
- **CROSS-CHUNK DEDUP (critical):** if a chapter here substantially treats a concept ALREADY PLANNED above, RE-LIST it in create_notes with the **EXACT same file_path and title**, adding THIS chunk's chapters to source_chapter_files and new candidate_passages — it will be MERGED, not duplicated. Never coin a variant name for an already-planned concept.
- **CROSS-BOOK MERGES (other authors' existing vault notes):** ${UPDATE_HINTS}
- **Paths**: concepts \`${VAULT}/concepts/<Title>.md\`; arguments \`${VAULT}/arguments/<one-sentence>.md\`; definitions \`${VAULT}/definitions/<Term> (McLuhan).md\`; metaphors \`${VAULT}/metaphors/<Name>.md\`; symbols \`${VAULT}/symbols/<Name>.md\`; tensions \`${VAULT}/tensions/<Name>.md\`; references \`${VAULT}/references/Marshall McLuhan and <Other>.md\`.
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
  reference:`REFERENCE note (\`_system/templates/reference.md\`): relationship type, Explanation, Source Passages, Confidence. For a vault-internal interpretive reference (McLuhan and an author whose book IS ingested), label the cross-reading clearly as interpretive synthesis, not a citation McLuhan made.`,
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
## Source chapters (read for verbatim quotes — these may span several Part II case studies):
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
Brief Orientation: Part I = the theory of media as extensions of man; Part II = 33 case studies applying it. Note the book's relation to the vault's surveillance / embodiment / material-immaterial foci.
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
- **If it DOES NOT EXIST**: create from \`${VAULT}/_system/templates/author.md\` — Central concerns (media as extensions of man; the medium is the message; hot/cold; the global village; the move from mechanical/visual to electric/acoustic culture), major concepts/arguments (link the REAL notes created this ingest: ${createNotes.slice(0,40).map(n=>`[[${n.title}]]`).join(' · ')}), characteristic metaphors, related authors (Hayles/Han/Haraway as vault-internal interpretive kin; Harold Innis and others as forward-stubs), tensions. Frontmatter: type author, name ${AUTHOR}, books [[${BOOK_TITLE}]], last_updated ${TODAY}.
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
const idxPrompt = `Update the vault maps/overview after ingesting *${BOOK_TITLE}* by ${AUTHOR} (8th->9th book). Use Edit (not overwrite); add new entries without disturbing existing ones.
## Plan index entries:
\`\`\`json
${JSON.stringify(idxAgg, null, 2)}
\`\`\`
Tasks: 1) \`${VAULT}/maps/Concept Index.md\` (Alphabetical re-sort + thematic clusters; add a McLuhan/media-ecology cluster). 2) \`${VAULT}/maps/Argument Index.md\` (add \`### ${AUTHOR} — ${BOOK_TITLE}\`). 3) \`${VAULT}/maps/Tension Index.md\`. 4) \`${VAULT}/maps/Symbol and Metaphor Index.md\`. 5) \`${VAULT}/maps/Author Network.md\` (Realized References; McLuhan as a new node linked to Hayles/Han/Haraway). 6) \`${VAULT}/maps/Reading Pathways.md\` (2-3 pathways for this book). 7) \`${VAULT}/maps/Home.md\` (Status: note the new book + 2-3 highlight links). 8) \`${VAULT}/overview.md\` (Current State).
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
