<script setup lang="ts">
import { Milkdown, useEditor } from '@milkdown/vue'
import { Editor, defaultValueCtx, editorViewOptionsCtx, rootCtx } from '@milkdown/core'
import { commonmark } from '@milkdown/preset-commonmark'
import { gfm } from '@milkdown/preset-gfm'
import { indent } from '@milkdown/plugin-indent'
import { emoji } from '@milkdown/plugin-emoji'
import { diagram } from '@milkdown/plugin-diagram'
import { prism, prismConfig } from '@milkdown/plugin-prism'
import 'prism-themes/themes/prism-nord.css'
import css from 'refractor/lang/css'
import javascript from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript'

const { markdown } = defineProps({
  markdown: {
    type: String,
    default: '',
  },
})

useEditor((root) => {
  return Editor.make()
    .config(milkdownTheme)
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, markdown)
      ctx.set(prismConfig.key, {
        configureRefractor: (refractor: any) => {
          refractor.register(css)
          refractor.register(javascript)
          refractor.register(typescript)
        },
      })
      ctx.update(editorViewOptionsCtx, (prev: any) => ({
        ...prev,
        editable: () => false,
      }))
    })
    .use(commonmark)
    .use(gfm)
    .use(indent)
    .use(emoji)
    .use(diagram)
    .use(prism)
})
</script>

<template>
  <Milkdown class="prose-nord prose dark:prose-invert" mx-auto />
</template>
