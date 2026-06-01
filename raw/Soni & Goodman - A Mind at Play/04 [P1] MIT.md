---
book: "A Mind at Play"
author: "Jimmy Soni and Rob Goodman"
part: 1
chapter: 4
section: "MIT"
source_pages: "58-75"
type: source
---

# 4. MIT

Claude Shannon was, at least, acquainted with the cold. The wind that blew off the Atlantic was saltier than Michigan’s but no more chilling; the New England snow was almost as deep. Twenty years old, displaced from the Midwest for the first time, and alone, surely he would have taken the familiar where he could find it. For those unable to bear the cold, though, MIT offered corridors and tunnels, long expanses painted in Institutional Gray. The engineers could spend an entire winter indoors. They could virtually live in the gray tunnels, and there were many days that Shannon never saw sun—with the special exception of “MIThenge,” the two winter days each year when the sun aligned with the axis of the corridors, and lit the gray walls gold as it set.

“Institute folklore has it that an alert eye can sometimes pick out pencil lines on the corridor walls, shoulder high and parallel to the floor,” writes MIT historian Fred Hapgood. “These are supposed to be the spoor of members of the community so adapted to the corridors that they can navigate them blind . . . press a pencil against the wall, roll their eyeballs up into their heads, go out-of-body after some complex problem, and wheel away on automatic pilot.” On greener days, a walk outside would take Shannon past columned facades chiseled with the names of the greats: Archimedes, Copernicus, Newton, Darwin. MIT was a neoclassical island in what was still an industrial Boston suburb, and the Pantheon-style dome at its center sat as an uneasy neighbor to the factories and mills along the Charles River. The dome sitting atop tunnels was itself a compromise between architects: one who wanted the new campus to bear at least some comparison to that other college up the river, and another who insisted that it be built on the principles of “efficiency and avoidance of lost motion by student and teacher, equal to that which obtains in our best industrial works.” This was MIT’s place in the world, in miniature: an adjunct to industry with aspirations to “purer” science—both factory and dome.

The buildings themselves were a tribute to the quantitative mindset, known more by number than by name. It was a postcard about Bush’s analyzer that brought Shannon to Building 13, and it was Bush who approved his application and offered him admission to the graduate program. Both were engineers in a hurry. The better to get on with the work of earning money and supporting a family, Bush had managed simultaneous undergraduate and graduate degrees; Shannon had finished high school in three years, two BS degrees in four, and now was on to graduate work with barely a summer’s pause. It was a sign of Bush’s regard for his new pupil that he placed him in charge of the analyzer’s most advanced and most finicky part.

By 1935, a year before Shannon arrived in Cambridge, the differential analyzer had reached its limits. Mechanical contraption that it was, with each new equation it had to be deconstructed and reassembled again. What Bush and his team had built was not so much a single machine as a huge array of machines in outline, to be rebuilt for every problem and broken down at every solution. It was versatility at the cost of efficiency; and because the analyzer’s entire mission was to bring efficiency to computations that could at least in theory be worked out by human hands, these recurring bottlenecks compromised its whole reason for being.

In response, Bush dreamed of an analyzer that could essentially reassemble itself on the fly: one with automatic controls enabling it to turn from equation to equation without pausing, or even to solve multiple interacting equations simultaneously. Switches would take over the work of screwdrivers. At a time when Bush’s ambitions far exceeded MIT’s Depression-era budget, he was still able to secure $265,000 from the private philanthropists at the Rockefeller Foundation to develop this next-generation computer. And he brought Claude Shannon to MIT to help him run it.

So for the next three years, Shannon’s world was gray corridors and the walls of the humming room: and within that room, the walls of a little box of 100 switches closing and opening, fastened to the analyzer, a world within a world. In the box were the brains of the brain, the switches and relays that now controlled the machine and rebuilt it as it spun, each relay, writes James Gleick, “an electrical switch controlled by electricity (a looping idea).” Open. Close. Weeks and months of this.

What happened when Claude Shannon flipped a switch? Think of a switch or relay as a drawbridge for an electrical current: closed, the switch would allow the current to pass on to its destination; open, the switch would stop the current in its tracks. The destination might be another relay, which would then open or close on the basis of the input it received—or it might, in the easiest example, be something as simple as a little electric light. All of this was second nature to Shannon, from as far back as the Gaylord Western Union office and his barbed-wire network. And it was systematized for him in Ann Arbor, where he dutifully drew circuit diagrams along with the rest of the electrical engineers. Series: the current has to pass through both of two switches before it illuminates the light; parallel: the current is free to pass through either, or both.

These were the blocks that comprised the hundred-switch logic box attached to the differential analyzer, or the electric guts of assembly lines, or the million-relay system that controlled the nation’s telephone network. There were circuits built to transmit a current when two switches were closed, but not zero or one or three; there were circuits drawn as branching trees or symmetrical deltas or dense meshes, an entire electric geometry that Shannon had learned by heart. And, in the old tradition of engineers, it was all rigged by hand, drawn step by step on blackboards or just soldered together in the belly of the machine, the only proof of the circuit’s rightness in the tangible results: whether the call went through, whether the wheel spun edgewise on its disc, whether the light lit. Circuits before Shannon were like differential equations before the analog computer: errors for every trial until the errors stopped, and nothing any cleaner. Building circuits in those days was an art, with all the mess and falsestarting and indefinable intuition that “art” implies.

But here was Shannon shut in a room with a machine built to automate thought—built, in the name of industry and efficiency, to remove the art from math. And in the midst of his work, he came to understand that he knew another way of automating thought, one that would ultimately prove far more powerful than the analog machine.

How is logic like a machine? Here is how one logician explained it around the turn of the twentieth century: “As a material machine is an instrument for economising the exertion of force, so a symbolic calculus   is   an   instrument   for   economising      the   exertion   of intelligence.” Logic, just like a machine, was a tool for democratizing force: built with enough precision and skill, it could multiply the power of the gifted and the average alike.

In the 1930s, there were only a handful of people in the world who were skilled in both “symbolic calculus,” or rigorous mathematical logic, and the design of electric circuits. This is less remarkable than it sounds: before the two fields melded in Shannon’s brain, it was hardly thought that they had anything in common. It was one thing to compare logic to a machine—it was another entirely to show that machines could do logic.

In Michigan, Shannon had learned (in a philosophy class, no less) that any statement of logic could be captured in symbols and equations—and that these equations could be solved with a series of simple, math-like rules. You might prove a statement true or false without ever understanding what it meant. You would be less distracted, in fact, if you chose not to understand it: deduction could be automated. The pivotal figure in this translation from the vagaries of words to the sharpness of math was a nineteenth-century genius named George Boole, a self-taught English mathematician whose cobbler father couldn’t afford to keep him in school beyond the age of sixteen. Not long before Thomson conceived of his first analyzer, Boole had proven himself a prodigy with a book that fully earned its presumptuous title: The Laws of Thought. Those laws, Boole showed, are founded on just a few fundamental operations: for instance, AND, OR, NOT, and IF.

Say we’d like to designate all the people in London who are blueeyed and left-handed. Call the property of blue eyes x, and call the property of left-handedness y. Use multiplication to stand for AND, addition to stand for OR, and a simple apostrophe (in lieu of a minus sign) to stand for NOT. Remember that the goal of all this is to prove statements true or false; so let 1 stand for “true,” and 0 for “false.” Those are all the rudiments for turning logic into math.

So the set of all Londoners who are both blue-eyed and left-handed simply becomes xy. And the set of all Londoners who are either blueeyed or left-handed becomes x + y. Imagine, then, that we want to evaluate the truth of the statement, “This particular Londoner is a blue-eyed left-hander.” Its truth depends on the truth of x and y. And Boole set out the precepts for assigning the statement a 1 or a 0 given what we know about x and y:

0•0=0

0•1=0

1•0=0

1•1=1

It’s easy to translate those equations back into English. If the Londoner is neither blue-eyed nor left-handed, the statement we’re trying to evaluate is of course false. If the Londoner is only blue-eyed or only left-handed, the statement is again false. Only if the Londoner is both does the statement become true. In other words, the operator AND only gives “true” if all of the propositions it’s operating on are true.

But Boolean algebra is more than a rehash of ordinary math. Imagine now that we want to evaluate the statement, “This particular Londoner is blue-eyed or left-handed.” In that case, we get the following:

0+0=0

0+1=1

1+0=1

1+1=1

If the Londoner is neither blue-eyed nor left-handed, the statement is false. But if he is blue-eyed, or left-handed, or both, it’s true—so in Boole’s algebra, 1 + 1 equals 1. The operator OR gives true if any proposition it’s operating on is true, or if all are. (Boole also recognized another kind of “or,” called the exclusive-or, which only gives true if one or the other proposition is true, but not both.)

From these simple elements (as simple as switches, Shannon reflected) we can build our way to progressively more complicated results. For instance, we can prove that x + xy = x, or that the truthvalue of the statement “either x, or both x and y” depends solely on the truth of x. Or we can prove that (x + y)’ = x’y’: in other words, “x or y” is false when “both not-x and not-y” is true, and vice versa. This, Boole argued, is all there is of logic. X and y, and as many other variables as we choose, can stand for whatever statements we want, as long as they’re either true or false—and with the simple, nearly mindless operation of a few rules, we can deduce from them everything that can be deduced. A mechanical logic means no more puzzling over “All men are mortal, Socrates is a man . . .” and so on: nothing but symbols, operations, and rules. It took a genius to lay down the rules, but it would only take a child to apply them. Or something simpler than a child. It was all very interesting, but for nearly a century little that was practical came of it. It was taught to generations of students mainly as a philosopher’s curiosity, and so it was taught to Claude Shannon. At the time, he said, he mainly enjoyed it for the sound of the word: “Boooooooolean.” But something of it stayed with him as he struggled to make sense of the hundred-switch box; something of Boole’s simplicity stood out alongside the devilishly complex equations he was solving for Bush. Close, open. Yes, no. 1, 0.

Something of it stayed with him, too, as he made his way from MIT to New York for the summer of 1937. If one other group of people in the world was edging closer to thinking simultaneously about logic and circuits, it was the minds at Bell Laboratories, who had taken Shannon on for a summer internship. Only a temporary hire, Shannon was likely occupied with the ordinary duties assigned to interim help, and his 1937 summer left no marks in the Labs’ records. But he brought to the Labs a deep sense of mathematical logic and a betterthan-average knowledge of circuit design—and the nagging feeling that the two were connected. He brought them, moreover, to the heart of the phone company, the owner of the most complicated, farreaching network of circuits in existence, and his work was part of the mathematical effort to make that network perform better and cost less.

Crucially, it was around this time that he first put pen to paper and began tying together the commonalities he sensed in Bush’s analyzer, Bell’s network, and Boole’s logic. Half a century later, Shannon tried to recall his moment of insight, and tried to explain how he could have been the first to understand what the switches meant. He told a journalist,

It’s not so much that a thing is “open” or “closed,” the “yes” or

“no” that you mentioned. The real point is that two things in

series are described by the word “and” in logic, so you would say

this “and” this, while two things in parallel are described by the

word “or.” . . . There are contacts which close when you operate

the relay, and there are other contacts which open, so the word

“not” is related to that aspect of relays. . . . The people who had

worked with relay circuits were, of course, aware of how to

make these things. But they didn’t have the mathematical

apparatus of the Boolean algebra.

Every single concept from Boole’s algebra had its physical counterpart in an electric circuit. An on switch could stand for “true” and an off switch for “false,” and the whole thing could be represented in 1’s and 0’s. More important, as Shannon pointed out, the logical operators of Boole’s system—AND, OR, NOT—could be replicated exactly as circuits. A connection in series becomes AND, because the current must flow through two switches successively and fails to reach its destination unless both allow it passage. A connection in parallel becomes OR, because the current can flow through either switch, or both. The current flows through two closed switches in parallel and lights a light; 1 + 1 = 1.

A leap from logic to symbols to circuits: “I think I had more fun doing that than anything else in my life,” Shannon remembered fondly. An odd and wonkish sense of fun, maybe—but here was a young man, just twenty-one now, full of the thrill of knowing that he had looked into the box of switches and relays and seen something no one else had. All that remained were the details. In the years to come, it would be as if he forgot that publication was something still required of brilliant scientists; he’d pointlessly incubate remarkable work for years, and he’d end up in a house with an attic stuffed with notes, half-finished articles, and “good questions” on ruled paper. But now, ambitious and unproven, he had work pouring out of him.

Finished in the fall of 1937, Shannon’s master’s thesis, “A Symbolic Analysis of Relay and Switching Circuits,” was presented to an audience in Washington, D.C., and published to career-making applause the following year. In his new system, Shannon wrote in his driest scientific prose,

any circuit is represented by a set of equations, the terms of the

equations corresponding to the various relays and switches of

the circuit. A calculus is developed for manipulating these

equations by simple mathematical processes, most of which are

similar to ordinary algebraic algorithms. This calculus is shown

to be exactly analogous to the calculus of propositions used in

the symbolic study of logic. . . . The circuit may then be

immediately drawn from the equations.

That was the key—after Shannon, designing circuits was no longer an exercise in intuition. It was a science of equations and shortcut rules. Consider a problem that Shannon’s colleagues might have faced as they worked to subject their huge analog machine to electric controls. Say that a certain function in the circuits would allow the current to pass through—would output a “1,” in Shannon’s terms—depending on the state of three different switches, x, y, and z. The current would pass through if only z were switched on, or if y and z were switched on, or if x and z were switched on, or if x and y were switched on, or if all three were switched on. Through trial and error, Shannon’s colleagues could sooner or later rig up eleven separate connections that would do the job. But Shannon would start with pencil and paper, and his ubiquitous writing pad. He would write out the function in Boolean terms, like this:

x’y’z + x’yz + xy’z + xyz’ + xyz

Then he would boil it down. Two terms in that function feature yz, and two feature y’z, so he would just factor them out as in any algebra problem:

yz(x+x’) + y’z(x+x’) + xyz’

But Boole’s logic tells us that x + x’ is always true, which makes sense: x is either true, or it isn’t. Shannon could recognize, then, that x + x’ wouldn’t really tell him anything interesting about the output of the circuit, and so it could be safely crossed out:

yz + y’z + xyz’

Now two terms feature z, so Shannon could factor again:

z(y + y’) + xyz’

And for the same reason as before, he could cross out the terms in parentheses:

z + xyz’

There was one more rule in Boole’s logic that could distill this even further. Boole showed that x + x’y = x + y, or to put it into plain English, asking for a Londoner who was either blue-eyed, or lefthanded but not blue-eyed, was just the same as asking for a Londoner who was either blue-eyed or left-handed. Using that rule on the function above, Shannon could cross out z’ as redundant, leaving him with this:

z + xy

Remember the muck in which Shannon had started. His math was able to prove that these two sets of instructions are exactly the same:

Turn on if only z is switched on, or if y and z are switched

on, or if x and z are switched on, or if x and y are switched

on, or if all three are switched on.

Turn on if z is switched on, or if x and y are switched on.

In other words, he had discovered a way to do the work of eleven connections with just two, a parallel and a series. And he had done it without ever touching a switch.

Armed with these insights, Shannon spent the rest of his thesis demonstrating their possibilities. A calculator for adding binary numbers; a five-button combination lock with electronic alarm—as soon as the equations were worked out, they were as good as built. Circuit design was, for the first time, a science. And turning art into science would be the hallmark of Shannon’s career.

One more beauty of this system: as soon as switches are reduced to symbols, the switches no longer matter. The system could work in any medium, from clunky switches to microscopic arrays of molecules. The only thing needed was a “logic” gate capable of expressing “yes” and “no”—and the gate could be anything. The rules for easing the labor of a room-sized mechanical computer are the same rules that would be built into the circuits of vacuum tubes, transistors, microchips—at every step, the binary logic of 0 and 1.

It was trivial, Shannon said. But it was the kind of discovery blessed to be trivial only after the fact. Still—“possibly the most important, and also the most famous, master’s thesis of the century”? “One of the greatest master’s theses ever”?   “The   most    important    master’s    thesis   of   all   time”? “Monumental”? Was a series of time-saving tricks for engineers really worth all of that praise? As long as the job was done either way, was it really so crucial that Shannon could do in two steps what his colleagues did in eleven?

It was crucial—but the most radical result of Shannon’s thesis was largely implied, not stated, and its import only became clear with time. The implication gets clearer when we realize that Shannon, following Boole, treated the equal sign as a conditional: “if.”

1 + 1 = 1: if the current passes through two switches in parallel, a light lights (or a relay passes on a signal meaning “yes”). 0 + 0 = 0: if the current passes through neither of two switches in parallel, a light fails to light (or a relay passes on a signal meaning “no”). Depending on the input, the same switches could give two different answers. To take an anthropomorphizing leap—a circuit could decide. A circuit could do logic. Many circuits could do enormously complex logic: they could solve logical puzzles and deduce conclusions from premises as reliably as any human with a pencil, and faster. And because Boole had shown how to resolve logic into a series of binary, true-false decisions, any system capable of representing binaries has access to the entire logical universe he described. “The laws of thought” had been extended to the inanimate world.

That same year, the British mathematician Alan Turing published a famously critical step toward machine intelligence. He had proven that any solvable mathematical problem could, in principle, be solved by machine. He had pointed the way toward computers that could reprogram their own instructions as they worked, all-purpose machines of a flexibility far beyond any that had yet been conceived. Now, Shannon had shown that any sensical statement of logic could, in principle, be evaluated by machine. Turing’s machine was still a construct of theory: he proved his point with a hypothetical “read/write head” operating on an arbitrarily long string of magnetic tape—an imaginary computer with a single moving part. Shannon, on the other hand, had proven the logical possibilities of the circuits that could be found in any telephone switchboard: he had shown, “down to the metal,” how engineers and programmers to come might one day wire logic into a machine. This leap, writes Walter Isaacson, “became the basic concept underlying all digital computers.”

It would be six more years before Turing and Shannon met in a wartime scientists’ cafeteria, each of their projects so classified that they could only speak of them in hints. They had barely begun to build. Yet in one year, “an annus mirabilis of the computer age,” they had laid the foundations. In particular, they had shown the possibilities of digital computing, of minute, discrete decisions arrayed one after the other. Less than a decade after Shannon’s paper, the great analog machine, the differential analyzer, was effectively obsolete, replaced by digital computers that could do its work literally a thousand times faster, answering questions in real time, driven by thousands of logic gates that each acted as “an all-or-none device.” The medium now was vacuum tubes, not switches—but the design was a direct descendant of Shannon’s discovery.

Yet none of this could have been foreseen in 1937 by Vannevar Bush, planning ever more complex and capable versions of his differential analyzer, or even by Claude Shannon. Beneath the thrum of that remarkable machine, it all might have sounded, in a way, like regress: that the finely engineered discs and gears were to be superseded by switches no more complex in their essentials than a telegraph key; that there was less analytic potential in the 100-ton behemoth than in the small box fastened to its side; that machines so solidly intuitive they could teach an unschooled mechanic calculus by hand were to be replaced by opaque cabinets that gave a blank face to the world. From Thomson to Bush, the analog computer was, in a way, one of engineering’s long, blind alleys.

In that light, a story from Hapgood, the MIT historian: “Years ago an engineer told me a fantasy he thought threw some light on the ends of engineering, or at least on those underlying his own labors. A flying saucer arrives on Earth and the crew starts flying over cities and dams and canals and highways and grids of power lines; they follow cars on the roads and monitor the emissions of TV towers. They beam up a computer into their saucer, tear it down, and examine it. ‘Wow,’ one of them finally exclaims. ‘Isn’t nature incredible!?’ ”

Indifferent to beauty as all but survival’s side effect, wildly profligate, remorseless: nature and techne aren’t so different.
