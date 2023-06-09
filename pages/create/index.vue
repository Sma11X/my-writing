<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'

definePageMeta({
  middleware: ['login-only'],
})
</script>

<template>
  <ClientOnly>
    <div>
      <MilkdownProvider>
        <ProsemirrorAdapterProvider>
          <MilkdownEditor />
        </ProsemirrorAdapterProvider>
      </MilkdownProvider>
    </div>
  </ClientOnly>
</template>
