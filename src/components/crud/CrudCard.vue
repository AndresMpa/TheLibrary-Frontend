<template>
  <v-col cols="12">
    <v-card class="text-center mx-auto" :color="info.color" outlined dark>
      <v-card-title class="text-h4 justify-center">
        {{ info.title }}
      </v-card-title>
      <v-card-text class="subheading">
        {{ info.description }}
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CrudCard",
  props: {
    info: Object,
  },
};
</script>

<style lang="css" scoped></style>
