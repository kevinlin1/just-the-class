---
layout: default
title: Experiments
parent: Emergent Language
grand_parent: Projects
nav_order: 3
has_children: false
permalink: /projects/emergent-lang/exp
---

# Experiments
{: .no_toc }

Aggregated experiments and results
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Autoencoding

### Vanilla Autoencoding

### VQ-AE-GAN

---

## Geometric Scene Similarity

### Simple Shape Counting
tl;dr: Perhaps somewhat unsurprisingly, the model learns to count via token-number association if we restrict its vocabulary to $$N$$ tokens and the number of objects on a screen $$\in [1, N]$$.

All experiments use a language defined by `{seq_len=1, vocab_size=10}`; a dataset defined by `64x64x3` images, outline and rotation enabled, and `{min_shapes=1, max_shapes=10}`; and a model trained for 1000 batches of 256 samples with a DLSM architecture (see specifics in the linked full results).

**Variation 1: Single Shape Counting.** There is only one shape (square) and one color (red). Reaches 0.106625 BCE. 
Each of the 10 tokens becomes reliably associated with a certain number of objects from 1 to 10.

<!-- ![image](https://user-images.githubusercontent.com/73039742/163699501-5e976ec9-e65c-47f4-b285-f0e94ecc0c13.png)

<center>
<img src="https://user-images.githubusercontent.com/73039742/163699559-3238aeef-f837-4aee-834b-d252f462b495.png" width="60%" />
</center>

<center>
<img src="https://user-images.githubusercontent.com/73039742/163699562-92d1d60e-bd14-4a72-b9d8-730be57abe5d.png" width="60%" />
</center>

<center>
<img src="https://user-images.githubusercontent.com/73039742/163699572-65cc4e9a-8bc3-4590-a1ad-92b9a678a243.png" width="60%" />
</center>
 -->
Full results [here](https://drive.google.com/file/d/1XNlA4-Zv61-IshDQd8-4NxNUQAyaLYH0/view?usp=sharing){:target="_blank"}.

**Variation 2: Varied Shape Counting.** There are three shapes (circle, square, triangle) and one color (red). Reaches 0.267393 BCE. Each of the 10 tokens becomes reliably associated with a certain number of objects from 1 to 10. As expected, there is some error for larger numbers of objects due to overlap.

<!-- ![image](https://user-images.githubusercontent.com/73039742/163699588-53cbb985-8bc0-4690-aedb-ee8925106732.png)

<center>
<img src="https://user-images.githubusercontent.com/73039742/163699599-714a5a13-4874-4f81-8b18-f8ee35426f46.png" width="60%" />
</center>

<center>
<img src="https://user-images.githubusercontent.com/73039742/163699593-c614820c-fab1-426e-92c0-f1218151873d.png" width="60%" />
</center>

<center>
<img src="https://user-images.githubusercontent.com/73039742/163699605-5015bdaf-7d22-476a-8e00-352334fe48ad.png" width="60%" />
</center> -->

Full results [here](https://drive.google.com/file/d/1XNlA4-Zv61-IshDQd8-4NxNUQAyaLYH0/view?usp=sharing){:target="_blank"}.

**Variation 3: General Object Counting.** There are three shapes (circle, square, triangle) and three colors (red, green, blue). Reaches 0.340383 BCE. Each of the 10 tokens becomes somewhat reliably associated with a certain number of objects from 1 to 10. There is more error in exact counting for large shape numbers as in Variation 2, but some of the counting is imperfect for smaller object counts, too.

<!-- ![image](https://user-images.githubusercontent.com/73039742/163699621-cc3ff39d-e5b4-404d-9c3b-297e6587f21a.png)

<center>
<img src="https://user-images.githubusercontent.com/73039742/163699652-35ee2b6f-d35c-4f2b-a234-41abc6cd5c29.png" width="60%" />
</center>

<center>
<img src="https://user-images.githubusercontent.com/73039742/163699647-f42dd091-9823-4b50-b5fe-b3a7afba0af8.png" width="60%" />
</center>

<center>
<img src="https://user-images.githubusercontent.com/73039742/163699657-e3a9ff51-7a31-4ae9-8463-5c91040fcd9a.png" width="60%" />
</center>
 -->

Full results [here](https://drive.google.com/file/d/1_-kw1U2-I7Zl-8IXZbxRspHFCWgfGgN_/view?usp=sharing){:target="_blank"}.

### Pushing the Limits of Language
What is the relationship between a combination of permitted {vocabulary size, sequence length} and the performance?

Preliminary findings:
- 4 tokens seems to be the minimum vocabulary size for decent performance (without varying length).
- Increasing sequence length can actually have deleterious effects
- The model generally performs well when the vocabulary size is large and the sequence length is small

### Progressive Language Expansion
Idea: begin with a very simple setup (e.g. just blue squares), then slowly introduce new attributes (e.g. blue squares, triangles, circles; then all combinations of {blue, red, blue} and {squares, triangles, circles}) and observe if language is retained and how it adapts to new environmental stimulus.

### Alec Mode

**Vanilla Alec Mode**

**Strong Alec Mode**

### Variable Length Sequences

### Out of Distribution Prediction
- The network seems to be capable of generating novel tokens.

### Complicating the Generation Unit
- Using LSTMs vastly outperforms GRUs. To use LSTMs, set the cell state to the generated image latent vector $$z$$ (output of the visual unit) and the initial hidden state to a random vector ('sampling' speech).
- Using Bidirectional LSTMs yields slightly better performance. Still need to test impact on quality of generated words.

### Complicating the Visual Unit
- Increasing the number of convolutional layers helps improve performance.
- Capsule network - too complicated and not worth it as it takes up all the task that the language is supposed to perform. Maybe a good benchmark though.

### Softmax-Argmax Quantizer
- Using the Softmax-Argmax sampler with a double-LSTM speaker and listener performs as well as using the VQ-VAE-style quantizer. There is a slightly larger number of unique generated sequences. Still need to test language quality.
- Softmax-argmax quantizer reaches godly performance on a 3-shape-type, 3-color, 3-objects Alec mode task.

### Random Sampler

### Gumbel-Softmax Sampler
Success!

### Sparsity Restraint on Visual Unit
Output must be somewhat sparse.

---
