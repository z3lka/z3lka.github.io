---
title: "Designing Data Intensive Applications"
layout: notes
tags: note
published: True
author: "not andrew ng"
---

# [Chapter 1](#chapter_1)

- Many applications need to:
  - Store the data **(database)**
  - Remember the results of an expensive operation **(cache)**
  - Allow userrs to search the data by keyword **(search index)**
  - Send a message to another process, to handle asynchronously **(stream processing)**
  - Periodically crunch a large amount of accumulated data **(batch processing)**

While these seem basic implementing it to an application that works smoothly needs configuration.
There are three main concerns that are crucial in most of software systems:

- Reliability: System should work correctly (performing the correct function at the desired level of performance) even in case of adversity (hardware/software faults, even human error).
- Scalability: As the systems grows (data, user traffic, etc. ) there should be a way to deal with the growth.
- Maintainabilty: As the application grown anyone can maintain it without causing an issue.

## Reliability

A software systems should be reliable with these expectations:

- The application performs the function as the user expected.
- It can tolerate the user's mistakes or using of the software in an unexpected way.
- The performance is good enough under the exepected load and data volume.
- The system prevents any unauthorized access and abuse.

In one sentence reliabiltiy is: "working correctly, even when things go wrong.".

Fault and failure aren't the same. _Fault_ is a component deviating from its spec, whereas _failure_ is the system stop providing the required service.

# Scalability

Load on a system can be described with a few numbers called _load parameters_. This depends on the system architecture it can be requests per second to a server, the number of simultaneously active users in a chat, hit rate on a cache, etc.

Here is a sample case scenario from Twitter [2012](http://www.infoq.com/presentations/Twitter-Timeline-Scalability):

- Post tweet: A user can post a tweet (4.6k req/sec on average, 12k req/sec at peak)
- Home Timeline: A user can view tweets posted by the people hey follow (300k req/sec).

But Twitter's problem wasn't tweet post ratio. It's due to fan-out[i] each user follows many people, each user is followed by many people.

Think like this:

- When a user requests new timeline first database look up all the people they follow, find all tweets for each of the users and merge them into a sorted timeline. The SQL query can look like this:

```sql
SELECT tweets.*, users.* FROM tweets
  JOIN users ON tweets.sender_id = users.id
  JOIN follows ON follows.followee_id = users.id
  WHERE follows.follower_id = current_user
```

```python
def calculate_attention(query, key, value):
    scores = torch.matmul(query, key.transpose(-2, -1))
    attention_weights = torch.softmax(scores, dim=-1)
    return torch.matmul(attention_weights, value)
```
