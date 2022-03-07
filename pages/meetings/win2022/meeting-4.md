---
layout: default
title: Meeting 4
parent: Winter 2022
grand_parent: Meetings
nav_order: -4
has_children: false
permalink: /meetings/win2022/meeting-4
---

# Meeting #4
{: .no_toc }

Friday, 3/2/2022
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Agenda
1. Presentations, 2 groups + discussion `~20 min each`
2. Research/project ideation work time
3. Develop a possible project list based on presentations

[Meeting Recording for 1st Half](https://washington.zoom.us/rec/share/RyEhIA_hKJa4zt7Kyyq1CYwFEKgy-SVwkAmXSItwWPTpAapBAHurCVSZcQX6mR9T.MBGcp3QqM8NUfiz9){:target="_blank"}, [Meeting Recording for 2nd Half](https://washington.zoom.us/rec/share/LbV4167lddbm1OZ6mLh1ygN_7y4mCUuAiKg1MPcc9rYQbty6tYq-y96G7DGKwT9I.uc4Tz5CHuIZswZmV){:target="_blank"}

---

## Deliverables for Next Week
Groups that have not presented this week will be giving presentations next week.

---

## Notes
- Motivation - algorithms for computing don't learn like humans do, how can we make them more like humans?
- Take ideas and inspiration from neuroscience and manifest them in computing

### Reinforcement Learning
- Reinforcement - when you do something over and over again.
- Learning - when information goes into your brain.
- Combining reinforcement and learning - put information into your brain, make sure it stays there, and repeat.
- Oxford Dictionary - defines intelligence as the ability to acquire and apply knowledge and skills
- Reinforcement Learning - acquires knowledge as machines find the best possible behavior, done by learning from mistakes. 
- Ties to psychology - operant conditioning. Positive vs negative reinforcement.
  - Positive reinforcement gives a stimuli (either a reward or punishment) after an event
  - Negative reinforcement just doesn’t respond after an event / takes away the stimuli 
- Reinforcement learning in the field of Computer Science.
- Reward hypothesis - any goal can be formalized as the outcome of maximizing a cumulative reward.
- Formulate optimization problems as Markov Decision Processes - nodes represent states; an agent can take an action with some probability of doing that to get to a different node / state
- Recent advancements in Reinforcement Learning. 
  - Applications: self-driving cars, games (tetris, snake, etc.)
- Deep Q Learning to estimate values of possible actions given the state

Access slides [here](https://interactive-intelligence.github.io/files/presentations/win2022/week-4/RL.pdf){:target="_blank"}

<iframe src="https://interactive-intelligence.github.io/files/presentations/win2022/week-4/RL.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

### Neuromorphic Computing
- Goal - quick survey of the field and research.  Opportunities for neuromorphic computing algorihtms and applications.
- Brains have desirable properties - energy efficient, fast at learning, use unique computational operations
- Hardware and software need to be co-designed: they can't exist in isolation
  - Can be pretty foreign for most computer scientists.
  - If we change the underlying hardware, we must change the paradigm
  - Optimizing algorithms on phyiscal manisfestations
- Applications - why do we care?
  - Edge computing (energetically efficient)
  - Machine learning (rapidly training and flexibility)
  - Coprocessor in heterogeneous systems
- Edge computing - Loihi graph
- ANNs to GPU are mathematical and abstractive approaches - we can try to run native simulations in hopes of being more efficient.
- Set up the neural network on-device in which the neurons are built into the hardware *on the chip*.
- Physical systems through hardware can be directly executed
- If we do work with these, will be using simulations of neuromorphic chips.
- Coprocessor for novel domains - how can neuromorphic computing be used for differential equation solving, graph problems, optimization, etc.
- We can continue the spirit of Moore's law using heterogeneous systems
- Spiking Neural Network - generalizes to very broad neural networks, all nerual networks.
  - Use spike-based inputs instead of typical one-hot vectors or scalar values. 
  - Spikes are temporal
  - Focus on being temporal and event-driven
  - Signals that propagate take time to reach their destinations
  - The focus is being on being able to obtain a threshold and sending a signal once it is reached
- Theoretical guarantees of Spiking Neural Networks - SNNs are a superset of ANN functionality.
- Hardware neurmophic architectures: silicon-based, exotic materials (eggs, etc.)
- Co-design algorithms to the hardware
- SNNs are generalized ANNs. ML: quasi-backpropagation. Turn existing ANns into SNNs. Resevoir appraoch - take a soup of neurons and have a normal-ML interpret at the end.
- Non-ML question - how to map existing algorithms to graph theory and optimization algorithms.
- How to engineer neuronal properties in physical materials - lots of research in materials science. 
- Open questions
  - Applications
  - Algorithms - theoretical guarantees on SNNs, convergence - SNNs are a superset of ANNs, but just because SNNs can represent ANN functions does not necessarily mean that they can converge to those functions. Increasing the space dimensionality makes the problem harder.
  - Co-design - engineering relevant properties into the hardware to open up exploitation of desired properties.
  - Hardware - materials science and material discovery, architecture desing and fabrication
- Neuron - can be mapped as an electrical circuit. ANN is modeled by the RC circuit properties of a neuron. 
- Newman computing - CPU, memory, stream bits back and forth. Neuromorphic computing - event-based, more distributed and agglomeration of neurons, no separation of computation and memory
