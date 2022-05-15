<template>
  <v-dialog
    v-model="this.$store.state.seeAdd"
    transition="dialog-top-transition"
    max-width="800"
    fullscreen
  >
    <crud-toolbar label="Agregar ejemplares" :utility="0"></crud-toolbar>
    <v-card>
      <v-card-text >
        <v-row class="pt-5" align="center" justify="center">
          <add-book-form></add-book-form>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import AddBookForm from "../manager/AddBookForm.vue";
import CrudToolbar from "./CrudToolbar.vue";
export default {
  name: "CrudAdd",
  components: { CrudToolbar, AddBookForm },
};
</script>

<style lang="css" scoped></style>
