import Vue from "vue";
import Vuex from "vuex";
import decode from "jwt-decode";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Validator
    user: {
      information: {},
      reserved: [],
      book: [],
    },
    permissions: 0,

    // Search
    search: "",

    // Dialogs
    shoppingBag: false,
    seeBook: false,
    dawer: false,
    // Crud
    seeAdd: false,
    seeList: false,
    seeDelete: false,
    seeEdit: false,

    // Paginator
    currentPage: 1,
    storyLine: 0,
    seeing: 0,
  },
  mutations: {
    // User
    setUser(state, data) {
      state.user.information = data;
    },
    setUserPermission(state, allow) {
      state.permissions = allow;
    },
    removeBook(state, element) {
      state.user.book.splice(element, element + 1);
    },
    clearBooks(state) {
      state.user.book = [];
    },
    addReservation(state, item) {
      state.user.reserved.push(item);
    },
    addShoppingBag(state, item) {
      state.user.book.push(item);
    },

    //Search
    setSearchQuery(state, query) {
      state.search = query;
    },

    //Dialogs
    setShoppingBag(state, shopping) {
      state.shoppingBag = shopping;
    },
    setBookStatus(state, status) {
      state.seeBook = status;
    },
    setDrawer(state, drawer) {
      state.drawer = drawer;
    },
    // Crud
    setCrudAdd(state, status) {
      state.seeAdd = status;
    },
    setCrudList(state, status) {
      state.seeList = status;
    },
    setCrudEdit(state, status) {
      state.seeEdit = status;
    },
    setCrudDelete(state, status) {
      state.seeDelete = status;
    },

    // Paginator
    setPageNumber(state, pageNumber) {
      state.currentPage = pageNumber;
    },
    setStoryLine(state, story) {
      state.storyLine = story;
    },
    setSeeing(state, top) {
      state.seeing = top;
    },
  },
  actions: {
    //User
    setUser({ commit }, token) {
      localStorage.setItem("token", token.tokenReturn);
      commit("setUser", decode(token.tokenReturn));
      commit("setUserPermission", decode(token.tokenReturn)["type"]);
      if (decode(token.tokenReturn)["type"] === 1) {
        router.push({ name: "Manager" }).catch(() => {
          console.log("Admin");
        });
      } else {
        router.push({ name: "Main" }).catch(() => {
          console.log("Client");
        });
      }
    },
    autoLogin({ commit }) {
      let token = localStorage.getItem("token");
      if (token) {
        commit("setUser", decode(token));
        commit("setUserPermission", decode(token)["type"]);
      }
      if (this.state.permissions === 1) {
        router.push({ name: "Manager" }).catch(() => {});
      } else {
        router.push({ name: "Store" }).catch(() => {});
      }
    },
    cleanUserSession({ commit }) {
      commit("setUser", {});
      commit("setUserPermission", 0);
      localStorage.removeItem("token");
    },

    //Bag
    handleShoppingBag({ commit }, item) {
      if (item[1] === "buy") {
        commit("addShoppingBag", item[0]);
      } else if (item[1] === "reserved") {
        commit("addReservation", item[0]);
      }
    },
    removeBookFromBag({ commit }, item) {
      commit("removeBook", item);
    },
    clearBag({ commit }) {
      commit("clearBooks");
    },

    //Search
    changeQuery({ commit }, query) {
      commit("setSearchQuery", query);
    },

    // Dialogs
    changeShoppingBag({ commit }, status) {
      commit("setShoppingBag", status);
    },
    seeBook({ commit }) {
      commit("setBookStatus", !this.state.seeBook);
    },
    showDrawer({ commit }, state) {
      commit("setDrawer", state);
    },
    seeCrud({ commit }, utility) {
      switch (utility) {
        case 0: {
          commit("setCrudAdd", !this.state.seeAdd);
          break;
        }
        case 1: {
          commit("setCrudList", !this.state.seeList);
          break;
        }
        case 2: {
          commit("setCrudEdit", !this.state.seeEdit);
          break;
        }
        case 3: {
          commit("setCrudDelete", !this.state.seeDelete);
          break;
        }
        default: {
          console.log("Error on see crud");
          break;
        }
      }
    },

    // Paginator
    updatePage({ commit }, number) {
      commit("setPageNumber", number);
    },
    seeTopBook({ commit }, book) {
      commit("setSeeing", book);
    },
    changeLine({ commit }, story) {
      commit("setStoryLine", story);
    },
  },
  modules: {},
});
