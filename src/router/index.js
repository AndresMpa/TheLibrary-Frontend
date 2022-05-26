import Vue from "vue";
import store from "../store/index";
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
        path: "/result",
        name: "LastResult",
        component: () => import("../views/Result.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/store",
        name: "Store",
        component: () => import("../views/Store.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/news",
        name: "News",
        component: () => import("../views/News.vue"),
        meta: {
          public: true,
        },
      },
      {
        path: "/story",
        name: "Story",
        component: () => import("../views/Story.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "/buying",
        name: "Buying",
        component: () => import("../views/Buying.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
        meta: {
          auth: true,
        },
      },
    ],
  },

  // Management (Administrator)

  {
    path: "/management",
    name: "Management",
    component: Main,
    meta: {
      auth: true,
    },
    children: [
      {
        path: "/manager",
        name: "Manager",
        component: () => import("../views/Manager.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "/crud-book",
        name: "CrudBook",
        component: () => import("../views/CRUDBook.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "/create-news",
        name: "CreateNews",
        component: () => import("../views/CreateNews.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "/shipping",
        name: "Shipping",
        component: () => import("../views/Shipping.vue"),
        meta: {
          auth: true,
        },
      },
    ],
  },

  // Login

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Log.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/ByeScreen.vue"),
    meta: {
      public: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Permission
router.beforeEach((to, from, next) => {
  if (from.hash !== "") {
    console.log("Using hash");
  }
  if (to.matched.some((record) => record.meta.public)) {
    next();
  } else if (store.state.user) {
    if (to.matched.some((record) => record.meta.auth)) {
      next();
    }
  } else {
    next({ name: "Management" });
  }
});

export default router;
