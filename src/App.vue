<template>
  <v-card>
    <v-layout>
      <VueHeader />
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Username"
            subtitle="example@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-folder"
            title="저장한 영상"
            value="myfiles"
          ></v-list-item>
          <!-- <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Shared with me"
            value="shared"
          ></v-list-item> -->
          <v-list-item
            prepend-icon="mdi-star"
            title="즐겨찾기"
            value="starred"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import VueHeader from "@/components/VueHeader.vue";
export default {
  name: "App",
  components: { VueHeader },
};
</script>
