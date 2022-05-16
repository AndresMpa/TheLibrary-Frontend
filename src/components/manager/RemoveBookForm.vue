<template>
  <v-card color="main" dark>
    <v-card-title>
      <span class="text-h5">Formulario de eliminación de ejemplares</span>
    </v-card-title>
    <v-card-text>
      ¿Estas seguro de que deseas eliminar el ejemplar {{ book.title }}({{
        book.issn
      }})?
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="alert" @click="deleteItem(book)" dark>
        Eliminar ejemplar
      </v-btn>
      <v-btn color="alter" @click="closeDeleteForm()" dark> Cancelar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "RemoveBookForm",
  props: {
    book: Object,
  },
  methods: {
    deleteItem(item) {
      axios
        .delete("book/remove", {
          issn: item.issn,
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "Eliminación exitosa",
              text: `Se eliminó el ejemplar ${item.issn}`,
              icon: "success",
              confirmButtonText: "Confirmar",
            });
          } else {
            Swal.fire({
              title: "Error",
              text: `El ejemplar ${item} no ha podido ser eliminado`,
              icon: "error",
              confirmButtonText: "Confirmar",
            });
          }
        });
      this.closeDeleteForm();
    },
    closeDeleteForm() {
      this.$store.dispatch("handleCrudForms", 1);
    },
  },
};
</script>

<style lang="css" scoped></style>
