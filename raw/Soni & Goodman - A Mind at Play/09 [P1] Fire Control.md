---
book: "A Mind at Play"
author: "Jimmy Soni and Rob Goodman"
part: 1
chapter: 9
section: "Fire Control"
source_pages: "129-139"
type: source
---

# 9. Fire Control

Wartime would interrupt the working lives of a whole generation—but in the universe of possible interruptions, a grant to research national defense issues with some of the nation’s foremost engineers and mathematicians was a blessing. Shannon seemed to understand this; it might explain why he tried, in early December, to return the money given to him for his fellowship at the Institute for Advanced Study. But his $166.67 check came back. The “requirements of military training or other defense emergencies” were an exceptional case, the fellowship office observed; Shannon could keep the money, assuming he resumed his research at the war’s close.

Thornton Fry had contacted an NDRC colleague, Warren Weaver, to help find Shannon a project. Born in rural Wisconsin, in 1894, Weaver trained at the University of Wisconsin, joined the Army’s Air Service in 1917, and, after a detour at Throop College of Technology (later renamed the California Institute of Technology, or Caltech), returned to Wisconsin to teach in and then chair the math department—a department of which Thornton Fry was a member as well.

Weaver shared Shannon’s small-town roots and love of working with his hands. When he wasn’t off practicing science or funding it, he was at home, “chopping wood, moving rocks, gardening, puttering in his shop.” A shy and introspective boy, Weaver discovered a passion for engineering inside a small dry-cell motor, a Christmas present he promptly disassembled:

I didn’t know any name to apply to this sort of activity—I didn’t

know (or care, I suspect) whether anyone could earn his living

doing this kind of thing. But it was perfectly clear to me that

taking things apart and finding out how they are constructed

and how they work was exciting, stimulating, and tremendous

fun. It may well be the case that in the small rural village where I

lived . . . there was not a single person who had any real concept

of what the word “science” meant. I was accordingly told that

this was “engineering”; and from that time until I was a junior in

college, I assumed without question that I wanted to be an

engineer.

It was a reflection that could have just as easily come from the pen of his grantee, Claude Shannon. But there the similarities stopped. Where Shannon was an avowed atheist, Weaver was devout—and saw science as self-evident proof of the divine. “I think that God has revealed Himself to many at many times and in many places,” Weaver wrote. “Indeed, He continuously reveals Himself to man today: every new discovery of science is a further ‘revelation’ of the order which God has built into His universe.” Where Shannon was allergic to administrative work and bureaucracies of almost every kind, Weaver thrived in them. Where Shannon considered teaching a nettlesome requirement of university employment, Weaver relished it. And where Shannon could continue to pound away at a mathematical problem or research question until he struck sparks, pursuing problems with breathtaking intuition and instinct, Weaver had discovered that he possessed no such gift. In a remarkably self-aware reflection on his strengths and weaknesses, Weaver observed: “I had a good capacity for assimilating information, something of a knack for organizing, an ability to work with people, a zest for exposition, an enthusiasm that helped to advance my ideas. But I lacked that strange and wonderful creative spark that makes a good researcher. Thus I realized that there was a definite ceiling on my possibilities as a mathematics professor.”

Below that ceiling, however, Weaver was a heterodox thinker whose passions ran the gamut; he published or worked on problems in engineering, mathematics, machine learning, translation, biology, the natural sciences, and probabilities. But unlike many of his colleagues, he believed in a world outside the confines of science and math, and he avoided the all-too-common insularity of the fields he worked in and the thinkers who worked in them. “Do not overestimate science, do not think that science is all that there is,” he urged students in a 1966 talk. “Do not concentrate so completely on science that there’s nobody in this room who is going to spend the next seven days without reading some poetry. I hope that there’s nobody in this room that’s going to spend the next seven days without listening to some music, some good music, some modern music, some music.”

He lived by his words: he was, according to Fry, epicure enough to identify a sip of wine by its varietal, vineyard, and even vintage year. And he maintained a lifelong passion for Lewis Carroll’s Alice’s Adventures in Wonderland. By the mid-1960s he had collected 160 versions of the text in forty-two languages, a compilation that moved him to write Alice in Many Tongues, a study of the effect of the act of translation on the meaning of the tale.

Weaver was many things Shannon was not: a populist, a philosophizer, a human interface between science and the wider world. But at that precise moment, those differences mattered little: he was someone who saw the potential in Shannon and had the ability to put that potential to work on wartime projects. He awarded Shannon $3,000 and a ten-month contract, for a project called “Mathematical Studies Relating to Fire Control.” Shannon would complete much of his work in this field while remaining in Princeton, but he collaborated with two Bell Labs engineers, Ralph Blackman and Hendrik Bode, who would join the impressive group of influences and mentors in Shannon’s life.

Fire control was, essentially, the study of hitting moving targets. The targets were anything and everything the enemy could hurl through the air to cause damage—planes, rockets, ballistics. Imagine a gun firing a single shot at a target. Now imagine that the gun is the size of a two-story house, that it is placed on a moving Navy ship in the middle of the ocean, and that it is trying to shoot down an enemy fighter moving at 350 miles per hour. That’s a rough description of the challenge of fire control, and it was put to the mathematics group at Bell Labs, among others, to design the machines that could successfully solve that problem. Accurately determining the vertical coordinates, the horizontal coordinates, the speed of the ballistics, the likely position of the target, the time from launch to impact—all of this had to be processed by machine, without error, under fire, in split seconds.

The earliest days of the war revealed how badly the Allied defense systems needed an upgrade. The German Luftwaffe, an air force disbanded by the Treaty of Versailles, had been impressively reconstituted under Hitler and Hermann Göring. It had been responsible for the destruction of Guernica during the Spanish Civil War, and for the London Blitz, and as the war dragged on, the German military developed and deployed some of the world’s first cruise and ballistic missiles.

Still, what special insight did telephone engineers have into threats like that? A lot, as it turned out. “At first thought it may seem curious that it was a Bell Telephone Laboratories group which came forward with new ideas and techniques to apply to the AA [anti-aircraft] problems,” Warren Weaver admitted. And yet, Weaver continued, the Bell Labs group was a natural fit, for two reasons. “First, this group not only had long and expert experience with a wide variety of electrical techniques. Second, there are surprisingly close and valid analogies between the fire control prediction problem and certain basic problems in communications engineering.”

At the most basic level, the speed and quality of information was vital both to phone systems and fire control systems. A phone call reaching its intended recipient was a struggle against noise. An antiaircraft missile hitting its target presented the same conceptual challenge: How to get from point A to point B with a minimum of interference? In the case of the missile, how to guard against the wind, or factor in the movement of the target, among a dozen other variables? Because both problems demanded the quick calculation of probabilities—the probable structure of a message, or the probable location of the target at any given moment—both required high-level statistical inference. Both presented the challenge of building machines to accurately translate that math into action.

Of course, the Bell engineers tasked with working on the problem were under no illusions: even if the technological problems shared some qualities, the stakes couldn’t have been more different. A fraction of a second of difference in the control of an anti-aircraft gun meant the difference between life and death. For Shannon, in particular, the fire control work represented some of the most concrete work he had done to date. Unlike, say, his research on genetics, there was nothing abstract about shooting down airplanes.

There were mechanical as well as conceptual similarities between communications and fire control work. Bell Labs had begun its work on fire control when one of its engineers discovered that an existing piece of communications technology—a potentiometer—could be repurposed as part of an anti-aircraft gun. The potentiometer was used as a sort of moving hinge that responded to variations of voltage in, say, a telephone or radio receiver. A young engineer at the Labs, David   Parkinson,   had   also     experimented   with   connecting   a potentiometer to a pen on graph paper, which allowed it to plot the outputs of electromechanical systems. The idea that such a thing could help shoot down an aircraft had come to him, of all possible places, in a dream. In the dream,

I found myself in a gun pit with an anti-aircraft gun crew. . . .

There was a gun there which looked to me like—I had never had

any close association with anti-aircraft guns, but possess some

general information on artillery—like a 3 inch. It was firing

occasionally and the impressive thing was that every shot

brought down an airplane! After three or four shots, one of the

men in the crew smiled at me and beckoned me to come closer

to the gun. When I drew near, he pointed to the exposed end of

the left trunnion. Mounted there was the control potentiometer

of my level recorder! There was no mistaking it—it was the

identical item.

Reflecting on the dream the next morning, he realized that “if my potentiometer could control the pen on the recorder, something similar could, with suitable engineering, control an anti-aircraft gun.” Parkinson took the idea to his superiors. They ran it up the chain at Bell, and it went from there to the Army Signal Corps. The T-10 director, built a few years later, was the culmination of Parkinson’s dream, a project that drew on the Labs’ years of communications work. In building it, they borrowed not only the language of radio and telephony, with which they were most familiar, but the component parts, too. Later renamed the M-9, the device would see combat: more than 1,500 M-9s were produced and put into the field. With M-9s directing the guns, the number of shells required to hit the average enemy aircraft was cut from thousands to just 100.

Many hands made the anti-aircraft directors a reality; Shannon’s were two of them. “I think England would’ve been entirely demolished if they hadn’t had these directors,” he said after the war. While manned planes could still, with a little luck, evade anti-aircraft fire, “the buzzbombs and V1 missiles were going in perfectly straight lines and at moderate enough speed and everything, so that they could be predicted very well by these anti-aircraft directors, and they knocked down like 95% of them before they got to England, and I think if they hadn’t had those England would’ve lost.”

Shannon’s particular contribution focused on the problem of “smoothing.” The earliest prototypes of the gun directors produced occasionally erroneous readouts, leading to jerkiness in the motions of the guns. Smoothing was the process of cleaning up that data, without adding any delay in the calculation. The result of Shannon’s work, five technical papers of varying lengths, was twofold: an upgrade to the original T-10 model, and a later report on the statistics of smoothing in general. The former never saw the light of day; the latter became a key work in the field.

What might Shannon have taken away from all of this? David Mindell, a historian of technology, put it like this:

The wartime efforts of Bell Labs in fire control contributed to a

new vision of technology, a vision that treated different types of

machinery (radar, amplifiers, electric motors, computers) in

analytically similar terms—paving the way for information

theory, systems engineering, and classical control theory. These

efforts produced not only new weapons but also a vision of

signals and systems. Through ideas and through people, this

vision diffused into engineering culture and solidified as the

technical and conceptual foundations of the information age.

In other words, the research may have paid immediate dividends, but the real source of value was the analogy. Scientific breakthrough by way of analogy has a rich history. It’s said that Galileo’s work on pendulums began in a church in Pisa, where he stared at a lamp swinging through the air and timed it with his pulse. Newton, of course, had his apple. Einstein imagined himself chasing a beam of light. As for Shannon: Wasn’t the work of tracking the evasive-yetpredictable path of an aircraft a rigorous training course in thinking probabilistically? If the position of the aircraft was best understood in that way—not in terms of where the target was, but in terms of where it was most likely to be—what other elusive objects might be targeted in the same way?

In Shannon’s report on the topic, cowritten with two other Labs researchers, they acknowledge that the problem is a “special case of the transmission, manipulation, and utilization of intelligence. . . . The input data . . . are thought of constituting a series in time similar to weather records, stock market prices, production statistics, and the like.” That thought presaged a key insight of Shannon’s later work: that sources of “intelligence” as disparate as the trajectory of a missile and the output of a stock ticker, the pulses in a telegraph line and the instructions in a cell nucleus, had something heretofore unsuspected in common.

Those insights were still years away. What mattered in the here and now for Shannon was that his work for the NDRC had impressed the higher-ups. “He did some stunning work for us,” Weaver later said. Fry, who had first seen Shannon in action during the summer of 1940, now had ample evidence of Shannon’s promise. It didn’t take long for him to extend a full-time offer to join Bell Laboratories as a research mathematician.

For Shannon, the offer must have come as a relief—not just professionally, but personally. The accounts of that time depict a man on edge—and understandably so. The pressure of the war combined with the collapse of his marriage had left Shannon shattered. “For a time it looked as though he might completely crack up nervously and emotionally,” Weaver remembered. “It is Thornton Fry who deserves the primary credit for getting him out of that state, and for offering him work in the Bell Laboratories. The rest of it is history.”
