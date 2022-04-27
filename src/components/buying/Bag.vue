<template>
  <div class="bag">
    <v-card v-for="(item, index) in items" color="alter" :key="index" class="mb-5" dark>
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="150" tile>
          <v-img :src="item.src"></v-img>
        </v-avatar>

        <div>
          <v-card-title class="text-h5" v-text="item.title"> </v-card-title>

          <v-card-subtitle v-text="item.artist"></v-card-subtitle>
          <v-card-text>
            <div class="text-subtitle-1">Resumen</div>

            <div>
              Este libro es una guía exhaustiva para adentrarse en los
              siniestros bosques que alberga el alma del escritor, sus relatos
              expresan la soledad y la pequeñez de la condición humana en un
              universo infinito
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn small rounded class="ml-2" color="signs" @click="closeBook">
              Quitar
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Bag",
  data: () => ({
    items: [
      {
        src: "../../assets/example_2.jpg",
        title: "Antología de terror",
        artist: "H. P LoveCraft",
      },
      {
        src: "../../assets/example_2.jpg",
        title: "Antología de terror",
        artist: "H. P LoveCraft",
      },
      {
        src: "../../assets/example_2.jpg",
        title: "Antología de terror",
        artist: "H. P LoveCraft",
      },
      {
        src: "../../assets/example_2.jpg",
        title: "Antología de terror",
        artist: "H. P LoveCraft",
      },
      {
        src: "../../assets/example_2.jpg",
        title: "Antología de terror",
        artist: "H. P LoveCraft",
      },
    ],
  }),
};
</script>

<style lang="css" scoped>
.bag {
  overflow-y: auto;
  max-height: 85vh;
}
</style>
