<template>
  <v-banner two-line>
    <v-avatar slot="icon" :color="information.color" size="40">
      <v-icon :icon="information.icon" color="white">
        {{ information.icon }}
      </v-icon>
    </v-avatar>

    {{ information.content }}
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
