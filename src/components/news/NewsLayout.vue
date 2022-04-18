<template>
  <section>
    <article
      v-for="(item, index) in information[this.$store.state.currentPage - 1]"
      :key="index"
    >
      <Banner :information="item" />
    </article>
    <Pagination :page="page" :total="information.length" />
  </section>
</template>

<script>
import Pagination from "../util/Pagination.vue";
import Banner from "./Banner.vue";
export default {
  name: "NewsLayout",
  components: { Pagination, Banner },
  data: () => ({
    information: [
      [
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
      ],
      [
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
      ],
      [
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
      ],

      [
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
      ],
      [
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
      ],
      [
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
      ],

      [
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
      ],
      [
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
      ],
      [
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
        {
          icon: "mdi-lock",
          color: "deep-purple accent-4",
          content:
            "Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.",
        },
      ],
    ],
  }),
};
</script>

<style lang="css" scoped></style>
