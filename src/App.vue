<template>
  <v-app>
    <AppHeader> </AppHeader>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
  data: () => ({
    //
  }),
};
</script>
