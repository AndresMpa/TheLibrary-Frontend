<template>
  <v-img
    src="../../assets/example.jpg"
    class="grey lighten-2 image"
    :lazy-src="preload"
    aspect-ratio="1"
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
      preload: "../../assets/default.jpg",
      //"https://raw.githubusercontent.com/Dreamland-Code/TheLibrary-Frontend/main/src/assets/default.jpg?token=GHSAT0AAAAAABQ7JU4ITJ2KDUBFVZ5EJU7KYR2V35A",
    };
  },
  props: {
    book: String,
  },
};
</script>

<style lang="css" scoped></style>
