export const meta = {
  name: 'burnham-fix-updates-v2',
  description: 'Analysis-driven repair of the 20 cross-book UPDATE notes + 2 committed-stub CREATEs that under-persisted in the Burnham ingest. Agents read the small ANALYSIS files (not the 150KB raw) for verbatim quotes; Grep raw only to spot-verify.',
  phases: [ { title: 'Regenerate updates' } ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'Burnham - Beyond Modern Sculpture'
const BOOK_TITLE = 'Beyond Modern Sculpture'
const AUTHOR = 'Jack Burnham'
const TODAY = '2026-06-05'

// chapter file basenames keyed by ordinal for analysis-file paths
const CH = {
  '02':'02 Introduction.md',
  '03':"03 Chapter 1 - Sculpture's Vanishing Base.md",
  '04':'04 Chapter 2 - The Biotic Sources of Modern Sculpture.md',
  '05':'05 Chapter 3 - Formalism - The Weary Vocabulary.md',
  '06':'06 Chapter 4 - Form Exhaustion and the Rise of Phenomenalism.md',
  '07':'07 Chapter 5 - Sculpture and Automata.md',
  '08':'08 Chapter 6 - Kineticism - The Unrequited Art.md',
  '09':'09 Chapter 7 - Light as Sculpture Medium.md',
  '10':'10 Chapter 8 - Robot and Cyborg Art.md',
}

const LINKRULE = `
## Link rules (MANDATORY)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Wiki-link target = bare canonical note title (no type prefix); one canonical name per concept; reuse existing canonical names; otherwise plain text / declared forward-stub.
## Provenance (MANDATORY)
- Use the verbatim block quotes already extracted in the ANALYSIS file(s) below — they were copied character-for-character from the raw. You may Grep the raw chapter for a distinctive substring to confirm a quote, but DO NOT Read the entire raw chapter (they are 120-164KB and will exhaust your budget).
- The raw is OCR-damaged; never transcribe a corrupted token (e.g. 'lung'/'iack' for Jung, 'oflight', 'horneostat') as Burnham's prose — pick clean substrings.
- Confidence labels on every claim: \`Directly stated\` / \`Strongly implied\` / \`Interpretive synthesis\` / \`Speculative connection\`. No invention. No emoji.
`

async function safeAgent(prompt, opts, tries) {
  tries = tries || 4
  for (let i = 0; i < tries; i++) {
    try { const r = await agent(prompt, opts); if (r !== null && r !== undefined) return r } catch (e) { log(`retry ${i+1}/${tries} ${opts && opts.label}: ${String(e).slice(0,70)}`) }
  }
  return null
}

phase('Regenerate updates')

// 20 updates (Feedback Loops + Systems Theory already complete, excluded). chN = relevant chapter ordinals.
const UPDATES = [
  { t:'tensions/Material vs Immaterial.md', ch:['02','03','10'], scope:'The book\'s entire spine IS this axis: sculpture migrates from the OBJECT (material, palpable, inert, place-bound) to the SYSTEM (immaterial, processual, life-like). This makes Material vs Immaterial an EIGHTH-author tension (Han, Hayles, Lippard, Harari, Kurzweil, Haraway, McLuhan, Burnham). Cross-link the new Burnham tension [[Object vs System]] (distinct, not merged).' },
  { t:'concepts/Dematerialization.md', ch:['02','03','06','10'], scope:'Burnham (1968) is a PRECURSOR to Lippard\'s dematerialization of the art object — add a clearly-marked Burnham precursor section (do NOT fold into Lippard). Herbert Read\'s "scribble in the air" / "tortuous dematerialization" is in the Introduction (also its own metaphor note [[A Scribble in the Air]]); the vanishing base and the obsolescence of the visual scientific model drive sculpture toward immateriality. Cross-link [[Jack Burnham and Lucy Lippard]].' },
  { t:'concepts/The Cyborg.md', ch:['10','02'], scope:'Burnham\'s "Cyborg Art (the art of cybernetic organisms)" is a 1968 art-world deployment of the cyborg, predating Haraway (1985) and Hayles. His definition: "A cyborg, then, is any artificial system connected through reciprocal feedback to an organism." Cross-link [[Cyborg Art]] (distinct art form) and [[Jack Burnham and Donna Haraway]]. Keep existing Hayles/Haraway sections intact.' },
  { t:'concepts/Cybernetics.md', ch:['10','02'], scope:'Burnham brings cybernetics into art: the kybernetes/steersman (Introduction), cybernetics as "preeminently the science of organization," negative feedback and homeostasis (Ch8), technology as "pockets of decreasing entropy." Cross-link [[Cyborg Art]], [[Systems Esthetics]], [[Jack Burnham and N. Katherine Hayles]].' },
  { t:'concepts/Artificial Life.md', ch:['02','04','10'], scope:'IDEMPOTENT: this note may already contain Burnham prose/bullets but NO `## Jack Burnham (Beyond Modern Sculpture)` heading. Consolidate existing Burnham content under that single heading (do not duplicate) and ensure a `## Sources` Burnham entry with a verbatim quote. Burnham reads modern sculpture as "steps toward the simulation of biological life" / "life-bearing artifacts."' },
  { t:'concepts/Emergence.md', ch:['04','10'], scope:'Burnham\'s systems exhibit life-like properties (self-organization, growth, equilibrium); "there are no qualitative differences between living and nonliving matter" (Ch8). Keep DISTINCT from the new [[Vitalism]] concept (cross-link, do not merge).' },
  { t:'concepts/Posthumanism.md', ch:['10','02'], scope:'Burnham foresees art that "manifests true intelligence" with "reciprocal relationships with human beings," and abstraction as "psychic preparation for... remaking the biological composition of its inhabitants" — a 1968 anticipation of the posthuman. Cross-link [[Cyborg Art]], [[Systems Consciousness]].' },
  { t:'concepts/Homeostasis.md', ch:['10'], scope:'IDEMPOTENT (frontmatter may already cite Ch8): add the body section. Burnham imports homeostasis (Cannon) and negative feedback into cybernetic art / the self-regulating art system. Cross-link [[Homeostasis (Cannon via Burnham)]], [[Negative Feedback (Burnham)]].' },
  { t:'concepts/Technology as Metaphor.md', ch:['02','05','10'], scope:'"Technology is the metaphysics of our century" (Friedrich Junger via Burnham, Introduction); the scientific model as "the contemporary icon par excellence." Cross-link [[Technics]], [[The Scientific Model as Icon]], [[The Scientific Demiurge]].' },
  { t:'concepts/Distributed Cognition.md', ch:['02','10'], scope:'IDEMPOTENT (frontmatter may already cite Intro): add the body section. Society becoming "one giant, interconnected, living system... to facilitate integration and communication within the whole" (Introduction). Cross-link [[Systems Consciousness]].' },
  { t:'concepts/Conceptual Art.md', ch:['10','06'], scope:'"For Object Art presence is everything; for Systems Art information is the key" — Burnham\'s systems/information orientation is the sculptural counterpart to the conceptual-art turn Lippard charts. Cross-link [[Object and System]], [[Jack Burnham and Lucy Lippard]]. (Burnham may already be named here as a forward-stub — consolidate, do not duplicate.)' },
  { t:'concepts/Idealism.md', ch:['02','05','06'], scope:'Burnham\'s "scientific idealism" — sculptors seeking "essential reality through the theories and models put forth provisionally by scientists." Cross-link the new concept [[Scientific Idealism]] and tension [[Idealism vs Phenomenalism]]. Keep distinct from philosophy-of-mind Idealism (O\'Gieblyn).' },
  { t:'concepts/The Computational Universe.md', ch:['10','02'], scope:'IDEMPOTENT (frontmatter may already cite chapters): add the body section. "There are no qualitative differences between living and nonliving matter" (Ch8); the universe as decreasing-entropy systems (Boulding, Intro). Label cross-readings Interpretive synthesis.' },
  { t:'concepts/Pattern and Randomness.md', ch:['08','09'], scope:'Burnham\'s kinetic/light art turns on determinism vs randomness / programmed vs aleatory motion (new tension [[Determinism vs Randomness]]). Cross-link it; label the Hayles resonance Interpretive synthesis.' },
  { t:'tensions/Metaphor vs Literalism.md', ch:['07','10'], scope:'Burnham: sculpture moves from the METAPHOR of life (latent visual vitalism) to the LITERAL re-creation of life (automata, cybernetic organisms operating on actual cybernetic principles). Cross-link [[Magical vs Scientific Imitation of Life]], [[The Faustian Urge to Re-create Life Nonbiologically]].' },
  { t:'concepts/Embodiment.md', ch:['06','10'], scope:'Burnham\'s phenomenalism (Ch4, Merleau-Ponty\'s carnal intersubjectivity; "Object sculpture is not free of the idiosyncrasies of human perception") and the cyborg body (Ch8). Cross-link [[Phenomenalism (Burnham)]], [[Carnal Intersubjectivity (Merleau-Ponty via Burnham)]].' },
  { t:'concepts/The Body as Data.md', ch:['10','02'], scope:'Burnham\'s cybernetic/cyborg art treats the organism as an information-processing system ("for Systems Art information is the key"); the body re-created as a "life-bearing artifact." Label cross-readings Interpretive synthesis.' },
  { t:'concepts/Exhibition as Medium.md', ch:['10'], scope:'Only add a Burnham section if genuinely supported by the analysis: the shift from the discrete object to the system/environment reframes the site of art from the object to its relational/informational setting. If thin, keep it short and label Interpretive synthesis. Do NOT invent.' },
  { t:'concepts/Acceleration.md', ch:['02','10'], scope:'Burnham on science\'s exponential growth ("science cannot indefinitely maintain its exponential rate of growth") and technics as "self-augmenting" / "irreversible" (Intro; Ch8 via Ellul). Label the bridge to Han\'s pathological Acceleration Interpretive synthesis; keep distinct.' },
  { t:'concepts/Information.md', ch:['10','02'], scope:'Burnham: "For Object Art presence is everything; for Systems Art information is the key" — the migration from material object to information/system. Add a concise Burnham section; keep existing author sections intact.' },
]

const CREATES = [
  { t:'concepts/New Media Art.md', ch:['08','09','10'], scope:'CREATE — a long-deferred COMMITTED research-focus forward-stub (21 inbound files), deferred in the Lippard ingest "until Ascott/Burnham," now realized Burnham-anchored. Burnham\'s kinetic (Ch6), light (Ch7), and cybernetic/cyborg (Ch8) art are the direct ancestry of new media art: the migration from the static object to technologically-driven, time-based, systemic, responsive art. Note in the body that this was a committed stub now realized, to be extended when Ascott (Telematic Embrace) is ingested. Primary author [[Jack Burnham]] (cross-link [[Lucy Lippard]] for the conceptual-art precursor). Cross-link [[Kinetic Art]], [[Light as a Sculpture Medium]], [[Cyborg Art]], [[Systems Esthetics]], [[Object and System]], [[Art as Experiential Technology]].' },
  { t:'concepts/Art as Experiential Technology.md', ch:['08','09','10'], scope:'CREATE — a long-deferred COMMITTED research-focus forward-stub (18 inbound files), deferred "until Ascott/Burnham," now realized Burnham-anchored. Burnham\'s vision of cybernetic art with "a capacity for reciprocal relationships with human beings" (where "the word viewer seems quite antiquated") — art as a responsive, experiential technological system. Note it was a committed stub now realized, to be extended when Ascott is ingested. Primary author [[Jack Burnham]]. Cross-link [[Reciprocal Communication]], [[Cyborg Art]], [[New Media Art]], [[Systems Esthetics]], [[One-Way Stimulation vs Two-Way Communication]].' },
]

const analysisPaths = (chs) => chs.map(o=>`  - ${VAULT}/_system/analysis/${BF} - ${CH[o].replace(/\.md$/,'')}.md.analysis.md`).join('\n')
const rawLinks = (chs) => chs.map(o=>`[[raw/${BF}/${CH[o].replace(/\.md$/,'')}]]`).join(' , ')

const updPrompt = (u, isCreate) => `You are repairing the Burnham ingest: an earlier agent returned a path WITHOUT its write landing. The file IS the deliverable — you MUST actually write it.
## Target: \`${VAULT}/${u.t}\`
## Read FIRST (small files — read these, NOT the giant raw chapters):
- The target note (if it exists).
- Analysis file(s) with pre-extracted verbatim quotes + scope:
${analysisPaths(u.ch)}
## Do the work in this ORDER (so the most important content lands first):
${isCreate
  ? `1. The target should NOT exist — CREATE it as a full concept note (template \`${VAULT}/_system/templates/concept.md\`): Brief Definition; Longer Explanation anchored in Burnham; Authors and Variants; Related/Opposing Concepts; Questions It Raises; then \`## Sources\` with 2+ verbatim block quotes (Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file ${rawLinks(u.ch)} / quote / Supports / label). Frontmatter per \`${VAULT}/_system/schemas.md\`: type concept, status generated, authors [[${AUTHOR}]], sources (${rawLinks(u.ch)}), last_updated ${TODAY}.`
  : `1. EDIT the body FIRST: insert a single section headed EXACTLY \`## Jack Burnham (Beyond Modern Sculpture)\` (1-3 paragraphs, verbatim-anchored) immediately before the existing \`## Sources\` section (or at end of file if none). If a Burnham section/prose already exists without that heading, CONSOLIDATE under this one heading — never create a duplicate.
2. EDIT \`## Sources\`: append a Burnham entry — Book *${BOOK_TITLE}* / Author ${AUTHOR} / Raw file ${rawLinks(u.ch)} / verbatim block quote / Supports / confidence label.
3. EDIT frontmatter LAST: ensure [[${AUTHOR}]] is in authors and the cited raw chapter(s) (${rawLinks(u.ch)}) are in sources — WITHOUT duplicating lines that are already present. Set last_updated ${TODAY}.
PRESERVE all existing non-Burnham content exactly.`}
## Scope: ${u.scope}
${LINKRULE}
After writing, return only the absolute path.`

const updThunks = UPDATES.map(u => () => safeAgent(updPrompt(u, false), { label:`fix:${u.t.split('/').pop().replace(/\.md$/,'').slice(0,24)}`, phase:'Regenerate updates' }, 4))
const crtThunks = CREATES.map(u => () => safeAgent(updPrompt(u, true), { label:`create:${u.t.split('/').pop().replace(/\.md$/,'').slice(0,20)}`, phase:'Regenerate updates' }, 4))
const res = await parallel([...updThunks, ...crtThunks])
log(`Repair v2: ${res.filter(Boolean).length}/${UPDATES.length + CREATES.length} agents returned a path`)

return { attempted: UPDATES.length + CREATES.length, returned: res.filter(Boolean).length, updates: UPDATES.map(u=>u.t), creates: CREATES.map(u=>u.t) }
