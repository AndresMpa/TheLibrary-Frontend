<template>
  <v-list dense>
    <div v-for="(route, index) in routes" :key="index">
      <v-list-item :to="{ name: route.to }">
        <v-list-item-action>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> {{ route.name }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-list>
</template>
<script>
export default {
  name: "Navigator",
  data: () => ({}),
  props: {
    routes: Object,
  },
};
</script>
<style lang="css"></style>
