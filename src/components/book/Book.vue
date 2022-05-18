<template>
  <v-card :loading="loading" class="mx-auto my-3" max-width="350">
    <template slot="progress">
      <v-progress-linear
        indeterminate
        color="main"
        height="10"
      ></v-progress-linear>
    </template>

    <Images :book="information.asset"></Images>

    <v-card-title>
      {{ information.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ information.author }}
    </v-card-subtitle>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          half-icon="mdi-heart-half-full"
          empty-icon="mdi-heart-outline"
          full-icon="mdi-heart"
          half-increments
          dense
          :value="information.rating"
          color="alert"
          size="14"
          readonly
        ></v-rating>

        <div
          class="red--text d-block ml-auto"
          v-if="information.discount > 0"
        >
          (-{{ information.discount * 100 }}% off)
        </div>
      </v-row>
    </v-card-text>

    <v-expansion-panels popout>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          Resumen
          <template v-slot:actions>
            <v-icon color="detail"> mdi-bookshelf</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ information.summary }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="alter" text @click="buy(information)"> Comprar </v-btn>
      <v-btn color="main" text @click="reserve(information)"> Reservar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Images from "./Images.vue";
import Swal from "sweetalert2";
export default {
  name: "Book",
  components: { Images },
  data: () => ({
    loading: false,
  }),
  props: {
    information: Object,
  },
  methods: {
    validateAccount() {
      if (this.$store.state.user.information.username === undefined) {
        this.$router.push({ name: "Login" }).catch(() => {
          console.log("Login");
        });
      }
    },
    buy(item) {
      this.validateAccount();
      this.loading = true;
      this.$store.dispatch("handleShoppingBag", [item, "buy"]);
      setTimeout(() => (this.loading = false), 2000);
    },
    reserve(item) {
      this.validateAccount();
      this.loading = true;
      if (this.$store.state.user.reserved.length < 10) {
        this.$store.dispatch("handleShoppingBag", [item, "reserved"]);
      } else {
        Swal.fire({
          title: "¡Demasiadas reservas!",
          text: "Ya has reservado demasiado libros, si deseas reservar más ejemplares compra o elimina algunas reversas",
          icon: "error",
          confirmButtonText: "Entendido",
        });
      }
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style lang="css" scoped></style>
