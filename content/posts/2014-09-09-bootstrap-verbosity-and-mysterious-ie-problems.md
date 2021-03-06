---
categories:
- webtech
date: 2014-09-09 11:00:16
slug: bootstrap-verbosity-and-mysterious-ie-problems
strapline: Bootstrap? Verbose? Pull the other one. It has bells on it.
tags:
- web
title: Bootstrap verbosity and mysterious IE problems
---

<p>Nobody can deny it. <a href="http://getbootstrap.com/">Bootstrap</a> is bloated. There's a good reason for that - it's the jack-of-all-trades, the swiss army knife, the (not so) little framework that could. If you want it to do something, then it probably can.</p>

<p>The downside of this is that sometimes you experience mysterious problems...</p>

<h2>The problem</h2>

<p>When we got reports from our QA testers of various form elements randomly missing a border, padding or margins I wasn't too fussed. Maybe a junior had comitted bad code, or the caches on our servers were playing up.</p>

<p>However, my heart sank when I heard "it only happens in IE".</p>

<p>The five worst words that a web developer can hear.</p>

<p>I reluctantly fired up an IE VM, stared at the limited IE devtools and saw that the selectors and rules that <em>should</em> be there, just weren't there.</p>

<p>Odd.</p>

<p>So I checked the CSS files directly to make sure the rules were there.</p>

<p>They were.</p>

<p>Okay. Check that the CSS file I've just checked was actually being loaded.</p>

<p>Yup, it was.</p>

<p>This is the kind of scenario that can make you reach for the gin or a shotgun.</p>

<p>It was only when I realised that the rules that were being ignored all resided at the end of the stylesheet that I realised that I wasn't being gaslit by IE.</p>

<p>I was in fact a victim of the mysterious 4096 selector limit rule in IE10 and below: In any one stylesheet IE will only parse the first 4096 selectors before giving up and, this is important, <em>silently</em> failing.</p>

<p>As always IE, you are so helpful.</p>

<h2>But WHY?</h2>

<p>But why was it happening? For that I turned to <a href="https://www.npmjs.org/package/grunt-stylestats">grunt-stylestats</a> and <a href="https://github.com/katiefenn">Katie Fenn's</a> <a href="https://github.com/katiefenn/parker">Parker</a>, both of which will run through your CSS and gather stats as they go. The key one we needed here is selectors.</p>

<p>Turns out that this isn't <em>entirely</em> Bootstrap's fault. I was being a bit too zealous in my attempts to get all Sass generated by the frontend devs into one CSS file. In particular, I was compiling in the Sass for <a href="http://fontawesome.io/">Font Awesome</a> into our main stylesheet, which was what was taking us over the edge in selector count.</p>

<h2>Nuke it from orbit</h2>

<p>So how do we get around that? I initially turned to a system called Bless, which will parse your CSS and split it at 4096 selectors, @importing the extra selectors automatically. There was even a nice Grunt plugin for it. It runs at build-time and does what it needs to do quickly and intelligently.</p>

<p>However, a week after doing that I slapped myself, as the more obious answer was to just take the bulky code - Font Awesome - out of our main stylesheet and move it to its own. Whoop, selector count instantly drops by over a thousand. It's still a blocking CSS resource (a constant problem on that particular site), but at least we get pages rendering consistently in IE.</p>

<p>So, Bootstrap is off the hook here. But only just. Looking at the standard distributed bootstrap.css file with style-stats reveals that there are 2290 selectors in there. That's still 1806 off the IE limit, but it's still ENORMOUS.</p>