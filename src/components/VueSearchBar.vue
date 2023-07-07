<template>
  <div>
    <v-card class="mx-auto" color="red" width="500">
      <v-card-text>
        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="검색"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"
          v-model="data"
          @keyup.enter="search"
        ></v-text-field>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { ref } from "vue";
import router from "@/scripts/router";
export default {
  data: () => ({
    loaded: false,
    loading: false,
  }),

  setup() {
    const onClick = () => {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    };

    const data = ref("");

    const search = () => {
      router.replace({ path: "/search", query: { q: data.value } });
    };

    return { data, onClick, search };
  },
};
</script>

<style scoped>
.mx-auto {
  border: none;
}
</style>
