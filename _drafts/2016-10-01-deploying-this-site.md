---
layout: post
title:  "How this site is built onto Github Pages"
date:   2016-10-01 17:57:00
strapline: Ticket severity seems to be orientated towards backend projects.
---

I use Github Pages to host this site. I've recently started updating it, in preperation for some new projects and I thought I'd quickly note down how this site is built.

Github Pages is a free Jekyll hosting service offered by Github. You can create a repository called WHATEVER.github.io and by a lot of internal magic the a website of the same name appears, built from the Jekyll project hosted there.

Difficulties arise when you hit some of the limits imposed by Github Pages on the way Jekyll can be used. For security reasons Github doesn't allow most third-party gems to be run on Github Pages, nor does it allow any Gulp/Grunt/npm build scripts to be run on their servers. This is totally understandable - that kind of stuff is a massive security hole if they aren't careful.

The lack of third-party gems and build scripts means that a lot of advanced website build techniques are not available to people using Github Pages. For example, there is no way to get Auto-Prefixing to work on there, as the relevant Gems are not allowed, nor can you run Autoprefixer via Postcss on the server.

But there is another way. You can publish a _static_ site to Github pages.

The trick is to host your automated, advanced, super-whizzy site source (I use Gulp, node-sass and Autoprefixer) on a separate repository from your githubpages.io repository. You then use a script to build a static site from your source and publish that as a commit to your githubpages.io repository.

The easiest way to do this is with the `gulp-gh-pages` npm package. You just 
