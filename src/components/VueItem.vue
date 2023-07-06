<template>
  <div class="item">
    <router-link :to="{ path: '/watch/' + item.id }">
      <img class="item-thumbnail" :src="item.snippet.thumbnails.medium.url" />
    </router-link>
    <div class="info">
      <img class="channel-thumbnail" :src="state.channel" />
      <div class="content-info">
        <div class="title">
          <router-link :to="{ path: '/watch/' + item.id }">
            {{ item.snippet.title }}
          </router-link>
        </div>
        <div class="channel-title">
          {{ item.snippet.channelTitle }}
        </div>
        <div class="channel-title">
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import dayjs from "dayjs";

export default {
  props: {
    item: Object,
  },
  setup(props) {
    const state = reactive({
      channel: "",
    });
    const date = dayjs(props.item.publishedAt).format(
      "YYYY년 MM월 DD일 HH시 mm분"
    );
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
    return { state, date };
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

.info .title a {
  text-decoration: none;
  color: black;
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
