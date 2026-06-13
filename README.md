# 3DS Hacks Guide

A complete guide to 3DS (and 2DS) custom firmware, from stock to boot9strap.

[![Website Badge](https://img.shields.io/badge/website-3ds.hacks.guide-BC181A?logo=vitepress&logoColor=FFFFFF)](https://3ds.hacks.guide/)
[![Translation Badge](https://img.shields.io/badge/translation-contribute-263238?logo=crowdin&logoColor=FFFFFF)](https://crowdin.com/project/3ds-guide)
[![Discord Server](https://img.shields.io/badge/chat-nintendo%20homebrew-7289DA?logo=discord&logoColor=FFFFFF)](https://discord.gg/C29hYvh)
[![Last Commit Badge](https://img.shields.io/github/last-commit/hacks-guide/Guide_3DS)](https://github.com/hacks-guide/Guide_3DS/commits/master/)
![Language Count](https://img.shields.io/badge/languages-6-brightgreen)
[![MIT License](https://img.shields.io/badge/license-MIT-A31F34)](https://github.com/hacks-guide/Guide_3DS/blob/master/LICENSE)

## Running the site locally

This requires the following installed on your system:

* [node.js](https://nodejs.org/en)

To test the website locally, clone the source code:

```shell
git clone https://github.com/hacks-guide/Guide_3DS --recurse-submodules
cd Guide_3DS
```

Then simply run the following commands:

```shell
npm ci
npm run docs:dev
```

> [!TIP]
> If you choose to run multiple web servers at once, they will begin running at the next highest usable port (e.g. :5174, :5175, and so on).

The website should now be running on <http://127.0.0.1:5173/> (or whatever port is shown on the terminal).
