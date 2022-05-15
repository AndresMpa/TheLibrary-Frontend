<template>
  <v-col cols="12">
    <v-card
      dark
      outlined
      :color="info.color"
      @click="handleCrud(util)"
      class="text-center mx-auto"
    >
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
  methods: {
    handleCrud(utility) {
      this.$store.dispatch("seeCrud", utility);
    },
  },
  props: {
    info: Object,
    util: Number,
  },
};
</script>

<style lang="css" scoped></style>
