<script setup>
import BigTitle from "./BigTitle.vue";
import SectionOutline from "./SectionOutline.vue";
import CardGridOutline from "./CardGridOutline.vue";
import EventCard from "./EventCard.vue";
</script>

<template>
  <SectionOutline
    ><BigTitle :title="'Featured'"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        height="72px"
        viewBox="0 -960 960 960"
        width="72px"
        fill="currentColor"
      >
        <path
          d="m509-220 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69-24 104ZM240-400v80h-80q-33 0-56.5-23.5T80-400v-400q0-33 23.5-56.5T160-880h400q33 0 56.5 23.5T640-800v80h-80v-80H160v400h80ZM400-80q-33 0-56.5-23.5T320-160v-400q0-33 23.5-56.5T400-640h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400Zm0-80h400v-400H400v400Zm200-200Z"
        /></svg
    ></BigTitle>
    <CardGridOutline
      ><EventCard
        :pic="'https://picsum.photos/300/400'"
        :f-p-d="'free'"
        :loc="'Pasadena, CA'"
        :date="'Feb 21, 2026'"
        :dsc="' One night. One stage. Pure energy. Live music that hits hard and stays with you. Dont miss it.'"
      ></EventCard>
      <EventCard
        :pic="'https://picsum.photos/300/400'"
        :f-p-d="'free'"
        :loc="'Pasadena, CA'"
        :date="'Feb 21, 2026'"
        :dsc="' One night. One stage. Pure energy. Live music that hits hard and stays with you. Dont miss it.'"
      ></EventCard
      ><EventCard
        :pic="'https://picsum.photos/300/400'"
        :f-p-d="'free'"
        :loc="'Pasadena, CA'"
        :date="'Mar 21, 2026'"
        :dsc="' One night. One stage. Pure energy. Live music that hits hard and stays with you. Dont miss it.'"
      ></EventCard
      ><EventCard
        :pic="'https://picsum.photos/300/400'"
        :f-p-d="'free'"
        :loc="'Pasadena, CA'"
        :date="'Feb 21, 2026'"
        :dsc="' One night. One stage. Pure energy. Live music that hits hard and stays with you. Dont miss it.'"
      ></EventCard></CardGridOutline
  ></SectionOutline>
</template>

<style scoped></style>
