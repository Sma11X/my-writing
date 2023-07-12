<script setup lang="ts">
import type { Writing } from '@prisma/client'

const { item } = defineProps<{
  item: Writing
}>()
</script>

<template>
  <NuxtLink :to="`/writing/${item.id}`" relative min-h-12 w-full flex flex-col justify-end p-4 text-xl shadow>
    <article>
      <header>
        {{ item.title }}

        <dl mt-1 block flex-row flex-wrap text-xs leading-normal uppercase md:flex>
          <dt float-left mr-2 md:float-none>
            发布于
          </dt>
          <dd mr-4 font-mono>
            {{ useDateFormat(item.createdAt, 'YYYY-MM-DD').value }}
          </dd>
        </dl>
      </header>
    </article>
  </NuxtLink>
</template>

<style scoped>
</style>
