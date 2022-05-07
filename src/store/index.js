import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Validator
    manager: false,
    user: {
      information: {},
      reserved: [],
      book: [],
    },

    // Search
    search: "",

    // Dialogs
    shoppingBag: false,
    seeBook: false,
    dawer: false,

    // Paginator
    currentPage: 1,
  },
  mutations: {
    // User
    setUser(state, data) {
      state.user.information = data;
    },
    clearUser(state) {
      state.user.information = {};
      state.user.reserved = [];
      state.user.book = [];
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

    // Validator
    setManager(state, status) {
      state.manager = status;
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

    // Paginator
    setPageNumber(state, pageNumber) {
      state.currentPage = pageNumber;
    },
  },
  actions: {
    //User
    setUser({ commit }, data) {
      commit("setUser", data);
    },
    cleanUserSession({ commit }) {
      commit("clearUser");
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

    //Validator
    isManager({ commit }, state) {
      commit("setManager", state);
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

    // Paginator
    updatePage({ commit }, number) {
      commit("setPageNumber", number);
    },
  },
  modules: {},
});
