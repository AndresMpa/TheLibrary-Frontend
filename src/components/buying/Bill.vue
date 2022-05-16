<template>
  <v-card class="pb-5">
    <v-card-title> Facturación </v-card-title>
    <v-card-subtitle class="pt-2">
      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Avatar" />
      </v-avatar>
      <span class="pl-2 heading">
        {{ this.$store.state.user.information.username }}
      </span>
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text>
      <v-row dense>
        <v-col>
          <h3>Producto</h3>
        </v-col>
        <v-col>
          <h3>Valor a pagar</h3>
        </v-col>
      </v-row>
      <div v-for="(product, index) in this.$store.state.user.book" :key="index">
        <v-row dense>
          <v-col> {{ product.title }} - {{ product.author }} </v-col>
          <v-col>
            <h3>
              {{ product.price }}
            </h3>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
    <v-card-text>
      <h3>Dirección de envio</h3>
      <p>
        {{ this.$store.state.user.information.address }}
      </p>
    </v-card-text>
    <v-card-text>
      <h3>Descuentos aplicables</h3>

      <v-row dense>
        <v-col>
          <h3>Producto</h3>
        </v-col>
        <v-col>
          <h3>Descuentos aplicables</h3>
        </v-col>
      </v-row>
      <div v-for="(product, index) in this.$store.state.user.book" :key="index">
        <v-row dense v-if="product.discount > 0">
          <v-col> {{ product.title }} - {{ product.author }} </v-col>
          <v-col>
            <h3>
              {{ product.discount * 100 }} %
            </h3>
          </v-col>
        </v-row>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text>
      <v-row dense>
        <v-col>
          <h2 class="d-flex">
            Valor por productos
            <span class="ml-auto"> $ {{ totalPrice }} </span>
          </h2>
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="d-flex mt-5 justify-center">
      <v-row dense>
        <v-col class="mx-auto">
          <v-btn small class="red ma-1" dark @click="clearBag">
            <v-icon> mdi-broom </v-icon>
            Cancelar
          </v-btn>
          <v-btn small class="green ma-1" dark @click="sendPay">
            <v-icon> mdi-cash-multiple </v-icon>
            Pagar
          </v-btn>
          <v-btn small class="blue ma-1" dark @click="sendMain">
            <v-icon> mdi-book-plus </v-icon>
            Agregar
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Bill",
  methods: {
    clearBag() {
      this.$store.dispatch("clearBag");
    },
    sendPay() {
      console.log("Pay");
    },
    sendMain() {
      this.$router.push({ name: "Store" }).catch(() => {
        console.log("Store");
      });
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.$store.state.user.book.forEach((item) => {
        total += item.price;
      });
      return total ? total : 0;
    },
  },
};
</script>

<style lang="css" scoped></style>
