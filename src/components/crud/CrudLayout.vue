<template>
  <v-container fluid>
    <v-row
      v-for="(item, index) in cardInfo"
      justify="center"
      align="center"
      :key="index"
    >
      <crud-card
        :info="item"
        class="clickable"
        @click="handleCrud(index)"
      ></crud-card>
    </v-row>
  </v-container>
</template>

<script>
import CrudAdd from "./CrudAdd.vue";
import CrudCard from "./CrudCard.vue";
import CrudEdit from "./CrudEdit.vue";
import CrudList from "./CrudList.vue";
import CrudDelete from "./CrudDelete.vue";
export default {
  name: "CrudLayout",
  components: { CrudCard, CrudAdd, CrudList, CrudEdit, CrudDelete },
  data: () => ({
    cardInfo: [
      {
        color: "detail",
        title: "Agregar",
        description: "Agregar ejemplares individuales al sistema",
      },
      {
        color: "alter",
        title: "Listar",
        description:
          "Listas las existencias de ejemplares para material existente",
      },
      {
        color: "alert",
        title: "Editar",
        description: "Edición de la información de los ejemplares existentes",
      },

      {
        color: "signs",
        title: "Eliminar",
        description:
          "Eliminar ejemplares existentes para la vista de los usuarios",
      },
    ],
  }),
  methods: {
    handleCrud(utility) {
      this.$store.dispatch("seeCrud", utility);
    },
  },
};
</script>

<style lang="css" scoped>
.clickable {
  cursor: pointer;
}
</style>
