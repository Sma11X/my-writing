<script setup lang="ts">
import type { Writing } from '@prisma/client'

const { item } = defineProps<{
  item: Writing
}>()
</script>

<template>
  <article w-full flex flex-col items-center justify-center>
    <header>
      <h2 flex items-center justify-center>
        {{ item.title }}
      </h2>
      <small flex items-center justify-center>
        {{ useDateFormat(item.createdAt, 'YYYY-MM-DD').value }}
      </small>
    </header>
  </article>
</template>

<style scoped>
h2 {
  font-size: 1.75em;
  margin: 1.5em 0 .5em;
  font-weight: 900;
}
</style>
