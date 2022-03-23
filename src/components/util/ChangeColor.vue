<template>
  <v-btn icon @click="changeTheme">
    <v-icon v-if="this.$vuetify.theme.dark"> mdi-weather-night </v-icon>
    <v-icon v-else> mdi-weather-sunny </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ChangeColor",
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark
        ? (this.$vuetify.theme.dark = false)
        : (this.$vuetify.theme.dark = true);
    },
  },
};
</script>

<style lang="css" scoped></style>
