<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'

definePageMeta({
  middleware: ['login-only'],
})
</script>

<template>
  <ClientOnly>
    <div flex-1 flex-col>
      <MilkdownProvider>
        <ProsemirrorAdapterProvider>
          <MilkdownEditor />
        </ProsemirrorAdapterProvider>
      </MilkdownProvider>
    </div>
  </ClientOnly>
</template>
