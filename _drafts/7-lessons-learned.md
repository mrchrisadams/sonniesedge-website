---
layout: post
title:  Lessons learned
date:   2016-10-01 13:30:00
strapline: You get these grand ideas and it all goes nonlinear from there.
---


## Others sometimes do it better || Don't be afraid to steal
Don't ignore what others have already done. Bourbon is amazing learn from it. Bootstrap v4 has some amazing ideas (even if I don't agree with the way it's structured). $FLEXSASSLIBRARY is amazing and I just ended up dropping it into my project. It's better than anything that I could write. (wooo MIT license).
https://github.com/sass-mq/sass-mq is AMAZING.

## Be opinionated
Pick a style and stick to it. Be proud of your opinions. I was nervous as a monkey about using ITCSS, but it has proven itself over and over.

## Don't get too rigid
Allow yourself some room to maneuver. Don't paint yourself into a corner. The company version that I worked with ended up limiting itself in how it could be used.

## Figure your scope
I kept breaking out of my assigned aim of a Sass/CSS library. I don't want to start handling the JS side of things - that's for bootstrap and the like. This is an in-house CSS library generator.

## Don't over-engineer
It's possible to over engineer this to death. Inspired by something in Bourbon I started working on a mixin that allowed:

```scss
@mixin padding($args) {
  ...
  allow for processing of various combos of arguments.
  ...
  it goes on forever
  ...
  ...
  ...
}
```

when I could have just written:

```scss
padding: 1rem 0.5rem;
```

## Don't prematurely optimise

## Documentation is amazing

## Get a good name
