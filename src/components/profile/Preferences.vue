<template>
  <div>
    <v-row>
      <v-col>
        <v-combobox
          :label="preferenceLabel"
          v-model="genders"
          :items="items"
          multiple
          chips
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :disabled="data.disabled"
              :input-value="data.selected"
              :key="JSON.stringify(data.item)"
              @click:close="data.parent.selectItem(data.item)"
            >
              <v-avatar
                left
                class="accent white--text"
                v-text="data.item.slice(0, 1).toUpperCase()"
              ></v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-switch color="primary" v-model="news">
          <template v-slot:label> Suscribirse al sistema de noticias </template>
        </v-switch>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Preferences",
  data() {
    return {
      news: false,
      genders: [],
      items: ["Programming", "Design", "Vue", "Vuetify"],
    };
  },
  computed: {
    preferenceLabel() {
      return this.$route.name === "Profile"
        ? "Generos favoritos"
        : "Escoga algunos generos";
    },
  },
};
</script>

<style lang="css" scoped></style>
