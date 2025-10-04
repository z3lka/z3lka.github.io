---
title: "Notes on HuggingFace's 'Quantization Fundamentals'"
date: 2025-05-07
layout: post
tags: log
published: True
author: "Not Andrew Ng"
---

# What is "Quantization"?

As LLMs are getting better, they also become larger and larger and this makes harder to run them on consumer GPUs (not everyone has A100 cluster in their home). Most of the State of the art models nowadays changes around 30B (Qwen 2.5 32B) to 70B (Llama 3.1) (there are larger numbers but they can only be run on clusters e.g. you can't run Deepseek-R1 671B on any single GPU). There are several methods to overcome this problem:

- **Pruning**: Which removes layers those are not much important during model's decision.
- **Knowledge distillation**: Teaching a student model from a teacher model's outputs (Still costly)
- **Quantization**: Basically representing model's weights in a lower precision.
  Let's say the model's weights are stored as FP32 (which is default for most of the models) and each number allocates 4 bytes of memory and in total 36 bytes are allocated for a 3x3 matrix. In order to shrink this size we can convert them into INT8 which is 1 byte for each number and in total we have 9 bytes for a 3x3 matrix. But this comes with a cost "Quantization error"
  <img src='/assets/matrix.png' class='img-right img-medium'>
  ![imag](/assets/matrix.png)

# Linear Quantization
