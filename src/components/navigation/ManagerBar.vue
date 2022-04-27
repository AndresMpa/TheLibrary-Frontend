<template>
  <div>
    <v-app-bar color="main" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Administración</v-toolbar-title>

      <v-spacer></v-spacer>

      <change-color
        v-if="this.$vuetify.breakpoint.name !== 'xs'"
      ></change-color>

      <router-menu :menu="account" />
    </v-app-bar>

    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      temporary
      absolute
    >
      <v-card>
        <v-card-title> UTP </v-card-title>
      </v-card>
      <navigator :routes="managerPath" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import ChangeColor from "../util/ChangeColor.vue";
import RouterMenu from "./RouterMenu.vue";
import Navigator from "./Navigator.vue";
export default {
  name: "ManagerBar",
  components: { ChangeColor, RouterMenu, Navigator },
  data() {
    return {
      drawer: false,
      managerPath: [
        {
          to: "Manager",
          icon: "mdi-manjaro",
          name: "Administración",
        },
        {
          to: "AddBook",
          icon: "mdi-plus-box-multiple",
          name: "Agregar libros",
        },
      ],
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
            to: "Logout",
            icon: "mdi-close",
            name: "Cerrar sesión",
          },
        ],
      },
    };
  },
};
</script>

<style lang="css" scoped></style>
