<script setup lang="ts">
// import type { Writing } from '@prisma/client'
definePageMeta({
  middleware: 'default-page',
})

const { getWritings } = useWriting()
const route = useRoute()
const router = useRouter()
const page = computed(() => +route.params.page || 1)

// const { data } = await useAsyncData('data', async () => {
//   return await getWritings(page.value).then(res => res)
// }, { server: false })
const state = useStore()
if (!state.value.writings[page.value])
  await fetchWritings(page.value)

const writings = state.value.writings[page.value]

function pageChanged(to: number) {
  if (to <= 0)
    router.replace('/writings/1')
  fetchWritings(page.value + 1)
}

onMounted(() => pageChanged(page.value))
watch(page, to => pageChanged(to))
</script>

<template>
  <div h-full w-full flex flex-col>
    <div v-for="item in writings" :key="item.id">
      <WritingItems :item="item" />
    </div>
    <div mt-4 flex justify-between>
      <NuxtLink v-if="page > 1" :to="`/writings/${page - 1}`" i-carbon-arrow-left />
      <span v-else i-carbon-arrow-left opacity-50 />
      <NuxtLink v-if="!(writings.length < 5)" :to="`/writings/${page + 1}`" i-carbon-arrow-right />
    </div>
  </div>
</template>
