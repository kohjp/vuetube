<template>
  <div class="container">
    <div v-for="(item, idx) in state.items" :key="idx">
      <VueItem :item="item" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import VueItem from "@/components/VueItem.vue";

const state = reactive({
  items: [],
});
try {
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/videos?key=${process.env.VUE_APP_API_KEY}&part=snippet&chart=mostPopular&regionCode=kr&maxResults=25`
    )
    .then((res) => {
      state.items = res.data.items;
    });
} catch (err) {
  console.log(err);
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
