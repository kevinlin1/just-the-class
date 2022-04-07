---
layout: default
title: Meeting Notes
parent: Emergent Language
grand_parent: Projects
nav_order: 1
has_children: false
permalink: /projects/emergent-lang/meeting-notes
---

# Meeting Notes
{: .no_toc }

Agendas, notes, and ideas from project meetings
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Meeting 1, 4/6/22

### Agenda and Goals
{: .no_toc}

This is our first 'formal' project meeting together. This meeting has the following objectives:
- Get to know the team members - interests, specialties, skills, ideas
- Bring everyone on the same page on the project's foundational motivations and vision
- Introduce everyone to the work and research that has already been done by the team
- Set out directions for team members to work on

Our room is reserved from 4:00 PM to 6:00 PM. We may meet anywhere from 1 to 2 hours, depending on how the discussion flows. We will adhere by the following tentative schedule:

1. Round table introductions on interests, specialties, skills. Make sure all team members know each other as thinkers and people. `Max 10 min.`
2. Present & discuss the project's foundational motivation and vision, clarify + shape + expand upon the current vision with input from the team. `Max 30 min.`
3. Present & discuss literature in the field of Emergent Language. `Max 30 min.`
  - Assigned reading: ["On the Spontaneous Emergence of Discrete and Compositional Signals"](https://aclanthology.org/2020.acl-main.433.pdf){:target="_blank"}
  - Additionally: ["Emergence of Grounded Compositional Language in Multi-Agent Populations"](https://arxiv.org/pdf/1703.04908.pdf){:target="_blank"}
  - Additionally: ["Neural Discrete Representation Learning"](https://arxiv.org/pdf/1711.00937.pdf){:target="_blank"}
4. Present & discuss work and research that has already been done. `Max 30 min.`
5. Discuss new directions and ideas, assign people to work on certain directions. `Ideally most time during the meeting is spent on this.`

### Notes
- Split in literature - autoencoder vs signal game.
- Compositional - better defined in the context. You're able to decompose and recompose language as parts, which can be stitched together however you like. 
  - A sentence depends on its parts, and you can build things up from it.
- Imposing language-like mathematical formulations on the language encoding. 
- Discrete properties emerge from even continuous representations.
- Why does discreteness emerge in human language? To remove noise, categorical.
  - Potential idea: if we want a continuous output, add in noise.
  - VQ-VAE adapted for language
- Maximizing the concept of understanding. Make the models share weights (?)
- Alternate technique - add visual understanding to the language representation before decoding.
- Optimize language based on language or optimize language based on image?













