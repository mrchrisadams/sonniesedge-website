---
layout: page
title: Blog posts
permalink: /personal/
inverse: false
background: 5590370206_1ff1a7e7a9_o.jpg
---

<ul>
{% for post in site.categories.personal %}
<div class="post">
<h2 class="post__title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>    
<div class="post__summary"><p>{{post.strapline}}</p>
</div>
<div class="post__meta">{{ post.date | date: "%b %-d, %Y" }}</div>
</div>
{% endfor %}
</ul>


