---
layout: post
title:  Utility classes vs Component classes
date:   2016-10-01 13:30:00
strapline: You get these grand ideas and it all goes nonlinear from there.
---


### Outputting the CSS
You see, I started thinking about how I wanted to write the final CSS, and I realised how contentious that issue is right now. The big split in the CSS world right now is probably between Component and Utility class structuring. It effectively breaks down to an argument between how many rules do you attach to each selector, and how many classes do you add to each HTML element?

In my previous employment PREVIOUS WORK I'd had to use these Utility Classes, and frankly I never enjoyed using them.

```html
<div class="h1 margin-bottom-large font-family-open-sans padding-small border-gray-thin">Content here</div>
```

I can _see_ the value in using these utility classes, I really can. But in practise it feels like a masochists way of coding. Dare I say it, but it's the kind of thing that appeals more to a developer than a designer. You end up with a mess of code that is unreadable to people of a more designery bent. I want to see what something _does_ - a single name that says "oh, this chunk of code here is a header". It violates the spirit

```html
<div class="header">Content here</div>
<!-- yes I know this is a terrible class name, on a semantically incorrect HTML element. I'm trying to prove a point here, okay? -->
```

Now, don't get me wrong, I've used utility classes a lot, and they're incredibly effective for scaffolding sites from nothing. You have a bunch of raw HTML, add a bunch of classes to it and, whoosh, you have a working site. However, I don't believe it's sustainable or scalable. I can't hand that kind code over to someone else and have them understand it immediately. Nor can I hand it to a less design-orientated developer and assume they'll be able to manage it. It puts design decisions at the HTML output level, and I don't believe we're yet at a point in our industry where that is workable.

But make up your own mind. There's [really good overview of this](http://davidtheclark.com/on-utility-classes/) by David Clark that you should take the time to read if this interests you.

However, I recognise that this is the big split in how people write CSS. Did I want to force my nascent framework to pick a side in this fight?

And that's when it hit me. I was ignoring the last point of my manifesto. I don't have to choose one or the other. I don't even have to compromise. I can simply let the end consumer take their own path. Because I write my code one way doesn't mean that I have to push that onto others. No, I can let them decide on how to output their CSS. What if I went down the Bourbon route and gave them a bunch of useful mixins to consume in their own code? What if I also gave them all these SRP utility classes and let them _choose_ whether to use them? The best of both worlds, perhaps.
