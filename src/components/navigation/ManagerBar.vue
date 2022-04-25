<template>
  <v-toolbar class="white--text primary">
    <v-toolbar-title>
      <Client/>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <change-color />

    <setting />

  </v-toolbar>
</template>

<script>
import ShoppingBag from "../util/ShoppingBag.vue";
import ChangeColor from "../util/ChangeColor.vue";
import Setting from '../util/Setting.vue';
import Client from "./Client.vue";
export default {
  name: "ClientBar",
  data: () => ({
    query: "",
  }),
  components: { ChangeColor, ShoppingBag, Client, Setting },
  methods: {
    showFilter() {
      console.log("filtering");
    },
    sendQuery() {
      console.log("searching");
    },
  },
};
</script>

<style lang="css" scoped>
</style>
