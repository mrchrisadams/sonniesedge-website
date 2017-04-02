---
layout: post
title:  Building it
date:   2016-10-01 13:30:00
strapline: You get these grand ideas and it all goes nonlinear from there.
---



## Anticipating building

I've built a more primitave CSS framework at a previous job, and I've learned a lot of lessons from doing that.

Language? It's Sass, no argument. As a preprocessor, Sass won over LESS, and has reigned supreme for the last few years. There are pretenders to the throne, like Stylus, but nothing has the cross-environment support like Sass. Pure CSS is a possibility, but variables are still not very well supported and a build process would still be needed to combine the various layers into one file.

variables vs maps. I've used variables a lot, and they're great if you're talking about a single concept. But as soon as you get near collections of concepts (collections of colours or fonts) they become unweildy. Sass maps are the way to go for these things.

Enforcing a design system. A design system should be enforced by the variables used. That means that global settings like spacing units, colours and fonts need to be specified in variables that can then be accessed by lower layers in the ITCSS stack. Syntactic sugar functions and mixins will be needed to access these variables.

Javascript. Do I want to include Javascript in this project? If I'm aiming to save time, then common concepts such as mobile menus and off-screen navigation should be included, no? But isn't this the job of the developer? I'm not aiming to do their work for them - people could use Bootstrap for that. I'm aiming to produce a simple CSS/Sass library generator here, not a fully-fledged CSS framework that does _everything_.

Testing. Would visual regression tests be run on this? I'm not too sure. There would be no components output by default - that's something for the end consumer. Is it worth testing objects? Based on previous experience, testing object classes and components gets messy very quickly, and adds very little value.
