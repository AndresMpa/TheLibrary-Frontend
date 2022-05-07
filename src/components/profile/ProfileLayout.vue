<template>
  <v-container fluid>
    <h1 class="headline h1">
      Perfil de {{ this.$store.state.user.information.username }}
    </h1>
    <preferences />
  </v-container>
</template>

<script>
import Preferences from "./Preferences.vue";
export default {
  name: "ProfileLayout",
  components: { Preferences },
};
</script>

<style lang="css" scoped></style>
