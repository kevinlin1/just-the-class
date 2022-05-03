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

## Meeting 5, 5/4/22

### Agenda and Goals
{: .no_toc}

We will meet in CSE2 (exact room to be announced in Discord before meeting starts) at 5:30 PM. Note in Discord if you do not have building access, since CSE2 locks at 5:00 PM; a member will give you access. The tentative agenda is as follows.

1. Friendly and lively chatter about life (`~10 min max`)
2. Progress updates on tasks (`~10 min max`)
3. Alec-OOD Task (`~10 min max`)
4. Novel language updates: LSTMs, Bidirectionality (`~30 min max`)
5. Gumbel-Softmax quantizer (`~30 min max`)
6. Additional ideas (sparse visual unit, etc.) (`Remainder of time`)


---

## Meeting 4, 4/27/22

### Agenda and Goals
{: .no_toc}

We will meet in CSE2 (exact room to be announced in Discord before meeting starts) at 5:30 PM. Note in Discord if you do not have building access, since CSE2 locks at 5:00 PM; a member will give you access. The tentative agenda is as follows.

1. Friendly and lively chatter about life (`~10 min max`)
2. Brief progress updates on tasks (`~10 min max`)
3. Refocus on group project, direction, goals, and metrics (`~30 min max`)
4. Discussion about variable length methods (`~30 min max`)
5. Additional idea discussion and brainstorming (`Remainder of time`)

### Outlining Goals and Current Phase
{: .no_toc }

End of quarter - implementation and explanation of a DLSM model.

- Avoid 'build a model to `__________`'.
- Goal: to build DLSM model variations to do well on mediocre-strength Alec mode.
  - Capsule network for visual unit
  - Very large or small vocabularies
  - Benchmark - compare against a model without language, pretrain the visual unit and freeze
  - Transformers and attention, LSTMs, more complicated language generation
- Philosophically - is this the best way to generate language.
- Structuring experiment parameters more systematically.
- Dataset that is complicated enough to the point where it can't do that.
- Hexagon and star are added - can add
- Increase image resolution to 100 by 100.
  - Mediocre-strength Alec mode - three colors, five shapes, between one and five objects.
- Trying not Alec mode with very large sizes.
- Trying out OOD experiments.
- Add attention layer to language output

Future Task
- Relationships dataset, force development of language in which relationships are necessary.
- Look more into attention
- Use mediocre-strength Alec mode.

### Philosophical Interpretation of Language
{: .no_toc }

- Based on empirical performance, this is not necessary an invalid language generation method.
- Designing OOD experiments
- Increasing the number of colors
- Is variable length important? When working with fixed length, develops poor encodings. 

### Variable-Length Sequence
{: .no_toc }

- Offloads processing to the listener that we want to be instead integrated into the language.
- How to deal with this?

### VQ Problems
{: .no_toc }

- Variational Quantizer is problematic - sort of just does similarity search quantizer, concepts are embedded in the same space.
- Use discretization with softmax directly out of the language generation unit and directly convert to labels.
- Concrete distribution vs Straight-Through Estimator
  - Continuous and Discrete combination
  - Interpolate between a discrete and continuous distributions.
- Sample from softmax instead of taking argmax of softmax.
- 'Soft snap' vector quantization - probabilistically scale with distance squared

### Language Generation
{: .no_toc }
- Sampling a low-probability word, then choose the next word - overall probability is higher than greedy sampling policy
- Build beam-search style language searching within the network
- Biggest current generation issue - deterministic
- Softmax version - clearer/purer understanding. 
- Sampling is important - deterministic nature limits the model.

---


## Meeting with Han, 4/21/22
- The input is a language itself - find structures within the image, then build connections in the image.
- Desired properties: groundedness, compositionality, abstract representation.
- How do you measure learnedness?
- How does the model get the ability to distinguish beteen concepts.

Interpretability
- Eventually after some training, the model develops language. What kind of data makes the model capture the similarity/dissimilarity? 
- How does the model rely that it is similar - what signals is the model using?
- Accuracy and performance of a subset.
- Influence functions - take out something, measure how influential a method is. Take one single test image, then see which group of training data is most important to the image. Perform analysis over relevance.
- Map the importance of training samples to that of a test sample. Ignoring the sequences, we see which training samples are relevant.
- The language should first be in the model - check if it is in the vector-quantized component either.
- Ignore quantization to get a 'purer' representation to understand what is capable of being processed again. Debugging the visual unit.
- SHAP - application to language tokens.
- Data Shapley - Shapley methods on the data rather than necessarily the input. 
- Tracin method - tracing gradient descent explainability.

Variable-Length Architectures
- Stopping may be easier in a reinforcement learning context.
- External module controls which mode you want to get in.
- Generate long sequence and then prune from it.
- Minimum Description Length (MDL) - [Wikipedia](https://en.wikipedia.org/wiki/Minimum_description_length#MDL_in_machine_learning){:target="_blank"}.
- Generate a long sequence, then use a technique like MDL to compress it.
- When you compress it too much, you'll lose properties - but maybe you can converge to a balanced point. Obtain a naturally sized diagram.
- Figure out the high-level project. Show something, have a reachable goal. Research question, try to solve the research question.
- Set a solid research goal and work towards it.
- Variable-length itself can be a piece of analysis.
- Information and automatic encoding - conservative encoding of minimum information.

Data
- What are good tasks in which having a discrete latent space is better than a continuous explicit one?
- Machine translation - try to build an abstracted version of language that can control the generation and the instantiated language, an abstract latent representation of the languages.


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











