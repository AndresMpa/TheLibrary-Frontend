<template>
  <v-banner two-line>
    <v-avatar slot="icon" :color="information.color" size="40">
      <v-icon :icon="information.icon" color="white">
        {{ information.icon }}
      </v-icon>
    </v-avatar>

    {{ information.content }}

    <template v-slot:actions>
      <v-btn text color="green accent-4"> Guardar </v-btn>
      <v-btn text color="primary accent-4"> Expandir </v-btn>
    </template>
  </v-banner>
</template>

<script>
export default {
  name: "Banner",
  props: {
    information: Object,
  },
};
</script>

<style lang="css" scoped></style>
