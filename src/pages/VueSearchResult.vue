<template>
  <div class="container">
    <div v-for="(item, idx) in result" :key="idx">
      {{ item.snippet.title }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const result = ref([]);
    const route = useRoute();

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.VUE_APP_API_KEY}&part=snippet&q=${route.query.q}&regionCode=kr&maxResults=30`
      )
      .then((res) => {
        console.log(res.data.items);
        result.value = res.data.items;
      });

    return { result };
  },
};
</script>

<style scoped></style>
