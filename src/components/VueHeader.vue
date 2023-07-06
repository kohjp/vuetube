<template>
  <div class="container">
    <v-app-bar
      class="d-flex align-center px-4 text-h5"
      color="red"
      :elevation="5"
      ><div>
        <router-link to="/"> VueTube </router-link>
      </div>
      <VueSearchBar />
    </v-app-bar>
  </div>
</template>

<script>
import VueSearchBar from "./VueSearchBar.vue";
export default {
  components: {
    VueSearchBar,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.container {
  padding: 30px;
}

a {
  text-decoration: none;
  color: white;
}
</style>
