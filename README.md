## 3ds.hacks.guide
A complete guide to 3DS custom firmware, from stock to boot9strap.

https://3ds.hacks.guide

## Running the site locally

This requires the following installed to your system:
- node.js, v14 or later
- its respective npm
- Ruby, v3.x
- its respective Bundler

To test the website locally, simply run the following commands:
```
npm install
bundle install
```
to install all packages required by the website (Jekyll and minimal-mistakes's node packages), then
```
npm run build:js
bundle exec jekyll serve
```
to build the Markdown files into HTML, build the JavaScript files and start a testing webserver on http://127.0.0.1:4000.

## Translating

To help translate 3ds.hacks.guide, please contribute to its [Crowdin project](https://crowdin.com/project/3ds-guide), do not PR changes directly to the repository as that will conflict with the translations managed by Crowdin.
