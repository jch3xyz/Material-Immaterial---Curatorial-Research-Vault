export const meta = {
  name: 'zuboff-fix-updates-atomic',
  description: 'Atomic-Write repair of the 23 Zuboff cross-book updates (incl. 2 stub-creates) + 2 missing creates that under-persisted in the generation wave. One full-file Write per note, analysis-driven.',
  phases: [ { title: 'Atomic repair' } ],
}
const VAULT='/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF='Zuboff - The Age of Surveillance Capitalism'
const BOOK_TITLE='The Age of Surveillance Capitalism'
const AUTHOR='Shoshana Zuboff'
const TODAY='2026-06-08'
const UPDATES=[
  {t:"concepts/Surveillance.md", ch:["02 The Definition.md", "03 Chapter 1 - Home or Exile in the Digital Future.md", "04 Chapter 2 - August 9, 2011 - Setting the Stage for Surveillance Capitalism.md", "05 Chapter 3 - The Discovery of Behavioral Surplus.md", "06 Chapter 4 - The Moat Around the Castle.md", "07 Chapter 5 - The Elaboration of Surveillance Capitalism - Kidnap, Corner, Compete.md", "10 Chapter 8 - Rendition - From Experience to Data.md", "08 Chapter 6 - Hijacked - The Division of Learning in Society.md", "09 Chapter 7 - The Reality Business.md", "11 Chapter 9 - Rendition from the Depths.md", "12 Chapter 10 - Make Them Dance.md", "13 Chapter 11 - The Right to the Future Tense.md", "15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md", "14 Chapter 12 - Two Species of Power.md", "17 Chapter 15 - The Instrumentarian Collective.md", "18 Chapter 16 - Of Life in the Hive.md", "19 Chapter 17 - The Right to Sanctuary.md", "20 Chapter 18 - A Coup from Above.md"], create:true},
  {t:"concepts/Quantified Self.md", ch:["03 Chapter 1 - Home or Exile in the Digital Future.md", "07 Chapter 5 - The Elaboration of Surveillance Capitalism - Kidnap, Corner, Compete.md", "10 Chapter 8 - Rendition - From Experience to Data.md", "09 Chapter 7 - The Reality Business.md", "11 Chapter 9 - Rendition from the Depths.md", "12 Chapter 10 - Make Them Dance.md", "15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md", "17 Chapter 15 - The Instrumentarian Collective.md", "19 Chapter 17 - The Right to Sanctuary.md"], create:true},
  {t:"concepts/Big Data.md", ch:["03 Chapter 1 - Home or Exile in the Digital Future.md", "05 Chapter 3 - The Discovery of Behavioral Surplus.md", "06 Chapter 4 - The Moat Around the Castle.md", "08 Chapter 6 - Hijacked - The Division of Learning in Society.md", "10 Chapter 8 - Rendition - From Experience to Data.md", "11 Chapter 9 - Rendition from the Depths.md", "12 Chapter 10 - Make Them Dance.md", "15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md"], create:false},
  {t:"concepts/Dataism.md", ch:["03 Chapter 1 - Home or Exile in the Digital Future.md", "07 Chapter 5 - The Elaboration of Surveillance Capitalism - Kidnap, Corner, Compete.md", "08 Chapter 6 - Hijacked - The Division of Learning in Society.md", "09 Chapter 7 - The Reality Business.md", "11 Chapter 9 - Rendition from the Depths.md", "13 Chapter 11 - The Right to the Future Tense.md", "15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md", "16 Chapter 14 - A Utopia of Certainty.md", "17 Chapter 15 - The Instrumentarian Collective.md", "20 Chapter 18 - A Coup from Above.md"], create:false},
  {t:"concepts/Society of Control.md", ch:["03 Chapter 1 - Home or Exile in the Digital Future.md", "07 Chapter 5 - The Elaboration of Surveillance Capitalism - Kidnap, Corner, Compete.md", "09 Chapter 7 - The Reality Business.md", "12 Chapter 10 - Make Them Dance.md", "15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md", "16 Chapter 14 - A Utopia of Certainty.md", "17 Chapter 15 - The Instrumentarian Collective.md", "18 Chapter 16 - Of Life in the Hive.md"], create:false},
  {t:"concepts/Smart Power.md", ch:["03 Chapter 1 - Home or Exile in the Digital Future.md", "07 Chapter 5 - The Elaboration of Surveillance Capitalism - Kidnap, Corner, Compete.md", "09 Chapter 7 - The Reality Business.md", "10 Chapter 8 - Rendition - From Experience to Data.md", "11 Chapter 9 - Rendition from the Depths.md", "12 Chapter 10 - Make Them Dance.md", "15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md", "17 Chapter 15 - The Instrumentarian Collective.md"], create:false},
  {t:"concepts/The Body as Data.md", ch:["03 Chapter 1 - Home or Exile in the Digital Future.md", "06 Chapter 4 - The Moat Around the Castle.md", "10 Chapter 8 - Rendition - From Experience to Data.md", "09 Chapter 7 - The Reality Business.md", "11 Chapter 9 - Rendition from the Depths.md", "15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md", "17 Chapter 15 - The Instrumentarian Collective.md", "18 Chapter 16 - Of Life in the Hive.md", "19 Chapter 17 - The Right to Sanctuary.md"], create:false},
  {t:"concepts/Information.md", ch:["03 Chapter 1 - Home or Exile in the Digital Future.md", "06 Chapter 4 - The Moat Around the Castle.md", "08 Chapter 6 - Hijacked - The Division of Learning in Society.md", "11 Chapter 9 - Rendition from the Depths.md", "12 Chapter 10 - Make Them Dance.md"], create:false},
  {t:"tensions/Material vs Immaterial.md", ch:["04 Chapter 2 - August 9, 2011 - Setting the Stage for Surveillance Capitalism.md", "09 Chapter 7 - The Reality Business.md", "10 Chapter 8 - Rendition - From Experience to Data.md", "11 Chapter 9 - Rendition from the Depths.md", "13 Chapter 11 - The Right to the Future Tense.md", "19 Chapter 17 - The Right to Sanctuary.md"], create:false},
  {t:"concepts/Psychopolitics.md", ch:["03 Chapter 1 - Home or Exile in the Digital Future.md", "04 Chapter 2 - August 9, 2011 - Setting the Stage for Surveillance Capitalism.md", "05 Chapter 3 - The Discovery of Behavioral Surplus.md", "09 Chapter 7 - The Reality Business.md", "11 Chapter 9 - Rendition from the Depths.md", "12 Chapter 10 - Make Them Dance.md", "16 Chapter 14 - A Utopia of Certainty.md", "15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md"], create:false},
  {t:"concepts/Auto-Exploitation.md", ch:["03 Chapter 1 - Home or Exile in the Digital Future.md"], create:false},
  {t:"symbols/The Transparent Customer.md", ch:["05 Chapter 3 - The Discovery of Behavioral Surplus.md"], create:false},
  {t:"concepts/Capital as Religion.md", ch:["06 Chapter 4 - The Moat Around the Castle.md", "08 Chapter 6 - Hijacked - The Division of Learning in Society.md", "10 Chapter 8 - Rendition - From Experience to Data.md"], create:false},
  {t:"concepts/The Algorithm as Providence.md", ch:["08 Chapter 6 - Hijacked - The Division of Learning in Society.md", "09 Chapter 7 - The Reality Business.md"], create:false},
  {t:"concepts/Gamification.md", ch:["09 Chapter 7 - The Reality Business.md", "12 Chapter 10 - Make Them Dance.md"], create:false},
  {t:"concepts/Self-Optimization.md", ch:["10 Chapter 8 - Rendition - From Experience to Data.md"], create:false},
  {t:"tensions/Freedom vs Control.md", ch:["09 Chapter 7 - The Reality Business.md"], create:false},
  {t:"concepts/Society as Algorithm.md", ch:["16 Chapter 14 - A Utopia of Certainty.md", "15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md"], create:false},
  {t:"concepts/Biopolitics.md", ch:["15 Chapter 13 - Big Other and the Rise of Instrumentarian Power.md"], create:false},
  {t:"symbols/The Like Button.md", ch:["18 Chapter 16 - Of Life in the Hive.md"], create:false},
  {t:"concepts/Narcosis.md", ch:["18 Chapter 16 - Of Life in the Hive.md", "20 Chapter 18 - A Coup from Above.md"], create:false},
  {t:"concepts/New Media Art.md", ch:["19 Chapter 17 - The Right to Sanctuary.md"], create:false},
  {t:"concepts/Art as Experiential Technology.md", ch:["19 Chapter 17 - The Right to Sanctuary.md"], create:false}
]
const CREATES=[
  {t:"concepts/The Syndrome of the Horseless Carriage.md", ch:["14 Chapter 12 - Two Species of Power.md"], kind:"concept"},
  {t:"arguments/Surveillance capitalism exploits human nature as industrial capitalism exploited nature.md", ch:["18 Chapter 16 - Of Life in the Hive.md", "19 Chapter 17 - The Right to Sanctuary.md", "20 Chapter 18 - A Coup from Above.md"], kind:"argument"}
]
async function safeAgent(p,o,tries){tries=tries||4;for(let i=0;i<tries;i++){try{const r=await agent(p,o);if(r!==null&&r!==undefined)return r}catch(e){log(`retry ${i+1} ${o&&o.label}: ${String(e).slice(0,60)}`)}}return null}
phase('Atomic repair')
const analysisPaths=(chs)=>chs.map(f=>`  - ${VAULT}/_system/analysis/${BF} - ${f.replace(/\.md$/,'')}.md.analysis.md`).join('\n')
const rawLinks=(chs)=>chs.map(f=>`[[raw/${BF}/${f.replace(/\.md$/,'')}]]`).join(' , ')
const LINK=`## Link rules: bare canonical note titles only (no type prefixes); reuse existing canonical names; otherwise plain text / declared forward-stub. Provenance: verbatim quotes only (from the analysis files; Grep raw only to confirm), confidence labels, no invention, no emoji.`
const updPrompt=(u)=>`You are repairing the Zuboff ingest. A prior agent left this note INCOMPLETE (the cross-book Zuboff section did not persist). Fix it in ONE atomic write. ${u.create?'This note does NOT exist yet (a long-committed forward-stub) — CREATE it fresh as a full concept note, Zuboff-anchored, noting it was a committed stub now realized.':'EXTEND the existing note.'}
## Target: \`${VAULT}/${u.t}\`
## Steps:
1. Read the ENTIRE target file (if it exists).
2. Read the analysis file(s) for pre-extracted verbatim quotes (do NOT full-read the 40-116KB raw chapters; Grep a raw file only to confirm a quote):
${analysisPaths(u.ch)}
3. Use the **Write** tool to output the COMPLETE file in a SINGLE write:
${u.create?`   - Full concept note (template ${VAULT}/_system/templates/concept.md): Brief Definition; Longer Explanation anchored in Zuboff; Authors and Variants; Related/Opposing Concepts; Questions It Raises; then ## Sources with 2+ verbatim block quotes (Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file ${rawLinks(u.ch)} / quote / Supports / label). Frontmatter: type concept, status generated, authors [[${AUTHOR}]], sources (${rawLinks(u.ch)}), last_updated ${TODAY}. If realizing 'Surveillance' or 'Quantified Self', note it was a committed research-focus forward-stub now realized, and it is open to other authors.`:`   - Preserve EVERY byte of existing content (all author sections, all ### Source N entries, all frontmatter) verbatim. Add exactly ONE \`## ${AUTHOR} (${BOOK_TITLE})\` section (1-3 paragraphs, verbatim-anchored) immediately before ## Sources. Append a new ### Source N entry: Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file ${rawLinks(u.ch)} / verbatim block quote / Supports / confidence label. In frontmatter add [[${AUTHOR}]] to authors and ${rawLinks(u.ch)} to sources (no duplicates). Set last_updated ${TODAY}.`}
## Scope: ${u.t.includes('Digital Panopticon')||u.t.includes('Big Data')||u.t.includes('Dataism')?'Big Other / behavioral surplus / instrumentarian power as the political economy behind this concept.':'Zuboff\'s treatment of this concept in surveillance capitalism (behavioral surplus, prediction, instrumentarian power, Big Other, rendition).'}
${LINK}
After writing, return only the absolute path.`
const crtPrompt=(c)=>`You are repairing the Zuboff ingest: this planned note never got written. CREATE it now in ONE atomic Write. The file IS the deliverable.
## Target: \`${VAULT}/${c.t}\`  (kind: ${c.kind})
## Read the analysis file(s) for verbatim quotes:
${analysisPaths(c.ch)}
## Write the complete note via the **Write** tool using template \`${VAULT}/_system/templates/${c.kind}.md\`. ${c.kind==='argument'?'Frontmatter claim = one sentence; Reasoning, Evidence, Counterarguments/Limitations, Related Arguments, Tensions, Sources.':'Brief Definition; Longer Explanation anchored in Zuboff; Authors and Variants; Related/Opposing Concepts; Questions It Raises; Sources.'} Include a ## Sources section: Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file ${rawLinks(c.ch)} / 2+ verbatim block quotes / Supports / confidence labels. Frontmatter per ${VAULT}/_system/schemas.md; status generated; authors/author ${AUTHOR}; last_updated ${TODAY}.
${LINK}
After writing, return only the absolute path.`
const thunks=[...UPDATES.map(u=>()=>safeAgent(updPrompt(u),{label:`fix:${u.t.split('/').pop().replace(/\.md$/,'').slice(0,22)}`,phase:'Atomic repair'},4)),
              ...CREATES.map(c=>()=>safeAgent(crtPrompt(c),{label:`create:${c.t.split('/').pop().replace(/\.md$/,'').slice(0,20)}`,phase:'Atomic repair'},4))]
const res=await parallel(thunks)
log(`Zuboff repair: ${res.filter(Boolean).length}/${thunks.length} returned a path`)
return {attempted:thunks.length, returned:res.filter(Boolean).length, updates:UPDATES.map(u=>u.t), creates:CREATES.map(c=>c.t)}
