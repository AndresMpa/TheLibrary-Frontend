<template>
  <v-container fluid>
    <h1 class="headline h1">Perfil de {{ this.$store.user.information.username }}</h1>
  </v-container>
</template>

<script>
export default {
  name: "ProfileLayout",
};
</script>

<style lang="css" scoped></style>
