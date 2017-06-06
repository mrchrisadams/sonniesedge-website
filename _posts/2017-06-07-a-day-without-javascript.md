---
layout: post
title:  "A day without Javascript"
date:   2017-06-02 12:00:00
strapline: What could go wrong?
---

It's raining outside, and I don't want to go and watch the Germans having their [annual diversity parade](http://www.karneval-berlin.de/en/). I've therefore decided to turn off javascript in my browser and to see what sites work and what sites don't. I know, I know, my life is exciting.

Now, I know people assume I hate javascript. This would an incorrect assumption. I simply hate people relying on brittle client-side javascript when there are other alternatives. Like how I hate cities that _rely_ on you having a car when there are more basic alternatives, or economic systems that rely on you working continuously until you die, simply so you can have a roof over your head.

So, for my dreary grey day experiment I have restricted myself to just the things open in my browser tabs. For normal people this might be two or three sites. Not for me. I have approximately 17 shitmillion tabs open, because I Have a Problem With Tabs.

No seriously. I can never just close a tab. I've tried things like One Tab but I just can't get down to less than 30 in any one window ("I'll just save that tab for later" I think, each and ever time).

Anyway, to easily disable javascript I used [Toggle javascript](https://chrome.google.com/webstore/detail/toggle-javascript/cidlcjdalomndpeagkjpnefhljffbnlo) - available, ironically enough, via the javascript-only Chrome web store. 

## First impressions

So how was it? Well, with just a few minutes of sans-javascript life under my belt, my first impressions are Holy shit, things are _fast_ without javascript. There's no ads. There's no video loading at random times. There's no sudden interrupts by "DO YOU WANT TO FUCKING SUBSCRIBE?" modals.

If this were the only manifestation of turning off javascript, I'd do this for the rest of time. However, a lot of things don't work. Navigation is the most common failure mode. Hamburger menus generally fail to internally link to a nav section (come on, that's an easy one kids). So many forms die when javascript is taken away.

## The sites

Okay, I think I've got a pretty representative list of sites in my open tabs (perhaps due to my aforementioned Tab Problem). Holla at me on Twitter if you feel I missed anything particulary important.

### Feedly
![](/images/posts/a-day-without-javascript/feedly.png)

Nothing but a blank white page. Fuck you feedly. Wait no, feedly, I'm sorry. I didn't mean that. It was the sugar and coffee talking. Can we make up? I like using you to keep up with blog posts.

*Verdict:* Relationship counselling.

### Twitter
![](/images/posts/a-day-without-javascript/twitter.png)

Shows the normal website (with full content) for a braid moment, then redirects to mobile.twitter.com. Really fucking frustrating, as the full site would still be great to load, and have working in the same way as the mobile site. (twitter sets a  query parameter to the URL "?max_id=871333359884148737" that dictates with is the latest tweet in your timeline to show. )

*Verdict:* Could try harder

### Google Chrome
![](/images/posts/a-day-without-javascript/chrome_download.png)
The Google Chrome download page just fails completely, with no notice, only a blank white page.

*Verdict:* No Chrome for you, you dirty javascriptophobe!

### Youtube
![](/images/posts/a-day-without-javascript/youtube.png)
Youtube really really wants to load. Really, reallllllly, wants to. But then it fucks things up at the last nanosecond and shows no video, no preview icons, and no comments (that last one is perhaps a big positive). Even if the site is doing some funky blob loading of media, it wouldn't be hard to put a basic version on the page initially (with preload-"none"), and then have it upgrade when JS kicks in.

*Verdict:* Can't watch My Drunk Kitchen or Superwoman. :( :( :(

### 24 ways
![](/images/posts/a-day-without-javascript/24ways.png)
I've had this open in my tabs for the last 6 months, meaning to read it. Look, I'M SORRY, okay? But holy fuck, this site works great without javascript. All the animations are there (because they're CSS) and the slide in navigation works (because it just does an anchor link to the static version of the menu at the bottom of the page).

*Verdict:* Class act. Smoooooth.

### Netflix
![](/images/posts/a-day-without-javascript/netflix.png)
I'm using netflix to try and indoctrinate my girlfriend into watching Star Trek. So far she's not convinced, mainly because "Tasha _slept with Mr Data?_ But it'd be like fucking your microwave". Anyway, Netflix doesn't work. Well, it loads the header, if you want to count that. I get why they don't do things with HTML5 - DRMing yo shit needs javascript.

*Verdict:* JavaScript-only is the New Black

### NYtimes
![](/images/posts/a-day-without-javascript/nytimes_with_js.png)

![](/images/posts/a-day-without-javascript/nytimes_sans_js.png)
Not sure why this was in my tab list, but tbh I've found rotting tabs from 2015 in there, so I'm not surprised. The NYtimes site loads in _561ms_ and 957kb without javascript. Holy crap, that's what it should be like normally. For reference it took 12000ms (12seconds) and 4000kb (4mb) to load with javascript. A lot of images are lazy loaded, and so don't work, getting replaced with funky loading icons. But hey ho.

*Verdict:* Failing... to _not_ work. Sad!

### BBC News
It's the day after the latest London terrorism attacks, and so I've got this open, just to see how the media intensifies and aids every terrorist action. The BBC is the inventor and poster-child for progressive enhancement via Cutting the Mustard, and it doesn't disappoint. The non-CTM site works fully and while it doesn't _look_ the same as the full desktop site (it's mobile-first and so is pretty much the mobile version), it still _works_.

*Verdict:* Colmans mustard

### Google search
![](/images/posts/a-day-without-javascript/google.png)
Without JS, Google search still does what it's best at: searching. Okay, there's no autocomplete, the layout reverts to  the early 2000s again, and image search is shockingly bad looking. But, again, you can still perform your core tasks.

*Verdict:*

### Wikipedia
![](/images/posts/a-day-without-javascript/wikipedia.png)
Like a solid friend, wikipedia never disappoints. The site is indistinguishable from the JS version. Keep being beautiful, wikipedia.

*Verdict:*


### Amazon
![](/images/posts/a-day-without-javascript/amazon.png)
The site looks a little... _funky_ without JS (all the accordions vomit their content over the page when JS isn't there to keep them under control). But the entire site works! You can still search, you still get recommendations. You can still add items to your basket, and you can still proceed to the checkout.

*Verdict:*

## Overall verdict

