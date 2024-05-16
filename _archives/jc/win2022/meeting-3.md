---
layout: default
title: Meeting 3
parent: Winter 2022
grand_parent: Journal Club
nav_order: -3
permalink: /jc/win2022/meeting-3
---

# Meeting #3
{: .no_toc }

Monday, 3/14/2022
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
| Andre | [Emergence of Grounded Compositional Language in Multi-Agent Populations](https://arxiv.org/pdf/1703.04908.pdf){:target="_blank"} (paper) | *Abstract*: By capturing statistical patterns in large corpora, machine learning has enabled significant advances in natural language processing, including in machine translation, question answering, and sentiment analysis. However, for agents to intelligently interact with humans, simply capturing the statistical patterns is insufficient. In this paper we investigate if, and how, grounded compositional language can emerge as a means to achieve goals in multi-agent populations. Towards this end, we propose a multi-agent learning environment and learning methods that bring about emergence of a basic compositional language. This language is represented as streams of abstract discrete symbols uttered by agents over time, but nonetheless has a coherent structure that possesses a defined vocabulary and syntax. We also observe emergence of nonverbal communication such as pointing and guiding when language communication is unavailable. |

*After this presentation, we will have an 'idea zoo symposium' - many members are thinking about cool ideas and this will be a place to share and think through them together.*

---

## Emergence of Grounded Compositional Language in Multi-Agent Populations

A popular science article has been written on this paper: [here](https://www.wired.com/2017/03/openai-builds-bots-learn-speak-language/){:target="_blank"}.

*Access slides [here](https://interactive-intelligence.github.io/files/jc/presentations/win2022/meeting-3/Emergence%20of%20Grounded%20Compositional%20Language.pdf).*

<iframe src="https://interactive-intelligence.github.io/files/jc/presentations/win2022/meeting-3/Emergence%20of%20Grounded%20Compositional%20Language.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

---

## Idea Symposium
- Split neural network - each neuron becomes two neural networks.
  - Shared weights
	- Systematic activation function discovery
	- Modeling the neuron using a more complex unit of computation
	- 'First order' networks vs $$n$$th order networks
- Lottery Ticket Hypothesis + variations
  - ‘Progressive Random Search’ optimizer - begin from a good ticket and freeze, randomize + freeze more, repeat
- Adversarial examples on humans - do adversarial examples exist for humans? Can we find them? Is there a difference between those two questions?
- Adversarial attacks on Hebbian networks
- Second derivative optimizer - using concavity estimations to better understand movement
  - Relationship to Taylor series

---

## Additional Discussed Papers
- [Understanding Deep Learning Requires Rethinking Generalization](https://arxiv.org/pdf/1611.03530.pdf)
- [Backprop Diffusion is Biologically Plausible](https://arxiv.org/pdf/1912.04635.pdf)
- [Feature Visualization: How neural networks build up their understanding of images](https://distill.pub/2017/feature-visualization/)
- [Deconstructing Lottery Tickets: Zeros, Signs, and the Supermask](https://arxiv.org/pdf/1905.01067.pdf)
- [The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks](https://arxiv.org/pdf/1803.03635.pdf)
- [Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets](https://arxiv.org/pdf/2201.02177.pdf)
- [Stanford Seminar: Can the brain do backprop?](https://www.youtube.com/watch?v=VIRCybGgHts)
