<template>
  <nav text="xl" h-full flex items-center px-6>
    <div h-12 w-12 flex items-center justify-center>
      <NuxtLink i-carbon-campsite to="/" />
    </div>
    <div ml-auto mr-5 flex justify-between gap-4>
      <NuxtLink nav-btn i-carbon-document to="/" />
      <NuxtLink nav-btn i-carbon-user-simulation to="/" />
      <DarkToggle />
    </div>
  </nav>
</template>
