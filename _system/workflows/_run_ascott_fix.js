export const meta = {
  name: 'ascott-fix-updates-v2-atomic',
  description: 'Atomic-Write repair of the 23 Ascott cross-book UPDATE notes still incomplete after the multi-Edit repair (body section landed but Sources/frontmatter did not). Each agent reads the analysis file(s) + target, then does ONE full-file Write preserving all content.',
  phases: [ { title: 'Atomic repair' } ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'Ascott - Telematic Embrace'
const BOOK_TITLE = 'Telematic Embrace'
const AUTHOR = 'Roy Ascott'
const TODAY = '2026-06-08'

const CH = {
  '04':'04 From Cybernetics to Telematics.md','05':'05 The Construction of Change.md',
  '07':'07 Behaviourist Art and the Cybernetic Vision.md','09':'09 The Psibernetic Arch.md',
  '12':'12 Network as Artwork: the Future of Visual Arts Education.md','13':'13 Towards a Field Theory for Postmodernist Art.md',
  '15':'15 Art and Telematics: towards a Network Consciousness.md','16':'16 Concerning Nets and Spurs: Meaning, Mind, and Telematic.md',
  '17':'17 Art and Education in the Telematic Culture.md','18':'18 Gesamtdatenwerk: Connectivity, Transformation, and Tran.md',
  '19':'19 Beyond Time-Based Art: ESP, PDP, and PU.md','20':'20 Is There Love in the Telematic Embrace?.md',
  '21':'21 Photography at the Interface.md','23':'23 Telenoia.md','24':'24 From Appearance to Apparition: Communication and Cultur.md',
  '25':'25 The ARS Electronica Center Datapool.md','27':'27 The Architecture of Cyberception.md',
  '28':'28 Back to Nature II: Art and Technology in the Twenty-Fir.md','29':'29 The Mind of the Museum.md',
  '30':'30 Weaving the Shamantic Web: Art and Technologies in the .md','31':'31 Art @ the Edge of the NET: the Future Will Be Moist!.md',
  '32':'32 Technoetic Aesthetics: 100 Terms and Definitions for th.md',
}

async function safeAgent(prompt, opts, tries) {
  tries = tries || 4
  for (let i = 0; i < tries; i++) {
    try { const r = await agent(prompt, opts); if (r !== null && r !== undefined) return r } catch (e) { log(`retry ${i+1}/${tries} ${opts && opts.label}: ${String(e).slice(0,70)}`) }
  }
  return null
}

phase('Atomic repair')

// The 23 targets still incomplete (7 already fully landed: Art as Experiential Technology, Cybernetics,
// Systems Esthetics, Object and System, Object vs System, Emergence, Distributed Cognition).
const UPDATES = [
  { t:'concepts/New Media Art.md', ch:['04','15','17','25'], scope:'Ascott carries the object->system spine into networked/telematic art: art as "a web of relationships ... to which no single authorship is attributable," the participator who transforms the system. (A body section may already exist — keep it, just ensure the Sources entry + frontmatter are complete.)' },
  { t:'concepts/Reciprocal Communication.md', ch:['15','16','20'], scope:'Telematic art is reciprocal, two-way, interactive (vs one-way broadcast); the telematic embrace; Ascott is the fullest realization of this Burnham-coined note.' },
  { t:'concepts/Systems Theory.md', ch:['07','13','16'], scope:'Ascott\'s field theory / network as an open, behavioural, self-organizing system. (Body section may exist — complete Sources + frontmatter.)' },
  { t:'tensions/Material vs Immaterial.md', ch:['15','20','31'], scope:'Telematic/immaterial networks + moistmedia push the immaterial pole; NINTH author of this tension. (Body section may exist — complete Sources + frontmatter.)' },
  { t:'concepts/Feedback Loops.md', ch:['07','09','05'], scope:'Cybernetic feedback as the principle of behaviourist art — the spectator-artwork loop; Pask. (Body section may exist — complete Sources + frontmatter.)' },
  { t:'concepts/Information.md', ch:['15','18','19'], scope:'Networked/data art — the artwork as information flow in the telematic field; Gesamtdatenwerk.' },
  { t:'concepts/The Global Village.md', ch:['04','15','17'], scope:'Ascott extends McLuhan\'s global village into network consciousness / planetary telematic culture; cross-link [[Roy Ascott and Marshall McLuhan]].' },
  { t:'tensions/One-Way Stimulation vs Two-Way Communication.md', ch:['07','15','20'], scope:'Ascott\'s telematic interactivity is the two-way pole; the telematic embrace vs broadcast. (Body section may exist — complete Sources + frontmatter.)' },
  { t:'concepts/The Observer.md', ch:['05','13','21'], scope:'Ascott dissolves the passive observer into "the participator" who behaviourally completes the work; the double gaze.' },
  { t:'concepts/Re-enchantment.md', ch:['30','28','32'], scope:'Technoetics, the shamantic web, altered states/psi, and moistmedia as a re-enchantment of technology; cross-link [[Roy Ascott and Meghan O\'Gieblyn]].' },
  { t:'concepts/Dematerialization.md', ch:['04','15','31'], scope:'Telematic/immaterial, networked artwork extends Lippard\'s dematerialization into the data network and the moist.' },
  { t:'concepts/Exhibition as Medium.md', ch:['12','25','29'], scope:'Network as artwork; the ARS Electronica datapool; the mind of the museum — the institution itself as a telematic data medium.' },
  { t:'metaphors/The Seamless Web.md', ch:['15','16','23'], scope:'Ascott\'s telematic network as a seamless connective web of mind/meaning (nets and spurs; telenoia). If thin, keep brief, label Interpretive synthesis.' },
  { t:'concepts/The Computational Universe.md', ch:['16','19','32'], scope:'Ascott\'s technoetic vision of mind/consciousness as computational/field phenomena; label cross-readings Interpretive synthesis.' },
  { t:'concepts/Posthumanism.md', ch:['27','28','31'], scope:'Cyberception and moistmedia produce a post-biological, technoetically-extended human; convergence of dry/wet/spiritual.' },
  { t:'concepts/The Cyborg.md', ch:['27','28','31'], scope:'Ascott\'s cyberception-extended, moist, networked body is a telematic cyborg; cross-link [[Cyborg Art]] and [[Roy Ascott and Donna Haraway]].' },
  { t:'concepts/Embodiment.md', ch:['27','21','28'], scope:'Cyberception (perception extended/transformed by technology) and the interface reconfigure embodiment; the moist body.' },
  { t:'concepts/Conceptual Art.md', ch:['04','13'], scope:'Ascott\'s field theory for postmodernist art and the behavioural/idea-driven artwork relate to the conceptual-art turn; keep brief, cross-link Lippard.' },
  { t:'concepts/Virtuality.md', ch:['19','27','24'], scope:'Ascott\'s "PU" (post-biological/virtual), cyberception, and apparition vs appearance — the telematic virtual; label Hayles resonance Interpretive synthesis.' },
  { t:'concepts/Autopoiesis.md', ch:['16','18'], scope:'The self-organizing, self-producing telematic network/field. If thin, keep brief and label Interpretive synthesis.' },
  { t:'concepts/The Body as Data.md', ch:['27','28','24'], scope:'Cyberception and apparition render the body as data/telepresence in the telematic field; the moist convergence of data and biology.' },
  { t:'concepts/Artificial Life.md', ch:['28','31'], scope:'Ascott\'s moistmedia — the convergence of artificial (dry/digital) and biological (wet) life; a-life as art material. Label Interpretive synthesis where speculative.' },
  { t:'concepts/Mind Uploading.md', ch:['19','27'], scope:'Ascott\'s "PU" / beyond-time-based art and cyberception touch the extension of mind beyond the body; label Interpretive synthesis / Speculative connection.' },
]

const analysisPaths = (chs) => chs.map(o=>`  - ${VAULT}/_system/analysis/${BF} - ${CH[o].replace(/\.md$/,'')}.md.analysis.md`).join('\n')
const rawLinks = (chs) => chs.map(o=>`[[raw/${BF}/${CH[o].replace(/\.md$/,'')}]]`).join(' , ')

const updPrompt = (u) => `You are repairing the Ascott ingest. A prior agent left this note INCOMPLETE (often the \`## Roy Ascott (Telematic Embrace)\` body section landed but the Sources entry and frontmatter did NOT). Make it correct and complete in ONE atomic write.
## Target: \`${VAULT}/${u.t}\`
## Steps:
1. Read the ENTIRE target file.
2. Read the analysis file(s) below for pre-extracted verbatim Ascott quotes (do NOT read the huge raw chapters; Grep a raw file only to confirm a quote if needed):
${analysisPaths(u.ch)}
3. Use the **Write** tool to output the COMPLETE updated file in a SINGLE write (this is more reliable than multiple Edits). The new file must:
   - Preserve EVERY byte of existing content (all existing author sections, all existing \`### Source N\` entries, all frontmatter) — reproduce it verbatim, do NOT summarize, drop, or reorder anything.
   - Contain exactly ONE \`## Roy Ascott (Telematic Embrace)\` section (1-3 paragraphs, verbatim-anchored), placed immediately before the \`## Sources\` section. If such a section already exists, keep/refine it — do not duplicate it.
   - Have a new \`### Source N\` entry appended at the END of the \`## Sources\` section: Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file ${rawLinks(u.ch)} / a verbatim block quote / Supports / confidence label.
   - In frontmatter: add \`[[${AUTHOR}]]\` to authors (if not present) and the cited raw chapter(s) (${rawLinks(u.ch)}) to sources (if not present) — do not remove existing entries. Set last_updated: ${TODAY}.
## Scope of the Ascott section: ${u.scope}
## Link rules: bare canonical note titles only (no type prefixes); reuse existing canonical names; otherwise plain text. Provenance: verbatim quotes only (from the analysis files), confidence labels, no invention, no emoji.
After writing, return only the absolute path.`

const res = await parallel(UPDATES.map(u => () => safeAgent(updPrompt(u), { label:`atomic:${u.t.split('/').pop().replace(/\.md$/,'').slice(0,24)}`, phase:'Atomic repair' }, 4)))
log(`Atomic repair: ${res.filter(Boolean).length}/${UPDATES.length} agents returned a path`)
return { attempted: UPDATES.length, returned: res.filter(Boolean).length, updates: UPDATES.map(u=>u.t) }
