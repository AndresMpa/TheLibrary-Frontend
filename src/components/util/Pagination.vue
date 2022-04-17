<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              :length="15"
              class="my-4"
              circle
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="css" scoped></style>
