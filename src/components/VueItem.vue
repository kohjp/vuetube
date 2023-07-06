<template>
  <div class="item">
    <router-link :to="{ path: '/watch/' + item.id }">
      <img class="item-thumbnail" :src="item.snippet.thumbnails.medium.url" />
    </router-link>
    <div class="info">
      <img class="channel-thumbnail" :src="state.channel" />
      <div class="content-info">
        <div class="title">
          {{ item.snippet.title }}
        </div>
        <div class="channel-title">
          {{ item.snippet.channelTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive } from "vue";
import axios from "axios";
import { reactive } from "vue";
export default {
  props: {
    item: Object,
  },
  setup(props) {
    const state = reactive({
      channel: "",
    });
    try {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/channels?key=${process.env.VUE_APP_API_KEY}&part=snippet&id=${props.item.snippet.channelId}`
        )
        .then(
          (res) =>
            (state.channel = res.data.items[0].snippet.thumbnails.default.url)
        );
    } catch (err) {
      console.log(err);
    }
    return { state };
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 350px;
}

.item .info {
  display: flex;
  margin-top: 12px;
  flex-grow: 1;
  width: 100%;
}

.info .title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 16px;
  font-weight: 900;
}

.item .item-thumbnail {
  border-radius: 15px;
  width: 340px;
  height: 190px;
}

.item .channel-thumbnail {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-right: 12px;
}

.content-info .channel-title {
  font-size: 14px;
  font-weight: 600;
  color: #606060;
}
</style>
