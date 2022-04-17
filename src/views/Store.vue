<template>
  <main>
    <Books-Layout />
    <Last-Book />
  </main>
</template>

<script>
import BooksLayout from "../components/book/BooksLayout.vue";
import LastBook from "../components/book/LastBook.vue";
import Main from "./Main.vue";
export default {
  name: "Store",
  components: { BooksLayout, LastBook, Main },
};
</script>

<style lang="css" scoped></style>
