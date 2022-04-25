<template>
  <v-text-field
    clearable
    hide-details
    class="search"
    v-model="query"
    color="primary"
    label="Buscar..."
    prepend-icon="mdi-filter"
    @click:prepend="showFilter"
    append-outer-icon="mdi-magnify"
    @click:append-outer="sendQuery"
  ></v-text-field>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    query: "",
  }),
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
  color: white;
}
</style>
