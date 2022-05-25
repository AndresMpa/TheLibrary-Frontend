<template>
  <v-timeline align-top dense>
    <v-timeline-item
      v-for="(item, index) in items"
      :color="item.status"
      :key="index"
      small
    >
      <div>
        <span :class="`headline ${item.status}--text`">
          {{ item.title }}
        </span>
        <p
          :class="`font-weight-bold ${item.status}--text`"
          v-text="item.date"
        ></p>
      </div>
      <div class="py-4">
        <p class="headline font-weight-light mb-4">
          {{ item.author }}
        </p>
        <p class="subtitle-1 font-weight-light">
          Pagado mediante: {{ item.method }}
        </p>
        <p class="subtitle-2 font-weight-light">Entrega: {{ item.delivery }}</p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import axios from "axios";
export default {
  name: "StoryLine",
  data: () => ({
    items: [],
  }),
  methods: {
    getAllStories() {
      axios
        .post("/story/all", {
          username: this.$store.state.user.information.username,
        })
        .then((response) => response.data)
        .then((data) => (this.items = data));
    },
    getCancelledStories() {
      axios
        .post("/story/cancelled", {
          username: this.$store.state.user.information.username,
        })
        .then((response) => response.data)
        .then((data) => (this.items = data));
    },
    getDeliveredStories() {
      axios
        .post("/story/delivered", {
          username: this.$store.state.user.information.username,
        })
        .then((response) => response.data)
        .then((data) => (this.items = data));
    },
    getReturnedStories() {
      axios
        .post("/story/returned", {
          username: this.$store.state.user.information.username,
        })
        .then((response) => response.data)
        .then((data) => (this.items = data));
    },
    getReserves() {
      axios
        .post("/story/reserves", {
          username: this.$store.state.user.information.username,
        })
        .then((response) => response.data)
        .then((data) => (this.items = data));
    },
  },
  computed: {
    storyLine() {
      return this.$store.state.storyLine;
    },
  },
  watch: {
    storyLine() {
      switch (this.$store.state.storyLine) {
        case 1: {
          this.getCancelledStories();
          break;
        }
        case 2: {
          this.getDeliveredStories();
          break;
        }
        case 3: {
          this.getReturnedStories();
          break;
        }
        case 4: {
          this.getReserves();
          break;
        }
        default: {
          this.getAllStories();
          break;
        }
      }
    },
  },
  created() {
    this.getAllStories();
  },
};
</script>

<style lang="css" scope></style>
