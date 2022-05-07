<template>
  <v-container fluid>
    <h1 class="headline h1">Resultador para: {{ this.$store.state.search }}</h1>
    <Shelf :stock="result" />
  </v-container>
</template>

<script>
import Shelf from "../book/Shelf.vue";
export default {
  name: "LastResult",
  components: { Shelf },
  data: () => ({
    result: [],
  }),
  methods: {
    searchQuery() {
      this.result = [
        [
          {
            rating: 4.5,
            votes: "450",
            title: "El príncipe",
            author: "Nicolás Maquiavelo",
            asset: "https://picsum.photos/id/11/500/300",
            summary:
              "El príncipe es un tratado político del siglo XVI del diplomático y teórico político italiano Nicolás Maquiavelo. Según la correspondencia de Maquiavelo, una versión parece haber sido distribuida en 1513, usando el título en latín De Principatibus",
          },
        ],
      ];
    },
  },
  created() {
    this.searchQuery();
  },
};
</script>

<style lang="css" scoped></style>
