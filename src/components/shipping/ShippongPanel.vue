<template>
  <v-data-table
    :items="stock"
    :search="search"
    show-by="quantity"
    class="elevation-1"
    :headers="headers"
  >
    <template v-slot:top>
      <v-text-field
        append-icon="mdi-magnify"
        label="Buscar en el inventario de compras"
        v-model="search"
        class="pa-5"
        hide-details
        single-line
      ></v-text-field>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon class="ma-5" @click="changeStatus(item)"> mdi-truck </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="main" @click="initialize" dark> Recargar </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "ShippingPanel",
  data: () => ({
    search: "",
    stock: [],
    headers: [
      {
        text: "Codigo del ejemplar",
        sortable: false,
        align: "start",
        value: "issn",
      },
      { text: "Fecha", value: "date" },
      { text: "Comprador", value: "user" },
      { text: "Precio", value: "price" },
      { text: "Descuento", value: "discount" },
      { text: "Estado", value: "delivery" },
      { text: "Metodo", value: "method" },
      { text: "Opciones", value: "actions", sortable: false },
    ],
  }),

  methods: {
    initialize() {
      axios
        .get("/story/raw")
        .then((response) => response.data)
        .then((data) => (this.stock = data));
    },
    changeStatus(item) {
      axios
        .post("/story/update", {
          status: item.delivery,
          username: item.user,
          issn: item.issn,
        })
        .then((response) => response.data)
        .then((data) => {
          if (data.message === "Historial actualizado") {
            Swal.fire({
              title: "Historial actualizado",
              text: `Se ha actualizado el registro de ${item.issn}`,
              icon: "success",
              confirmButtonText: "Entendido",
            });
          }
        });
      this.initialize();
      this.$forceUpdate();
    },
  },
  created() {
    this.initialize();
  },
};
</script>

<style lang="css" scoped></style>
