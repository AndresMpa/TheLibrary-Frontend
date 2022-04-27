<template>
  <v-list nav dense>
    <div v-for="(path, index) in routes" :key="index">
      <v-list-item :to="{ name: path.to }">
        <v-list-item-action>
          <v-icon>{{ path.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> {{ path.name }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-list>
</template>
<script>
export default {
  name: "Navigator",
  props: {
    routes: Array,
  },
};
</script>
<style lang="css"></style>
