+++
title = "Building a Cross-Compiler - i686-linux-gnu"
date = 2026-01-01

[extra]
authors = [ "Michele Bucca" ]
publication_types = "Research paper"
featured = true
type="journals"
publication = "2026-01-01"
pdf="i686-linux-gnu.pdf"
abstract="""
This article talks about building a cross-compiler targeting **i686-linux-gnu**.  
this file has been generated using pandoc and typst with the command

```bash
pandoc --standalone \
  --toc=true \
  --number-sections=true \
  -f markdown+emoji -t pdf \
  --pdf-engine=typst \
  --metadata-file metadata.yaml \
  -o i686-linux-gnu.pdf   i686-linux-gnu.md 
```

the metadata file is the following:

```yaml
title: 'Building a Cross-Compiler'
subtitle: 'i686-linux-gnu'
author: 
- Michele Bucca
reference-links: true
```

Its <a href="/i686-linux-gnu.md" target="_blank">source file</a> can be executed directly as a script using <a href="https://github.com/0atman/blaze" target="_blank">blaze</a> with the command 

```bash
blaze bash i686-linux-gnu.md
```
"""
+++