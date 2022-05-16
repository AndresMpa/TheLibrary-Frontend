<template>
  <v-card color="main" dark>
    <v-card-title>
      <span class="text-h5">Formulario de eliminación de ejemplares</span>
    </v-card-title>
    <v-card-text>
      ¿Estas seguro de que deseas eliminar el ejemplar {{ book }}?
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
export default {
  name: "RemoveBookForm",
  props: {
    book: Object,
  },
  methods: {
    deleteItem(item) {
      console.log(item);
    },
    closeDeleteForm() {
      this.$store.dispatch("handleCrudForms", 1);
    },
  },
};
</script>

<style lang="css" scoped></style>
