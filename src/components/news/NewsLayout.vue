<template>
  <section>
    <article
      v-for="(item, index) in information[this.$store.state.currentPage - 1]"
      :key="index"
    >
      <Banner :information="item"></Banner>
    </article>
    <Pagination :total="information.length"></Pagination>
  </section>
</template>

<script>
import Pagination from "../util/Pagination.vue";
import Banner from "./Banner.vue";
import axios from "axios";
export default {
  name: "NewsLayout",
  components: { Pagination, Banner },
  data: () => ({
    information: [],
  }),
  methods: {
    getNews() {
      axios
        .get("/news/test")
        .then((response) => response.data)
        .then((data) => (this.information = data));
    },
    handlePageInit() {
      this.$store.dispatch("updatePage", 1);
    },
  },
  created() {
    this.getNews();
    this.handlePageInit();
  },
  beforeDestroy() {
    this.handlePageInit();
  },
};
</script>

<style lang="css" scoped></style>
