<template>
  <main v-if="this.$store.state.permissions === 1">
    <manager-bar />
    <content-loader />
  </main>
  <main v-else>
    <ClientBar />
    <content-loader />
  </main>
</template>

<script>
import ContentLoader from "../components/util/ContentLoader.vue";
import ManagerBar from "../components/navigation/ManagerBar.vue";
import ClientBar from "../components/navigation/ClientBar.vue";
export default {
  name: "Main",
  components: { ClientBar, ContentLoader, ManagerBar },
  methods: {
    sendMain() {
      if (this.$store.state.permissions === 1) {
        this.$router.push({ name: "Manager" }).catch(() => {
          console.log("Manager");
        });
      } else {
        this.$router.push({ name: "Store" }).catch(() => {
          console.log("Home");
        });
      }
    },
  },
  //Hooks
  created() {
    this.sendMain();
  },
};
</script>

<style lang="css" scoped></style>
