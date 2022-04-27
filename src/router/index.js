import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  // Client
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      public: true,
    },
    children: [
      {
        path: "/store",
        name: "Store",
        component: () => import("../views/Store.vue"),
      },
      {
        path: "/news",
        name: "News",
        component: () => import("../views/News.vue"),
      },
      {
        path: "/history",
        name: "History",
        component: () => import("../views/History.vue"),
      },
      {
        path: "/buying",
        name: "Buying",
        component: () => import("../views/Buying.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
      },
    ],
  },

  // Management (Administrator)

  {
    path: "/management",
    name: "Management",
    component: Main,

    meta: {
      public: true,
    },
    children: [
      {
        path: "/manager",
        name: "Manager",
        component: () => import("../views/Manager.vue"),
      },
      {
        path: "/add-book",
        name: "AddBook",
        component: () => import("../views/AddBook.vue"),
      },
    ],
  },

  // Login

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Log.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/ByeScreen.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
