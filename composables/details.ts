import { $inputRule, $node, $nodeAttr, $remark } from '@milkdown/utils'
import directive from 'remark-directive'
import { InputRule } from '@milkdown/prose/inputrules'

const remarkDirective = $remark(() => directive)
const detailsAttr = $nodeAttr('detailsAttr', () => ({
  summary: {},
  p: {},
}))
const detailsSchema = $node('details', (ctx) => {
  return {
    content: 'paragraph+',
    group: 'block',
    atom: false,
    code: true,
    defining: true,
    isolating: true,
    parseDOM: [{ tag: 'details' }],
    toDOM: (node) => {
      const attr = ctx.get(detailsAttr.key)(node)
      return ['details', ['summary', { ...attr.summary }, 0], ['p', attr.p]]
    },
    parseMarkdown: {
      match: ({ type }) => type === 'details',
      runner: (state, node, type) => {
        const value = node.value as string
        state.openNode(type).addText(value).closeNode()
      },
    },
    toMarkdown: {
      match: node => node.type.name === 'details',
      runner: (state, node) => {
        state.addNode('details')
      },
    },
  }
})

const createDetailsRule = $inputRule(() => new InputRule(/::details /, (state, match, start, end) => {
  const [okay] = match
  const { tr } = state
  if (okay)
    tr.replaceWith(start - 1, end, detailsSchema.type().create())

  return tr
}))

export default [detailsAttr, remarkDirective, detailsSchema, createDetailsRule]
