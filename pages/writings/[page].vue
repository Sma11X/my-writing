<script setup lang="ts">
// import type { Writing } from '@prisma/client'

definePageMeta({
  middleware: 'default-page',
})

const { getWritings } = useWriting()
const route = useRoute()
const router = useRouter()
const page = computed(() => +route.params.page || 1)
const { data } = await useAsyncData('data', async () => {
  return await getWritings(page.value).then(res => res)
}, { server: false })

async function pageChanged(to: number) {
  if (to <= 0)
    router.replace('/writings/1')
}

onMounted(() => pageChanged(page.value))
watch(page, to => pageChanged(to))
</script>

<template>
  <div w-full flex flex-col>
    <div v-for="item in data" :key="item.id">
      <WritingItems :item="item" />
    </div>
    <div mt-4 flex justify-between>
      <div i-carbon-arrow-left />
      <div i-carbon-arrow-right />
    </div>
  </div>
</template>
