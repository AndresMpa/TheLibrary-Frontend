<template>
  <v-card color="main" dark>
    <v-card-title>
      <span class="text-h5">Formulario de edición de ejemplares</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="bookData.title"
              label="Titulo del libro"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="bookData.author"
              label="Autor del libro"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="bookData.year"
              label="Año de publicación"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="bookData.genre"
              label="Genero del libro"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              prefix="N⁰"
              v-model="bookData.pages"
              label="Número de paginas"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="bookData.editorial"
              label="Editorial que publica"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="bookData.issn"
              label="ISSN del ejemplar"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="bookData.language"
              label="Idioma de la edición"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="bookData.release"
              label="Versión de la publicación"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="bookData.status"
              label="Estado del ejemplar"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              prefix="$"
              v-model="bookData.price"
              label="Precio del ejemplar"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              prefix="%"
              v-model="bookData.discount"
              label="Descuento aplicable"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="bookData.asset"
              label="URL a la caratula del libro"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-textarea
          filled
          auto-grow
          v-model="bookData.summary"
          label="Sinopsis del ejemplar"
        ></v-textarea>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="alert" @click="editItem(book)" dark>
        Eliminar ejemplar
      </v-btn>
      <v-btn color="alter" @click="closeEditForm()" dark> Cancelar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "EditBookForm",
  data: () => ({
    bookData: {},
  }),
  props: {
    book: Object,
  },
  methods: {
    getData() {
      this.bookData = this.book;
    },
    closeEditForm() {
      this.$store.dispatch("handleCrudForms", 0);
    },
    editItem() {
      axios
        .put("book/edit", {
          issn: this.bookData.issn,
          item: this.bookData,
        })
        .then((res) => {
          res.status === 200
            ? Swal.fire({
                title: `${this.bookData.issn} ha sido editado`,
                text: `Se modifico la información del ejemplar ${this.bookData.issn} satisfactoriamente`,
                icon: "success",
                confirmButtonText: "Confirmar",
              })
            : Swal.fire({
                title: "Error",
                text: `${this.bookData.issn} no ha sido modifico debido a un error del servidor`,
                icon: "error",
                confirmButtonText: "Confirmar",
              });
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="css" scoped></style>
