<template>
  <v-carousel hide-delimiter-background show-arrows-on-hover height="300" cycle>
    <v-carousel-item v-for="(book, index) in books" :key="index">
      <v-parallax :src="book.img" height="300" dark>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-card class="text-center mx-auto" color="alter" outlined dark>
              <v-card-title
                class="clickable text-h4 justify-center font-weight-thin"
                @click="seeBook()"
              >
                {{ book.name }}
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
export default {
  name: "MostSold",
  data() {
    return {
      books: [
        {
          //img: "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/parallax.jpg?token=GHSAT0AAAAAABQ7JU4IZO3WME5V2SH3DSHSYS4WGKA",
          img: "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          name: "Antologia de Terror",
          author: "LoveCraft",
        },
        {
          //img: "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/parallax.jpg?token=GHSAT0AAAAAABQ7JU4IZO3WME5V2SH3DSHSYS4WGKA",
          img: "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          name: "Mago de oz el mundo perdido",
          author: "Oscar de la Frielda",
        },
        {
          //img: "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/parallax.jpg?token=GHSAT0AAAAAABQ7JU4IZO3WME5V2SH3DSHSYS4WGKA",
          img: "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
          name: "Como torturar estudiantes",
          author: "Felipe Castillo",
        },
        {
          //img: "https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/parallax.jpg?token=GHSAT0AAAAAABQ7JU4IZO3WME5V2SH3DSHSYS4WGKA",
          img: "https://www.latercera.com/resizer/LTN5QsS3yo6u_oNmub2HNEcv-f4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3QOVU47ZLRATTJQREKLUL5BBRA.jpg",
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
