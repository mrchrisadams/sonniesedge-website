---
layout: post
title:  Lessons learned from building my own CSS framework
date:   2016-10-01 13:30:00
strapline: You get these grand ideas and it all goes nonlinear from there.
---

So I thought it'd be a great idea to write my own CSS framework. This is the kind of thinking that occurs when you have had too much caffine.

I was hyped up from writing an in-house framework for my previous employer, which was used on several client projects, but which was relatively inflexible, written as it was for one usecase and for the employer's way of writing code.

"So," I thought to myself "what if I were to write something that could output any type of CSS code, in whatever way the user wanted to use it?"

Think large, and swing hard, you know?

## Setting the parameters

So what did I want from my new framework?

I couldn't start _too_ broad. I'm not aiming to write a bunch of mixins that can be used to produce code in whatever way you want to use it. I mean, multi-contributer, sponsored projects like [Bourbon](https://github.com/thoughtbot/bourbon/) are already out there and do things 1000x better than I could ever achieve by myself. No, I had to think about what _I'd_ like to see from a CSS framework, and go from there. That's the reason most open-source projects get started, no?

So I say down and came up with the following manifesto points:

- It should make things *easier* for a developer. Like, if I was to end up configuring this more than using it, it's pointless. If each time I use it I ended up overriding the settings that come by default, it's not fulfilling it's job.
- I didn't want to write a themed set of CSS. I'm not aiming to recreate Bootstrap here. I wanted a system that could be used to _produce_ something like Bootstrap.
- Following from the previous point, this should be aimed at professional frontenders. This isn't something to be be picked up and dropped into a project to make it look pretty via a sprinkling of standard classnames.
- I love design systems. I wanted something that tied in with that. I wanted to be able to write code that lends itself to pattern libraries and styleguides. You know, that whole idea of producing a mini-Bootstrap for each client, as Dave Rupert might say. So this framework needs some way of easily accessing design system settings, such as spacings, colour palettes and fonts.
- I wanted to be write CSS in the way that I want to write it. This doesn't just mean naming conventions, but the way that CSS classes are used. Which end of the Atomic vs Component spectrum do I want to swing to? Do I have to make that choice?
- Modularity, The problem with many CSS libraries is that they get imported all in one go and don't offer any selectivity. Things like bootstrap weigh 100s of kilobytes. I wanted a system that just allows you to import what you need and compile to only a few KBs.
- Enforce some best practice with regard to specificity. One of the few things I really don't like to see in CSS is overly-nested selectors and the emergence of specificity wars - it's the bane of most projects I've come into cold. Whatever system I came up with should avoid that.


## Finding the sweetspot

Now that I knew what I wanted to build, I had to decide on how I wanted to build it. Deciding how to build it immediately threw up other criteria to consider, the most important being "how opinionated do I want this to be?"


### Output CSS
You see, I started thinking about how I wanted to write the final CSS, and I realised how contentious that issue is right now. In my previous employment I'd had to use a loose variant of Atomic CSS that frankly I never enjoyed. I can _see_ the value in Atomic CSS, I really can. But in practise it feels like a masochists way of coding. It's the kind of thing that appeals more to a developer than a designer. And even if you use looser forms of it, adding lots of SRP utility classes to HTML elements, you end up with classitis, a mess of code that is unreadable to people like me. I want to see what something does - a single name that says "oh, this chunk of code here is a header", rather than an impenetratable list of classes like `h1 margin-bottom-large font-family-open-sans padding-small`. Now, don't get me wrong, I've used this technique, and it's increadibly effective for scaffolding sites from nothing. However, I don't believe it's sustainable in the long-term. I can't hand that code over to someone else and have them understand it. Nor can I hand it to a less design-orientated developer and assume they'll be able to manage it. It puts design decisions at the HTML output level, and I don't believe we're at a point in our industry where that is workable.

On the other hand, without structure there is only chaos. You need some structure in your code, otherwise you end up with a mess of randomly named variables and a confusing array of classes. Perhaps that works for a persons homepage, but in a team of people that kind of thing leads to technical debt and lost work. No, I needed to add _something_.

And that's when it hit me. I don't have to choose one or the other. I don't even have to compromise. I can simply let the end consumer take their own path. Because I write my code one way doesn't mean that I have to push that on others. No, I can let them decide on how to output their CSS. What if I went down the Bourbon route and gave them a bunch of useful mixins to consume in their own code? What if I also gave them all these utility classes ad let them _choose_ whether to use them? The best of both worlds, perhaps.


### Structure
But like I said earlier, there's no point in simply recreating Bourbon and it's mixins. No, I still needed to decide on how to structure my framework internally, in a way that's actually useful to others.

And this is where my previous experience and some previous talks attended came into use. Because I've been lucky enough to have seen ITCSS in action. I can't lie, I'm in love with the Inverted Triangle style of composing CSS code. It's one of those things that just _makes sense_. It also ties in so well with CSS pre-processing techniques. If you're not familiar with ITCSS, I can understand. It's one of those techniques that is for some reason shrouded in mystery. Harry Roberts, who I first heard talk about it, keeps it under wraps pretty heavily. But the technique he espouses is astoundingly simple. You arrange your code into layers, with the topmost layer getting imported first into your stylesheet and the others following in order. Each layer then gets more and more specific in scope. The top layer just deals with global Sass variables. The next one with mixins. Following that are things like reset stylesheets and then some incredibly light CSS that just touches HTML base elements, like `<p>` tags and `<h*>` headings. Following that are CSS objects, like those espoused in OOCSS - these are the Bourbon-like mixins I talked about. They are followed by visual components - the stuff that actually appears on a page, and finally by "trump cards", naughty pieces of CSS that override other chunks of code earlier in the stylesheet.

The amazing thing about it is the it actively controls CSS specificity. It enforces the notion of keeping specificity as a function of source order, and does not allow CSS [Specificity Wars](#) to develop.

It's a really nice organisational technique, and ever since I first used it commercially a few years ago I've never looked back. The problems that I once had with specificity in projects just evaporated and it made working on multi-developer projects a dream.

I eventually came up with a few extra layers than the ones espoused in BEM, but based upon previous experience, they're useful:

- Variables. All the global sass variables that I'd need.
- Mixins and functions. Useful helpers for the rest of the stack.
- Generic. Just dropping a normalize.css file into here seemed like it would suffice. I'd never used anything more here.
- Base element styling. Some light styling on things like `p` and `h1` tags, using some of the variables defined earlier.
- Layout. I saw this as being the grid system. I imagined that it would work separately from everything else. Bootstrap actually does really well with this and I took inspiration from it.
- Objects - OOCSS objects. Little chunks of common design patterns. I decided to make these available as both classes and mixins. This gives people the choice of incorporating these into components, adding them as classes that can then be skinned via additional component classes, or just not using them at all.
- Visual components. If you're writing component-based CSS, then these are your final product.
- Utilities. SRP classes that are pretty much single lines of CSS code. Things like `text-align: right` or `color: blue`. The most simple Atomic CSS possible. I saw these as complementing both object and component-based approaches to composing code. They're natural bedfellows of objects and can help complement components if the components do not have everything that they need.
- Trumps. I can't imagine that this layer would be used regularly. Perhaps if someone was using third-party code and needed to override something terrible that it did in there.


### Naming

As for naming the output CSS... Well, like I said earlier, I don't want to force that on a user of my framework. They should be able to output anything in the visual components layer. If they wanted atomic visual components so be it (and why not provide those optionally for the user, save them some time?) If they want to use mixins to build their visual components, then so be it.

I decided to provide optional classes for the object and utility layers. In the case of objects, they would simply be class implementations of mixins. For utilities, they'd be common single lines of CSS expressed as classes.

If people wanted to use these completely optional classes, then I decided to enforce some naming conventions here. It felt like a no-brainer to use BEM for this. I've used BEM a lot and, again, it's one of those techniques that just seems to make sense. Like ITCSS, it actually tries to avoid specificity wars by 



### Modularity



End users would have to import each layer of this into their own projects. It's not something where a single `main.scss` file can be imported. The layering order becomes critical with this.

However, that slight inconvenience brings massive benefits - it makes things wonderfully modular. Say a user wanted to add additional styling to base elements, then they could add their own Sass file into there.

```
@import 'sonniesedgelibrary/base/img';
@import 'sonniesedgelibrary/base/headings';
@import 'usersowncodeforbaseelements'
```


## Summary
-


## Ingredients


So I wanted ITCSS in there. But ITCSS tends to lend itself to an atomic approach to writing CSS, which I'm not sure I'm 100% a fan of. It also skips over how CSS Objects should be used with other layers. So I modified it slightly, which I'll go over later.

I also wanted BEM in there. If you're not familair with BEM then that is absolutely a technique that will make your life less painful. Again, it lends itself well to avoiding specificity wars, but it does this by enforcing an avoidence of nesting in Sass and multi-level selectors in CSS. In addition it makes obvious the relationship between code that you write and so I just love it.

But I know others aren't as sold on it as I am, so I decided not build BEM into the project, but not to enforce it. I like writing BEM, but others might not want it in their final CSS code.

In fact, finding the level of opinionation was hard. I guess you can't make something 100% unopionated - that's just giving someone a blank file to type into and saying "giddy up". But I also didn't want to force people to write CSS/Sass like I write it. I use a lot of naming conventions that are not used by everybody, a lot of them borrowed from that fusion of ICSS and BEM that I love. No, I wanted people to be able to output their CSS as they wanted, while still operating within a framework that by nature avoids the problems that keep reoccuring in CSS.

So I decided to enforce the layering but to make the BEM notation optional.

So lets look at the layers a bit more.

## Layer cake

ITCSS








## Lesson 1
Don't ignore what others have already done. Bourbon is amazing learn from it. Bootstrap v4 has some amazing ideas (even if I don't agree with the way it's structured). $FLEXSASSLIBRARY is amazing and I just ended up dropping it into my project. It's better than anything that I could write. (wooo MIT license).

## Be opinionated
Pick a style and stick to it. Be proud of your opinions. I was nervous as a monkey about using ITCSS, but it has proven itself over and over.

## Don't get too rigid
Allow yourself some room to maneuver. Don't paint yourself into a corner. The company version that I worked with ended up limiting itself in how it could be used.
