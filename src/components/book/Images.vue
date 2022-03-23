<template>
  <v-img
    class="grey lighten-2 image"
    :lazy-src="preload"
    aspect-ratio="1"
    :src="book"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          color="grey lighten-5"
          indeterminate
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: "Images",
  data() {
    return {
      preload: "@/assets/default.jpg",
    };
  },
  props: {
    book: String,
  },
};
</script>

<style lang="css" scoped></style>
