<template>
  <v-row dense>
    <v-col cols="12">
      <history-controller />
    </v-col>
    <v-col class="mx-auto">
      <div class="font-weight-bold ml-8 mb-2">Historico</div>
      <history-line />
    </v-col>
  </v-row>
</template>

<script>
import HistoryController from "./HistoryController.vue";
import HistoryLine from "./HistoryLine.vue";
export default {
  components: { HistoryLine, HistoryController },
  name: "HistoryLayout",
};
</script>

<style lang="css" scoped></style>
