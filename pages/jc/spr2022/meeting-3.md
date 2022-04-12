---
layout: default
title: Meeting 3
parent: Spring 2022
grand_parent: Journal Club
nav_order: -3
permalink: /jc/spr2022/meeting-3
---

# Meeting #3
{: .no_toc }

Monday, 4/11/2022
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## Lineup

| Presenter | Paper/Topic | Description |
| --- | --- | --- |
| Chaytan | Biological Prediction - "Why Neurons Have Thousands of Synapses, a Theory of Sequence Memory in Neocrtex" | Forthcoming |

---

## Notes
- With backprop, you can compute what you're supposed to get from an error signal; there is no way in the brain to send a corrective to each neruon (maybe).
- Implication of backpropagation - every forward pass must also have a reciprocal neuron that goes the other way to propagate error. However, it is not true that every neuron in the brain has such capabilities (e.g. comes in self-updating 'pairs')

### Structure of the Neocortex
- Neocortex - responsible for 'higher order' intelligent thinking, planning, prediction, and consciousness.
- Composed of ~150k cortical columns, with thousands of neurons each. 
- Within each column, there are six layers.
- A cortical column - mini-columnsa re small groups of pyramidal neurons that exist within one layer of each cortical column.
- Some of the mini-columns form 'residual connections' or standard linear connectives with other mini-columns.
- Hawinnks' claim: if the cortex has the same structure everywhere and learns, then there exists a general learning algorithm from this structure.
- Neocortex has pyramidal neurons: thousands of inputs from other neurons on synapses. Why so many synapses? When you get far from the body, the input becomes too weak to trigger action potentials. 
- **Learning**: input to prediction to next input to model adjustment.
- Predictive coding model: update less when you correctly predict the next input, update more when it was unexpected.

### Learning Criteria
1. Local learning rules
2. Continuous learning - you can't just train in one environment and expect it to never train. Learning must be able to be continuously applied to new environmnets.
3. Contextual information and prior experience - incorporates prior experience in the brain.
4. Multiple simultaneous predictions - you can make multiple simultaneous predictions without necessarily being conscious of them.
5. Robust to noise

What biological mechanisms meet these?

### Dendritic Predictions
Key idea: predictions are encoded when an actively firing neuron connects to distal dendrites of another neuron that is predicted to come next. 

Encode a prediction by making it easier to make the neurons we think will fire to fire when it receives an input it expects. This is a prediction. Local inhibition allows us to learn the things that we do not expect more than the things we do expect (fewer neurons firing - less learning).

Dendritic updates: if the next input was unexpected, the primed neurons do not fire faster. All the neurons encoding the unexpected input fire.

Only a few neurons fire at once in order to represent a given input. If a dense amount of neurons fire, then this pattern can be easily confused with other patterns. (Think - dense vs sparse networks, vanilla vs sparse autoencoders.)



### Applications
- HTM Network. Numenta simulated the model using neural networks - it learned sequences of characters well and was robust to data perturbations. Very good at learning sequences.
- Can we add a depolarization mechanism to our networks?
- Can we add an inhibitory mechanism to encourage sparse representation of seen patterns?














