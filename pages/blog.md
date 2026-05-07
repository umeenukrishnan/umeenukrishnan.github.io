---
layout: default
title: Blog
permalink: /blog/
description: "Notes on computational mechanics, research tools, FEniCS, topology optimization, and life in academia."
---

<div class="page-grid">
  <aside class="sidebar">
    {% include sidebar-nav.html %}
  </aside>
  <div class="page-main">
    <section class="section-plain" id="blog">
      <div class="section-acc-header">
        <div class="sb-inner"><h2>Blog</h2></div>
      </div>
      <div class="section-body">
        <div class="post-list">
          {% for post in site.posts %}
          <div class="post-item">
            <div class="post-date">{{ post.date | date: "%b %Y" }}</div>
            <div class="post-info">
              <span class="post-cat">{{ post.categories | first | default: "misc" }}</span>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
              {% if post.excerpt %}
              <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
              {% endif %}
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </section>
  </div>
</div>
