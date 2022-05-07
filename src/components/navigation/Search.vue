<template>
  <v-text-field
    dark
    clearable
    hide-details
    class="search"
    v-model="query"
    label="Buscar..."
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
    sendQuery() {
      this.$store.dispatch("changeQuery", this.query);
      this.$router.push({ name: "LastResult" }).catch(() => {
        console.log(`Result of ${this.query}`);
      });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
