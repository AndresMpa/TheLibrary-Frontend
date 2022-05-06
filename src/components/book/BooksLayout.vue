<template>
  <article>
    <ShoppingBagLayout />
    <LastBook />
    <MostSold />
    <Shelf />
    <Footer />
  </article>
</template>

<script>
import ShoppingBagLayout from "../util/ShoppingBagLayout.vue";
import Footer from "../util/Footer.vue";
import LastBook from "./LastBook.vue";
import MostSold from "./MostSold.vue";
import Shelf from "./Shelf.vue";
export default {
  name: "BooksLayout",
  components: { Shelf, LastBook, MostSold, ShoppingBagLayout, Footer },
};
</script>

<style lang="css" scoped></style>
