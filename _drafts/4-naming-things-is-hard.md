---
layout: post
title:  Naming things is hard
date:   2016-10-01 13:30:00
strapline: You get these grand ideas and it all goes nonlinear from there.
---


### Naming

As for naming the output CSS... Well, like I said earlier, I didn't want to force that on a user of the hypothetical framework. They should be able to output anything they want in the visual components layer. If they wanted to write atomic visual components so be it. If they want to use complex visual components, then let them do so. Shit, let them output JSON if they want - I shouldn't care.

I decided to provide optional classes for the object and utility layers. In the case of objects, they would simply be class implementations of OOCSS mixins. For utilities, they'd be common single lines of CSS expressed as classes. I can't see a reason to implement these as mixins - they're just too simple.

I decided I would want to enforce some naming conventions for these. (I can't see an easy way of keeping naming unopinionated without descending into the mess of using Sass variables to output classnames). So here I've gone with BEM.

Like ITCSS, I've got strong feelings about BEM (Block Element Modifier), and feel at a loss when I don't get to use it. It's another one of those techniques that just seems to _make sense_. Like ITCSS, it actively tries to avoid specificity wars by avoiding nesting. Instead, nesting and hierarchy is expressed in name only.
