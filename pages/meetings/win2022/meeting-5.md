---
layout: default
title: Meeting 5
parent: Winter 2022
grand_parent: Meetings
nav_order: -5
has_children: false
permalink: /meetings/win2022/meeting-5
---

# Meeting 5
{: .no_toc }

Friday, 3/11/2022
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Agenda
From 5 - 7:30pm! Extra time to discuss :)
- Swarm, meta, bio, predictive coding - 90 minutes (20 min. each + buffer)
- Break - 10 minutes
- Project discussion - rest of time (~50 minutes)
  - Break into small groups and come up with proj ideas (15 min)
  - Share ideas in large group

---

## Deliverables for Next Week
This was the last meeting of the quarter! There are no concrete deliverables for next week, but keep thinking about ideas over Spring Break so we're ready to jump into projects starting Spring Quarter :)

---

## Notes

### Meta-Modeling & Self Aware Networks
Access slides [here](https://interactive-intelligence.github.io/files/presentations/win2022/week-5/Meta-Modeling%20&%20Self%20Aware%20Networks.pdf){:target="_blank"}

<iframe src="https://interactive-intelligence.github.io/files/presentations/win2022/week-5/Meta-Modeling%20&%20Self%20Aware%20Networks.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

- Modeling: a representation of phenomena from data
- Meta-Modeling: A representation of models from meta-data (data about the models ie weights/biases)
- External MM: teach others by representing our own model and communicating it
- Internal MM: teach ourselves about ourselves by modeling our own models
- Neural Architecture Search (NAS) as a form of meta modeling
  - Efficient NAS
  - DARTS
  - High cost of computing, have to train model and a model to understand the model
- Self:
  1. Aware of env and goals
  2. Predict effects on self
  3. Adapt to effects of env on self to achieve goals
- Meta modeling used for self-healing agents, model when agent is injured
- Used to model quality of packet transfer
- MinMaxNN uses meta modeling to select actions that best suit a goal
- Meta modeling in LeCunn's world model high level "configurator"

### Predictive Coding
Access slides [here](https://interactive-intelligence.github.io/files/presentations/win2022/week-5/Predictive%20Coding.pdf){:target="_blank"}

<iframe src="https://interactive-intelligence.github.io/files/presentations/win2022/week-5/Predictive%20Coding.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

- Brain encodes prediction / expectation of the world
  - Bigger violations cause more learning
  - Ex if you get scared / didn't expect something you will update your model more
- Categorizes and filters out unuseful information
- Predictive coding causes us to preemptively fill in information that isn't there based on our prior beliefs
  - Triangle optical illusion example
- Pred coding also allows your brain to have a confidence estimate
  - Ex we trust our vision less when it's foggy or dark
  - Not well expressed in NNs
- Multiple levels of predictive coding can expect larger features of objects like edges or contours instead of exact pixel values or colors

### Swarm Intelligence

Access slides [here](https://www.canva.com/design/DAE5zKyksg0/TOmQfjYojpqzzhvWSOHwPQ/view?utm_content=DAE5zKyksg0&utm_campaign=designshare&utm_medium=link&utm_source=viewer){:target="_blank"}

- Swarm intelligence: you don't want a central controller of many individual things, rather - give autonomy to the individual agents and have them converge to certain optimal solutions.
- When you have many different agents, coordinating all the actions at once is difficult.
- We hope that agents converge to a solution and do what we want - potentially risky. No guaranteed behavior.
- Real-world applications. We need to think about potential challenges.
- Swarm control is generally used in the military for drone. Applications often involve robotics.
- Biological analogs - bees, ant colonies, schools of fish, society, immune system, artificial immune systems, slime molds.
  - Move together, but without a central controller.
- Fungal computing. Fungal colonies are simultaneously a mass of single-celled fungi and a massive unicellular organismm.
  - Fungal cells can propagate electrical signals, which allows for the processing of Boolean logic. 
  - Biological computing - a lot of interesting properties.
- Fungus is alive - it perceives in the same way that organisms do, respond to physical inputs naturally. Allows the building to 'make decisions' based on changes in lighting, air quality, physical damage, etc.
- Give autonomy to individuals in a swarm: abstracts low-level control and reduces computational demands of a central controller.
- Self-driving vehicles. Traffic is a complex system consisting of many independent agents.
- A central computer cannot compute the goals and surrounding states of all of the states in a system. Swarm computing becomes more relevant. Individual agents with only their internal state and surrounding observations can cooperate to achieve a goal.
- Macro action formation to compose low level actions into computable larger actions by a central controller
  - Let agents decide how to fulfill macro actions of central controller

### Biologically Informed/Plausible Networks

Access slides [here](https://interactive-intelligence.github.io/files/presentations/win2022/week-5/Biologically%20Informed_Plausible%20Networks%20Presentation.pdf){:target="_blank"}

<iframe src="https://interactive-intelligence.github.io/files/presentations/win2022/week-5/Biologically%20Informed_Plausible%20Networks%20Presentation.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

- Biologically plausible networks - networks that can perform their function in a way that could plausibly be done by biological systems.
  - Backpropagation not bio-plausible (?) because information cannot be rapidly sent antidromically from neuron synapses.
  - Following Hebbian plasticity rules
- Neural networks are a few abstractions away from the brain.
- We can approximate the behavior or outcome of modified 'brains' through reconstruction of a state.
- Heavily relationship to neuroscience
- Being biological plausible allows us to get closer to emulate the brain
- We can perform "unethical" experiments on bio-plausible networks
- Significant literature on 'plausifying' training algorithms.
- Numenta: shifting for a biological rather than a mathematical basis for AI algorithms
- Jeff Hawkins, *A Thousand Brains: A New Theory of Intelligence*
- More of a recent phenomenon in literature
- MemoryNet: through only feed-forward and local updates, efficiently encoding information into a NN structured like a section of the brain
- Complex Behavior from Smaller Systems. Use a bio-informed paradigm/architectural design to create smaller networks that show higher learning abilities for NNs of the same size.




































