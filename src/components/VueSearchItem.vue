<template>
  <div>
    <div class="item-channel" v-if="item.id.kind === 'youtube#channel'">
      <img
        class="channel-thumbnail"
        :src="item.snippet.thumbnails.medium.url"
        alt="thumbnail"
      />
      <div>
        <div class="title">{{ item.snippet.title }}</div>
        <div>
          {{ item.snippet.description }}
        </div>
      </div>
    </div>
    <div class="item-video" v-else>
      <router-link :to="{ path: '/watch/' + item.id.videoId }">
        <img
          class="video-thumbnail"
          :src="item.snippet.thumbnails.medium.url"
          alt="thumbnail"
        />
      </router-link>
      <div>
        <router-link :to="{ path: '/watch/' + item.id.videoId }">
          <div class="title">
            {{ item.snippet.title }}
          </div>
          <div>{{ date }}</div>
          <div class="channel-title">{{ item.snippet.channelTitle }}</div>
          <div>
            {{ item.snippet.description }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    item: Object,
  },
  setup(props) {
    const date = dayjs(props.item.snippet.publishedAt).format(
      "YYYY년 MM월 DD일 HH시 mm분"
    );
    return { date };
  },
};
</script>

<style scoped>
.item-channel {
  display: flex;

  gap: 20px;
}
.item-channel .channel-thumbnail {
  width: 136px;
  height: 136px;
  border-radius: 50%;
}

.item-video {
  display: flex;
  gap: 20px;
}

.item-video a {
  text-decoration: none;
  color: black;
}

.item-video .video-thumbnail {
  width: 360px;
  height: 201px;
  border-radius: 10px;
}

.title {
  font-size: 1.3rem;
  font-weight: 600;
}

.item-video .channel-title {
  margin-bottom: 10px;
}
</style>
