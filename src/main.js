import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueSweetalert2 from "vue-sweetalert2";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

const base = axios.create({
  baseURL: "http://localhost:3000/api",
});
Vue.prototype.$http = base;

axios.defaults.baseURL = "http://localhost:3000/api";

new Vue({
  router,
  store,
  vuetify,
  VueSweetalert2,
  render: (h) => h(App),
}).$mount("#app");
