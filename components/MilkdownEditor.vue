<script setup lang="ts">
import { Milkdown, useEditor } from '@milkdown/vue'
import { Editor, defaultValueCtx, editorViewCtx, rootCtx, serializerCtx } from '@milkdown/core'
import { commonmark } from '@milkdown/preset-commonmark'
import { gfm } from '@milkdown/preset-gfm'
import { history } from '@milkdown/plugin-history'
import { indent } from '@milkdown/plugin-indent'
import { emoji } from '@milkdown/plugin-emoji'
import { diagram } from '@milkdown/plugin-diagram'
import { block } from '@milkdown/plugin-block'
import { usePluginViewFactory } from '@prosemirror-adapter/vue'
import { prism, prismConfig } from '@milkdown/plugin-prism'
import 'prism-themes/themes/prism-nord.css'
import css from 'refractor/lang/css'
import javascript from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript'
import type { Writing } from '@prisma/client'
import Block from './Block.vue'

const { details } = defineProps<{
  details?: Writing
}>()

const pluginViewFactory = usePluginViewFactory()
const title = toRef(details?.title) ?? ref('')
const isPublished = toRef(details?.published) ?? ref(false)
const { createWriting, updateWriting } = useWriting()

const { get } = useEditor((root) => {
  return Editor.make()
    .config(milkdownTheme)
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, details?.content ?? '')
      ctx.set(block.key, {
        view: pluginViewFactory({
          component: Block,
        }),
      })
      ctx.set(prismConfig.key, {
        configureRefractor: (refractor: any) => {
          refractor.register(css)
          refractor.register(javascript)
          refractor.register(typescript)
        },
      })
    })
    .use(commonmark)
    .use(gfm)
    .use(history)
    .use(indent)
    .use(emoji)
    .use(diagram)
    .use(block)
    .use(prism)
})

async function saveMarkdown() {
  const content = get()?.action((ctx) => {
    const editorView = ctx.get(editorViewCtx)
    const serializer = ctx.get(serializerCtx)
    return serializer(editorView.state.doc)
  })

  if (details?.id) {
    await updateWriting(details.id, {
      title: title.value!,
      content: content || '',
      published: isPublished.value,
    })
  }
  else {
    await createWriting({
      title: title.value!,
      content: content || '',
    })
  }

  await navigateTo('/writings/1')
}

function togglePublished() {
  isPublished.value = !isPublished.value
}
</script>

<template>
  <div flex="~ items-center justify-center">
    <button mr-5 mt-5 @click="togglePublished">
      <div :class="isPublished ? 'i-carbon-unlocked' : 'i-carbon-locked'" />
    </button>
    <input
      v-model="title"
      placeholder="Title" required
      type="text" autocomplete="off"
      p="x-4 y-2" m="t-5" w="100%"
      text="left" bg="transparent"
      border="~ rounded gray-300 dark:gray-700"
      outline="none active:none"
    >
  </div>

  <Milkdown class="prose-nord prose dark:prose-invert" mx-auto />
  <div i-carbon-document-add mx-auto @click="saveMarkdown" />
</template>

<style scoped lang="scss">
</style>
