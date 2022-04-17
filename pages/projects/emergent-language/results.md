---
layout: default
title: Results
parent: Emergent Language
grand_parent: Projects
nav_order: 2
has_children: false
permalink: /projects/emergent-lang/results
---

# Results
{: .no_toc }

Aggregated experiments and results
{: .fs-6 .fw-300 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Shape Scene Similarity

### Simple Shape Counting
All experiments use a language defined by `{seq_len=1, vocab_size=10}`; a dataset defined by `64x64x3` images, outline and rotation enabled, and `{min_shapes=1, max_shapes=10}`; and a model trained for 1000 batches of 256 samples with a DLSM architecture (see specifics at the end of the section).

**Variation 1: Single Shape Counting.** There is only one shape (square) and one color (red). Reaches 0.106625 BCE.

![image](https://user-images.githubusercontent.com/73039742/163699501-5e976ec9-e65c-47f4-b285-f0e94ecc0c13.png)

Each of the 10 tokens becomes reliably associated with a certain number of objects from 1 to 10.

![image](https://user-images.githubusercontent.com/73039742/163699559-3238aeef-f837-4aee-834b-d252f462b495.png)

![image](https://user-images.githubusercontent.com/73039742/163699562-92d1d60e-bd14-4a72-b9d8-730be57abe5d.png)

![image](https://user-images.githubusercontent.com/73039742/163699572-65cc4e9a-8bc3-4590-a1ad-92b9a678a243.png)

**Variation 2: Varied Shape Counting.** There are three shapes (circle, square, triangle) and one color (red). Reaches 0.267393 BCE.

![image](https://user-images.githubusercontent.com/73039742/163699588-53cbb985-8bc0-4690-aedb-ee8925106732.png)

Each of the 10 tokens becomes reliably associated with a certain number of objects from 1 to 10. As expected, there is some error for larger numbers of objects due to overlap.

![image](https://user-images.githubusercontent.com/73039742/163699599-714a5a13-4874-4f81-8b18-f8ee35426f46.png)

![image](https://user-images.githubusercontent.com/73039742/163699593-c614820c-fab1-426e-92c0-f1218151873d.png)

![image](https://user-images.githubusercontent.com/73039742/163699605-5015bdaf-7d22-476a-8e00-352334fe48ad.png)

**Variation 3: General Object Counting.** There are three shapes (circle, square, triangle) and three colors (red, green, blue). Reaches 0.340383 BCE.

![image](https://user-images.githubusercontent.com/73039742/163699621-cc3ff39d-e5b4-404d-9c3b-297e6587f21a.png)

Each of the 10 tokens becomes somewhat reliably associated with a certain number of objects from 1 to 10. There is more error in exact counting for large shape numbers as in Variation 2, but some of the counting is imperfect for smaller object counts, too.

![image](https://user-images.githubusercontent.com/73039742/163699652-35ee2b6f-d35c-4f2b-a234-41abc6cd5c29.png)


![image](https://user-images.githubusercontent.com/73039742/163699647-f42dd091-9823-4b50-b5fe-b3a7afba0af8.png)

![image](https://user-images.githubusercontent.com/73039742/163699657-e3a9ff51-7a31-4ae9-8463-5c91040fcd9a.png)




---
