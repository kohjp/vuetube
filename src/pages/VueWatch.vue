<template>
  <div class="container">
    <div class="video">
      <iframe
        id="ytplayer"
        type="text/html"
        width="100%"
        height="100%"
        :src="url"
        frameborder="0"
        allowfullscreen
      >
      </iframe>
    </div>
    <div class="item-info">
      <span class="item-title">
        {{ item.snippet?.title }}
      </span>
      <div class="channel">
        <img
          class="channel-thumbnail"
          :src="channel.snippet.thumbnails.default.url"
          alt="channel-thumbnail"
          v-if="!isLoading"
        />
        <div class="channel-info">
          <span class="channel-title">
            {{ channel.snippet?.title }}
          </span>
          <span class="channel-subscriber">
            구독자 {{ channel.statistics?.subscriberCount.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }} 명
          </span>
        </div>
      </div>
      <div class="item-detail">
        <span>
           조회수 {{  item.statistics?.viewCount.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }}회
        </span>
        <div>
            {{ item.snippet?.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {  ref } from "vue";
import { useRoute } from "vue-router";

    const url = ref("");
    const item = ref({});
    const channel = ref({});
    const route = useRoute();
    const isLoading = ref(true);

    url.value = `https://www.youtube.com/embed/${route.params.id}?autoplay=0&mute=0`;

    (async () => {
      await axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?key=${process.env.VUE_APP_API_KEY}&part=snippet,statistics&id=${route.params.id}&regionCode=kr`
        )
        .then((res) => {
          item.value = res.data.items[0];
        });
      await axios
        .get(
          `https://www.googleapis.com/youtube/v3/channels?key=${process.env.VUE_APP_API_KEY}&part=snippet,statistics&id=${item.value.snippet.channelId}`
        )
        .then((res) => {
          channel.value = res.data.items[0];
          isLoading.value = false;
        });
    })();
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 90px;
  margin-top: 30px;
}

.video {
  width: 100%;
  height: 80vh;
}

.item-info {
  margin-top: 20px;
}

.item-info .item-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.channel {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.channel-thumbnail {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.channel-title {
  font-size: 1.2rem;
  font-weight: 600;
}
.channel-info {
  display: flex;
  flex-direction: column;
}

.item-detail{
    background: #E5E5E5;
    padding: 20px;
    border-radius: 15px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

</style>
