---
layout: default
title: Meeting 7 - Intelligence
parent: Spring 2022
grand_parent: Journal Club
nav_order: -7
permalink: /jc/spr2022/meeting-7
---

# Meeting #7
{: .no_toc }

Monday, 5/9/2022
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Lineup

| Presenter | Paper/Topic |
| --- | --- |
| Andre | Measuring Intelligence |

---

## Papers Discussed
- ["Computing Machinery and Intelligence"](https://academic.oup.com/mind/article/LIX/236/433/986238){:target="_blank"}, Turing. 1950.
- ["Ascribing Mental Qualities to Machines"](http://jmc.stanford.edu/articles/ascribing/ascribing.pdf){:target="_blank"}, McCarthy. 1979.
- ["Using Deep CNNs to Prove That I Look Better Than Tom Cruise and Shah Rakh Khan Combined"](http://sigbovik.org/2022/proceedings.pdf){:target="_blank"}, Bharadwaj. 2022.
- ["On the Measure of Intelligence"](https://arxiv.org/pdf/1911.01547.pdf){:target="_blank"}, Chollet. 2017.

---

## Presentation Slides

Open in a new tab [here](https://interactive-intelligence.github.io/files/Measuring%20Intelligence%20A%20Tour.pdf){:target="_blank"}.

<iframe src="https://interactive-intelligence.github.io/files/Measuring%20Intelligence%20A%20Tour.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

---

## Recording
Forthcoming

<iframe src="https://www.youtube.com/embed/9FJFwa6gPvo" 
    width="560" 
    height="315"
    frameborder="0" 
    allowfullscreen>
</iframe>

---

## Notes
*Awesome notes courtesy of Janna!*

### Introduction
{: .no_toc }
*How do people measure intelligence?* 

- Framework to ascribe human qualities to machines and programs

*What does it mean to say that a machine is “conscious”?* 

- Equation for intelligence
- ARC is a concrete dataset where we can optimize intelligence

### Turing: Computing Machinery and Intelligence (1950)
{: .no_toc }

*Can machines think?*

- Do not answer on the basis on democracy or intuition
- Imitation Game

#### Interrogator
{: .no_toc }

How do we build machines to do imitation game?

What is the machine vs. human?

- Originally articulated in terms of gender
- Most people during this time thought that machines can’t think
- Identified learning as a key to AI

Practical:

- Only binary yes or no answer

#### Justifying the Imitation Game
{: .no_toc }

- Seperates physical and intellectual capacities
    - Truly measure the intelligence of the system
        - I.e. what does it mean to have a language to think things?
            - Does it know what an “apple” is if it hasn’t experienced yet?
- If you could artithmetic faster, you are a thinking machine

Only care about input → output 

- How can we have a machine that demonstrate human thinking behavior but not be thinking?
- General philosophy has been favorable in scope of history
    - Anti model agnostic
        - “There’s no way that this race or animal can think like we do!”
        

#### Digital Computers
{: .no_toc }

- Can do anything that humans can do — human computers are just higher than today’s calculators
- Digital computers vs. Nervous system
    - Both electrical
    - Thoughts from nervous system are just complex hierarchies of digital ops

#### Learning Machines
{: .no_toc }

- Simulate a child‘s mind
    - Simulate its education and evolution into an adult brain

### McCarthy: Ascribing Mental Qualities to Machines
{: .no_toc }

How can we ascribe mental qualities like beliefs, intentions, and wants to machines?

What is legitimate to ascribe?

- You can say that a machine is “conscious”
    - Term for the “self”
    

→ Why ascribe things at all?

- Helps understand the structure of the machine and its temporal behavior
- Want to describe the machine and its state
- Need language of mental qualities to describe machines that represent higher level organization
- Computers can perform abstracted tasks
    - Go one level further where its demonstrating complex qualities

Separate mental qualities from motivational structures 

- When you think of “feeling”, you might associate that with motivational structures, however
- Use mental qualities to understand the internals of the system

Systems with mental qualities

- Thermostats, self-reproducing cellular automata, computer time-sharing systems, programs designed to reason

### Chollet: On the Measure of Intelligence
{: .no_toc }

*We need explicit intelligence metrics* 

- Concrete metric → easier to measure → move towards AI

uring test and variants 

- So much influence over intelligence of machines
- Intelligence is tied to how much the interrogator knows
- As we become more acquainted to non human intelligence
    - Generator fooling discriminator

Two different understandings of intelligence:

1) Task specific skill

- Mind is an arrangement of ~static specialized mechanisms fine-tuned through evolution
    - i.e. How do our eyes evolve to see well?

2) Generality and adaptation

- Mind is a general purpose algorithm
    - Arbitrary experience → knowledge and skills

Chollet believes that both views are *flawed.* 

Task specific skills of DL:

- Primary way is bench marking to standardized metrics
- Metrics are key to the modern deep learning

Metrics for task specific skill:

- “AI Effect”
    - When AI does something new, it’s not really “thinking”
    

*There is no single task X such that skill in X demonstrates intelligence* 

- When the machine beats world champion, we don’t think that machine is intelligent
    - Machine built to do that one thing is not very “intelligent”
    - Narrow skills are impressive in the context of generality
    - Humans playing chess is impressive because it’s built upon cognitive skills
    

**Generalization in AI:** 

System-centric generalization 

- Interpolation
    - Can the system generalize stuff based on what’s given?

Developer-aware generalization 

- Extrapolation
    - Can the machine see beyond the system?
        - Give machine a new point (x=) which is beyond what the system has seen

**Current Efforts for Broad AI Evaluation:** 

Generalization in Reinforcement Learning 

- Exposed to environment via exploration
    - Only for trivial modifications
- Multitask benchmarks
    - How does the machine perform with other skills?
    

**Where do we fall short?**

Surpassing humans in skill 

- “Moonshots”, AlphaGo & AlphaZero, DotA2, “AI beats human”

Developing broad abilities 

- Learning to learn
- Acquiring new skills
- General, flexible

#### New Perspectives
{: .no_toc }

*How do we evaluate a skill?*

- Chess can be abstract when humans play it, but it does not need abstraction
- Think of the difficulty of abstraction
- Learning hard-coded knowledge from data
    - Rigorously control the priors, experiences, and g-word (generalization)
    

*Universal intelligence is a scam; must be anthropocentric* 

- Obtain universal intelligence vs. Simulated human intelligence
    - Progress should be benchmarked against human intelligence
        - Recognize that this anthropocentrism is not greedy
            - Property not restrictive to humans
            - When comparing AI, compare it to human mode of thinking intelligence

Priors - where intelligence starts from

- Most intelligence is acquired; it is not innate
    - Acquired via interaction through environment
        - Learning algorithm
- Human cognitive priors
    - Low level — teeth chatter
    - Meta-learning — causality (making sound when one hits the table)
    - Knowledge — visual object-ness, Euclidean spaces, goals, social
    

Intellectual progress paved so far 

- Quantify the strength of adaptability
- General AI must be benchmarked against human
    - There is no meaningful concept of intelligence that humans can pursue
    
    > *The intelligence of a system is a measure of its skill-acquisition efficiency over a scope of tasks, with respect to priors, experience, and generalization difficulty.*

    - Experience → Skill
        - Great way to think about intelligence

---

## Photos
*Also courtesy of Janna*

![image](https://user-images.githubusercontent.com/73039742/167541748-f7b0d962-d53e-4dc8-9a61-fdfa8d35eb7d.png)

![image](https://user-images.githubusercontent.com/73039742/167541760-722f6647-ae14-4580-9d64-672d9955b0f1.png)

![image](https://user-images.githubusercontent.com/73039742/167541770-56e6f84c-0601-4c41-9cf1-fe518256d78e.png)

![image](https://user-images.githubusercontent.com/73039742/167541786-0a094b5d-94bb-49e5-9798-bba48d2d5c19.png)

![image](https://user-images.githubusercontent.com/73039742/167541795-d433f2fc-6830-47ee-92dc-e0dc1ea1f14f.png)

