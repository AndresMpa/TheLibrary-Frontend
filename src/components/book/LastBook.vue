<template>
  <v-dialog
    v-model="this.$store.state.seeBook"
    transition="dialog-top-transition"
    max-width="800"
  >
    <v-card
      v-for="(item, index) in items"
      color="secondary"
      :key="index"
      cols="12"
      dark
    >
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="250" tile>
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
            <v-btn class="ml-2" rounded small> Reservar </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: "https://librosenlinea.co/wp-content/uploads/2020/01/antologia.jpg",
        title: "Antología de terror",
        artist: "H. P LoveCraft",
      },
    ],
  }),
};
</script>
