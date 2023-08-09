<template>
  <div class="container">
    <div v-for="(item, idx) in result" :key="idx">
      <VueSearchItemVue :item="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import VueSearchItemVue from "@/components/VueSearchItem.vue";

const result = ref([]);

const route = useRoute();
watchEffect(() => {
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.VUE_APP_API_KEY}&part=snippet&q=${route.query.q}&regionCode=kr&maxResults=30`
    )
    .then((res) => {
      result.value = res.data.items;
    });
});
</script>

<style scoped>
.container {
  padding-right: 90px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
