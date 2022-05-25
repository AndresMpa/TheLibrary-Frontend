<template>
  <v-btn icon @click="changeTheme" dark>
    <v-icon v-if="this.$vuetify.theme.dark"> mdi-weather-night </v-icon>
    <v-icon v-else> mdi-weather-sunny </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ChangeColor",
  methods: {
    changeTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.dark = false;
        localStorage.setItem("theme", 0);
      } else {
        this.$vuetify.theme.dark = true;
        localStorage.setItem("theme", 1);
      }
    },
  },
};
</script>

<style lang="css" scoped></style>
