---
title: "Notes on GRPO by DL.AI"
date: 2025-05-22
layout: post
tags: log
published: True
author: "You know who"
---

## Pre-notes

[This course](https://learn.deeplearning.ai/courses/reinforcement-fine-tuning-llms-grpo/lesson/sjbja/introduction) explains Reinforcement Learning via the usage in LLMs. So I'll follow what is given in th ecourse if you want to learn more about it here are the resources. \[Resources are suggested by [Willccbb](https://x.com/willccbb/status/1906050540426993821)\]

[RL video series on YouTube - Easy](https://www.youtube.com/watch?v=NFo9v_yKQXA&list=PLzvYlJMoZ02Dxtwe-MmH4nOB5jYlMGBjr)

[Open AI Spinning up - Medium](https://spinningup.openai.com/en/latest/)

[RL Theory Book - Hard](https://rltheorybook.github.io/rltheorybook_AJKS.pdf)

Addition to the Will's suggestions here are the other resources:

[RL Book Sutton & Barto](https://www.andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf)

[HuggingFace's Deep RL course](https://huggingface.co/learn/deep-rl-course/unit0/introduction)

[HuggingFace's GRPO intro via LLMs](https://huggingface.co/learn/llm-course/chapter12/1?fw=pt)

[Unsloth has very useful notebooks on GRPO and how to implement them](https://unsloth.ai/blog)

[And finally Will's grpo_demo gist (I learned a lot from a single gist)](https://gist.github.com/willccbb/4676755236bb08cab5f4e54a0475d6fb)

# Fine-Tuning an LLM

After pre-trained an LLM it doesn't answers as we expected. It just predicts the next token. For example when you ask a question LLM could answer you with another question. In order to make LLM useful and answer our questions there is an another stage called "Fine-tuning". In this stage by showing examples to the LLM how to answer LLM will eventually learns how to answer the question.

There are several techniques to complete this step and one of the most known and being used one is called "Supervised fine-tuning". In this stage there are human labelers who provides the intended output to the LLM. Despite this method directly teaches model how to respond it requires large amounts of data which is quite costly. Besides that model may learn patterns which is to specific to the related domain.

One proposed solution to this is RLHF, which is introduced by OpenAI and DeepMind back in 2017. Objective of this approach is ranking answers given to the users by a reward model.

- First, the model generates several outputs for one prompt.
- Then, annotators is asked to rank these responses
- After that, these rankings given to a reward model. These reward model is trained with given (prompt, answer) pair and after trainign it learns how good a response is.
- And finally, LLM is being fine-tuned based on reward model's scores.

Here is the schema:

  <img src='/assets/GRPO.png' class='img-medium'>
