import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#F5F5F5",
        secondary: "#1E88E5",
        accent: "#3F51B5",
        icon: "#F5F5F5",
      },
      dark: {
        primary: "#3F51B5",
        secondary: "#FFCDD2",
        accent: "#3F51B5",
      },
    },
  },
});
