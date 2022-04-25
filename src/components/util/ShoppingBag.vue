<template>
  <v-btn icon @click="handleBag" color="primary">
    <v-icon v-if="!this.$store.state.shoppingBag"> mdi-shopping </v-icon>
    <v-icon v-else> mdi-shopping-search </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ShoppingBag",
  methods: {
    handleBag() {
      console.log(this.$store.state.shoppingBag);
      this.$store.dispatch("changeShoppingBag", !this.$store.state.shoppingBag);
    },
  },
};
</script>

<style lang="css" scoped></style>
