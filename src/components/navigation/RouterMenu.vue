<template>
  <v-menu transition="slide-x-transition" right>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" dark>
        <v-icon> {{ menu.icon }} </v-icon>
      </v-btn>
    </template>
    <Navigator :routes="menu.path" />
  </v-menu>
</template>

<script>
import Navigator from "./Navigator.vue";
export default {
  name: "RouterMenu",
  components: { Navigator },
  props: {
    menu: Object,
  },
};
</script>

<style lang="css" scoped></style>
