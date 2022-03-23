<template>
  <v-card :loading="loading" class="mx-auto my-3" max-width="350">
    <template slot="progress">
      <v-progress-linear
        color="primary"
        indeterminate
        height="10"
      ></v-progress-linear>
    </template>

    <Images :book="information.asset"></Images>

    <v-card-title>
      {{ information.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ information.author }}
    </v-card-subtitle>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="information.rating"
          empty-icon="mdi-heart-outline"
          half-icon="mdi-heart-half-full"
          full-icon="mdi-heart"
          half-increments
          color="primary"
          size="14"
          readonly
          dense
        ></v-rating>

        <div class="grey--text d-block ml-auto">
          {{ information.rating }} ({{ information.votes }})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">Resumen</div>

      <div>
        {{ information.summary }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="primary lighten-2" text @click="reserve"> Reservar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Images from "./Images.vue";
export default {
  name: "Book",
  components: { Images },
  data: () => ({
    loading: false,
  }),
  props: {
    information: Object,
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style lang="css" scoped></style>
