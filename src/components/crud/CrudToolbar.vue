<template>
  <v-toolbar dark color="main">
    <v-btn icon dark @click="closeUtility(utility)">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-toolbar-title> {{ label }} </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn dark text @click="closeUtility(utility)"> Cerrar </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "CrudToolbar",
  methods: {
    closeUtility(utility) {
      this.$store.dispatch("seeCrud", utility);
    },
  },
  props: {
    label: String,
    utility: Number,
  },
};
</script>

<style lang="css" scoped></style>
