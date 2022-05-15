<template>
  <v-dialog
    v-model="this.$store.state.seeAdd"
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
    {{ this.$store.state.seeAdd }}
    </v-card>
  </v-dialog>
</template>

<script>
//import axios from "axios";
export default {
  name: "CrudAdd",
  data: () => ({
    counter: 0,
    items: [],
  }),
  methods: {},
  computed: {
    seeing() {
      return this.$store.state.seeAdd;
    },
  },
  watch: {
    seeing() {
      if (this.$store.state.seeAdd) {
        console.log("Add");
      }
    },
  },
};
</script>

<style lang="css" scoped></style>
