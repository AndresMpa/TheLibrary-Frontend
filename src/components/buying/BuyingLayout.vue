<template>
  <v-row dense>
    <v-col md="4" sm="12">
      <bill />
    </v-col>
    <v-col md="8" sm="12">
      <bag />
    </v-col>
  </v-row>
</template>

<script>
import Bill from "./Bill.vue";
import Bag from "./Bag.vue";
export default {
  name: "BuyingLayout",
  components: { Bill, Bag },
};
</script>

<style lang="css" scoped></style>
