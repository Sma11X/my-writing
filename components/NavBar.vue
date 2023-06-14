<script setup lang="ts">
const currentUser = useAuthUser()
const { logout } = useAuth()
</script>

<template>
  <nav text="xl" h-full flex items-center px-6>
    <div h-12 w-12 flex items-center justify-center>
      <NuxtLink i-carbon-campsite to="/" />
    </div>
    <div ml-auto mr-5 flex justify-between gap-4>
      <NuxtLink i-carbon-pen nav-btn to="/writings" />
      <NuxtLink i-carbon-user-simulation nav-btn to="/" />
      <NuxtLink v-if="currentUser" i-carbon-data-enrichment-add nav-btn to="/create" />
      <NuxtLink v-if="currentUser" i-carbon-logout nav-btn to="/" @click="logout" />
      <DarkToggle />
    </div>
  </nav>
</template>
