---
layout: blog.njk
title: Articles
metaDescription: A sample Blog page listing various posts.
date: 2017-01-01
pagination:
  data: collections.post
  size: 20
permalink: blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber
  }}{% endif %}/index.html
subtitle: A collection of technical blog posts and random thoughts
eleventyNavigation:
  key: Aktuelles
  order: 2
---
