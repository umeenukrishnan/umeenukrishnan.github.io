---
layout: default
title: Blog
permalink: /blog/
description: "Notes on computational mechanics, research tools, FEniCS, topology optimization, and life in academia."
---

<div class="blog-page">
  <div class="container">
    <div class="page-hd reveal">
      <h1>Blog</h1>
      <p>Notes on computational mechanics, research tools, and life in academia.</p>
    </div>

    <div class="blog-list">
      {% for post in site.posts %}
      <article class="bl-item reveal">
        <div class="bl-date">{{ post.date | date: "%b %-d, %Y" }}</div>
        <div class="bl-info">
          <span class="cat">{{ post.categories | first | default: "misc" }}</span>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
          {% if post.excerpt %}
          <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</div>
