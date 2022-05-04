<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <div class="d-flex flex-column justify-space-between align-center">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          @click="sendMain()"
          class="clickable"
          width="1020"
        >
          <v-container class="fill-height">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="8">
                <v-card class="text-center mx-auto" color="main" dark>
                  <v-card-title class="text-h4 justify-center mb-3">
                    Regresa pronto
                  </v-card-title>

                  <v-divider class="mt-5 mb-5" inset></v-divider>

                  <v-card-subtitle class="text-h4 font-weight-thin">
                    <i>"{{ currentQuote.phrase }}"</i>
                  </v-card-subtitle>
                  <v-card-text>
                    {{ currentQuote.author }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Logout",
  data: () => ({
    quotes: [
      {
        name: "Walt Disney",
        sentence:
          "Hay más tesoros en los libros que en todo el botín pirata de la isla del tesoro",
      },
      {
        name: "Miguel De Unamuno",
        sentence: "Cuanto menos se lee, más daño hace lo que se lee",
      },
      {
        name: "James Rusell Lowel",
        sentence:
          "Los libros son como abejas que llevan el polen de una inteligencia a otra",
      },
      {
        name: "Jojen Reed",
        sentence:
          "Un lector vive mil vidas antes de morir, el que no lee, solo vive una",
      },
      {
        name: "Umberto Eco",
        sentence:
          "Los libros se respetan usándolos, no dejándolos en paz",
      },
    ],
  }),
  methods: {
    genRandomIndex(length) {
      return Math.floor(Math.random() * length);
    },
    sendMain() {
      this.$store.dispatch("isManager", false);
      this.$store.dispatch("cleanUserSession", false);
      this.$router.push({ name: "Main" }).catch(() => {
        console.log("Main");
      });
    },
  },
  computed: {
    currentQuote() {
      const currentIndex = this.genRandomIndex(this.quotes.length);
      return {
        author: this.quotes[currentIndex].name,
        phrase: this.quotes[currentIndex].sentence,
      };
    },
  },
};
</script>

<style lang="css" scoped>
.clickable {
  cursor: pointer;
}
</style>
