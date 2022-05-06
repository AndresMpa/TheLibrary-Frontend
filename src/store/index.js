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

    search: {
      lastQuery: "",
      filter: [],
      query: "",
    },

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
    setSearchLastQuery(state, lastQuery) {
      state.search.lastQuery = lastQuery;
    },
    setSearchQuery(state, query) {
      state.search.query = query;
    },
    setSearchFilter(state, filter) {
      state.search.filter.push(filter);
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
    handleShoppingBag({ commit }, item) {
      if (item[1] === "buy") {
        commit("addShoppingBag", item[0]);
      } else if (item[1] === "reserved") {
        commit("addReservation", item[0]);
      }
    },

    //Validator
    isManager({ commit }, state) {
      commit("setManager", state);
    },

    //Search
    changeQuery({ commit }, query) {
      commit("setSearchLastQuery", this.state.search.query);
      commit("setSearchQuery", query);
    },
    addFilter({ commit }, narrow) {
      if (!narrow.isArray()) {
        narrow = [narrow];
      }

      narrow.forEach((constrain) => {
        commit("setSearchFilter", constrain);
      });
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
