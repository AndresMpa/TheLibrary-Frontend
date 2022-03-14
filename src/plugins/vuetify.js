import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#E53935",
        secondary: "#FFCDD2",
        accent: "#3F51B5",
      },
      dark: {
        primary: "#263238",
        secondary: "#FFCDD2",
        accent: "#3F51B5",
      },
    },
  },
})
