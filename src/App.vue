<!-- App.vue -->

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <div class="flex flex-col">
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
