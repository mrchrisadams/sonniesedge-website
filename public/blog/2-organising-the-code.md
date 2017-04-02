---
layout: post
title:  Organising the code
date:   2016-10-01 13:30:00
strapline: You get these grand ideas and it all goes nonlinear from there.
---



### Structure
But like I said earlier, there would be no point in simply recreating Bourbon and it's mixins. No, I still needed to decide on how to give some structure my framework, in a way that's actually useful.

I have strong opinions in this area, and this is where I'd want any potential framework to make it's opinionated stance.

I've used a few organisational methodologies over the years. SMACSS was probably the one that lasted the longest. But I was blown out of the water the first time I came across ITCSS.

It's one of those things that just _makes sense_. If you're not familiar with ITCSS, I can understand. It's a technique that is for some reason shrouded in mystery. Harry Roberts, who I first heard talk about it, keeps it under wraps pretty heavily, but the cat is out of the bag now and the technique he espouses is astoundingly simple.

![ITCSS triangle](https://cdn-images-1.medium.com/max/800/1*EAtAznpLat77jnBxOzVS6g.png)

You arrange your code into layers, with the topmost layer getting imported first into your stylesheet and the others following in order. Each layer then gets more and more specific in scope. So at the top are very broad global variables, moving down to styling of raw HTML elements, the introduction of classnames and finally emergency overrides that use the dreaded `!important` (the only place that `!important` is allowed). Each step down the triangle gets more and more specific, and increases CSS specificity.

Combined with a NO-NESTING rule and you have a system designed to snuff out specificity wars.  It enforces the notion of keeping *specificity as a function of source order*, and does not allow CSS [Specificity Wars](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html) to develop.

It's a really nice organisational technique, and ever since I first used it commercially a few years ago I've never looked back. The problems that I once had with specificity in projects just evaporated and it made working on multi-developer projects a dream.

There's a really nice overview about ITCSS by Roberts himself [over at SpeakerDeck](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) that I really recommend taking a look at if you're not familiar with it already.

I thought on it and came up with a few extra layers than the ones espoused in ITCSS. They're based on experience with other projects and I've found these additional layers incredibly useful:

- *Variables*. All the global sass variables that I'd need.
- *Mixins and functions*. Useful helpers for the rest of the stack.
- *Generic*. Just dropping a normalize.css file into here seemed like it would suffice. I'd never used anything more than that here.
- *Base element styling*. Maybe some light styling on things like `p` and `h1` tags, using some of the variables defined earlier.
- *Layout*. I see this as being the grid system. I imagined that it would work separately from everything else. Bootstrap actually does really well with this and I took inspiration from it. Classes are added to wrapper elements, never components themselves, to enforce a grid.
- *Objects* OOCSS objects. Little chunks of common design patterns. ITCSS is never clear about how these should actually be used (Roberts sometimes makes allusions to using them as complementary classes to components), but I decided to make these available as both classes and mixins. This gives people the choice of incorporating these directly into components, adding them as classes that can then be skinned via additional component classes, or just not using them at all.
- *Visual components*. If you're writing component-based CSS, then these are your final product.
- *Utilities*. SRP classes that are pretty much single lines of CSS code. Things like `text-align: right` or `color: blue`. The most simple Atomic CSS possible. I saw these as complementing both object and component-based approaches to composing code. They're natural bedfellows of objects and can help complement components if the components do not have everything that they need.
- *Trumps*. I can't imagine that this layer would be used regularly. Perhaps if someone was using third-party code and needed to override something terrible that it did in there.

So ITCSS sounds good and would potentially give people several ways of organising their CSS. If they wanted to write code using SRP utility classes, they could do so. If they wanted to write full components, no problem.

The extra-special sauce about this is that it allows you to output whatever you want in the Visual Components layer. Thinking about it, I could see how you could actually implement other methodologies, like [SMACSS](https://smacss.com/), via this system. The layers are either compatible with it, or another system can be emulated in the visual components layer.
