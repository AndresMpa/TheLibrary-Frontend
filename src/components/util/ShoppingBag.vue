<template>
  <v-btn icon @click="openBag" dark>
    <v-icon v-if="!this.$store.state.shoppingBag"> mdi-shopping </v-icon>
    <v-icon v-else> mdi-shopping-search </v-icon>
  </v-btn>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "ShoppingBag",
  methods: {
    openBag() {
      if (this.$store.state.user.information.username === undefined) {
        Swal.fire({
          title: "Debes iniciar sesión",
          text: "Hemos detectado que deseas iniciar una compra pero no tiene una sesión activa, por favor ingresa primero para poder gestionar tus compras",
          icon: "info",
          confirmButtonText: "Entendido",
        });
        this.$router.push({ name: "Login" }).catch(() => {
          console.log("Login");
        });
      } else {
        this.$store.dispatch(
          "changeShoppingBag",
          !this.$store.state.shoppingBag
        );
      }
    },
  },
};
</script>

<style lang="css" scoped></style>
