<template>
  <v-toolbar flat>
    <v-toolbar-title>Gestión de inventario</v-toolbar-title>
    <v-divider class="mx-4" inset vertical></v-divider>
    <v-spacer></v-spacer>
    <v-dialog :v-model="this.addBookForm" max-width="800px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-on="on"
          v-bind="attrs"
          @click="openAddBookForm"
          class="mb-2"
          color="main"
          dark
        >
          Agregar ejemplar
        </v-btn>
      </template>
      <add-book-form />
    </v-dialog>
  </v-toolbar>
</template>

<script>
import AddBookForm from "./AddBookForm.vue";
export default {
  name: "ManagerToolbar",
  components: { AddBookForm },
  data: () => ({
    addBookForm: false,
  }),
  methods: {
    openAddBookForm() {
      console.log("Abrir");
    },
  },

  watch: {
    "this.$store.state.dialogs.addBook"() {
      this.addBookForm = this.$store.state.dialogs.addBook;
    },
  },
};
</script>

<style lang="css" scoped></style>
