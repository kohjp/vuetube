<template>
  <div class="container">
    <div v-for="(item, idx) in state.items" :key="idx">
      <VueItem :item="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import VueItem from "@/components/VueItem.vue";

export default {
  components: {
    VueItem,
  },
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

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
