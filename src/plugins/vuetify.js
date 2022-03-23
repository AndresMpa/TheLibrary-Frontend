import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#E53935",
        text: "#000000",
        icon: "#35E66D",
        secondary: "#FFCDD2",
        accent: "#3F51B5",
      },
      dark: {
        primary: "#3F51B5",
        secondary: "#FFCDD2",
        accent: "#3F51B5",
      },
    },
  },
});
