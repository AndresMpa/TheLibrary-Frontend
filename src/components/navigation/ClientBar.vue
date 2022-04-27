<template>
  <v-app-bar
    app
    sticky
    color="main"
  >
    <v-toolbar-title>
      <router-menu :menu="menu" />
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <search></search>

    <shopping-bag></shopping-bag>

    <change-color></change-color>

    <router-menu :menu="account" />
  </v-app-bar>
</template>

<script>
import ShoppingBag from "../util/ShoppingBag.vue";
import ChangeColor from "../util/ChangeColor.vue";
import RouterMenu from "./RouterMenu.vue";
import Search from "./Search.vue";
export default {
  name: "ClientBar",
  data: () => ({
    menu: {
      icon: "mdi-menu",
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
      ],
    },
    account: {
      icon: "mdi-account",
      path: [
        {
          to: "Login",
          icon: "mdi-login",
          name: "Iniciar sesión",
        },
        {
          to: "Profile",
          icon: "mdi-account-cog",
          name: "Editar perfil",
        },
        {
          to: "Buying",
          icon: "mdi-close",
          name: "Cerrar sesión",
        },
      ],
    },
  }),

  components: { ChangeColor, ShoppingBag, Search, RouterMenu },
};
</script>

<style lang="css" scoped>
.fixed {
  position: fixed;
}
</style>
