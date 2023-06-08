<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'
</script>

<template>
  <div>
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>
        <MilkdownEditor />
      </ProsemirrorAdapterProvider>
    </MilkdownProvider>
  </div>
</template>
