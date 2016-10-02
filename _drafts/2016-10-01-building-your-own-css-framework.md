---
layout: post
title:  Lessons learned from building my own CSS framework
date:   2016-10-01 13:30:00
strapline: You get these grand ideas and it all goes nonlinear from there.
---

So I thought it'd be a great idea to write my own CSS framework.

I was hyped up from writing an in-house one for my previous employer, which was used on several client projects, but which was relatively inflexible as it was written for one usecase and one way of writing code.

I wanted to write one that could be used by any developer to output any type of CSS code, whether you wrote freeform, used BEM, SUIT or enhanced CSS.

Think large and swing hard, you know?

I couldn't start _too_ broad, though. I mean, multi-contributer, sponsored projects like [Bourbon]() are already out there and do things 1000x better than I could ever achieve by myself. No, I had to think about what _I'd_ like to see from a CSS framework, and go from there. Hey, that's the reason most open-source projects get started, no?

## Setting the parameters

So what did I want?

- It should make things *easier* for a developer.
- I didn't want to write a themed set of CSS. I'm not aiming to recreate Bootstrap here. I wanted a system that could be used to _produce_ Bootstrap.
- I love design systems. I wanted something that tied in with that. I wanted to be able to write code that lends itself to pattern libraries and styleguides. Producing a mini-bootstrap as Dave Rupert might say. So this framework needs some way of easily accessing design system settings, such as spacings, colour palettes and fonts.
- I wanted to be write CSS in the way that I want to write it. This doesn't just mean naming conventions, but the way that CSS classes are used. Which end of the Atomic vs Component spectrum do I want to swing to?
- Modularity, The problem with many css libraries is that they get imported all in one go and don't offer any selectivity. Things like bootstrap weight 100s of kilobytes. I wanted a system that just allows you to import what you need and compile to only a few KBs.
- This should be aimed at professional frontenders. This isn't something to be be picked up and dropped into a project. This is to be worked with.

## Ingredients
Well, I can't lie, I'm in love with the Inverted Triangle style of composing CSS code. It's one of those things that just _makes sense_. It also ties in so well with CSS pre-processing techniques. If you're not familiar with ITCSS, I can understand. It's one of those techniques that is for some reason shrouded in mystery. Harry Roberts, who I first heard talk about it, keeps it under wraps pretty heavily. But the technique he espouses is astoundingly simple. You arrange your code into layers, with the topmost layer getting imported first into your stylesheet and the others following in order. Each layer then gets more and more specific in scope. The top layer just deals with global Sass variables. The next one with mixins. Following that are things like reset stylesheets and then some incredibly light CSS that just touches HTML base elements, like `<p>` tags and `<h*>` headings. Following that are CSS objects, like those espoused in OOCSS. These are followed by visual components, and finally by "trump cards", naughty pieces of CSS that override other chunks of code earlier in the stylesheet.

The amazing thing about it is the it controls CSS specificity. It enforces the notion of keeping specificity as a function of source order, and does not allow CSS Specificity Wars to develop.

It's a really nice organisational technique, and ever since I've used commercially I've never looked back. The problems that I once had with specificity in projects just evaporated and it made working on multi-developer projects a dream.

So I wanted ITCSS in there. But ITCSS tends to lend itself to an atomic approach to writing CSS, which I'm not sure I'm 100% a fan of. It also skips over how CSS Objects should be used with other layers. So I modified it slightly, which I'll go over later.

I also wanted BEM in there. If you're not familair with BEM then that is absolutely a technique that will make your life less painful. Again, it lends itself well to avoiding specificity wars, but it does this by enforcing an avoidence of nesting in Sass and multi-level selectors in CSS. In addition it makes obvious the relationship between code that you write and so I just love it.

But I know others aren't as sold on it as I am, so I decided not build BEM into the project, but not to enforce it. I like writing BEM, but others might not want it in their final CSS code.

In fact, finding the level of opinionation was hard. I guess you can't make something 100% unopionated - that's just giving someone a blank file to type into and saying "giddy up". But I also didn't want to force people to write CSS/Sass like I write it. I use a lot of naming conventions that are not used by everybody, a lot of them borrowed from that fusion of ICSS and BEM that I love. No, I wanted people to be able to output their CSS as they wanted, while still operating within a framework that by nature avoids the problems that keep reoccuring in CSS.

So I decided to enforce the layering but to make the BEM notation optional.

So lets look at the layers a bit more.

## Layer cake

ITCSS
