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
3. Plan out meeting with Ph.D. student (`~20 min max`)
4. Go over website access info, how to put up resources, results, and agenda items (`~20 min max`)
5. Discuss different variable-length sequence techniques (`~30 min max`)
6. Additional experiment and brainstorming discussion (`Remainder of time`)

### Notes
{: .no_toc}

#### Agenda for Meeting w/ PhD Student
{: .no_toc }

What we want:
- To explain the idea
- To get feedback on the ideas
  - General thoughts
  - Variable sequence length
  - Language itself
  - Better language analysis
- Hear next directions and general steps

1. Talk about the goal of the project - study the field of emergent language, getting a language to arise in an environment where communication is meaningful without explicitly conjuring language itself. Axioms/properties of language:
  - Symbolic/discrete - not continuous
  - Sequential - there has to be the dimension of time or intrinsic ordering
  - Variable length
  - Groundedness
  - Compositionality
2. Explain the task (geometric binary scene similarity)
3. Explain the current best-performing system - dual listener-speaker model
4. Explain current analysis and results
5. Other system ideas (if time)
6. Collect thoughts and next directions - better visual units, better architecture, new problems,e tc.

#### Variable-Length Sequences
{: .no_toc }
- Token confidence method of thresholding.
  - Results: average length of around 2, very unstable. If the max length is too large, experiences some sort of catastrophic forgetting - forgets everything and struggles, unlearns, is unreliable.
- Pressure for shorter sequences: give a loss for every token it outputs. However, putting a loss on every token results with wild training curves. Unstable performance and had difficulty learning, but eventually arrived at a decent solution.
- Alternative solution: remove the losses on the intermediate tokens, place the loss on the last token (i.e. $$\ge$$ threshold, or hits max length without reaching the threshold). This yields a more stable training curve with discrete epochs in which the model discovers new discrete symbolic breakthroughs.
  - To pursue: generate the tokens vs prediction graph over training (GIF)
- New idea: measure changes in between consecutive symbols. The addition of a new symbol must provide significant benefit. 
- Potential variant: use rolling window difference comparisons. Consider short-length importance.
- Potential change in meaning: `Yegor is horrible...` + `...at being an asshole.`
  - Analog in geo scene sim task: putting specific meanings on tokens that have other arbitrary rules
- Potential problem: difficulty producing a consistent syntax. Don't know when the end is coming.
- Discovered concrete evidence of a syntax in two tokens, some syntax in three tokens - but it's not a very language like syntax. 
- Put a bidirectional recurrent unit in the listener or the generator (but not both)
- Translate into Tensorflow, build simple bidirectional recurrent.
- Work towards 3 colors, 3 shapes, min number of shapes 1, max number of shapes 3, Alec mode - all shapes in the scene are the same.
  - Try training with a 3 by 3 vocabulary size - start with colors, then shapes, then number. A syntax.
  - Attention seems more suitable, or use the one-hot trick - helps to facilitate the development of the specific syntax.

![image](https://user-images.githubusercontent.com/73039742/164344490-723e1ea7-7160-48ca-9f19-79e5df02d4b5.png)

![image](https://user-images.githubusercontent.com/73039742/164344516-cf72e06c-6dd9-4cf0-ad6f-6c0b0ddb9907.png)

![image](https://user-images.githubusercontent.com/73039742/164344531-86376b02-787c-4041-946e-3e451f61ca6d.png)

![image](https://user-images.githubusercontent.com/73039742/164344560-f19fcb26-f0e4-4662-8ffa-0f8489d3f3aa.png)

![image](https://user-images.githubusercontent.com/73039742/164344475-43d1ac45-a5b3-431b-8844-170ad3a6a788.png)

- Intrinsic vocabulary size via loss penalization.
- Allow for speaking nothing, silent tokens.

#### Metrics
{: .no_toc }
- What counts as a 'working model'?
- One object - any color, any shape; reached > 90%. 1 sequence length, 10 vocabulary size.
- Potential behavior: throws out terms and has other terms disambiguate. A lot of weird and interesting compositional behavior.
- Try out things that we can get with the MNIST dataset.
- Accuracy and measuring performance - you can get very high accuracy with very little understanding of the image.
- Training Siamese network in Alec mode with 3 by 3 - reaches 75% accuracy. Looking at the encodings: a token that means green, green triangle, redundant tokens (e.g. 'not green triangle'). Not very language-like. 
- Focuses on one attribute
- Potential solution: only vary one attribute in different images. A pair of images are only differing by one attribute/along one dimension.
- Supercharged Alec mode: image is not defined by a set of shape objects, but the number of things in it, the shape types, and the shape colors. Two paired images only differ in one axis. One-axis variation along Alec mode, strong Alec mode.
- Language like - everything is encoded sufficiently, there is sufficiently clear evidence of patterns.

#### Progressive Language Learning
{: .no_toc }
- Progressively introduce new 
- Initial dataset: MNIST-type dataset with decent accuracy, then trained on more complex dataset.
- Introduction of new tokens and token usage, observe the theoretically stable development of language.

#### Misc
{: .no_toc }
- `min_shapes = 0` and developing a nothing token
- Audio, multimodal inputs for language
- GAN-type model
- Cheating the Vector Quantizer - when you listen to yourself, don't quantize: listen to what you mean, not what you say. Instead of actually quantizing, have a loss when shifted off: just quantize directly. (This is how it is done).
- Maybe not use quantization at all, maybe add loss to encourage clustering/discrete behavior.


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











