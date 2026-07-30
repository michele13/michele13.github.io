+++
title = "I've added tags and categories to the website"
date = 2026-07-30
description = """
I've added tags and categories to the website thanks to taxonomies
"""
[taxonomies]
categories = ["zola"]
tags = ["zola"]
+++


Yesterday I thought about adding categories and tags to my blog so that I can write small technical blog posts on this website and sort them by topic. 

To make things more organized every post will have many tags but *only one* category.

To achieve this we will use the feature called [taxonomy](#). Let's begin the setup.

## Step 1 - Edit `config.toml`

Edit `config.toml` with a text editor and add the following text before the first `[section]`:

```toml
taxonomies = [
 { name = "categories", feed = true },
 { name = "tags", feed = true }
]
```
If you already have other taxonomies, just add the lines that contain the curly brackets, but don't forget to add the comma to the second line!

Now, add the links for **Tags** and **Categories** to the `menu_items` section

```toml
// ...
[extra]
menu_items = [
// ...
{ path = "./tags/", name = "Tags" },
{ path = "./categories/", name = "Categories" },
// ...
]
```

## Step 2 - Add tags and categories to an article

Open an article or blog post and add the **categories** and **tags** in the **taxonomies section** at the end of the front matter:

```toml
[taxonomies]
categories = ["zola"]
tags = ["zola"]
```

Now it looks like this:

```toml
+++
title = "I've added tags and categories to the website"
date = 2026-07-30
description = """
I've added tags and categories to the website thanks to taxonomies
"""
[taxonomies]
categories = ["zola"]
tags = ["zola"]
+++
```

## Step 3 - Edit the theme so that it shows tags and categories on every blog page

Copy the template called `blog-page.html` from your theme (in my case kodama-theme)

```bash
cp -v themes/kodama-theme/templates/blog-page.html templates/
```

and add this code

```html
{% if page.taxonomies.categories or page.taxonomies.tags %}
  <div class="post-taxonomies" style="margin-bottom: 1rem">
    
    {% if page.taxonomies.categories %}
      <span class="categories">
        <strong>Categories:</strong>
        {% for cat in page.taxonomies.categories %}
          <a href="{{ get_taxonomy_url(kind="categories", name=cat) }}">{{ cat }}</a>{% if not loop.last %}, {% endif %}
        {% endfor %}
      </span>
    {% endif %}

    {% if page.taxonomies.tags %}
      <span class="tags">
        <strong>Tags:</strong>
        {% for tag in page.taxonomies.tags %}
          <a href="{{ get_taxonomy_url(kind="tags", name=tag) }}">{{ tag }}</a>{% if not loop.last %}, {% endif %}
        {% endfor %}
      </span>
    {% endif %}

  </div>
{% endif %}
```

right after the `<article>` opening tag and before

```html
    {{ macros::toc() }}
    {{ page.content | safe }}
    {% if page.extra.external_link %}<p><a href="{{page.extra.external_link | safe}}" target="_blank">{{page.extra.external_link | safe}}</a></p>{% endif -%}
  </article>
```
Keep in mind that the location where you add the code might vary. Enjoy :)