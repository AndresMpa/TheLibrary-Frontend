<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    checkSession() {
      this.$store.dispatch("autoLogin");
    },
  },
  created() {
    this.checkSession;
  },
};
</script>

<style>
* {
  padding: 0%;
  margin: 0%;
}
</style>
