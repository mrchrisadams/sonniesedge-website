---
layout: post
title:  "Providing a fallback for critical-path CSS"
date:   2014-11-05 11:00:16
categories: css criticalpath
background: b3ed8fdf.jpg
strapline: tl;dr make sure you do it.
---

The method I recently talked about using, for <a href="/2014-10-27/critical-css.html">loading non-critical CSS asynchronously</a> via javascript, has one blindingly obvious fatal flaw: it fails when javascript is disabled.

<img src="/assets/posts/providing-a-fallback-for-criticalpath-css/shutup.gif">

Ahem. This is why you test things, kids...

But there's a simple way around it: provide a regular link to your CSS, but wrap it in a &lt;noscript&gt; tag.

So, in addition to the existing LoadCSS chunk:

{% highlight javascript %}

<script>
// Async CSS loader
  function loadCSS( href, before, media ){
    "use strict";
    var ss = window.document.createElement( "link" );
    var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
    ss.rel = "stylesheet";
    ss.href = href;
    ss.media = "only x";
    ref.parentNode.insertBefore( ss, ref );
    setTimeout( function(){
      ss.media = media || "all";
    } );
    return ss;
  }
  loadCSS( "/theme/dist/stylesheets/main.css" );
</script>
{% endhighlight %}

we just have to add:

{% highlight html %}

<noscript>
  <link rel="stylesheet" href="/theme/dist/stylesheets/main.css">
</noscript>

{% endhighlight %}

Now the criticalpath CSS is no longer reliant on javascript executing. Just as it should be.