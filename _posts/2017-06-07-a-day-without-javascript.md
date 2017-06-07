---
layout: post
title:  "A day without Javascript"
date:   2017-06-02 12:00:00
strapline: What could go wrong?
---

As I write this it's raining outside, and I'm trying to avoid having to go out into the murk and watch the Germans conduct their annual [diversity maneuvers](http://www.karneval-berlin.de/en/). I've therefore decided to do the one thing that counts as a religious crime in tech land: I'm going to turn off javascript in my browser and to see what sites work and what sites don't. 

I know, I know, my life is simply too exciting.

Now, I know that because I write a lot about the universal web and progressive enhancement, people assume that I must hate javascript. 

This would an incorrect assumption. 

I simply hate people relying on brittle client-side javascript when there are other alternatives. In the same way as I  wouldn't rely on some unknown minicab firm as as the sole way of getting me to the airport for a wedding flight, I wouldn't rely on a non-guaranteed technology as the sole way of delivering a web app.

Hey, I'm a fan of elegance and simplicity over needless complexity.

## Too many tabs
So, for my dreary grey day experiment I have restricted myself to just the things open in my browser tabs. For normal people this might be two or three sites. 

Not for me. I have approximately 17 shitmillion tabs open, because I Have a Problem With Tabs.

No seriously. I can never just close a tab. I've tried things like One Tab but I just can't get down to less than 30 in any one window ("I'll just save that tab for later" I think, each and ever time). Let's just agree that I need some kind of therapy, and we'll all be fine. 

Anyway, there's nothing fancy to this. It was a case of turning off javascript in the browser and reloading a site, nothing more. To easily disable the browser's JS with one click I used Chrome and thee [Toggle Javascript](https://chrome.google.com/webstore/detail/toggle-javascript/cidlcjdalomndpeagkjpnefhljffbnlo) extension - available, ironically enough, via the javascript-only Chrome web store. 

Oh, and I opened these tabs in new windows, so you don't have to see the pain of 50 tabs open at once.

## First impressions

So how was it? Well, with just a few minutes of sans-javascript life under my belt, my first impressions were Holy shit, things are _fast_ without javascript. There's no ads. There's no video loading at random times. There's no sudden interrupts by "DO YOU WANT TO FUCKING SUBSCRIBE?" modals.

If this were the only manifestation of turning off javascript, I'd do this for the rest of time. However, a lot of things don't work. Navigation is the most common failure mode. Hamburger menus generally fail to internally link to a nav section (come on, that's an easy one kids). So many forms die when javascript is taken away (point the form to an endpoint that accepts GET/POST queries ffs). Above the fold _images_ fail to load (you know they're streaming by default, yes?).

## The sites

Let's get to it. I think I've got a pretty representative list of sites in my open tabs (perhaps due to the aforementioned Tab Problem). Howl at me on Twitter if you feel I missed anything particulary important.

### Feedly
![](/images/posts/a-day-without-javascript/feedly.png)

Nothing but a blank white page. Fuck you feedly. Wait no, feedly, I'm sorry. I didn't mean that. It was the coffee talking. Can we make up? I like using you to keep up with blog posts.

But why do you work like this, Feedly? The devs _could_ offer this site in basic HTML (and use advanced features such as, er, anchor links, to move to other articles), and then load in new content with JS when it's available. There would be something when JS fails.

*Verdict:* Relationship counselling.

### Twitter
![](/images/posts/a-day-without-javascript/twitter.png)

Twitter shows the normal website (with full content) for a brief moment, then redirects to mobile.twitter.com (the old one, not the spanky new React one, of course). This is really fucking frustrating, as the full site would still be great to load, without javsacript. It could use the same navigation method as as the mobile site. (twitter sets a  query parameter to the URL "?max_id=871333359884148737" that dictates with is the latest tweet in your timeline to show. )

*Verdict:* Could try harder.

### Google Chrome
![](/images/posts/a-day-without-javascript/chrome_download.png)
The Google Chrome download page just fails completely, with no notice, only a blank white page.

_Sigh_.

*Verdict:* No Chrome for you, you dirty javascriptophobe!

### Youtube
![](/images/posts/a-day-without-javascript/youtube.png)
Youtube really really wants to load. Really, reallllllly, wants to. But then it fucks things up at the last nanosecond and farts out, showing no video, no preview icons, and no comments (that last one is perhaps a positive). 

Even if the site is doing some funky blob loading of video media, it wouldn't be hard to put a basic version on the page initially (with `preload="none"`), and then have it upgrade when JS kicks in.

*Verdict:* Can't watch My Drunk Kitchen or Superwoman. :( :( :(

### 24 ways
![](/images/posts/a-day-without-javascript/24ways.png)
I've had this open in my tabs for the last 6 months, meaning to read it. Look, I'M SORRY, okay? But holy fuck, this site works great without javascript. All the animations are there (because they're CSS) and the slide in navigation works (because it internally links to the static version of the menu at the bottom of the page).

*Verdict:* Class act. Smoooooth. Jazzz.

### Netflix
![](/images/posts/a-day-without-javascript/netflix.png)
I'm using netflix to try and indoctrinate my girlfriend into watching Star Trek. So far she's not convinced, mainly because "Tasha _slept with Mr Data?_ But it'd be like fucking your microwave". 

Anyway, Netflix doesn't work. Well, it loads the header, if you want to count that. I get why they don't do things with HTML5 - DRMing all yo shit needs javascript. But still :(.

*Verdict:* JavaScript-only is the New Black

### NYtimes
![](/images/posts/a-day-without-javascript/nytimes_with_js.png)

![](/images/posts/a-day-without-javascript/nytimes_sans_js.png)
Not sure why this was in my tab list, but tbh I've found rotting tabs from 2015 in there, so I'm not surprised. 

The NYtimes site loads in _561ms_ and 957kb without javascript. Holy crap, that's what it should be like normally. For reference it took 12000ms (12seconds) and 4000kb (4mb) to load _with_ javascript. Oh, and as a bonus, you get a screenful of adverts. 

A lot of images are lazy loaded, and so don't work, getting replaced with funky loading icons. But hey ho, I can still read the stories.

*Verdict:* Failing... to _not_ work. Sad!

### BBC News
It's the day after the latest London terrorism attacks, and so I've got this open, just to see how the media intensifies and aids every terrorist action. The BBC is the inventor and poster-child for progressive enhancement via Cutting the Mustard, and it doesn't disappoint. The non-CTM site works fully and while it doesn't _look_ the same as the full desktop site (it's mobile-first and so is pretty much the mobile version), it still _works_.

*Verdict:* Colmans mustard

### Google search
![](/images/posts/a-day-without-javascript/google.png)
Without JS, Google search still does what it's best at: searching. 

Okay, there's no autocomplete, the layout reverts to  the early 2000s again, and image search is shockingly bad looking. But, in the best progressive enhancement manner, you can still perform your core tasks.

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

