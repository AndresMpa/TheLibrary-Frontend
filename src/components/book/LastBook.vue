<template>
  <v-dialog
    v-model="this.$store.state.seeBook"
    transition="dialog-top-transition"
    max-width="800"
    persistent
  >
    <v-card
      v-for="(item, index) in items"
      color="alter"
      :key="index"
      cols="12"
      dark
    >
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="250" tile>
          <v-img :src="item.asset"></v-img>
        </v-avatar>

        <div>
          <v-card-title class="text-h5" v-text="item.title"> </v-card-title>

          <v-card-subtitle v-text="item.author"></v-card-subtitle>
          <v-card-text>
            <div class="text-subtitle-1">Resumen</div>

            <div>
              {{ item.description }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn class="ml-2" rounded small color="alert"> Reservar </v-btn>
            <v-btn class="ml-2" rounded small color="signs" @click="closeBook">
              Cerrar
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "LastBook",
  data: () => ({
    counter: 0,
    items: [],
  }),
  methods: {
    getOpenedBook() {
      axios
        .post("/book/one-book", {
          item: this.$store.state.seeing,
        })
        .then((response) => response.data)
        .then((data) => (this.items = data));
    },
    closeBook() {
      this.$store.dispatch("seeBook");
    },
  },
  computed: {
    seeing() {
      return this.$store.state.seeBook;
    },
  },
  watch: {
    seeing() {
      if (this.$store.state.seeBook && this.counter === 0) {
        this.getOpenedBook();
        this.counter++;
      } else {
        this.counter = 0;
      }
    },
  },
};
</script>
