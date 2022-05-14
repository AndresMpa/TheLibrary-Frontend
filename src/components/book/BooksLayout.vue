<template>
  <article>
    <ShoppingBagLayout />
    <LastBook />
    <MostSold />
    <Shelf :stock="stock" />
    <Footer />
  </article>
</template>

<script>
import ShoppingBagLayout from "../util/ShoppingBagLayout.vue";
import Footer from "../util/Footer.vue";
import LastBook from "./LastBook.vue";
import MostSold from "./MostSold.vue";
import Shelf from "./Shelf.vue";
import axios from "axios";
export default {
  name: "BooksLayout",
  components: { Shelf, LastBook, MostSold, ShoppingBagLayout, Footer },
  data() {
    return {
      stock: [],
    };
  },
  methods: {
    getStock() {
      axios
        .get("/book/test")
        .then((response) => response.data)
        .then((data) => (this.stock = data));
    },
  },
  created() {
    this.getStock();
  },
};
</script>

<style lang="css" scoped></style>
