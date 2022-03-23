<template>
  <v-toolbar color="primary">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Libreria UTP</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field
      clearable
      hide-details
      color="text"
      class="search"
      v-model="query"
      label="Buscar..."
      prepend-icon="mdi-filter"
      @click:prepend="showFilter"
      append-outer-icon="mdi-magnify"
      @click:append-outer="sendQuery"
    ></v-text-field>

    <shopping-bag />

    <change-color />

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import ChangeColor from "../util/ChangeColor.vue";
import ShoppingBag from "../util/ShoppingBag.vue";
export default {
  name: "Bar",
  data() {
    return {
      query: "",
    };
  },
  components: { ChangeColor, ShoppingBag },
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
.search {
  margin-top: 800px;
}
</style>
