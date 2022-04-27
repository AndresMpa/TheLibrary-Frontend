import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: {
      lastQuery: "",
      query: "",
      filter: [],
    },

    user: {
      name: "AndresMpa",
    },

    shoppingBag: false,

    seeBook: false,

    currentPage: 1,

    manager: false,
  },
  mutations: {
    setShoppingBar(state, shopping) {
      state.shoppingBag = shopping;
    },
    setSearchLastQuery(state, lastQuery) {
      state.search.lastQuery = lastQuery;
    },
    setSearchQuery(state, query) {
      state.search.query = query;
    },
    setSearchFilter(state, filter) {
      state.search.filter.push(filter);
    },
    setBookStatus(state, status) {
      state.seeBook = status;
    },
    setPageNumber(state, pageNumber) {
      state.currentPage = pageNumber;
    },
    setManager(state, status) {
      state.manager = status;
    },
  },
  actions: {
    changeShoppingBag({ commit }, status) {
      commit("setShoppingBar", status);
    },
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

    seeBook({ commit }) {
      commit("setBookStatus", !this.state.seeBook);
    },

    updatePage({ commit }, number) {
      commit("setPageNumber", number);
    },

    isManager({ commit }, state) {
      commit("setManager", state);
    },
  },
  modules: {},
});
