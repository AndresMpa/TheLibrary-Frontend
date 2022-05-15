<template>
  <v-data-table
    :items="stock"
    :search="search"
    :headers="avalibleHeader"
    show-by="quantity"
    class="elevation-1"
    hide-default-footer
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
      <v-icon small class="mr-2" @click="editItem(item)" v-if="!deleteConstraints"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)" v-if="!editConstraints"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="main" @click="initialize" dark> Recargar </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import ManagerToolbar from "./ManagerToolbar.vue";
export default {
  name: "AdministrationPanel",
  components: { ManagerToolbar },
  data: () => ({
    search: "",
    stock: [],
    headers: [
      {
        text: "Ejemplares existentes",
        sortable: false,
        align: "start",
        value: "name",
      },
      { text: "Existencias", value: "quantity" },
      { text: "Opciones", value: "actions", sortable: false },
    ],
  }),
  computed: {
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
      this.stock = [
        {
          name: "El coronel no tiene quien le escriba",
          quantity: 4,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
  },
  created() {
    this.initialize();
  },
};
</script>

<style lang="css" scoped></style>
