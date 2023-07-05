<template>
  <div class="item">
    <img class="item-thumbnail" :src="item.snippet.thumbnails.medium.url" />
    <div class="info">
      <img class="channel-thumbnail" :src="state.channel" />
      <div class="title">
        {{ item.snippet.title }}
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
</style>
