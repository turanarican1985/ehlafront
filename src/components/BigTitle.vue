<!-- BigTitle.vue -->

<script setup>
const { title } = defineProps(["title"]);
</script>

<template>
  <div
    class="flex flex-wrap items-center justify-center h-32 font-zalando-sans"
  >
    <div class="p-6 flex items-center border border-black -mt-3 h-full">
      <h2 class="text-5xl text-center">{{ title }}</h2>
    </div>
    <div
      class="p-6 flex items-center h-full border border-black text-pink-500 -mt-3 border-l-0"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
