<template>
  <div v-for="(item, idx) in state.items" :key="idx">
    <img :src="item.snippet.thumbnails.medium.url" />
    {{ item.snippet.title }}
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      items: [],
    });
    try {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?key=${process.env.VUE_APP_API_KEY}&part=snippet&chart=mostPopular&regionCode=kr`
        )
        .then((res) => {
          state.items = res.data.items;
        });
    } catch (err) {
      console.log(err);
    }

    return { state };
  },
};
</script>

<style scoped></style>
