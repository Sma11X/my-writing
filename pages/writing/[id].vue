<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'

const route = useRoute()
const router = useRouter()
const state = useStore()
const markdown = ref('a')
const { getWritingById } = useWriting()

const res = await getWritingById(route.params.id as string)
if (res.value?.content)
  markdown.value = res.value.content

onMounted(() => {
  // if (router.options.history.state.back) {
  //   const url = (router.options.history.state.back).split('/')
  //   const page = url[url.length - 1]
  //   if (page) {
  //     const writing = state.value.writings[page]
  //     const res = writing.find(item => item.id === route.params.id)
  //     markdown.value = res.content
  //   }
  // }
})
</script>

<template>
  <div>
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>
        <ReadOnlyEditor :markdown="markdown" />
      </ProsemirrorAdapterProvider>
    </MilkdownProvider>
  </div>
</template>
