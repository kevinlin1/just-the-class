---
layout: default
title: Meeting 1
parent: Winter 2022
grand_parent: Journal Club
nav_order: 1
nav_exclude: false
permalink: /jc/win2022/meeting-1
---

# Meeting #1
{: .no_toc }

Monday, 2/28/2022
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
| Andre | [What’s Hidden in a Randomly Weighted Neural Network?](https://arxiv.org/pdf/1911.13299.pdf){:target="_blank"} (paper) | Ramanujan et al. demonstrate that large neural networks contain some pretty bizarre behavior: particularly, they find that a completely randomly initialized neural network (i.e. no training at all) contains subnetworks that have equivalent performance to a similarly-sized fully trained neural network. The results make us rethink how neural network training operates and its limitations in modeling the brain and neurological structures. (Some of the co-authors are from the UW!) |


---

## What's Hidden in a Randomly Weighted Neural Network?

### Presentation Slides
*View slides in a new tab [here](https://interactive-intelligence.github.io/files/jc/presentations/win2022/meeting-1/I2 JC - Randomly Weighted NN.pdf){:target="_blank"}.*

<iframe src="https://interactive-intelligence.github.io/files/jc/presentations/win2022/meeting-1/I2 JC - Randomly Weighted NN.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

### More Reading
- "What's Hidden in a Randomly Weighted Neural Network?" Ramanujan & Wortsman et al. arXiv, 2020. https://arxiv.org/pdf/1911.13299.pdf.
- "The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks". Frankle & Carbin. arXiv, 2019. https://arxiv.org/pdf/1803.03635.pdf.
- "Understanding Deep Learning Requires Re-thinking Generalization". Zhang et al. arXiv, 2017. https://arxiv.org/pdf/1611.03530.pdf.
- "Distinct Sources of Deterministic and Stochastic Components of Action Timing Decisions in Rodent Frontal Cortex". Murakami et al. Neuron, 2017. https://doi.org/10.1016/j.neuron.2017.04.040.
- "Individual Differences Among Deep Neural Network Models". Mehrer & Kietzmann et al. Nature, 2020. https://www.nature.com/articles/s41467-020-19632-w.
- "Artificial Neural Nets Finally Yield Clues to How Brains Learn". Ananthaswamy. Quanta, 2021. https://www.quantamagazine.org/artificial-neural-nets-finally-yield-clues-to-how-brains-learn-20210218/.

---

## Discussion Notes
- Untrained neural networks perform as well as trained networks
- Spiking neural networks
- Stop learning at 25? pruning
- Visual differentiation similar to pruning (rd)
- Most neurons clustered in cerebellum
  - Most responsible for motor coordination
- Is the random subnetwork vs a trained network similar architectures
- You can remove half of the brain (get rid of 43 billion neurons, which is half of 86 billion…) and still function normally
- Comparative underdevelopment of even the largest natural language models, which have hundreds of billions of parameters but comparatively few neurons
- Recovery from removing half the brain based on how young you are when it happens?
- Relationship between neural network pruning and biological pruning
- Do computational neural networks have inhibitory/excitatory properties? For instance, biological neurons have these properties and it makes the cell more or less likely to reach a threshold and fire an action potential.
