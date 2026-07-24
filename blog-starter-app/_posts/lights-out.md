---
title: "Light's Out: Horror using ML techniques"
excerpt: "Lights out is a small horror demo, using Q-Learning to make an enemy that really learns your patterns as you play, to make sure it knows your next move, perhaps even before you do."
coverImage: "/assets/blog/lights-out/title.webp"
date: "2025-05-21T05:35:07.322Z"
ogImage:
  url: "/assets/blog/lights-out/title.webp"
---
## What is Light's Out? 
Lights out is a single-player horror game I, on a team with two other people, developed for my Game Development Concentration. The player must venture out of their bunker to gather resources each night, while avoiding the hunting specter that roams the halls. Their flashlight serves as their most important tool, but also their biggest giveaway as once the specter sees it, its gonna be lights out for the player.

This game has its main antagonist use Q-learning to learn player patterns about how they move around the house, to make it so that they can really adapt and offer players who get to comfortable a scare when they are already there.

Lights Out was made entirely within in Unity, using Unity’s Blueprint language primarily. The main design motivation is modern horror games loosing their charm once you learn how the AI works, so we leveraged AI in order to make the AI much harder to understand just from playing the game itself, thus keeping the feeling of horror alive much longer.

## My Role in Light's Out

Within this project, I was the head developer of the AI for the main enemy, and little spiders that serve to keep the player moving.

The main enemy used Q-learning, specifically SARSA algorithm and an epsilon-greedy policy to learn. This allowed us to set the epsilon high in the first few nights so that the the AI has a chance to explore many options and not get stuck doing one thing. Then as the player successfully completes more nights, we tune the epsilon down so that they AI becomes much more of a hunting enemy that must be avoided. I used the number of items the player has returned, and what item the player is holding, if any, for the state of the AI, with its goal being to minimize distance between them and the player. The AI’s actions were the ability to choose what room to go to once they reached their previously selected room. This means the AI could learn the path players take when they have items and the order they like to get items, increasing drastically the ability for it to cut off the player and be ready for them when they show up.

Outside of that, the Specter is also able to see the players flashlight, which acts as the incentive to not use it. Initially we thought it would be enough just to have the setting being dark to encourage the player to use their light, however after talking with some people we learned that there are a good number of ways to get around just visual darkness, so we added spiders that crawl in the darkness. They begin to fester around the player if their light isn’t on, and should they be ignored, will eventually alert the specter. This gives players competing obligations, to keep the light off and stay relatively safe, or to turn it on and see better and not deal with spiders. This decision is a core part of the player experience in Lights Out!

This project has taught me not just how to implement an AI, but how to merge AI learning with other game mechanics in order to create a unique and engaging player experience.