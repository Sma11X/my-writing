<script setup lang="ts">
</script>

<template>
  <div min-h-screen flex flex-col overflow-x-hidden>
    <NavBar />

    <main mx-auto max-w-xl w-full flex-grow p-4>
      <slot role="main" />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
</style>
