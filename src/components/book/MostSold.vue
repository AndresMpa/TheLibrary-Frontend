<template>
  <v-carousel hide-delimiter-background show-arrows-on-hover height="300" cycle>
    <v-carousel-item v-for="(book, index) in books" :key="index">
      <v-parallax :src="book.img" height="300" dark>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="clickable text-h4 font-weight-thin mb-4" @click="seeBook()">{{ book.name }}</h1>
            <h4 class="clickable subheading" @click="seeBook()">{{ book.author }}</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "MostSold",
  data() {
    return {
      books: [
        {
          img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
          name: "Antologia de Terror",
          author: "LoveCraft",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
          name: "Mago de oz el mundo perdido",
          author: "Oscar de la Frielda",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
          name: "Como torturar estudiantes",
          author: "Felipe Castillo",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
          name: "Caminar por las cuerdas de la vida, tomo 1",
          author: "Per Turnum",
        },
      ],
    };
  },
  methods: {
    seeBook() {
      this.$store.dispatch("seeBook");
    },
  },
};
</script>

<style lang="css" scoped>
.clickable {
  cursor: pointer;
}
</style>
