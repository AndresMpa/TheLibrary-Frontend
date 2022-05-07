<template>
  <v-text-field
    dark
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
      this.$router.push({ name: "LastResult" }).catch(() => {
        console.log(`Result of ${this.query}`);
      });
    },
  },
};
</script>

<style lang="css" scoped>
.search {
  color: white;
}
</style>
