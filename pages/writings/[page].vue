<script setup lang="ts"></script>

<template>
  <div w-full flex flex-col>
    <div v-for="i in 5" :key="i">
      <WritingItems />
    </div>
    <div mt-4 flex justify-between>
      <span>
        Up
      </span>
      <span>
        Next
      </span>
    </div>
  </div>
</template>
