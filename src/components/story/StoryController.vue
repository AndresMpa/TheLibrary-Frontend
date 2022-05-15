<template>
  <v-card class="mx-auto" color="alter" dark>
    <v-card-title class="text-h5">
      Historial de compras de {{ this.$store.state.user.name }}
    </v-card-title>
    <v-card-text> Aquí puedes consultas tu hisorial de compras </v-card-text>
    <v-card-actions class="d-flex">
      <v-row dense>
        <v-col>
          <v-btn small class="yellow darken-3 ma-2" @click="changeStory(0)">
            <v-icon> mdi-script-text </v-icon>
            Todos
          </v-btn>
          <v-btn small class="red darken-1 ma-2" @click="changeStory(1)">
            <v-icon> mdi-cancel </v-icon>
            Cancelados
          </v-btn>
          <v-btn small class="green darken-1 ma-2" @click="changeStory(2)">
            <v-icon> mdi-check-bold </v-icon>
            Entregados
          </v-btn>
          <v-btn small class="blue accent-1 ma-2" @click="changeStory(3)">
            <v-icon> mdi-truck-fast </v-icon>
            Regresados
          </v-btn>
          <v-btn small class="purple darken-1 ma-2" @click="changeStory(4)">
            <v-icon> mdi-lock-clock </v-icon>
            Reservados
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "StoryController",
  methods: {
    changeStory(line) {
      this.$store.dispatch("changeLine", line);
    },
  },
};
</script>

<style lang="css" scoped>
.controller {
  overflow-wrap: break-word;
}
</style>
