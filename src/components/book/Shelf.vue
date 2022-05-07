<template>
  <v-row class="shelf">
    <v-col
      v-for="(book, index) in stock[this.$store.state.currentPage - 1]"
      class="d-flex child-flex"
      :key="index"
      xl="2"
      lg="3"
      md="3"
      xs="12"
      sm="12"
    >
      <Book :information="book"></Book>
    </v-col>
    <v-col v-if="routeName !== 'LastResult'">
      <Pagination :total="stock.length" />
    </v-col>
  </v-row>
</template>

<script>
import Pagination from "../util/Pagination.vue";
import Book from "./Book.vue";
export default {
  name: "Shelf",
  components: { Book, Pagination },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
  props: {
    stock: Array,
  },
};
</script>

<style lang="css" scoped>
.shelf {
  margin: 0% auto;
  width: 98%;
}
</style>
