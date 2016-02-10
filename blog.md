---
layout: page
title: Blog posts
permalink: /blog/
inverse: false
background: photo-1429305336325-b84ace7eba3b.jpg
---

<ul>
{% for post in site.posts %}
<div class="post">
<h2 class="post__title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>    
<div class="post__summary"><p>{{post.strapline}}</p>
</div>
<div class="post__meta">{{ post.date | date: "%b %-d, %Y" }}</div>
</div>
{% endfor %}
</ul>




