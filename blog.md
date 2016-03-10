---
layout: page
title: Blog
permalink: /blog/
inverse: false
menu: main
background: photo-1429305336325-b84ace7eba3b.jpg
---

<ul class="teaser-list">
  {% for post in site.posts %}
    <li class="teaser">
      <a class="teaser__link" href="{{ post.url | prepend: site.baseurl }}">
        <h2 class="teaser__title">{{ post.title }}</h2>    
        <p><span class="teaser_meta">{{ post.date | date: "%b %-d, %Y" }}</span> | <span class="teaser__summary">{{post.strapline}}</span></p>
      </a>
    </li>
  {% endfor %}
</ul>
