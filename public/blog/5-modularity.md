---
layout: post
title:  Modularity
date:   2016-10-01 13:30:00
strapline: You get these grand ideas and it all goes nonlinear from there.
---


### Modularity

Because of the layering of ITCSS, end users would have to import each layer of this into their own projects. It's not something where a single `main.scss` file can be imported. The layering order becomes critical with this.

However, that slight inconvenience would bring massive benefits - it makes things wonderfully modular. Say a user wanted to add additional styling to base elements, then they could add their own Sass file into there.

```scss
@import 'sonniesedgelibrary/base/img';
@import 'usersowncodeforbaseelements'
@import 'sonniesedgelibrary/base/headings';
```

It then gets interwoven with the ITCSS layers and doesn't trigger specificity problems (assuming they haven't nested anything). ITCSS handles this like everything else and makes source-order the decider of specificity.
