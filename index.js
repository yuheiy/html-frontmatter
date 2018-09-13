'use strict'

const { parseFragment, serialize } = require('parse5')
const { safeLoad: parseYaml } = require('js-yaml')

/**
 * Parse front-matter from raw HTML.
 *
 * @param {string} input
 * @returns {Object}
 */
module.exports = (input) => {
  if (typeof input !== 'string') {
    throw new TypeError('input must be a string')
  }

  const documentFragment = parseFragment(input)
  const matterNode = documentFragment.childNodes.find(
    (node) => node.nodeName === '#comment',
  )

  if (!matterNode) {
    return {
      data: null,
      content: input,
    }
  }

  documentFragment.childNodes = documentFragment.childNodes.filter(
    (node) => node !== matterNode,
  )

  return {
    data: parseYaml(matterNode.data),
    content: serialize(documentFragment)
      .replace(/^\n/, '')
      .replace(/^\n/, ''),
  }
}
