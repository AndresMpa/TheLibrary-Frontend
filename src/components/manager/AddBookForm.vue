<template>
  <v-card color="main" dark>
    <v-card-title>
      <span class="text-h5">Formulario de ingreso de ejemplares</span>
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
        </v-row>

        <v-textarea
          filled
          auto-grow
          v-model="bookData.summary"
          label="Sinopsis del ejemplar"
        ></v-textarea>

        <v-file-input
          chips
          counter
          show-size
          v-model="cover"
          accept="image/*"
          label="Caratula del libro"
        ></v-file-input>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="alert" @click="save()" dark>
        Eliminar ejemplar
      </v-btn>
      <v-btn color="alter" @click="clear()" dark> Cancelar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AddBookForm",
  data: () => ({
    cover: undefined,
    bookData: {},
  }),
  methods: {
    clear() {
      this.name = "";
    },
    save() {
      console.log("Make something");
      this.uploadCover();
    },
    uploadCover() {
      let formData = new FormData();
      formData.append("title", this.cover.name);
      formData.append("asset", this.cover);
      const URL = "end/point";
      const file = formData;

      axios
        .post(URL, file, {
          headers: {
            "Content-Type": "multipart/form-data; boundary=*",
          },
        })
        .then((res) => {
          console.log(res);
          this.folderToBeLoad = undefined;
        })
        .catch((err) => {
          console.error("Ocurrio un error");
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css" scoped></style>
