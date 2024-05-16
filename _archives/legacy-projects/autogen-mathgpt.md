---
layout: default
title: Autogen MathGPT
parent: Legacy Projects
nav_order: 3
has_children: false
permalink: /legacy-projects/autogen-mathgpt
---

# Autogen MathGPT
{: .no_toc }

Making ChatGPT useful for Math homework with the multi-agent framework "Autogen"
{: .fs-6 .fw-300 }

## Project Leadership
**Project Manager:** Weikai (Kai) Huang
- Contact: *shen2347@uw.edu*

## Description
ChatGPT(GPT-4) models perform poorly in basic reasoning, especially with regards to solving math problems. GPT models tend to forget some details when reasoning, and it doesn't support an external math tool to help it with basic tasks (e.g. solving equations). 

However, "Autogen", a multi-agent framework released by Microsoft recently, can assign different roles to several GPTs, one GPT with a role will be called as an "agent". We let agents interact automatically. (e.g. One GPT will be assigned as "student", it answers the questions, and the other GPT will be assigned as "teacher", it checks the answer and give feedback. Then the "student" will refine the answer based on feedback. This loop will continue until the answer is correct). This will hopefully greatly improve the reasoning skills of the model. What's more, Autogen can automatically execute the AI-generated codes so we can use millions of external tools (API) to help us solve problems. 

Based on multi-agent RL and code execution ability provided by Autogen, our goal is:
Apply this framework to solve several complicated (multi-step) math questions from UW math homework and use multi-agent RL to let GPT self-refine the answer and use codes to generate graph or solving equations, which is impossible by directly using ChatGPT. 

We have 4 steps:
1. collecting the math questions datasets and transform to ideal format.
2. determine our multi-agent structure, like how many agents should we have, what are their roles. How they interact with each other.
3. implementation with codes and debugging. 
4. Result analysis. 

The future of this research project:
1. Visualization and web application product.
2. Paper(Since multi-agent is a hot topic in academia now).
3. Adapt to other field: programming, essay writing, etc.

## Project Video
{% include youtubePlayer.html id="aT2EtN1WNnM" %}

## Alignment with I2
This project embodies I2's mission by innovating AI interactions, simulating human learning, and enhancing problem-solving intelligence.
