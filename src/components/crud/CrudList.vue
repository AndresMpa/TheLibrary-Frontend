<template>
  <v-dialog
    v-model="this.$store.state.seeList"
    transition="dialog-top-transition"
    max-width="800"
    fullscreen
  >
    <crud-toolbar label="Listado de libros" :utility="1"></crud-toolbar>
    <v-card>
      <v-card-text>
        <v-row class="pt-5" align="center" justify="center">
          <add-book-form></add-book-form>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import CrudToolbar from "./CrudToolbar.vue";
export default {
  name: "CrudList",
  components: { CrudToolbar },
};
</script>

<style lang="css" scoped></style>
