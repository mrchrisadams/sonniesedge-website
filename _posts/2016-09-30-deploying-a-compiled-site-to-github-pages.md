---
layout: post
title:  "Deploying a compiled site to a personal Github Pages account"
date:   2016-10-01 17:57:00
strapline: Personal Github Pages only allow either static sites or Jekyll as a source, not both.
---

Having recently switched to using [Github Pages]() to host this site I thought I'd quickly note down how I overcame some of the limitations of the Github Pages when it comes to using modern build processes.

Github Pages is a free [Jekyll] hosting service offered by Github. You can create a repository called WHATEVER.github.io and via a lot of internal magic a static website of the same name appears, built from the Jekyll project hosted there. It's Github taking over the build process step for you.

Difficulties arise when you hit some of the limits imposed by Github Pages on the way Jekyll can be used. For security reasons Github [doesn't allow most third-party gems to be run]() on Github Pages, nor does it allow any Gulp/Grunt/npm build scripts to be run on their servers. This is totally understandable - that kind of stuff would be a huge security nightmare.

The lack of third-party gems and build scripts means that a lot of modern [website build techniques]() are not available to people using Github Pages. For example, there is no way to get CSS auto-prefixing to work on there, as the [Autoprefixer gem] is not allowed, nor can you run [Autoprefixer via Postcss] on their server.

But there is another way. You can publish the compiled _static_ site to Github pages.

The trick is to host your automated, advanced, super-whizzy site source (I use Gulp, node-sass and Autoprefixer - take a look) on a separate repository from your WHATEVER.githubpages.io repository. You then use a script to build a static site from your source and publish that as a commit to your githubpages.io repository. You get the advantages of Jekyll as a static CMS, a modern build process from Gulp/Grunt and bypass the build limitations of Github Pages.

The easiest way to do this is with the `gulp-gh-pages` npm package. It allows you to specify a build directory where your compiled site is built to and a repository where the site should be pushed. It will then take this compiled site, clone it to another folder, and create a commit from everything in that folder, pushing it to Github.

This package can also be used on organisational and project Github pages, which allow a branch on the same repository to be used as a source for serving the site (I'm unsure why Github don't allow this on Personal sites). In that case you specify the same repo, but use a different branch (by default `gh-pages`) to serve your static site.

Check out the [source for this site](), compared to the compiled code in the [sonniesedge.github.io repository]() to see the difference and to note the build/deploy script used to produce one from the other.
