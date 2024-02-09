# Carrier Pigeon

* Hugo theme
* Tailwind CSS
* Supports the [Unfit for Work](https://unfit-for.work) blog.

# Current State / TODO

Some additional changes needed before it's ready for general use.

- Adding Twitter & OpenGraph metadata
- Handling long-titles
- Fix analytics (Revert [this commit](https://github.com/ivan3bx/carrier-pigeon/commit/e5a6a0acac81d984710c431c5e8520874faae8b3) and move plausible analytics to site configuration).
- 404 page

## Demo Site

- https://unfit-for.work

## Installation

Run tailwind with live reload.
`npm run dev`

Run a build to generate minified styles.
`npm run build`

## Configuration

This theme includes a 'small' output format intended to present
a concise view of a single page, with just title, summary and
date.

To support it, the site config requires the following site config:

```toml
# Support 'small' embeddable format

[outputFormats]
    [outputFormats.smallFormat]
        name = "small"
        mediaType = 'text/html'
        baseName = "small"
        isPlainText = false
        rel = "alternate"
        isHTML = true
        noUgly = true
        permalinkable = false

[outputs]
    page = ['html', 'small']
```
