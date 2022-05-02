<template>
  <v-data-table
    :items="stock"
    :headers="headers"
    show-by="quantity"
    class="elevation-1"
  >
    <template v-slot:top>
      <manager-toolbar />
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
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
    stock: [],
    headers: [
      {
        text: "Ejemplares existentes",
        sortable: false,
        align: "start",
        value: "name",
      },
      { text: "Existencias", value: "quantity" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
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
