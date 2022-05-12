---
layout: default
title: Bio-RL
parent: Projects
nav_order: 1
has_children: true
permalink: /projects/bio-rl
---

# Bio-RL
{: .no_toc }

Biologically inspired reinforcement learning algorithms to understand the internet
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Description
The goal of the Bio-RL project is to create a reinforcement learning algorithm that embodies biological mechanisms in the brain such as TD-Learning to represent dopamine expectation based learning, and predicting its own inputs to represent predictive coding as well as interacting with its environment and learning from those experiences as humans do in general. 

Future additions may include mimicking the role of the brain’s memory through structures like Hopfield Networks, exploring spiking neural networks or active dendrite based models, or exploring how to test the network in a neuromorphic computing context.

One application of the RL algorithm will try to optimize its ability to predict inputs from an environment based on random interactions with the websites on the internet. These inputs (and predicted outputs) will be multimodal text and images from the webpage that results from interaction.

[Project Proposal](https://docs.google.com/document/d/1mw_phs-BgumofocYYcUpDUTiiu0GCah364vF0r70nUM/edit?usp=sharing)


## Phases
*Phase 1*  
Learn the math and theory behind existing reinforcement learning algorithms and discover
correlations to the brain.   
*Phase 2*  
Test and implement various biologically inspired RL algorithms in well understood environments like OpenAI gym and
other RL benchmarks.  
*Phase 3*  
Test these algorithms in increasingly more complex environments with increasingly more complex action sets that mirror
the real world and those of real agents.
