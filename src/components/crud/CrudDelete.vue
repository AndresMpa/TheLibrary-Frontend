<template>
  <v-dialog
    v-model="this.$store.state.seeDelete"
    transition="dialog-top-transition"
    max-width="800"
    fullscreen
  >
    <crud-toolbar label="Eliminación de ejemplares" :utility="3"></crud-toolbar>
    <v-card dark>
      <v-card-text >
        <v-row class="pt-5" align="center" justify="center">
          <administration-panel></administration-panel>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import AdministrationPanel from '../manager/AdministrationPanel.vue';
import CrudToolbar from "./CrudToolbar.vue";
export default {
  name: "CrudDelete",
  components: { CrudToolbar, AdministrationPanel },
};
</script>

<style lang="css" scoped></style>
