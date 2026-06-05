export const meta = {
  name: 'burnham-fix-updates',
  description: 'Regenerate the 21 cross-book UPDATE notes + 2 committed-stub CREATEs that under-persisted in the Burnham ingest (returned a path without the Edit/Write landing).',
  phases: [ { title: 'Regenerate updates' } ],
}

const VAULT = '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault'
const BF = 'Burnham - Beyond Modern Sculpture'
const BOOK_TITLE = 'Beyond Modern Sculpture'
const AUTHOR = 'Jack Burnham'
const TODAY = '2026-06-05'

const LINKRULE = `
## Link rules (MANDATORY)
Read \`${VAULT}/_system/link_vocabulary.md\` before writing. Eleven books are ingested (Burnham just added).
- Wiki-link target = bare canonical note title (filename without .md). NEVER a type prefix. One canonical name per concept; no article/variant duplicates. Reuse existing canonical names; otherwise plain text or a declared forward-stub.
## Provenance (MANDATORY)
- Verbatim quotes only — open the raw chapter under \`${VAULT}/raw/${BF}/\` and copy character-for-character. The raw is OCR-damaged (e.g. 'lung'/'iack' for Jung, 'oflight', 'horneostat', 'Schoffer', mid-word line breaks like 'demonstra tes'); quote ONLY clean contiguous substrings, never transcribe a corrupted token as Burnham's prose. Pick the cleaner of duplicate occurrences.
- Every added section carries confidence labels: \`Directly stated\` / \`Strongly implied\` / \`Interpretive synthesis\` / \`Speculative connection\`. No invention. No emoji.
`

async function safeAgent(prompt, opts, tries) {
  tries = tries || 3
  for (let i = 0; i < tries; i++) {
    try { const r = await agent(prompt, opts); if (r !== null && r !== undefined) return r } catch (e) { log(`retry ${i+1}/${tries} ${opts && opts.label}: ${String(e).slice(0,70)}`) }
  }
  return null
}

phase('Regenerate updates')

// Each: target note (relative), chapters Burnham treats it in (raw-relative file names), and a scope hint.
const UPDATES = [
  { t:'tensions/Material vs Immaterial.md', ch:['02 Introduction.md','03 Chapter 1 - Sculpture\'s Vanishing Base.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'The book\'s entire spine IS this axis: sculpture migrates from the OBJECT (material, palpable, inert, place-bound) to the SYSTEM (immaterial, processual, life-like — self-organization, growth, input/output, equilibrium, death). This makes Material vs Immaterial an EIGHTH-author tension. Cross-link the new Burnham tension [[Object vs System]] (distinct, not merged).' },
  { t:'concepts/Dematerialization.md', ch:['02 Introduction.md','03 Chapter 1 - Sculpture\'s Vanishing Base.md','06 Chapter 4 - Form Exhaustion and the Rise of Phenomenalism.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'Burnham (1968) is a PRECURSOR to Lippard\'s dematerialization of the art object — add a clearly-marked Burnham precursor section (do NOT fold into Lippard). Herbert Read\'s "scribble in the air" / "tortuous dematerialization" is in the Introduction (it is also its own metaphor note [[A Scribble in the Air]]); the vanishing base (Ch1) and the obsolescence of the visual scientific model drive sculpture toward immateriality. Cross-link [[Jack Burnham and Lucy Lippard]].' },
  { t:'concepts/The Cyborg.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md','02 Introduction.md'], scope:'Burnham\'s "Cyborg Art (the art of cybernetic organisms)" is a 1968 art-world deployment of the cyborg, predating Haraway (1985) and Hayles. Cross-link the new Burnham concept [[Cyborg Art]] (distinct art form) and [[Jack Burnham and Donna Haraway]]. Keep the existing Hayles/Haraway sections intact.' },
  { t:'concepts/Cybernetics.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md','02 Introduction.md'], scope:'Burnham brings cybernetics into art: the kybernetes/steersman (Greek root, Introduction), negative feedback and homeostasis (Ch8, via Wiener/Cannon), technology as "pockets of decreasing entropy." Cross-link [[Cyborg Art]], [[Systems Esthetics]], [[Jack Burnham and N. Katherine Hayles]].' },
  { t:'concepts/Emergence.md', ch:['04 Chapter 2 - The Biotic Sources of Modern Sculpture.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'Burnham\'s systems exhibit life-like properties (self-organization, growth, equilibrium) and "there are no qualitative differences between living and nonliving matter" (Ch8). Keep DISTINCT from the new [[Vitalism]] concept (cross-link, do not merge — the Emergence note already polemically equates them; Burnham\'s vitalism is the non-material life-essence, Emergence is bottom-up self-organization).' },
  { t:'concepts/Posthumanism.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md','02 Introduction.md'], scope:'Burnham foresees art forms that "manifest true intelligence" with "reciprocal relationships with human beings," and abstraction as "psychic preparation for the entire re-creation of society, including remaking the biological composition of its inhabitants" — a 1968 art-world anticipation of the posthuman. Cross-link [[Cyborg Art]], [[Systems Consciousness]].' },
  { t:'concepts/Homeostasis.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md'], scope:'Burnham imports homeostasis (Cannon) and negative feedback into the theory of cybernetic art / the self-regulating art system. There is a new definition [[Homeostasis (Cannon via Burnham)]] and [[Negative Feedback (Burnham)]] — cross-link them.' },
  { t:'concepts/Technology as Metaphor.md', ch:['02 Introduction.md','05 Chapter 3 - Formalism - The Weary Vocabulary.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'"Technology is the metaphysics of our century" (Friedrich Junger, via Burnham, Introduction); the scientific model becomes "the contemporary icon par excellence." Science/technics as the pervasive metaphor structuring modern sculpture. Cross-link [[Technics]], [[The Scientific Model as Icon]], [[The Scientific Demiurge]].' },
  { t:'concepts/Distributed Cognition.md', ch:['02 Introduction.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'Burnham\'s society becoming "one giant, interconnected, living system, structured to reduce individual differences between components and to facilitate integration and communication within the whole" (Introduction) — cognition/agency distributed across a socio-technical system. Cross-link [[Systems Consciousness]].' },
  { t:'concepts/Conceptual Art.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md','06 Chapter 4 - Form Exhaustion and the Rise of Phenomenalism.md'], scope:'"For Object Art presence is everything; for Systems Art information is the key" — Burnham\'s systems/information orientation is the sculptural counterpart to the conceptual-art turn Lippard charts. Cross-link [[Object and System]], [[Jack Burnham and Lucy Lippard]]. (Burnham may already be named as a forward-stub here — consolidate, do not duplicate.)' },
  { t:'concepts/Feedback Loops.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md'], scope:'Negative feedback as the principle of the self-regulating cybernetic art system / servo-mechanism (Ch8). Cross-link [[Negative Feedback (Burnham)]], [[Cybernetics]], [[Cyborg Art]].' },
  { t:'concepts/Idealism.md', ch:['02 Introduction.md','05 Chapter 3 - Formalism - The Weary Vocabulary.md','06 Chapter 4 - Form Exhaustion and the Rise of Phenomenalism.md'], scope:'Burnham\'s "scientific idealism" — sculptors seeking "essential reality through the theories and models put forth provisionally by scientists." Cross-link the new concept [[Scientific Idealism]] and tension [[Idealism vs Phenomenalism]]. Keep distinct from the philosophy-of-mind Idealism (O\'Gieblyn).' },
  { t:'concepts/The Computational Universe.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md','02 Introduction.md'], scope:'Burnham: "there are no qualitative differences between living and nonliving matter" and the universe as decreasing-entropy systems (Boulding, Introduction) — an art-world resonance with the computational-universe thesis. Label cross-readings Interpretive synthesis.' },
  { t:'concepts/Pattern and Randomness.md', ch:['08 Chapter 6 - Kineticism - The Unrequited Art.md','09 Chapter 7 - Light as Sculpture Medium.md'], scope:'Burnham\'s kinetic/light art turns on determinism vs randomness / programmed vs aleatory motion (the new tension [[Determinism vs Randomness]]). Cross-link it; label resonance with the Hayles pattern/randomness dialectic as Interpretive synthesis.' },
  { t:'tensions/Metaphor vs Literalism.md', ch:['07 Chapter 5 - Sculpture and Automata.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'Burnham: sculpture moves from the METAPHOR of life (latent visual vitalism) to the LITERAL re-creation of life (automata, cybernetic organisms that actually operate on cybernetic principles). Cross-link [[Magical vs Scientific Imitation of Life]], [[The Faustian Urge to Re-create Life Nonbiologically]].' },
  { t:'concepts/Embodiment.md', ch:['06 Chapter 4 - Form Exhaustion and the Rise of Phenomenalism.md','10 Chapter 8 - Robot and Cyborg Art.md','02 Introduction.md'], scope:'Burnham\'s phenomenalism (Ch4, Merleau-Ponty\'s carnal intersubjectivity, "Object sculpture is not free of the idiosyncrasies of human perception") and the cyborg body (Ch8). Cross-link [[Phenomenalism (Burnham)]], [[Carnal Intersubjectivity (Merleau-Ponty via Burnham)]].' },
  { t:'concepts/The Body as Data.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md','02 Introduction.md'], scope:'Burnham\'s cybernetic/cyborg art treats the organism as an information-processing system ("for Systems Art information is the key"); the body re-created as a "life-bearing artifact." Label cross-readings Interpretive synthesis.' },
  { t:'concepts/Exhibition as Medium.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md'], scope:'Only add a Burnham section if genuinely supported: the shift from the discrete object to the system/environment reframes the site of art from the object to its relational/informational setting. If not substantively supported in the chapter, keep this minimal and label Interpretive synthesis / Speculative connection. Do NOT invent.' },
  { t:'concepts/Acceleration.md', ch:['02 Introduction.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'Burnham on science\'s exponential growth ("science cannot indefinitely maintain its exponential rate of growth") and technics as "self-augmenting" and "irreversible" (Introduction; Ch8 via Ellul). Label the bridge to Han\'s pathological Acceleration as Interpretive synthesis; keep distinct.' },
  { t:'concepts/Information.md', ch:['10 Chapter 8 - Robot and Cyborg Art.md','02 Introduction.md'], scope:'Burnham: "For Object Art presence is everything; for Systems Art information is the key" — the migration from material object to information/system. This note is already multi-author; add a concise Burnham section and keep the existing author sections intact.' },
  { t:'concepts/Artificial Life.md', ch:['02 Introduction.md','04 Chapter 2 - The Biotic Sources of Modern Sculpture.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'IDEMPOTENT REPAIR: this note may already contain Burnham prose/bullets but NO proper heading. Consolidate any existing Burnham content under a single clearly-marked `## Jack Burnham (Beyond Modern Sculpture)` section (do not duplicate), and ensure it has a `## Sources` Burnham entry with a verbatim quote. Burnham reads the whole history of modern sculpture as "steps toward the simulation of biological life" / "life-bearing artifacts."' },
]

const CREATES = [
  { t:'concepts/New Media Art.md', ch:['08 Chapter 6 - Kineticism - The Unrequited Art.md','09 Chapter 7 - Light as Sculpture Medium.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'CREATE this concept note — a long-deferred COMMITTED research-focus forward-stub (21 inbound files), deferred in the Lippard ingest "until Ascott/Burnham," now realized Burnham-anchored. Burnham\'s kinetic (Ch6), light (Ch7), and cybernetic/cyborg (Ch8) art are the direct ancestry of new media art: the migration from the static object to technologically-driven, time-based, systemic, responsive art. Note in the body that this was a committed stub now realized, and that it will be extended when Ascott (Telematic Embrace) is ingested. Authors: primarily [[Jack Burnham]] (cross-link [[Lucy Lippard]] for the conceptual-art precursor). Cross-link [[Kinetic Art]], [[Light as a Sculpture Medium]], [[Cyborg Art]], [[Systems Esthetics]], [[Object and System]], [[Art as Experiential Technology]].' },
  { t:'concepts/Art as Experiential Technology.md', ch:['08 Chapter 6 - Kineticism - The Unrequited Art.md','09 Chapter 7 - Light as Sculpture Medium.md','10 Chapter 8 - Robot and Cyborg Art.md'], scope:'CREATE this concept note — a long-deferred COMMITTED research-focus forward-stub (18 inbound files), deferred in the Lippard ingest "until Ascott/Burnham," now realized Burnham-anchored. Burnham\'s vision of cybernetic art with "a capacity for reciprocal relationships with human beings" (where "the word viewer seems quite antiquated") — art as a responsive, experiential technological system — is the direct source. Note in the body that this was a committed stub now realized, to be extended when Ascott is ingested. Authors: primarily [[Jack Burnham]]. Cross-link [[Reciprocal Communication]], [[Cyborg Art]], [[New Media Art]], [[Systems Esthetics]], [[One-Way Stimulation vs Two-Way Communication]].' },
]

const updPrompt = (u, isCreate) => {
  const chs = u.ch.map(f=>`  - ${VAULT}/raw/${BF}/${f}`).join('\n')
  const ans = u.ch.map(f=>`  - ${VAULT}/_system/analysis/${BF} - ${f.replace(/\.md$/,'')}.md.analysis.md`).join('\n')
  return `You are repairing the Burnham ingest: an earlier agent returned a path WITHOUT its write landing. ${isCreate ? 'CREATE this note fresh.' : 'EXTEND this existing note (an earlier run may have left a PARTIAL edit — frontmatter source lines but no body section; make the note correct and complete, IDEMPOTENTLY, never duplicating).'} The file IS the deliverable.
## Target: \`${VAULT}/${u.t}\`
## FIRST: read the target file fully (if it exists). ${isCreate ? 'It should NOT exist yet — create it from the relevant template under '+VAULT+'/_system/templates/.' : 'PRESERVE all existing non-Burnham content exactly. If a Burnham section or stray Burnham prose already exists, CONSOLIDATE it under a single `## Jack Burnham (Beyond Modern Sculpture)` heading — do not create a second one. If frontmatter already lists Burnham raw chapters or [[Jack Burnham]], do not re-add duplicates.'}
## Then:
1. Read the relevant Burnham analysis file(s) for pre-extracted concepts + candidate passages:
${ans}
2. Open the relevant raw chapter(s) for verbatim quotes:
${chs}
3. ${isCreate ? 'Write a full concept note (Brief Definition; Longer Explanation anchored in Burnham; Authors and Variants; Related/Opposing Concepts; Questions It Raises; Sources with 2+ verbatim quotes). Use template _system/templates/concept.md.' : 'Add a `## Jack Burnham (Beyond Modern Sculpture)` section (1-3 paragraphs, verbatim-anchored) and a new `## Sources` entry (Book *'+BOOK_TITLE+'* / Author '+AUTHOR+' / Raw file [[raw/'+BF+'/<chapter>]] / verbatim block quote / Supports / confidence label). In frontmatter, ensure [[Jack Burnham]] is in authors and the cited raw chapter(s) are in sources — without duplicating existing entries.'}
4. Set last_updated: ${TODAY}.
## Scope: ${u.scope}
${LINKRULE}
Return only the absolute path written.`
}

const updThunks = UPDATES.map(u => () => safeAgent(updPrompt(u, false), { label:`fix:${u.t.split('/').pop().replace(/\.md$/,'').slice(0,26)}`, phase:'Regenerate updates' }, 3))
const crtThunks = CREATES.map(u => () => safeAgent(updPrompt(u, true), { label:`create:${u.t.split('/').pop().replace(/\.md$/,'').slice(0,22)}`, phase:'Regenerate updates' }, 3))
const res = await parallel([...updThunks, ...crtThunks])
log(`Repair: ${res.filter(Boolean).length}/${UPDATES.length + CREATES.length} agents returned a path`)

return {
  attempted: UPDATES.length + CREATES.length,
  returned: res.filter(Boolean).length,
  updates: UPDATES.map(u=>u.t),
  creates: CREATES.map(u=>u.t),
}
