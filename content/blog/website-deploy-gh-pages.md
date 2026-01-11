+++
title = "I've finally deployied my website on Github pages"
date = 2026-01-11
description = """
Some notes on how I deployied my websited built with Zola on Github Pages
"""
+++

Recently, as you read on my [previous post](/blog/hello-world), I've built my new website using Zola.
Yesterday I've tried to deploy it to github pages using the instructions on the <a href="https://web.archive.org/web/20251116072637/https://www.getzola.org/documentation/deployment/github-pages/" target="_blank">official page (archived)</a>

> **Note:**
> The webpage has been updated!
> <a target="_blank" href="https://www.getzola.org/documentation/deployment/github-pages/">See official page</a>. 

I've used the instructions of this <a target="_blank" href="https://github.com/shalzz/zola-deploy-action">Github action</a> but unfortunately it did not work well and my website bloke, displaying a 404 error:

![404](/img/404.jpg)

This was my original `.github/worklows/main.yml` file:

```yaml
on: push
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: 'checkout'
        uses: actions/checkout@v4
      - name: 'build and deploy'
        uses: shalzz/zola-deploy-action@master
        env:
          # Target Branch
          PAGES_BRANCH: gh-pages
          TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

But it needed to be updated with the following lines

```yaml
permissions:
  contents: write
```

and limit the execution of the action only when I uploaded code to the main branch.
The new version is much more clean:

```yaml
on:
  push:
    branches: 
    - main
permissions:
  contents: write
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 'checkout'
        uses: actions/checkout@v4
      - name: 'build and deploy'
        uses: shalzz/zola-deploy-action@master
        env:
          # Target Branch
          PAGES_BRANCH: gh-pages
          TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

I also made sure to give Github actions the permissions to write to write to the repo:


in **Settings -> Actions -> General** I **allowed michele13 (myself) actions and reusable workflows** and  enabled read/write permissions on **Workflow permissions** while keeping disabled the option: **Allow GitHub Actions to create and approve pull requests**.

Now it's finally working!