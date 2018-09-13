const parseFrontMatter = require('..')

test('normal', () => {
  const out = parseFrontMatter(`<!--
foo: bar
-->

<p>hello</p>
`)
  expect(out).toEqual({
    content: `<p>hello</p>
`,
    data: {
      foo: 'bar',
    },
  })
})

test('tight', () => {
  const out = parseFrontMatter(`<!--foo: bar--><p>hello</p>`)
  expect(out).toEqual({
    content: `<p>hello</p>`,
    data: {
      foo: 'bar',
    },
  })
})
