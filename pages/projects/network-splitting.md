---
layout: default
title: Network Splitting
parent: Projects
nav_order: 3
has_children: false
permalink: /projects/network-split
---

# RL
{: .no_toc }

Tagline
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Description
Many modern Deep Learning systems struggle with classification when brittle, nearly invisible features are added to their input, creating adversarial examples. In addition to this, the a best formulation of layers for a given problem in the architecture of a neural network is not known, although there are many high-performance solutions to this problem. We aim to “grow” neural networks, instead of randomly initializing them, with the hope of being able to find more robust architectures which go around mountains instead of getting stuck in crevices. By slowly expanding the number of parameters (or “growing” the neural network), we hope to achieve two goals: reduce the training time (by not optimizing on parameters we don’t yet need), and evaluate the difference in decision criteria of neural networks which have this growth property.

ANN’s use approximations of neurons that only resemble biological neurons in so many ways. We aim to discover better biological corollaries to artificial neurons by training a neural network to be a “better” neuron.

This project meets every [day] from [time] to [time]. See the Schedule page for the most up to date information about location and time.

---

## Updates
*To be updated.*

---

## Findings
*More exciting findings forthcoming.*

---

## Phases
1. READ. RTFM (read the fun manual). A few minutes of reading the documentation can save you countless hours of painstaking toil.
2. Create the smallest possible version of a “growing” neural network using a single layer dnn on a toy problem. Iteratively append and train a neural network, and quantify the results to move forward.
3. Upgrade the problem to be more complex.
4. Test out different strategies for growing a neural network (subdividing, appending, splitting, activation function optimization, sharing weights or not sharing weights).
5. Apply some of these concepts to something like inception and train an imagenet classifier to write a paper about.


---

## Resources
*More reearch and resources forthcoming.*
