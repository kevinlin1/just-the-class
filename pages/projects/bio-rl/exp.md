---
layout: default
title: Experiments
parent: Bio-RL
grand_parent: Projects
nav_order: 1
has_children: false
permalink: /projects/bio-rl/exp
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
## Cartpole Comparisons

### Vanilla Advantage Actor Critic (A2C)
<img width="527" alt="image" src="https://user-images.githubusercontent.com/35582442/168195194-614b66b1-33cc-44c9-9ff1-f4d974f428f3.png">
#### Activation Function Experiments
Testing combinations of {ELU, Sigmoid, LeakyReLU, ReLU, Tanh, Hardswish, Hardsigmoid, HardTanh and more} activation functions
on the Actor and Critic respectively.
#### Results
ELU/ReLU combo
Tanh ReLU combo
worked best. 
[Further details here](https://github.com/interactive-intelligence/actor-critic/tree/main/bio_rl/results)

### Spiked Learning Rate  
#### Justification  
It is a well observed phenomena in the brain that when a misprediction occurs, neuronal activity is relatively larger than if that same prediction had been accurate. As such, we sought to emulate similar behavior within the actor model by increasing the learning rate (mu) within the model under certain criteria. The criteria for possible testing include:  
- When the total model reward breaks a previously set threshold
- When the model loss across a certain number of episodes is steadily decreasing
  - May not work due to the training nature of actor critics… Rewarded not punished so increasing the learning rate on poor performance may drive poorer performance. Will investigate empirically
- When the model’s reward decreases
    - May not work due to the training nature of actor critics… Rewarded not punished so increasing the learning rate on poor performance may drive poorer performance. Will investigate empirically.  

#### Implementation
I decided to tackle the first spiking criteria through a simple implementation: When the reward for an episode breaks a threshold (set by the previous highest reward in an epoch), the learning rate is spiked (multiplied) by a constant set in the config file.  

The spiking constant was 5, and in this test I could not observe any largely significant difference between the two (Non spiked on left, spiking on right). The graphs were messy so perhaps that is an issue. May re-run tests with greater # of epochs. Will also experiment with a greater spiking value to elicit some kind of change. Can also check out other spiking criteria.

#### Results  
Inconclusive/Ineffective  
<img width="436" alt="image" src="https://user-images.githubusercontent.com/35582442/168195215-b933466d-29c3-4aad-84c0-3a093f6179fe.png">
<img width="436" alt="image" src="https://user-images.githubusercontent.com/35582442/168195222-d0650c47-b9a2-4d66-98c5-b511d2ba70e5.png">


### A2C with Memory Replay
#### Results
Converged after roughly 1100 episodes.
<img width="527" alt="image" src="https://user-images.githubusercontent.com/35582442/168195247-59e6e110-d3c9-4f5e-92bc-4144f7207804.png">
<img width="527" alt="image" src="https://user-images.githubusercontent.com/35582442/168195281-b31feb21-75f5-4253-9647-a0b3c299ab63.png">


### Proximal Policy Optimization (PPO)

#### Results
Converged after roughly 600 episodes.
<img width="527" alt="image" src="https://user-images.githubusercontent.com/35582442/168195295-88a53f6a-e63b-441f-a7f9-42004d788700.png">
<img width="527" alt="image" src="https://user-images.githubusercontent.com/35582442/168195300-893adc4b-411e-4494-a226-ef530eb14be0.png">


---

## Other Environments

### Mujoco

---
