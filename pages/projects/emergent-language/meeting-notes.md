---
layout: default
title: Meeting Notes
parent: Emergent Language
grand_parent: Projects
nav_order: 2
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

## Meeting 4, 4/27/22

### Agenda and Goals
{: .no_toc}




---

## Meeting 3, 4/20/22

### Agenda and Goals
{: .no_toc}

We will meet in CSE2 (exact room to be announced in Discord before meeting starts) at 4:00 PM. The tentative agenda is as follows.

1. Friendly and lively chatter about life (`~10 min max`)
2. Brief progress updates on tasks (`~10 min max`)
3. Go over website access info, how to put up resources, results, and agenda items (`~20 min max`)
4. Discuss different variable-length sequence techniques (`~40 min max`)
5. Additional experiment and brainstorming discussion (`Remainder of time`)

### Notes
{: .no_toc}

#### Variable-Length Sequences
{: .no_toc }

---

## Meeting 2, 4/13/22

### Agenda and Goals
{: .no_toc}

We will meet in CSE2 (exact room to be announced in Discord before meeting starts) at 4:00 PM. The tentative agenda is as follows.

1. Friendly and lively chatter about life (`~10 min max`)
2. Brief progress updates on tasks (`~10 min max`)
3. Evolution of the dataset - designing the dataset and further expansions (`~30 min max`)
4. Deep learning and computational linguistics - measuring and interpreting generated languages (`Most of the time`)
5. Modeling approaches (`Remainder of time`)

### Notes
{: .no_toc}

#### Dataset
{: .no_toc}
- Yegor's dataset work: [Demo notebook](https://github.com/interactive-intelligence/emergent-lang/blob/main/shapedata-demo.ipynb){:target="_blank"}, [Script](https://github.com/interactive-intelligence/emergent-lang/blob/main/shapedata.py){:target="_blank"}
- Two scenes are considered different if they do not share the same objects (defined by the color and the shape attributes).
- The dataset includes meta-data on shapes and colors.
- Goal of the network - should be semantically meaningful, we want some sort of language to enmerge. If we just use an autoencoder, we will end up with very specific information encoded. The best we do is a vector-quantized autoencoder, which is not quite language-like. 
- This task seems especially suited to describe what is in the scene.
- Dataset includes arbitrary rotation.
- Possible extensions:
  - Different sizes - needs to more fully understand the semantic properties of the object.
- Potential usage of capsule networks
- Potential training of directly training a visual unit without any language - train a raw Siamese network on the dataset. 
- Video based dataset with motions
- Dataset with arbitrary colors - helps to impose a discrete vocabulary onto a quasi-continuous color spectrum.

#### Linguistic Measurements
{: .no_toc}

Paper notes - "Determining Compositionality of Word Expressions Using Various Word Space Models and Measures
- Working with a set of English expressions rather than artificially generated languages
- 5 different world space models
- Certain word space methods with the highest correlations of predicting compositionality are the ones that require the largest datasets of different documents
- Maybe dubious to apply natural language synthesized languages to generate languages without being computationally grounded.
- Maybe makes sense to roll our own analysis of how language is generated?

Current results seem compositional.
- Vector quantization - take a vector that should theoretically be an abstract embedding, and snap the entire space to a discrete set of tokens.
- Model - listening, speaking, and visual units.
- The model is quite simple, but it seems to work well.

*Example demonstration of synonymous encodings.*

![image](https://user-images.githubusercontent.com/73039742/163288088-6c2c1cd8-a983-4263-a453-88fd2010bb5c.png)

*Collected generated language information.*

![image](https://user-images.githubusercontent.com/73039742/163288162-e75c90cd-732b-4096-8c9f-b77473fd1cd0.png)

- Activation maximization to find the optimal image that is described by some sentence.
- A lot of rules can be intuitively grasped just via experimentation.
- Argument/statement for compositionality: 
- Decreasing vocabulary size may help with compositionality - prevents the network from merely developing everything.
- Compositionality: a symbol for one axis appears consistently irrespective of other axis dimnesions. 
- Current model exhibits dumb compositionality. We see that a token exists for green (`0`), and `4` seems to distinguish 'pointiness'.

*Green square, triangle, circle (in that order)*.

<center>
<img src="https://user-images.githubusercontent.com/73039742/163289871-e9a8062b-decd-41a4-9da4-45c83272ff3d.png" width="60%" />
</center>

- Extrapolation by holding out on certain shapes: e.g. add a star, very pointy object, hold out on green triangle and see if the language still applies.
- Weakness in meaningful extrapolation of object counting - any number of blue circles beyond 1 is the same sequence of tokens, which is entirely different from the token sequence used for one blue circle. It abscribes 'one vs many' to different tokens.
- Potentially add boundaries to prevent training via color estimation.
- Augment the dataset - produces different but similar scenes with a lot of objects. 
- The rules make sense, but they're probably too complicated - decrease vocabulary size.
- Set up Turing test - Andre.

#### Modeling
{: .no_toc}
- How to make models variable length?
- Cost per token/metabolism cost for speaking, introduce a 'silence'/'pause' token.
- Dually output the desired length of the sequence to cut off.
- Recurr length generation and set threshold. "I will not stop speaking until what I have said is sufficient to describe what I mean."
- Zipf's law - we see that the frequenices of tokens in the generated sequences falls more or less into Zipf's law (the $$n$$th most common token appears about $$\frac{1}{n}$$ as often as the most common token).

<center>
<img src="https://user-images.githubusercontent.com/73039742/163292186-7b73fa15-5a6f-48d7-b94d-c190a9bd5b4f.png" width="60%" />
</center>



- Train a very simple model to answer simple questions based on the sequence input to statistically extract information.
- Counting - generate a pathological dataset
- Increase sophistication/power of the model - LSTMs, attention, etc.
- Will help up with larger image sizes.

### Tasks
{: .no_toc}

| Person | Task |
| --- | --- |
| Alec | Work on Siamese architecture, work on porting over PyTorch to TF |
| Amelia | Once the pattern dataset is finished, work on statistical/programmatic analysis on pattern recognition |
| Andre | Turing test program for Friday, beef up DLSM, Siamese discrete-language architecture testing, work on porting over PyTorch to TF |
| Eric | Work on object similarity problem without language to develop better visual unit |
| Yegor | Clean up analysis code, export dataset into a more usable format (with image references included), fixing and debugging model. Ask NLP professor how to make explicitly variable-length representations internally. |

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
{: .no_toc}

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

*Crude drawing of a 'no image signal' architecture (top) vs a 'yes image signal architecture' (bottom) for the problem of image object similarity.*

![image](https://user-images.githubusercontent.com/73039742/162102783-e77218f2-75fe-47df-a71a-d29c31cbcfd8.png)

### Mini-Lectures
{: .no_toc}

Alec and Yegor gave awesome mini-lectures on CNNs, RNNs, and backprop as an introduction to major components used in this project's system design.
- [CNNs (Alec)](https://drive.google.com/file/d/1UBkArt7jjIUqJtPyww3jqXiOBcdZ3UJ2/view?usp=sharing){:target="_blank"}
- [RNNs (Alec)](https://drive.google.com/file/d/1hre37gRNW7eWILAiAd99FrJszItNivu6/view?usp=sharing){:target="_blank"}
- [RNNs (Yegor)](https://drive.google.com/file/d/17dNeO5WVfb7MQqjdRd4BFUsJrHS4beTn/view?usp=sharing){:target="_blank"}
- [Backprop (Alec)](https://drive.google.com/file/d/1M1ocvD43xPQMWG-y1D5w7Eo9vdAhoiQe/view?usp=sharing){:target="_blank"}

Convolutional Neural Networks

{% include youtubePlayer.html id="ngjj56m4ZJU" %}

Recurrent Neural Networks

{% include youtubePlayer.html id="5nQ7RtFk4QQ" %}

Backpropagation

{% include youtubePlayer.html id="TmfLcEcCDpE" %}


### Tasks
{: .no_toc}

| Person | Task |
| --- | --- |
| Alec | Create 'no image signal' architecture |
| Amelia | Research computational linguistics > language quantitative metrics |
| Andre | Create shape dataset |
| Eric | Research computational linguistics > language quantitative metrics |
| Yegor | Create 'yes image signal' architecture |











