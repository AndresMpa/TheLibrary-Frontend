<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import ContentLoader from "./components/util/ContentLoader.vue";
export default {
  name: "App",
  data: () => ({}),
  components: { ContentLoader },
};
</script>

<style>
* {
  padding: 0%;
  margin: 0%;
}
</style>
