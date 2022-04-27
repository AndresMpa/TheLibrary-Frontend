<template>
  <v-main>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <router-view />
      </v-slide-y-transition>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "ContentLoader",
};
</script>
