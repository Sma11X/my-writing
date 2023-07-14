<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const child = router.options.routes.filter(r => r.path.includes('experimental/'))
</script>

<template>
  <div flex items-center justify-center>
    WIP
  </div>
</template>
