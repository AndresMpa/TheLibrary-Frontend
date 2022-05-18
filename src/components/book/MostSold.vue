<template>
  <v-carousel hide-delimiter-background show-arrows-on-hover height="300" cycle>
    <v-carousel-item v-for="(book, index) in books" :key="index">
      <v-parallax :src="book.asset" height="300" dark>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-card class="text-center mx-auto" color="alter" outlined dark>
              <v-card-title
                class="clickable text-h4 justify-center font-weight-thin"
                @click="seeBook(index)"
              >
                {{ book.title }}
              </v-card-title>
              <v-card-text class="clickable subheading" @click="seeBook()">
                {{ book.author }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import axios from "axios";
export default {
  name: "MostSold",
  data() {
    return {
      books: [],
    };
  },
  methods: {
    seeBook(top) {
      if (this.$store.state.user.information.feed) {
        this.$store.dispatch("seeBook");
        this.$store.dispatch("seeTopBook", top);
      }
    },
    getMostSold() {
      axios
        .get("/book/top")
        .then((response) => response.data)
        .then((data) => {
          this.books = data;
        });
    },
  },
  created() {
    this.getMostSold();
  },
};
</script>

<style lang="css" scoped>
.clickable {
  cursor: pointer;
}
</style>
