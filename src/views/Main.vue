<template>
  <main v-if="!this.$store.state.manager">
    <ClientBar />
    <content-loader />
  </main>
  <main v-else>
    <content-loader />
  </main>
</template>

<script>
import ContentLoader from "../components/util/ContentLoader.vue";
import ClientBar from "../components/navigation/ClientBar.vue";
export default {
  name: "Main",
  components: { ClientBar, ContentLoader },

  methods: {
    sendMain() {
      if (!this.$store.state.manager) {
        this.$router.push({ name: "Store" }).catch(() => {
          console.log("Home");
        });
      } else {
        this.$router.push({ name: "Manager" }).catch(() => {
          console.log("Manager");
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
