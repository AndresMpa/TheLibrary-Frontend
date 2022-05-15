<template>
  <v-dialog
    v-model="this.$store.state.seeEdit"
    transition="dialog-top-transition"
    max-width="800"
    fullscreen
  >
    <crud-toolbar label="Edición de ejemplares" :utility="2"></crud-toolbar>
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
  name: "CrudEdit",
  components: { CrudToolbar },
};
</script>

<style lang="css" scoped></style>
