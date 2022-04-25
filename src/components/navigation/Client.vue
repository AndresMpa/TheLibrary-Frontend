<template>
  <v-menu transition="slide-x-transition" bottom right>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="secondary" v-bind="attrs" v-on="on" dark>
        <v-avatar rounded size="75">
          <img src="../../assets/logo.png" alt="UTP" />
        </v-avatar>
      </v-btn>
    </template>
    <Navigator :routes="path" />
  </v-menu>
</template>

<script>
import Navigator from "./Navigator.vue";
export default {
  components: { Navigator },
  name: "Client",
  data: () => ({
    path: [
      {
        to: "Store",
        icon: "mdi-bookshelf",
        name: "Libros",
      },
      {
        to: "News",
        icon: "mdi-seal-variant",
        name: "Novedades",
      },
      {
        to: "History",
        icon: "mdi-script",
        name: "Historial de compras",
      },
      {
        to: "Buying",
        icon: "mdi-dolly",
        name: "Compras",
      },
      {
        to: "Profile",
        icon: "mdi-account-cog",
        name: "Perfil",
      },
    ],
  }),
};
</script>

<style lang="css" scoped></style>
