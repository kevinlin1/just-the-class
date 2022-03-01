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
| -- | [Predictive Coding Models of Perception](https://simons.berkeley.edu/talks/david-cox-4-16-18){:target="_blank"} (recorded lecture) | The ability to predict future states of the world is essential for planning behavior, and it is arguably a central pillar of intelligence.  In the field of sensory neuroscience, "predictive coding" -- the notion that circuits in cerebral actively predict their own activity -- has been an influential theoretical framework for understanding visual cortex.  In my talk, I will bring together the idea of predictive coding with modern tools of machine learning to build practical, working vision models that predict their inputs in both space and time. These networks learn to predict future frames in a video sequence, with each layer in the network making local predictions and only forwarding deviations from those predictions to subsequent network layers. We show that these networks are able to robustly learn to predict the movement of synthetic (rendered) objects, and that in doing so, the networks learn internal representations that are useful for decoding latent object parameters (e.g. pose) that support object recognition with fewer training views. |


---

## What's Hidden in a Randomly Weighted Neural Network?

### Presentation Slides
*View slides in a new tab [here](https://interactive-intelligence.github.io/files/jc/presentations/win2022/meeting-1/I2 JC - Randomly Weighted NN.pdf){:target="_blank"}.*

<iframe src="https://interactive-intelligence.github.io/files/jc/presentations/win2022/meeting-1/I2 JC - Randomly Weighted NN.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

### Discussion Notes

### More Reading
- "What's Hidden in a Randomly Weighted Neural Network?" Ramanujan & Wortsman et al. arXiv, 2020. https://arxiv.org/pdf/1911.13299.pdf.
- "The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks". Frankle & Carbin. arXiv, 2019. https://arxiv.org/pdf/1803.03635.pdf.
- "Understanding Deep Learning Requires Re-thinking Generalization". Zhang et al. arXiv, 2017. https://arxiv.org/pdf/1611.03530.pdf.
- "Distinct Sources of Deterministic and Stochastic Components of Action Timing Decisions in Rodent Frontal Cortex". Murakami et al. Neuron, 2017. https://doi.org/10.1016/j.neuron.2017.04.040.
- "Individual Differences Among Deep Neural Network Models". Mehrer & Kietzmann et al. Nature, 2020. https://www.nature.com/articles/s41467-020-19632-w.
- "Artificial Neural Nets Finally Yield Clues to How Brains Learn". Ananthaswamy. Quanta, 2021. https://www.quantamagazine.org/artificial-neural-nets-finally-yield-clues-to-how-brains-learn-20210218/.

---

## Predictive Coding Models of Perception

