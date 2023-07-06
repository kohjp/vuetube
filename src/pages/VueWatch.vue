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
  </div>
</template>

<script>
export default {
  setup() {
    const url = "";
    return { url };
  },
  beforeMount() {
    this.url = `https://www.youtube.com/embed/${this.$route.params.id}?autoplay=1&mute=1`;
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.video {
}
</style>
