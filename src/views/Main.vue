<template>
  <main>
    <Bar></Bar>
    <Books-Layout/>
  </main>
</template>

<script>
import BooksLayout from '../components/book/BooksLayout.vue';
import Bar from '../components/navigation/Bar.vue';
export default {
  name: "Main",
  components: { Bar, BooksLayout },
};
</script>

<style lang="css" scoped></style>
