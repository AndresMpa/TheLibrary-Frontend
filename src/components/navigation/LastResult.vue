<template>
  <v-container v-if="this.empty">
    <images :book="this.noData"></images>
  </v-container>
  <v-container fluid v-else>
    <h1 class="headline h1">Resultador para: {{ this.$store.state.search }}</h1>
    <Shelf :stock="result" />
  </v-container>
</template>

<script>
import Images from "../book/Images.vue";
import Shelf from "../book/Shelf.vue";
import axios from "axios";
export default {
  name: "LastResult",
  components: { Shelf, Images },
  data: () => ({
    noData: "https://picsum.photos/id/11/500/300",
    //"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522404%2Berror%2522&psig=AOvVaw27JMzd_EllfBwj5RC49QIU&ust=1652770623313000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNjs68K44_cCFQAAAAAdAAAAABAg",
    empty: true,
    result: [],
  }),
  methods: {
    searchQuery() {
      axios
        .post("book/search", {
          query: this.$store.state.search,
        })
        .then((res) => {
          if (res.status === 200) {
            this.empty = false;
            return res.data;
          } else {
            this.empty = true;
          }
        })
        .then((data) => {
          this.result = data;
        });
    },
  },
  created() {
    this.searchQuery();
  },
};
</script>

<style lang="css" scoped></style>
