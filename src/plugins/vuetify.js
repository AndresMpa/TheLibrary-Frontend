import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#F5F5F5",
        main: "#1E88E5",
        alter: "#994B23",
        detail: "#E66929",
        signs: "#997E05",
        alert: "#E6BF12",
      },
      dark: {
        primary: "#F5F5F5",
        main: "#66BB6A",
        alter: "#65476E",
        detail: "#A970BA",
        signs: "#6E3C31",
        alert: "#BA6D5D",
      },
    },
  },
});
