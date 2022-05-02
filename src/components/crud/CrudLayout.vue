<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="text-center mx-auto" color="detail" outlined dark>
          <v-card-title class="text-h4 justify-center">
            Agregar
          </v-card-title>
          <v-card-text class="subheading">
            Agregar ejemplares individuales al sistema
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="text-center mx-auto" color="alter" outlined dark>
          <v-card-title class="text-h4 justify-center">
            Listar
          </v-card-title>
          <v-card-text class="subheading">
            Listas las existencias de ejemplares para material existente
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="text-center mx-auto" color="signs" outlined dark>
          <v-card-title class="text-h4 justify-center">
            Eliminar
          </v-card-title>
          <v-card-text class="subheading">
            Eliminar ejemplares existentes para la vista de los usuarios
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="text-center mx-auto" color="alert" outlined dark>
          <v-card-title class="text-h4 justify-center">
            Editar
          </v-card-title>
          <v-card-text class="subheading">
            Edición de la información de los ejemplares existentes
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CrudLayout",
  methods: {
    seeBook() {
      this.$store.dispatch("seeBook");
    },
  },
};
</script>

<style lang="css" scoped></style>
