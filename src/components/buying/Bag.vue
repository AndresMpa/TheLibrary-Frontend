<template>
  <div class="bag">
    <v-card
      v-for="(item, index) in this.$store.state.user.book"
      color="alter"
      :key="index"
      class="mb-5"
      dark
    >
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="150" tile>
          <v-img :src="item.src"></v-img>
        </v-avatar>

        <div>
          <v-card-title class="text-h5" v-text="item.title"> </v-card-title>

          <v-card-subtitle v-text="item.author"></v-card-subtitle>
          <v-card-text>
            <div class="text-subtitle-1">Resumen</div>

            <div>
              {{ item.summary }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              small
              rounded
              class="ml-2"
              color="signs"
              @click="removeBook(index)"
            >
              Quitar
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Bag",
  methods: {
    removeBook(book) {
      this.$store.dispatch("removeBookFromBag", book)
    },
  },
};
</script>

<style lang="css" scoped>
.bag {
  overflow-y: auto;
  max-height: 85vh;
}
</style>
