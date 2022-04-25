<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              :total-visible="6"
              color="secondary"
              :length="total"
              v-model="page"
              class="my-4"
              circle
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data: () => ({
    page: 1,
  }),
  props: {
    total: Number,
  },
  watch: {
    page(value) {
      this.$store.dispatch("updatePage", value)
    },
  },
};
</script>

<style lang="css" scoped></style>
