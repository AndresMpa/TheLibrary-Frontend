<template>
  <v-toolbar color="secondary">
    <v-toolbar-title>
      <Client />
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <search />

    <shopping-bag />

    <change-color />

    <setting />
  </v-toolbar>
</template>

<script>
import ShoppingBag from "../util/ShoppingBag.vue";
import ChangeColor from "../util/ChangeColor.vue";
import Setting from "../util/Setting.vue";
import Client from "./Client.vue";
import Search from "./Search.vue";
export default {
  name: "ClientBar",
  components: { ChangeColor, ShoppingBag, Client, Setting, Search },
};
</script>

<style lang="css" scoped>
.search {
  margin-top: 800px;
}
</style>
