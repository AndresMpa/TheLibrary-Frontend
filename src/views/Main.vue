<template>
  <main>
    <Bar />
    <content-loader />
  </main>
</template>

<script>
import Bar from "../components/navigation/Bar.vue";
import ContentLoader from "../components/util/ContentLoader.vue";
export default {
  name: "Main",
  components: { Bar, ContentLoader },

  methods: {
    sendMain() {
      this.$router.push({ name: "Store" }).catch(() => {
        console.log("Home");
      });
    },
  },
  //Hooks
  created() {
    this.sendMain();
  },
};
</script>

<style lang="css" scoped></style>
