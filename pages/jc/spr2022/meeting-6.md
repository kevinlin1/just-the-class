---
layout: default
title: Meeting 6
parent: Spring 2022
grand_parent: Journal Club
nav_order: -6
permalink: /jc/spr2022/meeting-6
---

# Meeting #6
{: .no_toc }

Monday, 5/2/2022
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
| Yegor | Attention and Transformers |

---

## Slides

<iframe src="https://interactive-intelligence.github.io/files/Attention_Transformers%20JC.pdf" width="100%" height="400" style="border:1px solid black;"></iframe>

---

## Recordings
Forthcoming!

*Part 1: Transformers*

<iframe src="https://www.youtube.com/embed/0eLq76NAL1w" 
    width="560" 
    height="315"
    frameborder="0" 
    allowfullscreen>
</iframe>

*SIGBOVIK papers - TurkSort and RISE*


<iframe src="https://www.youtube.com/embed/CerTElZVpmY" 
    width="560" 
    height="315"
    frameborder="0" 
    allowfullscreen>
</iframe>

---

## Notes
- Sequence to sequence problems - particularly used for translation tasks, but can also be used for other tasks. 
- Generate the next word task.
- Recurrent networks - old approach. Lots of information is crammed into a single vector, and information must take a long, meandering patht rhough the system.
- Recurrent netwrks - previous states are propoagated throughout time steps. 
- In seq2seq problems, the output of the enocding is passed into a recurrent decoder.
- Many translation problems have complicated dependencies (e.g. gendered words) that need to be navigated.
- Attention - recurrence free, enables large models. Can model complex dependencies well and is trainable.
- Attention - pick and choose which words have to do with which other words.
- Query, Key, Value
  - Query - almost serves a lookup-table like function.
  - Keys - how things are looked up.
  - Values - what we're actually looking up.
- Steps
  1. Take every word and embedding
  2. Obtain queries, keys, and values for each token just by taking the embedding and multiplying it by a matrix. This transforms it into a different space. Fundamentally, represents a step to separate information out.
- Attention operation - one formula. Dot product between the query and the key, scaled by the vectors passed into softmax and multiplied by value vector
- Multi-head attention. 
- Symbols can have multiple meanings. Multihead attention - project into smaller queries, keys, values and perform attention
- Problem - when we take the weighted average of the words, we lose all positional information; we effectively have a bag of words model.
- Hacky fix - positional encoding. Use multiple sine waves to encode the positional information.
- Transformer - equal path lengths, speeds, avoid gradient vanishing and explosion

---

## Recommended Resources
Yegor has recommended additional resources to learn about attention and transformers.

- [Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/){:target="_blank"}
- [Harvard NLP - Attention](https://nlp.seas.harvard.edu/2018/04/03/attention.html){:target="_blank"}
- [PyTorch - Transformer Tutorial](https://pytorch.org/tutorials/beginner/transformer_tutorial.html){:target="_blank"}
- ["Attention is All You Need" Paper](https://arxiv.org/pdf/1706.03762.pdf){:target="_blank"}
- [Transformer Slides from CSE 447 @ UW](https://courses.cs.washington.edu/courses/cse447/22sp/assets/slides/lec13.pdf){:target="_blank"}














