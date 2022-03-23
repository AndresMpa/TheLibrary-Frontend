<template>
  <article>
    <div class="d-flex justify-space-around">
      <Last-Book></Last-Book>
      <Last-Book></Last-Book>
    </div>
    <Shelf />
  </article>
</template>

<script>
import LastBook from "./LastBook.vue";
import Shelf from "./Shelf.vue";
export default {
  name: "BooksLayout",
  components: { Shelf, LastBook },
};
</script>

<style lang="css" scoped></style>
