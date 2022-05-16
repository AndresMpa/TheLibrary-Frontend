<template>
  <v-data-table
    :items="stock"
    :search="search"
    show-by="quantity"
    class="elevation-1"
    :headers="avalibleHeader"
  >
    <template v-slot:top>
      <v-text-field
        append-icon="mdi-magnify"
        label="Buscar ejemplares"
        v-model="search"
        class="pa-5"
        hide-details
        single-line
      ></v-text-field>
      <manager-toolbar v-if="managerConstraints" />
    </template>
    <template v-slot:item.actions="{ item }" v-if="!listConstraints">
      <v-dialog v-model="openEdit" max-width="800px">
        <edit-book-form></edit-book-form>
      </v-dialog>
      <v-icon small class="mr-2" @click="openForm(0)" v-if="!deleteConstraints">
        mdi-pencil
      </v-icon>

      <v-dialog v-model="openDelete" max-width="800px">
        <remove-book-form :book="item"></remove-book-form>
      </v-dialog>
      <v-icon small class="mr-2" @click="openForm(1)" v-if="!editConstraints">
        mdi-delete
      </v-icon>

      <a :href="item.asset">
        <v-icon small v-if="!editConstraints"> mdi-link </v-icon>
      </a>
    </template>
    <template v-slot:no-data>
      <v-btn color="main" @click="initialize" dark> Recargar </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
import EditBookForm from "./EditBookForm.vue";
import ManagerToolbar from "./ManagerToolbar.vue";
import RemoveBookForm from "./RemoveBookForm.vue";
export default {
  name: "AdministrationPanel",
  components: { ManagerToolbar, EditBookForm, RemoveBookForm },
  data: () => ({
    search: "",
    stock: [],
    /*
    title
    author
    year
    genre
    pages
    editorial
    issn
    language
    release
    status
    price
    discount
    summary
    asset
    rating
    voter
  */
    headers: [
      {
        text: "Ejemplares existentes",
        sortable: false,
        align: "start",
        value: "title",
      },
      { text: "Autor", value: "author" },
      { text: "ISSN", value: "issn" },
      { text: "Precio", value: "price" },
      { text: "Descuento", value: "discount" },
      { text: "Rating", value: "rating" },
      { text: "Opciones", value: "actions", sortable: false },
    ],
  }),
  computed: {
    openEdit() {
      return this.$store.state.openEdit;
    },
    openDelete() {
      return this.$store.state.openDelete;
    },
    managerConstraints() {
      return this.$route.name === "Manager" ? true : false;
    },
    listConstraints() {
      return this.$store.state.seeList;
    },
    editConstraints() {
      return this.$store.state.seeEdit;
    },
    deleteConstraints() {
      return this.$store.state.seeDelete;
    },
    avalibleHeader() {
      let avalible = [];
      if (this.$store.state.seeList) {
        avalible = this.headers.slice(0, this.headers.length - 1);
      } else {
        avalible = [...this.headers];
      }
      return avalible;
    },
  },
  methods: {
    initialize() {
      axios
        .get("/book/raw-list")
        .then((response) => response.data)
        .then((data) => (this.stock = data));
    },
    openForm(form) {
      this.$store.dispatch("handleCrudForms", form);
    },
  },
  created() {
    this.initialize();
  },
};
</script>

<style lang="css" scoped></style>
