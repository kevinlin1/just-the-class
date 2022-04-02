---
layout: default
title: Emergent Language
parent: Projects
nav_order: 1
has_children: false
permalink: /projects/emergent-lang
---

# Emergent Language
{: .no_toc }

Allowing AI populations to independently develop language
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Description
Language is fundamental to collective human intelligence. Moreover, anthropology studies have demonstrated that the development of language may have been a key factor responsible for rapidly increasing the rate of human civilization's advancement. Our language is an intricate and complex system of symbols arranged sequentially to communicate meaning. Many efforts have been made to advanced machine understanding of human language. However, these deep learning models learn by modeling syntactic representations - associations and contexts between sets of linguistic tokens - rather than necessarily comprehending the semantics behind language. A network perceives the word 'stone' as related to 'rock' and perhaps even to 'boulder', as something that is often the noun upon which the verb 'skip' is acted upon, and so on: but it does not understand the physical, visual, or other sensory properties of a stone. The detatchment of language models from the semantic roots of language is one key reason behind their observed lack of robustness.

The objective of this project is not to force machines to understand the syntactics of human language, but rather to encourage the development of a synthetic language between AI agents in relationship to an environment. We attempt to provide neural networks with the means/framework to accomplish building such a language. The emergent language must possess three key properties:
- *Symbolic*. The language must be comprised of discrete symbols, rather than continuous/real-valued vectors.
- *Sequential*. The language must be created and interpreted sequentially, such that symbols cannot be concurrently created or interpreted.
- *Variable-length*. The language must allow for sequences to be of different length, such that information with less meaning is represented with a shorter sequence than information with more meaning. That is, language must not only be capable of being variable length, but it must be minimally redundant; there must be a 'metabolic cost' associated with the length of utterances.

The hope of this project is to develop language models capable of representing information in a form similar to that of humans. It has long been known that syntactics guide semantics; perhaps this may lead to less explicit and more abstract neural network 'thought'.

This project meets every Wednesday at 3:30 to 5:00 PM. See the Schedule page for the most up to date information about location and time.

---

## Updates
*To be updated.*

---

## Findings
- Given a neural network generating a language output with length $$L$$ and vocabulary size $$V$$, expanding $$L$$ by some factor $$k$$ reliably yields superior performance than expanding $$V$$ by the same $$k$$ (holding the other variable constant).

*More exciting findings forthcoming.*

---

## Phases

(This is somehwat out of date/unspecific and will be updated.)

1. Train and evaluate computational linguistics approaches on a modified VQ-VAE
2. Modify Mordatch & Abbeel's "emergent language" environment
3. Train on a predator-prey environment for adversarial language development

---

## Resources
- ["Emergence of Grounded Compositional Language in Multi-Agent Populations"](https://arxiv.org/abs/1703.04908){:target="_blank"} by Igor Mordatch, Pieter Abbeel.
  - See slides from a [JC presentation](https://interactive-intelligence.github.io/jc/win2022/meeting-3#emergence-of-grounded-compositional-language-in-multi-agent-populations){:target="_blank"} given on this paper.

*More reearch and resources forthcoming.*
