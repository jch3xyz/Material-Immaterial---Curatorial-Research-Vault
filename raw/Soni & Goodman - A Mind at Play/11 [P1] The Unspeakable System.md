---
book: "A Mind at Play"
author: "Jimmy Soni and Rob Goodman"
part: 1
chapter: 11
section: "The Unspeakable System"
source_pages: "146-155"
type: source
---

# 11. The Unspeakable System

Cryptography was the war’s white noise: it was ubiquitous, and yet only those paying the closest attention could pick it up. It was one of the least understood components of the war machine. Compared to, say, the nuclear bomb, a visible and white-hot expression of the power of physics, the products of cryptographic analysts were arcane and mysterious—and kept classified for a generation or more.

From the war’s earliest days, the challenge of sending and receiving coded messages—and of cracking the enemy’s messages—drew some of the world’s finest minds in mathematics, science, and computing. The technology called forth by the need to break codes was among the war’s great triumphs. The cottage industry of computer code names—ENIGMA, ENIAC, MANIAC, TUNNY, BOMBE, COLOSSUS, SIGSALY, and so on—evinced a demand for codebreaking power that was spurring a revolution in computing, presided over by secretive intelligence bureaucracies.

But this deeply bureaucratic story is not how the tale of wartime codebreaking is often told. Cryptography is made to seem like the work of brilliant lone wolves, scribbling away in solitude. As Colin Burke puts it in a National Security Agency history of cryptologic efforts called It Wasn’t All Magic, “Such an image of a heroic cryptanalysis is far from being true or useful. Cryptanalytic and technological victories have not come as easily as that. . . . Typical cryptanalysis was and remains a continuing struggle to discover patterns and to make sense out of mountains of raw data.” Because the cryptographic bureaucracies grew in secret, and because many of their files still remain classified—Burke’s own history, completed in 1994, was only declassified in 2013—the actual substance of their work wasn’t (and still isn’t) well understood by the public.

But it was always there, the dull background hum of the war: codes broken, codes built, thousands of conversations deciphered, reams of data and text sorted by hand and machine. The war for signals intelligence was as much about code-making as it was about codebreaking, as illustrated by one famous and tragic story. On the morning of December 7, 1941, George Marshall, the Army’s chief of staff, had an important message to send to his Pacific Command: Japan had decided that it could no longer mediate its differences with the United States through politics; war was likely. But how to transmit this information? The only system available to the nation’s top military and political leaders had long been considered insecure. The message was sent instead by the comparatively slower radio telegraph. Tragically, it arrived after the attack on Pearl Harbor was over. The near destruction of the Pacific Fleet was, among much else, a wake-up call to America’s code writers.

The Axis powers, too, set their finest minds and technologies to work trying to intercept and decode enemy conversations. Walter Schellenberg, the head of the Third Reich’s Foreign Intelligence Service, details one such success late in the war:

Early in 1944 we hit a bull’s eye by tapping a telephone

conversation between Roosevelt and Churchill which was

overheard and deciphered by the giant German listening post in

Holland.    Though    the   conversation    was    scrambled,   we

unscrambled it by means of a highly complicated apparatus. It

lasted almost five minutes, and disclosed a crescendo of military

activity in Britain, thereby corroborating the many reports of

impending invasion. Had the two statesmen known that the

enemy was listening to their conversation, Roosevelt would

hardly have been likely to say good-bye to Churchill with the

words, “Well, we will do our best—now I will go fishing.”

Cryptology represents a problem of both software and hardware. The “software” can, in principle, be anything. In one well-known example, about 500 Navajo Indians were recruited in World War II to transmit coded messages because their native tongue was complex enough—and unfamiliar enough—to evade detection by the Axis powers. That’s the essence of cryptology: a series of substitutions, trades of one letter or word for another letter or word (or language). Technology can help augment a code’s difficulty by ramping up the complexity of the substitutions. And thus, advances in cryptographic hardware rendered World War II–era codes exponentially more complex. They enabled cryptographers, for instance, to easily encrypt each letter of a message with a different cipher alphabet, which would render the message as a whole far more resilient against codebreaking.

This was where Bell Labs entered the fight: what the country needed was computing power of the sort that would enable more efficient encryption of messages and speedier cracking of enemy codes. One example was “Project X”—the most ambitious speechscrambling system of that era. It was initiated in the winter of 1940 and took on new urgency with the American entry into the war. The project, also known as the SIGSALY system, consisted of “some forty racks of vacuum tube–powered electrical equipment weighing about fifty-five tons, taking up 2,500 square feet and requiring 30,000 watts of power.” According to one estimate, the system had a $5,000,000 budget in 1943, and it employed a platoon of thirty workers. So secret was the system’s internal logic that the patents associated with it were not publicly divulged until 1976. To listen to a scrambled message over its wires was to hear something that sounded “rather like Rimsky-Korsakov’s bravura violin spectacular ‘The Flight of the Bumblebee.’ ” To critics who thought the output curious or difficult to understand, William Bennett, one of SIGSALY’s engineers, had a prompt reply: “Accept distortion for security.”

In one sense, SIGSALY looked like caricature of a mid-century computer: it occupied an entire room, demanded round-the-clock air conditioning, and produced small outputs for the enormous inputs it required. (This was an open joke: “Members working on the job occasionally remarked about the terrible conversion ratio—30 kW of power for 1 milliwatt of poor-quality speech.”) But on the other hand, none of that mattered. Andrew Hodges, in his biography of Alan Turing, noted the obvious reason why: “It worked, which was the main thing. For the first time, secret speech could cross the Atlantic.”

At the heart of the SIGSALY system was a technology known as the Vocoder. Its creator, later celebrated as an engineering genius, almost didn’t become an engineer at all. Homer Dudley had ambitions of becoming a teacher. He had even given it a try, teaching fifth through eighth graders, and then high school students. While the material was no difficulty for someone of his intellect, he was never able to master the art of classroom discipline. Dudley discovered, like many a teacher before and since, that the real challenge lay in maintaining order among the prepubescent—and that he wasn’t up to it. So he abandoned teaching to study electrical engineering, joining the technical department of Western Electric, the precursor of Bell Labs. It was a more auspicious career choice: over four decades, his work on telephony and speech synthesis resulted in thirty-seven patents.

Unbeknownst to him at the time, his most significant achievement would have global implications. Dudley hypothesized that the sounds of the human voice could be mimicked by machine: if the human voice was, at the most basic level, merely a series of vibrations in the air, there was no reason why those vibrations could not be mechanically reproduced. Setting out to test his premise, he built a pair of machines that did just that: one to encode speech electronically (the Vocoder, short for “Voice Encoder”), and one to reverse the process and output machine-generated speech (the Voder, or “Voice Operation Demonstrator”). Vannevar Bush was in the audience for the latter’s debut at the 1939 World’s Fair, where it proved a hit. As he recalled,

At a recent world fair a machine called a Voder was shown. A

girl stroked its keys and it emitted recognizable speech. No

human vocal cords entered into the procedure at any point; the

keys simply combined some electrically produced vibrations

and passed these on to a loudspeaker. In the Bell Laboratories

there is the converse of this machine, called a Vocoder. The

loudspeaker is replaced by a microphone, which picks up sound.

Speak to it, and the corresponding keys move.

Only later was Dudley’s invention pressed into military service. In creating data out of the human voice, the Vocoder became a perfect building block for SIGSALY’s engineers. One of the central challenges of a code-writing system is this: each new letter or word introduced into a message opens up a fresh possibility of detection by the enemy; the less that’s communicated, in other words, the better. Because the Vocoder attempted to encode and reproduce vowels and consonants with as little energy consumed as possible, it wrung a great deal of the redundancy out of human speech; the result was an economy of information transmitted. In other words, what was encoded was only what was needed, nothing more, thus reducing the amount of information that would be liable to decryption by the enemy.

The challenge of communicating a maximum of information with a minimum risk of detection was deadly serious, one of the most urgent and complex wartime problems. Bell Labs was one of the national leaders in such work, even winning awards in the field, including “Best Signal Processing Technology” in 1946. SIGSALY remained classified, so none of its inner workings were disclosed to the awards ceremony audience. But the Labs’ representative did accept the honor with an encrypted phone call: “Phrt fdygui jfsowria meeqm wuiosn jxolwps fuekswusjnvkci! Thank you!”

Shannon, for his part, was one of a team of almost thirty people working on the many pieces of the SIGSALY project. He was tasked with checking the algorithms that would allow the message to be suitably and securely reproduced on the receiving end. So secret was SIGSALY that, even as a member of the project team, Shannon was not told what all his number-crunching was for. But the work gave him a window into the world of encoded speech, transmission of information, and cryptography—a synthesis that, at that moment in history, may not have taken place anywhere other than at Bell Labs. As Shannon observed, “not a lot of laboratories had voice encoding devices for scrambling speech.”

Shannon would observe later that cryptography was “a very down to earth discipline, how the cryptographer should go to work and what he should do.” But much of Shannon’s work wasn’t designed for cryptographers. When Shannon worked on encryption outside the confines of the SIGSALY project, he was writing more for an audience of “mathematicians or philosophers of cryptography” than for handson code writers. As he himself admitted, his cryptography paper “didn’t get as much good response . . . as I expected from the cryptographers.”A later writer would admit that Shannon’s paper on the topic of cryptography had “the feel of a what-can-I-contribute-tothe-war-effort undertaking of which there must have been many.”

As in other areas of Shannon’s life, his most important work in cryptography yielded a rigorous, theoretical underpinning for many of a   field’s   key   concepts.   Shannon’s   exposure   to   day-to-day cryptographic work during the war, it seems, was important—but its primary purpose was as grist for a paper that would only be published in classified form on September 1, 1945—one day before the Japanese surrender was signed. This paper, “A Mathematical Theory of Cryptography—Case 20878,” contained important antecedents of Shannon’s later work—but it also provided the first-ever proof of a critical concept in cryptology: the “one-time pad.”

The one-time pad system was the conceptual basis of Bell Labs’ Vocoder, though it was first devised as early as 1882. It requires that a coded message be preceded by the key to decode it, that the key be a secret, entirely random set of symbols the same size as the message, and that the key be used only once. It took Claude Shannon, and the space of more than a half century, to prove that a code constructed under these stringent (and usually impracticable) conditions would be entirely unbreakable—that perfect secrecy within a cryptographic system was, at least in theory, possible. Even with unlimited computing power, the enemy could never crack a code built on such a foundation.

Shannon’s cryptographic work was released into the dark of the intelligence apparatus, a world of classifications and secrecy where the work’s reception was concealed even from its author. Of the people in this world, Shannon would say: “They were not a very talkative bunch, you could say that. They were the most secretive bunch of people in the world. It’s very hard to even find out for example who are the important cryptographers in this country.” The paper would not be available to a wider audience for another five years. The work’s true import, in the end, was not in the creation of an invincible code, but rather in the way that its suppressed insights ultimately resurfaced, at the heart of Shannon’s revolutionary theory of information: “It was a great flow of ideas from one to the other, back and forth.”
