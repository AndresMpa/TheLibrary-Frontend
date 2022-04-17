<template>
  <article>
    <MostSold />
    <Shelf />
  </article>
</template>

<script>
import LastBook from "./LastBook.vue";
import MostSold from "./MostSold.vue";
import Shelf from "./Shelf.vue";
export default {
  name: "BooksLayout",
  components: { Shelf, LastBook, MostSold },
};
</script>

<style lang="css" scoped></style>
