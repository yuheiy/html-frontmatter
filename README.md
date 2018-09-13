# html-frontmatter

Parse front-matter from raw HTML.

## Installation

```bash
npm install @yuheiy/html-frontmatter
```

## Usage

```js
const parseFrontMatter = require('@yuheiy/html-frontmatter')

const frontMatter = parseFrontMatter(`<!--
title: Awesome article
authors:
  - sato
  - suzuki
  - takahashi
-->

<p>hello</p>
`)

console.log(frontMatter)
/*
{
  data: {
    title: 'Awesome article',
    authors: [
      'sato',
      'suzuki',
      'takahashi'
    ]
  },
  content: '<p>hello</p>\n'
}
*/
```

## License

MIT
