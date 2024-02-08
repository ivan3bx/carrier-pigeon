# Carrier Pigeon

* Hugo theme
* Tailwind CSS
* Supports the blog at https://unfit-for.work

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
