<template>
  <v-container fluid >
    <v-slide-y-transition mode="out-in">
      <router-view />
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: "ContentLoader",
};
</script>
