export const meta = {
  name: 'run-burnout',
  description: 'Thin wrapper: ingest Han — The Burnout Society via the durable monograph workflow with args inlined.',
  phases: [
    { title: 'Analysis Pass' },
    { title: 'Synthesis Plan' },
    { title: 'Generation Pass' },
    { title: 'Indexes & Maps' },
  ],
}

// The durable monograph workflow's top-level `args` does NOT bind through `scriptPath`;
// the in-script workflow(ref, args) mechanism does. So inline the args here and call it.
const ARGS = {
  bookFolder: 'Han - The Burnout Society',
  bookTitle: 'The Burnout Society',
  author: 'Byung-Chul Han',
  today: '2026-06-04',
  chapters: [
    { file: '02 Neuronal Power.md', sha: '436ba278c3434c166334f78433806763fdbab413a5e16052cb0a120e81d26ce6', title: 'Neuronal Power' },
    { file: '03 Beyond Disciplinary Society.md', sha: '1e601969f3da20ddb588d7fee1c8370f2272559bbcfbeff6834617fcff0576e3', title: 'Beyond Disciplinary Society' },
    { file: '04 Profound Boredom.md', sha: 'cd1a5a852094f2491a4c9b24d1df4fe89c8ea57df44cc8e1d7c56139d793ef8d', title: 'Profound Boredom' },
    { file: '05 Vita Activa.md', sha: '13dfaeda53cbb90972ba9d94bcf0141943642fde161ac91d4866670c33f01b37', title: 'Vita Activa' },
    { file: '06 The Pedagogy of Seeing.md', sha: 'b11e82b10103080ad492456596020e5ea79e63cfd1949613e2bbdb9568df4b9f', title: 'The Pedagogy of Seeing' },
    { file: '07 The Bartleby Case.md', sha: '4ec02af7c6fe1b37eed5b07631c461e0c13efaa9dbcbde8ce2a7cc5b0319fcd4', title: 'The Bartleby Case' },
    { file: '08 The Society of Tiredness.md', sha: 'be0e4f981d958cbb1633571624b212b6ca4b40ab9ec35e9e911c2f8532b698f8', title: 'The Society of Tiredness' },
    { file: '09 Burnout Society.md', sha: '4f8fe32f19197711ebdb4d5f515858237c06755fbe9fee634b9123396e76f8fa', title: 'Burnout Society' },
  ],
  focusHints: `The Burnout Society (Müdigkeitsgesellschaft, 2010) is Han's foundational diagnosis and the PRIMARY SOURCE for much of the vault's existing Han vocabulary. Extract: the ACHIEVEMENT SOCIETY (Leistungsgesellschaft) of self-exploiting "achievement-subjects" superseding Foucault's DISCIPLINARY SOCIETY of "obedience-subjects"; the modal shift from Should to Can ("Unlimited Can is the positive modal verb of achievement society"); EXCESS POSITIVITY / "neuronal violence" as the 21st-century pathology (depression, ADHD, burnout) replacing the immunological/viral negativity of the last century; AUTO-EXPLOITATION as more efficient than allo-exploitation because "a feeling of freedom attends it" — perpetrator and victim collapse into one; the loss/poverty of NEGATIVITY; PROFOUND/DEEP BOREDOM (Benjamin's "dream bird that hatches the egg of experience"); DEEP CONTEMPLATIVE ATTENTION vs MULTITASKING/HYPERATTENTION (multitasking as regression to animal vigilance); VITA ACTIVA vs VITA CONTEMPLATIVA (Han contra Arendt, defending contemplation; the pedagogy of seeing, learning "to say no"); NEGATIVE POTENCY / "the power not-to" (Bartleby's "I would prefer not to", read PATHOLOGICALLY against Agamben's ontotheological reading); FUNDAMENTAL / healing "we-tiredness" / "tiredness that trusts in the world" vs solitary "I-tiredness" (Handke's Essay on Tiredness; the Pentecostal company; the Sabbath of not-to); ANIMAL LABORANS and BARE LIFE / the achievement-subject as "homo sacer of his own self" under the "injunction to achieve" [Bann der Leistung] (Han re-reads Agamben, rejecting his negativity scheme); the superego POSITIVIZING into the EGO IDEAL; "the project turns out to be a projectile"; "Health is the new goddess" / the DOPING SOCIETY (neuroenhancement, the performance-machine); the crisis of gratification and narcissism (Sennett). Interlocutors here: Foucault (disciplinary society), Alain Ehrenberg (depression / The Weariness of the Self — the running polemical target), Richard Sennett (narcissism / gratification crisis), Hannah Arendt (vita activa / animal laborans), Giorgio Agamben (homo sacer / bare life / Bartleby — critiqued), Sigmund Freud (the psychic apparatus, superego, melancholy vs depression), Nietzsche (last man vs sovereign man, the contemplative), Benjamin (deep boredom), Heidegger (Gelassenheit, care), Carl Schmitt (decision, the enemy, sovereignty), Baudrillard ("He who lives by the Same shall die by the Same", viral violence), Hegel (negativity keeps existence alive), plus literary cases Melville/Bartleby, Kafka (Prometheus, the Hunger Artist), Handke.`,
  updateHints: `This is Han's THIRD book in the vault. authors/Byung-Chul Han.md ALREADY EXISTS (extend, never overwrite): it already lists [[The Burnout Society]] in books: frontmatter, but its "Books in the Vault" line still says "not yet processed / Forward link" — flip that to ingested with this book's chapter links, and add a "## The Burnout Society" author-section. Because The Burnout Society is the ORIGIN of much existing Han vocabulary, STRONGLY prefer update_notes (a new book/author section) over creating duplicates for these EXISTING notes — and where this book is the primary source, say so:
- concepts/Achievement Society.md (THE primary source — the book that coins/develops it)
- concepts/Auto-Exploitation.md (primary source) and concepts/Allo-Exploitation.md
- concepts/Positivity.md and concepts/Negativity.md (primary source for the positivity/negativity diagnosis)
- concepts/Hell of the Same.md (the Same; Baudrillard "live by the Same, die by the Same")
- concepts/Acceleration.md (loss of intervals; "Acceleration is abolishing all intervals")
- concepts/Can vs Should.md (Beyond Disciplinary Society is the PRIMARY source for the Should→Can modal shift)
- concepts/The Project (Han).md (ch9 "subject → project"; "the project turns out to be a projectile")
- concepts/Narrativity.md (de-narrativization; "strips it of all narrativity")
- concepts/Society of Control.md (Han rejects "control society" as still carrying too much negativity)
- concepts/Healing as Killing.md and concepts/Self-Optimization.md (the performance-machine; doping society; "Health is the new goddess")
- concepts/Immunological Age.md (Neuronal Power is its PRIMARY source — the immunological/viral → neuronal/positivity epochal shift)
- concepts/Biopolitics.md (homo sacer / bare life territory)
- definitions/Erfahrung vs Erlebnis (Han).md (ch9, via Sennett: Erfahrung vs Erlebnis)
- tensions/Positivity vs Negativity.md, tensions/Freedom vs Control.md (the "dialectic of freedom" / "compulsive freedom"), tensions/Discipline vs Control.md (disciplinary→achievement), tensions/Subject vs Project.md (ch9 is its PRIMARY source), tensions/Narration vs Addition.md
- references/Byung-Chul Han and Walter Benjamin.md (deep boredom, the "dream bird"), references/Byung-Chul Han and Friedrich Nietzsche.md (last man vs sovereign man, pedagogy of seeing, Twilight of the Idols), references/Byung-Chul Han and Martin Heidegger.md (Gelassenheit, the Sabbath, care), references/Byung-Chul Han and Carl Schmitt.md (decision, the enemy, sovereignty), references/Byung-Chul Han and Jean Baudrillard.md ("He who lives by the Same...", viral violence, obesity of systems), references/Byung-Chul Han and Hegel.md (negativity keeps existence alive; master/slave).
NEW reference notes this book realizes (these figures are ALREADY forward-stubbed in the Han author note): references/Byung-Chul Han and Hannah Arendt.md (vita activa, animal laborans, The Human Condition), references/Byung-Chul Han and Giorgio Agamben.md (homo sacer, bare life, state of exception, Bartleby — immanent critique), references/Byung-Chul Han and Sigmund Freud.md (the psychic apparatus, superego→ego ideal, melancholy vs depression, character), references/Byung-Chul Han and Alain Ehrenberg.md (depression, the sovereign man — Han's running polemic), references/Byung-Chul Han and Richard Sennett.md (narcissism, the gratification crisis), references/Byung-Chul Han and Peter Handke.md (Essay on Tiredness, we-tiredness).
REALIZE-CANDIDATES (per the Biopolitics precedent — cross-author concepts Han anchors substantively whose source book is NOT in the corpus, so realize them Han-anchored, open to a future section): Bare Life, Animal Laborans (Han via Arendt). Homo Sacer can stay a forward-stub OR be realized Han-anchored — your call given Han's heavy treatment. NOTE: the author note already references a dangling tension [[Discipline vs Achievement]] — either realize it as a new tension OR retarget to the existing tensions/Discipline vs Control.md (flag in review_items).`,
}

return await workflow({ scriptPath: '/Users/johnholmes/Documents/GitHub/Material-Immaterial---Curatorial-Research-Vault/_system/workflows/ingest-book.monograph.js' }, ARGS)
