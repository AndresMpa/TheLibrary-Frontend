<template>
  <v-row dense>
    <v-col cols="12">
      <story-controller />
    </v-col>
    <v-col class="mx-auto">
      <div class="font-weight-bold ml-8 mb-2">Historico</div>
      <story-line />
    </v-col>
  </v-row>
</template>

<script>
import StoryController from "./StoryController.vue";
import StoryLine from "./StoryLine.vue";
export default {
  name: "StoryLayout",
  components: { StoryLine, StoryController },
};
</script>

<style lang="css" scoped></style>
