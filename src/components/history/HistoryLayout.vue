<template>
  <v-row dense>
    <v-col cols="12">
      <v-card class="mx-auto" color="main" dark>
        <v-card-title class="text-h5">
          Historial de compras de {{ this.$store.state.user }}
        </v-card-title>
        <v-card-text>
          Aquí puedes consultas tu hisorial de compras
        </v-card-text>
        <v-card-actions>
          <v-btn small class="yellow darken-3">
            <v-icon> mdi-script-text </v-icon>
            Todos
          </v-btn>
          <v-btn small class="red darken-1">
            <v-icon> mdi-cancel </v-icon>
            Cancelados
          </v-btn>
          <v-btn small class="green darken-1">
            <v-icon> mdi-check-bold </v-icon>
            Entregados
          </v-btn>
          <v-btn small class="blue accent-1">
            <v-icon> mdi-truck-fast </v-icon>
            Regresados
          </v-btn>
          <v-btn small class="purple darken-1">
            <v-icon> mdi-lock-clock </v-icon>
            Reservados
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col class="mx-auto">
      <div class="font-weight-bold ml-8 mb-2">Historico</div>
      <history-line />
    </v-col>
  </v-row>
</template>

<script>
import HistoryLine from "./HistoryLine.vue";
export default {
  components: { HistoryLine },
  name: "HistoryLayout",
};
</script>

<style lang="css" scoped></style>
