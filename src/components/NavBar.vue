<!-- NavBar.vue -->

<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="w-full p-8 flex flex-wrap items-stretch xl:justify-between justify-stretch gap-3"
  >
    <div
      class="flex flex-wrap items-center justify-stretch border border-black grow xl:grow-0"
    >
      <RouterLink
        to="/"
        class="flex grow items-center gap-2 py-2 px-6 bg-black font-zalando-sans cursor-pointer text-white hover:bg-amber-300 hover:text-black"
      >
        <h2 class="text-amber-200">/</h2>
        <h2 class="text-3xl font-medium">
          <span class="">EventsHub</span><span class="">.</span
          ><span class="">la</span>
        </h2>
        <h2 class="text-amber-200">\</h2>
      </RouterLink>
      <div
        class="flex items-center py-2 px-2 flex-wrap font-zalando-sans font-medium"
      >
        <h2 class="border-r px-2 hover:bg-amber-300 cursor-pointer">
          <span class="flex gap-1 items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="m300-300 280-80 80-280-280 80-80 280Zm180-120q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z"
              /></svg
            >DISCOVER</span
          >
        </h2>
        <h2 class="border-r px-2 hover:bg-amber-300 cursor-pointer">
          <span class="flex gap-1 items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
              /></svg
            >CREATE</span
          >
        </h2>
        <RouterLink to="/signin" class="px-2 hover:bg-amber-300 cursor-pointer">
          <h2>
            <span class="flex gap-1 items-center"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path
                  d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"
                /></svg
              >SIGN IN</span
            >
          </h2></RouterLink
        >
      </div>
    </div>
    <div
      class="flex font-zalando-sans grow font-medium border border-black focus-within:border-2"
    >
      <form action="" class="flex w-full">
        <div class="p-2 w-full flex items-center">
          <input
            type="text"
            class="outline-0 font-thin w-full"
            placeholder="Enter search term..."
          />
        </div>
        <div
          class="p-2 bg-black text-amber-300 flex items-center hover:bg-amber-300 hover:text-black"
        >
          <button class="cursor-pointer outline-0 border-0">Search</button>
        </div>
      </form>
    </div>
  </nav>
</template>

<style scoped></style>
