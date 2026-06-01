---
book: "The Singularity Is Near: When Humans Transcend Biology"
author: "Ray Kurzweil"
part: "The Law of Accelerating Returns Revisited"
source_pages: "348–351"
type: source
---

# The Law of Accelerating Returns Revisited

The following analysis provides the basis of understanding evolutionary change as a doubly exponential phenomenon (that is, exponential growth in which the rate of exponential growth-the exponent-is itself growing exponentially). I will describe here the growth of computational power, although the formulas are similar for other aspects of evolution, especially information-based processes and technologies, including our knowledge of human intelligence, which is a primary source of the software of intelligence.

We are concerned with three variables:

V: Velocity (that is, power) of computation (measured in calculations per second per unit cost) W: World knowledge as it pertains to designing and building computational devices t: Time

As a first-order analysis, we observe that computer power is a linear function of W. We also note that W is cumulative. This is based on the observation that relevant technology algorithms are accumulated in an incremental way. In the case of the human brain, for example, evolutionary psychologists argue that the brain is a massively modular intelligence system, evolved over time in an incremental manner. Also, in this simple model, the instantaneous increment to knowledge is proportional to computational power. These observations lead to the conclusion that computational power grows exponentially over time.

In other words, computer power is a linear function of the knowledge of how to build computers. This is actually a conservative assumption. In general, innovations improve V by a multiple, not in an additive way. Independent innovations (each representing a linear increment to knowledge) multiply one another's effects. For example, a circuit advance such as CMOS (complementary metal oxide semiconductor), a more efficient IC wiring methodology, a processor innovation such as pipelining, or an algorithmic improvement such as the fast Fourier transform, all increase V by independent multiples.

As noted, our initial observations are:

The velocity of computation is proportional to world knowledge:

(1) V = c1W

The rate of change of world knowledge is proportional to the velocity of computation:

dW

(2) = c2V

dt

Substituting (1) into (2) gives:

dW

(3) = c1c2W

dt

The solution to this is:

(4) W = W0ec1c2t

and W grows exponentially with time (e is the base of the natural logarithms ).

The data that I've gathered shows that there is exponential growth in the rate of (exponent for) exponential growth (we doubled computer power every three years early in the twentieth century and every two years in the middle of the century, and are doubling it everyone year now). The exponentially growing power of technology results in exponential growth of the economy. This can be observed going back at least a century. Interestingly, recessions, including the Great Depression, can be modeled as a fairly weak cycle on top of the underlying exponential growth. In each case, the economy "snaps back" to where it would have been had the recession/depression never existed in the first place. We can see even more rapid exponential growth in specific industries tied to the exponentially growing technologies, such as the computer industry.

If we factor in the exponentially growing resources for computation, we can see the source for the second level of exponential growth.

Once again we have:

(5) V = c1W

But now we include the fact that the resources deployed for computation, N, are also growing exponentially:

(6) N = c3ec4t

The rate of change of world knowledge is now proportional to the product of the velocity of computation and the deployed resources:

dW

(7) = c2 NV

dt

Substituting (5) and (6) into (7) we get:

dW

(8) = c1c2c3ec4tW

dt

The solution to this is:

cc c

(9) W = W0 exp 1 2 3c e c4t

c4

and world knowledge accumulates at a double exponential rate.

Now let's consider some real-world data. In chapter 3, I estimated the computational capacity of the human brain, based on the requirements for functional simulation of all brain regions, to be approximately 10 16 cps. Simulating the salient nonlinearities in every neuron and interneuronal connection would require a higher level of computing: 1011

neurons times an average 103 connections per neuron (with the calculations taking place primarily in the connections) times 102 transactions per second times 103 calculations per transaction—a total of about 1019 cps. The analysis below assumes the level for functional simulation (1016 cps).

Analysis Three

Considering the data for actual calculating devices and computers during the

twentieth century:

Let S = cps/$1K: calculations per second for $1,000.

Twentieth-century computing data matches:

Year − 1900

20.40 100

6.00 6.00 − 11.00

S = 10

We can determine the growth rate, G, over a period of time:

log Sc − log Sp

Yc − Yp

G = 10

where Sc is cps/$1K for current year, Sp is cps/$1K of previous year, Yc is

current year, and Yp is previous year.

Human brain = 10 calculations per second.

Human race = 10 billion (10 ) human brains = 10 calculations per second.

We achieve one human brain capability (10 cps) for $1,000 around the year

2023.

We achieve one human brain capability (10 cps) for one cent around the year

2037.

We achieve one human race capability (10 cps) for $1,000 around the year

2049.

If we factor in the exponentially growing economy, particularly with regard to the resources available for computation (already about one trillion dollars per year), we can see that nonbiological intelligence will be billions of times more powerful than biological intelligence before the middle of the century.

We can derive the double exponential growth in another way. I noted above that the rate of adding knowledge (dW/dt) was at least proportional to the knowledge at each point in time. This is clearly conservative given that many innovations (increments to knowledge) have a multiplicative rather than additive impact on the ongoing rate.

However, if we have an exponential growth rate of the form:

dW

(10) = Cw

dt

where C > 1, this has the solution:

1 1

(11) W= ln

ln C 1 − t ln C

which has a slow logarithmic growth while t < 1/lnC but then explodes close to the singularity at t = 1/lnC.

Even the modest dW/dt = W2 results in a singularity.

Indeed any formula with a power law growth rate of the form:

dW

(12) =Wa

dt

where a > 1, leads to a solution with a singularity:

(12) W = W0 1

T − t a−1 at the time T. The higher the value of a, the closer the singularity.

My view is that it is hard to imagine infinite knowledge, given apparently finite resources of matter and energy, and the trends to date match a double exponential process. The additional term (to W) appears to be of the form W × log(W). This term describes a network effect. If we have a network such as the Internet, its effect or value can reasonably be shown to be proportional to n × log(n) where n is the number of nodes. Each node (each user) benefits, so this accounts for the n multiplier. The value to each user (to each node) = log(n). Bob Metcalfe (inventor of Ethernet) has postulated the value of a network of n nodes = c × n2, but this is overstated. If the Internet doubles in size, its value to me does increase but it does not double. It can be shown that a reasonable estimate is that a network's value to each user is proportional to the log of the size of the network. Thus, its overall value is proportional to n × log(n).

If the growth rate instead includes a logarithmic network effect, we get an equation for the rate of change that is given by:

dW

(14) = W W ln W

dt

The solution to this is a double exponential, which we have seen before in the data:

(15) W = exp et
