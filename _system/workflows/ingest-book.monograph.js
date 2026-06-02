export const meta = {
  name: 'ingest-book-monograph',
  description: 'Reusable two-step monograph ingest: analysis -> plan -> generation (create+update) -> indexes. Book/author/source-summaries are auto-generated from args.',
  phases: [
    { title: 'Analysis Pass' },
    { title: 'Synthesis Plan' },
    { title: 'Generation Pass' },
    { title: 'Indexes & Maps' },
  ],
}

// Reusable monograph ingest workflow for the Material/Immaterial vault.
// DURABLE TEMPLATE — safe for any future chat to run. Driven entirely by `args`.
//
// HOW TO RUN (from any fresh chat):
//   1. Inspect the raw book folder: ls "raw/<Author - Book>/"
//   2. Decide substantive chapters (skip About/Front Matter/Contents/Notes/Index/Acknowledgments/Bibliography).
//   3. Hash them:  cd "raw/<Author - Book>" && for f in <files>; do shasum -a 256 "$f"; done
//   4. Check _system/ingest_cache.json — skip any chapter whose sha256 is unchanged.
//   5. Call:
//        Workflow({ scriptPath: "_system/workflows/ingest-book.monograph.js", args: {
//          bookFolder: "Author - Book",            // the raw/ subfolder name
//          bookTitle:  "Book Title",
//          author:     "Author Name",
//          today:      "YYYY-MM-DD",
//          chapters:   [ { file: "Ch01 ....md", sha: "<hash>", title: "Ch1 - ..." }, ... ],
//          focusHints: "1-3 sentences naming the book's core concepts to extract.",
//          updateHints:"Likely EXISTING vault notes to extend with an author-section (cross-book merges), e.g. concepts/Information.md."
//        }})
//   6. After it returns, do the inline finalize (see _system/HANDOFF.md): rebuild cache,
//      update _system/link_vocabulary.md, append _system/log.md, run the hygiene re-check.
//
// For ANTHOLOGY / non-argument books (e.g. Lippard), use the essay-vs-chronicle variant:
//   add `kind: "essay" | "chronicle"` to each chapter and tell chronicle agents to yield
//   entities + emblematic quotes + a source summary, NOT a note per item. (See the Lippard
//   ingest in _system/log.md for the pattern; adapt this template's analysisPrompt.)
//
// STRUCTURAL GUARANTEE: book note, author note, and ONE source summary per chapter are
// generated deterministically from `args` — the planner cannot skip them (this fixes the
// O'Gieblyn source-summary gap recorded in the log).

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const a = args || {}
const BF = a.bookFolder
const BOOK_TITLE = a.bookTitle
const AUTHOR = a.author
const TODAY = a.today || '2026-01-01'
const CHAPTERS = a.chapters || []
const FOCUS = a.focusHints || 'Extract the durable concepts, arguments, definitions, metaphors, symbols, tensions, and cross-author references that organize this book.'
const UPDATE_HINTS = a.updateHints || 'Check link_vocabulary.md for existing notes this book also treats; extend them with an author-section rather than duplicating.'

if (!BF || !BOOK_TITLE || !AUTHOR || CHAPTERS.length === 0) {
  log('ERROR: args must include bookFolder, bookTitle, author, and a non-empty chapters[] (each {file, sha, title}). Aborting.')
  return { error: 'missing required args' }
}

const LINKRULE = `
## Link rules (MANDATORY — read first)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Several books are already ingested.
- A wiki-link target is the bare canonical note title (filename without .md). NEVER a type prefix (\`[[Concept - X]]\`). One canonical name per concept; no article/variant duplicates.
- REUSE existing canonical names. Realize committed research-foci stubs by their canonical names where this book supports them.
- A link target must resolve to an existing note, a note created in this ingest, or a declared forward-stub (figures without a book in raw/, or cross-author concepts). Otherwise plain text.
## Provenance (MANDATORY)
- Verbatim quotes only — open the raw chapter under \`${VAULT}/raw/${BF}/\` and copy character-for-character. Never paraphrase inside quotation marks.
- Every note has a \`## Sources\` section; every major claim carries a confidence label: \`Directly stated\` / \`Strongly implied\` / \`Interpretive synthesis\` / \`Speculative connection\`.
- No invention. No emoji.
`

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
You are the **analysis pass** (step 1 of 2) for *${BOOK_TITLE}* by ${AUTHOR}. Analyze ONE chapter and write an analysis file. Do NOT create public wiki notes.
## Read
- Chapter: \`${VAULT}/raw/${BF}/${ch.file}\` (raw-relative \`raw/${BF}/${ch.file}\`, SHA256 \`${ch.sha}\`)
- Controlled vocabulary: \`${VAULT}/_system/link_vocabulary.md\`. Template: \`${VAULT}/_system/templates/analysis.md\`.
## Write
Analysis file to: \`${VAULT}/_system/analysis/${BF} - ${ch.file.replace(/\.md$/, '')}.md.analysis.md\` (use the template; fill Source Metadata: book, author, raw-relative path, SHA256, Date analyzed ${TODAY}). Be expansive.
## Focus for this book
${FOCUS}
## Then return the structured object.
- **matches_existing**: compare this chapter's concepts against the canonical names in link_vocabulary.md; recommend update_existing / create_distinct / link_only for any genuine overlap (cross-book merges are the vault's engine).
- Quotes verbatim, under 400 chars. Do not invent.
${LINKRULE}
Begin.
`

const analyses = (await parallel(CHAPTERS.map(ch => () =>
  agent(analysisPrompt(ch), { label: `analyze:${(ch.title||ch.file).slice(0,28)}`, phase: 'Analysis Pass', schema: ANALYSIS_SCHEMA })
))).filter(Boolean)
log(`Analysis: ${analyses.length}/${CHAPTERS.length} chapters analyzed`)

// ===================== Phase 2: Plan (interpretive notes + updates only) =====================
phase('Synthesis Plan')

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

const planPrompt = `
You are the **synthesis planner** for *${BOOK_TITLE}*. Produce a deduplicated, NO-CAP plan of the INTERPRETIVE notes to create or update. (The book note, author note, and per-chapter source summaries are generated separately and automatically — DO NOT plan them.)
## Inputs
Per-chapter analyses:
\`\`\`json
${JSON.stringify(analyses, null, 2)}
\`\`\`
Also read \`${VAULT}/_system/link_vocabulary.md\` and \`${VAULT}/maps/Home.md\`, plus any existing notes you intend to UPDATE.
## Rules
- **No numerical caps**; be selective for durability/uniqueness. Minor details stay in source summaries.
- **Reuse existing canonical names; realize committed stubs.** Cross-book merges are the engine: when this book treats a concept the vault already has, emit an **update_notes** entry (a new author-section) rather than a duplicate.
- ${UPDATE_HINTS}
- **Paths**: concepts \`${VAULT}/concepts/<Title>.md\`; arguments \`${VAULT}/arguments/<one-sentence>.md\`; definitions \`${VAULT}/definitions/<Term> (${AUTHOR.split(' ').pop()}).md\`; metaphors \`${VAULT}/metaphors/<Name>.md\`; symbols \`${VAULT}/symbols/<Name>.md\`; tensions \`${VAULT}/tensions/<Name>.md\`; references \`${VAULT}/references/${AUTHOR} and <Other>.md\`.
- Each entry: sharp 2-4 sentence \`scope\` + pre-selected verbatim \`candidate_passages\` from the analyses.
- **index_entries**: one bullet per new note per relevant map. **review_items**: cross-book merge calls, possible duplicates, speculative connections.
${LINKRULE}
Return the structured plan.
`

const plan = await agent(planPrompt, { label: 'synthesis plan', phase: 'Synthesis Plan', schema: PLAN_SCHEMA })
if (!plan) { log('Plan failed; aborting'); return { error:'plan failed', analyses_written: analyses.length } }
const byKind = {}; for (const n of plan.create_notes) byKind[n.kind]=(byKind[n.kind]||0)+1
log(`Plan: CREATE ${plan.create_notes.length} (${Object.entries(byKind).map(([k,v])=>k+':'+v).join(', ')}); UPDATE ${plan.update_notes.length}`)

// ===================== Phase 3: Generation =====================
phase('Generation Pass')

const allRaw = CHAPTERS.map(c => `raw/${BF}/${c.file}`)
const tocLinks = CHAPTERS.map(c => `[[raw/${BF}/${c.file.replace(/\.md$/,'')}]]`).join(' · ')

// Auto-built deterministic tasks: book, author, one source-summary per chapter.
const bookTask = { kind:'book', file_path:`${VAULT}/books/${BOOK_TITLE}.md` }
const authorTask = { kind:'author', file_path:`${VAULT}/authors/${AUTHOR}.md` }
const sourceTasks = CHAPTERS.map(c => ({ kind:'source_summary', chapter:c, file_path:`${VAULT}/sources/${BF} - ${c.file.replace(/\.md$/,'')}.md` }))

const KIND_GUIDE = {
  concept:`CONCEPT note (\`_system/templates/concept.md\`): Brief Definition, Longer Explanation anchored in ${AUTHOR}'s usage, Authors and Variants, Related/Opposing Concepts, Questions It Raises, Sources (2+ verbatim).`,
  argument:`ARGUMENT note (\`_system/templates/argument.md\`): frontmatter claim = one sentence; Reasoning, Evidence, Counterarguments/Limitations, Related Arguments, Tensions, Sources.`,
  definition:`DEFINITION note (\`_system/templates/definition.md\`): Author's Definition with verbatim quote; Context; Differences from Other Uses; Related Concepts; Sources.`,
  metaphor:`METAPHOR note (\`_system/templates/metaphor.md\`): The Metaphor, What It Compares, What It Reveals, What It Hides/Distorts, Related, Sources.`,
  symbol:`SYMBOL note (\`_system/templates/symbol.md\`).`,
  tension:`TENSION note (\`_system/templates/tension.md\`): Poles, Why It Matters, Authors/Books, Related, Possible Synthesis or Unresolved Status, Sources.`,
  reference:`REFERENCE note (\`_system/templates/reference.md\`): relationship type, Explanation, Source Passages, Confidence.`,
}

const interpPrompt = (n) => {
  const chs=(n.source_chapter_files||[]).map(r=>`  - ${VAULT}/${r}`).join('\\n')
  const cand=(n.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\\n    > ${c.quote}`).join('\\n')
  return `You are the generation pass. Write ONE new wiki note. The file IS the deliverable.
## Write to: \`${n.file_path}\`
## Idempotency guard: FIRST check whether this file already exists. It should be NEW. If it already exists (the planner mis-routed an existing note as a create), do NOT overwrite — instead PRESERVE all existing content and add a clearly-marked \`## ${AUTHOR} (${BOOK_TITLE})\` subsection plus a new \`## Sources\` entry, exactly as an update would. Otherwise create it fresh.
## Kind: ${n.kind} — ${KIND_GUIDE[n.kind]}
## Title: ${n.title}
## Scope: ${n.scope}
## Source chapters (read for verbatim quotes):
${chs || '  (use scope)'}
## Pre-selected candidate passages:
${cand || '  (find your own)'}
## Required: frontmatter per \`${VAULT}/_system/schemas.md\`; status: generated; last_updated: ${TODAY}. A \`## Sources\` section: per chapter, Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file \`[[raw/${BF}/<chapter>]]\` / verbatim block quote / Supports / label.
${LINKRULE}
Return only the absolute path written.`
}

const bookPrompt = `Write the BOOK note. The file IS the deliverable.
## Write to: \`${bookTask.file_path}\`
Use \`${VAULT}/_system/templates/book.md\`. Realize the forward-stub [[${BOOK_TITLE}]]. TOC links every chapter: ${tocLinks}. Include bulleted wiki-linked lists of Major Concepts / Major Arguments / Important Definitions / Key Metaphors / Key Symbols / Major Tensions / References to Other Authors (use the REAL note titles created in this ingest — list them by reading \`ls ${VAULT}/concepts\` etc., or from the plan). 2-3 reading pathways. Frontmatter: type book, author [[${AUTHOR}]], raw_folder, sources (the chapters), last_updated ${TODAY}.
${LINKRULE}
Return only the path.`

const authorPrompt = `Write or EXTEND the AUTHOR note for ${AUTHOR}. The file IS the deliverable.
## Target: \`${authorTask.file_path}\`
FIRST read the target path to see whether it already exists.
- **If it ALREADY EXISTS** (a prior book by this author was ingested): PRESERVE ALL existing content — never overwrite or delete. Extend it: ensure [[${BOOK_TITLE}]] is in the \`books:\` frontmatter and rewrite its "Books in the Vault" line for this title from "not yet processed / forward link" to ingested (with this book's chapter links: ${tocLinks}); add a clearly-marked subsection (or merge bullets into the existing sections) for the concepts / arguments / metaphors / related authors / tensions THIS book introduces, linking the REAL notes created in this ingest; append (do not replace) new \`## Sources\` entries; set last_updated ${TODAY}.
- **If it DOES NOT EXIST**: create it from \`${VAULT}/_system/templates/author.md\` — Central concerns, major concepts/arguments (link the real notes created this ingest), characteristic metaphors, related authors (forward-stubs), disagreements/tensions. Frontmatter: type author, name ${AUTHOR}, books [[${BOOK_TITLE}]], last_updated ${TODAY}.
${LINKRULE}
Return only the path.`

const sourcePrompt = (t) => `Write ONE source summary. The file IS the deliverable.
## Write to: \`${t.file_path}\`
Inputs: raw chapter \`${VAULT}/raw/${BF}/${t.chapter.file}\`; existing analysis \`${VAULT}/_system/analysis/${BF} - ${t.chapter.file.replace(/\.md$/,'')}.md.analysis.md\`; template \`${VAULT}/_system/templates/source_summary.md\`; vocabulary \`${VAULT}/_system/link_vocabulary.md\`.
Frontmatter MUST include: type source_summary, title, book "${BOOK_TITLE}", author "${AUTHOR}", raw_file "raw/${BF}/${t.chapter.file}", sha256 "${t.chapter.sha}", sources, status generated, last_updated ${TODAY}.
Body: Orientation (2-3 paragraphs); wiki-linked Key Concepts/Arguments/Definitions/Metaphors/Symbols/Tensions (bare canonical titles, link the REAL notes from this ingest); Outgoing Links; Candidate Essay Uses; 2+ Source Citations with verbatim block quotes + Supports + confidence labels.
${LINKRULE}
Return only the path.`

const updatePrompt = (u) => {
  const chs=(u.source_chapter_files||[]).map(r=>`  - ${VAULT}/${r}`).join('\\n')
  const cand=(u.candidate_passages||[]).map(c=>`  - From \`${c.chapter_file}\`:\\n    > ${c.quote}`).join('\\n')
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

// Run create (book, author, planner interpretive notes, source summaries) then updates.
const createThunks = [
  () => agent(bookPrompt, { label:`gen:book:${BOOK_TITLE.slice(0,24)}`, phase:'Generation Pass' }),
  () => agent(authorPrompt, { label:`gen:author:${AUTHOR}`, phase:'Generation Pass' }),
  ...plan.create_notes.map(n => () => agent(interpPrompt(n), { label:`gen:${n.kind}:${n.title.slice(0,30)}`, phase:'Generation Pass' })),
  ...sourceTasks.map(t => () => agent(sourcePrompt(t), { label:`source:${t.chapter.file.replace('.md','').slice(0,24)}`, phase:'Generation Pass' })),
]
const created = await parallel(createThunks)
const updated = await parallel(plan.update_notes.map(u => () => agent(updatePrompt(u), { label:`upd:${u.target_file.split('/').pop().replace('.md','').slice(0,26)}`, phase:'Generation Pass' })))
log(`Generation: created ${created.filter(Boolean).length}/${createThunks.length} (incl. book, author, ${sourceTasks.length} source summaries), updated ${updated.filter(Boolean).length}/${plan.update_notes.length}`)

// ===================== Phase 4: Indexes & Maps =====================
phase('Indexes & Maps')
const idxPrompt = `Update the vault maps/overview after ingesting *${BOOK_TITLE}* by ${AUTHOR}. Use Edit (not overwrite); add new entries without disturbing existing ones.
## Plan index entries:
\`\`\`json
${JSON.stringify(plan.index_entries, null, 2)}
\`\`\`
Tasks: 1) \`${VAULT}/maps/Concept Index.md\` (Alphabetical re-sort + thematic clusters). 2) \`${VAULT}/maps/Argument Index.md\` (add \`### ${AUTHOR} — ${BOOK_TITLE}\` + thematic cross-refs). 3) \`${VAULT}/maps/Tension Index.md\` (Realized Notes; upgrade any committed stub this book realizes). 4) \`${VAULT}/maps/Symbol and Metaphor Index.md\`. 5) \`${VAULT}/maps/Author Network.md\` (Realized References; realize affinities). 6) \`${VAULT}/maps/Reading Pathways.md\` (2-3 pathways for this book). 7) \`${VAULT}/maps/Home.md\` (Status: note the new book + 2-3 highlight links; realized stubs resolve now). 8) \`${VAULT}/overview.md\` (Current State).
Canonical links only (no type prefixes). Return a one-paragraph summary.`
const idxReport = await agent(idxPrompt, { label:'indexes & maps', phase:'Indexes & Maps' })

return {
  book: BOOK_TITLE,
  analyses_written: analyses.length,
  created: created.filter(Boolean).length,
  updated: updated.filter(Boolean).length,
  source_summaries: sourceTasks.length,
  create_plan: plan.create_notes.map(n=>({kind:n.kind, title:n.title, chapters:n.source_chapter_files})),
  update_plan: plan.update_notes.map(u=>({target:u.target_file, section:u.section_title})),
  index_report: idxReport,
  review_items: plan.review_items,
}
