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
      <div>
        <img
          class="channel-thumbnail"
          :src="channel.snippet.thumbnails.default.url"
          alt="channel-thumbnail"
          v-if="!isLoading"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const data = reactive({
      item: {},
      channel: {},
    });
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
          `https://www.googleapis.com/youtube/v3/channels?key=${process.env.VUE_APP_API_KEY}&part=snippet&id=${item.value.snippet.channelId}`
        )
        .then((res) => {
          channel.value = res.data.items[0];
          isLoading.value = false;
        });
    })();

    return { url, data, channel, item, isLoading };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.video {
  width: 100%;
  height: 70vh;
}

.item-info {
  margin-top: 20px;
}

.item-info .item-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.channel-thumbnail {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
</style>
