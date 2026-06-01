---
book: "The Age of Spiritual Machines: When Computers Exceed Human Intelligence"
author: "Ray Kurzweil"
part: "How To Build an Intelligent Machine in Three Easy Paradigms"
type: source
---

# How To Build an Intelligent Machine in Three Easy Paradigms

As Deep Blue goes deeper and deeper it displays elements of strategic understanding. Somewhere out there, mere

tactics are translating into strategy. This is the closest thing I've seen to computer intelligence. It's a weird form of

intelligence, the beginning of intelligence. But you can feel it. You can smell it.

—Frederick Friedel, assistant to Gary Kasparov,

commenting on the computer that beat his boss.

The whole point of this sentence is to make clear what the whole point of this sentence is.

—Douglas Hofstadter

"Would you tell me please which way I ought to go from here?" asked Alice.

"That depends a good deal on where you want to get to, " said the Cat.

"I don't much care where . . . ," said Alice.

"Then it doesn't much matter which way you go," said the Cat.

". . . so long as I get somewhere," Alice added as an explanation.

"Oh, you're sure to do that," said the Cat, "if you only walk long enough."

—Lewis Carroll

A professor has just finished lecturing at some august university about the origin and structure of the universe, and

an old woman in tennis shoes walks up to the lectern. "Excuse me, sir but you've got it all wrong," she says. "The

truth is that the universe is sitting on the back of a huge turtle." The professor decides to humor her "Oh really?" he

asks. "Well, tell me, what is the turtle standing on?" The lady has a ready reply: "Oh, it's standing on another

turtle." The professor asks, "And what is that turtle standing on?" Without hesitation, she says, "Another turtle."

The professor still game, repeats his question. A look of impatience comes across the woman's face. She holds up her

hand, stopping him in mid-sentence. "Save your breath, sonny," she says. "It's turtles all the way down."

—Rolf Landauer

As I mentioned in chapter 6, "Building New Brains," understanding intelligence is a bit like peeling an onion penetrating each layer reveals yet another onion. At the end of the process, we have a lot of onion peels, but no onion. In other words, intelligence—particularly human intelligence—operates at many levels. We can penetrate and understand each level, but the whole process requires all the levels working together in just the right way.

Presented here are some further perspectives on the three paradigms I discussed in chapter 4, "A New Form of Intelligence on Earth." Each of these methods can provide "intelligent" solutions to carefully defined problems. But to create systems that can respond flexibly in the complex environments that intelligent entities often find themselves,

these approaches need to be combined in appropriate ways. This is particularly true when interacting with phenomena that incorporate multiple levels of understanding. For example, if we build a single grand neural network and attempt to train it to understand all the complexities of speech and language, the results will be limited at best. More encouraging results are obtained if we break down the problem in a way that corresponds to the multiple levels of meaning that we find in this uniquely human form of communication.

The human brain is organized the same way: as an intricate assemblage of specialized regions. And as we learn the brain's parallel algorithms, we will have the means to vastly extend them. As just one example, the brain region responsible for logical and recursive thinking—the cerebral cortex—has a mere 8 million neurons. [1] We are already building neural nets thousands of times larger and that operate millions of times faster. The key issue in designing intelligent machines (until they take over that chore from us) will be designing clever architectures to combine the relatively simple methods that comprise the building blocks of intelligence.

The Recursive Formula

Here's a really simple formula to create intelligent solutions to difficult problems. Listen carefully or you might miss it.

The recursive formula is:

For my next step, take my best next step. If I'm done, I'm done.

It may seem too simple, and I'll admit there's not much content at first glance. But its power is surprising.

Let's consider the classical example of a problem addressed by the recursive formula: the game of chess. Chess is considered an intelligent game, at least it was until recently. Most observers are still of the view that it requires intelligence to play a good game. So how does our recursive formula fare in this arena?

Chess is a game played one move at a time. The goal is to make "good" moves. So let's define a program that makes good moves. By applying the recursive formula to chess, we rephrase it as follows:

PICK MY BEST MOVE: Pick my best move. If I've won, I'm done.

Hang in there; this will make sense in a moment. I need to factor in one more aspect of chess, which is that I am not in this alone. I have an opponent. She makes moves, too. Let's give her the benefit of the doubt and assume that she also makes good moves. If this proves to be wrong, it will be an opportunity, not a problem. So now we have:

PICK MY BEST MOVE: Pick my best move, assuming my opponent will do the same. If I've won, I'm done.

At this point, we need to consider the nature of recursion. A recursive rule is one that is defined in terms of itself. A recursive rule is circular, but to be useful we don't want to go around in circles forever. We need an escape hatch.

To illustrate recursion, let's consider an example: the simple "factorial" function. To compute factorial of n, we multiply n by factorial of (n - 1). That's the circular part—we have defined this function in terms of itself. We also need to specify that factorial of 1 = 1. That's our escape hatch.

As an example, let's compute factorial of 2. According to our definition,

factorial of 2 = 2 times (factorial of 1).

We know directly what (factorial of 1) is, so there's our escape from infinite recursion. Plugging in (factorial of 1) = 1, we now can write,

factorial of 2 = 2 times 1 = 2.

Returning to chess, we can see that the PICK MY BEST MOVE function is recursive, since we have defined the best move in terms of itself. The deceptively innocuous "if I've won, I'm done" part of the strategy is our escape hatch.

Let's factor in what we know about chess. This is where we carefully consider the definition of the problem. We realize that to pick the best move, we need to start by listing the possible moves. This is not very complicated. The legal moves at any point in the game are defined by the rules. While more complicated than some other games, the rules of chess are straightforward and easily programmed. So we list the moves and pick the best one.

But which is best? If the move results in a win, that will do nicely. So again we merely consult the rules and pick one of the moves that yields an immediate checkmate. Perhaps we are not so lucky and none of the possible moves provides an immediate win. We still need to consider whether or not the move enables me to win or lose. At this point we need to consider the subtle addition we made to our rule, "assuming my opponent will do the same." After all, my winning or losing is affected by what my opponent might do. I need to put myself in her shoes and pick her best move. How can I do that? This is where the power of recursion comes in. We have a program that does exactly this, called PICK MY BEST MOVE. So we call it to determine my opponent's best move.

Our program is now structured as follows. PICK MY BEST MOVE generates a list of all possible moves allowed by the rules. It examines each possible move in turn. For each move, it generates a hypothetical board representing what the placement of the pieces would be if that move were selected. Again, this just requires applying the definition of the problem as embodied in the rules of chess. PICK MY BEST MOVE now puts itself in my opponent's place and calls itself to determine her best move. It then starts to generate all of her possible moves from that board position.

The program thus keeps calling itself, continuing to expand possible moves and countermoves in an ever expanding tree of possibilities. This process is often called a minimax search, because we are alternatively attempting to minimize my opponent's ability to win and to maximize my own.

Where does this all end? The program just keeps calling itself until every branch of the tree of possible moves and countermoves results in an end of game. Each end of game provides the answer: Win, tie, or draw. At the furthest point of expansion of moves and countermoves, the program encounters moves that finish the game. If a move results in a win, we pick that move. If there are no win moves, then we settle for a tie. If there are no win or tie moves, I continue playing anyway in the hope that my opponent is not perfect like I am.

These final moves are the final branches—called leaves—in our tree of move sequences. Now, instead of continuing to call PICK MY BEST MOVE, the program begins to return from its calls to itself. As it begins to return from all of the nested PICK BEST MOVE calls, it has determined the best move at each point (including the best move for my opponent), and so it can finally select the correct move for the current actual board situation.

So how well a game does this simple program play? The answer is perfect chess. I, can't lose, unless possibly if my opponent goes first and is also perfect. Perfect chess is very good indeed, much better than any mere human. The most complicated part of the PICK MY BEST MOVE function—the only aspect that is not extremely simple—is generating the allowable moves at each point. And this is just a matter of codifying the rules. Essentially, we have determined the answer by carefully defining the problem.

But we're not done. While playing perfect chess might be considered impressive, it is not good enough. We need to consider how responsive a player PICK MY BEST MOVE will be. If we assume that there are, on average, about 8 possible moves for each board situation, and that a typical game lasts about 30 moves, we need to consider 830 possible move sequences to fully expand the tree of all move-countermove possibilities. If we assume that we can analyze 1 billion board positions per second (a good deal faster than any chess computer today), it would take 1018 seconds, or about 40 billion years, to select each move.

Unfortunately, that's not regulation play. This approach to recursion is a bit like evolution—both do great work but are incredibly slow. That's really not surprising if you think about it. Evolution represents another very simple paradigm, and indeed is another of our simple formulas.

However, before we throw out the recursive formula, let's attempt to modify it to take into account our human patience and, for the time being, our mortality.

Clearly we need to put limits on how deep we allow the recursion to take place. How large we allow the move- countermove tree to grow needs to depend on how much computation we have available. In this way, we can use the recursive formula on any computer, from a wristwatch computer to a supercomputer.

Limiting the size of this tree means of course that we cannot expand each branch until the end of the game. We need to arbitrarily stop the expansion and have a method of evaluating the "terminal leaves" of an unfinished tree. When we considered fully expanding each move sequence to the end of the game, evaluation was simple: Winning is better than tying, and losing is no good at all. Evaluating a board position in the middle of the game is slightly more complicated. Rather, it is more controversial because here we encounter multiple schools of thought.

The cat in Alice's Adventures in Wonderland who tells Alice that it doesn't much matter which way she goes must have been an expert in recursive algorithms. Any halfway reasonable approach works rather well. If, for example, we just add up the piece values (that is, 10 for the queen, 5 for the rook, and so on), we will obtain rather respectable results. Programming the recursive minimax formula using the piece value method of evaluating terminal leaves, as run on your average personal computer circa 1998, will defeat all but a few thousand humans on the planet.

This is what I call the "simple minded" school. This school of thought says: Use a simple method of evaluating the terminal leaves and put whatever computational power we have available into expanding the moves and countermoves as deeply as possible. Another approach is the "complicated minded" school, which says that we need to use sophisticated procedures to evaluate the "quality" of the board at each terminal leaf position.

IBM's Deep Blue, the computer that crossed this historic threshold, uses a leaf evaluation method that is a good deal more refined than just adding up piece values. However, in a discussion I had with Murray Campbell, head of the Deep Blue team, just weeks prior to its 1997 historic victory, Campbell agreed that Deep Blue's evaluation method was more simple minded than complicated minded.

Human players are very complicated minded. That seems to be the human condition. As a result, even the best chess players are unable to consider more than a hundred moves, compared to a few billion for Deep Blue. But each human move is deeply considered. However, in 1997, Gary Kasparov, the world's best example of the complicated- minded school, was defeated by a simple-minded computer.

Personally, I am of a third school of thought. It's not much of a school, really. To my knowledge, no one has tried this idea. It involves combining the recursive and neural net paradigms, and I describe it in the discussion on neural nets that follows.

MATHLESS "PSEUDO CODE"

FOR THE RECURSIVE ALGORITHM

Here is the basic schema for the recursive algorithm. Many variations are possible, and the designer of the system needs to provide certain critical parameters and methods, detailed below.

The Recursive Algorithm

Define a function (program), "PICK BEST NEXT STEP" The function returns a value of "SUCCESS" (we've solved the problem) or "FAILURE" (we didn't solve it). If it returns with a value of SUCCESS, then the function also returns the sequence of selected steps that solved the problem. PICK BEST NEXT STEP does the following:

PICK BEST NEXT STEP:

- Determine if the program can escape from continued recursion at this point. This bullet and the
next two bullets deal with this escape decision. First, determine if the problem has now been

solved. Since this call to PICK BEST NEXT STEP probably came from the program calling itself, we

may now have a satisfactory solution. Examples are:

(i) In the context of a game (e.g., chess), the last move allows us to win (e.g., checkmate).

(ii) In the context of solving a mathematical theorem, the last step proves the theorem.

(iii) In the context of an artistic program (e.g., cybernetic poet or composer), the last step

matches the goals for the next word or note.

If the problem has been satisfactorily solved, the program returns with a value of SUCCESS. In this case, PICK BEST NEXT STEP also returns the sequence of steps that caused the success.

- If the problem has not been solved, determine if a solution is now hopeless. Examples are:
(i) In the context of a game (e.g., chess), this move causes us to lose (e.g., checkmate for the

other side).

(ii) In the context of solving a mathematical theorem, this step violates the theorem.

(iii) In the context of an artistic program (e.g., cybernetic poet or composer), this step violates

the goals for the next word or note.

If the solution at this point has been deemed hopeless, the program returns with a value of FAILURE.

- If the problem has been neither solved nor deemed hopeless at this point of recursive expansion,
determine whether or not the expansion should be abandoned anyway. This is a key aspect of

the design and takes into consideration the limited amount of computer time we have to spend.

Examples are:

(i) In the context of a game (e.g., chess), this move puts our side sufficiently "ahead" or

"behind." Making this determination may not be straightforward and is the primary design

decision. However, simple approaches (e.g., adding up piece values) can still provide good

results. If the program determines that our side is sufficiently ahead, then PICK BEST NEXT

STEP returns in a similar manner to a determination that our side has won (i.e., with a value

of SUCCESS). If the program determines that our side is sufficiently behind, then PICK BEST

NEXT STEP returns in a similar manner to a determination that our side has lost (i.e., with a

value of FAILURE).

(ii) In the context of solving a mathematical theorem, this step involves determining if the

sequence of steps in the proof are unlikely to yield a proof. If so, then this path should be

abandoned, and PICK BEST NEXT STEP returns in a similar manner to a determination that

this step violates the theorem (i.e., with a value of FAILURE). There is no "soft" equivalent of

success. We can't return with a value of SUCCESS until we have actually solved the problem.

That's the nature of math.

(iii) In the context of an artistic program (e.g., cybernetic poet or composer), this step involves

determining if the sequence of steps (e.g., words in a poem, notes in a song) is unlikely to

satisfy the goals for the next step. If so, then this path should be abandoned, and PICK BEST

NEXT STEP returns in a similar manner to a determination that this step violates the goals

for the next step (i.e., with a value of FAILURE).

- If PICK BEST NEXT STEP has not returned (because the program has neither determined success
nor failure nor made a determination that this path should be abandoned at this point), then we

have not escaped from continued recursive expansion. In this case, we now generate a list of all

possible next steps at this point. This is where the precise statement of the problem comes in:

(i) In the context of a game (e.g., chess), this involves generating all possible moves for "our"

side for the current state of the board. This involves a straightforward codification of the

rules of the game.

(ii) In the context of finding a proof for a mathematical theorem, this involves listing the possible

axioms or previously proved theorems that can be applied at this point in the solution.

(iii) In the context of a cybernetic art program, this involves listing the possible words/notes/line

segments that could be used at this point.

For each such possible next step:

- Create the hypothetical situation that would exist if this step were implemented. In a game, this
means the hypothetical state of the board. In a mathematical proof, this means adding this step

(e.g., axiom) to the proof. In an art program, this means adding this word/note/line segment.

- Now call PICK BEST NEXT STEP to examine this hypothetical situation. This is, of course, where
the recursion comes in because the program is now calling itself.

- If the above call to PICK BEST NEXT STEP returns with a value of SUCCESS, then return from the
call to PICK BEST NEXT STEP (that we are now in), also with a value of SUCCESS. Otherwise

consider the next possible step.

If all the possible next steps have been considered without finding a step that resulted in a return from the call to PICK BEST NEXT STEP with a value of SUCCESS, then return from this call to PICK BEST NEXT STEP (that we are now in) with a value of FAILURE.

END OF PICK BEST NEXT STEP If the original call to PICK BEST NEXT STEP returns with a value of SUCCESS, it will also return the correct sequence of steps:

- In the context of a game, the first step in this sequence is the next move you should make.
- In the context of a mathematical proof, the full sequence of steps is the proof.
- In the context of a cybernetic art program, the sequence of steps is your work of art.
If the original call to PICK BEST NEXT STEP is FAILURE, then you need to go back to the drawing board.

Key Design Decisions In the simple schema above, the designer of the recursive algorithm needs to determine the following at the outset:

- The key to a recursive algorithm is the determination in PICK BEST NEXT STEP when to abandon
the recursive expansion. This is easy when the program has achieved clear success (e.g.,

checkmate in chess, or the requisite solution in a math or combinatorial problem) or clear failure.

It is more difficult when a clear win or loss has not yet been achieved. Abandoning a line of

inquiry before a well-defined outcome is necessary because otherwise the program might run for

billions of years (or at least until the warranty on your computer runs out).

- The other primary requirement for the recursive algorithm is a straightforward codification of the
problem. In a game like chess, that's easy. But in other situations, a clear definition of the

problem is not always so easy to come by.

Happy Recursive Searching!

Neural Nets

In the early and mid-1960s, AI researchers became enamored with the Perceptron, a machine constructed from mathematical models of human neurons. Early Perceptrons were modestly successful in such pattern-recognition tasks as identifying printed letters and speech sounds. It appeared that all that was needed to make the Perceptron more intelligent was to add more neurons and more wires.

Then came Marvin Minsky and Seymour Papert's 1969 book, Perceptrons, which proved a set of theorems apparently demonstrating that a Perceptron could never solve the simple problem of determining whether or not a line drawing is "connected" (in a connected drawing all parts are connected to one another by lines). The book had a dramatic effect, and virtually all work on Perceptrons came to a halt. [2]

In the late 1970s and 1980s, the paradigm of building computer simulations of human neurons, then called neural nets, began to regain it's popularity. One observer wrote in 1988:

Once upon a time two daughter sciences were born to the new science of cybernetics. One sister was natural,

with features inherited from the study of the brain, from the way nature does things. The other was artificial,

related from the beginning to the use of computers. Each of the sister sciences tried to build models of

intelligence, but from very different materials. The natural sister built models (called neural networks) out of

mathematically purified neurones. The artificial sister built her models out of computer programs.

In their first bloom of youth the two were equally successful and equally pursued by suitors from other fields

of knowledge. They got on very well together. Their relationship changed in the early sixties when a new

monarch appeared, one with the largest coffers ever seen in the kingdom of the sciences: Lord DARPA, the

Defense Department's Advanced Research Projects Agency. The artificial sister grew jealous and was

determined to keep for herself the access to Lord DARPA's research funds. The natural sister would have to be

slain.

The bloody work was attempted by two staunch followers of the artificial sister, Marvin Minsky and Seymour

Papert, cast in the role of the huntsman sent to slay Snow White and bring back her heart as proof of the deed.

Their weapon was not the dagger but the mightier pen, from which came a book—Perceptrons—purporting to

prove that neural nets could never fill their promise of building models of mind: only computer programs

could do this. Victory seemed assured for the artificial sister. And indeed, for the next decade all the rewards of

the kingdom came to her progeny, of which the family of expert systems did best in fame and fortune.

But Snow White was not dead. What Minsky and Papert had shown the world as proof was not the heart of the

princess, it was the heart of a pig.

The author of the above statement was Seymour Papert. [3] His sardonic allusion to bloody hearts reflects a widespread misunderstanding of the implications of the pivotal theorem in his and Minsky's 1969 book. The theorem demonstrated limitations in the capabilities of a single layer of simulated neurons. If, on the other hand, we place neural nets at multiple levels—having the output of one neural net feed into the next—the range of its competence greatly expands. Moreover, if we combine neural nets with other paradigms, we can make yet greater progress. The heart that Minsky and Papert extracted belonged primarily to the single layer neural net.

Papert's irony also reflects his and Minsky's own considerable contributions to the neural net field. In fact, Minsky started his career with seminal contributions to the concept at Harvard in the 1950s. [4]

But enough of politics. What are the main issues in designing a neural net?

One key issue is the net's topology: the organization of the interneuronal connections. A net organized with multiple levels can make more complex discriminations but is harder to train.

Training the net is the most critical issue. This requires an extensive library of examples of the patterns the net will be expected to recognize, along with the correct identification of each pattern. Each pattern is presented to the net. Typically, those connections that contributed to a correct identification are strengthened (by increasing their associated weight), and those that contributed to an incorrect identification are weakened. This method of strengthening and weakening the connection weights is called back-propagation and is one of several methods used. There is controversy as to how this learning is accomplished in the human brain's neural nets, as there does not appear to be any mechanism by which back-propagation can occur. One method that does appear to be implemented in the human brain is that the mere firing of a neuron increases the neurotransmitter strengths of the synapses it is connected to. Also, neurobiologists have recently discovered that primates, and in all likelihood humans, grow new brain cells throughout life, including adulthood, contradicting an earlier dogma that this was not possible.

Little and Big Hills

A key issue in adaptive algorithms—neural nets and evolutionary algorithms—is often referred to as local versus global optimality: in other words, climbing the closest hill versus finding and climbing the biggest hill. As a neural net learns (by adjusting the connection strengths), or as an evolutionary algorithm evolves (by adjusting the "genetic" code of the simulated organisms), the fit of the solution will improve, until a "locally optimal" solution is found. If we compare this to climbing a hill, these methods are very good at finding the top of a nearby hill, which is the best possible solution within a local area of possible solutions. But sometimes these methods may become trapped at the top of a small hill and fail to see a higher mountain in a different area. In the neural net context, if the neural net has converged on a locally optimal solution, as it tries adjusting any of the connection strengths, the fit becomes worse. But just as a climber might need to come down a small elevation to ultimately climb to a higher point. On a different hill, the neural net (or evolutionary algorithm) might need to make the solution temporarily worse to ultimately find a better one.

One approach to avoiding such a "false" optimal solution (little hill) is to force the adaptive method to do the analysis multiple times starting with very different initial conditions in other words, force it to climb lots of hills, not just one. But even with this approach, the system designer still needs to make sure that the adaptive method hasn't missed an even higher mountain in a yet more distant land.

The Laboratory of Chess

We can gain some insight into the comparison of human thinking and conventional computer approaches by again examining the human and machine approaches to chess. I do this not to belabor the issue of chess playing, but rather because it illustrates a clear contrast. Raj Reddy, Carnegie Mellon University's AI guru, cites studies of chess as playing the same role in artificial intelligence that studies of E. coli play in biology: an ideal laboratory for studying fundamental questions. [5] Computers use their extreme speed to analyze the vast combinations created by the combinatorial explosion of moves and countermoves. While chess programs may use a few other tricks (such as storing the openings of all master chess games in this century and precomputing endgames), they essentially rely on their combination of speed and precision. In comparison, humans, even chess masters, are extremely slow and imprecise. So we precompute all of our chess moves. That's why it takes so long to become a chess master, or the master of any pursuit. Gary Kasparov has spent much of his few decades on the planet studying—and experiencing— chess moves. Researchers have estimated that masters of a nontrivial subject have memorized about fifty thousand such "chunks" of insight.

When Kasparov plays, he, too, generates a tree of moves and countermoves in his head, but limitations in human mental speed and short-term memory limit his mental tree (for each actually played move) to no more than a few hundred board positions, if that. This compares to billions of board positions for his electronic antagonist. So the human chess master is forced to drastically prune his mental tree, eliminating fruitless branches by using his intense pattern-recognition faculties. He matches each board position—actual and imagined—to this database of tens of thousands of previously analyzed situations.

After Kasparov's 1997 defeat, we read a lot about how Deep Blue was just doing massive number crunching, not really "thinking" the way its human rival was doing. One could say that the opposite is the case, that Deep Blue was indeed thinking through the implications of each move and countermoves and that it was Kasparov who did not have time to really think very much during the tournament. Mostly he was just drawing upon his mental database of situations he had thought about long ago. (Of course, this depends on one's notion of thinking, as I discussed in from a library of previously analyzed situations—is to be regarded as true thinking, then why not program our machines to work the same way?

The Third Way

And that's my idea that I alluded to earlier as the third school of thought in evaluating the terminal leaves in a recursive search. Recall that the simple-minded school uses an approach such as adding up piece values to evaluate a particular board position. The complicated-minded school advocates a more elaborate and time-consuming logical analysis. I advocate a third way: combine two simple paradigms—recursive and neural net—by using the neural net to evaluate the board positions at each terminal leaf. The training of a neural net is time-consuming and requires a great deal of computing, but performing a single recognition task on a neural net that has already learned its lessons is very quick, comparable to a simple-minded evaluation. Although fast, the neural net is drawing upon the very extensive amount of time it previously spent learning the material. Since we have every master chess game in this century online, we can use this massive amount of data to train the neural net. This training is done once and offline (that is, not during an actual game). The trained neural net would then be used to evaluate the board positions at each terminal leaf. Such a system would combine the millionfold advantage in speed that computers have with the more humanlike ability to recognize patterns against a lifetime of experience.

I proposed this approach to Murray Campbell, head of the Deep Blue team, and he found it intriguing and appealing. He was getting tired anyway, he admitted, of tuning the leaf evaluation algorithm by hand. We talked about setting up an advisory team to implement this idea, but then IBM canceled the whole chess project. I do believe that one of the keys to emulating the diversity of human intelligence is optimally to combine fundamental paradigms. We'll talk about how to fold in the paradigm of evolutionary algorithms below.

MATHLESS "PSEUDO CODE"

FOR THE NEURAL NET ALGORITHM

Here is the basic schema for a neural net algorithm. Many variations are possible, and the designer of the system needs to provide certain critical parameters and methods, detailed below.

The Neural Net Algorithm

Creating a neural net solution to a problem involves the following steps:

- Define the input.
- Define the topology of the neural net (i.e., the layers of neurons and the connections between
the neurons).

- Train the neural net on examples of the problem.
- Run the trained neural net to solve new examples of the problem.
- Take your neural net company public.
These steps (except for the last one) are detailed below:

The Problem Input The problem input to the neural net consists of a series of numbers. This input can be:

- in a visual pattern-recognition system: a two-dimensional array of numbers representing the
pixels of an image; or

- in an auditory (e.g., speech) recognition system: a two-dimensional array of numbers
representing a sound, in which the first dimension represents parameters of the sound (e.g.,

frequency components) and the second dimension represents different points in time; or

- in an arbitrary pattern recognition system: an n-dimensional array of numbers representing the
input pattern.

Defining the Topology To set up the neural net: The architecture of each neuron consists of:

- Multiple inputs in which each input is "connected" to either the output of another neuron or one
of the input numbers.

- Generally, a single output, which is connected either to the input of another neuron (which is
usually in a higher layer) or to the final output.

Set up the first layer of neurons:

- Create N0 neurons in the first layer. For each of these neurons, "connect" each of the multiple
inputs of the neuron to "points" (i.e., numbers) in the problem input. These connections can be

determined randomly or using an evolutionary algorithm (see below).

- Assign an initial "synaptic strength" to each connection created. These weights can start out all
the same, can be assigned randomly, or can be determined in another way (see below).

Set up the additional layers of neurons:

Set up a total of M layers of neurons. For each layer, set up the neurons in that layer.

For layeri:

- Create Ni neurons in layeri. For each of these neurons, "connect" each of the multiple inputs of
the neuron to the outputs of the neurons in layeri-1: (see variations below).

- Assign an initial "synaptic strength" to each connection created. These weights can start out all
the same, can be assigned randomly, or can be determined in another way (see below).

- The outputs of the neurons in layerM are the outputs of the neural net (see variations below).
The Recognition Trials How each neuron works: Once the neuron is set up, it does the following for each recognition trial.

- Each weighted input to the neuron is computed by multiplying the output of the other neuron (or
initial input) that the input to this neuron is connected to by the synaptic strength of that

connection.

- All of these weighted inputs to the neuron are summed.
- If this sum is greater than the firing threshold of this neuron, then this neuron is considered to
"fire" and its output is 1. Otherwise, its output is 0 (see variations below).

Do the following for each recognition trial: For each layer, from layers to layerM:

And for each neuron in each layer:

- Sum its weighted inputs (each weighted input = the output of the other neuron [or initial input]
that the input to this neuron is connected to, multiplied by the synaptic strength of that

connection).

- If this sum of weighted inputs is greater than the firing threshold for this neuron, set the output
of this neuron = 1, otherwise set it to 0.

To Train the Neural Net

- Run repeated recognition trials on sample problems.
- After each trial, adjust the synaptic strengths of all the interneuronal connections to improve the
performance of the neural net on this trial (see the discussion below on how to do this).

- Continue this training until the accuracy rate of the neural net is no longer improving (i.e.,
reaches an asymptote).

Key Design Decisions In the simple schema above, the designer of this neural net algorithm needs to determine at the outset:

- What the input numbers represent.
- The number of layers of neurons.
- The number of neurons in each layer (each layer does not necessarily need to have the same
number of neurons).

- The number of inputs to each neuron, in each layer. The number of inputs (i.e., interneuronal
connections) can also vary from neuron to neuron, and from layer to layer.

- The actual "wiring" (i.e., the connections). For each neuron, in each layer, this consists of a list
of other neurons, the outputs of which constitute the inputs to this neuron. This represents a key

design area. There are a number of possible ways to do this:

(i) wire the neural net randomly; or

(ii) use an evolutionary algorithm (see next section of this Appendix) to determine an optimal

wiring; or

(iii) use the system designer's best judgment in determining the wiring.

- The initial synaptic strengths (i.e., weights) of each connection. There are a number of possible
ways to do this:

(i) set the synaptic strengths to the same value; or

(ii) set the synaptic strengths to different random values; or

(iii) use an evolutionary algorithm to determine an optimal set of initial values; or

(iv) use the system designer's best judgment in determining the initial values.

- The firing threshold of each neuron.
- Determine the output. The output can be:
(i) the outputs of layer sub M of neurons; or

(ii) the output of a single output neuron, whose inputs are the outputs of the neurons in layer

sub M;

(iii) a function of (e.g., a sum of) the outputs of the neurons in layer sub M; or

(iv) another function of neuron outputs in multiple layers.

- Determine how the synaptic strengths of all the connections are adjusted during the training of
this neural net. This is a key design decision and the subject of a great deal of neural net

research and discussion. There are a number of possible ways to do this:

(i) For each recognition trial, increment or decrement each synaptic strength by a (generally

small) fixed amount so that the neural net's output more closely matches the correct answer.

One way to do this is to try both incrementing and decrementing and see which has the more

desirable effect. This can be time consuming, so other methods exist for making local

decisions on whether to increment or decrement each synaptic strength.

(ii) Other statistical methods exist for modifying the synaptic strengths after each recognition trial

so that the performance of the neural net on that trial more closely matches the correct

answer.

Note that neural net training will work even if the answers to the training trials are not all correct. This allows using real-world training data that may have an inherent error rate. One key to the success of a neural net-based recognition system is the amount of data used for training. Usually a very substantial amount is needed to obtain satisfactory results. Just like human students, the amount of time that a neural net spends learning its lessons is a key factor in its performance.

Variations Many variations of the above are feasible. Some variations include:

- There are different ways of determining the topology, as described above. In particular, the
interneuronal wiring can be set either randomly or using an evolutionary algorithm.

- There are different ways of setting the initial synaptic strengths, as described above.
- The inputs to the neurons in layer sub i do not necessarily need to come from the outputs of the
neurons in layer sub i minus 1. Alternatively, the inputs to the neurons in each layer can come

from any lower layer or any layer.

- There are different ways to determine the final output, as described above.
- For each neuron, the method described above compares the sum of the weighted inputs to the
threshold for that neuron. If the threshold is exceeded, the neuron fires and its output is 1.

Otherwise, its output is 0. This "all or nothing" firing is called a nonlinearity. There are other

nonlinear functions that can be used. Commonly a function is used that goes from 0 to 1 in a

rapid but more gradual fashion (than all or nothing). Also, the outputs can be numbers other

than 0 and 1.

- The different methods for adjusting the synaptic strengths during training, briefly described
above, represent a key design decision.

- The above schema describes, a "synchronous" neural net, in which each recognition trial
proceeds by computing the outputs of each layer, starting with layer sub O through layer sub M.

In a true parallel system, in which each neuron is operating independently of the others, the

neurons can operate asynchronously (i.e., independently). In an asynchronous approach, each

neuron is constantly scanning its inputs and fires (i.e., changes its output from 0 to 1) whenever

the sum of its weighted inputs exceeds its threshold (or, alternatively, using another nonlinear

output function).

Happy Adaptation!

EVOLUTIONARY ALGORITHMS

If biologists have ignored self-organization, it is not because self-ordering is not pervasive and profound. It is because

we biologists have yet to understand how to think about systems governed simultaneously by two sources of order.

Yet who seeing the snowflake, who seeing simple lipid molecules cast adrift in water forming themselves into cell-like

hollow lipid vesicles, who seeing the potential for the crystallization of life in swarms of reacting molecules, who

seeing the stunning order in networks linking tens upon tens of thousands of variables, can fail to entertain a central

thought: if ever we are to attain a final theory in biology, we will surely have to understand the commingling of self-

organization and selection. We will have to see that we are the natural expressions of a deeper order. Ultimately, we

will discover in our creation myth that we are expected after all.

—Stuart Kauffman

As I discussed earlier, an evolutionary algorithm involves a simulated environment in which simulated software "creatures" compete for survival and the right to reproduce. Each software creature represents a possible solution to a problem encoded in its digital "DNA."

The creatures allowed to survive and reproduce into the next generation are the ones that do a better job of solving the problem. Evolutionary algorithms are considered to be part of a class of "emergent" methods because the solutions emerge gradually and usually cannot be predicted by the designers of the system. Evolutionary algorithms are particularly powerful when they are combined with our other paradigms. Here is a unique way of combining all of our "intelligent" paradigms.

Combining All Three Paradigms

The human genome contains three billion rungs of base pairs, which equals six billion bits of data. With a little data compression, your genetic code will fit on a single CD-ROM. You can store your whole family on a DVD (digital video disc). But your brain has 100 trillion "wires," which would require about 3,000 trillion bits to represent. How did the mere 12 billion bits of data in your chromosomes (with contemporary estimates indicating that only 3 percent of that is active) designate the wiring of your brain, which constitutes about a quarter million times more information?

Obviously the genetic code does not specify the exact wiring. I said earlier that we can wire a neural net randomly and obtain satisfactory results. That's true, but there is a better way to do it, and that is to use evolution. I am not referring to the billions of years of evolution that produced the human brain. I am referring to the months of evolution that go on during gestation and early childhood. Early in our lives, our interneuronal connections are engaged in a fight for survival. Those that make better sense of the world survive. By late childhood, these connections become relatively fixed, which is why it is worthwhile exposing babies and young children to a stimulating environment. Otherwise, this evolutionary process runs out of real-world chaos from which to draw inspiration.

We can do the same thing with our synthetic neural nets: use an evolutionary algorithm to determine the optimal wiring. This is exactly what the Kyoto Advanced Telecommunications Research Lab's ambitious brain-building project is doing.

Now here's how you can intelligently solve a challenging problem using all three paradigms. First, carefully state your problem. This is actually the hardest step. Most people try to solve problems without bothering to understand what the problem is all about. Next, analyze the logical contours of your problem recursively by searching through as many combinations of elements (for example, moves in a game, steps in a solution) that you and your computer have the patience to sort through. For the terminal leaves of this recursive expansion of possible solutions,. evaluate them with a neural net. For the optimal topology of your neural net, determine this using an evolutionary algorithm. And if all of this doesn't work, then you have a difficult problem, indeed.

"PSEUDO CODE" FOR THE

EVOLUTIONARY ALGORITHM

Here is the basic schema for an evolutionary algorithm. Many variations are possible, and the designer of the system needs to provide certain critical parameters and methods, detailed below.

THE EVOLUTIONARY ALGORITHM

Create N solution "creatures" Each one has:

- A genetic code—a sequence of numbers that characterizes a possible solution to the problem.
The numbers can represent critical parameters, steps to a solution, rules, etc.

For each generation of evolution, do the following:

- Do the following for each of the N solution creatures:
(i) Apply this solution creature's solution (as represented by its genetic code) to the problem, or

simulated environment.

(ii) Rate the solution.

- Pick the L solution creatures with the highest ratings to survive into the next generation.
- Eliminate the (N - L) nonsurviving solution creatures.
- Create (N - L) new solution creatures from the L surviving solution creatures by:
(i) making copies of the L surviving creatures. Introduce small random variations into each

copy; or

(ii) create additional solution creatures by combining parts of the genetic code (using "sexual"

reproduction, or otherwise combining portions of the chromosomes) from the L surviving

creatures; or

(iii) doing a combination of (i) and (ii) above.

- Determine whether or not to continue evolving:
Improvement = (highest rating in this generation) - (highest rating in the previous generation)

If improvement < Improvement Threshold, then we're done

- The Solution Creature with the highest rating from the last generation of evolution has
the best solution. Apply the solution defined by its genetic code to the problem.

Key Design Decisions In the simple schema above, the designer of this evolutionary algorithm needs to determine at the outset:

- Key parameters:
Improvement Threshold

- What the numbers in the genetic code represent and how the solution is computed from the
genetic code.

- A method for determining the N solution creatures in the first generation. In general, these need
only be "reasonable" attempts at a solution. If these first-generation solutions are too far afield,

the evolutionary algorithm may have difficulty converging on a good solution. It is often

worthwhile to create the initial solution creatures in such a way that they are reasonably diverse.

This will help prevent the evolutionary process from just finding a "locally" optimal solution.

- How the solutions are rated.
- How the surviving solution creatures reproduce.
Variations Many variations of the above are feasible. Some variations include:

- There does not need to be a fixed number of surviving solution creatures (i.e., "L") from each
generation. The survival rule(s) can allow for a variable number of survivors.

- There does not need to be a fixed number of new solution creatures created in each generation
(i.e., [N - L]). The procreation rules can be independent of the size of the population. Procreation

can be related to survival, thereby allowing the fittest solution creatures to procreate the most.

- The decision as to whether or not to continue evolving can be varied. It can consider more than
just the highest-rated solution creature from the most recent generations). It can also consider a

trend that goes beyond just the last two generations.

Happy Evolving!
