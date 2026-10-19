# 3ds.hacks.guide

A complete guide to 3DS (and 2DS) custom firmware, from stock to boot9strap.

https://3ds.hacks.guide/

## AI (Artificial Intelligence) Policy

As a community largely composed of passionate developers and reverse engineers, we've seen the rise of AI impact the homebrew scene. We would prefer if fully or near-fully AI generated code and/or projects be kept away from our project. However, you are welcome to use a minor amount of AI "assistance" provided you are able to maintain your contributions.

## Running the site locally

This requires the following installed on your system:
- node.js

To test the website locally, clone the source code:

```sh
git clone https://github.com/hacks-guide/Guide_3DS --recurse-submodules
cd Guide_3DS
```

Then simply run the following commands:

```sh
npm ci
npm run docs:dev
```

The website should now be running on http://127.0.0.1:5173/ (or a port shown on the terminal).
