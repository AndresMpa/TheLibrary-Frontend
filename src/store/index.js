import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Validator
    manager: false,
    user: {
      information: {},
      book: [],
    },

    search: {
      lastQuery: "",
      filter: [],
      query: "",
    },

    // Paginator
    currentPage: 1,

    // Dialogs
    shoppingBag: false,
    seeBook: false,
    dawer: false,
  },
  mutations: {
    // User
    setUser(state, name) {
      state.user.information = name
    },
    addShoppingBag(state, book) {
      state.user.book.push(book);
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
      commit("setUser", data)
    },
    handleShoppingBag({ commit }, item) {
      commit("addShoppingBag", item)
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
