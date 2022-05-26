<template>
  <v-card color="main" dark>
    <v-card-title>
      <span class="text-h5">Crear noticias</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-combobox :label="optionsLabel" :items="options" v-model="topic">
              <template v-slot:item="{ item }">
                {{ item[0] }}
              </template>
              <template v-slot:selection="data">
                {{ data.item[0] }}
              </template>
            </v-combobox>
          </v-col>
          <v-col cols="4">
            <template slot:label>
              ¿Te gusta este icono para el contenido?
            </template>
            <v-avatar>
              <v-icon>
                {{ topic[1] }}
              </v-icon>
            </v-avatar>
          </v-col>
        </v-row>

        <v-textarea
          filled
          auto-grow
          v-model="newsData.content"
          label="Contenido de la noticia"
        ></v-textarea>

        <div class="d-flex align-center">
          <div>
            <h3 class="mb-2 text">Escoge un color</h3>
            <v-color-picker
              hide-canvas
              hide-inputs
              hide-sliders
              show-swatches
              hide-mode-switch
              swatches-max-height="100"
              v-model="color"
              mode="hexa"
            >
            </v-color-picker>
          </div>
        </div>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="alert" @click="addNews()" dark> Agregar noticia </v-btn>
      <v-btn color="alter" @click="clear()" dark> Cancelar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "NewsForm",
  data: () => ({
    optionsLabel: "Agregar el tipo de contenido de la noticia",
    options: [
      ["Nuevo, nuevo, nuevo", "mdi-new-box"],
      ["Algo nuevo para nosotros", "mdi-web"],
      ["Yeiii, estamos celebrando", "mdi-party-popper"],
      ["Actualización de seguridad", "mdi-lock"],
    ],
    topic: [],
    color: "",
    newsData: {},
  }),
  methods: {
    clear() {
      this.topic = [];
      this.newsData = {};
    },
    addNews() {
      this.newsData.color = this.color;
      this.newsData.icon = this.topic[1];
      axios
        .post("/news/add", this.newsData)
        .then((response) => response.data)
        .then((data) => {
          if (data) {
            Swal.fire({
              title: "Nueva noticia creada",
              text: "Ya debes poder ver la nueva noticia, revisa en la pagina principal",
              icon: "success",
              confirmButtonText: "Entendido",
            });
          } else {
            Swal.fire({
              title: "Ooops...",
              text: "Parece que no se ha podido crear la noticia... Intentalo de nuevo",
              icon: "error",
              confirmButtonText: "Entendido",
            });
          }
        });
    },
  },
};
</script>

<style lang="css" scoped></style>
