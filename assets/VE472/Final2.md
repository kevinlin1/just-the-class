# Optimization

## Small data -> GD

**P171**

- Steps of GD
- Remark: the function should be convex
- "Standard" GD is greedy. Modifications on GD could make it non-greedy (e.g. adding a momentum term)

**P173**

A comparison between GD and SGD. slow but fast v.s. fast but slow

SGD:

- Choose an initial vector of parameters $w$ and learning rate $\eta$.
- Repeat until an approximate minimum is obtained:
  - Randomly shuffle samples in the training set.
  - For $i = 1,2,\ldots,n$, do:
    - $w = w - \nabla f_i(w)$

## Big data

**P175**

+ Distributed system: PRAM + Communication

+ Dependencies are represented by DAG: Don't want the tree to be deep

**!P176!**

+ *Depth*: with respect to the last CPU to complete its job (depth of the tree)

+ *Work*: time to complete all tasks multiplied by the number of CPU (number of nodes in the tree)

+ $T_\infty$ does not goes to 0, but to the depth of the algorithm

**P177**

Brent's Theorem: $T_1 / p \leq T_p \leq T_1 / p + T_\infty$

*Embarrassingly parallel*: "embarrassingly" is used here to refer to parallelization problems which are "embarrassingly easy to distribute", depth = 0.

***!P180!* + h6**

Pay attention to parallel algorithm writing and complexity analysis.

**P181**

+ $m$ -> size of dataset, $n$ -> number of feature cols
+ The work for GD $mn$ is very big.

+ Though converges fast, during each iteration we have large of work to do (fast but slow)

+ error rate and complexity tradeoff

**P182**

SGD tradeoff:

- less number of points, less work

- less number of points, the number of iterations will increase more

GD with all: slow per iteration (work very high), few iterations

SGD with one: fast per iteration, more iterations

Using a **mini-batch** is possible (a few data used points per iteration)

**P185**

Locks are not needed for parallelized SGD.

No need to worry collision as collision chance is low and the impact is slow.

**P186**

+ Hogwild! requires the cost function to be sparse
+ no locks needed -> speed nearly linearly

**P187**

+ Batch GD: Easy to parallelized, but slow

+ SGD: Hard to parallelized, but with lower depth

+ Hogwild! renders stochastic almost embarrassingly parallel

## Applications

**P190**

High-level idea for a Spark implementation of batch GD

**P191**

Batch GD in Spark:

$w$ sent many times.  

Not too much memory with respect to size of $w$

**P192**

SGD in Spark:

How to perform Hogwild! on Spark



