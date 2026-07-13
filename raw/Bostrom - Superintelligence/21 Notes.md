---
book: "Superintelligence: Paths, Dangers, Strategies"
author: "Nick Bostrom"
part: "Notes"
source_pages: "261–304"
type: source
---

# Notes

## Notes to Chapter 1: Past developments and present capabilities

1. A subsistence-level income today is about $400 (Chen and Ravallion 2010). A million subsistence-level incomes is thus $400,000,000. The current world gross product is about $60,000,000,000,000 and in recent years has grown at an annual rate of about 4% (compound annual growth rate since 1950, based on Maddison [2010]). These figures yield the estimate mentioned in the text, which of course is only an order-of-magnitude approximation. If we look directly at population figures, we find that it currently takes the world population about one and a half weeks to grow by one million; but this underestimates the growth rate of the economy since per capita income is also increasing. By 5000 bc, following the Agricultural Revolution, the world population was growing at a rate of about 1 million per 200 years—a great acceleration since the rate of perhaps 1 million per million years in early humanoid prehistory—so a great deal of acceleration had already occurred by then. Still, it is impressive that an amount of economic growth that took 200 years seven thousand years ago takes just ninety minutes now, and that the world population growth that took two centuries then takes one and a half weeks now. See also Maddison (2005).

2. Such dramatic growth and acceleration might suggest one notion of a possible coming “singularity,” as adumbrated by John von Neumann in a conversation with the mathematician Stanislaw Ulam: Our conversation centred on the ever accelerating progress of technology and changes in the mode of human life, which gives the appearance of approaching some essential singularity in the history of the race beyond which human affairs, as we know them, could not continue. (Ulam 1958)

3. Hanson (2000).

4. Vinge (1993); Kurzweil (2005).

5. Sandberg (2010).

6. Van Zanden (2003); Maddison (1999, 2001); De Long (1998).

7. Two oft-repeated optimistic statements from the 1960s: “Machines will be capable, within twenty years, of doing any work a man can do” (Simon 1965, 96); “Within a generation . . . the problem of creating artificial intelligence will substantially be solved” (Minsky 1967, 2). For a systematic review of AI predictions, see Armstrong and Sotala (2012).

8. See, for example, Baum et al. (2011) and Armstrong and Sotala (2012).

9. It might suggest, however, that AI researchers know less about development timelines than they think they do—but this could cut both ways: they might overestimate as well as underestimate the time to AI.

10. Good (1965, 33).

11. One exception is Norbert Wiener, who did have some qualms about the possible consequences. He wrote, in 1960: “If we use, to achieve our purposes, a mechanical agency with whose operation we cannot efficiently interfere once we have started it, because the action is so fast and irrevocable that we have not the data to intervene before the action is complete, then we had better be quite sure that the purpose put into the machine is the purpose which we really desire and not merely a colourful imitation of it” (Wiener 1960). Ed Fredkin spoke about his worries about superintelligent AI in an interview described in McCorduck (1979). By 1970, Good himself writes about the risks, and even calls for the creation of an association to deal with the dangers (Good [1970]; see also his later article [Good 1982] where he foreshadows some of the ideas of “indirect normativity” that we discuss in Chapter 13). By 1984, Marvin Minsky was also writing about many of the key worries (Minsky 1984).

12. Cf. Yudkowsky (2008a). On the importance of assessing the ethical implications of potentially dangerous future technologies before they become feasible, see Roache (2008).

13. McCorduck (1979).

14. Newell et al. (1959).

15. The SAINTS program, the ANALOGY program, and the STUDENT program, respectively. See Slagle (1963), Evans (1964, 1968), and Bobrow (1968).

16. Nilsson (1984).

17. Weizenbaum (1966).

18. Winograd (1972).

19. Cope (1996); Weizenbaum (1976); Moravec (1980); Thrun et al. (2006); Buehler et al. (2009); Koza et al. (2003). The Nevada Department of Motor Vehicles issued the first license for a driverless car in May 2012.

20. The STANDUP system (Ritchie et al. 2007).

21. Schwartz (1987). Schwartz is here characterizing a skeptical view that he thought was represented by the writings of Hubert Dreyfus.

22. One vocal critic during this period was Hubert Dreyfus. Other prominent skeptics from this era include John Lucas, Roger Penrose, and John Searle. However, among these only Dreyfus was mainly concerned with refuting claims about what practical accomplishments we should expect from existing paradigms in AI (though he seems to have been open to the possibility that new paradigms could go further). Searle’s target was functionalist theories in the philosophy of mind, not the instrumental powers of AI systems. Lucas and Penrose denied that a classical computer could ever be programmed to do everything that a human mathematician can do, but they did not deny that any particular function could in principle be automated or that AIs might eventually become very instrumentally powerful. Cicero remarked that “there is nothing so absurd but some philosopher has said it” (Cicero 1923, 119); yet it is surprisingly hard to think of any significant thinker who has denied the possibility of machine superintelligence in the sense used in this book.

23. For many applications, however, the learning that takes place in a neural network is little different from the learning that takes place in linear regression, a statistical technique developed by Adrien-Marie Legendre and Carl Friedrich Gauss in the early 1800s.

24. The basic algorithm was described by Arthur Bryson and Yu-Chi Ho as a multi-stage dynamic optimization method in 1969 (Bryson and Ho 1969). The application to neural networks was suggested by Paul Werbos in 1974 (Werbos 1994), but it was only after the work by David Rumelhart, Geoffrey Hinton, and Ronald Williams in 1986 (Rumelhart et al. 1986) that the method gradually began to seep into the awareness of a wider community.

25. Nets lacking hidden layers had previously been shown to have severely limited functionality (Minsky and Papert 1969).

26. E.g., MacKay (2003).

27. Murphy (2012). 2 8. Pearl (2009).

29. We suppress various technical details here in order not to unduly burden the exposition. We will have occasion to revisit some of these ignored issues in Chapter 12.

30. A program p is a description of string x if p, run on (some particular) universal Turing machine U, outputs x; we write this as U(p) = x. (The string x here represents a possible world.) The Kolmogorov complexity of x is then K(x) := min {ℓ(p) : U(p) = x}, where ℓ(p) is the length of p in p bits. The “Solomonoff” probability of x is then defined as M(x) :=∑ 2−ℓ(p), where the sum is p:U(p)=x defined over all (“minimal,” i.e. not necessarily halting) programs p for which U outputs a string starting with x (Hutter 2005).

31. Bayesian conditioning on evidence E gives P (Ew)P (w)) P (w)=P (wE)= prior prior . posterior prior P (w) prior (The probability of a proposition [like E] is the sum of the probability of the possible worlds in which it is true.)

32. Or randomly picks one of the possible actions with the highest expected utility, in case there is a tie.

33. More concisely, the expected utility of an action can be written as EU(a)= ∑U(w)P(w|a), where the sum is over all possible worlds. w∈

34. See, e.g., Howson and Urbach (1993); Bernardo and Smith (1994); Russell and Norvig (2010).

35. Wainwright and Jordan (2008). The application areas of Bayes nets are myriad; see, e.g., Pourret et al. (2008).

36. One might wonder why so much detail is given to game AI here, which to some might seem like an unimportant application area. The answer is that game-playing offers some of the clearest measures of human vs. AI performance.

37. Samuel (1959); Schaeffer (1997, ch. 6).

38. Schaeffer et al. (2007).

39. Berliner (1980a, b).

40. Tesauro (1995).

41. Such programs include GNU (see Silver [2006]) and Snowie (see Gammoned.net [2012]).

42. Lenat himself had a hand in guiding the fleet-design process. He wrote: “Thus the final crediting of the win should be about 60/40% Lenat/Eurisko, though the significant point here is that neither party could have won alone” (Lenat 1983, 80).

43. Lenat (1982, 1983).

44. Cirasella and Kopec (2006).

45. Kasparov (1996, 55).

46. Newborn (2011).

47. Keim et al. (1999).

48. See Armstrong (2012).

49. Sheppard (2002).

50. Wikipedia (2012a).

51. Markoff (2011).

52. Rubin and Watson (2011).

53. Elyasaf et al. (2011).

54. KGS (2012).

55. Newell et al. (1958, 320).

56. Attributed in Vardi (2012).

57. In 1976, I. J. Good wrote: “A computer program of Grandmaster strength would bring us within an ace of [machine ultra-intelligence]” (Good 1976). In 1979, Douglas Hofstadter opined in his Pulitzer-winning Gödel, Escher, Bach: “Question: Will there be chess programs that can beat anyone? Speculation: No. There may be programs that can beat anyone at chess, but they will not be exclusively chess programs. They will be programs of general intelligence, and they will be just as temperamental as people. ‘Do you want to play chess?’ ‘No, I’m bored with chess. Let’s talk about poetry’ ” (Hofstadter [1979] 1999, 678).

58. The algorithm is minimax search with alpha-beta pruning, used with a chess-specific heuristic evaluation function of board states. Combined with a good library of openings and endgames, and various other tricks, this can make for a capable chess engine.

59. Though especially with recent progress in learning the evaluation heuristic from simulated games, many of the underlying algorithms would probably also work well for many other games.

60. Nilsson (2009, 318). Knuth was certainly overstating his point. There are many “thinking tasks” that AI has not succeeded in doing—inventing a new subfield of pure mathematics, doing any kind of philosophy, writing a great detective novel, engineering a coup d’état, or designing a major new consumer product.

61. Shapiro (1992).

62. One might speculate that one reason it has been difficult to match human abilities in perception, motor control, common sense, and language understanding is that our brains have dedicated wetware for these functions—neural structures that have been optimized over evolutionary timescales. By contrast, logical thinking and skills like chess playing are not natural to us; so perhaps we are forced to rely on a limited pool of general-purpose cognitive resources to perform these tasks. Maybe what our brains do when we engage in explicit logical reasoning or calculation is in some ways analogous to running a “virtual machine,” a slow and cumbersome mental simulation of a general-purpose computer. One might then say (somewhat fancifully) that a classical AI program is not so much emulating human thinking as the other way around: a human who is thinking logically is emulating an AI program.

63. This example is controversial: a minority view, represented by approximately 20% of adults in the USA and similar numbers in many other developed nations, holds that the Sun revolves around the Earth (Crabtree 1999; Dean 2005).

64. World Robotics (2011).

65. Estimated from data in Guizzo (2010). 6 6. Holley (2009).

67. Hybrid rule-based statistical approaches are also used, but they are currently a small part of the picture.

68. Cross and Walker (1994); Hedberg (2002).

69. Based on the statistics from TABB Group, a New York- and London-based capital markets research firm (personal communication).

70. CFTC and SEC (2010). For a different perspective on the events of 6 May 2010, see CME Group

71. Nothing in the text should be construed as an argument against algorithmic high-frequency trading, which might normally perform a beneficial function by increasing liquidity and market efficiency.

72. A smaller market scare occurred on August, 1, 2012, in part because the “circuit breaker” was not also programmed to halt trading if there were extreme changes in the number of shares being traded (Popper 2012). This again foreshadows another later theme: the difficulty of anticipating all specific ways in which some particular plausible-seeming rule might go wrong.

73. Nilsson (2009, 319).

74. Minsky (2006); McCarthy (2007); Beal and Winston (2009).

75. Peter Norvig, personal communication. Machine-learning classes are also very popular, reflecting a somewhat orthogonal hype-wave of “big data” (inspired by e.g. Google and the Netflix Prize).

76. Armstrong and Sotala (2012).

77. Müller and Bostrom (forthcoming).

78. See Baum et al. (2011), another survey cited therein, and Sandberg and Bostrom (2011).

79. Nilsson (2009).

80. This is again conditional on no civilization-disrupting catastrophe occurring. The definition of HLMI used by Nilsson is “AI able to perform around 80% of jobs as well or better than humans perform” (Kruel 2012).

81. The table shows the results of four different polls as well as the combined results. The first two were polls taken at academic conferences: PT-AI, participants of the conference Philosophy and Theory of AI in Thessaloniki 2011 (respondents were asked in November 2012), with a response rate of 43 out of 88; and AGI, participants of the conferences Artificial General Intelligence and Impacts and Risks of Artificial General Intelligence, both in Oxford, December 2012 (response rate: 72/111). The EETN poll sampled the members of the Greek Association for Artificial Intelligence, a professional organization of published researchers in the field, in April 2013 (response rate: 26/250). The TOP100 poll elicited the opinions among the 100 top authors in artificial intelligence as measured by a citation index, in May 2013 (response rate: 29/100).

82. Interviews with some 28 (at the time of writing) AI practitioners and related experts have been posted by Kruel (2011).

83. The diagram shows renormalized median estimates. Means are significantly different. For example, the mean estimates for the “Extremely bad” outcome were 7.6% (for TOP100) and 17.2% (for the combined pool of expert assessors).

84. There is a substantial literature documenting the unreliability of expert forecasts in many domains, and there is every reason to think that many of the findings in this body of research apply to the field of artificial intelligence too. In particular, forecasters tend to be overconfident in their predictions, believing themselves to be more accurate than they really are, and therefore assigning too little probability to the possibility that their most-favored hypothesis is wrong (Tetlock 2005). (Various other biases have also been documented; see, e.g., Gilovich et al. [2002].) However, uncertainty is an inescapable fact of the human condition, and many of our actions unavoidably rely on expectations about which long-term consequences are more or less plausible: in other words, on probabilistic predictions. Refusing to offer explicit probabilistic predictions would not make the epistemic problem go away; it would just hide it from view (Bostrom 2007). Instead, we should respond to evidence of overconfidence by broadening our confidence intervals (or “credible intervals”)—i.e. by smearing out our credence functions—and in general we must struggle as best we can with our biases, by considering different perspectives and aiming for intellectual honesty. In the longer run, we can also work to develop techniques, training methods, and institutions that can help us achieve better calibration. See also Armstrong and Sotala (2012).

## Notes to Chapter 2: Paths to superintelligence

1. This resembles the definition in Bostrom (2003c) and Bostrom (2006a). It can also be compared with Shane Legg’s definition (“Intelligence measures an agent’s ability to achieve goals in a wide range of environments”) and its formalizations (Legg 2008). It is also very similar to Good’s definition of ultraintelligence in Chapter 1 (“a machine that can far surpass all the intellectual activities of any man however clever”).

2. For the same reason, we make no assumption regarding whether a superintelligent machine could have “true intentionality” (pace Searle, it could; but this seems irrelevant to the concerns of this book). And we take no position in the internalism/externalism debate about mental content that has been raging in the philosophical literature, or on the related issue of the extended mind thesis (Clark and Chalmers 1998).

3. Turing (1950, 456).

4. Turing (1950, 456).

5. Chalmers (2010); Moravec (1976, 1988, 1998, 1999).

6. See Moravec (1976). A similar argument is advanced by David Chalmers (2010).

7. See also Shulman and Bostrom (2012), where these matters are elaborated in more detail.

8. Legg (2008) offers this reason in support of the claim that humans will be able to recapitulate the progress of evolution over much shorter timescales and with reduced computational resources (while noting that evolution’s unadjusted computational resources are far out of reach). Baum (2004) argues that some developments relevant to AI occurred earlier, with the organization of the genome itself embodying a valuable representation for evolutionary algorithms.

9. Whitman et al. (1998); Sabrosky (1952).

10. Schultz (2000).

11. Menzel and Giurfa (2001, 62); Truman et al. (1993).

12. Sandberg and Bostrom (2008).

13. See Legg (2008) for further discussion of this point and of the promise of functions or environments that determine fitness based on a smooth landscape of pure intelligence tests.

14. See Bostrom and Sandberg (2009b) for a taxonomy and more detailed discussion of ways in which engineers may outperform historical evolutionary selection.

15. The analysis has addressed the nervous systems of living creatures, without reference to the cost of simulating bodies or the surrounding virtual environment as part of a fitness function. It is plausible that an adequate fitness function could test the competence of a particular organism in far fewer operations than it would take to simulate all the neuronal computation of that organism’s brain throughout its natural lifespan. AI programs today often develop and operate in very abstract environments (theorem provers in symbolic math worlds, agents in simple game tournament worlds, etc.). A skeptic might insist that an abstract environment would be inadequate for the evolution of general intelligence, believing instead that the virtual environment would need to closely resemble the actual biological environment in which our ancestors evolved. Creating a physically realistic virtual world would require a far greater investment of computational resources than the simulation of a simple toy world or abstract problem domain (whereas evolution had access to a physically realistic real world “for free”). In the limiting case, if complete micro-physical accuracy were insisted upon, the computational requirements would balloon to ridiculous proportions. However, such extreme pessimism is almost certainly unwarranted; it seems unlikely that the best environment for evolving intelligence is one that mimics nature as closely as possible. It is, on the contrary, plausible that it would be more efficient to use an artificial selection environment, one quite unlike that of our ancestors, an environment specifically designed to promote adaptations that increase the type of intelligence we are seeking to evolve (abstract reasoning and general problem-solving skills, for instance, as opposed to maximally fast instinctual reactions or a highly optimized visual system).

16. Wikipedia (2012b).

17. For a general treatment of observation selection theory, see Bostrom (2002a). For the specific application to the current issue, see Shulman and Bostrom (2012). For a short popular introduction, see Bostrom (2008b).

18. Sutton and Barto (1998, 21f); Schultz et al. (1997).

19. This term was introduced by Eliezer Yudkowsky; see, e.g., Yudkowsky (2007).

20. This is the scenario described by Good (1965) and Yudkowsky (2007). However, one could also consider an alternative in which the iterative sequence has some steps that do not involve intelligence enhancement but instead design simplification. That is, at some stages, the seed AI might rewrite itself so as make subsequent improvements easier to find.

21. Helmstaedter et al. (2011).

22. Andres et al. (2012).

23. Adequate for enabling instrumentally useful forms of cognitive functioning and communication, that is; but still radically impoverished relative to the interface provided by the muscles and sensory organs of a normal human body.

24. Sandberg (2013).

25. See the “Computer requirements” section of Sandberg and Bostrom (2008, 79–81).

26. A lower level of success might be a brain simulation that has biologically suggestive microdynamics and displays a substantial range of emergent species-typical activity such as a slowwave sleep state or activity-dependent plasticity. Whereas such a simulation could be a useful testbed for neuroscientific research (though one which might come close to raising serious ethical issues), it would not count as a whole brain emulation unless the simulation were sufficiently accurate to be able to perform a substantial fraction of the intellectual work that the simulated brain was capable of. As a rule of thumb, we might say that in order for a simulation of a human brain to count as a whole brain emulation, it would need to be able to express coherent verbal thoughts or have the capacity to learn to do so.

27. Sandberg and Bostrom (2008).

28. Sandberg and Bostrom (2008). Further explanation can be found in the original report.

29. The first map is described in Albertson and Thomson (1976) and White et al. (1986). The combined (and in some cases corrected) network is available from the “WormAtlas” website (http:// www.wormatlas.org/).

30. For a review of past attempts of emulating C. elegans and their fates, see Kaufman (2011). Kaufman quotes one ambitious doctoral student working in the area, David Dalrymple, as saying, “With optogenetic techniques, we are just at the point where it’s not an outrageous proposal to reach for the capability to read and write to anywhere in a living C. elegans nervous system, using a high-throughput automated system. . . . I expect to be finished with C. elegans in 2–3 years. I would be extremely surprised, for whatever that’s worth, if this is still an open problem in 2020” (Dalrymple 2011). Brain models aiming for biological realism that were hand-coded (rather than generated automatically) have achieved some basic functionality; see, e.g., Eliasmith et al. (2012).

31. Caenorhabditis elegans does have some convenient special properties. For example, the organism is transparent, and the wiring pattern of its nervous system does not change between individuals.

32. If neuromorphic AI rather than whole brain emulation is the end product, then it might or might not be the case that the relevant insights would be derived through attempts to simulate human brains. It is conceivable that the important cortical tricks would be discovered during the study of (nonhuman) animal brains. Some animal brains might be easier to work with than human brains, and smaller brains would require fewer resources to scan and model. Research on animal brains would also be subject to less regulation. It is even conceivable that the first human- level machine intelligence will be created by completing a whole brain emulation of some suitable animal and then finding ways to enhance the resultant digital mind. Thus humanity could get its comeuppance from an uplifted lab mouse or macaque.

33. Uauy and Dangour (2006); Georgieff (2007); Stewart et al. (2008); Eppig et al. (2010); Cotman and Berchtold (2002).

34. According to the World Health Organization in 2007, nearly 2 billion individuals have insufficient iodine intake (The Lancet 2008). Severe iodine deficiency hinders neurological development and leads to cretinism, which involves an average loss of about 12.5 IQ points (Qian et al. 2005). The condition can be easily and inexpensively prevented though salt fortification (Horton et al. 2008).

35. Bostrom and Sandberg (2009a).

36. Bostrom and Sandberg (2009b). A typical putative performance increase from pharmacological and nutritional enhancement is in the range of 10–20% on test tasks measuring working memory, attention, etc. But it is generally dubious whether such reported gains are real, sustainable over a longer term, and indicative of correspondingly improved results in real-world problem situations (Repantis et al. 2010). For instance, in some cases there might be a compensating deterioration on some performance dimensions that are not measured by the test tasks (Sandberg and Bostrom 2006).

37. If there were an easy way to enhance cognition, one would expect evolution already to have taken advantage of it. Consequently, the most promising kind of nootropic to investigate may be one that promises to boost intelligence in some manner that we can see would have lowered fitness in the ancestral environment—for example, by increasing head size at birth or amping up the brain’s glucose metabolism. For a more detailed discussion of this idea (along with several important qualifications), see Bostrom (2009b).

38. Sperm are harder to screen because, in contrast to embryos, they consist of only one cell—and one cell needs to be destroyed in order to do the sequencing. Oocytes also consist of only one cell; however, the first and second cell divisions are asymmetric and produce one daughter cell with very little cytoplasm, the polar body. Since polar bodies contain the same genome as the main cell and are redundant (they eventually degenerate) they can be biopsied and used for screening (Gianaroli 2000).

39. Each of these practices was subject to some ethical controversy when it was introduced, but there seems to be a trend toward increasing acceptance. Attitudes toward human genetic engineering and embryo selection vary significantly across cultures, suggesting that development and application of new techniques will probably take place even if some countries initially adopt a cautious stance, although the rate at which this happens will be influenced by moral, religious, and political pressures.

40. Davies et al. (2011); Benyamin et al. (2013); Plomin et al. (2013). See also Mardis (2011); Hsu

41. Broad-sense heritability of adult IQ is usually estimated in the range of 0.5–0.8 within middleclass strata of developed nations (Bouchard 2004, 148). Narrow-sense heritability, which measures the portion of variance that is attributable to additive genetic factors, is lower (in the range 0.3–0.5) but still substantial (Devlin et al. 1997; Davies et al. 2011; Visscher et al. 2008). These estimates could change for different populations and environments, as heritabilities vary depending on the population and environment being studied. For example, lower heritabilities have been found among children and those from deprived environments (Benyamin et al. 2013; Turkheimer et al. 2003). Nisbett et al. (2012) review numerous environmental influences on variation in cognitive ability.

42. The following several paragraphs draw heavily on joint work with Carl Shulman (Shulman and Bostrom 2014).

43. This table is taken from Shulman and Bostrom (2014). It is based on a toy model that assumes a Gaussian distribution of predicted IQs among the embryos with a standard deviation of 7.5 points. The amount of cognitive enhancement that would be delivered with different numbers of embryos depends on how different the embryos are from one another in the additive genetic variants whose effects we know. Siblings have a coefficient of relatedness of ½, and common additive genetic variants account for half or less of variance in adult fluid intelligence (Davies et al. 2011). These two facts suggest that where the observed population standard deviation in developed countries is 15 points, the standard deviation of genetic influences within a batch of embryos would be 7.5 points or less.

44. With imperfect information about the additive genetic effects on cognitive ability, effect sizes would be reduced. However, even a small amount of knowledge would go a relatively long way, because the gains from selection do not scale linearly with the portion of variance that we can predict. Instead, the effectiveness of our selection depends on the standard deviation of predicted mean IQ, which scales as the square root of variance. For example, if one could account for 12.5% of the variance, this could deliver effects half as great as those in Table 1, which assume 50%. For comparison, a recent study (Rietveld et al. 2013) claims to have already identified 2.5% of the variance.

45. For comparison, standard practice today involves the creation of fewer than ten embryos.

46. Adult and embryonic stem cells can be coaxed to develop into sperm cells and oocytes, which can then be fused to produce an embryo (Nagy et al. 2008; Nagy and Chang 2007). Egg cell precursors can also form parthenogenetic blastocysts, unfertilized and non-viable embryos, able to produce embryonic stem cell lines for the process (Mai et al. 2007).

47. The opinion is that of Katsuhiko Hayashi, as reported in Cyranoski (2013). The Hinxton Group, an international consortium of scientists that discusses stem cell ethics and challenges, predicted in 2008 that human stem cell-derived gametes would be available within ten years (Hinxton Group 2008), and developments thus far are broadly consistent with this.

48. Sparrow (2013); Miller (2012); The Uncertain Future (2012).

49. Sparrow (2013).

50. Secular concerns might focus on anticipated impacts on social inequality, the medical safety of the procedure, fears of an enhancement “rat race,” rights and responsibilities of parents visà-vis their prospective offspring, the shadow of twentieth-century eugenics, the concept of human dignity, and the proper limits of states’ involvement in the reproductive choices of their citizens. (For a discussion of the ethics of cognitive enhancement see Bostrom and Ord [2006], Bostrom and Roache [2011], and Sandberg and Savulescu [2011].) Some religious traditions may offer additional concerns, including ones centering on the moral status of embryos or the proper limits of human agency within the scheme of creation.

51. To stave off the negative effects of inbreeding, iterated embryo selection would require either a large starting supply of donors or the expenditure of substantial selective power to reduce harmful recessive alleles. Either alternative would tend to push toward offspring being less closely genetically related to their parents (and more related to one another).

52. Adapted from Shulman and Bostrom (2014).

53. Bostrom (2008b).

54. Just how difficult an obstacle epigenetics will be is not yet known (Chason et al. 2011; Iliadou et al. 2011).

55. While cognitive ability is a fairly heritable trait, there may be few or no common alleles or polymorphisms that individually have a large positive effect on intelligence (Davis et al. 2010; Davies et al. 2011; Rietveld et al. 2013). As sequencing methods improve, the mapping out of low-frequency alleles and their cognitive and behavioral correlates will become increasingly feasible. There is some theoretical evidence suggesting that some alleles that cause genetic disorders in homozygotes may provide sizeable cognitive advantages in heterozygote carriers, leading to a prediction that Gaucher, Tay-Sachs, and Niemann-Pick heterozygotes would be about 5 IQ points higher than control groups (Cochran et al. 2006). Time will tell whether this holds.

56. One paper (Nachman and Crowell 2000) estimates 175 mutations per genome per generation. Another (Lynch 2010), using different methods, estimates that the average newborn has between 50 and 100 new mutations, and Kong et al. (2012) implies a figure of around 77 new mutations per generation. Most of these mutations do not affect functioning, or do so only to an imperceptibly slight degree; but the combined effects of many very slightly deleterious mutations could be a significant loss of fitness. See also Crow (2000).

57. Crow (2000); Lynch (2010).

58. There are some potentially important caveats to this idea. It is possible that the modal genome would need some adjustments in order to avoid problems. For example, parts of the genome might be adapted to interacting with other parts under the assumption that all parts function with a certain level of efficiency. Increasing the efficiency of those parts might then lead to overshooting along some metabolic pathways.

59. These composites were created by Mike Mike from individual photographs taken by Virtual Flavius (Mike 2013).

60. They can, of course, have some effects sooner—for instance, by changing people’s expectations of what is to come.

61. Louis Harris & Associates (1969); Mason (2003).

62. Kalfoglou et al. (2004).

63. The data is obviously limited, but individuals selected for 1-in-10,000 results on childhood ability tests have been shown, in longitudinal studies, to be substantially more likely to become tenured professors, earn patents, and succeed in business than those with slightly less exceptional scores (Kell et al. 2013). Roe (1953) studied sixty-four eminent scientists and found median cognitive ability three to four standard deviations above the population norm and strikingly higher than is typical for scientists in general. (Cognitive ability is also correlated with lifetime earnings and with non-financial outcomes such as life expectancy, divorce rates, and probability of dropping out of school [Deary 2012].) An upward shift of the distribution of cognitive ability would have disproportionately large effects at the tails, especially increasing the number of highly gifted and reducing the number of people with retardation and learning disabilities. See also Bostrom and Ord (2006) and Sandberg and Savulescu (2011).

64. E.g. Warwick (2002). Stephen Hawking even suggested that taking this step might be necessary in order to keep up with advances in machine intelligence: “We must develop as quickly as possible technologies that make possible a direct connection between brain and computer, so that artificial brains contribute to human intelligence rather than opposing it” (reported in Walsh [2001]). Ray Kurzweil concurs: “As far as Hawking’s . . . recommendation is concerned, namely direct connection between the brain and computers, I agree that this is both reasonable, desirable and inevitable. [sic] It’s been my recommendation for years” (Kurzweil 2001).

65. See Lebedev and Nicolelis (2006); Birbaumer et al. (2008); Mak and Wolpaw (2009); and Nicolelis and Lebedev (2009). A more personal outlook on the problem of enhancement through implants can be found in Chorost (2005, Chap. 11).

66. Smeding et al. (2006).

67. Degnan et al. (2002).

68. Dagnelie (2012); Shannon (2012).

69. Perlmutter and Mink (2006); Lyons (2011).

70. Koch et al. (2006).

71. Schalk (2008). For a general review of the current state of the art, see Berger et al. (2008). For the case that this would help lead to enhanced intelligence, see Warwick (2002).

72. Some examples: Bartels et al. (2008); Simeral et al. (2011); Krusienski and Shih (2011); and Pasqualotto et al. (2012).

73. E.g. Hinke et al. (1993).

74. There are partial exceptions to this, especially in early sensory processing. For example, the primary visual cortex uses a retinotopic mapping, which means roughly that adjacent neural assemblies receive inputs from adjacent areas of the retinas (though ocular dominance columns somewhat complicate the mapping).

75. Berger et al. (2012); Hampson et al. (2012).

76. Some brain implants require two forms of learning: the device learning to interpret the organism’s neural representations and the organism learning to use the system by generating appropriate neural firing patterns (Carmena et al. 2003).

77. It has been suggested that we should regard corporate entities (corporations, unions, governments, churches, and so forth) as artificial intelligent agents, entities with sensors and effectors, able to represent knowledge and perform inference and take action (e.g. Kuipers [2012]; cf. Huebner [2008] for a discussion on whether collective representations can exist). They are clearly powerful and ecologically successful, although their capabilities and internal states are different from those of humans.

78. Hanson (1995, 2000); Berg and Rietz (2003).

79. In the workplace, for instance, employers might use lie detectors to crack down on employee theft and shirking, by asking the employee at the end of each business day whether she has stolen anything and whether she has worked as hard as she could. Political and business leaders could likewise be asked whether they were wholeheartedly pursuing the interests of their shareholders or constituents. Dictators could use them to target seditious generals within the regime or suspected troublemakers in the wider population.

80. One could imagine neuroimaging techniques making it possible to detect neural signatures of motivated cognition. Without self-deception detection, lie detection would favor individuals who believe their own propaganda. Better tests for self-deception tests could also be used to train rationality and to study the effectiveness of interventions aimed at reducing biases.

81. Bell and Gemmel (2009). An early example is found in the work of MIT’s Deb Roy, who recorded every moment of his son’s first three years of life. Analysis of this audiovisual data is yielding information on language development; see Roy (2012).

82. Growth in total world population of biological human beings will contribute only a small factor. Scenarios involving machine intelligence could see the world population (including digital minds) explode by many orders of magnitude in a brief period of time. But that road to superintelligence involves artificial intelligence or whole brain emulation, so we need not consider it in this subsection.

83. Vinge (1993).

## Notes to Chapter 3: Forms of superintelligence

1. Vernor Vinge has used the term “weak superintelligence” to refer to such sped-up human minds (Vinge 1993).

2. For example, if a very fast system could do everything that any human could do except dance a mazurka, we should still call it a speed superintelligence. Our interest lies in those core cognitive capabilities that have economic or strategic significance.

3. At least a millionfold speedup compared to human brains is physically possible, as can been seen by considering the difference in speed and energy of relevant brain processes in comparison to more efficient information processing. The speed of light is more than a million times greater than that of neural transmission, synaptic spikes dissipate more than a million times more heat than is thermodynamically necessary, and current transistor frequencies are more than a million times faster than neuron spiking frequencies (Yudkowsky [2008a]; see also Drexler [1992]). The ultimate limits of speed superintelligence are bounded by light-speed communications delays, quantum limits on the speed of state transitions, and the volume needed to contain the mind (Lloyd 2000). The “ultimate laptop” described by Lloyd (2000) would run a 1.4×1021 FLOPS brain emulation at speedup of 3.8×1029× (assuming the emulation could be sufficiently parallelized). Lloyd’s construction, however, is not intended to be technologically plausible; it is only meant to illustrate those constraints on computation that are readily derivable from basic physical laws.

4. With emulations, there is also an issue of how long a human-like mind can keep working on something before going mad or falling into a rut. Even with task variety and regular holidays, it is not certain that a human-like mind could live for thousands of subjective years without developing psychological problems. Furthermore, if total memory capacity is limited—a consequence of having a limited neuron population—then cumulative learning cannot continue indefinitely: beyond some point, the mind must start forgetting one thing for each new thing it learns. (Artificial intelligence could be designed such as to ameliorate these potential problems.)

5. Accordingly, nanomechanisms moving at a modest 1 m/s have typical timescales of nanoseconds. See section 2.3.2 of Drexler (1992). Robin Hanson mentions 7-mm “tinkerbell” robot bodies moving at 260 times normal speed (Hanson 1994).

6. Hanson (2012).

7. “Collective intelligence” does not refer to low-level parallelization of computing hardware but to parallelization at the level of intelligent autonomous agents such as human beings. Implementing a single emulation on a massively parallel machine might result in speed superintelligence if the parallel computer is sufficiently fast: it would not produce a collective intelligence.

8. Improvements to the speed or the quality of the individual components could also indirectly affect the performance of collective intelligence, but here we mainly consider such improvements under the other two forms of superintelligence in our classification.

9. It has been argued that a higher population density triggered the Upper Paleolithic Revolution and that beyond a certain threshold accumulation of cultural complexity became much easier (Powell et al. 2009).

10. What about the Internet? It seems not yet to have amounted to a super-sized boost. Maybe it will do so eventually. It took centuries or millennia for the other examples listed here to reveal their full potential.

11. This is, obviously, not meant to be a realistic thought experiment. A planet large enough to sustain seven quadrillion human organisms with present technology would implode, unless it were made of very light matter or were hollow and held up by pressure or other artificial means. (A Dyson sphere or a Shellworld might be a better solution.) History would have unfolded differently on such a vast surface. Set all this aside.

12. Our focus here is on the functional properties of a unified intellect, not on the question of whether such an intellect would have qualia or whether it would be a mind in the sense of having subjective conscious experience. (One might ponder, though, what kinds of conscious experience might arise from intellects that are more or less integrated than those of human brains. On some views of consciousness, such as the global workspace theory, it seems one might expect more integrated brains to have more capacious consciousness. Cf. Baars (1997), Shanahan (2010), and Schwitzgebel (2013).)

13. Even small groups of humans that have remained isolated for some time might still benefit from the intellectual outputs of a larger collective intelligence. For example, the language they use might have been developed by a much larger linguistic community, and the tools they use might have been invented in a much larger population before the small group became isolated. But even if a small group had always been isolated, it might still be part of a larger collective intelligence than meets the eye—namely, the collective intelligence consisting of not only the present but all ancestral generations as well, an aggregate that can function as a feed-forward information processing system.

14. By the Church–Turing thesis, all computable functions are computable by a Turing machine. Since any of the three forms of superintelligence could simulate a Turing machine (if given access to unlimited memory and allowed to operate indefinitely), they are by this formal criterion computationally equivalent. Indeed, an average human being (provided with unlimited scrap paper and unlimited time) could also implement a Turing machine, and thus is also equivalent by the same criterion. What matters for our purposes, however, is what these different systems can achieve in practice, with finite memory and in reasonable time. And the efficiency variations are so great that one can readily make some distinctions. For example, a typical individual with an IQ of 85 could be taught to implement a Turing machine. (Conceivably, it might even be possible to train some particularly gifted and docile chimpanzee to do this.) Yet, for all practical intents and purposes, such an individual is presumably incapable of, say, independently developing general relativity theory or of winning a Fields medal.

15. Oral storytelling traditions can produce great works (such as the Homeric epics) but perhaps some of the contributing authors possessed uncommon gifts.

16. Unless it contains as components intellects that have speed or quality superintelligence.

17. Our inability to specify what all these problems are may in part be due to a lack of trying: there is little point in spending time detailing intellectual jobs that no individual and no currently feasible organization can perform. But it is also possible that even conceptualizing some of these jobs is itself one of those jobs that we currently lack the brains to perform.

18. Cf. Boswell (1917); see also Walker (2002).

19. This mainly occurs in short bursts in a subset of neurons—most have more sedate firing rates (Gray and McCormick 1996; Steriade et al. 1998). There are some neurons (“chattering neurons,” also known as “fast rhythmically bursting” cells) that may reach firing frequencies as high as 750 Hz, but these seem to be extreme outliers.

20. Feldman and Ballard (1982).

21. The conduction velocity depends on axon diameter (thicker axons are faster) and whether the axon is myelinated. Within the central nervous system, transmission delays can range from less than a millisecond to up to 100 ms (Kandel et al. 2000). Transmission in optical fibers is around 68% c (because of the refractive index of the material). Electrical cables are roughly the same speed, 59–77% c.

22. This assumes a signal velocity of 70% c. Assuming 100% c ups the estimate to 1.8×1018 m3.

23. The number of neurons in an adult human male brain has been estimated at 86.1 ± 8.1 billion, a number arrived at by dissolving brains and fractionating out the cell nuclei, counting the ones stained with a neuron-specific marker. In the past, estimates in the neighborhood of 75–125 billion neurons were common. These were typically based on manual counting of cell densities in representative small regions (Azevedo et al. 2009).

24. Whitehead (2003).

25. Information processing systems can very likely use molecular-scale processes for computing and data storage and reach at least planetary size in extent. The ultimate physical limits to computation set by quantum mechanics, general relativity, and thermodynamics are, however, far beyond this “Jupiter brain” level (Sandberg 1999; Lloyd 2000).

26. Stansberry and Kudritzki (2012). Electricity used in data centers worldwide amounted to 1.1–1.5% of total electricity use (Koomey 2011). See also Muehlhauser and Salamon (2012).

27. This is an oversimplification. The number of chunks working memory can maintain is both information- and task-dependent; however, it is clearly limited to a small number of chunks. See Miller (1956) and Cowan (2001).

28. An example might be that the difficulty of learning Boolean concepts (categories defined by logical rules) is proportional to the length of the shortest logically equivalent propositional formula. Typically, even formulae just 3–4 literals long are very difficult to learn. See Feldman

29. See Landauer (1986). This study is based on experimental estimates of learning and forgetting rates in humans. Taking into account implicit learning might push the estimate up a little. If one assumes a storage capacity ~1 bit per synapse, one gets an upper bound on human memory capacity of about 1015 bits. For an overview of different estimates, see Appendix A of Sandberg and Bostrom (2008).

30. Channel noise can trigger action potentials, and synaptic noise produces significant variability in the strength of transmitted signals. Nervous systems appear to have evolved to make numerous trade-offs between noise tolerance and costs (mass, size, time delays); see Faisal et al. (2008). For example, axons cannot be thinner than 0.1 µm lest random opening of ion channels create spontaneous action potentials (Faisal et al. 2005).

31. Trachtenberg et al. (2002).

32. In terms of memory and computational power, though not in terms of energy efficiency. The fastest computer in the world at the time of writing was China’s “Tianhe-2,” which displaced Cray Inc. Titan in June 2013 with a performance of 33.86 petaFLOPS. It uses 17.6 MW of power, almost six orders of magnitude more than the brain’s ~20 W.

33. Note that this survey of sources of machine advantage is disjunctive: our argument succeeds even if some of the items listed are illusory, so long as there is at least one source that can provide a sufficiently large advantage.

## Notes to Chapter 4: The kinetics of an intelligence explosion

1. The system may not reach one of these baselines at any sharply defined point. There may instead be an interval during which the system gradually becomes able to outperform the external research team on an increasing number of system-improving development tasks.

2. In the past half-century, at least one scenario has been widely recognized in which the existing world order would come to an end in the course of minutes or hours: global thermonuclear war.

3. This would be consistent with the observation that the Flynn effect—the secular increase in measured IQ scores within most populations at a rate of some 3 IQ points per decade over the past 60 years or so—appears to have ceased or even reversed in recent years in some highly developed countries such as the United Kingdom, Denmark, and Norway (Teasdale and Owen 2008; Sundet et al. 2004). The cause of the Flynn effect in the past—and whether and to what extent it represents any genuine gain in general intelligence or merely improved skill at solving IQ test-style puzzles—has been the subject of wide debate and is still not known. Even if the Flynn effect (at least partially) reflects real cognitive gains, and even if the effect is now diminishing or even reversing, this does not prove that we have yet hit diminishing returns in whatever underlying cause was responsible for the observed Flynn effect in the past. The decline or reversal could instead be due to some independent detrimental factor that would otherwise have produced an even bigger observed decline.

4. Bostrom and Roache (2011).

5. Somatic gene therapy could eliminate the maturational lag, but is technically much more challenging than germline interventions and has a lower ultimate potential.

6. Average global economic productivity growth per year over the period 1960–2000 was 4.3% (Isaksson 2007). Only part of this productivity growth is due to gains in organizational efficiency. Some particular networks or organizational processes of course are improving at much faster rates.

7. Biological brain evolution was subject to many constraints and trade-offs that are drastically relaxed when the mind moves to a digital medium. For example, brain size is limited by head size, and a head that is too big has trouble passing through the birth canal. A large brain also guzzles metabolic resources and is a dead weight that impedes movement. The connectivity between certain brain regions might be limited by steric constraints—the volume of white matter is significantly larger than the volume of the gray matter it connects. Heat dissipation is limited by blood flow, and might be close to the upper limit for acceptable functioning. Furthermore, biological neurons are noisy, slow, and in need of constant protection, maintenance, and resupply by glial cells and blood vessels (contributing to the intracranial crowding). See Bostrom and Sandberg (2009b).

8. Yudkowsky (2008a, 326). For a more recent discussion, see Yudkowsky (2013).

9. The picture shows cognitive ability as a one-dimensional parameter, to keep the drawing simple. But this is not essential to the point being made here. One could, for example, instead represent a cognitive ability profile as a hypersurface in a multidimensional space.

10. Lin et al. (2012).

11. One gets a certain increase in collective intelligence simply by increasing the number of its constituent intellects. Doing so should at least enable better overall performance on tasks that can be easily parallelized. To reap the full returns from such a population explosion, however, one would also need to achieve some (more than minimal) level of coordination between the constituents.

12. The distinction between speed and quality of intelligence is anyhow blurred in the case of nonneuromorphic AI systems.

13. Rajab et al. (2006, 41–52).

14. It has been suggested that using configurable integrated circuits (FPGAs) rather than generalpurpose processors could increase computational speeds in neural network simulations by up to two orders of magnitude (Markram 2006). A study of high-resolution climate modeling in the petaFLOP-range found a twenty-four to thirty-four-fold reduction of cost and about two orders of magnitude reduction in power requirements using a custom variant of embedded processor chips (Wehner et al. 2008).

15. Nordhaus (2007). There are many overviews of the different meanings of Moore’s law; see, e.g., Tuomi (2002) and Mack (2011).

16. If the development is slow enough, the project can avail itself of progress being made in the interim by the outside world, such as advances in computer science made by university researchers and improvements in hardware made by the semiconductor industry.

17. Algorithmic overhang is perhaps less likely, but one exception would be if exotic hardware such as quantum computing becomes available to run algorithms that were previously infeasible. One might also argue that neural networks and deep machine learning are cases of algorithm overhang: too computationally expensive to work well when first invented, they were shelved for a while, then dusted off when fast graphics processing units made them cheap to run. Now they win contests.

18. And even if progress on the way toward the human baseline were slow.

19. O is that part of the world’s optimization power that is applied to improving the system in world question. For a project operating in complete isolation, one that receives no significant ongoing support from the external world, we haveO ≈0, even though the project must have started world with a resource endowment (computers, scientific concepts, educated personnel, etc.) that is derived from the entire world economy and many centuries of development.

20. The most relevant of the seed AI’s cognitive abilities here is its ability to perform intelligent design work to improve itself, i.e. its intelligence amplification capability. (If the seed AI is good at enhancing another system, which is good at enhancing the seed AI, then we could view these as subsystems of a larger system and focus our analysis on the greater whole.)

21. This assumes that recalcitrance is not known to be so high as to discourage investment altogether or divert it to some alternative project.

22. A similar example is discussed in Yudkowsky (2008b).

23. Since inputs have risen (e.g. amounts invested in building new foundries, and number of people working in the semiconductor industry), Moore’s law itself has not given such a rapid growth if we control for this increase in inputs. Combined with advances in software, however, an 18-month doubling time in performance per unit of input may be more historically plausible.

24. Some tentative attempts have been made to develop the idea of an intelligence explosion within the framework of economic growth theory; see, e.g., Hanson (1998b); Jones (2009); Salamon (2009). These studies have pointed to the potential of extremely rapid growth given the arrival of digital minds, but since endogenous growth theory is relatively poorly developed even for historical and contemporary applications, any application to a potentially discontinuous future context is better viewed at this stage as a source of potentially useful concepts and considerations than as an exercise likely to deliver authoritative forecasts. For an overview of attempts to mathematically model a technological singularity, see Sandberg (2010).

25. It is of course also possible that there will be no takeoff at all. But since, as argued earlier, superintelligence looks technically feasible, the absence of a takeoff would likely be due to the intervention of some defeater, such as an existential catastrophe. If strong superintelligence arrived not in the shape of artificial intelligence or whole brain emulation but through one of other paths we considered above, then a slower takeoff would be more likely.

## Notes to Chapter 5: Decisive strategic advantage

1. A software mind might run on a single machine as opposed to a worldwide network of computers; but this is not what we mean by “concentration.” Instead, what we are interested in here is the extent to which power, specifically power derived from technological ability, will be concentrated in the advanced stages of, or immediately following, the machine intelligence revolution.

2. Technology diffusion of consumer products, for example, tends to be slower in developing countries (Talukdar et al. 2002). See also Keller (2004) and The World Bank (2008).

3. The economic literature dealing with the theory of the firm is relevant as a comparison point for the present discussion. The locus classicus is Coase (1937). See also, e.g., Canbäck et al. (2006); Milgrom and Roberts (1990); Hart (2008); Simester and Knez (2002).

4. On the other hand, it could be especially easy to steal a seed AI, since it consists of software that could be transmitted electronically or carried on a portable memory device.

5. Barber (1991) suggests that the Yangshao culture (5000–3000 bc) might have used silk. Sun et al. (2012) estimate, based on genetic studies, domestication of the silkworm to have occurred about 4,100 years ago.

6. Cook (1984, 144). This story might be too good to withstand historical scrutiny, rather like Procopius’ (Wars VIII.xvii.1–7) story of how the silkworms were supposedly brought to Byzantium by wandering monks, hidden in their hollow bamboo staves (Hunt 2011).

7. Wood (2007); Temple (1986).

8. Pre-Columbian cultures did have the wheel but used it only for toys (probably due to a lack of good draft animals).

9. Koubi (1999); Lerner (1997); Koubi and Lalman (2007); Zeira (2011); Judd et al. (2012).

10. Estimated from a variety of sources. The time gap is often somewhat arbitrary, depending on how exactly “equivalent” capabilities are defined. Radar was used by at least two countries within a couple of years of its introduction, but exact figures in months are hard to come by.

11. The RDS-6 in 1953 was the first test of a bomb with fusion reactions, but the RDS-37 in 1955 was the first “true” fusion bomb, where most power came from the fusion reaction.

12. Unconfirmed.

13. Tests in 1989, project cancelled in 1994.

14. Deployed system, capable of a range greater than 5,000 km.

15. Polaris missiles bought from the USA.

16. Current work is underway on the Taimur missile, likely based on Chinese missiles.

17. The RSA-3 rocket tested 1989–90 was intended for satellite launches and/or as an ICBM.

18. MIRV = multiple independently targetable re-entry vehicle, a technology that enables a single ballistic missile to carry multiple warheads that can be programmed to hit different targets.

19. The Agni V system is not yet in service.

20. Ellis (1999).

21. If we model the situation as one where the lag time between projects is drawn from a normal distribution, then the likely distance between the leading project and its closest follower will also depend on how many projects there are. If there are a vast number of projects, then the distance between the first two is likely small even if the variance of the distribution is moderately high (though the expected gap between the lead and the second project declines very slowly with the number of competitors if completion times are normally distributed). However, it is unlikely that there will be a vast number of projects that are each well enough resourced to be serious contenders. (There might be a greater number of projects if there are a large number of different basic approaches that could be pursued, but in that case many of those approaches are likely to prove dead ends.) As suggested, empirically we seem to find that there is usually no more than a handful of serious competitors pursuing any one specific technological goal. The situation is somewhat different in a consumer market where there are many niches for slightly different products and where barriers to entry are low. There are lots of one-person projects designing T-shirts, but only a few firms in the world developing the next generation of graphics cards. (Two firms, AMD and NVIDIA, enjoy a near duopoly at the moment, though Intel is also competing at the lower-performance end of the market.)

22. Bostrom (2006c). One could imagine a singleton whose existence is invisible (e.g. a superintelligence with such advanced technology or insight that it could subtly control world events without any human noticing its interventions); or a singleton that voluntarily imposes very strict limitations on its own exercise of power (e.g. punctiliously confining itself to ensuring that certain treaty-specified international rules—or libertarian principles—are respected). How likely any particular kind of singleton is to arise is of course an empirical question; but conceptually, at least, it is possible to have a good singleton, a bad singleton, a rambunctiously diverse singleton, a blandly monolithic singleton, a crampingly oppressive singleton, or a singleton more akin to an extra law of nature than to a yelling despot.

23. Jones (1985, 344).

24. It might be significant that the Manhattan Project was carried out during wartime. Many of the scientists who participated claimed to be primarily motivated by the wartime situation and the fear that Nazi Germany might develop atomic weapons ahead of the Allies. It might be difficult for many governments to mobilize a similarly intensive and secretive effort in peacetime. The Apollo program, another iconic science/engineering megaproject, received a strong impetus from the Cold War rivalry.

25. Though even if they were looking hard, it is not clear that they would appear (publicly) to be doing so.

26. Cryptographic techniques could enable the collaborating team to be physically dispersed. The only weak link in the communication chain might be the input stage, where the physical act of typing could potentially be observed. But if indoor surveillance became common (by means of microscopic recording devices), those keen on protecting their privacy might develop countermeasures (e.g. special closets that could be sealed off from would-be eavesdropping devices). Whereas physical space might become transparent in a coming surveillance age, cyberspace might possibly become more protected through wider adoption of stronger cryptographic protocols.

27. A totalitarian state might take recourse to even more coercive measures. Scientists in relevant fields might be swept up and put into work camps, akin to the “academic villages” in Stalinist Russia.

28. When the level of public concern is relatively low, some researchers might welcome a little bit of public fear-mongering because it draws attention to their work and makes the area they work in seem important and exciting. When the level of concern becomes greater, the relevant research communities might change their tune as they begin to worry about funding cuts, regulation, and public backlash. Researchers in neighboring disciplines—such as those parts of computer science and robotics that are not very relevant to artificial general intelligence—might resent the drift of funding and attention away from their own research areas. These researchers might also correctly observe that their work carries no risk whatever of leading to a dangerous intelligence explosion. (Some historical parallels might be drawn with the career of the idea of nanotechnology; see Drexler [2013].)

29. These have been successful in that they have achieved at least some of what they set out to do. How successful they have been in a broader sense (taking into account cost-effectiveness and so forth) is harder to determine. In the case of the International Space Station, for example, there have been huge cost overruns and delays. For details of the problems encountered by the project, see NASA (2013). The Large Hadron Collider project has had some major setbacks, but this might be due to the inherent difficulty of the task. The Human Genome Project achieved success in the end, but seems to have received a speed boost from being forced to compete with Craig Venter’s private corporate effort. Internationally sponsored projects to achieve controlled fusion energy have failed to deliver on expectations, despite massive investment; but again, this might be attributable to the task turning out to be more difficult than anticipated.

30. US Congress, Office of Technology Assessment (1995).

31. Hoffman (2009); Rhodes (2008).

32. Rhodes (1986).

33. The US Navy’s code-breaking organization, OP-20-G, apparently ignored an invitation to gain full knowledge of Britain’s anti-Enigma methods, and failed to inform higher-level US decision makers of Britain’s offer to share its cryptographic secrets (Burke 2001). This gave American leaders the impression that Britain was withholding important information, a cause of friction throughout the war. Britain did share with the Soviet government some of the intelligence they had gleaned from decrypted German communications. In particular, Russia was warned about the German preparations for Operation Barbarossa. But Stalin refused to believe the warning, partly because the British did not disclose how they had obtained the information.

34. For a few years, Russell seems to have advocated the threat of nuclear war to persuade Russia to accept the Baruch plan; later, he was a strong proponent of mutual nuclear disarmament (Russell and Griffin 2001). John von Neumann is reported to have believed that a war between the United States and Russia was inevitable, and to have said, “If you say why not bomb them [the Russians] tomorrow, I say why not bomb them today? If you say today at five o’clock, I say why not one o’clock?” (It is possible that he made this notorious statement to burnish his anticommunist credentials with US Defense hawks in the McCarthy era. Whether von Neumann, had he been in charge of US policy, would actually have launched a first strike is impossible to ascertain. See Blair [1957], 96.)

35. Baratta (2004).

36. If the AI is controlled by a group of humans, the problem may apply to this human group, though it is possible that new ways of reliably committing to an agreement will be available by this time, in which case even human groups could avoid this problem of potential internal unraveling and overthrow by a sub-coalition.

## Notes to Chapter 6: Cognitive superpowers

1. In what sense is humanity a dominant species on Earth? Ecologically speaking, humans are the most common large (~50 kg) animal, but the total human dry biomass (~100 billion kg) is not so impressive compared with that of ants, the family Formicidae (300 billion–3,000 billion kg). Humans and human utility organisms form a very small part (<0.001) of total global biomass. However, croplands and pastures are now among the largest ecosystems on the planet, covering about 35% of the ice-free land surface (Foley et al. 2007). And we appropriate nearly a quarter of net primary productivity according to a typical assessment (Haberl et al. 2007), though estimates range from 3 to over 50% depending mainly on varying definitions of the relevant terms (Haberl et al. 2013). Humans also have the largest geographic coverage of any animal species and top the largest number of different food chains.

2. Zalasiewicz et al. (2008).

3. See first note to this chapter.

4. Strictly speaking, this may not be quite correct. Intelligence in the human species ranges all the way down to approximately zero (e.g. in the case of embryos or patients in permanent vegetative state). In qualitative terms, the maximum difference in cognitive ability within the human species is therefore perhaps greater than the difference between any human and a superintelligence. But the point in the text stands if we read “human” as “normally functioning adult.”

5. Gottfredson (2002). See also Carroll (1993) and Deary (2001).

6. See Legg (2008). Roughly, Legg proposes to measure a reinforcement-learning agent as its expected performance in all reward-summable environments, where each such environment receives a weight determined by its Kolmogorov complexity. We will explain what is meant by reinforcement learning in Chapter 12. See also Dowe and Hernández-Orallo (2012) and Hibbard (2011).

7. With regard to technology research in areas like biotechnology and nanotechnology, what a superintelligence would excel at is the design and modeling of new structures. To the extent that design ingenuity and modeling cannot substitute for physical experimentation, the superintelligence’s performance advantage may be qualified by its level of access to the requisite experimental apparatus.

8. E.g., Drexler (1992, 2013).

9. A narrow-domain AI could of course have significant commercial applications, but this does not mean that it would have the economic productivity superpower. For example, even if a narrow-domain AI earned its owners several billions of dollars a year, this would still be four orders of magnitude less than the rest of the world economy. In order for the system directly and substantially to increase world product, an AI would need to be able to perform many kinds of work; that is, it would need competence in many domains.

10. The criterion does not rule out all scenarios in which the AI fails. For example, the AI might rationally take a gamble that has a high chance of failing. In this case, however, the criterion could take the form that (a) the AI should make an unbiased estimate of the gamble’s low chance of success and (b) there should be no better gamble available to the AI that we present-day humans can think of but that the AI overlooks.

11. Cf. Freitas (2000) and Vassar and Freitas (2006).

12. Yudkowsky (2008a).

13. Freitas (1980); Freitas and Merkle (2004, Chap. 3); Armstrong and Sandberg (2013).

14. See, e.g., Huffman and Pless (2003), Knill et al. (2000), Drexler (1986).

15. That is to say, the distance would be small on some “natural” metric, such as the logarithm of the size of the population that could be sustainably supported at subsistence level by a given level of capability if all resources were devoted to that end.

16. This estimate is based on the WMAP estimate of a cosmological baryon density of 9.9×10–30 g/cm3 and assumes that 90% of the mass is intergalactic gas, that some 15% of the galactic mass is stars (about 80% of baryonic matter), and that the average star weighs in at 0.7 solar masses (Read and Trentham 2005; Carroll and Ostlie 2007).

17. Armstrong and Sandberg (2013).

18. Even at 100% of c (which is unattainable for objects with nonzero rest mass) the number of reachable galaxies is only about 6×109. (Cf. Gott et al. [2005] and Heyl [2005].) We are assuming that our current understanding of the relevant physics is correct. It is hard to be very confident in any upper bound, since it is at least conceivable that a superintelligent civilization might extend its reach in some way that we take to be physically impossible (for instance, by building time machines, by spawning new inflationary universes, or by some other, as yet unimagined means).

19. The number of habitable planets per star is currently uncertain, so this is merely a crude estimate. Traub (2012) predicts that one-third of stars in spectral classes F, G, or K have at least one terrestrial planet in the habitable zone; see also Clavin (2012). FGK stars form about 22.7% of the stars in the solar neighborhood, suggesting that 7.6% of stars have potentially suitable planets. In addition, there might be habitable planets around the more numerous M stars (Gilster 2012). See also Robles et al. (2008). It would not be necessary to subject human bodies to the rigors of intergalactic travels. AIs could oversee the colonization process. Homo sapiens could be brought along as information, which the AIs could later use to instantiate specimens of our species. For example, genetic information could be synthesized into DNA, and a first generation of humans could be incubated, raised, and educated by AI guardians taking an anthropomorphic guise.

20. O’Neill (1974).

21. Dyson (1960) claims to have gotten the basic idea from science fiction writer Olaf Stapledon (1937), who in turn might have been inspired by similar thoughts by J. D. Bernal (Dyson 1979,

22. Landauer’s principle states that there is a minimum amount of energy required to change one bit of information, known as the Landauer limit, equal to kT ln 2, where k is the Boltzmann constant (1.38×10−23 J/K) and T is the temperature. If we assume the circuitry is maintained at around 300 K, then 1026 watts allows us to erase approximately 1047 bits per second. (On the achievable efficiency of nanomechanical computational devices, see Drexler [1992]. See also Bradbury [1999]; Sandberg [1999]; Ćirković [2004]. The foundations of Landauer’s principle are still somewhat in dispute; see, e.g., Norton [2011].)

23. Stars vary in their power output, but the Sun is a fairly typical main-sequence star.

24. A more detailed analysis might consider more closely what types of computation we are interested in. The number of serial computations that can be performed is quite limited, since a fast serial computer must be small in order to minimize communications lags within the different parts of the computer. There are also limits on the number of bits that can be stored, and, as we saw, on the number of irreversible computational steps (involving the erasure of information) that can be performed.

25. We are assuming here that there are no extraterrestrial civilizations that might get in the way. We are also assuming that the simulation hypothesis is false. See Bostrom (2003a). If either of these assumptions is incorrect, there may be important non-anthropogenic risks—ones that involve intelligent agency of a nonhuman sort. See also Bostrom (2003b, 2009c).

26. At least a wise singleton that grasped the idea of evolution could, in principle, have embarked on a eugenics program by means of which it could slowly have raised its level of collective intelligence.

27. Tetlock and Belkin (1996).

28. To be clear: colonizing and re-engineering a large part of the accessible universe is not currently within our direct reach. Intergalactic colonization is far beyond today’s technology. The point is that we could in principle use our present capabilities to develop the additional capabilities that would be needed, thus placing the accomplishment within our indirect reach. It is of course also true that humanity is not currently a singleton and that we do not know that we would never face intelligent opposition from some external power if we began to re-engineer the accessible universe. To meet the wise-singleton sustainability threshold, however, it suffices that one possesses a capability set such that if a wise singleton facing no intelligent opposition had possessed this capability set then the colonization and reengineering of a large part of the accessible universe would be within its indirect reach.

29. Sometimes it might be useful to speak of two AIs as each having a given superpower. In an extended sense of the word, one could thus conceive of a superpower as something that an agent has relative to some field of action—in this example, perhaps a field that includes all of human civilization but excludes the other AI.

## Notes to Chapter 7: The superintelligent will

1. This is of course not to deny that differences that appear small visually can be functionally profound.

2. Yudkowsky (2008a, 310).

3. David Hume, the Scottish Enlightenment philosopher, thought that beliefs alone (say, about what is a good thing to do) cannot motivate action: some desire is required. This would support the orthogonality thesis by undercutting one possible objection to it, namely that sufficient intelligence might entail the acquisition of certain beliefs which would then necessarily produce certain motivations. However, although the orthogonality thesis can draw support from the Humean theory of motivation, it does not presuppose it. In particular, one need not maintain that beliefs alone can never motivate action. It would suffice to assume, for example, that an agent—be it ever so intelligent—can be motivated to pursue any course of action if the agent happens to have certain desires of some sufficient, overriding strength. Another way in which the orthogonality thesis could be true even if the Humean theory of motivation is false is if arbitrarily high intelligence does not entail the acquisition of any such beliefs as are (putatively) motivating on their own. A third way in which it might be possible for the orthogonality thesis to be true even if the Humean theory were false is if it is possible to build an agent (or more neutrally, an “optimization process”) with arbitrarily high intelligence but with constitution so alien as to contain no clear functional analogs to what in humans we call “beliefs” and “desires.” (For some recent attempts to defend the Humean theory of motivation see Smith [1987], Lewis [1988], and Sinhababu [2009].)

4. For instance, Derek Parfit has argued that certain basic preferences would be irrational, such as that of an otherwise normal agent who has “Future-Tuesday-Indifference”: A certain hedonist cares greatly about the quality of his future experiences. With one exception, he cares equally about all the parts of his future. The exception is that he has Future-TuesdayIndifference. Throughout every Tuesday he cares in the normal way about what is happening to him. But he never cares about possible pains or pleasures on a future Tuesday. . . . This indifference is a bare fact. When he is planning his future, it is simply true that he always prefers the prospect of great suffering on a Tuesday to the mildest pain on any other day. (Parfit [1986, 123–4]; see also Parfit [2011]) For our purposes, we need take no stand on whether Parfit is right that this agent is irrational, so long as we grant that it is not necessarily unintelligent in the instrumental sense explained in the text. Parfit’s agent could have impeccable instrumental rationality, and therefore great intelligence, even if he falls short on some kind of sensitivity to “objective reason” that might be required of a fully rational agent. Therefore, this kind of example does not undermine the orthogonality thesis.

5. Even if there are objective moral facts that any fully rational agent would comprehend, and even if these moral facts are somehow intrinsically motivating (such that anybody who fully comprehends them is necessarily motivated to act in accordance with them), this need not undermine the orthogonality thesis. The thesis could still be true if an agent could have impeccable instrumental rationality even whilst lacking some other faculty constitutive of rationality proper, or some faculty required for the full comprehension of the objective moral facts. (An agent could also be extremely intelligent, even superintelligent, without having full instrumental rationality in every domain.)

6. For more on the orthogonality thesis, see Bostrom (2012) and Armstrong (2013).

7. Sandberg and Bostrom (2008).

8. Stephen Omohundro has written two pioneering papers on this topic (Omohundro 2007, 2008). Omohundro argues that all advanced AI systems are likely to exhibit a number of “basic drives,” by which he means “tendencies which will be present unless explicitly counteracted.” The term “AI drive” has the advantage of being short and evocative, but it has the disadvantage of suggesting that the instrumental goals to which it refers influence the AI’s decision-making in the same way as psychological drives influence human decision-making, i.e. via a kind of phenomenological tug on our ego which our willpower may occasionally succeed in resisting. That connotation is unhelpful. One would not normally say that a typical human being has a “drive” to fill out their tax return, even though filing taxes may be a fairly convergent instrumental goal for humans in contemporary societies (a goal whose realization averts trouble that would prevent us from realizing many of our final goals). Our treatment here also differs from that of Omohundro in some other more substantial ways, although the underlying idea is the same. (See also Chalmers [2010] and Omohundro [2012].)

9. Chislenko (1997).

10. See also Shulman (2010b).

11. An agent might also change its goal representation if it changes its ontology, in order to transpose its old representation into the new ontology; cf. de Blanc (2011). Another type of factor that might make an evidential decision theorist undertake various actions, including changing its final goals, is the evidential import of deciding to do so. For example, an agent that follows evidential decision theory might believe that there exist other agents like it in the universe, and that its own actions will provide some evidence about how those other agents will act. The agent might therefore choose to adopt a final goal that is altruistic towards those other evidentially linked agents, on grounds that this will give the agent evidence that those other agents will have chosen to act in like manner. An equivalent outcome might be obtained, however, without changing one’s final goals, by choosing in each instant to act as if one had those final goals.

12. An extensive psychological literature explores adaptive preference formation. See, e.g., Forgas et al. (2010).

13. In formal models, the value of information is quantified as the difference between the expected value realized by optimal decisions made with that information and the expected value realized by optimal decisions made without it. (See, e.g., Russell and Norvig [2010].) It follows that the value of information is never negative. It also follows that any information you know will never affect any decision you will ever make has zero value for you. However, this kind of model assumes several idealizations which are often invalid in the real world—such as that knowledge has no final value (meaning that knowledge has only instrumental value and is not valuable for its own sake) and that agents are not transparent to other agents.

14. E.g., Hájek (2009).

15. This strategy is exemplified by the sea squirt larva, which swims about until it finds a suitable rock, to which it then permanently affixes itself. Cemented in place, the larva has less need for complex information processing, whence it proceeds to digest part of its own brain (its cerebral ganglion). One can observe the same phenomenon in some academics when they have been granted tenure.

16. Bostrom (2012).

17. Bostrom (2006c).

18. One could reverse the question and look instead at possible reasons for a superintelligent singleton not to develop some technological capabilities. These include the following: (a) the singleton foresees that it will have no use for the capability; (b) the development cost is too large relative to its anticipated utility (e.g. if the technology will never be suitable for achieving any of the singleton’s ends, or if the singleton has a very high discount rate that strongly discourages investment); (c) the singleton has some final value that requires abstention from particular avenues of technology development; (d) if the singleton is not certain it will remain stable, it might prefer to refrain from developing technologies that could threaten its internal stability or that would make the consequences of dissolution worse (for instance, a world government may not wish to develop technologies that would facilitate rebellion, even if they have some good uses, nor develop technologies for the easy production of weapons of mass destruction which could wreak havoc if the world government were to dissolve); (e) similarly, the singleton might have made some kind of binding strategic commitment not to develop some technology, a commitment that remains operative even if it would now be convenient to develop it. (Note, however, that some current reasons for technology development would not apply to a singleton: for instance, reasons arising from arms races.)

19. Suppose that an agent discounts resources obtained in the future at an exponential rate, and that because of the light speed limitation the agent can only increase its resource endowment at a polynomial rate. Would this mean that there will be some time after which the agent would not find it worthwhile to continue acquisitive expansion? No, because although the present value of the resources obtained at future times would asymptote to zero the further into the future we look, so would the present cost of obtaining them. The present cost of sending out one more von Neumann probe a 100 million years from now (possibly using some resource acquired some short time earlier) would be diminished by the same discount factor that would diminish the present value of the future resources that the extra probe would acquire (modulo a constant factor).

20. While the volume reached by colonization probes at a given time might be roughly spherical and expanding with a rate proportional to the square of time elapsed since the first probe was launched (~t2), the amount of resources contained within this volume will follow a less regular growth pattern, since the distribution of resources is inhomogeneous and varies over several scales. Initially, the growth rate might be ~t2 as the home planet is colonized; then the growth rate might become spiky as nearby planets and solar systems are colonized; then, as the roughly disc-shaped volume of the Milky Way gets filled out, the growth rate might even out, to be approximately proportional to t; then the growth rate might again become spiky as nearby galaxies are colonized; then the growth rate might again approximate ~t2 as expansion proceeds on a scale over which the distribution of galaxies is roughly homogeneous; then another period of spiky growth followed by smooth ~t2 growth as galactic superclusters are colonized; until ultimately the growth rate starts a final decline, eventually reaching zero as the expansion speed of the universe increases to such an extent as to make further colonization impossible.

21. The simulation argument may be of particular importance in this context. A superintelligent agent may assign a significant probability to hypotheses according to which it lives in a computer simulation and its percept sequence is generated by another superintelligence, and this might generate various convergent instrumental reasons depending on the agent’s guesses about what types of simulations it is most likely to be in. Cf. Bostrom (2003a).

22. Discovering the basic laws of physics and other fundamental facts about the world is a convergent instrumental goal. We may place it under the rubric “cognitive enhancement” here, though it could also be derived from the “technology perfection” goal (since novel physical phenomena might enable novel technologies).

## Notes to Chapter 8: Is the default outcome doom?

1. Some additional existential risk resides in scenarios in which humanity survives in some highly suboptimal state or in which a large portion of our potential for desirable development is irreversibly squandered. On top of this, there may be existential risks associated with the lead-up to a potential intelligence explosion, arising, for example, from war between countries competing to develop superintelligence first.

2. There is an important moment of vulnerability when the AI first realizes the need for such concealment (an event which we may term the conception of deception). This initial realization would not itself be deliberately concealed when it occurs. But having had this realization, the AI might move swiftly to hide the fact that the realization has occurred, while setting up some covert internal dynamic (perhaps disguised as some innocuous process that blends in with all the other complicated processes taking place in its mind) that will enable it to continue to plan its long-term strategy in privacy.

3. Even human hackers can write small and seemingly innocuous programs that do completely unexpected things. (For examples, see some the winning entries in the International Obfuscated C Code Contest.)

4. The point that some AI control measures could appear to work within a fixed context yet fail catastrophically when the context changes is also emphasized by Eliezer Yudkowsky; see, e.g., Yudkowsky (2008a).

5. The term seems to have been coined by science-fiction writer Larry Niven (1973), but is based on real-world brain stimulation reward experiments; cf. Olds and Milner (1954) and Oshima and Katayama (2010). See also Ring and Orseau (2011).

6. Bostrom (1997).

7. There might be some possible implementations of a reinforcement learning mechanism that would, when the AI discovers the wireheading solution, lead to a safe incapacitation rather than to infrastructure profusion. The point is that this could easily go wrong and fail for unexpected reasons.

8. This was suggested by Marvin Minsky (vide Russell and Norvig [2010, 1039]).

9. The issue of which kinds of digital mind would be conscious, in the sense of having subjective phenomenal experience, or “qualia” in philosopher-speak, is important in relation to this point (though it is irrelevant to many other parts of this book). One open question is how hard it would be to accurately estimate how a human-like being would behave in various circumstances without simulating its brain in enough detail that the simulation is conscious. Another question is whether there are generally useful algorithms for a superintelligence, for instance reinforcement-learning techniques, such that the implementation of these algorithms would generate qualia. Even if we judge the probability that any such subroutines would be conscious to be fairly small, the number of instantiations might be so large that even a small risk that they might experience suffering ought to be accorded significant weight in our moral calculation. See also Metzinger (2003, Chap. 8).

10. Bostrom (2002a, 2003a); Elga (2004).

## Notes to Chapter 9: The control problem

1. E.g., Laffont and Martimort (2002).

2. Suppose a majority of voters want their country to build some particular kind of superintelligence. They elect a candidate who promises to do their bidding, but they might find it difficult to ensure that the candidate, once in power, will follow through on her campaign promise and pursue the project in the way that the voters intended. Supposing she is true to her word, she instructs her government to contract with an academic or industry consortium to carry out the work; but again there are agency problems: the bureaucrats in the government department might have their own views about what should be done and may implement the project in a way that respects the letter but not the spirit of the leader’s instructions. Even if the government department does its job faithfully, the contracted scientific partners might have their own separate agendas. The problem recurs on many levels. The director of one of the participating laboratories might lie awake worrying about a technician introducing an unsanctioned element into the design—imagining Dr. T. R. Eason sneaking into his office late one night, logging into the project code base, rewriting a part of the seed AI’s goal system. Where it was supposed to say “serve humanity,” it now says “serve Dr. T. R. Eason.”

3. Even for superintelligence development, though, there could be a role for behavioral testing—as one auxiliary element within a wider battery of safety measures. Should an AI misbehave in its developmental phase, something is clearly awry—though, importantly, the converse does not hold.

4. In a classic exploit from 1975, Steven Dompier wrote a program for the Altair 8800 that took advantage of this effect (and the absence of shielding around the microcomputer’s case). Running the program caused the emission of electromagnetic waves that would produce music when one held a transistor radio close to the computer (Driscoll 2012). The young Bill Gates, who attended a demo, reported that he was impressed and mystified by the hack (Gates 1975). There are in any case plans to design future chips with built-in Wi-Fi capabilities (Greene 2012).

5. It is no light matter to have held a conviction, which, had we had an opportunity to act upon it, could have resulted in the ruination of all our cosmic endowment. Perhaps one could argue for the following principle: if somebody has in the past been certain on N occasions that a system has been improved sufficiently to make it safe, and each time it was revealed that they were wrong, then on the next occasion they are not entitled to assign a credence greater than 1/(N + 1) to the system being safe.

6. In one informal experiment, the role of the AI was played by an intelligent human. Another individual played the role of gatekeeper and was tasked with not letting the AI out of the box. The AI could communicate with the gatekeeper only by text and was given two hours to persuade the gatekeeper to let it out. In three cases out of five, with different individuals playing the gatekeeper, the AI escaped (Yudkowsky 2002). What a human can do, a superintelligence can do too. (The reverse, of course, does not hold. Even if the task for a real superintelligence were harder—maybe the gatekeepers would be more strongly motivated to refrain from releasing the AI than the individuals playing gatekeeper in the experiment—the superintelligence might still succeed where a human would fail.)

7. One should not overstate the marginal amount of safety that could be gained in this way. Mental imagery can substitute for graphical display. Consider the impact books can have on people— and books are not even interactive.

8. See also Chalmers (2010). It would be a mistake to infer from this that there is no possible use in building a system that will never be observed by any outside entity. One might place a final value on what goes on inside such a system. Also, other people might have preferences about what goes on inside such a system, and might therefore be influenced by its creation or the promise of its creation. Knowledge of the existence of certain kinds of isolated systems (ones containing observers) can also induce anthropic uncertainty in outside observers, which may influence their behavior.

9. One might wonder why social integration is considered a form of capability control. Should it not instead be classified as a motivation selection method on the ground that it involves seeking to influence a system’s behavior by means of incentives? We will look closely at motivation selection presently; but, in answer to this question, we are construing motivation selection as a cluster of control methods that work by selecting or shaping a system’s final goals—goals sought for their own sakes rather than for instrumental reasons. Social integration does not target a system’s final goals, so it is not motivation selection. Rather, social integration aims to limit the system’s effective capabilities: it seeks to render the system incapable of achieving a certain set of outcomes—outcomes in which the system attains the benefits of defection without suffering the associated penalties (retribution, and loss of the gains from collaboration). The hope is that by limiting which outcomes the system is able to attain, the system will find that the most effective remaining means of realizing its final goals is to behave cooperatively.

10. This approach may be somewhat more promising in the case of an emulation believed to have anthropomorphic motivations.

11. I owe this idea to Carl Shulman.

12. Creating a cipher certain to withstand a superintelligent code-breaker is a nontrivial challenge. For example, traces of random numbers might be left in some observer’s brain or in the microstructure of the random generator, from whence the superintelligence can retrieve them; or, if pseudorandom numbers are used, the superintelligence might guess or discover the seed from which they were generated. Further, the superintelligence could build large quantum computers, or even discover unknown physical phenomena that could be used to construct new kinds of computers.

13. The AI could wire itself to believe that it had received a reward tokens, but this should not make it wirehead if it is designed to want the reward tokens (as opposed to wanting to be in a state in which it has certain beliefs about the reward tokens).

14. For the original article, see Bostrom (2003a). See also Elga (2004).

15. Shulman (2010a).

16. Basement-level reality presumably contains more computational resources than simulated reality, since any computational processes occurring in a simulation are also occurring on the computer running the simulation. Basement-level reality might also contain a wealth of other physical resources which could be hard for simulated agents to access—agents that exist only at the indulgence of powerful simulators who may have other uses in mind for those resources. (Of course, the inference here is not strictly deductively valid: in principle, it could be the case that universes in which simulations are run contain so much more resources that simulated civilizations on average have access to more resources than non-simulated civilizations, even though each non-simulated civilization that runs simulations has more resources than all the civilizations it simulates do combined.)

17. There are various further esoteric considerations that might bear on this matter, the implications of which have not yet been fully analyzed. These considerations may ultimately be crucially important in developing an all-things-considered approach to dealing with the prospect of an intelligence explosion. However, it seems unlikely that we will succeed in figuring out the practical import of such esoteric arguments unless we have first made some progress on the more mundane kinds of consideration that are the topic of most of this book.

18. Cf., e.g., Quine and Ullian (1978).

19. Which an AI might investigate by considering the performance characteristics of various basic computational functionalities, such as the size and capacity of various data buses, the time it takes to access different parts of memory, the incidence of random bit flips, and so forth.

20. Perhaps the prior could be (a computable approximation of) the Solomonoff prior, which assigns probability to possible worlds on the basis of their algorithmic complexity. See Li and Vitányi (2008).

21. The moment after the conception of deception, the AI might contrive to erase the trace of its mutinous thought. It is therefore important that this tripwire operate continuously. It would also be good practice to use a “flight recorder” that stores a complete trace of all the AI’s activity (including exact timing of keyboard input from the programmers), so that its trajectory can be retraced or analyzed following an automatic shutdown. The information could be stored on a write-once-read-many medium.

22. Asimov (1942). To the three laws were later added a “Zeroth Law”: “(0) A robot may not harm humanity, or, by inaction, allow humanity to come to harm” (Asimov 1985).

23. Cf. Gunn (1982).

24. Russell (1986, 161f).

25. Similarly, although some philosophers have spent entire careers trying to carefully formulate deontological systems, new cases and consequences occasionally come to light that necessitate revisions. For example, deontological moral philosophy has in recent years been reinvigorated through the discovery of a fertile new class of philosophical thought experiments, “trolley problems,” which reveal many subtle interactions among our intuitions about the moral significance of the acts/omissions distinction, the distinction between intended and unintended consequences, and other such matters; see, e.g., Kamm (2007).

26. Armstrong (2010).

27. As a rule of thumb, if one plans to use multiple safety mechanisms to contain an AI, it may be wise to work on each one as if it were intended to be the sole safety mechanism and as if it were therefore required to be individually sufficient. If one puts a leaky bucket inside another leaky bucket, the water still comes out.

28. A variation of the same idea is to build the AI so that it is continuously motivated to act on its best guesses about what the implicitly defined standard is. In this setup, the AI’s final goal is always to act on the implicitly defined standard, and it pursues an investigation into what this standard is only for instrumental reasons.

## Notes to Chapter 10: Oracles, genies, sovereigns, tools

1. These names are, of course, anthropomorphic and should not be taken seriously as analogies. They are just meant as labels for some prima facie different concepts of possible system types that one might consider trying to build.

2. In response to a question about the outcome of the next election, one would not wish to be served with a comprehensive list of the projected position and momentum vectors of nearby particles.

3. Indexed to a particular instruction set on a particular machine.

4. Kuhn (1962); de Blanc (2011).

5. It would be harder to apply such a “consensus method” to genies or sovereigns, because there may often be numerous sequences of basic actions (such as sending particular patterns of electrical signals to the system’s actuators) that would be almost exactly equally effective at achieving a given objective; whence slightly different agents may legitimately choose slightly different actions, resulting in a failure to reach consensus. By contrast, with appropriately formulated questions, there would usually be a small number of suitable answer options (such as “yes” and “no”). (On the concept of a Schelling point, also referred to as a “focal point,” see Schelling [1980].)

6. Is not the world economy in some respects analogous to a weak genie, albeit one that charges for its services? A vastly bigger economy, such as might develop in the future, might then approximate a genie with collective superintelligence. One important respect in which the current economy is unlike a genie is that although I can (for a fee) command the economy to deliver a pizza to my door, I cannot command it to deliver peace. The reason is not that the economy is insufficiently powerful, but that it is insufficiently coordinated. In this respect, the economy resembles an assembly of genies serving different masters (with competing agendas) more than it resembles a single genie or any other type of unified agent. Increasing the total power of the economy by making each constituent genie more powerful, or by adding more genies, would not necessarily render the economy more capable of delivering peace. In order to function like a superintelligent genie, the economy would not only need to grow in its ability to inexpensively produce goods and services (including ones that require radically new technology), it would also need to become better able to solve global coordination problems.

7. If the genie were somehow incapable of not obeying a subsequent command—and somehow incapable of reprogramming itself to get rid of this susceptibility—then it could act to prevent any new command from being issued.

8. Even an oracle that is limited to giving yes/no answers could be used to facilitate the search for a genie or sovereign AI, or indeed could be used directly as a component in such an AI. The oracle could also be used to produce the actual code for such an AI if a sufficiently large number of questions can be asked. A series of such questions might take roughly the following form: “In the binary version of the code of the first AI that you thought of that would constitute a genie, is the nth symbol a zero?”

9. One could imagine a slightly more complicated oracle or genie that accepts questions or commands only if they are issued by a designated authority, though this would still leave open the possibility of that authority becoming corrupted or being blackmailed by a third party.

10. John Rawls, a leading political philosopher of the twentieth century, famously employed the expository device of a veil of ignorance as a way of characterizing the kinds of preference that should be taken into account in the formulation of a social contract. Rawls suggested that we should imagine we were choosing a social contract from behind a veil of ignorance that prevents us from knowing which person we will be and which social role we will occupy, the idea being that in such a situation we would have to think about which society would be generally fairest and most desirable without regard to our egoistic interests and self-serving biases that might otherwise make us prefer a social order in which we ourselves enjoy unjust privileges. See Rawls (1971).

11. Karnofsky (2012).

12. A possible exception would be software hooked up to sufficiently powerful actuators, such as software in early warning systems if connected directly to nuclear warheads or to human officers authorized to launch a nuclear strike. Malfunctions in such software can result in high-risk situations. This has happened at least twice within living memory. On November 9, 1979, a computer problem led NORAD (North American Aerospace Defense Command) to make a false report of an incoming full-scale Soviet attack on the United States. The USA made emergency retaliation preparations before data from early-warning radar systems showed that no attack had been launched (McLean and Stewart 1979). On September 26, 1983, the malfunctioning Soviet Oko nuclear early-warning system reported an incoming US missile strike. The report was correctly identified as a false alarm by the duty officer at the command center, Stanislav Petrov: a decision that has been credited with preventing thermonuclear war (Lebedev 2004). It appears that a war would probably have fallen short of causing human extinction, even if it had been fought with the combined arsenals held by all the nuclear powers at the height of the Cold War, though it would have ruined civilization and caused unimaginable death and suffering (Gaddis 1982; Parrington 1997). But bigger stockpiles might be accumulated in future arms races, or even deadlier weapons might be invented, or our models of the impacts of a nuclear Armageddon (particularly of the severity of the consequent nuclear winter) might be wrong.

13. This approach could fit the category of a direct-specification rule-based control method.

14. The situation is essentially the same if the solution criterion specifies a goodness measure rather than a sharp cutoff for what counts as a solution.

15. An advocate for the oracle approach could insist that there is at least a possibility that the user would spot the flaw in the proffered solution—recognize that it fails to match the user’s intent even while satisfying the formally specified success criteria. The likelihood of catching the error at this stage would depend on various factors, including how humanly understandable the oracle’s outputs are and how charitable it is in selecting which features of the potential outcome to bring to the user’s attention. Alternatively, instead of relying on the oracle itself to provide these functionalities, one might try to build a separate tool to do this, a tool that could inspect the pronouncements of the oracle and show us in a helpful way what would happen if we acted upon them. But to do to this in full generality would require another superintelligent oracle whose divinations we would then have to trust; so the reliability problem would not have been solved, only displaced. One might seek to gain an increment of safety through the use of multiple oracles to perform peer review, but this does not protect in cases where all the oracles fail in the same way—as may happen if, for instance, they have all been given the same formal specification of what counts as a satisfactory solution.

16. Bird and Layzell (2002) and Thompson (1997); also Yaeger (1994, 13–14).

17. Williams (1966).

18. Leigh (2010).

19. This example is borrowed from Yudkowsky (2011).

20. Wade (1976). Computer experiments have also been conducted with simulated evolution designed to resemble aspects of biological evolution—again with sometimes strange results (see, e.g., Yaeger [1994]).

21. With sufficiently great—finite but physically implausible—amounts of computing power, it would probably be possible to achieve general superintelligence with currently available algorithms. (Cf., e.g., the AIXItl system; Hutter [2001].) But even the continuation of Moore’s law for another hundred years would not suffice to attain the required levels of computing power to achieve this.

## Notes to Chapter 11: Multipolar scenarios

1. Not because this is necessarily the most likely or the most desirable type of scenario, but because it is the one easiest to analyze with the toolkit of standard economic theory, and thus a convenient starting point for our discussion.

2. American Horse Council (2005). See also Salem and Rowan (2001).

3. Acemoglu (2003); Mankiw (2009); Zuleta (2008).

4. Fredriksen (2012, 8); Salverda et al. (2009, 133).

5. It is also essential for at least some of the capital to be invested in assets that rise with the general tide. A diversified asset portfolio, such as shares in an index tracker fund, would increase the chances of not entirely missing out.

6. Many of the European welfare systems are unfunded, meaning that pensions are paid from ongoing current workers’ contributions and taxes rather than from a pool of savings. Such schemes would not automatically meet the requirement—in case of sudden massive unemployment, the revenues from which the benefits are paid could dry up. However, governments may choose to make up the shortfall from other sources.

7. American Horse Council (2005).

8. Providing 7 billion people an annual pension of $90,000 would cost $630 trillion a year, which is ten times the current world GDP. Over the last hundred years, world GDP has increased about nineteenfold from around $2 trillion in 1900 to 37 trillion in 2000 (in 1990 int. dollars) according to Maddison (2007). So if the growth rates we have seen over the past hundred years continued for the next two hundred years, while population remained constant, then providing everybody with an annual $90,000 pension would cost about 3% of world GDP. An intelligence explosion might make this amount of growth happen in a much shorter time span. See also Hanson (1998a, 1998b, 2008).

9. And perhaps as much as a millionfold over the past 70,000 years if there was a severe population bottleneck around that time, as has been speculated. See Kremer (1993) and Huff et al. (2010) for more data.

10. Cochran and Harpending (2009). See also Clark (2007) and, for a critique, Allen (2008).

11. Kremer (1993).

12. Basten et al. (2013). Scenarios in which there is a continued rise are also possible. In general, the uncertainty of such projections increases greatly beyond one or two generations into the future.

13. Taken globally, the total fertility rate at replacement was 2.33 children per woman in 2003. This number comes from the fact that it takes two children per woman to replace the parents, plus a “third of a child” to make up for (1) the higher probability of boys being born, and (2) early mortality prior to the end of their fertile life. For developed nations, the number is smaller, around 2.1, because of lower mortality rates. (See Espenshade et al. [2003, Introduction, Table 1, 580].) The population in most developed countries would decline if it were not for immigration. A few notable examples of countries with sub-replacement fertility rates are: Singapore at 0.79 (lowest in the world), Japan at 1.39, People’s Republic of China at 1.55, European Union at 1.58, Russia at 1.61, Brazil at 1.81, Iran at 1.86, Vietnam at 1.87, and the United Kingdom at 1.90. Even the U.S. population would probably decrease slightly with a fertility rate of 2.05. (See CIA [2013].)

14. The fullness of time might occur many billions of years from now.

15. Carl Shulman points out that if biological humans count on living out their natural lifespans alongside the digital economy, they need to assume not only that the political order in the digital sphere would be protective of human interests but that it would remain so over very long periods of time (Shulman 2012). For example, if events in the digital sphere unfolds a thousand times faster than on the outside, then a biological human would have to rely on the digital body politic holding steady for 50,000 years of internal change and churn. Yet if the digital political world were anything like ours, there would be a great many revolutions, wars, and catastrophic upheavals during those millennia that would probably inconvenience biological humans on the outside. Even a 0.01% risk per year of a global thermonuclear war or similar cataclysm would entail a near certain loss for the biological humans living out their lives in slowmo sidereal time. To overcome this problem, a more stable order in the digital realm would be required: perhaps a singleton that gradually improves its own stability.

16. One might think that even if machines were far more efficient than humans, there would still be some wage level at which it would be profitable to employ a human worker; say at 1 cent an hour. If this were the only source of income for humans, our species would go extinct since human beings cannot survive on 1 cent an hour. But humans also get income from capital. Now, if we are assuming that population grows until total income is at subsistence level, one might think this would be a state in which humans would be working hard. For example, suppose subsistence level income is $1/day. Then, it might seem, population would grow until per person capital provided only a 90 cents per day income, which people would have to supplement with ten hours of hard labor to make up the remaining 10 cents. However, this need not be so, because the subsistence level income depends on the amount of work that is done: harder-working humans burn more calories. Suppose that each hour of work increases food costs by 2 cents. We then have a model in which humans are idle in equilibrium.

17. It might be thought that a caucus as enfeebled as this would be unable to vote and to otherwise defend its entitlements. But the pod-dwellers could give power of attorney to AI fiduciaries to manage their affairs and represent their political interests. (This part of the discussion in this section is premised on the assumption that property rights are respected.)

18. It is unclear what is the best term. “Kill” may suggest more active brutality than is warranted. “End” may be too euphemistic. One complication is that there are two potentially separate events: ceasing to actively run a process, and erasing the information template. A human death normally involves both events, but for an emulation they can come apart. That a program temporarily ceases to run may be no more consequential than that a human sleeps: but to permanently cease running may be the equivalent of entering a permanent coma. Still further complications arise from the fact that emulations can be copied and that they can run at different speeds: possibilities with no direct analogs in human experience. (Cf. Bostrom [2006b]; Bostrom and Yudkowsky [forthcoming].)

19. There will be a trade-off between total parallel computing power and computational speed, as the highest computational speeds will be attainable only at the expense of a reduction in power efficiency. This will be especially true after one enters the era of reversible computing.

20. An emulation could be tested by leading it into temptation. By repeatedly testing how an emulation started from a certain prepared state reacts to various sequences of stimuli, one could obtain high confidence in the reliability of that emulation. But the further the mental state is subsequently allowed to develop away from its validated starting point, the less certain one could be that it would remain reliable. (In particular, since a clever emulation might surmise it is sometimes in a simulation, one would need to be cautious about extrapolating its behavior into situations where its simulation hypothesis would weigh less heavily in its decision-making.)

21. Some emulations might identify with their clan—i.e. all of their copies and variations derived from the same template—rather with any one particular instantiation. Such an emulation might not regard its own termination as a death event, if it knew that other clan members would survive. Emulations may know that they will get reverted to a particular stored state at the end of the day and lose that day’s memories, but be as little put off by this as the partygoer who knows she will awake the next morning without any recollection of the previous night: regarding this as retrograde amnesia, not death.

22. An ethical evaluation might take into account many other factors as well. Even if all the workers were constantly well pleased with their condition, the outcome might still be deeply morally objectionable on other grounds—though which other grounds is a matter of dispute between rival moral theories. But any plausible assessment would consider subjective well-being to be one important factor. See also Bostrom and Yudkowsky (forthcoming).

23. World Values Survey (2008).

24. Helliwell and Sachs (2012).

25. Cf. Bostrom (2004). See also Chislenko (1996) and Moravec (1988).

26. It is hard to say whether the information-processing structures that would emerge in this kind of scenario would be conscious (in the sense of having qualia, phenomenal experience). The reason this is hard is partly our empirical ignorance about which cognitive entities would arise and partly our philosophical ignorance about which types of structure have consciousness. One could try to reframe the question, and instead of asking whether the future entities would be conscious, one could ask whether the future entities would have moral status; or one could ask whether they would be such that we have preferences about their “well-being.” But these questions may be no easier to answer than the question about consciousness—in fact, they might require an answer to the consciousness question inasmuch as moral status or our preferences depend on whether the entity in question can subjectively experience its condition.

27. For an argument that both geological and human history manifest such a trend toward greater complexity, see Wright (2001). For an opposing argument (criticized in Chapter 9 of Wright’s book), see Gould (1990). See also Pinker (2011) for an argument that we are witnessing a robust long-term trend toward decreasing violence and brutality.

28. For more on observation selection theory, see Bostrom (2002a).

29. Bostrom (2008a). A much more careful examination of the details of our evolutionary history would be needed to circumvent the selection effect. See, e.g., Carter (1983, 1993); Hanson (1998d); Ćirković et al. (2010).

30. Kansa (2003).

31. E.g., Zahavi and Zahavi (1997).

32. See Miller (2000).

33. Kansa (2003). For a provocative take, see also Frank (1999).

34. It is not obvious how best to measure the degree of global political integration. One perspective would be that whereas a hunter–gatherer tribe might have integrated a hundred individuals into a decision-making entity, the largest political entities today contain more than a billion individuals. This would amount to a difference of seven orders of magnitude, with only one additional magnitude to go before the entire world population is contained within a single political entity. However, at the time when the tribe was the largest scale of integration, the world population was much smaller. The tribe might have contained as much as a thousandth of the individuals then living. This would make the increase in the scale of political integration as little as two orders of magnitude. Looking at the fraction of world population that is politically integrated, rather than at absolute numbers, seems appropriate in the present context (particularly as the transition to machine intelligence may cause a population explosion, of emulations or other digital minds). But there have also been developments in global institutions and networks of collaboration outside of formal state structures, which should also be taken into account.

35. One of the reasons for supposing that the first machine intelligence revolution will be swift—the possible existence of a hardware overhang—does not apply here. However, there could be other sources of rapid gain, such as a dramatic breakthrough in software associated with transitioning from emulation to purely synthetic machine intelligence.

36. Shulman (2010b).

37. How the pro et contra would balance out might depend on what kind of work the superorganism is trying to do, and how generally capable the most generally capable available emulation template is. Part of the reason many different types of human beings are needed in large organizations today is that humans who are very talented in many domains are rare.

38. It is of course very easy to make multiple copies of a software agent. But note that copying is not in general sufficient to ensure that the copies have the same final goals. In order for two agents to have the same final goals (in the relevant sense of “same”), the goals must coincide in their indexical elements. If Bob is selfish, a copy of Bob will likewise be selfish. Yet their goals do not coincide: Bob cares about Bob whereas Bob-copy cares about Bob-copy.

39. Shulman (2010b, 6).

40. This might be more feasible for biological humans and whole brain emulations than for arbitrary artificial intelligences, which might be constructed so as to have hidden compartments or functional dynamics that may be very hard to discover. On the other hand, AIs specifically built to be transparent should allow for more thoroughgoing inspection and verification than is possible with brain-like architectures. Social pressures may encourage AIs to expose their source code, and to modify themselves to render themselves transparent—especially if being transparent is a precondition to being trusted and thus to being given the opportunity to partake in beneficial transactions. Cf. Hall (2007).

41. Some other issues that seem relatively minor, especially in cases where the stakes are enormous (as they are for the key global coordination failures), include the search cost of finding policies that could be of mutual interest, and the possibility that some agents might have a basic preference for “autonomy” in a form that would be reduced by entering into comprehensive global treaties that have monitoring and enforcement mechanisms attached.

42. An AI might perhaps achieve this by modifying itself appropriately and then giving observers read-only access to its source code. A machine intelligence with a more opaque architecture (such as an emulation) might perhaps achieve it by publicly applying to itself some motivation selection method. Alternatively, an external coercive agency, such as a superorganism police force, might perhaps be used not only to enforce the implementation of a treaty reached between different parties, but also internally by a single party to commit itself to a particular course of action.

43. Evolutionary selection might have favored threat-ignorers and even characters visibly so highly strung that they would rather fight to the death than suffer the slightest discomfiture. Such a disposition might bring its bearer valuable signaling benefits. (Any such instrumental rewards of having the disposition need of course play no part in the agent’s conscious motivation: he may value justice or honor as ends in themselves.)

44. A definitive verdict on these matters, however, must await further analysis. There are various other potential complications which we cannot explore here.

## Notes to Chapter 12: Acquiring values

1. Various complications and modulations of this basic idea could be introduced. We discussed one variation in Chapter 8—that of a satisficing, as opposed to maximizing, agent—and in the next chapter we briefly touch on the issue of alternative decision theories. However, such issues are not essential to the thrust of this subsection, so we will keep things simple by focusing here on the case of an expected utility-maximizing agent.

2. Assuming the AI is to have a non-trivial utility function. It would be very easy to build an agent that always chooses an action that maximizes expected utility if its utility function is, e.g., the constant function U(w) = 0 . Every action would equally well maximize expected utility relative to that utility function.

3. Also because we have forgotten the blooming buzzing confusion of our early infancy, a time when we could not yet see very well because our brain had not yet learned to interpret its visual input.

4. See also Yudkowsky (2011) and the review in section 5 of Muehlhauser and Helm (2012).

5. It is perhaps just about conceivable that advances in software engineering could eventually overcome these difficulties. Using modern tools, a single programmer can produce software that would have been beyond the pale of a sizeable team of developers forced to write directly in machine code. Today’s AI programmers gain expressiveness from the wide availability of highquality machine learning and scientific calculation libraries, enabling someone to hack up, for instance, a unique-face-counting webcam application by chaining libraries together that they never could have written on their own. The accumulation of reusable software, produced by specialists but useable by non-specialists, will give future programmers an expressiveness advantage. For example, a future robotics programmer might have ready access to standard facial imprinting libraries, typical-office-building-object collections, specialized trajectory libraries, and many other functionalities that are currently unavailable.

6. Dawkins (1995, 132). The claim here is not necessarily that the amount of suffering in the natural world outweighs the amount of positive well-being.

7. Required population sizes might be much larger or much smaller than those that existed in our own ancestry. See Shulman and Bostrom (2012).

8. If it were easy to get an equivalent result without harming large numbers of innocents, it would seem morally better to do so. If, nevertheless, digital persons are created and made to suffer unjust harm, it may be possible to compensate them for their suffering by saving them to file and later (when humanity’s future is secured) rerunning them under more favorable conditions. Such restitution could be compared in some ways to religious conceptions of an afterlife in the context of theological attempts to address the evidential problem of evil.

9. One of the field’s leading figures, Richard Sutton, defines reinforcement learning not in terms of a learning method but in terms of a learning problem: any method that is well suited to solving that problem is considered a reinforcement learning method (Sutton and Barto 1998, 4). The present discussion, in contrast, pertains to methods where the agent can be conceived of as having the final goal of maximizing (some notion of) cumulative reward. Since an agent with some very different kind of final goal might be skilled at mimicking a reward-seeking agent in a wide range of situations, and could thus be well suited to solving reinforcement learning problems, there could be methods that would count as “reinforcement learning methods” on Sutton’s definition that would not result in a wireheading syndrome. The remarks in the text, however, apply to most of the methods actually used in the reinforcement learning community.

10. Even if, somehow, a human-like mechanism could be set up within a human-like machine intellect, the final goals acquired by this intellect need not resemble those of a well-adjusted human, unless the rearing environment for this digital baby also closely matched that of an ordinary child: something that would be difficult to arrange. And even with a human-like rearing environment, a satisfactory result would not be guaranteed, since even a subtle difference in innate dispositions can result in very different reactions to a life event. It may, however, be possible to create a more reliable value-accretion mechanism for human-like minds in the future (perhaps using novel drugs or brain implants, or their digital equivalents).

11. One might wonder why it appears we humans are not trying to disable the mechanism that leads us to acquire new final values. Several factors might be at play. First, the human motivation system is poorly described as a coldly calculating utility-maximizing algorithm. Second, we might not have any convenient means of altering the ways we acquire values. Third, we may have instrumental reasons (arising, e.g., from social signaling needs) for sometimes acquiring new final values—instrumental values might not be as useful if our minds are partially transparent to other people, or if the cognitive complexity of pretending to have a different set of final values than we actually do is too taxing. Fourth, there are cases where we do actively resist tendencies that produce changes in our final values, for instance when we seek to resist the corrupting influence of bad company. Fifth, there is the interesting possibility that we place some final value on being the kind of agent that can acquire new final values in normal human ways.

12. Or one might try to design the motivation system so that the AI is indifferent to such replacement; see Armstrong (2010).

13. We will here draw on some elucidations made by Daniel Dewey (2011). Other background ideas contributing to this framework have been developed by Marcus Hutter (2005) and Shane Legg (2008), Eliezer Yudkowsky (2001), Nick Hay (2005), Moshe Looks, and Peter de Blanc.

14. To avoid unnecessary complications, we confine our attention to deterministic agents that do not discount future rewards.

15. Mathematically, an agent’s behavior can be formalized as an agent function, which maps each possible interaction history to an action. Except for the very simplest agents, it is infeasible to represent the agent function explicitly as a lookup table. Instead, the agent is given some way of computing which action to perform. Since there are many ways of computing the same agent function, this leads to a finer individuation of an agent as an agent program. An agent program is a specific program or algorithm that computes an action for any given interaction history. While it is often mathematically convenient and useful to think of an agent program that interacts with some formally specified environment, it is important to remember that this is an idealization. Real agents are physically instantiated. This means not only that the agent interacts with the environment via its sensors and effectors, but also that the agent’s “brain” or controller is itself part of physical reality. Its operations can therefore in principle be affected by external physical interferences (and not only by receiving percepts from its sensors). At some point, therefore, it becomes necessary to view an agent as an agent implementation. An agent implementation is a physical structure that, in the absence of interference from its environment, implements an agent function. (This definition follows Dewey [2011].)

16. Dewey proposes the following optimality notion for a value learning agent: y =argmax ∑ P(yx |yx y )∑U(yx ))P(U|yx ). k yk 1 ≤m k k ≤m 2 ≤m xkyxk+1:m U Here, P and P are two probability functions. The second summation ranges over some suitable class of utility functions over possible interaction histories. In the version presented in the text, we have made explicit some dependencies as well as availed ourselves of the simplifying possible worlds notation.

17. It should be noted that the set of utility functions  should be such that utilities can be compared and averaged. In general, this is problematic, and it is not always obvious how to represent different moral theories of the good in terms of cardinal utility functions. See, e.g., MacAskill

18. Or more generally, since  might not be such as to directly imply for any given pair of a possible world and a utility function (w, U) whether the proposition (U) is true in w, what needs to be done is to give the AI an adequate representation of the conditional probability distribution P((U) | w) .

19. Consider first , the class of actions that are possible for an agent. One issue here is what exactly should count as an action: only basic motor commands (e.g. “send an electric pulse along output channel #00101100”), or higher-level actions (e.g. “keep camera centered on face”)? Since we are trying to develop an optimality notion rather than a practical implementation plan, we may take the domain to be basic motor commands (and since the set of possible motor commands might change over time, we may need to index  to time). However, in order to move toward implementation it will presumably be necessary to introduce some kind of hierarchical planning process, and one may then need to consider how to apply the formula to some class of higher-level actions. Another issue is how to analyze internal actions (such as writing strings to working memory). Since internal actions can have important consequences, one would ideally want  to include such basic internal actions as well as motor commands. But there are limits to how far one can go in this direction: the computation of the expected utility of any action in  requires multiple computational operations, and if each such operation were also regarded as an action in  that needed to be evaluated according to AI-VL, we would face an infinite regress that would make it impossible to ever get started. To avoid the infinite regress, one must restrict any explicit attempt to estimate the expected utility to a limited number of significant action possibilities. The system will then need some heuristic process that identifies some significant action possibilities for further consideration. (Eventually the system might also get around to making explicit decisions regarding some possible actions to make modifications to this heuristic process, actions that might have been flagged for explicit attention by this self-same process; so that in the long run the system might become increasingly effective at approximating the ideal identified by AI-VL.) Consider next , which is a class of possible worlds. One difficulty here is to specify  so that it is sufficiently inclusive. Failure to include some relevant w in  could render the AI incapable of representing a situation that actually occurs, resulting in the AI making bad decisions. Suppose, for example, that we use some ontological theory to determine the makeup of . For instance, we include in  all possible worlds that consist of a certain kind of spacetime manifold populated by elementary particles found in the standard model in particle physics. This could distort the AI’s epistemology if the standard model is incomplete or incorrect. One could try to use a bigger -class to cover more possibilities; but even if one could ensure that every possible physical universe is included one might still worry that some other possibility would be left out. For example, what about the possibility of dualistic possible worlds in which facts about consciousness do not supervene on facts about physics? What about indexical facts? Normative facts? Facts of higher mathematics? What about other kinds of fact that we fallible humans might have overlooked but that could turn out to be important to making things go as well as possible? Some people have strong convictions that some particular ontological theory is correct. (Among people writing on the future of AI, a belief in a materialistic ontology, in which the mental supervenes on the physical, is often taken for granted.) Yet a moment’s reflection on the history of ideas should help us realize that there is a significant possibility that our favorite ontology is wrong. Had nineteenth-century scientists attempted a physics-inspired definition of , they would probably have neglected to include the possibility of a non-Euclidian spacetime or an Everettian (“many-worlds”) quantum theory or a cosmological multiverse or the simulation hypothesis—possibilities that now appear to have a substantial probability of obtaining in the actual world. It is plausible that there are other possibilities to which we in the present generation are similarly oblivious. (On the other hand, if  is too big, there arise technical difficulties related to having to assign measures over transfinite sets.) The ideal might be if we could somehow arrange things such that the AI could use some kind of open-ended ontology, one that the AI itself could subsequently extend using the same principles that we would use when deciding whether to recognize a new type of metaphysical possibility. Consider P(w | Ey). Specifying this conditional probability is not strictly part of the valueloading problem. In order to be intelligent, the AI must already have some way of deriving reasonably accurate probabilities over many relevant factual possibilities. A system that falls too far short on this score will not pose the kind of danger that concerns us here. However, there may be a risk that the AI will end up with an epistemology that is good enough to make the AI instrumentally effective yet not good enough to enable it to think correctly about some possibilities that are of great normative importance. (The problem of specifying P(w | Ey) is in this way related to the problem of specifying .) Specifying P(w | Ey) also requires confronting other issues, such as how to represent uncertainty over logical impossibilities. The aforementioned issues—how to define a class of possible actions, a class of possible worlds, and a likelihood distribution connecting evidence to classes of possible worlds—are quite generic: similar issues arise for a wide range of formally specified agents. It remains to examine a set of issues more peculiar to the value learning approach; namely, how to define , (U), and P((U) | w).  is a class of utility functions. There is a connection between  and  inasmuch as each utility function U (w) in  should ideally assign utilities to each possible world w in . But  also needs to be wide in the sense of containing sufficiently many and diverse utility functions for us to have justified confidence that at least one of them does a good job of representing the intended values. The reason for writing P((U) | w) rather than simply P(U | w) is to emphasize the fact that probabilities are assigned to propositions. A utility function, per se, is not a proposition, but we can transform a utility function into a proposition by making some claim about it. For example, we may claim of a particular utility function U(.) that it describes the preferences of a particular person, or that it represents the prescriptions implied by some ethical theory, or that it is the utility function that the principal would have wished to have implemented if she had thought things through. The “value criterion” (.) can thus be construed as a function that takes as its argument a utility function U and gives as its value a proposition to the effect that U satisfies the criterion . Once we have defined a proposition (U), we can hopefully obtain the conditional probability P((U) | w) from whatever source we used to obtain the other probability distributions in the AI. (If we are certain that all normatively relevant facts are taken into account in individuating the possible worlds , then P((U) | w) should equal zero or one in each possible world.) The question remains how to define . This is discussed further in the text.

20. These are not the only challenges for the value learning approach. Another issue, for instance, is how to get the AI to have sufficiently sensible initial beliefs—at least by the time it becomes strong enough to subvert the programmers’ attempts to correct it.

21. Yudkowsky (2001).

22. The term is taken from American football, where a “Hail Mary” is a very long forward pass made in desperation, typically when the time is nearly up, on the off chance that a friendly player might catch the ball near the end zone and score a touchdown.

23. The Hail Mary approach relies on the idea that a superintelligence could articulate its preferences with greater exactitude than we humans can articulate ours. For example, a superintelligence could specify its preference as code. So if our AI is representing other superintelligences as computational processes that are perceiving their environment, then our AI should be able to reason about how those alien superintelligences would respond to some hypothetical stimulus, such as a “window” popping up in their visual field presenting them with the source code of our own AI and asking them to specify their instructions to us in some convenient pre-specified format. Our AI could then read off these imaginary instructions (from its own model of this counterfactual scenario wherein these alien superintelligences are represented), and we would have built our AI so that it would be motivated to follow those instructions.

24. An alternative would be to create a detector that looks (within our AI’s world model) for (representations of) physical structures created by a superintelligent civilization. We could then bypass the step of identifying the hypothesized superintelligences’ preference functions, and give our own AI the final value of trying to copy whatever physical structures it believes superintelligent civilizations tend to produce. There are technical challenges with this version, too, however. For instance, since our own AI, even after it has attained superintelligence, may not be able to know with great precision what physical structures other superintelligences build, our AI may need to resort to trying to approximate those structures. To do this, it would seem our AI would need a similarity metric by which to judge how closely one physical artifact approximates another. But similarity metrics based on crude physical measures may be inadequate—it being no good, for example, to judge that a brain is more similar to a Camembert cheese than to a computer running an emulation. A more feasible approach might be to look for “beacons”: messages about utility functions encoded in some suitable simple format. We would build our AI to want to follow whatever such messages about utility functions it hypothesizes might exist out there in the universe; and we would hope that friendly extraterrestrial AIs would create a variety of beacons of the types that they (with their superintelligence) reckon that simple civilizations like ours are most likely to build our AI to look for.

25. If every civilization tried to solve the value-loading problem through a Hail Mary, the pass would fail. Somebody has to do it the hard way.

26. Christiano (2012).

27. The AI we build need not be able to find the model either. Like us, it could reason about what such a complex implicit definition would entail (perhaps by looking at its environment and following much the same kind of reasoning that we would follow).

28. Cf. Chapters 9 and 11.

29. For instance, MDMA may temporarily increase empathy; oxytocin may temporarily increase trust (Vollenweider et al. 1998; Bartz et al. 2011). However, the effects seem quite variable and context dependent.

30. The enhanced agents might be killed off or placed in suspended animation (paused), reset to an earlier state, or disempowered and prevented from receiving any further enhancements, until the overall system has reached a more mature and secure state where these earlier rogue elements no longer pose a system-wide threat.

31. The issue might also be less obvious in a future society of biological humans, one that has access to advanced surveillance or biomedical techniques for psychological manipulation, or that is wealthy enough to afford an extremely high ratio of security professionals to invigilate the regular citizenry (and each other).

32. Cf. Armstrong (2007) and Shulman (2010b).

33. One open question is to what degree a level n supervisor would need to monitor not only their level (n − 1) supervisees, but also their level (n − 2) supervisees, in order to know that the level (n − 1) agents are doing their jobs properly. And to know that the level (n − 1) agents have successfully managed the level (n − 2) agents, is it further necessary for the level n agent to also monitor the level (n − 3) agents?

34. This approach straddles the line between motivation selection and capability control. Technically, the part of the arrangement that consists of human beings controlling a set of software supervisors counts as capability control, whereas the part of the arrangement that consists of layers of software agents within the system controlling other layers is motivation selection (insofar as it is an arrangement that shapes the system’s motivational tendencies).

35. In fact, many other costs deserve consideration but cannot be given it here. For example, whatever agents are charged with ruling over such a hierarchy might become corrupted or debased by their power.

36. For this guarantee to be effective, it must be implemented in good faith. This would rule out certain kinds of manipulation of the emulation’s emotional and decision-making faculties which might otherwise be used (for instance) to install a fear of being halted or to prevent the emulation from rationally considering its options.

37. See, e.g., Brinton (1965); Goldstone (1980, 2001). (Social science progress on these questions could make a nice gift to the world’s despots, who might use more accurate predictive models of social unrest to optimize their population control strategies and to gently nip insurgencies in the bud with less-lethal force.)

38. Cf. Bostrom (2011a, 2009b).

39. In the case of an entirely artificial system, it might be possible to obtain some of the advantages of an institutional structure without actually creating distinct subagents. A system might incorporate multiple perspectives into its decision process without endowing each of those perspectives with its own panoply of cognitive faculties required for independent agency. It could be tricky, however, to fully implement the “observe the behavioral consequences of a proposed change, and revert back to an earlier version if the consequences appear undesirable from the ex ante standpoint” feature described in the text in a system that is not composed of subagents.

## Notes to Chapter 13: Choosing the criteria for choosing

1. A recent canvass of professional philosophers found the percentage of respondents who “accept or leans toward” various positions. On normative ethics, the results were deontology 25.9%; consequentialism 23.6%; virtue ethics 18.2%. On metaethics, results were moral realism 56.4%; moral anti-realism 27.7%. On moral judgment: cognitivism 65.7%; non-cognitivism 17.0% (Bourget and Chalmers 2009).

2. Pinker (2011).

3. For a discussion of this issue, see Shulman et al. (2009).

4. Moore (2011).

5. Bostrom (2006b).

6. Bostrom (2009b).

7. Bostrom (2011a).

8. More precisely, we should defer to its opinion except on those topics where we have good reason to suppose that our beliefs are more accurate. For example, we might know more about what we are thinking at a particular moment than the superintelligence does if it is not able to scan our brains. However, we could omit this qualification if we assume that the superintelligence has access to our opinions; we could then also defer to the superintelligence the task of judging when our opinions should be trusted. (There might remain some special cases, involving indexical information, that need to be handled separately—by, for example, having the superintelligence explain to us what it would be rational to believe from our perspective.) For an entry into the burgeoning philosophical literature on testimony and epistemic authority, see, e.g., Elga (2007).

9. Yudkowsky (2004). See also Mijic (2010).

10. For example, David Lewis proposed a dispositional theory of value, which holds, roughly, that some thing X is a value for A if and only if A would want to want X if A were perfectly rational and ideally acquainted with X (Smith et al. 1989). Kindred ideas had been put forward earlier; see, e.g., Sen and Williams (1982), Railton (1986), and Sidgwick and Jones (2010). Along somewhat similar lines, one common account of philosophical justification, the method of reflective equilibrium, proposes a process of iterative mutual adjustment between our intuitions about particular cases, the general rules which we think govern these cases, and the principles according to which we think these elements should be revised, to achieve a more coherent system; see, e.g., Rawls (1971) and Goodman (1954).

11. Presumably the intention here is that when the AI acts to prevent such disasters, it should do it with as light a touch as possible, i.e. in such a manner that it averts the disaster but without exerting too much influence over how things turn out for humanity in other respects.

12. Yudkowsky (2004).

13. Rebecca Roache, personal communication.

14. The three principles are “Defend humans, the future of humanity, and humane nature” (humane here being that which we wish we were, as distinct from human, which is what we are); “Humankind should not spend the rest of eternity desperately wishing that the programmers had done something differently”; and “Help people.”

15. Some religious groups place a strong emphasis on faith in contradistinction to reason, the latter of which they may regard—even in its hypothetically most idealized form and even after it would have ardently and open-mindedly studied every scripture, revelation, and exegesis—to be insufficient for the attainment of essential spiritual insights. Those holding such views might not regard CEV as an optimal guide to decision-making (though they might still prefer it to various other imperfect guides that might in actuality be followed if the CEV approach were eschewed).

16. An AI acting like a latent force of nature to regulate human interactions has been referred to as a “Sysop,” a kind of “operating system” for the matter occupied by human civilization. See Yudkowsky (2001).

17. “Might,” because conditional on humanity’s coherent extrapolated volition wishing not to extend moral consideration to these entities, it is perhaps doubtful whether those entities actually have moral status (despite it seeming very plausible now that they do). “Potentially,” because even if a blocking vote prevents the CEV dynamic from directly protecting these outsiders, there is still a possibility that, within whatever ground rules are left over once the initial dynamic has run, individuals whose wishes were respected and who want some outsiders’ welfare to be protected may successfully bargain to attain this outcome (at the expense of giving up some of their own resources). Whether this would be possible might depend on, among other things, whether the outcome of the CEV dynamic is a set of ground rules that makes it feasible to reach negotiated resolutions to issues of this kind (which might require provisions to overcome strategic bargaining problems).

18. Individuals who contribute positively to realizing a safe and beneficial superintelligence might merit some special reward for their labour, albeit something short of a near-exclusive mandate to determine the disposition of humanity’s cosmic endowment. However, the notion of everybody getting an equal share in our extrapolation base is such a nice Schelling point that it should not be lightly tossed away. There is, in any case, an indirect way in which virtue could be rewarded: namely, the CEV itself might turn out to specify that good people who exerted themselves on behalf of humanity should be suitably recognized. This could happen without such people being given any special weight in the extrapolation base if—as is easily imaginable—our CEV would endorse (in the sense of giving at least some nonzero weight to) a principle of just desert.

19. Bostrom et al. (2013).

20. To the extent that there is some (sufficiently definite) shared meaning that is being expressed when we make moral assertions, a superintelligence should be able to figure out what that meaning is. And to the extent that moral assertions are “truth-apt” (i.e. have an underlying propositional character that enables them to be true or false), the superintelligence should be able to figure out which assertions of the form “Agent X ought now to Φ” are true. At least, it should outperform us on this task. An AI that initially lacks such a capacity for moral cognition should be able to acquire it if it has the intelligence amplification superpower. One way the AI could do this is by reverseengineering the human brain’s moral thinking and then implement a similar process but run it faster, feed it more accurate factual information, and so forth.

21. Since we are uncertain about metaethics, there is a question of what the AI is to do if the preconditions for MR fail to obtain. One option is to stipulate that the AI shut itself off if it assigns a sufficiently high probability to moral cognitivism being false or to there being no suitable nonrelative moral truths. Alternatively, we could have the AI revert to some alternative approach, such as CEV. We could refine the MR proposal to make it clearer what is to be done in various ambiguous or degenerate cases. For instance, if error theory is true (and hence all positive moral assertions of the form “I ought now to Φ” are false), then the fallback strategy (e.g. shutting down) would be invoked. We could also specify what should happen if there are multiple feasible actions, each of which would be morally right. For example, we might say that in such cases the AI should perform (one of) the permissible actions that humanity’s collective extrapolation would have favored. We might also stipulate what should happen if the true moral theory does not employ terms like “morally right” in its basic vocabulary. For instance, a consequentialist theory might hold that some actions are better than others but that there is no particular threshold corresponding to the notion of an action being “morally right.” We could then say that if such a theory is correct, MR should perform one of the morally best feasible actions, if there is one; or, if there is an infinite number of feasible actions such that for any feasible action there is a better one, then maybe MR could pick any that is at least astronomically better than the best action that any human would have selected in a similar situation, if such an action is feasible—or if not, then an action that is at least as good as the best action a human would have performed. A couple of general points should be borne in mind when thinking about how the MR proposal could be refined. First, we might start conservatively, using the fallback option to cover almost all contingencies and only use the “morally right” option in those that we feel we fully understand. Second, we might add the general modulator to the MR proposal that it is to be “interpreted charitably, and revised as we would have revised it if we had thought more carefully about it before we wrote it down, etc.”

22. Of these terms, “knowledge” might seem the one most readily susceptible to a formal analysis (in information-theoretic terms). However, to represent what it is for a human to know something, the AI may need a sophisticated set of representations relating to complex psychological properties. A human being does not “know” all the information that is stored somewhere in her brain.

23. One indicator that the terms in CEV are (marginally) less opaque is that it would count as philosophical progress if we could analyze moral rightness in terms like those used in CEV. In fact, one of the main strands in metaethics—ideal observer theory—purports to do just that. See, e.g., Smith et al. (1989).

24. This requires confronting the problem of fundamental normative uncertainty. It can be shown that it is not always appropriate to act according to the moral theory that has the highest probability of being true. It can also be shown that it is not always appropriate to perform the action that has the highest probability of being right. Some way of trading probabilities against “degrees of wrongness” or severity of issues at stake seems to be needed. For some ideas in this direction, see Bostrom (2009a).

25. It could possibly even be argued that it is an adequacy condition for any explication of the notion of moral rightness that it account for how Joe Sixpack is able to have some idea of right and wrong.

26. It is not obvious that the morally right thing for us to do is to build an AI that implements MR, even if we assume that the AI itself would always act morally. Perhaps it would be objectionably hubristic or arrogant of us to build such an AI (especially since many people may disapprove of that project). This issue can be partially finessed by tweaking the MR proposal. Suppose that we stipulate that the AI should act (to do what it would be morally right for it to do) only if it was morally right for its creators to have built the AI in the first place; otherwise it should shut itself down. It is hard to see how we would be committing any grave moral wrong in creating that kind of AI, since if it were wrong for us to create it, the only consequence would be that an AI was created that immediately shuts itself down, assuming that the AI has committed no mind crime up to that point. (We might nevertheless have acted wrongly—for instance, by having failed to seize the opportunity to build some other AI instead.) A second issue is supererogation. Suppose there are many actions the AI could take, each of which would be morally right—in the sense of being morally permissible—yet some of which are morally better than the others. One option is to have the AI aim to select the morally best action in any such a situation (or one of the best actions, in case there are several that are equally good). Another option is to have the AI select from among the morally permissible actions one that maximally satisfies some other (non-moral) desideratum. For example, the AI could select, from among the actions that are morally permissible, the action that our CEV would prefer it to take. Such an AI, while never doing anything that is morally impermissible, might protect our interests more than an AI that does what is morally best.

27. When the AI evaluates the moral permissibility of our act of creating the AI, it should interpret permissibility in its objective sense. In one ordinary sense of “morally permissible,” a doctor acts morally permissibly when she prescribes a drug she believes will cure her patient—even if the patient, unbeknownst to the doctor, is allergic to the drug and dies as a result. Focusing on objective moral permissibility takes advantage of the presumably superior epistemic position of the AI.

28. More directly, it depends on the AI’s beliefs about which ethical theory is true (or, more precisely, on its probability distribution over ethical theories).

29. It can be difficult to imagine how superlatively wonderful these physically possible lives might be. See Bostrom (2008c) for a poetic attempt to convey some sense of this. See Bostrom (2008b) for an argument that some of these possibilities could be good for us, good for existing human beings.

30. It might seem deceptive or manipulative to promote one proposal if one thinks that some other proposal would be better. But one could promote it in ways that avoid insincerity. For example, one could freely acknowledge the superiority of the ideal while still promoting the non-ideal as the best attainable compromise.

31. Or some other positively evaluative term, such as “good,” “great,” or “wonderful.”

32. This echoes a principle in software design known as “Do What I Mean,” or DWIM. See Teitelman (1966).

33. Goal content, decision theory, and epistemology are three aspects that should be elucidated; but we do not intend to beg the question of whether there must be a neat decomposition into these three separate components.

34. An ethical project ought presumably to allocate at most a modest portion of the eventual benefits that the superintelligence produces as special rewards to those who contributed in morally permissible ways to the project’s success. Allocating a great portion to the incentive wrapping scheme would be unseemly. It would be analogous to a charity that spends 90% of its income on performance bonuses for its fundraisers and on advertising campaigns to increase donations.

35. How could the dead be rewarded? One can think of several possibilities. At the low end, there could be memorial services and monuments, which would be a reward insofar as people desired posthumous fame. The deceased might also have other preferences about the future that could be honored, for instance concerning cultures, arts, buildings, or natural environments. Furthermore, most people care about their descendants, and special privileges could be granted to the children and grandchildren of contributors. More speculatively, the superintelligence might be able to create relatively faithful simulations of some past people—simulations that would be conscious and that would resemble the original sufficiently to count as a form of survival (according to at least some people’s criteria). This would presumably be easier for people who have been placed in cryonic suspension; but perhaps for a superintelligence it would not be impossible to recreate something quite similar to the original person from other preserved records such as correspondence, publications, audiovisual materials and digital records, or the personal memories of other survivors. A superintelligence might also think of some possibilities that do not readily occur to us.

36. On Pascalian mugging, see Bostrom (2009b). For an analysis of issues related to infinite utilities, see Bostrom (2011a). On fundamental normative uncertainty, see, e.g., Bostrom (2009a).

37. E.g., Price (1991); Joyce (1999); Drescher (2006); Yudkowsky (2010); Dai (2009).

38. E.g., Bostrom (2009a).

39. It is also conceivable that using indirect normativity to specify the AI’s goal content would mitigate the problems that might arise from an incorrectly specified decision theory. Consider, for example, the CEV approach. If it were implemented well, it might be able to compensate for at least some errors in the specification of the AI’s decision theory. The implementation could allow the values that our coherent extrapolated volition would want the AI to pursue to depend on the AI’s decision theory. If our idealized selves knew they were making value specifications for an AI that was using a particular kind of decision theory, they could adjust their value specifications such as to make the AI behave benignly despite its warped decision theory—much like one can cancel out the distorting effects of one lens by placing another lens in front of it that distorts oppositely.

40. Some epistemological systems may, in a holistic manner, have no distinct foundation. In that case, the constitutional inheritance is not a distinct set of principles, but rather, as it were, an epistemic starting point that embodies certain propensities to respond to incoming streams of evidence.

41. See, e.g., the problem of distortion discussed in Bostrom (2011a).

42. For instance, one disputed issue in anthropic reasoning is whether the so-called self-indication assumption should be accepted. The self-indication assumption states, roughly, that from the fact that you exist you should infer that hypotheses according to which larger numbers N of observers exist should receive a probability boost proportional to N. For an argument against this principle, see the “Presumptuous Philosopher” gedanken experiment in Bostrom (2002a). For a defense of the principle, see Olum (2002); and for a critique of that defense, see Bostrom and Ćirković (2003). Beliefs about the self-indication assumption might affect various empirical hypotheses of potentially crucial strategic relevance, for example, considerations such as the Carter–Leslie doomsday argument, the simulation argument, and “great filter” arguments. See Bostrom (2002a, 2003a, 2008a); Carter (1983); Ćirković et al. (2010); Hanson (1998d); Leslie (1996); Tegmark and Bostrom (2005). A similar point could be made with regard to other fraught issues in observation selection theory, such as whether the choice of reference class can be relativized to observer-moments, and if so how.

43. See, e.g., Howson and Urbach (1993). There are also some interesting results that narrow the range of situations in which two Bayesian agents can rationally disagree when their opinions are common knowledge; see Aumann (1976) and Hanson (2006).

44. Cf. the concept of a “last judge” in Yudkowsky (2004).

45. There are many important issues outstanding in epistemology, some mentioned earlier in the text. The point here is that we may not need to get all the solutions exactly right in order to achieve an outcome that is practically indiscernible from the best outcome. A mixture model (which throws together a wide range of diverse priors) might work.

## Notes to Chapter 14: The strategic picture

1. This principle is introduced in Bostrom (2009b, 190), where it is also noted that it is not tautological. For a visual analogy, picture a box with large but finite volume, representing the space of basic capabilities that could be obtained through some possible technology. Imagine sand being poured into this box, representing research effort. How you pour the sand determines where it piles up in the box. But if you keep on pouring, the entire space eventually gets filled.

2. Bostrom (2002b).

3. This is not the perspective from which science policy has traditionally been viewed. Harvey Averch describes science and technology policy in the United States between 1945 and 1984 as having been centered on debates about the optimum level of public investment in the S&T enterprise and on the extent to which the government should attempt to “pick winners” in order to achieve the greatest increase in the nation’s economic prosperity and military strength. In these calculations, technological progress is always assumed to be good. But Averch also describes the rise of critical perspectives, which question the “progress is always good” premiss (Averch 1985). See also Graham (1997).

4. Bostrom (2002b).

5. This is of course by no means tautological. One could imagine a case being made for a different order of development. It could be argued that it would be better for humanity to confront some less difficult challenge first, say the development of nanotechnology, on grounds that this would force us to develop better institutions, become more internationally coordinated, and mature in our thinking about global strategy. Perhaps we would be more likely to rise to a challenge that presents a less metaphysically confusing threat than machine superintelligence. Nanotechnology (or synthetic biology, or whatever the lesser challenge we confront first) might then serve as a footstool that would help us ascend to the capability level required to deal with the higherlevel challenge of superintelligence. Such an argument would have to be assessed on a case-by-case basis. For example, in the case of nanotechnology, one would have to consider various possible consequences such as the boost in hardware performance from nanofabricated computational substrates; the effects of cheap physical capital for manufacturing on economic growth; the proliferation of sophisticated surveillance technology; the possibility that a singleton might emerge though the direct or indirect effects of a nanotechnology breakthrough; and the greater feasibility of neuromorphic and whole brain emulation approaches to machine intelligence. It is beyond the scope of our investigation to consider all these issues (or the parallel issues that might arise for other existential risk-causing technologies). Here we just point out the prima facie case for favoring a superintelligence- first sequence of development—while stressing that there are complications that might alter this preliminary assessment in some cases.

6. Pinker (2011); Wright (2001).

7. It might be tempting to suppose the hypothesis that everything has accelerated to be meaningless on grounds that it does not (at first glance) seem to have any observational consequences; but see, e.g., Shoemaker (1969).

8. The level of preparedness is not measured by the amount of effort expended on preparedness activities, but by how propitiously configured conditions actually are and how well-poised key decision makers are to take appropriate action.

9. The degree of international trust during the lead-up to the intelligence explosion may also be a factor. We consider this in the section “Collaboration” later in the chapter.

10. Anecdotally, it appears those currently seriously interested in the control problem are disproportionately sampled from one extreme end of the intelligence distribution, though there could be alternative explanations for this impression. If the field becomes fashionable, it will undoubtedly be flooded with mediocrities and cranks.

11. I owe this term to Carl Shulman.

12. How similar to a brain does a machine intelligence have to be to count as a whole brain emulation rather than a neuromorphic AI? The relevant determinant might be whether the system reproduces either the values or the full panoply of cognitive and evaluative tendencies of either a particular individual or a generic human being, because this would plausibly make a difference to the control problem. Capturing these properties may require a rather high degree of emulation fidelity.

13. The magnitude of the boost would of course depend on how big the push was, and also where resources for the push came from. There might be no net boost for neuroscience if all the extra resources invested in whole brain emulation research were deducted from regular neuroscience research—unless a keener focus on emulation research just happened to be a more effective way of advancing neuroscience than the default portfolio of neuroscience research.

14. See Drexler (1986, 242). Drexler (private communication) confirms that this reconstruction corresponds to the reasoning he was seeking to present. Obviously, a number of implicit premisses would have to be added if one wished to cast the argument in the form of a deductively valid chain of reasoning.

15. Perhaps we ought not to welcome small catastrophes in case they increase our vigilance to the point of making us prevent the medium-scale catastrophes that would have been needed to make us take the strong precautions necessary to prevent existential catastrophes? (And of course, just as with biological immune systems, we also need to be concerned with over- reactions, analogous to allergies and autoimmune disorders.)

16. Cf. Lenman (2000); Burch-Brown (2014).

17. Cf. Bostrom (2007).

18. Note that this argument focuses on the ordering rather than the timing of the relevant events. Making superintelligence happen earlier would help preempt other existential transition risks only if the intervention changes the sequence of the key developments: for example, by making superintelligence happen before various milestones are reached in nanotechnology or synthetic biology.

19. If solving the control problem is extremely difficult compared to solving the performance problem in machine intelligence, and if project ability correlates only weakly with project size, then it is possible that it would be better that a small project gets there first, namely if the variance in capability is greater among smaller projects. In such a situation, even if smaller projects are on average less competent than larger projects, it could be less unlikely that a given small project would happen to have the freakishly high level of competence needed to solve the control problem.

20. This is not to deny that one can imagine tools that could promote global deliberation and which would benefit from, or even require, further progress in hardware—for example, high-quality translation, better search, ubiquitous access to smart phones, attractive virtual reality environments for social intercourse, and so forth.

21. Investment in emulation technology could speed progress toward whole brain emulation not only directly (through any technical deliverables produced) but also indirectly by creating a constituency that will push for more funding and boost the visibility and credibility of the whole brain emulation (WBE) vision.

22. How much expected value would be lost if the future were shaped by the desires of one random human rather than by (some suitable superposition of) the desires of all of humanity? This might depend sensitively on what evaluation standard we use, and also on whether the desires in question are idealized or raw.

23. For example, whereas human minds communicate slowly via language, AIs can be designed so that instances of the same program are able easily and quickly to transfer both skills and information amongst one another. Machine minds designed ab initio could do away with cumbersome legacy systems that helped our ancestors deal with aspects of the natural environment that are unimportant in cyberspace. Digital minds might also be designed to take advantage of fast serial processing unavailable to biological brains, and to make it easy to install new modules with highly optimized functionality (e.g. symbolic processing, pattern recognition, simulators, data mining, and planning). Artificial intelligence might also have significant non-technical advantages, such as being more easily patentable or less entangled in the moral complexities of using human uploads.

24. If p and p are the probabilities of failure at each step, the total probability of failure is p + (1 – p)p since one can fail terminally only once.

25. It is possible, of course, that the frontrunner will not have such a large lead and will not be able to form a singleton. It is also possible that a singleton would arise before AI even without the intervention of WBE, in which case this reason for favoring a WBE-first scenario falls away.

26. Is there a way for a promoter of WBE to increase the specificity of her support so that it accelerates WBE while minimizing the spillover to AI development? Promoting scanning technology is probably a better bet than promoting neurocomputational modeling. (Promoting computer hardware is unlikely to make much difference one way or the other, given the large commercial interests that are anyway incentivizing progress in that field.) Promoting scanning technology may increase the likelihood of a multipolar outcome by making scanning less likely to be a bottleneck, thus increasing the chance that the early emulation population will be stamped from many different human templates rather than consisting of gazillions of copies of a tiny number of templates. Progress in scanning technology also makes it more likely that the bottleneck will instead be computing hardware, which would tend to slow the takeoff.

27. Neuromorphic AI may also lack other safety-promoting attributes of whole brain emulation, such as having a profile of cognitive strengths and weaknesses similar to that of a biological human being (which would let us use our experience of humans to form some expectations of the system’s capabilities at different stages of its development).

28. If somebody’s motive for promoting WBE is to make WBE happen before AI, they should bear in mind that accelerating WBE will alter the order of arrival only if the default timing of the two paths toward machine intelligence is close and with a slight edge to AI. Otherwise, either investment in WBE will simply make WBE happen earlier than it otherwise would (reducing hardware overhang and preparation time) but without affecting the sequence of development; or else such investment in WBE will have little effect (other than perhaps making AI happen even sooner by stimulating progress on neuromorphic AI).

29. Comment on Hanson (2009).

30. There would of course be some magnitude and imminence of existential risk for which it would be preferable even from the person-affecting perspective to postpone the risk—whether to enable existing people to eke out a bit more life before the curtain drops or to provide more time for mitigation efforts that might reduce the danger.

31. Suppose we could take some action that would bring the intelligence explosion closer by one year. Let us say that the people currently inhabiting the Earth are dying off at a rate of 1% per year, and that the default risk of human extinction from the intelligence explosion is 20% (to pick an arbitrary number for the purposes of illustration only). Then hastening the arrival of the intelligence explosion by 1 year might be worth (from a person-affecting standpoint) an increase in the risk from 20% to 21%, i.e. a 5% increase in risk level. However, the vast majority of people alive one year before the start of the intelligence explosion would at that point have an interest in postponing it if they could thereby reduce the risk of the explosion by one percentage point (since most individuals would reckon their own risk of dying in the next year to be much smaller than 1%—given that most mortality occurs in relatively narrow demographics such as the frail and the elderly). One could thus have a model in which each year the population votes to postpone the intelligence explosion by another year, so that the intelligence explosion never happens, although everybody who ever lives agrees that it would be better if the intelligence explosion happened at some point. In reality, of course, coordination failures, limited predictability, or preferences for things other than personal survival are likely to prevent such an unending pause. If one uses the standard economic discount factor instead of the person-affecting standard, the magnitude of the potential upside is diminished, since the value of existing people getting to enjoy astronomically long lives is then steeply discounted. This effect is especially strong if the discount factor is applied to each individual’s subjective time rather than to sidereal time. If future benefits are discounted at a rate of x% per year, and the background level of existential risk from other sources is y% per year, then the optimum point for the intelligence explosion would be when delaying the explosion for another year would produce less than x + y percentage points of reduction of the existential risk associated with an intelligence explosion.

32. I am indebted to Carl Shulman and Stuart Armstrong for help with this model. See also Shulman (2010a, 3): “Chalmers (2010) reports a consensus among cadets and staff at the U.S. West Point military academy that the U.S. government would not restrain AI research even in the face of potential catastrophe, for fear that rival powers would gain decisive advantage.”

33. That is, information in the model is always bad ex ante. Of course, depending on what the information actually is, it will in some cases turn out to be good that the information became known, notably if the gap between leader and runner-up is much greater than one would reasonably have guessed in advance.

34. It might even present an existential risk, especially if preceded by the introduction of novel military technologies of destruction or unprecedented arms buildups.

35. A project could have its workers distributed over a large number of locations and collaborating via encrypted communications channels. But this tactic involves a security trade-off: while geographical dispersion may offer some protection against military attacks, it would impede operational security, since it is harder to prevent personnel from defecting, leaking information, or being abducted by a rival power if they are spread out over many locations.

36. Note that a large temporal discount factor could make a project behave in some ways as though it were in a race, even if it knows it has no real competitor. The large discount factor means it would care little about the far future. Depending on the situation, this would discourage bluesky R&D, which would tend to delay the machine intelligence revolution (though perhaps making it more abrupt when it does occur, because of hardware overhang). But the large discount factor—or a low level of caring for future generations—would also make existential risks seem to matter less. This would encourage gambles that involve the possibility of an immediate gain at the expense of an increased risk of existential catastrophe, thus disincentivizing safety investment and incentivizing an early launch—mimicking the effects of the race dynamic. By contrast to the race dynamic, however, a large discount factor (or disregard for future generations) would have no particular tendency to incite conflict. Reducing the race dynamic is a main benefit of collaboration. That collaboration would facilitate sharing of ideas for how to solve the control problem is also a benefit, although this is to some extent counterbalanced by the fact that collaboration would also facilitate sharing of ideas for how to solve the competence problem. The net effect of this facilitation of idea-sharing may be to slightly increase the collective intelligence of the relevant research community.

37. On the other hand, public oversight by a single government would risk producing an outcome in which one nation monopolizes the gains. This outcome seems inferior to one in which unaccountable altruists ensure that everybody stands to gain. Furthermore, oversight by a national government would not necessarily mean that even all the citizens of that country receive a share of the benefit: depending on the country in question, there is a greater or smaller risk that all the benefits would be captured by a political elite or a few self-serving agency personnel.

38. One qualification is that the use of incentive wrapping (as discussed in Chapter 12) might in some circumstances encourage people to join a project as active collaborators rather than passive free-riders.

39. Diminishing returns would seem to set in at a much smaller scale. Most people would rather have one star than a one-in-a-billion chance of a galaxy with a billion stars. Indeed, most people would rather have a billionth of the resources on Earth than a one-in-a-billion chance of owning the entire planet.

40. Cf. Shulman (2010a).

41. Aggregative ethical theories run into trouble when the idea that the cosmos might be infinite is taken seriously; see Bostrom (2011b). There may also be trouble when the idea of ridiculously large but finite values is taken seriously; see Bostrom (2009b).

42. If one makes a computer larger, one eventually faces relativistic constraints arising from communication latencies between the different parts of the computer—signals do not propagate faster than light. If one shrinks the computer, one encounters quantum limits to miniaturization. If one increases the density of the computer, one slams into the black hole limit. Admittedly, we cannot be completely certain that new physics will not one day be discovered offering some way around these limitations.

43. The number of copies of a person would scale linearly with resources with no upper bound. Yet it is not clear how much the average human being would value having multiple copies of herself. Even those people who would prefer to be multiply instantiated may not have a utility function that is linear with increasing number of copies. Copy numbers, like life years, might have diminishing returns in the typical person’s utility function.

44. A singleton is highly internally collaborative at the highest level of decision-making. A singleton could have a lot of non-collaboration and conflict at lower levels, if the higher-level agency that constitutes the singleton chooses to have things that way.

45. If each rival AI team is convinced that the other teams are so misguided as to have no chance of producing an intelligence explosion, then one reason for collaboration—avoiding the race dynamic—is obviated: each team should independently choose to go slower in the confident belief that it lacks any serious competition.

46. A PhD student.

47. This formulation is intended to be read so as to include a prescription that the well-being of nonhuman animals and other sentient beings (including digital minds) that exist or may come to exist be given due consideration. It is not meant to be read as a license for one AI developer to substitute his or her own moral intuitions for those of the wider moral community. The principle is consistent with the “coherent extrapolated volition” approach discussed in Chapter 12, with an extrapolation base encompassing all humans. A further clarification: The formulation is not intended to necessarily exclude the possibly of post-transition property rights in artificial superintelligences or their constituent algorithms and data structures. The formulation is meant to be agnostic about what legal or political systems would best serve to organize transactions within a hypothetical future posthuman society. What the formulation is meant to assert is that the choice of such a system, insofar as its selection is causally determined by how superintelligence is initially developed, should to be made on the basis of the stated criterion; that is, the post-transition constitutional system should be chosen for the benefit of all of humanity and in the service of widely shared ethical ideals—as opposed to, for instance, for the benefit merely of whoever happened to be the first to develop superintelligence.

48. Refinements of the windfall clause are obviously possible. For example, perhaps the threshold should be expressed in per capita terms, or maybe the winner should be allowed to keep a somewhat larger than equal share of the overshoot in order to more strongly incentivize further production (some version of Rawls’s maximin principle might be attractive here). Other refinements would refocus the clause away from dollar amounts and restate it in terms of “influence on humanity’s future” or “degree to which different parties’ interests are weighed in a future singleton’s utility function” or some such.

## Notes to Chapter 15: Crunch time

1. Some research is worthwhile not because of what it discovers but for other reasons, such as by entertaining, educating, accrediting, or uplifting those who engage in it.

2. I am not suggesting that nobody should work on pure mathematics or philosophy. I am also not suggesting that these endeavors are especially wasteful compared to all the other dissipations of academia or society at large. It is probably very good that some people can devote themselves to the life of the mind and follow their intellectual curiosity wherever it leads, independent of any thought of utility or impact. The suggestion is that at the margin, some of the best minds might, upon realizing that their cognitive performances may become obsolete in the foreseeable future, want to shift their attention to those theoretical problems for which it makes a difference whether we get the solution a little sooner.

3. Though one should be cautious in cases where this uncertainty may be protective—recall, for instance, the risk-race model in Box 13, where we found that additional strategic information could be harmful. More generally, we need to worry about information hazards (see Bostrom [2011b]). It is tempting to say that we need more analysis of information hazards. This is probably true, although we might still worry that such analysis itself may produce dangerous information.

4. Cf. Bostrom (2007).

5. I am grateful to Carl Shulman for emphasizing this point.
